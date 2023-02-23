import PropTypes from 'prop-types';
import defaultImg from '../../external_datafiles/defaultImg.png';
import {
  Card,
  CardProfile,
  CardDescription,
  ImgProfile,
  TitleProfile,
  TagProfile,
  LocationProfile,
  ListProfile,
  BoxList,
  SpanTitle,
  SpanValue,
} from './Profile.styles';

function Profile({ username, tag, location, avatar = defaultImg, stats }) {
  return (
    <Card>
      <CardProfile>
        <CardDescription>
          <ImgProfile src={avatar ?? defaultImg} alt={username} />
          <TitleProfile>{username}</TitleProfile>
          <TagProfile>{tag}</TagProfile>
          <LocationProfile>{location}</LocationProfile>
        </CardDescription>
        <ListProfile>
          <BoxList>
            <SpanTitle>Followers</SpanTitle>
            <SpanValue>{stats.followers}</SpanValue>
          </BoxList>
          <BoxList>
            <SpanTitle>Views</SpanTitle>
            <SpanValue>{stats.views}</SpanValue>
          </BoxList>
          <BoxList>
            <SpanTitle>Likes</SpanTitle>
            <SpanValue>{stats.likes}</SpanValue>
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
