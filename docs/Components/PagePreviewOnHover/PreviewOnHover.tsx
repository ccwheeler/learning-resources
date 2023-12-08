import React, { useEffect } from "react";
import "https://fonts.googleapis.com/css?family=Roboto+Slab";
import "https://rawgit.com/shaneapen/Image-Preview-for-Links/master/image_preview_for_links.css";
import "./jquery.minipreview.css"; // Make sure to adjust the path to your local file
import "./jquery.minipreview.js"; // Make sure to adjust the path to your local file

const App = () => {
  useEffect(() => {
    $(function () {
      $("#p1 a").miniPreview({ prefetch: "pageload" });
      $("#p2 a").miniPreview({ prefetch: "parenthover" });
      $("#p3 a").miniPreview({ prefetch: "none" });
    });
  }, []);

  return (
    <div>
      <p id="p1">
        This demo shows how to add live mini-previews to links on hover. Check
        out this link to
        <a href="https://codegena.com">Codegena</a>. Hover over it to see a
        small preview of what it points to.
      </p>

      <p id="p2">
        Those previews were fetched as soon as this page loaded. This is great
        for having the previews ready ahead of time, but can eat up extra
        bandwidth. As an alternative, check out these links to
        <a href="https://codegena.com/generator/Youtube-Embed-Code-Generator">
          Youtube Embed Code Generator
        </a>{" "}
        and
        <a href="https://codegena.com/generator/iframe-code-generator">
          iFrame Generator
        </a>
        . These previews aren't fetched until you hover over this paragraph.
      </p>

      <p id="p3">
        Finally, check out these links to{" "}
        <a href="https://wikipedia.org/">Wikipedia</a> and{" "}
        <a href="https://codepen.io">Codepen</a>. These previews are only
        fetched when needed. This saves the most bandwidth, but there will be a
        delay before the previews can be shown.
      </p>
    </div>
  );
};

export default App;
