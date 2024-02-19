// styles
import '../styles/reset.scss';
import '../styles/agents/agents.scss';

// hooks
import { Link, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG from '../assets/map_bg.webp';
import valorantWallpaper from '../assets/wallpaper2.webp';

// carousel
import SimpleSlider from '../components/SimpleSlider';

// pages
import DetailedAgent from './DetailedAgent';
import Copyrights from '@/components/Copyrights';
import DesktopMenu from '@/components/DesktopMenu';
import MobileMenu from '@/components/MobileMenu';

const Agents = () => {
  useEffect(() => {
    document.title = `Valorant Hub | Agents`;
  });

  return (
    <div>
      <div className="bg fade-out">
        <img src={valorantBG} alt="background"></img>
      </div>

      <div className="bg-1 fade-in">
        <img src={valorantWallpaper} alt="background"></img>
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
            <DesktopMenu name="agents" />
          </div>
        </div>
      </header>

      <main className="agents__scss">
        <div className="main__title">
          <h1>Agents</h1>
          <p>Click on the agent and learn more about it!</p>
        </div>
        <div className="main__agents">
          <Routes>
            <Route path="/" element={<SimpleSlider />} />
            <Route path="/agents/:name/:id" element={<DetailedAgent />} />
          </Routes>
        </div>
      </main>
      <Copyrights />
    </div>
  );
};

export default Agents;
