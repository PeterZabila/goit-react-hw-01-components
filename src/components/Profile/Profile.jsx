import Stats from './Stats/Stats';
import { Description, Avatar } from './Profile.styled';

export default function Profile ({ username, tag, location, avatar, stats}) {
    return (
        <div className="container">
            <Description>
                <Avatar
                src={avatar}
                alt="User avatar"
                />
                <h3 className="name">{username}</h3>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </Description>

             <Stats stats={stats}/>
        </div>
    )
}