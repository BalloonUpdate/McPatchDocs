import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useGlobalData from '@docusaurus/useGlobalData';

// 渲染赞助列表
const SponsorList = ({ }) => {
    // 具体的数据会由sponsor-info插件进行准备，这里直接获取结果就好。
    // 文件旁边有一个example_data.json，这是爱发电api返回的数据参考格式
    const globalData = useGlobalData();
    const data = globalData['sponsor-info']['default'];

    // 点击赞助者后打开对应的主页
    const onClick = (e) => {
        const link = 'https://afdian.com/u/' + e.user_id
        // const link = 'https://afdian.com/a/' + e.url_slug
        console.log(link);
        window.open(link)
    };

    // console.log(data);

    // 将data转换成带index的列表
    const indexedData = []
    let index = 0

    for (const d of data) {
        indexedData.push({ fstatus: d[0], index: index, raw_name: d[1].name, ...d[1].afd })
        index += 1
    }

    // 生成头像
    const avatarImage = (e) => {
        if (e.fstatus != 1) {
            return { background: 'url("https://pic1.afdiancdn.com/default/avatar/avatar-purple.png") center center / cover no-repeat' };
        }

        return { background: 'url("' + e.avatar + '") center center / cover no-repeat' };
    };

    // 生成背景图片
    const backgroundImage = (e) => {
        if (e.fstatus != 1) {
            return { };
        }

        return { background: 'url("' + e.cover + '") center center / cover no-repeat' };
    };

    return (
        <div className={styles.sponsorContainer}>
            {indexedData.map(e => (
                <div key={e.index} className={styles.sponsor} onClick={e.fstatus == 1 ? () => onClick(e) : null}>
                    <div className={styles.cover1} style={backgroundImage(e)}></div>
                    <div className={styles.avatar} style={avatarImage(e)}></div>
                    
                    <div className={styles.friendTextContainer}>
                        <div className={styles.friendTextH5}>{e.name ?? e.raw_name}</div>

                        {
                            <div className={styles.friendText}>{e.creator?.doing != null ? ('正在创作 ' + e.creator.doing) : '...'}</div> //: <div></div>
                        }
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SponsorList;

// 下面的代码是从markdown表格中解析赞助列表的，目前用不上，先注释
// const ReleaseList = ({ children }) => {
//     console.log(children);

//     const table = React.Children.toArray(children).find(child => child.type === 'table');
//     const headers = React.Children.toArray(table.props.children[0].props.children).map(e => e.props.children)[0];
//     const rows = React.Children.toArray(table.props.children[1].props.children);
//     const headerNames = headers.map(e => e.props.children)
//     const dataRows = rows.map(e => e.props.children.map(q => q.props.children));
//     // console.log(dataRows);

//     const sponsorIndex = headerNames.indexOf('赞助人');
//     const dateIndex = headerNames.indexOf('日期');
//     const avatarIndex = headerNames.indexOf('头像');
//     const linkIndex = headerNames.indexOf('链接');
//     const descIndex = headerNames.indexOf('文字');

//     if (sponsorIndex == -1 || dateIndex == -1 || avatarIndex == -1 || linkIndex == -1 || descIndex == -1)
//         return (<div>渲染数据不正确 [{sponsorIndex}, {dateIndex}, {avatarIndex}, {linkIndex}, {descIndex}]</div>)
    
//     const data = dataRows.map(e => {
//         return {
//             sponsor: e[sponsorIndex],
//             date: e[dateIndex],
//             avatar: e[avatarIndex]?.props?.children ?? '',
//             link: e[linkIndex]?.props?.children ?? '',
//             desc: e[descIndex] ?? '',
//         }
//     });

//     const onClick = (e) => {
//         console.log(e);
//         window.open(e.link)
//     };

//     // console.log(data);

//     return (
//         <div className={styles.sponsorContainer}>
//             {data.map(e => (
//                 <div key={e.sponsor + ';' + e.date} className={styles.sponsor} onClick={() => onClick(e)}>
//                     <div href={e.link}>
//                         <div>
//                             <div className={styles.avatar} style={{background: 'url("' + e.avatar + '") center center / cover no-repeat'}}></div>
                            
//                             <div className={styles.friendTextContainer}>
//                                 <div className={styles.friendTextH5}>{e.sponsor}</div>

//                                 {
//                                     e.desc != '' ? <div className={styles.friendText}>{e.desc}</div> : <div></div>
//                                 }
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ReleaseList;
