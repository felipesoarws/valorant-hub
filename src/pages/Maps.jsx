// scss
import '../styles/reset.scss';
import '../styles/maps/maps.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';

// hooks
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG2 from '../assets/map_bg1.webp';
import Copyrights from '@/components/Copyrights';
import DesktopMenu from '@/components/DesktopMenu';
import MobileMenu from '@/components/MobileMenu';

export default function Maps() {
  const [maps, setMaps] = useState([]);
  useEffect(() => {
    document.title = `Valorant Hub | Maps`;

    fetch('https://valorant-api.com/v1/maps')
      .then((res) => res.json())
      .then((data) => setMaps(data.data));
  });

  return (
    <div className="App">
      <div className="bg fade-out">
        <img src={valorantBG2} alt="background"></img>
      </div>

      <header>
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
            <DesktopMenu name="maps" />
          </div>
        </div>
      </header>
      <main className="maps__scss">
        <div className="main__title">
          <h1>Maps</h1>
          <p>Discover and learn more about the valorant maps!</p>
        </div>
        <div className="main__maps">
          {maps.map((i, index) => (
            <div className="main__map" key={index}>
              <div className="main__map__bg">
                <img src={i.splash} alt="" />

                <div className="main__map__icon">
                  <img src={i.displayIcon} alt="" />
                </div>
              </div>

              <div className="main__map__small__bg">
                <img src={i.listViewIcon} alt="" />

                <div className="main__map__title">
                  <h1>{i.displayName}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Copyrights />
    </div>
  );
}
