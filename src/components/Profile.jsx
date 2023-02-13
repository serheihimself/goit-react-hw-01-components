import PropTypes  from "prop-types"

function Profile({username, tag, location, avatar, stats}){
    return <div className="profile">
        <div className="description">
            <img src= {avatar} alt={username} className="avatar" />
            <p username={username} className="name">Petra Marica</p>
            <p tag={tag} className="tag">@pmarica</p>
            <p location={location} className="location">Salvador, Brasil</p>
        </div>
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">1000</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">2000</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">3000</span>
            </li>
        </ul>
    </div>
}

export default Profile