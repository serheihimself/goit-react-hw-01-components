import React from 'react';
import defaultImg from '../../external_datafiles/defaultImg.png';
import { ListFriends, Status, FriendName } from './FriendList.styles';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListFriends>
      {<Status isOnline={isOnline} />}
      <img src={avatar ?? defaultImg} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </ListFriends>
  );
}

export default FriendListItem;
