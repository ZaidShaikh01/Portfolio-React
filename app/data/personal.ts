import type { FileTreeItem } from '~/types/fileTreeItem';
import {
  educationData,
  experienceData,
  hobbiesData,
  interestsData,
  projectsData,
  skillsData,
} from './about/demo';

export const personalFileTreeData: FileTreeItem[] = [
  {
    name: 'bio',
    type: 'folder',
    children: [
      { name: 'educationData.ts', type: 'file', data: educationData },
      { name: 'experienceData.ts', type: 'file', data: projectsData },
    ],
  },
  {
    name: 'interests',
    type: 'folder',
    children: [
      { name: 'interestsData.ts', type: 'file', data: interestsData },
      { name: 'hobbiesData.ts', type: 'file', data: hobbiesData },
    ],
  },
  {
    name: 'education',
    type: 'folder',
    children: [
      { name: 'skillsData.ts', type: 'file', data: skillsData },
      { name: 'projectsData.ts', type: 'file', data: experienceData },
    ],
  },
];
