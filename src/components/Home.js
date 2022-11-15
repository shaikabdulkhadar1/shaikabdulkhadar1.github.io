import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page" id="home">
      <div>
        <img
          className="gif"
          src={require("../images/programmer.gif")}
          alt="gif"
        />
      </div>
      <div className="details">
        <h3>Hola !</h3>
        <h4>I'am</h4>
        <h1>Shaik Abdul Khadar</h1>
        <p
          style={{
            margin: "8px",
            fontSize: "18px",
            fontWeight: "700",
            color: "rgb(0,0,0,0.6)",
            fontStyle: "italic",
            marginBottom: "0px",
          }}
        >
          "The best peformance improvement is is the transition from the
          non-working state to working state."
        </p>
      </div>
    </div>
  );
};
