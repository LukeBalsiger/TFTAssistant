import * as React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "./Navbar";

const stories = storiesOf("Navbar", module);

stories.add("Navbar", () => <Navbar></Navbar>);
