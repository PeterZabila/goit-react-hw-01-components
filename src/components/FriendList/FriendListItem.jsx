import { Chip, Friend } from './FriendListItem.styled'

export default function FriendListItem ({avatar, name, isOnline }) {
    return (
        
        <Friend>
           <Chip isOnline={isOnline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Friend>
    )
}