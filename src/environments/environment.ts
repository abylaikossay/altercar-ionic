// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  desktop: true,
  console: true,
  language: 'ru',
  name: 'altercar',
  roleName: 'ROLE_USER',
  rolePath: '/main/welcome',
  // url: 'http://10.3.10.117:8085',
  // url: 'http://89.219.13.211:8085',
  url: 'http://10.4.10.197:8085',
  // imageUrl: 'http://10.3.10.g 117:8085/api/file',
  imageUrl: 'http://89.219.13.211:8085/api/file',
  // imageUrl: 'http://10.4.10.197:8085/api/file',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
