import React from "react";
import ProjectSummary from "../projects/ProjectSummary";

const ProjectList = ({ projects }) => {
  const project =
    projects &&
    projects.map((project, index) => {
      return <ProjectSummary project={project} key={project.id + index} />;
    });
  return <div className="project-list section">{project}</div>; // could write project directly into return template using JSX syntax
};

export default ProjectList;
