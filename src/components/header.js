import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        bgImg: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <div
          className="hero is-fullheight is-dark"
          style={{ background: "transparent" }}
        >
          <div className="hero-body has-text-centered">
            <div className="container">
              <h2 className="subtitle">[page under construction]</h2>
              <h1 className="title is-1">
                <span class="shadow is-red">james ah yong</span>
              </h1>
              <h2 className="subtitle is-2">retrocraft : web developer</h2>
            </div>
            <Img
              fluid={data.bgImg.childImageSharp.fluid}
              className="header-bg"
              style={{ position: "fixed" }}
            />
          </div>
        </div>
      </header>
    )}
  />
);

export default Header;
