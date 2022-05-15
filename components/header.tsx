import Link from 'next/link';
import styles from 'public/styles/components/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>Logo</a>
      </Link>
      <nav className={styles.mainNav}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
