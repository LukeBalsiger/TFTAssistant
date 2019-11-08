import { configure } from "@storybook/react";
import "../src/assets/js/fontawesome";
import "../src/bootstrap-theme.scss";
import "../src/index.scss";

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
