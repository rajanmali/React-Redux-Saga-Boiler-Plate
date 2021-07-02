/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { getUserList } from './actions';

// Components
import Footer from '../../components/Footer/index';

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
        {getUserListRequesting && <h2>Loading...</h2>}
        {getUserListResponse?.[0] &&
          getUserListResponse.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Phone Number: {user.phone}</p>
              <p>Website: {user.website}</p>
            </div>
          ))}
        {!!getUserListError && <h1>Error!!</h1>}
      </div>
    </div>
  );
};

export default Home;
