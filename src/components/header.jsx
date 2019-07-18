import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Highlight from './highlight';

const Header = ({ big }) => (
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
          className={`hero ${big ? 'is-fullheight' : 'is-large'} is-dark`}
          style={{ background: 'transparent' }}
        >
          <div className="hero-body has-text-centered">
            <div className="container">
              <h2 className="subtitle">hi there!</h2>
              <Highlight as="h1" className="title is-1" color="red">
                james ah yong
              </Highlight>
              <h2 className="subtitle is-2">retrocraft : web developer</h2>
            </div>
            <Img
              fluid={data.bgImg.childImageSharp.fluid}
              className="header-bg"
              style={{ position: 'fixed' }}
            />
          </div>
        </div>
      </header>
    )}
  />
);

Header.defaultProps = {
  big: false,
};

Header.propTypes = {
  big: PropTypes.bool,
};

export default Header;
