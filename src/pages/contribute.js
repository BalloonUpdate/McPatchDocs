import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import ContributorsList from '../components/ContributorsList';
import styles from './contributors.module.css';

const ContributorsPage = () => {
  return (
    <Layout title="贡献者" description="List of contributors to the project">
      <div className={styles.container}>
        <h1 className={styles.title}>贡献者列表</h1>
        
        <ContributorsList projectName="代码贡献者" repos="BalloonUpdate/McPatch2,BalloonUpdate/JarClient,BalloonUpdate/BalloonServer"/>

        <ContributorsList projectName="文档贡献者" repos="BalloonUpdate/McPatchDocs,BalloonUpdate/Docs"/>
      </div>
    </Layout>
  );
};

export default ContributorsPage;
