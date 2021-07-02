/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { getUserList } from './actions';

// Components
import Spinner from '../../components/Spinner/index';
import UserCard from '../../components/UserCard/index';

const Home = () => {
  const dispatch = useDispatch();

  const getUserListRequesting = useSelector(
    (state) => state.homeData.getUserListRequesting
  );
  const getUserListResponse =
    useSelector((state) => state.homeData.getUserListResponse) || [];
  const getUserListError =
    useSelector((state) => state.homeData.getUserListError) || '';

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div id="wrapper">
      <div className="container">
        <h1 style={{ color: 'white' }}>User List</h1>
        <div className="row">
          {getUserListRequesting && <Spinner />}
          {getUserListResponse?.[0] &&
            getUserListResponse.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          {!!getUserListError && <h1>Error!!</h1>}
        </div>
      </div>
    </div>
  );
};

export default Home;
