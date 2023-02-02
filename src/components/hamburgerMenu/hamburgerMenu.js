import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openMenu, closeMenu } from "../../redux/actions";
const Hamburgermenu = ({ backgroundColor }) => {
  const dispatch = useDispatch();
  const isMenuOpened = useSelector((state) => state.states.isMenuOpened);
  const [buttonStatus, setButtonStatus] = useState("");

  const handleMobilemenu = () => {
    if (!isMenuOpened) {
      dispatch(openMenu());
      setButtonStatus("active");
    } else {
      dispatch(closeMenu());
      setButtonStatus("");
    }
  };
  return (
    <div
      data-testid="hamburgerMenuButton-element"
      onClick={handleMobilemenu}
      className={`hamburgerMenu ${buttonStatus}`}
    >
      <span
        style={{ backgroundColor: backgroundColor }}
        data-testid="span1"
      ></span>
      <span
        style={{ backgroundColor: backgroundColor }}
        data-testid="span2"
      ></span>
      <span
        style={{ backgroundColor: backgroundColor }}
        data-testid="span3"
      ></span>
    </div>
  );
};

export default Hamburgermenu;
