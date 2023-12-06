import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const DocsTabs = ({ Resources, Questions, Books }) => {
  return (
    <Tabs
      defaultValue="questions"
      values={[
        { label: "Questions", value: "questions" },
        { label: "Resources", value: "resources" },
      ]}
    >
      <TabItem value="questions"> {Questions}</TabItem>
      <TabItem value="resources"> {Resources}</TabItem>
    </Tabs>
  );
};
