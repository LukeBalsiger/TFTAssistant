import * as React from "react";
import { storiesOf } from "@storybook/react";
import ItemsTable from "./ItemsTable";

const stories = storiesOf("ItemsTable", module);

stories.add("ItemsTable", () => <ItemsTable></ItemsTable>);
