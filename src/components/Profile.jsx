import PropTypes from "prop-types"
import { Card } from "./Profile.styles"
import { CardProfile } from "./Profile.styles"
import { CardDescription } from "./Profile.styles"
import { TitleProfile } from "./Profile.styles"
import { TagProfile } from "./Profile.styles"
import { LocationProfile } from "./Profile.styles"
import { ListProfile } from "./Profile.styles"
import { BoxList } from "./Profile.styles"

function Profile({username, tag, location, avatar, stats}){
    return <Card>
    <CardProfile>
        <CardDescription>
            <img style={{borderRadius: "50%", marginBottom: "30px", alignItems: "center"}} src= {avatar} alt={username} className="avatar" width="150" height="150"/>
            <TitleProfile>{username}</TitleProfile>
            <TagProfile>{tag}</TagProfile>
            <LocationProfile>{location}</LocationProfile>
        </CardDescription>
        <ListProfile>
            <BoxList>
                <span style={{color: "grey", fontWeight: "500" }} className="label">Followers</span>
                <span style={{color: "black", fontWeight: "900" }} className="quantity">{stats.followers}</span>
            </BoxList>
            <BoxList>
                <span style={{color: "grey", fontWeight: "500" }} className="label">Views</span>
                <span style={{color: "black", fontWeight: "900" }} className="quantity">{stats.views}</span>
            </BoxList>
            <BoxList>
                <span style={{color: "grey", fontWeight: "500" }} className="label">Likes</span>
                <span style={{color: "black", fontWeight: "900" }} className="quantity">{stats.likes}</span>
            </BoxList>
        </ListProfile>
    </CardProfile>
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