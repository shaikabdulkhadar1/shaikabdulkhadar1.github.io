import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-full">
      <div className="navbar">
        <div className="dp-img">
          <a className="dp-img" href="https://github.com/shaikabdulkhadar1">
            <img className="dp-img" src={require("../images/dp.png")} />
          </a>
        </div>
        <div className="buttons">
          <a href="#home">
            <button className="home">Home</button>
          </a>
          <a href="#projects">
            <button className="projects">Projects</button>
          </a>
          <a href="#contact-me">
            <button className="contact">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};
