import { Profile } from "../Profile/Profile";
import PropTypes from 'prop-types';
import css from './AllBox.module.css';

export const AllBox = ({data}) => {
    const {username,tag,location,avatar,stats} = data;
return (
    <div className={css.box}>
        <Profile key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
          />
</div>
    )
}


AllBox.propTypes ={
    data: PropTypes.object.isRequired,
}