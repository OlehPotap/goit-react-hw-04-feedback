import styles from '../Section/section.module.css';

const Section = ({ title, children } = {}) => {
  return (
    <section className={styles.section}>
      {title}
      {children}
    </section>
  );
};

export default Section;
