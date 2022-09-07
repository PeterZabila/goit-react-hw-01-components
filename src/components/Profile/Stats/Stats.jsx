import { ProfileStats } from "./Stats.styled";


export default function Stats ({stats}) {
  const { followers, views, likes } = stats;
    return (
        <ProfileStats>
            <li>
              <span className="label">Followers</span>
              <span className="quantity">{followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{likes}</span>
            </li>
        </ProfileStats>
    )
}