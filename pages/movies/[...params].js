// /movies/12312313 로 접속하면 나오는 페이지
// url에 변수를 넣는 방법 ['variable'].js

import Seo from '../../components/Seo';
import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      {/* router.query.title은 유저가 홈에서 상세페이지로 들어올때만 존재하는 값이다. */}
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
