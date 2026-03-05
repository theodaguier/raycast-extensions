/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** PRIM API Key - Free API key from https://prim.iledefrance-mobilites.fr — Sign up, subscribe to the Navitia API, and copy your key */
  "apiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-station` command */
  export type SearchStation = ExtensionPreferences & {}
  /** Preferences accessible in the `favorites` command */
  export type Favorites = ExtensionPreferences & {}
  /** Preferences accessible in the `disruptions` command */
  export type Disruptions = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-station` command */
  export type SearchStation = {}
  /** Arguments passed to the `favorites` command */
  export type Favorites = {}
  /** Arguments passed to the `disruptions` command */
  export type Disruptions = {}
}

