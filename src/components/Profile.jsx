import propType from "prop-types"
function Profile({username, tag, location, avatar, stats}){
    return <div className="profile">
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
    </div>
}

Profile.propType = {
    username: propType.string,
    tag: propType.string,
    location:propType.string,
    avatar: propType.string,
    stats: propType.number
}

export default Profile