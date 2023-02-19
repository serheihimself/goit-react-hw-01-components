import PropTypes from 'prop-types';
import defaultImg from '../external_datafiles/defaultImg.png';
import {
  Card,
  CardProfile,
  CardDescription,
  TitleProfile,
  TagProfile,
  LocationProfile,
  ListProfile,
  BoxList,
} from './Profile.styles';

function Profile({ username, tag, location, avatar = defaultImg, stats }) {
  return (
    <Card>
      <CardProfile>
        <CardDescription>
          <img
            style={{
              borderRadius: '50%',
              marginBottom: '30px',
              alignItems: 'center',
            }}
            src={avatar ?? defaultImg}
            alt={username}
            className="avatar"
            width="150"
            height="150"
          />
          <TitleProfile>{username}</TitleProfile>
          <TagProfile>{tag}</TagProfile>
          <LocationProfile>{location}</LocationProfile>
        </CardDescription>
        <ListProfile>
          <BoxList>
            <span
              style={{ color: 'grey', fontWeight: '500' }}
              className="label"
            >
              Followers
            </span>
            <span
              style={{ color: 'black', fontWeight: '900' }}
              className="quantity"
            >
              {stats.followers}
            </span>
          </BoxList>
          <BoxList>
            <span
              style={{ color: 'grey', fontWeight: '500' }}
              className="label"
            >
              Views
            </span>
            <span
              style={{ color: 'black', fontWeight: '900' }}
              className="quantity"
            >
              {stats.views}
            </span>
          </BoxList>
          <BoxList>
            <span
              style={{ color: 'grey', fontWeight: '500' }}
              className="label"
            >
              Likes
            </span>
            <span
              style={{ color: 'black', fontWeight: '900' }}
              className="quantity"
            >
              {stats.likes}
            </span>
          </BoxList>
        </ListProfile>
      </CardProfile>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
