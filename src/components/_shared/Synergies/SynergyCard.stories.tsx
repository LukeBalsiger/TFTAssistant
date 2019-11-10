import * as React from "react";
import { storiesOf } from "@storybook/react";
import SynergyCard from "./SynergyCard";

const stories = storiesOf("SynergyCard", module);

stories.add("SynergyCard", () => (
  <SynergyCard
    synergy={{
      name: "ahhh",
      effect: "ahhhhhhhhhhhhhhhhhhhhhhhhhh",
      units: ["unit 1", "unit 2"]
    }}
  ></SynergyCard>
));
