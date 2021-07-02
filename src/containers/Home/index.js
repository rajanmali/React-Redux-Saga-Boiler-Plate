/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { getUserList } from './actions';

// Components

// Helper functions
import { sanitisePhoneNumber } from '../../utils/helperFunctions';

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
          {getUserListRequesting && <h2>Loading...</h2>}
          {getUserListResponse?.[0] &&
            getUserListResponse.map((user) => (
              <div className="col-sm-4" key={user.id}>
                <div className="profile">
                  <div className="image"></div>
                  <h5>{user.name}</h5>
                  <p className="username">@{user.username}</p>
                  <p>
                    Phone:{' '}
                    <a href={`tel:${sanitisePhoneNumber(user.phone)}`}>
                      {sanitisePhoneNumber(user.phone)}
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.website}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          {!!getUserListError && <h1>Error!!</h1>}
        </div>
      </div>
    </div>
  );
};

export default Home;
