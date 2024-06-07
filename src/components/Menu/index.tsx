import { useScrollHide } from 'hooks/useScrollHide';
import './styles.scss';

import { MENU_LIST } from '../../constants';


interface MenuProps {
  wrapperRef: React.RefObject<HTMLElement>
}

const Menu: React.FC<MenuProps> = ({ wrapperRef }) => {

  const isHidden = useScrollHide(wrapperRef)

  return (
    <div className={`menu-container ${isHidden ? 'hidden' : ''}`}>
      <nav className="menu">
        <ul className="menu__list">
          {MENU_LIST?.map(({ label, sub_list, icon }) => (
            <li key={label}>
              {label}
              {icon}
              {sub_list && (
                <div className="list-menu">
                  <ul>
                    {sub_list?.map(({ label, icon }) => (
                      <li key={label}>
                        {label}
                        {icon}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;