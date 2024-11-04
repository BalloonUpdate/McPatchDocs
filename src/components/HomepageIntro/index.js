// src/components/HomepageIntro.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function HomepageIntro() {
  return (
    <div className={clsx('container', styles.introContainer)}>
      <div className={styles.introSection}>
        <div className={styles.introImage}>
          <img src="./img/index/image-1.png" alt="Intro Image" />
        </div>
        <div className={styles.introText}>
          <h2>
            McPatch 不仅提供了便捷的客户端文件更新功能，还支持多种 Mod 服的配置和优化。无论你是新手还是老手，McPath 都能满足你的需求。
          </h2>
        </div>
      </div>
      <div className={styles.introSection}>
        <div className={styles.introText}>
          <h2>
            McPatch 不挑网络环境。不仅支持主流通信协议，还有开箱即用的私有协议，让你在任何网络环境下都能轻松使用。
          </h2>
        </div>
        <div className={styles.introImage}>
          <img src="./img/index/image-2.png" alt="Intro Image" />
        </div>
      </div>
      <div className={styles.introSection}>
        <div className={styles.introImage}>
          <img src="./img/index/image-3.png" alt="Intro Image" />
        </div>
        <div className={styles.introText}>
          <h2>
            McPatch 十分轻量。可以忽略不计的运行占用，不超过 20Mb 的程序大小，再低配置的服务器都可以运作起来。
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomepageIntro;
