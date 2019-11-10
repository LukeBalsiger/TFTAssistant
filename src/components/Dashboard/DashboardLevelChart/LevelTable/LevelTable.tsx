import React from "react";
import "./LevelTable.scss";
import { Table } from "reactstrap";

const LevelTable: React.FC = () => {
  return (
    <Table dark size="sm" borderless striped>
      <thead>
        <tr>
          <th></th>
          <th>Tier 1</th>
          <th>Tier 2</th>
          <th>Tier 3</th>
          <th>Tier 4</th>
          <th>Tier 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Lvl 2</th>
          <td>100%</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Lvl 3</th>
          <td>70%</td>
          <td>25%</td>
          <td>5%</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Lvl 4</th>
          <td>50%</td>
          <td>35%</td>
          <td>15%</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Lvl 5</th>
          <td>35%</td>
          <td>35%</td>
          <td>25%</td>
          <td>5%</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Lvl 6</th>
          <td>25%</td>
          <td>35%</td>
          <td>30%</td>
          <td>10%</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Lvl 7</th>
          <td>20%</td>
          <td>30%</td>
          <td>33%</td>
          <td>15%</td>
          <td>2%</td>
        </tr>
        <tr>
          <th scope="row">Lvl 8</th>
          <td>15%</td>
          <td>20%</td>
          <td>35%</td>
          <td>24%</td>
          <td>6%</td>
        </tr>
        <tr>
          <th scope="row">Lvl 9</th>
          <td>10%</td>
          <td>15%</td>
          <td>30%</td>
          <td>30%</td>
          <td>15%</td>
        </tr>
        <tr>
          <th scope="row"># in pool</th>
          <td>29</td>
          <td>22</td>
          <td>16</td>
          <td>12</td>
          <td>10</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default LevelTable;
