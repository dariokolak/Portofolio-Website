import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <React.Fragment>
      <section className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.aboutmeheadliner}>ABOUT ME</h2>
          <h3 className={classes.aboutmeheadliner2}>_______________________</h3>
          <p className={classes.aboutmetext}>
            I am a frontend web developer based in Vienna. Born and raised in
            Bosnia and Herzegowina, gymansium graduate and self taught moved to
            Austria for beeter job opportunies in chasing my dream of becoming a
            web developer. I am ambitious and driven. I thrive on challenge and
            constantly set goals for myself, so I have something to strive
            towards. Always looking for an opportunity to do better and achieve
            greatness.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
