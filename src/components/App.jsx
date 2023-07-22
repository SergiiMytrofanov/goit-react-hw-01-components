import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userProfiles from '../data/userProfiles.json';
import statBase from '../data/statBase.json'




export default function App() {
  return (
    <div>
      
      {userProfiles.map(userProfile => (
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

      {statBase.map(statisticData => (
        <Statistics
        id={statisticData.id}
        title={statisticData.label}
        statData={statisticData.percentage}
      />
        ))}
    </div>
  );
};
