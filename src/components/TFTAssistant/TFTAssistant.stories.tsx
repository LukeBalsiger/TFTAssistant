import * as React from "react";
import { storiesOf } from "@storybook/react";
import TFTAssistant from "./TFTAssistant";
import { BrowserRouter as Router } from "react-router-dom";

const stories = storiesOf("TFTAssistant", module);

stories.add("TFTAssistant", () => {
  return (
    <Router>
      <TFTAssistant></TFTAssistant>
    </Router>
  );
});
