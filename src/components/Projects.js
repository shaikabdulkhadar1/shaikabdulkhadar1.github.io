import { MyProjects } from "./MyProjects";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="project-page" id="projects">
      <div className="p-title">
        <h1
          style={{
            padding: "4px",
            // marginLeft: "80px",
            fontWeight: "bolder",
            fontSize: "35px",
          }}
        >
          My Projects
        </h1>
      </div>
      <div className="items">
        {MyProjects.map((object) => (
          <div
            style={{
              borderRadius: "20px",
              margin: "8px",
              padding: "10px",
              marginTop: "15px",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              color: "#000",
            }}
          >
            <h2
              style={{
                margin: "8px",
                fontSize: "28px",
                color: "rgb(0,0,0,0.8)",
                fontWeight: "bolder",
              }}
            >
              {object.title}
            </h2>
            <h3
              style={{
                margin: "8px",
                fontSize: "1.17em",
                fontWeight: "900",
                color: "rgb(0,0,0,0.7)",
              }}
            >
              {object.brief}
            </h3>
            <p
              style={{
                margin: "8px",
                // fontSize: "18px",
                fontWeight: "700",
                color: "rgb(0,0,0,0.6)",
              }}
            >
              {object.discription}
            </p>
            <a href={object.projectUrl}>
              <button
                style={{
                  borderRadius: "10px",
                  height: "35px",
                  width: "145px",
                  padding: "5px",
                  border: "none",
                  backgroundColor: "#ecf2f9",
                  margin: "8px",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "15px",
                  color: "rgb(0,0,0,0.7)",
                }}
                // onClick={() =>
                //   window.open(
                //     object.projectUrl,
                //     "_blank",
                //     "noopener,noreferrer"
                //   )
                // }
              >
                Go to GitHub →
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
