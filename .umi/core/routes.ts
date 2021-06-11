// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/strike/tmp/battle-net/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "routes": [
      {
        "path": "/",
        "redirect": "/index2",
        "exact": true
      },
      {
        "path": "/index2",
        "component": require('@/pages/index2').default,
        "exact": true
      },
      {
        "path": "/index3",
        "component": require('@/pages/index3').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
