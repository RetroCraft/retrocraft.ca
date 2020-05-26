import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faDev } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Img from 'gatsby-image';

import Highlight from './highlight';
import './layout.scss';

class Layout extends React.Component {
  static defaultProps = {
    big: false,
  };

  componentDidMount() {
    AOS.init();
  }

  render() {
    const { big, title, subtitleTop, subtitleBottom, children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
            bgImg: file(relativePath: { eq: "background.png" }) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <header>
              <div
                className={`hero ${big ? 'is-fullheight' : 'is-large'} is-dark`}
                style={{ background: 'transparent' }}
              >
                <div className="hero-body has-text-centered">
                  <div className="container">
                    {subtitleTop && <h2 className="subtitle">{subtitleTop}</h2>}
                    <Highlight as="h1" className="title is-1" color="red">
                      {title}
                    </Highlight>
                    {subtitleBottom && <h2 className="subtitle is-2">{subtitleBottom}</h2>}
                  </div>
                  <Img
                    fluid={data.bgImg.childImageSharp.fluid}
                    className="header-bg"
                    style={{ position: 'fixed' }}
                  />
                </div>
              </div>
            </header>
            <main>{children}</main>
            <footer className="footer has-text-white has-background-black-ter">
              <div className="content has-text-centered">
                <p className="footlinks">
                  <a href="mailto:james@retrocraft.ca">
                    <span className="icon has-text-primary">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </span>
                  </a>
                  <a href="https://github.com/retrocraft">
                    <span className="icon has-text-grey">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </span>
                  </a>
                  <a href="https://linkedin.com/in/retrocraft">
                    <span className="icon has-text-info">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </span>
                  </a>
                  <a href="https://medium.com/@retrocraft">
                    <span className="icon has-text-white">
                      <FontAwesomeIcon icon={faMedium} size="2x" />
                    </span>
                  </a>
                  <a href="https://dev.to/retrocraft">
                    <span className="icon" style={{ color: '#8d95f2' }}>
                      <FontAwesomeIcon icon={faDev} size="2x" />
                    </span>
                  </a>
                </p>
                <p>
                  &copy; james ah yong, 2020
                  <br />
                  built with &lt;3 using <a href="https://www.gatsbyjs.org">gatsby</a>
                  {' and '}
                  <a href="https://www.bulma.io">bulma</a>
                </p>
              </div>
            </footer>
          </>
        )}
      />
    );
  }
}

Layout.defaultProps = {
  big: false,
  title: 'james ah yong',
  subtitleTop: null,
  subtitleBottom: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  big: PropTypes.bool,
  title: PropTypes.string,
  subtitleTop: PropTypes.string,
  subtitleBottom: PropTypes.string,
};

export default Layout;
