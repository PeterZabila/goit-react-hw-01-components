import FriendListItem from './FriendListItem';

export default function ({friends}) {
    const allFriends = friends.map(({avatar, name, isOnline, id}) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
    })
    return (
        <ul>{allFriends}</ul>
    )
}