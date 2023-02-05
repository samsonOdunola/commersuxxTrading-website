import Hamburgermenu from "../hamburgerMenu/hamburgerMenu";
import Menu from "../menu/Menu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = ({ color, backgroundcolor, colorOnHover }) => {
  const isMenuOpened = useSelector((state) => state.states.isMenuOpened);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav style={{ backgroundColor: backgroundcolor }}>
        <div
          onClick={navigateHome}
          className="logo"
          style={{ color: `${color}` }}
        >
          commersuxx<b>Trading</b>
        </div>
        <Hamburgermenu backgroundColor={color} />
      </nav>
      {
        <Menu
          backgroundColor={backgroundcolor}
          color={color}
          control={isMenuOpened}
          colorOnHover={colorOnHover}
        />
      }
    </>
  );
};

export default Navbar;
