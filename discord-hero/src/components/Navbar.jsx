import "../App.css";
import logoimage from "../assets/discord-logo-white.png";
import menuimage from "../assets/menu-icon.png";

function Navbar() {
  return (
    <div id="nav">
      <img id="logo-image" src={logoimage} alt="Logo image" />
      <img id="menu-image" src={menuimage} alt="Menu image" />
    </div>
  );
}

export default Navbar;
