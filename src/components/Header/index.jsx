import { lazy } from 'react';
import TextInput from 'components/ui/TextInput';
import useModal from 'hooks/useModal';
import { MENU_LIST } from 'constants';
import {ReactComponent as Burger} from 'assets/svg/burger.svg';
import {ReactComponent as Close} from 'assets/svg/close.svg';
import {ReactComponent as Logo} from 'assets/svg/Logotype.svg';
import {ReactComponent as Search} from 'assets/svg/search.svg';
import './styles.scss'

const Drawer = lazy(() => import(/* webpackChunkName: "Drawer" */ 'components/ui/Drawer'));

const Header = ({ filterPosts }) => {

  const { isShowing, toggle } = useModal();

  return (
    <>
      <header className='header'>
          <div className="header__container">
              <div className="header__top">
                  <div className='burger' onClick={toggle}>
                    <Burger/>
                  </div>
                    <Logo/>
                    <div className="header__search">
                      <TextInput label={<Search/>} placeholder="Search..." maxlength="150" onChange={(e) => filterPosts(e.target.value)} />
                  </div>
              </div>
          </div>
       </header>
       <Drawer onClick={toggle} isOpen={isShowing} >
           <div className='mobile-menu'>
               <div className="mobile-menu__header">
                  <Logo/>
                  <Close onClick={toggle}/>
               </div>
               <div className="mobile-menu__list">
                    <ul>
                      {
                        MENU_LIST?.map(({text,icon},index) => (
                          <li key={index}>{text} {icon}</li>
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