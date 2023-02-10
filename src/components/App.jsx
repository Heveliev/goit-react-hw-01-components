// import {Profile} from 'components/Profile/Profile';
import { AllBox } from 'components/AllBox/AllBox';
import user from './user/user.json';

export const App = () => {
  return (
    <div>
      <AllBox data={user}/>
    </div>
  );
};
