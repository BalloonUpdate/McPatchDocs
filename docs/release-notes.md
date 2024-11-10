---
title: McPatch V2 更新日志
authors: [asforest, Cnzw]
tags: [McPath, releases]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ReleaseList from '@site/src/components/ReleaseList';

<Tabs>
    <TabItem value="manager" label="管理端" default>
        <ReleaseList
            api="https://api.github.com/repos/BalloonUpdate/McPatch2/releases"
            filter="m"
        />
    </TabItem>
    <TabItem value="client" label="客户端" >
        <ReleaseList
            api="https://api.github.com/repos/BalloonUpdate/McPatch2/releases"
            filter="c"
        />
    </TabItem>
</Tabs>

