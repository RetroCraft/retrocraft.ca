import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import AOS from 'aos';

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
                <a href="https://www.gatsbyjs.org">gatsby</a>
                {' and '}
                <a href="https://www.bulma.io">bulma</a>
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
