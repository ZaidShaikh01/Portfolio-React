import type { FileTreeItem } from '~/types/fileTreeItem';
import { githubData, instaData, linkedInData } from '../Contacts/demo';

export const findFileTreeData: FileTreeItem[] = [
  {
    name: 'instagram',
    type: 'file',
    data: instaData,
  },
  {
    name: 'linkedin',
    type: 'file',
    data: linkedInData,
  },
  {
    name: 'github',
    type: 'file',
    data: githubData,
  },
];
