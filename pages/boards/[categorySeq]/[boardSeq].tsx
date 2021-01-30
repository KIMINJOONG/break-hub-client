import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

const Detail = () => {
  const router = useRouter();
  const { categorySeq, boardSeq } = router.query;

  useEffect(() => {}, []);
  return <div>게시글 상세</div>;
};

export default Detail;
