
import { Profile } from './Profile/Profile';
import { UploadStats } from './UploadStats/UploadStats';
import user from './user/user.json';

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
    <UploadStats/>
    </div>
  );
};


