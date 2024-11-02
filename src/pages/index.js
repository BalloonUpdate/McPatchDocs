import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageIntro from '/src/components/HomepageIntro';
import HomepageFeatures from '/src/components/HomepageFeatures';
import HomepageTestimonials from '/src/components/HomepageTestimonials';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            花 10 分钟搭建一个
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="McPath，更新客户端文件，Mod 服好帮手">
        <div>
        <div className={styles.HomepageTips}>
          给我们的组织
            <Link to="https://github.com/BalloonUpdate">
              点个 follow 吧
            </Link>
          </div>
        </div>
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageFeatures />
        <HomepageTestimonials />
      </main>
    </Layout>
  );
}
