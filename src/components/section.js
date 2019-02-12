import PropTypes from "prop-types";
import React from "react";

import Highlight from "../components/highlight";

const Section = ({ container, title, shadow, children }) => (
  <section className="section">
    <div className={container ? "container content" : "content"}>
      {shadow ? (
        <Highlight as="h2" className="title is-2" color={shadow}>
          {title}
        </Highlight>
      ) : (
        <h2 className="title is-h2">{title}</h2>
      )}
      {children}
    </div>
  </section>
);

Section.propTypes = {
  container: PropTypes.bool,
  shadow: PropTypes.string,
  title: PropTypes.string
};

Section.defaultProps = {
  container: false,
  shadow: ""
};

export default Section;
