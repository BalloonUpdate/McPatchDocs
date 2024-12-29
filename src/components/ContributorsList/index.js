import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ContributorsList = ({projectName, repos}) => {
  const [contributors, setContributors] = useState([]);

  const fetchContributors = async () => {
    let contributors = []

    try {
      for (const repo of repos.split(',')) {
        const url = 'https://api.github.com/repos/' + repo + '/contributors'
        const response = await axios.get(url);

        for (const people of response.data) {
          if (people.login == 'dependabot[bot]')
            continue
          contributors.push(people)
        }
      }
    } catch (error) {
      console.error(`Error fetching contributors for ${projectName}:`, error);
      contributors = []
    }

    return contributors
  };
  
  useEffect(() => {
    fetchContributors().then(e => setContributors(e))
  }, [projectName, repos]);
  
  const renderList = () => {
    if (contributors.length == 0) {
      return <div>加载中...</div>
    }

    return contributors.map(contributor => (
      <div key={contributor.id} className={styles.contributorItem}>
        <Link to={contributor.html_url} target="_blank" rel="noopener noreferrer">
          <img src={contributor.avatar_url} alt={contributor.login} className={styles.avatar} />
          <div className={styles.contributorName}>{contributor.login}</div>
        </Link>
      </div>
    ))
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.projectTitle}>{projectName}</h2>
      <div className={styles.contributorsGrid}>
        {renderList()}
      </div>
    </div>
  );
};

export default ContributorsList;
