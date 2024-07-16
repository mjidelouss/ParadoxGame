export default function Casino() {
  return (
    <div className="loaderViewPort">
      <style jsx>{`
        .loaderViewPort {
          width: 15rem; /* Background circle around the dice */
          aspect-ratio: 1;
          border-radius: 50%;
          perspective: 1000px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4px solid black;
          animation: changeColor 5s ease infinite;
        }
        .loader {
          /* Container for the dice*/
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotateX(90deg);
          transform-style: preserve-3d;
          animation: revolve 5s ease infinite;
        }
        .dot {
          width: 1rem;
          aspect-ratio: 1;
          background-color: black;
          border-radius: 50%;
        }
        .dotContainer {
          /* Flexbox to arrange dots horizontally */
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .subDotContainer {
          /* Flexbox to arrange dots vertically */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .left .dotContainer {
          transform: rotate(45deg);
        }
        .side {
          /* Actual sides of the dice */
          background-color: rgba(255, 255, 255, 1);
          padding: 1rem;
          position: absolute;
          width: 6em; /* Varying this will vary the Dice's size */
          aspect-ratio: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4px solid black;
        }
        .front {
          transform: translateZ(3rem);
        }
        .back {
          transform: translateZ(-3rem);
        }
        .back .dotContainer {
          transform: rotate(-45deg);
        }
        .left {
          transform: rotateY(90deg) translateZ(3rem);
        }
        .right {
          transform: rotateY(90deg) translateZ(-3rem);
        }
        .bottom {
          transform: translateY(3rem) rotateX(90deg);
        }
        .top {
          transform: translateY(-3rem) rotateX(90deg);
        }
        @keyframes revolve {
          0% {
            transform: rotate3d(1, 0, 0, 0deg) rotate3d(0, 1, 0, 0deg)
              rotate3d(0, 0, 1, 0deg);
          }
          20% {
            transform: rotate3d(1, 0, 0, 72deg) rotate3d(0, 1, 0, 72deg)
              rotate3d(0, 0, 1, 72deg);
          }
          40% {
            transform: rotate3d(1, 0, 0, 148deg) rotate3d(0, 1, 0, 148deg)
              rotate3d(0, 0, 1, 148deg);
          }
          60% {
            transform: rotate3d(1, 0, 0, 216deg) rotate3d(0, 1, 0, 216deg)
              rotate3d(0, 0, 1, 216deg);
          }
          80% {
            transform: rotate3d(1, 0, 0, 288deg) rotate3d(0, 1, 0, 288deg)
              rotate3d(0, 0, 1, 288deg);
          }
          100% {
            transform: rotate3d(1, 0, 0, 360deg) rotate3d(0, 1, 0, 360deg)
              rotate3d(0, 0, 1, 360deg);
          }
        }
        @keyframes changeColor {
          0% {
            background-color: #00dfa2;
          }
          20% {
            background-color: #f72798;
          }
          40% {
            background-color: #f57d1f;
          }
          60% {
            background-color: #16ff00;
          }
          80% {
            background-color: #ff004d;
          }
          100% {
            background-color: #00dfa2;
          }
        }
      `}</style>
      <div className="loader">
        <div className="side front">
          <div className="dot"></div>
        </div>
        <div className="side back">
          <div className="dotContainer">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="side left">
          <div className="dotContainer">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="side right">
          <div className="dotContainer">
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="side top">
          <div className="dotContainer">
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="subDotContainer">
              <div className="dot"></div>
            </div>
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="side bottom">
          <div className="dotContainer">
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="subDotContainer">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
