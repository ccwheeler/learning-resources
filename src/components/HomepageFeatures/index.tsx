import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  colour: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Beginner Path",
    colour: "beginner",
    description: (
      <>
        Do the lessons with this colour background, don't be afraid to jump
        topics often, start from HTML, work your way to React
      </>
    ),
  },
  {
    title: "Intermediate Path",
    colour: "intermediate",
    description: (
      <>
        Do the lessons with this colour background, check out clean coding and
        refactoring too! time to bring standards to your work!
      </>
    ),
  },
  {
    title: "Expert Path",
    colour: "expert",
    description: (
      <>
        Do the lessons with this colour background, get learning the deeeep
        stuff! Also learn about speaking with others, teamwork and other stuff.
      </>
    ),
  },
];

function Feature({ title, colour, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={`${colour} feature-padding ${styles.featurePadding}`}>
        <div className="text--center">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
