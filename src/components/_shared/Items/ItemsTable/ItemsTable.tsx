import React from "react";
import "./ItemsTable.scss";
import ItemCard from "../ItemGridCard";
import { items } from "../../../../data/items/items";
import { Table } from "reactstrap";

const SynergyCard: React.FC = () => {
  return (
    <Table dark size="sm" striped bordered>
      <thead>
        <tr>
          <th></th>
          <th>
            <ItemCard item={items[0]} />
          </th>
          <th>
            <ItemCard item={items[1]} />
          </th>
          <th>
            <ItemCard item={items[2]} />
          </th>
          <th>
            <ItemCard item={items[3]} />
          </th>
          <th>
            <ItemCard item={items[4]} />
          </th>
          <th>
            <ItemCard item={items[5]} />
          </th>
          <th>
            <ItemCard item={items[6]} />
          </th>
          <th>
            <ItemCard item={items[7]} />
          </th>
          <th>
            <ItemCard item={items[8]} />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <ItemCard item={items[0]} />
          </th>
          <td>
            <ItemCard item={items[9]} />
          </td>
          <td>
            <ItemCard item={items[10]} />
          </td>
          <td>
            <ItemCard item={items[11]} />
          </td>
          <td>
            <ItemCard item={items[12]} />
          </td>
          <td>
            <ItemCard item={items[13]} />
          </td>
          <td>
            <ItemCard item={items[14]} />
          </td>
          <td>
            <ItemCard item={items[15]} />
          </td>
          <td>
            <ItemCard item={items[16]} />
          </td>
          <td>
            <ItemCard item={items[17]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[1]} />
          </th>
          <td>
            <ItemCard item={items[10]} />
          </td>
          <td>
            <ItemCard item={items[18]} />
          </td>
          <td>
            <ItemCard item={items[19]} />
          </td>
          <td>
            <ItemCard item={items[20]} />
          </td>
          <td>
            <ItemCard item={items[21]} />
          </td>
          <td>
            <ItemCard item={items[22]} />
          </td>
          <td>
            <ItemCard item={items[23]} />
          </td>
          <td>
            <ItemCard item={items[24]} />
          </td>
          <td>
            <ItemCard item={items[25]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[2]} />
          </th>
          <td>
            <ItemCard item={items[11]} />
          </td>
          <td>
            <ItemCard item={items[19]} />
          </td>
          <td>
            <ItemCard item={items[26]} />
          </td>
          <td>
            <ItemCard item={items[27]} />
          </td>
          <td>
            <ItemCard item={items[28]} />
          </td>
          <td>
            <ItemCard item={items[29]} />
          </td>
          <td>
            <ItemCard item={items[30]} />
          </td>
          <td>
            <ItemCard item={items[31]} />
          </td>
          <td>
            <ItemCard item={items[32]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[3]} />
          </th>
          <td>
            <ItemCard item={items[12]} />
          </td>
          <td>
            <ItemCard item={items[20]} />
          </td>
          <td>
            <ItemCard item={items[27]} />
          </td>
          <td>
            <ItemCard item={items[33]} />
          </td>
          <td>
            <ItemCard item={items[34]} />
          </td>
          <td>
            <ItemCard item={items[35]} />
          </td>
          <td>
            <ItemCard item={items[36]} />
          </td>
          <td>
            <ItemCard item={items[37]} />
          </td>
          <td>
            <ItemCard item={items[38]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[4]} />
          </th>
          <td>
            <ItemCard item={items[13]} />
          </td>
          <td>
            <ItemCard item={items[21]} />
          </td>
          <td>
            <ItemCard item={items[28]} />
          </td>
          <td>
            <ItemCard item={items[34]} />
          </td>
          <td>
            <ItemCard item={items[39]} />
          </td>
          <td>
            <ItemCard item={items[40]} />
          </td>
          <td>
            <ItemCard item={items[41]} />
          </td>
          <td>
            <ItemCard item={items[42]} />
          </td>
          <td>
            <ItemCard item={items[43]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[5]} />
          </th>
          <td>
            <ItemCard item={items[14]} />
          </td>
          <td>
            <ItemCard item={items[22]} />
          </td>
          <td>
            <ItemCard item={items[29]} />
          </td>
          <td>
            <ItemCard item={items[35]} />
          </td>
          <td>
            <ItemCard item={items[40]} />
          </td>
          <td>
            <ItemCard item={items[44]} />
          </td>
          <td>
            <ItemCard item={items[45]} />
          </td>
          <td>
            <ItemCard item={items[46]} />
          </td>
          <td>
            <ItemCard item={items[47]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[6]} />
          </th>
          <td>
            <ItemCard item={items[15]} />
          </td>
          <td>
            <ItemCard item={items[23]} />
          </td>
          <td>
            <ItemCard item={items[30]} />
          </td>
          <td>
            <ItemCard item={items[36]} />
          </td>
          <td>
            <ItemCard item={items[41]} />
          </td>
          <td>
            <ItemCard item={items[45]} />
          </td>
          <td>
            <ItemCard item={items[48]} />
          </td>
          <td>
            <ItemCard item={items[49]} />
          </td>
          <td>
            <ItemCard item={items[50]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[7]} />
          </th>
          <td>
            <ItemCard item={items[16]} />
          </td>
          <td>
            <ItemCard item={items[24]} />
          </td>
          <td>
            <ItemCard item={items[31]} />
          </td>
          <td>
            <ItemCard item={items[37]} />
          </td>
          <td>
            <ItemCard item={items[42]} />
          </td>
          <td>
            <ItemCard item={items[46]} />
          </td>
          <td>
            <ItemCard item={items[49]} />
          </td>
          <td>
            <ItemCard item={items[51]} />
          </td>
          <td>
            <ItemCard item={items[52]} />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <ItemCard item={items[8]} />
          </th>
          <td>
            <ItemCard item={items[17]} />
          </td>
          <td>
            <ItemCard item={items[25]} />
          </td>
          <td>
            <ItemCard item={items[32]} />
          </td>
          <td>
            <ItemCard item={items[38]} />
          </td>
          <td>
            <ItemCard item={items[43]} />
          </td>
          <td>
            <ItemCard item={items[47]} />
          </td>
          <td>
            <ItemCard item={items[50]} />
          </td>
          <td>
            <ItemCard item={items[52]} />
          </td>
          <td>
            <ItemCard item={items[53]} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SynergyCard;
