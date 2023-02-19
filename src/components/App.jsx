import { GlobalStyle } from './GlobalStyles';
import Profile from './Profile';
import Statistics from './Statistics';
import userProfile from '../external_datafiles/user.json';
import dataStats from '../external_datafiles/data.json';
import FriendList from '../components/FriendList';
import friendData from '../external_datafiles/friends.json';
export function App() {
  return (
    <div>
      <GlobalStyle />
      {
        <Profile
          username={userProfile.username}
          tag={userProfile.tag}
          location={userProfile.location}
          avatar={userProfile.avatar}
          stats={userProfile.stats}
        />
      }
      {<Statistics title="UPLOAD STATS" stats={dataStats} />}
      {<FriendList friends={friendData} />}
    </div>
  );
}
