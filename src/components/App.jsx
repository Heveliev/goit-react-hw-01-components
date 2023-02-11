
import { Profile } from './Profile/Profile';
import { UploadStats } from './UploadStats/UploadStats';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './user/user.json';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';
const {username,tag,location,avatar,stats} = user;

export const App = () => {
  return (
    <div>
      <Profile 
      key={username}
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}/>
    <UploadStats title="Upload stats"/>
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transactions}/>
    </div>
  );
};


