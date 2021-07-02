// Helper functions
import { sanitisePhoneNumber } from '../../utils/helperFunctions';

const UserCard = ({ user }) => {
  return (
    <div className="col-sm-4">
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
          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
