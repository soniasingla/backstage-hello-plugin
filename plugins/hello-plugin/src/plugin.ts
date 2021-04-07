import { createPlugin, createRoutableExtension } from '@backstage/core';

import { rootRouteRef } from './routes';

export const helloPluginPlugin = createPlugin({
  id: 'hello-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const HelloPluginPage = helloPluginPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
