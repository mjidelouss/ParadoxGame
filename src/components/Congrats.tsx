export default function Congrats() {
  return (
    <div>
      <style jsx>{`
        .loader {
          display: flex;
          width: 8rem;
          height: 8rem;
          justify-items: center;
          justify-content: center;
          align-items: center;
        }

        .head {
          width: 100%;
          height: 100%;
          background-color: #4caf50; /* Green background */
          border-radius: 50%;
          animation: move 3s linear infinite;
          box-shadow: 0 1rem 1rem #2e7d32; /* Darker green shadow */
          filter: blur(0.3rem);
          z-index: 1;
        }

        .eye {
          display: flex;
          position: absolute;
          width: 4rem;
          height: 4rem;
          background-color: #e8f5e9; /* Light green background */
          background: radial-gradient(
            rgba(255, 255, 255, 1) 20%,
            /* White gradient */ rgba(76, 175, 80, 1) 100% /* Green gradient */
          );
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 1rem #388e3c; /* Medium green shadow */
          animation: move 5s alternate infinite;
        }

        .eye::before {
          content: "";
          display: flex;
          width: 1rem;
          height: 2rem;
          background-color: #000; /* Black for the eye pupil */
          background: radial-gradient(
            rgba(0, 0, 0, 1) 44%,
            /* Black gradient */ #2e7d32 50%,
            /* Dark green gradient */ transparent 60%
          );
          border-radius: 50%;
          animation: blink 4s ease-in-out alternate infinite;
        }

        .flames {
          display: flex;
          position: absolute;
          z-index: 0;
        }

        .particle {
          display: flex;
          position: absolute;
          background-color: #4caf50; /* Green background */
          border-radius: 50%;
          filter: blur(0.3rem);
          border-top: 5px solid #2e7d32; /* Darker green border */
          border-left: 5px solid #2e7d32; /* Darker green border */
        }

        .flames::before {
          content: "";
          position: absolute;
          width: 8rem;
          height: 8rem;
          background: #81c784; /* Light green background */
          filter: blur(5rem);
          opacity: 0.5;
          border-radius: 50%;
          top: -8rem;
          left: -4rem;
          z-index: 4;
          animation: pulse 3s linear infinite;
        }

        .particle:nth-child(1) {
          width: 4rem;
          height: 4rem;
          top: -6rem;
          animation: move 7s alternate-reverse infinite;
        }

        .particle:nth-child(2) {
          width: 1.5rem;
          height: 1.5rem;
          top: -8rem;
          left: -5rem;
          animation: move 1.5s ease-in-out reverse infinite;
        }

        .particle:nth-child(3) {
          width: 4rem;
          height: 4rem;
          top: -5rem;
          left: -4rem;
          animation: move 8s alternate-reverse infinite;
        }

        .particle:nth-child(4) {
          width: 3rem;
          height: 3rem;
          top: -7.5rem;
          animation: move 4s alternate-reverse infinite;
        }

        .particle:nth-child(5) {
          width: 2rem;
          height: 2rem;
          top: -9rem;
          left: 1rem;
          animation: move 2.5s alternate-reverse infinite;
        }

        .particle:nth-child(6) {
          width: 2rem;
          height: 2rem;
          top: -6.8rem;
          left: -1.5rem;
          animation: move 5s alternate-reverse infinite;
        }

        .particle:nth-child(7) {
          width: 1rem;
          height: 1rem;
          top: -10rem;
          left: -1rem;
          animation: move 1.2s alternate-reverse infinite;
        }

        .particle:nth-child(8) {
          width: 1.3rem;
          height: 1.3rem;
          top: -7.5rem;
          left: -2rem;
          animation: move 2.5s alternate-reverse infinite;
        }

        @keyframes move {
          0% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(4px, 6px);
          }

          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes blink {
          20% {
            transform: translate(0, 0);
            height: 2rem;
          }

          30% {
            height: 0;
          }

          40% {
            transform: translate(5px, 10px);
            height: 0;
          }

          50% {
            height: 2rem;
          }

          70% {
            transform: translate(-10px, -10px);
          }

          90% {
            transform: translate(0, 0);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.5;
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0.5;
          }
        }
      `}</style>
      <div className="loader">
        <div className="head"></div>

        <div className="flames">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="eye"></div>
      </div>
    </div>
  );
}
