import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '对 Minecraft 的兼容性强',
    //Svg: require('/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        McPatch 作为独立项目，不基于 Minecraft，意味着可以基于任意一个 Minecraft 版本部署，稳定性有保障
      </>
    ),
  },
  {
    title: '对 Minecraft 服主友好',
    //Svg: require('/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        McPatch 是一个提供给 Minecraft 服主的工具，只需要在服务器上打包好各类资源，就可分发给每一位玩家
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.centered)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}