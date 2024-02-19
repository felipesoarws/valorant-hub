// styles
import '../styles/reset.scss';
import '../styles/home/home.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';

// components
import Footer from '@/components/Footer';

// hooks
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG from '../assets/map_bg5.webp';
import DesktopMenu from '@/components/DesktopMenu';
import MobileMenu from '@/components/MobileMenu';

const Home = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    document.title = `Valorant Hub | @felipesoarws`;

     fetch('https://vlrggapi.vercel.app/news')
      .then((res) => res.json())
      .then((data) => setMaps(data.data)); 
  });

  return (
    <div>
      <div className="bg fade-out">
        <img src={valorantBG} alt="background"></img>
      </div>

      <header className="agents__scss">
        <div className="header__menu__mobile">
          <div className="header__logo">
            <Link to="/">
              <img src={valorantLOGO} alt="logo" />
            </Link>
          </div>
          <div className="header__menu__icon">
            <MobileMenu />
          </div>
        </div>
        <div className="header__menu__desktop">
          <div className="header__logo">
            <Link to="/">
              <img src={valorantLOGO} alt="logo" />
            </Link>
          </div>
          <div className="menu__desktop">
            <DesktopMenu name="home" />
          </div>
        </div>
      </header>

      <main className="home__scss">
        <div className="main__title">
          <h1>Home</h1>
          <p>asdasdasdasd</p>
        </div>
        <div className="main__content"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
