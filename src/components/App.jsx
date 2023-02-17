import { GlobalStyle } from "./GlobalStyles";
import Profile from "./Profile";
import userProfile from "../external_datafiles/user.json"
export function App () {
  return <div>
    {<Profile 
    username={userProfile.username}
    tag={userProfile.tag}
    location={userProfile.location}
    avatar={userProfile.avatar}
    stats={userProfile.stats}
     />}
     <GlobalStyle /></div>

    }