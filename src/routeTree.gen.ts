/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as NovelImport } from './routes/novel'
import { Route as LibraryImport } from './routes/library'
import { Route as IndexImport } from './routes/index'
import { Route as SourcesIndexImport } from './routes/sources/index'
import { Route as SourcesSourceIdImport } from './routes/sources/$sourceId'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const NovelRoute = NovelImport.update({
  id: '/novel',
  path: '/novel',
  getParentRoute: () => rootRoute,
} as any)

const LibraryRoute = LibraryImport.update({
  id: '/library',
  path: '/library',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SourcesIndexRoute = SourcesIndexImport.update({
  id: '/sources/',
  path: '/sources/',
  getParentRoute: () => rootRoute,
} as any)

const SourcesSourceIdRoute = SourcesSourceIdImport.update({
  id: '/sources/$sourceId',
  path: '/sources/$sourceId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/library': {
      id: '/library'
      path: '/library'
      fullPath: '/library'
      preLoaderRoute: typeof LibraryImport
      parentRoute: typeof rootRoute
    }
    '/novel': {
      id: '/novel'
      path: '/novel'
      fullPath: '/novel'
      preLoaderRoute: typeof NovelImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/sources/$sourceId': {
      id: '/sources/$sourceId'
      path: '/sources/$sourceId'
      fullPath: '/sources/$sourceId'
      preLoaderRoute: typeof SourcesSourceIdImport
      parentRoute: typeof rootRoute
    }
    '/sources/': {
      id: '/sources/'
      path: '/sources'
      fullPath: '/sources'
      preLoaderRoute: typeof SourcesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/novel': typeof NovelRoute
  '/settings': typeof SettingsRoute
  '/sources/$sourceId': typeof SourcesSourceIdRoute
  '/sources': typeof SourcesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/novel': typeof NovelRoute
  '/settings': typeof SettingsRoute
  '/sources/$sourceId': typeof SourcesSourceIdRoute
  '/sources': typeof SourcesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/novel': typeof NovelRoute
  '/settings': typeof SettingsRoute
  '/sources/$sourceId': typeof SourcesSourceIdRoute
  '/sources/': typeof SourcesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/library'
    | '/novel'
    | '/settings'
    | '/sources/$sourceId'
    | '/sources'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/library'
    | '/novel'
    | '/settings'
    | '/sources/$sourceId'
    | '/sources'
  id:
    | '__root__'
    | '/'
    | '/library'
    | '/novel'
    | '/settings'
    | '/sources/$sourceId'
    | '/sources/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LibraryRoute: typeof LibraryRoute
  NovelRoute: typeof NovelRoute
  SettingsRoute: typeof SettingsRoute
  SourcesSourceIdRoute: typeof SourcesSourceIdRoute
  SourcesIndexRoute: typeof SourcesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LibraryRoute: LibraryRoute,
  NovelRoute: NovelRoute,
  SettingsRoute: SettingsRoute,
  SourcesSourceIdRoute: SourcesSourceIdRoute,
  SourcesIndexRoute: SourcesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/library",
        "/novel",
        "/settings",
        "/sources/$sourceId",
        "/sources/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/library": {
      "filePath": "library.tsx"
    },
    "/novel": {
      "filePath": "novel.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/sources/$sourceId": {
      "filePath": "sources/$sourceId.tsx"
    },
    "/sources/": {
      "filePath": "sources/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
