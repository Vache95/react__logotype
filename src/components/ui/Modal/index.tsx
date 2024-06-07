import ReactDOM from "react-dom";
import './styles.scss'

interface ModalProps { 
  isShowing: boolean;
  hide: () => void;
  title: string | undefined;
  children?: React.ReactNode;
  className?:string
}

const Modal:React.FC<ModalProps> = ({ isShowing, hide, title, children, className }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className={`modal ${className}`} >
                <div className="modal-header">
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>          
                <div className="modal-body">{children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;


export default Modal;