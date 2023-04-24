// /movies/12312313 로 접속하면 나오는 페이지
// url에 변수를 넣는 방법 ['variable'].js

import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      {/* router.query.title은 유저가 홈에서 상세페이지로 들어올때만 존재하는 값이다. */}
      <h4>{router.query.title || 'Loading...'}</h4>
    </div>
  );
}
