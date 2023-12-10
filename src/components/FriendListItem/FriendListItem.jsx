import css from './friendListItem.module.css'

export const FriendListItem = ({avatar, name , isOnline}) => {
  return (
    <li className="item">
  {isOnline ? <span className={css.status} style={{ backgroundColor:"green"}}></span> : <span className={css.status} style={{ backgroundColor:"red"}}></span>}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
</li>
  )
}
