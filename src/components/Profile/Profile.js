import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({ avatar, username, tag, location, stats} ) =>{
    return (
        <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt={username}
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.item}>
      <span className={s.label}>Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes ={
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
      })
}

export default Profile