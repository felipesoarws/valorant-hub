import '../styles/reset.scss';

// icons
import { BiUserPin } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { RiKnifeLine } from 'react-icons/ri';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';

import { BiMenuAltRight } from 'react-icons/bi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// hooks
import { Link } from 'react-router-dom';

const MobileMenu = ({ name }) => {
  return (
    <nav>
      <ul>
        <DropdownMenu>
          <DropdownMenuTrigger className="menu-trigger">
            <BiMenuAltRight />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="menu-content">
            <DropdownMenuItem
              className={`link ${name == 'news' ? 'selected' : ''}`}
            >
              <Link to="/" className="link-item">
                <li>News</li>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`link ${name == 'agents' ? 'selected' : ''}`}
            >
              <Link to="/agents" className="link-item">
                <li>Agents</li>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`link ${name == 'regions' ? 'selected' : ''}`}
            >
              <Link to="/regions" className="link-item">
                <li>Regions</li>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`link ${name == 'weapons' ? 'selected' : ''}`}
            >
              <Link to="/weapons" className="link-item">
                <li>Weapons</li>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`link ${name == 'maps' ? 'selected' : ''}`}
            >
              <Link to="/maps" className="link-item">
                <li>Maps</li>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`link ${name == 'ranks' ? 'selected' : ''}`}
            >
              <Link to="/ranks" className="link-item">
                <li>Ranks</li>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  );
};

export default MobileMenu;
