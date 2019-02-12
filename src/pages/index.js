import React from "react";

import Highlight from "../components/highlight";
import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";
import Tags from "../components/tags";

const IndexPage = () => (
  <Layout big>
    <SEO
      title="Developer"
      keywords={["web development", "james ah yong", "retrocraft"]}
    />
    <Section title="skills" shadow="turquoise" container>
      <p>
        In the seven years I've been developing cool things for the web, I've
        worked with a lot of tools and frameworks. Any good full-stack developer
        has to keep up with the trends in both the UI/design scene and the
        back-end paradigms.
      </p>
      <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent is-vertical">
          <div class="tile is-parent">
            <div class="tile is-parent">
              <div className="tile is-child box">
                <Highlight as="h3" className="is-3 title" color="purple">
                  frontend
                </Highlight>
                <p>
                  This is what makes the stuff you see. Good design, fluid UX,
                  and a clean UI.
                </p>
                <h4 className="is-4 title">languages</h4>
                <Tags
                  className="is-centered"
                  tags={[
                    { data: "html5", color: "primary" },
                    { data: "markdown", color: "primary" },
                    { data: "es6", color: "danger", small: "js" },
                    { data: "typescript", color: "danger" },
                    { data: "css", color: "success" },
                    { data: "sass", color: "success" }
                  ]}
                />
                <h4 className="is-4 title">frameworks</h4>
                <Tags
                  className="is-centered"
                  tags={[
                    { data: "react", color: "danger" },
                    { data: "bulma", color: "success" },
                    { data: "bootstrap", color: "success" },
                    { data: "semantic-ui", color: "success" }
                  ]}
                />
                <h4 className="is-4 title">tools</h4>
                <Tags
                  className="is-centered"
                  tags={[
                    { data: "babel", color: "danger" },
                    { data: "webpack", color: "danger" },
                    { data: "yarn", color: "danger", small: "npm" },
                    { data: "webdriver" }
                  ]}
                />
              </div>
            </div>
            <div class="tile is-parent">
              <div className="tile is-child box">
                <Highlight as="h3" className="is-3 title" color="purple">
                  backend
                </Highlight>
                <p>
                  ...and all the stuff you never see. The blood, sweat, and
                  tears of a dozen servers toiling day and night. Let's not
                  forget about them.
                </p>
                <h4 className="is-4 title">languages</h4>
                <Tags
                  className="is-centered"
                  tags={[
                    { data: "js", color: "primary" },
                    { data: "php", color: "info", small: "...ew" },
                    { data: "mysql", color: "warning" },
                    { data: "zsh", color: "dark", small: "bash" }
                  ]}
                />
                <h4 className="is-4 title">stack</h4>
                <div className="tags is-centered are-medium">
                  <Tags
                    className="is-centered"
                    tags={[
                      { data: "express", color: "primary" },
                      { data: "wordpress", color: "info" },
                      { data: "apache", color: "success" },
                      { data: "ubuntu", color: "dark" },
                      { data: "rhel" },
                      { data: "amazon linux" }
                    ]}
                  />
                </div>
                <h4 className="is-4 title">hosting</h4>
                <Tags
                  className="is-centered"
                  tags={[
                    { data: "heroku", color: "primary" },
                    { data: "aws", color: "dark" },
                    {
                      data: "gcp",
                      color: "info",
                      small: "datastore, app engine, compute"
                    },
                    {
                      data: "firebase",
                      color: "info",
                      small: "firestore, cloud functions"
                    }
                  ]}
                />
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div className="tile is-child box">
              <Highlight as="h3" className="is-3 title" color="purple">
                tools
              </Highlight>
              <p>
                If we were all{" "}
                <a href="https://xkcd.com/378/">using magnets on hard disks</a>{" "}
                to program, it would take quite a long time to get anything
                done. Thankfully, we aren't, and I use these tools to accelerate
                web development.
              </p>
              <div class="columns">
                <div class="column">
                  <h4 className="is-4 title">software</h4>
                  <div className="tags is-centered are-medium">
                    <Tags
                      className="is-centered"
                      tags={[
                        { data: "vscode", color: "info" },
                        { data: "git", color: "link" }
                      ]}
                    />
                  </div>
                </div>
                <div class="column">
                  <h4 className="is-4 title">sites</h4>
                  <Tags
                    className="is-centered"
                    tags={[
                      { data: "github", color: "link" },
                      { data: "gitlab", color: "link" },
                      { data: "circleci", color: "dark" },
                      { data: "travisci" },
                      { data: "google analytics", color: "warning" },
                      { data: "adsense", color: "warning" }
                    ]}
                  />
                </div>
                <div class="column">
                  <h4 className="is-4 title">non-webdev things</h4>
                  <Tags
                    className="is-centered"
                    tags={[
                      { data: "photoshop", color: "info" },
                      { data: "illustrator", color: "info" },
                      { data: "gimp", color: "info" },
                      { data: "blender", color: "link" },
                      { data: "python", color: "dark" }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section title="some work" shadow="red" container />
  </Layout>
);

export default IndexPage;
