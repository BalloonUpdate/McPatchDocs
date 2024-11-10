import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ReleaseList = ({ api, filter }) => {
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await axios.get(api);

                console.log(response.data);

                let list = [];

                for (const release of response.data) {
                    if (release.tag_name[0] == filter) {
                        list.push(release);
                    }
                }

                setReleases(list);
            } catch (error) {
                console.error(`Error fetching contributors for ${projectName}:`, error);
            }
        };

        fetchReleases();
    }, [api]);

    function fmt(isoString) {
        const date = new Date(isoString);

        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, 
        };

        return date.toLocaleString('zh-CN', options).replace(/\//g, '-');
    }

    return (
        <div className={styles.container}>
            {releases.map(re => (
                <div key={re.id} style={{paddingBottom: '2rem'}}>
                    <h2>
                        <Link to={re.html_url} target="_blank" rel="noopener noreferrer">
                            {re.name}（{fmt(re.created_at)}）
                        </Link>
                    </h2>
                    
                    {re.body}
                    
                </div>
            ))}
        </div>
    );
};

export default ReleaseList;
