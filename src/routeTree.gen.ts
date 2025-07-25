/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as AuthLayoutRouteRouteImport } from './routes/_authLayout/route'
import { Route as AppLayoutRouteRouteImport } from './routes/_appLayout/route'
import { Route as AppLayoutIndexRouteImport } from './routes/_appLayout/index'
import { Route as AuthLayoutSignUpRouteImport } from './routes/_authLayout/sign-up'
import { Route as AuthLayoutLoginRouteImport } from './routes/_authLayout/login'
import { Route as AppLayoutTracksRouteImport } from './routes/_appLayout/tracks'
import { Route as AppLayoutPlaylistsRouteImport } from './routes/_appLayout/playlists'
import { Route as AppLayoutMedia_typesRouteImport } from './routes/_appLayout/media_types'
import { Route as AppLayoutInvoicesRouteImport } from './routes/_appLayout/invoices'
import { Route as AppLayoutGenresRouteImport } from './routes/_appLayout/genres'
import { Route as AppLayoutEmployeesRouteImport } from './routes/_appLayout/employees'
import { Route as AppLayoutDashboardRouteImport } from './routes/_appLayout/dashboard'
import { Route as AppLayoutCustomersRouteImport } from './routes/_appLayout/customers'
import { Route as AppLayoutArtistsRouteImport } from './routes/_appLayout/artists'
import { Route as AppLayoutAlbumsRouteImport } from './routes/_appLayout/albums'
import { Route as AppLayoutAboutRouteImport } from './routes/_appLayout/about'

const AuthLayoutRouteRoute = AuthLayoutRouteRouteImport.update({
  id: '/_authLayout',
  getParentRoute: () => rootRouteImport,
} as any)
const AppLayoutRouteRoute = AppLayoutRouteRouteImport.update({
  id: '/_appLayout',
  getParentRoute: () => rootRouteImport,
} as any)
const AppLayoutIndexRoute = AppLayoutIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AuthLayoutSignUpRoute = AuthLayoutSignUpRouteImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => AuthLayoutRouteRoute,
} as any)
const AuthLayoutLoginRoute = AuthLayoutLoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthLayoutRouteRoute,
} as any)
const AppLayoutTracksRoute = AppLayoutTracksRouteImport.update({
  id: '/tracks',
  path: '/tracks',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutPlaylistsRoute = AppLayoutPlaylistsRouteImport.update({
  id: '/playlists',
  path: '/playlists',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutMedia_typesRoute = AppLayoutMedia_typesRouteImport.update({
  id: '/media_types',
  path: '/media_types',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutInvoicesRoute = AppLayoutInvoicesRouteImport.update({
  id: '/invoices',
  path: '/invoices',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutGenresRoute = AppLayoutGenresRouteImport.update({
  id: '/genres',
  path: '/genres',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutEmployeesRoute = AppLayoutEmployeesRouteImport.update({
  id: '/employees',
  path: '/employees',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutDashboardRoute = AppLayoutDashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutCustomersRoute = AppLayoutCustomersRouteImport.update({
  id: '/customers',
  path: '/customers',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutArtistsRoute = AppLayoutArtistsRouteImport.update({
  id: '/artists',
  path: '/artists',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutAlbumsRoute = AppLayoutAlbumsRouteImport.update({
  id: '/albums',
  path: '/albums',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)
const AppLayoutAboutRoute = AppLayoutAboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)

export interface FileRoutesByFullPath {
  '/about': typeof AppLayoutAboutRoute
  '/albums': typeof AppLayoutAlbumsRoute
  '/artists': typeof AppLayoutArtistsRoute
  '/customers': typeof AppLayoutCustomersRoute
  '/dashboard': typeof AppLayoutDashboardRoute
  '/employees': typeof AppLayoutEmployeesRoute
  '/genres': typeof AppLayoutGenresRoute
  '/invoices': typeof AppLayoutInvoicesRoute
  '/media_types': typeof AppLayoutMedia_typesRoute
  '/playlists': typeof AppLayoutPlaylistsRoute
  '/tracks': typeof AppLayoutTracksRoute
  '/login': typeof AuthLayoutLoginRoute
  '/sign-up': typeof AuthLayoutSignUpRoute
  '/': typeof AppLayoutIndexRoute
}
export interface FileRoutesByTo {
  '/about': typeof AppLayoutAboutRoute
  '/albums': typeof AppLayoutAlbumsRoute
  '/artists': typeof AppLayoutArtistsRoute
  '/customers': typeof AppLayoutCustomersRoute
  '/dashboard': typeof AppLayoutDashboardRoute
  '/employees': typeof AppLayoutEmployeesRoute
  '/genres': typeof AppLayoutGenresRoute
  '/invoices': typeof AppLayoutInvoicesRoute
  '/media_types': typeof AppLayoutMedia_typesRoute
  '/playlists': typeof AppLayoutPlaylistsRoute
  '/tracks': typeof AppLayoutTracksRoute
  '/login': typeof AuthLayoutLoginRoute
  '/sign-up': typeof AuthLayoutSignUpRoute
  '/': typeof AppLayoutIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/_appLayout': typeof AppLayoutRouteRouteWithChildren
  '/_authLayout': typeof AuthLayoutRouteRouteWithChildren
  '/_appLayout/about': typeof AppLayoutAboutRoute
  '/_appLayout/albums': typeof AppLayoutAlbumsRoute
  '/_appLayout/artists': typeof AppLayoutArtistsRoute
  '/_appLayout/customers': typeof AppLayoutCustomersRoute
  '/_appLayout/dashboard': typeof AppLayoutDashboardRoute
  '/_appLayout/employees': typeof AppLayoutEmployeesRoute
  '/_appLayout/genres': typeof AppLayoutGenresRoute
  '/_appLayout/invoices': typeof AppLayoutInvoicesRoute
  '/_appLayout/media_types': typeof AppLayoutMedia_typesRoute
  '/_appLayout/playlists': typeof AppLayoutPlaylistsRoute
  '/_appLayout/tracks': typeof AppLayoutTracksRoute
  '/_authLayout/login': typeof AuthLayoutLoginRoute
  '/_authLayout/sign-up': typeof AuthLayoutSignUpRoute
  '/_appLayout/': typeof AppLayoutIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/about'
    | '/albums'
    | '/artists'
    | '/customers'
    | '/dashboard'
    | '/employees'
    | '/genres'
    | '/invoices'
    | '/media_types'
    | '/playlists'
    | '/tracks'
    | '/login'
    | '/sign-up'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/about'
    | '/albums'
    | '/artists'
    | '/customers'
    | '/dashboard'
    | '/employees'
    | '/genres'
    | '/invoices'
    | '/media_types'
    | '/playlists'
    | '/tracks'
    | '/login'
    | '/sign-up'
    | '/'
  id:
    | '__root__'
    | '/_appLayout'
    | '/_authLayout'
    | '/_appLayout/about'
    | '/_appLayout/albums'
    | '/_appLayout/artists'
    | '/_appLayout/customers'
    | '/_appLayout/dashboard'
    | '/_appLayout/employees'
    | '/_appLayout/genres'
    | '/_appLayout/invoices'
    | '/_appLayout/media_types'
    | '/_appLayout/playlists'
    | '/_appLayout/tracks'
    | '/_authLayout/login'
    | '/_authLayout/sign-up'
    | '/_appLayout/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  AppLayoutRouteRoute: typeof AppLayoutRouteRouteWithChildren
  AuthLayoutRouteRoute: typeof AuthLayoutRouteRouteWithChildren
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authLayout': {
      id: '/_authLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthLayoutRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_appLayout': {
      id: '/_appLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_appLayout/': {
      id: '/_appLayout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppLayoutIndexRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_authLayout/sign-up': {
      id: '/_authLayout/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof AuthLayoutSignUpRouteImport
      parentRoute: typeof AuthLayoutRouteRoute
    }
    '/_authLayout/login': {
      id: '/_authLayout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLayoutLoginRouteImport
      parentRoute: typeof AuthLayoutRouteRoute
    }
    '/_appLayout/tracks': {
      id: '/_appLayout/tracks'
      path: '/tracks'
      fullPath: '/tracks'
      preLoaderRoute: typeof AppLayoutTracksRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/playlists': {
      id: '/_appLayout/playlists'
      path: '/playlists'
      fullPath: '/playlists'
      preLoaderRoute: typeof AppLayoutPlaylistsRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/media_types': {
      id: '/_appLayout/media_types'
      path: '/media_types'
      fullPath: '/media_types'
      preLoaderRoute: typeof AppLayoutMedia_typesRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/invoices': {
      id: '/_appLayout/invoices'
      path: '/invoices'
      fullPath: '/invoices'
      preLoaderRoute: typeof AppLayoutInvoicesRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/genres': {
      id: '/_appLayout/genres'
      path: '/genres'
      fullPath: '/genres'
      preLoaderRoute: typeof AppLayoutGenresRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/employees': {
      id: '/_appLayout/employees'
      path: '/employees'
      fullPath: '/employees'
      preLoaderRoute: typeof AppLayoutEmployeesRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/dashboard': {
      id: '/_appLayout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppLayoutDashboardRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/customers': {
      id: '/_appLayout/customers'
      path: '/customers'
      fullPath: '/customers'
      preLoaderRoute: typeof AppLayoutCustomersRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/artists': {
      id: '/_appLayout/artists'
      path: '/artists'
      fullPath: '/artists'
      preLoaderRoute: typeof AppLayoutArtistsRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/albums': {
      id: '/_appLayout/albums'
      path: '/albums'
      fullPath: '/albums'
      preLoaderRoute: typeof AppLayoutAlbumsRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
    '/_appLayout/about': {
      id: '/_appLayout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AppLayoutAboutRouteImport
      parentRoute: typeof AppLayoutRouteRoute
    }
  }
}

interface AppLayoutRouteRouteChildren {
  AppLayoutAboutRoute: typeof AppLayoutAboutRoute
  AppLayoutAlbumsRoute: typeof AppLayoutAlbumsRoute
  AppLayoutArtistsRoute: typeof AppLayoutArtistsRoute
  AppLayoutCustomersRoute: typeof AppLayoutCustomersRoute
  AppLayoutDashboardRoute: typeof AppLayoutDashboardRoute
  AppLayoutEmployeesRoute: typeof AppLayoutEmployeesRoute
  AppLayoutGenresRoute: typeof AppLayoutGenresRoute
  AppLayoutInvoicesRoute: typeof AppLayoutInvoicesRoute
  AppLayoutMedia_typesRoute: typeof AppLayoutMedia_typesRoute
  AppLayoutPlaylistsRoute: typeof AppLayoutPlaylistsRoute
  AppLayoutTracksRoute: typeof AppLayoutTracksRoute
  AppLayoutIndexRoute: typeof AppLayoutIndexRoute
}

const AppLayoutRouteRouteChildren: AppLayoutRouteRouteChildren = {
  AppLayoutAboutRoute: AppLayoutAboutRoute,
  AppLayoutAlbumsRoute: AppLayoutAlbumsRoute,
  AppLayoutArtistsRoute: AppLayoutArtistsRoute,
  AppLayoutCustomersRoute: AppLayoutCustomersRoute,
  AppLayoutDashboardRoute: AppLayoutDashboardRoute,
  AppLayoutEmployeesRoute: AppLayoutEmployeesRoute,
  AppLayoutGenresRoute: AppLayoutGenresRoute,
  AppLayoutInvoicesRoute: AppLayoutInvoicesRoute,
  AppLayoutMedia_typesRoute: AppLayoutMedia_typesRoute,
  AppLayoutPlaylistsRoute: AppLayoutPlaylistsRoute,
  AppLayoutTracksRoute: AppLayoutTracksRoute,
  AppLayoutIndexRoute: AppLayoutIndexRoute,
}

const AppLayoutRouteRouteWithChildren = AppLayoutRouteRoute._addFileChildren(
  AppLayoutRouteRouteChildren,
)

interface AuthLayoutRouteRouteChildren {
  AuthLayoutLoginRoute: typeof AuthLayoutLoginRoute
  AuthLayoutSignUpRoute: typeof AuthLayoutSignUpRoute
}

const AuthLayoutRouteRouteChildren: AuthLayoutRouteRouteChildren = {
  AuthLayoutLoginRoute: AuthLayoutLoginRoute,
  AuthLayoutSignUpRoute: AuthLayoutSignUpRoute,
}

const AuthLayoutRouteRouteWithChildren = AuthLayoutRouteRoute._addFileChildren(
  AuthLayoutRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  AppLayoutRouteRoute: AppLayoutRouteRouteWithChildren,
  AuthLayoutRouteRoute: AuthLayoutRouteRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
