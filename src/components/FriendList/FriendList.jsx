import FriendListItem from './FriendListItem';

export default function FriendList ({friends}) {
    const allFriends = friends.map(({avatar, name, isOnline, id}) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
    })
    return (

        <div className="container">
                  <ul>{allFriends}</ul>
        </div>
  
    )
}