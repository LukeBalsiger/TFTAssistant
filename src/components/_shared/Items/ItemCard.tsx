import React from "react";
import "./ItemCard.scss";
import { Item } from "../../../models/item/item";
import { Media } from "reactstrap";

type ItemCardProps = {
  item: Item;
};

const SynergyCard: React.FC<ItemCardProps> = ({ item }) => {
  console.log(item.assetLocation);
  return (
    <Media>
      <Media left>
        <Media object src={item.assetLocation} alt={`${item.name} image`} />
      </Media>
      <Media body>
        <Media heading>{item.stats}</Media>
      </Media>
    </Media>
  );
};

export default SynergyCard;
