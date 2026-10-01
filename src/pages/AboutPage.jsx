import cityscapeMarc from '../../src/assets/cityscape-by-marc-olivier-jodoin.webp';
import camera from '../../src/assets/camera-by-ilman-muhammad.webp';
import cityscapePedro from '../../src/assets/cityscape-by-pedro-domingos.webp';

import css from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <h2>Who we are</h2>
      <p>Skiff Systems is a Canada-based cutting-edge software company committed to transforming the landscape of security and IT services. With a keen focus on innovation, our team of skilled professionals creates exceptional software solutions customized to meet the unique needs of our clients.</p>
      <img className={css.contentImg} src={cityscapeMarc} alt="Cityscape by Marc-Olivier Jodoin" />
      <h2>Our Vision</h2>
      <p>We envision a future where security and IT services seamlessly integrate to empower individuals and organizations worldwide. Our commitment to continuous innovation drives us to pioneer transformative software solutions, setting new standards for excellence and security in the digital landscape.</p>
      <img className={css.contentImg} src={camera} alt="PTZ camera on a blue sky background by Pedro Domingos" />
      <h2>Our Values</h2>
      <ul className={css.list}>
        <li>
          <h3>Minimalism</h3>
          <p>We value minimalism in our approach, emphasizing simplicity and efficiency in all aspects of our work.</p>
        </li>

        <li>
          <h3>Excellence</h3>
          <p>We strive for excellence in every aspect of our work. From software development to client support, we set high standards to deliver exceptional quality and value.</p>
        </li>

        <li>
          <h3>Integrity</h3>
          <p>Integrity is the foundation of our relationships — with clients, partners, and within our team. We uphold the highest ethical standards, fostering trust and transparency in everything we do.</p>
        </li>

        <li>
          <h3>Adaptability</h3>
          <p>In the dynamic landscape of technology, we remain adaptable and responsive. We embrace change, leveraging emerging trends to stay ahead and provide solutions that stand the test of time.</p>
        </li>

        <li>
          <h3>Collaboration</h3>
          <p>We believe in the power of collaboration. By working closely with clients, partners, and each other, we harness collective expertise to drive innovation and achieve shared success.</p>
        </li>

        <li>
          <h3>Empowerment</h3>
          <p>We empower our team members to excel and grow. Through continuous learning, a supportive environment, and opportunities for professional development, we enable individuals to reach their full potential.</p>
        </li>
      </ul>
      <img className={css.contentImg} src={cityscapePedro} alt="Cityscape during sunset by Pedro Domingos" />
    </>
  );
};

export default AboutPage;
