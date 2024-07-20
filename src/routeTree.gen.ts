/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as R404Import } from './routes/404'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const AuthRegisterLazyImport = createFileRoute('/_auth/register')()
const AuthLoginLazyImport = createFileRoute('/_auth/login')()

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const R404Route = R404Import.update({
  path: '/404',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthRegisterLazyRoute = AuthRegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth/register.lazy').then((d) => d.Route),
)

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/login.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/404': {
      id: '/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof R404Import
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/register': {
      id: '/_auth/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthRegisterLazyImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  R404Route,
  AuthRoute: AuthRoute.addChildren({
    AuthLoginLazyRoute,
    AuthRegisterLazyRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/404",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/404": {
      "filePath": "404.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/register": {
      "filePath": "_auth/register.lazy.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
