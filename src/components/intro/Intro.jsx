import "./intro.css";
import { GitHub ,PictureAsPdfRounded } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Me from "../../img/me.png";

function Intro  ()  {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 150,
      backSpeed:60,
      strings: ["Software Developer"],
    });
  }, []);
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">David Barrientos Araya</h1>
          <div className="i-title-item">
            <h3>
             <span ref={textRef}></span>
          </h3>
          </div>
          <div className="itemContainer">
            <GitHub  className="icon" />
            <span>Github</span>
          </div>
          <div className="itemContainer">
            <PictureAsPdfRounded  className="icon" />
            <span>CV</span>
          </div>
          <p className="i-desc">
            descripcion
          </p>
        </div>
      </div>
      <div className="i-right">
      <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;