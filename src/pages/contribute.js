import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import ContributorsList from '../components/ContributorsList';
import styles from './contributors.module.css'; // 创建一个 CSS 模块

const ContributorsPage = () => {
  return (
    <Layout title="Contributors" description="List of contributors to the project">
      <Head>
        <title>贡献者名单 | McPatchDocs</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>贡献者列表</h1>
        <ContributorsList
          projectName="V2 管理端&客户端贡献者"
          repoUrl="https://api.github.com/repos/BalloonUpdate/McPatch2/contributors"
        />
        <ContributorsList
          projectName="文档贡献者"
          repoUrl="https://api.github.com/repos/BalloonUpdate/McPatchDocs/contributors"
        />
      </div>
    </Layout>
  );
};

export default ContributorsPage;
