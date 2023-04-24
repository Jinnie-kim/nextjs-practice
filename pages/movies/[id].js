// /movies/12312313 로 접속하면 나오는 페이지
// url에 변수를 넣는 방법 ['variable'].js

import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return 'detail';
}
