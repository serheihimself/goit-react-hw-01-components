import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { UlFriends, BoxFriends } from './FriendList.styles';

function FriendList({ friends }) {
  return (
    <BoxFriends>
      <UlFriends>
        {friends.map(el => (
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            key={el.id}
          />
        ))}
      </UlFriends>
    </BoxFriends>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
