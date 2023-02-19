import PropTypes from 'prop-types';
import defaultImg from '../external_datafiles/defaultImg.png';
import {
  UlFriends,
  BoxFriends,
  ListFriends,
  OnOnlineStatus,
  OffOnlineStatus,
  FriendName,
} from '../components/FriendList.styles';

function FriendList({ friends }) {
  return (
    <BoxFriends>
      <UlFriends>
        {friends.map(el => (
          <ListFriends key={el.id}>
            {el.isOnline ? <OnOnlineStatus /> : <OffOnlineStatus />}
            <img src={el.avatar} alt={el.name} width="48" />
            <FriendName>{el.name}</FriendName>
          </ListFriends>
        ))}
      </UlFriends>
    </BoxFriends>
  );
}

export default FriendList;
