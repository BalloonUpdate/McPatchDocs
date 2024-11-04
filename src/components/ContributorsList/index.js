import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ContributorsList = ({ projectName, repoUrl }) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(repoUrl);
        setContributors(response.data);
      } catch (error) {
        console.error(`Error fetching contributors for ${projectName}:`, error);
      }
    };

    fetchContributors();
  }, [projectName, repoUrl]);

  return (
    <div className={styles.container}>
      <h2 className={styles.projectTitle}>{projectName}</h2>
      <div className={styles.contributorsGrid}>
        {contributors.map(contributor => (
          <div key={contributor.id} className={styles.contributorItem}>
            <Link to={contributor.html_url} target="_blank" rel="noopener noreferrer">
              <img src={contributor.avatar_url} alt={contributor.login} className={styles.avatar} />
              <div className={styles.contributorName}>{contributor.login}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorsList;
