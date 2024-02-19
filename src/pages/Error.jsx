import valorantBG from '../assets/map_bg5.webp';
import valorantLOGO from '../assets/vlr_logo.png';

// hooks
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <div className="bg fade-out">
        <img src={valorantBG} alt="background"></img>
      </div>
      <div className="main__title__error">
        <div className="header__logo">
          <Link to="/">
            <img src={valorantLOGO} alt="logo" />
          </Link>
        </div>

        <h1>Please return to a valid page.</h1>
        <p>Click in the icon to return to home.</p>
      </div>
    </div>
  );
};

export default Error;
