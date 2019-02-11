import PropTypes from "prop-types";
import React from "react";

const Section = ({ container, title, shadow, children }) => (
  <section className="section">
    <div className={container ? "container content" : "content"}>
      <h2 className="title is-2">
        <span className={shadow ? `shadow is-${shadow}` : ""}>{title}</span>
      </h2>
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
