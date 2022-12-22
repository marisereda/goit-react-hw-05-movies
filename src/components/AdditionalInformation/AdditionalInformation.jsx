import { Outlet, Link } from 'react-router-dom';
const AdditionalInformation = () => {
  return (
    <div>
      <p>Additional menu</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdditionalInformation;
