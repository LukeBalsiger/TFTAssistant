import React from "react";
import "./SynergyCard.scss";
import { Synergy } from "../../../models/synergy/synergy";
import { CardText, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

type SynergyCardProps = {
  synergy: Synergy;
};

const SynergyCard: React.FC<SynergyCardProps> = ({ synergy }) => {
  const units = synergy.units.map(unit => {
    return <CardText key={unit}>{unit}</CardText>;
  });
  return (
    <div>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        {/*<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*/}
        <CardBody>
          <CardTitle>{synergy.name}</CardTitle>
          <CardSubtitle>{synergy.effect}</CardSubtitle>
          {units}
        </CardBody>
      </Card>
    </div>
  );
};

export default SynergyCard;
