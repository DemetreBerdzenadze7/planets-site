import data from "../../data/data.json";

type TTabs = string[];

export const tabs: TTabs = ["overview", "structure", "surface"];

export type Planet = (typeof data)[0];

export const stats = [
  { label: "Rotation Time", key: "rotation" },
  { label: "Revolution Time", key: "revolution" },
  { label: "Radius", key: "radius" },
  { label: "Average Temp.", key: "temperature" },
] as const;
