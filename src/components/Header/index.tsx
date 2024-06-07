import { lazy } from 'react';
import { useModal } from 'hooks/useModal';
import { ReactComponent as Burger } from 'assets/svg/burger.svg';
import { ReactComponent as Close } from 'assets/svg/close.svg';
import { ReactComponent as Logo } from 'assets/svg/Logotype.svg';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import './styles.scss'

import { MENU_LIST } from '../../constants';
import TextInput from '../ui/TextInput/index';

const Drawer = lazy(() => import(/* webpackChunkName: "Drawer" */ '../ui/Drawer'));

interface HeaderProps {
  filterPosts: (_val: string) => void,
}

const Header: React.FC<HeaderProps> = ({ filterPosts }) => {

  const { isShowing, toggle } = useModal();

  return (
    <>
      <header className='header'>
        <div className="header__container">
          <div className="header__top">
            <div className='burger' onClick={() => toggle()}>
              <Burger />
            </div>
            <Logo />
            <div className="header__search">
              <TextInput label={<Search />} placeholder="Search..." maxLength={150} onChange={(e) => filterPosts(e.target.value)} />
            </div>
          </div>
        </div>
      </header>
      <Drawer onClose={toggle} isOpen={isShowing} >
        <div className='mobile-menu'>
          <div className="mobile-menu__header">
            <Logo />
            <Close onClick={() => toggle()} />
          </div>
          <div className="mobile-menu__list">
            <ul>
              {
                MENU_LIST?.map(({ label, icon }, index) => (
                  <li key={index}>{label} {icon}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header