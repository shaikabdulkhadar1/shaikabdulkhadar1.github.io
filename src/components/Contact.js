import { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [isHoveringfb, setIsHoveringFb] = useState(false);
  const [isHoveringinsta, setIsHoveringInsta] = useState(false);
  const [isHoveringgit, setIsHoveringGit] = useState(false);
  const [isHoveringtwit, setIsHoveringTwit] = useState(false);
  const [isHoveringLinkedIn, setIsHoveringLinkedIn] = useState(false);
  const [isHoveringpf, setIsHoveringPf] = useState(false);

  const handleEnterFb = () => {
    setIsHoveringFb(true);
  };

  const handleEnterInsta = () => {
    setIsHoveringInsta(true);
  };

  const handleEnterGit = () => {
    setIsHoveringGit(true);
  };

  const handleEnterTwit = () => {
    setIsHoveringTwit(true);
  };

  const handleEnterLinkedIn = () => {
    setIsHoveringLinkedIn(true);
  };

  const handleEnterPf = () => {
    setIsHoveringPf(true);
  };

  const handleLeaveFb = () => {
    setIsHoveringFb(false);
  };

  const handleLeaveInsta = () => {
    setIsHoveringInsta(false);
  };

  const handleLeaveGit = () => {
    setIsHoveringGit(false);
  };

  const handleLeaveTwit = () => {
    setIsHoveringTwit(false);
  };

  const handleLeaveLinkedIn = () => {
    setIsHoveringLinkedIn(false);
  };

  const handleLeavePf = () => {
    setIsHoveringPf(false);
  };

  return (
    <div className="contact-page" id="contact-me">
      <div className="mycontact">
        <h2
          style={{
            padding: "8px",
            fontWeight: "bolder",
            fontSize: "35px",
          }}
        >
          My Contact Details:
        </h2>
        <div className="c-details">
          <p>
            <strong>Contact Number:</strong> +91 99491 62209 / 83091 51214
          </p>
          <p>
            <strong>Email:</strong> shaikabdulkhadar571@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Edi Bazar, Yakutpura, Hyderabad,
            Telangana, India - 500023.
          </p>
          <p>
            <strong>Other Connection handles:</strong>
          </p>
          <a href="https://www.google.com/">
            <img
              style={{
                width: isHoveringfb ? "50px" : "40px",
                height: isHoveringfb ? "50px" : "40px",
                margin: isHoveringfb ? "5px" : "10px",
              }}
              src={require("../images/facebook.png")}
              onMouseEnter={handleEnterFb}
              onMouseLeave={handleLeaveFb}
            />
          </a>
          <a href="https://www.google.com/">
            <img
              style={{
                width: isHoveringinsta ? "50px" : "40px",
                height: isHoveringinsta ? "50px" : "40px",
                margin: isHoveringinsta ? "5px" : "10px",
              }}
              src={require("../images/instagram.png")}
              onMouseEnter={handleEnterInsta}
              onMouseLeave={handleLeaveInsta}
            />
          </a>
          <a href="https://github.com/shaikabdulkhadar1">
            <img
              style={{
                width: isHoveringgit ? "50px" : "40px",
                height: isHoveringgit ? "50px" : "40px",
                margin: isHoveringgit ? "5px" : "10px",
              }}
              src={require("../images/github.png")}
              onMouseEnter={handleEnterGit}
              onMouseLeave={handleLeaveGit}
            />
          </a>
          <a href="https://twitter.com/S_A_Khadar">
            <img
              style={{
                width: isHoveringtwit ? "50px" : "40px",
                height: isHoveringtwit ? "50px" : "40px",
                margin: isHoveringtwit ? "5px" : "10px",
              }}
              src={require("../images/twitter-sign.png")}
              onMouseEnter={handleEnterTwit}
              onMouseLeave={handleLeaveTwit}
            />
          </a>
          <a href="https://www.linkedin.com/in/shaik-abdul-khadar-8001b81a4/">
            <img
              style={{
                width: isHoveringLinkedIn ? "50px" : "40px",
                height: isHoveringLinkedIn ? "50px" : "40px",
                margin: isHoveringLinkedIn ? "5px" : "10px",
              }}
              src={require("../images/linkedin.png")}
              onMouseEnter={handleEnterLinkedIn}
              onMouseLeave={handleLeaveLinkedIn}
            />
          </a>
          <a href="https://linktr.ee/shaikabdulkhadar">
            <img
              style={{
                width: isHoveringpf ? "50px" : "40px",
                height: isHoveringpf ? "50px" : "40px",
                margin: isHoveringpf ? "5px" : "10px",
              }}
              src={require("../images/link.png")}
              onMouseEnter={handleEnterPf}
              onMouseLeave={handleLeavePf}
            />
          </a>
        </div>
      </div>
      <div className="enquiry">
        <h2
          style={{
            padding: "8px",
            marginLeft: "80px",
            fontWeight: "bolder",
            fontSize: "35px",
          }}
        >
          Hire Me!
        </h2>
        <div>
          <input className="input-tag" type="text" placeholder="Name" /> <br />
          <input className="input-tag" type="text" placeholder="Email" />
          <br />
          <textarea
            className="textarea-tag"
            type="text"
            placeholder="Message"
          />
          <br />
          <button className="send-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};
