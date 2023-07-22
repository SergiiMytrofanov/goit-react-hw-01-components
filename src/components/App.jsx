import Profile from './Profile/Profile';
import user from './Profile/';


export default function App() {
  return (
    <div>
      {user.map(userProfile => (
        <Profile
        userName={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        profilePhoto={userProfile.avatar}
        followers={userProfile.stats.followers}
        views={userProfile.stats.views}
        likes={userProfile.stats.likes}
        />
      ))}
    </div>
  );
};
