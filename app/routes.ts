import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout/layout.tsx', [
    index('routes/home/home.tsx'),
    route('about', './routes/about/about.tsx'),
    route('projects', './routes/projects/index.tsx'),
    route('certificates', './routes/certificates/index.tsx'),
    route('contacts', './routes/contacts/index.tsx'),
    route('*', './routes/not-found/index.tsx'),
  ]),
] satisfies RouteConfig;
