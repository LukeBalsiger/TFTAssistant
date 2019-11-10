import * as React from "react";
import { storiesOf } from "@storybook/react";
import ItemGridCard from "./ItemGridCard";
import { items } from "../../../data/items/items";

const stories = storiesOf("ItemCard", module);

stories.add("ItemCard", () => <ItemGridCard item={items[0]}></ItemGridCard>);
