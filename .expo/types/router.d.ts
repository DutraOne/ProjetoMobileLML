/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/login/login`; params?: Router.UnknownInputParams; } | { pathname: `/registro/registro`; params?: Router.UnknownInputParams; } | { pathname: `/welcome/welcome`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/login/login`; params?: Router.UnknownOutputParams; } | { pathname: `/registro/registro`; params?: Router.UnknownOutputParams; } | { pathname: `/welcome/welcome`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/login/login${`?${string}` | `#${string}` | ''}` | `/registro/registro${`?${string}` | `#${string}` | ''}` | `/welcome/welcome${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/login/login`; params?: Router.UnknownInputParams; } | { pathname: `/registro/registro`; params?: Router.UnknownInputParams; } | { pathname: `/welcome/welcome`; params?: Router.UnknownInputParams; };
    }
  }
}
