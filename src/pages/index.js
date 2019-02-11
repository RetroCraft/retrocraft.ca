import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
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
                <h3 className="is-3 title">frontend</h3>
                <p>
                  This is what makes the stuff you see. Good design, fluid UX,
                  and a clean UI.
                </p>
                <h4 className="is-4 title">languages</h4>
                <div className="tags is-centered are-medium">
                  <span className="tag is-primary">html5</span>
                  <span className="tag is-primary">markdown</span>
                  <span className="tag is-danger">
                    es6&nbsp;<small>(js)</small>
                  </span>
                  <span className="tag is-danger">typescript</span>
                  <span className="tag is-success">css</span>
                  <span className="tag is-success">sass</span>
                </div>
                <h4 className="is-4 title">frameworks</h4>
                <div className="tags is-centered are-medium">
                  <span className="tag is-danger">react</span>
                  <span className="tag is-success">bulma</span>
                  <span className="tag is-success">bootstrap</span>
                  <span className="tag is-success">semantic-ui</span>
                </div>
                <h4 className="is-4 title">tools</h4>
                <div className="tags is-centered are-medium">
                  <span className="tag is-danger">babel</span>
                  <span className="tag is-danger">webpack</span>
                  <span className="tag is-danger">
                    yarn&nbsp;<small>(npm)</small>
                  </span>
                  <span className="tag">webdriver</span>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <div className="tile is-child box">
                <h3 className="is-3 title">backend</h3>
                <p>
                  ...and all the stuff you never see. The blood, sweat, and
                  tears of a dozen servers toiling day and night. Let's not
                  forget about them.
                </p>
                <h4 className="is-4 title">languages</h4>
                <div className="tags is-centered are-medium">
                  <span className="tag is-primary">
                    js&nbsp;<small>(node)</small>
                  </span>
                  <span className="tag is-info">
                    php&nbsp;<small>(...ew)</small>
                  </span>
                  <span className="tag is-warning">mysql</span>
                  <span className="tag is-dark">
                    zsh&nbsp;<small>(bash)</small>
                  </span>
                </div>
                <h4 className="is-4 title">stack</h4>
                <div className="tags is-centered are-medium">
                  <span className="tag is-primary">express</span>
                  <span className="tag is-info">wordpress</span>
                  <span className="tag is-success">apache</span>
                  <span className="tag is-dark">ubuntu</span>
                  <span className="tag">rhel</span>
                  <span className="tag">amazon linux</span>
                </div>
                <h4 className="is-4 title">hosting</h4>
                <div className="tags is-centered are-medium">
                  <span className="tag is-primary">heroku</span>
                  <span className="tag is-dark">
                    aws&nbsp;<small>(ec2)</small>
                  </span>
                  <span className="tag is-info">
                    gcp&nbsp;
                    <small>(datastore, app engine, compute platform)</small>
                  </span>
                  <span className="tag is-info">
                    firebase&nbsp;<small>(firestore, cloud functions)</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div className="tile is-child box">
              <h3 className="is-3 title">tools</h3>
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
                    <span className="tag is-info">vscode</span>
                    <span className="tag is-link">git</span>
                  </div>
                </div>
                <div class="column">
                  <h4 className="is-4 title">sites</h4>
                  <div className="tags is-centered are-medium">
                    <span className="tag is-link">github</span>
                    <span className="tag is-link">gitlab</span>
                    <span className="tag is-dark">circleci</span>
                    <span className="tag">travisci</span>
                    <span className="tag is-warning">google analytics</span>
                    <span className="tag is-warning">adsense</span>
                  </div>
                </div>
                <div class="column">
                  <h4 className="is-4 title">non-webdev things</h4>
                  <div className="tags is-centered are-medium">
                    <span className="tag is-info">photoshop</span>
                    <span className="tag is-info">illustrator</span>
                    <span className="tag is-info">gimp</span>
                    <span className="tag is-link">blender</span>
                    <span className="tag is-dark">python</span>
                  </div>
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
