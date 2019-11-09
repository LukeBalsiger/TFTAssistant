import React from "react";
import "./ItemIcon.scss";
import { Item } from "../../../models/item/item";

type ItemIconProps = {
  item: Item;
};

const ItemIcon: React.FC<ItemIconProps> = ({ item }) => {
  return (
    <div className="item-display">
      <img id="item-image" src={item.assetLocation} alt={item.name + "image"} />
    </div>
  );
};

export default ItemIcon;
