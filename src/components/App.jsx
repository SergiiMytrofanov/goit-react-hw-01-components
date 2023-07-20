import Profile from './Profile';
import user from './user.json';


export default function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        profilePhoto={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
      
    </div>
  );
};
