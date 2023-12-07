import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import TopicList from "../components/Topics";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.columns}>
          <div>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}></div>
          </div>
          <div>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWttY3MxcGI3aWY5dTZhcm51OHNsZGtteXR0cGxreGxwdnJnMWptbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZEUODEtQiUZWGg6IHR/giphy.gif" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TopicList />
      </main>
    </Layout>
  );
}
