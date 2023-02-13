import Profile from "./Profile";
import userProfile from ""
export const App = () => {
  return (
    <div>{
      userProfile.map(el=><div>
        <Profile 
        username={el.username}
        tag={el.tag}
        location={el.location}
        avatar={el.avatar}
         />
        </div>)}</div>
  );
};
