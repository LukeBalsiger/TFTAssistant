import { Synergy } from "models/synergy/synergy";

export type Unit = {
  name: string;
  stats: string;
  ability: string;
  assetLocation: string;
  synergies: Synergy[];
};
