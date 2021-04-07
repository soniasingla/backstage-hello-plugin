import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { helloPluginPlugin, HelloPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(helloPluginPlugin)
  .addPage({
    element: <HelloPluginPage />,
    title: 'Root Page',
  })
  .render();
