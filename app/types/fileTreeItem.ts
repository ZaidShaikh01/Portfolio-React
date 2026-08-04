export type FileTreeItem = {
  name: string;
  type: 'folder' | 'file';
  children?: FileTreeItem[];
};
