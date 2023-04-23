import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      {/* 독립적으로 동작한다. */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
