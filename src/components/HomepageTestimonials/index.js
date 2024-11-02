// src/components/HomepageTestimonials.js
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import yaml from 'js-yaml';

const testimonials = [
  {
    name: '四月森林',
    id: 'asforest',
    avatar: 'https://github.com/asforest.png',
    quote: 'McPatch 的部署非常轻量化，资源占用非常少。即便是内存只有512Mb的树莓派1b也能流畅运行。非常适合我这样电脑配置有限的服主',
  },
  {
    name: '御坂秋生',
    id: 'NiuBoss123',
    avatar: 'https:/github.com/NiuBoss123.png',
    quote: '服务器所使用的 mod 更新速度非常快，感谢 McPatch 方便我们分发 mod，这下再也不需要每次都往群里面传最新的 mod 了',
  },
  {
    name: '薄荷の尾巴',
    id: 'mintdesu',
    avatar: 'https://github.com/mintdesu.png',
    quote: '服务器每次@全体要更新 mod 时我就像是变成了客服，现在有了 McPatch 后直接根源上解决了这个问题，非常好用！快去用！',
  },
];

function HomepageTestimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.testimonialsTitle}>被许多服主追捧</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.testimonialAvatar}>
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <strong>{testimonial.name}</strong>
                <br />
                <div className={styles.testimonialId}>@{testimonial.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageTestimonials;
