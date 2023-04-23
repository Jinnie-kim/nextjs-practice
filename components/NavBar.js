import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'; // css module

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={[styles.link, router.pathname === '/about' ? styles.active : ''].join(' ')}>About</a>
      </Link>
    </nav>
  );
}
