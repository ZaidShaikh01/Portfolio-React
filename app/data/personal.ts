import type { FileTreeItem } from '~/types/fileTreeItem';
import { educationData, experienceData, hobbiesData, interestsData, projectsData, skillsData } from './about/demo';


export const personalFileTreeData: FileTreeItem[] = [
  {
    name: 'bio',
    type: 'folder',
    children: [
      { name: 'demo.ts', type: 'file', data: educationData },
      { name: 'favicon.ico', type: 'file', data:projectsData },
    ],
  },
  {
    name: 'interests',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file', data:interestsData },
      { name: 'favicon.ico', type: 'file',data:hobbiesData },
    ],
  },
  {
    name: 'education',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file', data:skillsData },
      { name: 'favicon.ico', type: 'file', data:experienceData },
    ],
  },
];
