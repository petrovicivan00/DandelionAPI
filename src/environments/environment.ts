// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  token: '60cbfec9cb844d5f96a4b221fc8f42d7',
  entityExtractionApi: 'https://api.dandelion.eu/datatxt/nex/v1',
  textSimilarityApi: 'https://api.dandelion.eu/datatxt/sim/v1',
  languageDetectionApi: 'https://api.dandelion.eu/datatxt/li/v1',
  sentimentAnalysisApi: 'https://api.dandelion.eu/datatxt/sent/v1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
