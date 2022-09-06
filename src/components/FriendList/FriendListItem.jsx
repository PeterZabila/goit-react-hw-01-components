import { Chip } from './FriendListItem.styled'

export default function FriendListItem ({avatar, name, isOnline }) {
    return (
        <li className="item">
           <Chip isOnline={isOnline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={name}></p>
        </li>
    )
}