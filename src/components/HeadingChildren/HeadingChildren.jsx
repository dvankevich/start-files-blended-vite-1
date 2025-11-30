import styles from './HeadingChildren.module.css';
import clsx from 'clsx';

const Heading = ({ children, top, bottom, tag: Tag = 'h2' }) => {
  return (
    <Tag
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
      })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
