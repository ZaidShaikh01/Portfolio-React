import type { AboutData } from "./aboutData";
import type { ProjectData } from "./ProjectData";

export type Tab = {
  id: number;
  // It contains all the details page necessary details formatted in about data formate
  section: AboutData;
};
