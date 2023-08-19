import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="wrapper">
      <div className="spline">
        <Spline scene="https://prod.spline.design/hkOZMC8fQgs9KQFR/scene.splinecode" />
      </div>
      <div className="content">
        <div className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Achievements</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </div>
        <div className="text">
          <p className="head">Hello Techies !! Welcome</p>
          <p className="bod">
            Bring your team together and build your community by using our
            cross-platform app that lets you collaborate via chat, voice and by
            sharing and storing unlimited media files. A world of topics is
            waiting for you. Join the private beta.
          </p>
        </div>
      </div>
    </div>
  );
}
