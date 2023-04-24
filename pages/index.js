import { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();

  const onClick = (id) => {
    router.push(`/movies/${id}`); // route 하는 방법 2.router
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => {
        return (
          <div onClick={() => onClick(movie.id)} className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>
              {/* route 하는 방법 1.Link */}
              <Link href={`/movies/${movie.id}`} legacyBehavior>
                {movie.original_title}
              </Link>
            </h4>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이 함수의 이름은 꼭 getServerSideProps로 지어야 한다.
// 원한다면 async await을 사용할 수 있다.
export async function getServerSideProps() {
  // api key를 이 곳에 쓰면 절대로 client에서 확인할 수 없다.
  // server에서만 실행된다.
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      // 원하는 데이터를 넣을 수 있다.
      results,
    },
  };
}
