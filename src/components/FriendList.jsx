import PropTypes from 'prop-types';
import defaultImg from '../external_datafiles/defaultImg.png';
import { UlFriends, BoxFriends } from '../components/FriendList.styles';

function FriendList({ friends }) {
  return (
    <BoxFriends>
      <UlFriends>
        {friends.map(el => (
          <li key={el.id}>
            <span>{el.isOnline}</span>
            <img src={el.avatar} alt={el.name} width="48" />
            <p>{el.name}</p>
          </li>
        ))}
      </UlFriends>
    </BoxFriends>
  );
}
// export function FriendListItem(avatar, name, isOnline) {}
export default FriendList;
