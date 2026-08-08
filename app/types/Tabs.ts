import type { AboutData } from "./aboutData";
import type { ProjectData } from "./ProjectData";

export type Tab = {
  id: number;
  section: AboutData | ProjectData;
};
