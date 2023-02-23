import { GlobalStyle } from '../styles/GlobalStyles';
import Profile from './Profile/Profile';
import Statistics from './Statisctics/Statistics';
import userProfile from '../external_datafiles/user.json';
import dataStats from '../external_datafiles/data.json';
import FriendList from './FriendList/FriendList';
import friendData from '../external_datafiles/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionData from '../external_datafiles/transactions.json';

export function App() {
  return (
    <div>
      <GlobalStyle />
      <Profile
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="UPLOAD STATS" stats={dataStats} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
}
