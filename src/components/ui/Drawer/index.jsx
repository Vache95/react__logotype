import './styles.scss'

const Drawer = ({ children,onClick,isOpen,height,top,bottom }) => 

   isOpen ? 
          <>
            <div
            style={{
                height:height,
                top:top,
                bottom:bottom
            }}
              className={isOpen ? "drawer open" : 'drawer'}
            >
                {children}
            </div>
            <div onClick={onClick} className="drawerContainer" />
          </>
          :
          null
         



export default Drawer;