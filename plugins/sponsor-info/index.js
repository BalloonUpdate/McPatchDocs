import axios from 'axios';
import fs from 'fs/promises';
import util from 'node:util';

// 代表从爱发电接口获取赞助者信息的插件
export default async function(context, options) {
    // console.log("ok");
    // console.log(context);

    // console.log(json);
    return {
        name: 'sponsor-info',
        async loadContent() {
            // 读取赞助者列表
            const content = await fs.readFile('./docs/sponsor-list.json');
            const sponsors = JSON.parse(content);

            const data = [];
    
            // 依次获取每位赞助者信息
            for (const sponsor of sponsors) {
                // 爱发电用户id
                const afd = sponsor[0]

                // 赞助时间
                const date = sponsor[1]

                // 老板如何称呼
                const name = sponsor[2]

                // 如果没有填写爱发电链接，就会返回0作为状态码
                if (afd == '') {
                    data.push([0, {
                        name: name,
                        reason: 'no afd',
                    }])

                    continue
                }

                console.log('fetch afdian data: ' + name);
                
                try {
                    // 发起请求
                    const response = await axios({
                        method: 'get',
                        // url: 'https://afdian.com/api/user/get-profile-by-slug?url_slug=' + afd,
                        url: 'https://afdian.com/api/user/get-profile?user_id=' + afd,
                        proxy: false,
                    })

                    // console.log('response data: ');
                    // console.log(util.inspect(response.data, {
                    //     colors: true,
                    //     depth: 4,
                    // }));
                    
                    // 检查爱发电返回的状态码
                    if (response.data.ec != 200) {
                        throw `ec: ${response.data.ec}, em: ${response.data.em}`
                    }

                    const d = response.data

                    // 获取成功，会返回1作为状态码
                    data.push([1, {
                        name: name,
                        afd: d.data.user,
                    }])
                } catch (error) {
                    // console.log(error);
                    // throw error

                    // 有爱发电id，但是获取失败，会返回-1作为状态码
                    data.push([-1, {
                        name: name,
                        err: `Error fetching: ${error}`,
                    }])
                    // console.log('field: ' + error);
                }
            }
            
            return data
        },
        async contentLoaded({content, actions}) {
            // 将数据存储起来，给后面的组件进行读取
            actions.setGlobalData(content)
        },
    };
  }