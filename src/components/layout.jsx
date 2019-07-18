import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Header from './header';
import './layout.scss';

class Layout extends React.Component {
  static defaultProps = {
    big: false,
  };

  componentDidMount() {
    AOS.init();
  }

  render() {
    const { big, children } = this.props;
    return (
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
            <Header siteTitle={data.site.siteMetadata.title} big={big} />
            <main>{children}</main>
            <footer className="footer has-text-white has-background-black-ter">
              <div className="content has-text-centered">
                &copy; james ah yong, 2019
                <br />
                built with &lt;3 using
                {' '}
                <a href="https://www.gatsbyjs.org">gatsby</a>
                {' and '}
                <a href="https://www.bulma.io">bulma</a>
              </div>
              <div className="footlinks has-text-centered">
                <a href="https://linkedin.com/in/retrocraft">
                  <span className="icon has-text-info">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </span>
                </a>
                <a href="mailto:james.ahyong@gmail.com">
                  <span className="icon has-text-primary">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </span>
                </a>
                <a href="https://github.com/retrocraft">
                  <span className="icon has-text-grey">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </span>
                </a>
              </div>
            </footer>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  big: PropTypes.bool,
};

export default Layout;
