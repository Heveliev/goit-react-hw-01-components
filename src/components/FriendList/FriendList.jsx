import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
<ul className={css.friend_list}>
    {friends.map(friend=>(<FriendListItem key={friend.id}
    name={friend.name}
    avatar={friend.avatar}
    isOnline={friend.isOnline}/>
    ))}

</ul>
    )
}

FriendList.protoType = {
    friends: PropTypes.array.isRequired,
}