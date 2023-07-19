import PropTypes from 'prop-types';
import defaultImage from './images/default-profile-picture.jpg';

export default function Profile ({
userName, 
tag, 
location, 
profilePhoto = defaultImage, 
followers, 
views, 
likes,
}) {
    return(
        <div class="profile">
  <div class="description">
    <img
      src={profilePhoto}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{userName}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>
    );
}

Profile.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  profilePhoto: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};