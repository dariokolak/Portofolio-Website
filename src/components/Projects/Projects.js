import React from "react";
import classes from "./Projects.module.css";
import ProjectItem from "./ProjectsItem";

const Projects = () => {
  const selectedProjects = [
    {
      id: "p1",
      name: "Math school Matka",
      photo: "./matka.jpg",
      link: "https://matka.ba/",
      linkGithub:
        "https://github.com/dariokolak/skola-matematike-matka-website",
    },
    {
      id: "p2",
      name: "Flashcards app ",
      photo: "./project.jpeg",
      link: "https://youtu.be/Epy6FwSg2_Q",
      linkGithub: "https://github.com/dariokolak/Flashcards",
    },
    {
      id: "p3",
      name: "Food order app ",
      photo: "./matka.jpg",
      link: "https://youtu.be/LAn0ordmKiY",
      linkGithub: "https://github.com/dariokolak/React-Food-Order-App",
    },
    {
      id: "p4",
      name: "React App ",
      photo: "./project.jpeg",
      link: "#",
      linkGithub: "#",
    },
  ];

  return (
    <React.Fragment>
      <section className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.selectedProjectHeadline}>SELECTED PROJECTS</h2>
          <h3 className={classes.aboutmeheadliner2}>_______________________</h3>
          <div className={classes.grid}>
            {selectedProjects.map((item) => (
              <ProjectItem
                name={item.name}
                link={item.link}
                id={item.id}
                gitlink={item.linkGithub}
                photo={item.photo}
              />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
