import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import resume from '../static/resume.pdf';

import Highlight from '../components/highlight';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';
import Tags from '../components/tags';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        portfolio: file(relativePath: { eq: "portfolio.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fraservotes: file(relativePath: { eq: "fraservotes.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        volunteeringpeel: file(relativePath: { eq: "volunteeringpeel.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        github: file(relativePath: { eq: "github.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout big subtitleTop="hi there!" subtitleBottom="retrocraft : web developer">
        <SEO title="Developer" keywords={['web development', 'james ah yong', 'retrocraft']} />
        <Section
          title="skills"
          shadow="turquoise"
          container
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <p>
            In the seven years I've been developing cool things for the web, I've worked with a lot
            of tools and frameworks. Any good full-stack developer has to keep up with the trends in
            both the UI/design scene and the back-end paradigms. For more detail, see my{' '}
            <a href={resume}>resume</a>.
          </p>
          <div className="tile is-ancestor has-text-centered">
            <div className="tile is-parent is-vertical">
              <div className="tile is-parent">
                <div className="tile is-parent">
                  <div
                    className="tile is-child box"
                    data-aos="zoom-in-right"
                    data-aos-anchor-placement="top-center"
                  >
                    <Highlight as="h3" className="is-3 title" color="purple">
                      frontend
                    </Highlight>
                    <p>
                      This is what makes the stuff you see. Good design, fluid UX, and a clean UI.
                    </p>
                    <h4 className="is-4 title">languages</h4>
                    <Tags
                      className="is-centered"
                      tags={[
                        { data: 'html5', color: 'primary' },
                        { data: 'markdown', color: 'primary' },
                        { data: 'es6', color: 'danger', small: 'js' },
                        { data: 'typescript', color: 'danger' },
                        { data: 'css3', color: 'success' },
                        { data: 'sass', color: 'success' },
                      ]}
                    />
                    <h4 className="is-4 title">frameworks</h4>
                    <Tags
                      className="is-centered"
                      tags={[
                        { data: 'react', color: 'danger' },
                        { data: 'bulma', color: 'success' },
                        { data: 'bootstrap', color: 'success' },
                        { data: 'semantic-ui', color: 'success' },
                      ]}
                    />
                    <h4 className="is-4 title">tools</h4>
                    <Tags
                      className="is-centered"
                      tags={[
                        { data: 'babel', color: 'danger' },
                        { data: 'webpack', color: 'danger' },
                        { data: 'yarn', color: 'danger', small: 'npm' },
                        { data: 'webdriver' },
                      ]}
                    />
                  </div>
                </div>
                <div className="tile is-parent">
                  <div
                    className="tile is-child box"
                    data-aos="zoom-in-left"
                    data-aos-anchor-placement="center-center"
                  >
                    <Highlight as="h3" className="is-3 title" color="purple">
                      backend
                    </Highlight>
                    <p>
                      ...and all the stuff you never see. The blood, sweat, and tears of a dozen
                      servers toiling day and night. Let's not forget about them.
                    </p>
                    <h4 className="is-4 title">languages</h4>
                    <Tags
                      className="is-centered"
                      tags={[
                        { data: 'js', color: 'primary' },
                        { data: 'php', color: 'info', small: '...ew' },
                        { data: 'mysql', color: 'warning' },
                        { data: 'zsh', color: 'dark', small: 'bash' },
                      ]}
                    />
                    <h4 className="is-4 title">stack</h4>
                    <div className="tags is-centered are-medium">
                      <Tags
                        className="is-centered"
                        tags={[
                          { data: 'express', color: 'primary' },
                          { data: 'sequelize', color: 'warning' },
                          { data: 'wordpress', color: 'info' },
                          { data: 'apache', color: 'success' },
                          { data: 'ubuntu', color: 'dark' },
                          { data: 'rhel' },
                          { data: 'arch linux' },
                          { data: 'amazon linux' },
                        ]}
                      />
                    </div>
                    <h4 className="is-4 title">hosting</h4>
                    <Tags
                      className="is-centered"
                      tags={[
                        { data: 'heroku', color: 'primary' },
                        { data: 'netlify' },
                        { data: 'aws', color: 'dark' },
                        { data: 'azure', color: 'dark' },
                        {
                          data: 'gcp',
                          color: 'info',
                          small: 'datastore, app engine, compute',
                        },
                        {
                          data: 'firebase',
                          color: 'info',
                          small: 'firestore, cloud functions',
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div
                  className="tile is-child box"
                  data-aos="zoom-out-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <Highlight as="h3" className="is-3 title" color="purple">
                    tools
                  </Highlight>
                  <p>
                    If we were all
                    <a href="https://xkcd.com/378/">&nbsp;using magnets on hard disks&nbsp;</a>
                    to program, it would take quite a long time to get anything done. Thankfully, we
                    aren't, and I use these tools to accelerate web development.
                  </p>
                  <div className="columns">
                    <div className="column">
                      <h4 className="is-4 title">software</h4>
                      <div className="tags is-centered are-medium">
                        <Tags
                          className="is-centered"
                          tags={[
                            { data: 'vscode', color: 'info' },
                            { data: 'git', color: 'link' },
                          ]}
                        />
                      </div>
                    </div>
                    <div className="column">
                      <h4 className="is-4 title">sites</h4>
                      <Tags
                        className="is-centered"
                        tags={[
                          { data: 'github', color: 'link' },
                          { data: 'gitlab', color: 'link' },
                          { data: 'circleci', color: 'dark' },
                          { data: 'travisci' },
                          { data: 'azure pipelines', color: 'dark' },
                          { data: 'google analytics', color: 'warning' },
                          { data: 'adsense', color: 'warning' },
                        ]}
                      />
                    </div>
                    <div className="column">
                      <h4 className="is-4 title">non-webdev things</h4>
                      <Tags
                        className="is-centered"
                        tags={[
                          { data: 'photoshop', color: 'info' },
                          { data: 'illustrator', color: 'info' },
                          { data: 'gimp', color: 'info' },
                          { data: 'blender', color: 'link' },
                          { data: 'python', color: 'dark' },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section title="some work" shadow="red">
          <div className="columns">
            <div className="column">
              <div className="card" data-aos="flip-up" data-aos-anchor-placement="center-center">
                <div className="card-image">
                  <a href="//retrocraft.ca">
                    <Img fluid={data.portfolio.childImageSharp.fluid} className="image" />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="is-3 title">Portfolio</h3>
                  <p>
                    This website is built with Gatsby and React.
                    It's hosted through a CI/CD pipeline on Netlify.
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card" data-aos="flip-up" data-aos-anchor-placement="bottom-bottom">
                <div className="card-image">
                  <a href="//volunteeringpeel.org">
                    <Img fluid={data.volunteeringpeel.childImageSharp.fluid} className="image" />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="is-3 title">Volunteering Peel</h3>
                  <p>
                    A complete redesign of the decade-old site, equipped with a custom data
                    management system capable of real-time editing. Full-stack TypeScript: Express +
                    Sequelize (MySQL) on the back-end and React + Semantic UI on the front-end.
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              {/* <div className="card" data-aos="flip-up" data-aos-anchor-placement="center-center">
                <div className="card-image">
                  <a href="//github.com/retrocraft">
                    <Img fluid={data.github.childImageSharp.fluid} className="image" />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="is-3 title">GitHub</h3>
                  <p>
                    My GitHub where you can find the source code for many projects, personal and
                    professional.
                  </p>
                </div>
              </div> */}
              <div className="card" data-aos="flip-up" data-aos-anchor-placement="center-center">
                <div className="card-image">
                  <a href="//medium.com/@retrocraft/student-council-elections-in-the-age-of-covid-52c9b93be38d">
                    <Img fluid={data.fraservotes.childImageSharp.fluid} className="image" />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="is-3 title">Fraser Votes</h3>
                  <p>
                    An election management solution for high schools built with React and Firebase.
                    Students of the Peel District School Board can view the site&nbsp;
                    <a href="//fraservotes.com">here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    )}
  />
);

export default IndexPage;
