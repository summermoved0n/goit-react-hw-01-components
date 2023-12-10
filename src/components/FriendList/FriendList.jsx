import css from './friendList.module.css'
import {FriendListItem} from '../FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name , isOnline }) => (
        <FriendListItem
          key={name}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  )
}
