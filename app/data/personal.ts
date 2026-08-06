import type { FileTreeItem } from '~/types/fileTreeItem';
import { demoData, someData } from './about/demo';

export const personalFileTreeData: FileTreeItem[] = [
  {
    name: 'bio',
    type: 'folder',
    children: [
      { name: 'demo.ts', type: 'file', data: demoData },
      { name: 'favicon.ico', type: 'file', data:someData },
    ],
  },
  {
    name: 'interests',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file', data:demoData },
      { name: 'favicon.ico', type: 'file' },
    ],
  },
  {
    name: 'education',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file' },
      { name: 'favicon.ico', type: 'file' },
    ],
  },
];
