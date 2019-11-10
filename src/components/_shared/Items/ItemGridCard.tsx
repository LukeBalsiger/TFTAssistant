import React from "react";
import "./ItemGridCard.scss";
import { Item } from "../../../models/item/item";
import { Media } from "reactstrap";

type ItemGridCardProps = {
  item: Item;
};

const ItemGridCard: React.FC<ItemGridCardProps> = ({ item }) => {
  return (
    <Media className="item-gird-card-container">
      <Media left>
        <Media
          object
          src={item.assetLocation}
          alt={`${item.name} image`}
          className="item-grid-card-thumbnail"
        />
      </Media>
    </Media>
  );
};

export default ItemGridCard;
