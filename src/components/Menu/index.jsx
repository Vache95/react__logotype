import useScrollHide from 'hooks/useScrollHide';
import { MENU_LIST } from 'constants';
import './styles.scss';

const Menu = ({ wrapperRef }) => {
   
   const isHidden = useScrollHide(wrapperRef)
 
   return (
     <div className={`menu-container ${isHidden ? 'hidden' : ''}`}>
       <nav className="menu">
         <ul className="menu__list">
           {MENU_LIST?.map(({ text, sub_list, icon }) => (
             <li key={text}>
               {text}
               {icon}
               {sub_list && (
                 <div className="list-menu">
                   <ul>
                     {sub_list?.map(({ text, icon }) => (
                       <li key={text}>
                         {text}
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
 
 export default  Menu;