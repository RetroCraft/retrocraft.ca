import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="footer has-text-white has-background-black-ter">
          <div className="content has-text-centered">
            &copy; james ah yong, 2019
            <br />
            built with {"<3"} using{" "}
            <a href="https://www.gatsbyjs.org">gatsby</a> and{" "}
            <a href="https://www.bulma.io">bulma</a>
          </div>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
