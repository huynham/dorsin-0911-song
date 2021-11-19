import "./home.css";
import wave from "../../image/bg-pattern.png";
import pikachu from "../../image/pikachu.jpg";
import videocat from "../../image/videocat.mp4";

function Home() {
  const Play = () => {
    const x = document.getElementsByClassName("video");
    x[0].style.display = "block";
    x[0].style.opacity = 1;
  };
  const Dong = () => {
    const x = document.getElementsByClassName("video");
    x[0].style.display = "none";
    document.body.style.opacity = 1;
  };

  return (
    <section id="home">
      <div className="home-sub">
        <div className="home-sub-one">
          <div className="home-content">
            <h1>We help startups launch their products</h1>
            <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
            <span onClick={Play}>
              <i className="fal fa-play-circle"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
            }}
          ></div>
        </div>
      </div>

      <div className="video">
        <div className="video-sub">
          <iframe
            src="https://player.vimeo.com/video/99025203?h=0788a7a47b&title=0&byline=0&portrait=0&badge=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>

          <span className="dong" onClick={Dong}>
            X-Close
          </span>
        </div>
      </div>
    </section>
  );
}
export default Home;
