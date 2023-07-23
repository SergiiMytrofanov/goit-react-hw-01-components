import PropTypes from 'prop-types';
import defaultImage from './images/default-profile-picture.jpg';
import styles from './Profile.module.css';

export default function Profile({
  userName,
  tag,
  location,
  profilePhoto = defaultImage,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={profilePhoto} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
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
