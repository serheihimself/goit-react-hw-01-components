import PropTypes from "prop-types"
import { Card } from "./Profile.styles"
import { CardProfile } from "./Profile.styles"
function Profile({username, tag, location, avatar, stats}){
    return <Card>
    <div className="profile">
    <CardProfile>
        <div className="description">
            <img src= {avatar} alt={username} className="avatar" width="120"/>
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
        </CardProfile>
    </div>
    </Card>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location:PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}

export default Profile