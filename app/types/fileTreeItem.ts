import type { AboutData } from "./aboutData";

export type FileTreeItem = {
  name: string;
  type: 'folder' | 'file';
  children?: FileTreeItem[];

  data?: AboutData;
};
