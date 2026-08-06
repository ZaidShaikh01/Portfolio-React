import type { FileTreeItem } from '~/types/fileTreeItem';
import { emailData, phoneData } from './about/demo';

export const contactFileTreeData: FileTreeItem[] = [
  {
    name: 'szaid516@gmail.com',
    type: 'file',
    data: emailData,
  },
  {
    name: '+91-8208900954',
    type: 'file',
    data: phoneData,
  },
];
