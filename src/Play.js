// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './Play.css';
import playbutton from "./icons/PlayButton.svg"

function Play() {
  return (
    <img className="playButton" src={playbutton} alt="Play Button" onClick={() => console.log("Play!!")} />
  );
}

export default Play;
