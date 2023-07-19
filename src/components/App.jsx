import User from './User';
import user from './user.json';


export default function App() {
  return (
    <div>
      {user.map(userProfile => (
        <User
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
