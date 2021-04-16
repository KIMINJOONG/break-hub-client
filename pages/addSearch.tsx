import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddSearchTemplate from '../components/templates/AddSearchTemplate';
import { RootState } from '../reducers';

const AddSearch = () => {
  const { me } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!me) {
      void router.push('/login');
    }
  }, [me]);
  return <AddSearchTemplate></AddSearchTemplate>;
};

export default AddSearch;
