import * as React from "react";
import { storiesOf } from "@storybook/react";
import ItemCard from "./ItemCard";
import { items } from "../../../data/items/items";

const stories = storiesOf("ItemCard", module);

stories.add("ItemCard", () => <ItemCard item={items.bfsword}></ItemCard>);
