
import ReactDOM from "react-dom";

const PopupPortal = ({ children }) => {
  const portalRoot = document.getElementById("popup-root");
  return ReactDOM.createPortal(children, portalRoot);
};

export default PopupPortal;
