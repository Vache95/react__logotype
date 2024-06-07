import { CSSProperties,ReactNode } from 'react';
import './styles.scss'


interface DrawerProps {
  children:ReactNode,
  isOpen:boolean,
  onClose: () => void,
  styles?: CSSProperties
  className?:string,
}


const Drawer:React.FC<DrawerProps> = ({ children, onClose, isOpen, className }) => 

   isOpen ? 
          <>
            <div
              className={isOpen ? "drawer open" : `drawer ${className}`}
            >
                {children}
            </div>
            <div onClick={onClose} className="drawerContainer" />
          </>
          :
          null
         



export default Drawer;