import "../App.css";
import backgroundimage from "../assets/discord-background.png";

function Content() {
  return (
    <div id="body">
      <div class="header-paragraph-text">
        <h1 style={{ fontFamily: "Poppins" }}>
          IMAGINE A <br />
          PLACE...
        </h1>
        <p style={{ fontFamily: "Roboto" }}>
          ...where you can belong to a school club, a gaming group, or a <br />{" "}
          worldwide art community. Where just you and a handful of <br />{" "}
          friends can spend time together. A place that makes it easy to <br />{" "}
          talk every day and hang out more often.
        </p>
        <button class="buttons">Download for Mac</button>
        <button class="buttons" id="browser-btn">
          Open Discord in your browser
        </button>
      </div>
      <img src={backgroundimage} alt="Background image" id="background-image" />
    </div>
  );
}

export default Content;
