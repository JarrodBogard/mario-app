import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams();
  //   const { id } = params;
  const id = params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content ">
          <span className="card-title">Project Title: {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            dolorem nisi eos odio non, vero fugiat quae totam, commodi ut facere
            nemo veritatis voluptate dicta! Alias odio blanditiis accusantium
            ducimus.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by:</div>
            <div>Published on:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
