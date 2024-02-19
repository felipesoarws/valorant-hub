// styles
import '../styles/reset.scss';
import '../styles/home/home.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import { IoMdCalendar } from 'react-icons/io';

// components
import Copyrights from '@/components/Copyrights';
import DesktopMenu from '@/components/DesktopMenu';
import MobileMenu from '@/components/MobileMenu';

// hooks
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// assets
import valorantLOGO from '../assets/vlr_logo.png';
import valorantBG from '../assets/map_bg5.webp';
import valorantWallpaper from '../assets/wallpaper1.webp';

// stats
import NewsData from '../stats/news/news.json';

const Home = () => {
  useEffect(() => {
    document.title = `Valorant Hub | @felipesoarws`;
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
            <DesktopMenu name="news" />
          </div>
        </div>
      </header>

      <main>
        <div className="main__title">
          <h1>Welcome!</h1>
          <p>See the main news from the competitive world of Valorant!</p>
          <span>*updated weekly.</span>
        </div>
        <div className="home__main__content">
          <div className="main__content__news">
            {NewsData.data.segments.map((news, index) => (
              <div className="main__content__news__item" key={index}>
                <div>
                  <div className="main__content__news__item__date">
                    <IoMdCalendar />
                    <p>{news.date}</p>
                  </div>
                  <div className="main__content__news__item__title">
                    <h2>{news.title}</h2>
                    <p>{news.description}</p>
                  </div>

                  <div className="main__content__news__item__link">
                    <Link to={'https://vlr.gg' + news.url_path} target="_blank">
                      Check the full article.
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Copyrights />
    </div>
  );
};

export default Home;
