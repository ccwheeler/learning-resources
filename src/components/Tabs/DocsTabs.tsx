import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const DocsTabs = ({ Resources, Questions, Books }) => {
  return (
    <Tabs
      defaultValue="resources"
      values={[
        { label: "Resources", value: "resources" },
        { label: "Questions", value: "questions" },
        // { label: "Books", value: "books" },
      ]}
    >
      <TabItem value="resources"> {Resources}</TabItem>
      <TabItem value="questions"> {Questions}</TabItem>
      {/* <TabItem value="books">This is a banana 🍌{Books}</TabItem> */}
    </Tabs>
  );
};
