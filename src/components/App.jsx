import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionsHistory/Transactions';
import userProfiles from '../data/userProfiles.json';
import statBase from '../data/statBase.json';
import transHist from '../data/transactionsData.json';


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

      <Statistics 
      title="Upload stats" 
      statData={statBase} 
      />

<TransactionHistory 
      title="Transaction history" 
      itemsTable={transHist} 
      />
    </div>
  );
}
