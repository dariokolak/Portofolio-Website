import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <React.Fragment>
      <section className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.contactheadliner}>CONTACT INFO</h2>
          <h3 className={classes.contactheadliner2}>_______________________</h3>
          <p>Feel free to reach out to me any time </p>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kolak.dario@hotmail.com"
              target="_blank"
              className={classes.underline}
            >
              kolak.dario@hotmail.com
            </a>
          </p>
          <p>+43 677 641 33729</p>
          <p>follow me on :</p>
          <p>
            <a
              href="https://github.com/dariokolak"
              target="_blank"
              className={classes.underline}
            >
              Github
            </a>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
