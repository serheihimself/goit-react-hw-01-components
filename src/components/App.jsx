import { GlobalStyle } from './GlobalStyles';
import Profile from './Profile';
import Statistics from './Statistics';
import userProfile from '../external_datafiles/user.json';
import dataStats from '../external_datafiles/data.json';
export function App() {
  return (
    <div>
      {
        <Profile
          username={userProfile.username}
          tag={userProfile.tag}
          location={userProfile.location}
          avatar={userProfile.avatar}
          stats={userProfile.stats}
        />
      }
      <GlobalStyle />
    </div>
  );
}
