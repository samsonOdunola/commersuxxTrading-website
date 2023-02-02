import { Link } from "react-router-dom";

const Menu = ({ backgroundColor, color, control, colorOnHover }) => {
  return (
    <menu
      className={`menu-container ${control ? "menu-active" : ""}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <ul>
        <li>
          <Link
            onMouseEnter={(e) => (e.target.style.color = colorOnHover)}
            onMouseLeave={(e) => (e.target.style.color = color)}
            style={{ color: color }}
            to="/"
            className="link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={(e) => (e.target.style.color = colorOnHover)}
            onMouseLeave={(e) => (e.target.style.color = color)}
            style={{ color: color }}
            className="link"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={(e) => (e.target.style.color = colorOnHover)}
            onMouseLeave={(e) => (e.target.style.color = color)}
            style={{ color: color }}
            to="/contact-us"
            className="link"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={(e) => (e.target.style.color = colorOnHover)}
            onMouseLeave={(e) => (e.target.style.color = color)}
            style={{ color: color }}
            className="link"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={(e) => (e.target.style.color = colorOnHover)}
            onMouseLeave={(e) => (e.target.style.color = color)}
            style={{ color: color }}
            className="link"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
