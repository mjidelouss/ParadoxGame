export default function Congrats() {
  return (
    <div>
      <style jsx>{`
        .card-container {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #ffa07a 25%, transparent 25%) -50px
              0,
            linear-gradient(225deg, #ffa07a 25%, transparent 25%) -50px 0,
            linear-gradient(315deg, #ffa07a 25%, transparent 25%),
            linear-gradient(45deg, #ffa07a 25%, transparent 25%);
          background-size: 100px 100px;
          background-color: #ffffff;
          perspective: 1000px;
        }

        .card {
          width: 400px;
          background-color: rgba(223, 216, 179, 0.9);
          border-radius: 20px;
          position: relative;
          border: 3px solid #000;
          box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }

        .card:hover {
          transform: translateZ(20px) rotateX(5deg) rotateY(-5deg);
          box-shadow: 20px 20px 0 rgba(0, 0, 0, 0.2);
        }

        .card .content {
          padding: 30px;
          padding-top: 60px;
        }

        .card .name {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .card .handle {
          position: absolute;
          top: 0;
          right: 20px;
          background-color: #f4c430;
          padding: 10px 20px;
          border-radius: 0 0 15px 15px;
          border: 2px solid #000;
          border-top: none;
          font-weight: bold;
        }

        .card .title {
          font-size: 18px;
        }

        .card .emoji {
          font-size: 24px;
        }

        .card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0) 80%
          );
          transform: rotate(-30deg);
          pointer-events: none;
        }

        .card .name,
        .card .title {
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        }

        .card:hover .name {
          transform: translateZ(30px);
        }

        .card:hover .title {
          transform: translateZ(20px);
        }

        .card .handle {
          transition: transform 0.3s ease-out, background-color 0.3s ease-out;
        }

        .card:hover .handle {
          transform: translateZ(40px) translateY(-5px);
          background-color: #ffdb58;
        }

        .card .emoji {
          display: inline-block;
          transition: transform 0.3s ease-out;
        }

        .card:hover .emoji {
          transform: translateZ(50px) rotate(15deg) scale(1.2);
        }

        @keyframes glitch {
          0% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(-5px, 5px);
          }
          20% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(5px, -5px);
          }
          40% {
            clip-path: inset(40% 0 20% 0);
            transform: translate(-5px, 5px);
          }
          60% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(5px, -5px);
          }
          80% {
            clip-path: inset(15% 0 70% 0);
            transform: translate(-5px, 5px);
          }
          100% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(5px, -5px);
          }
        }

        .card::after {
          content: attr(data-content);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          opacity: 0;
          z-index: -1;
        }

        .card:hover::after {
          opacity: 0.1;
        }
      `}</style>
      <div className="card">
        <div className="content">
          <div className="name">Nihilist</div>
          <div className="handle">@0xNihilist</div>
          <div className="title">
            <span className="emoji">😊</span> Happy
            <br />
            Product Designer
          </div>
        </div>
        <div className="dots orange-dots"></div>
        <div className="dots pink-dots"></div>
      </div>
    </div>
  );
}
