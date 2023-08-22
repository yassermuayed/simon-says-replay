/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/service-worker.js":
/*!*******************************!*\
  !*** ./src/service-worker.js ***!
  \*******************************/
/***/ (() => {

eval("\n// Based off of https://github.com/pwa-builder/PWABuilder/blob/main/docs/sw.js\n\n/*\n  Welcome to our basic Service Worker! This Service Worker offers a basic offline experience\n  while also being easily customizeable. You can add in your own code to implement the capabilities\n  listed below, or change anything else you would like.\n\n\n  Need an introduction to Service Workers? Check our docs here: https://docs.pwabuilder.com/#/home/sw-intro\n  Want to learn more about how our Service Worker generation works? Check our docs here: https://docs.pwabuilder.com/#/studio/existing-app?id=add-a-service-worker\n\n  Did you know that Service Workers offer many more capabilities than just offline? \n    - Background Sync: https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/advanced-capabilities/06\n    - Periodic Background Sync: https://web.dev/periodic-background-sync/\n    - Push Notifications: https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/advanced-capabilities/07?id=push-notifications-on-the-web\n    - Badges: https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/advanced-capabilities/07?id=application-badges\n*/\n\nconst HOSTNAME_WHITELIST = [\n    self.location.hostname,\n    'fonts.gstatic.com',\n    'fonts.googleapis.com',\n    'cdn.jsdelivr.net'\n]\n\n// The Util Function to hack URLs of intercepted requests\nconst getFixedUrl = (req) => {\n    var now = Date.now()\n    var url = new URL(req.url)\n\n    // 1. fixed http URL\n    // Just keep syncing with location.protocol\n    // fetch(httpURL) belongs to active mixed content.\n    // And fetch(httpRequest) is not supported yet.\n    url.protocol = self.location.protocol\n\n    // 2. add query for caching-busting.\n    // Github Pages served with Cache-Control: max-age=600\n    // max-age on mutable content is error-prone, with SW life of bugs can even extend.\n    // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.\n    // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190\n    if (url.hostname === self.location.hostname) {\n        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now\n    }\n    return url.href\n}\n\n/**\n *  @Lifecycle Activate\n *  New one activated when old isnt being used.\n *\n *  waitUntil(): activating ====> activated\n */\nself.addEventListener('activate', event => {\n    event.waitUntil(self.clients.claim())\n})\n\n/**\n *  @Functional Fetch\n *  All network requests are being intercepted here.\n *\n *  void respondWith(Promise<Response> r)\n */\nself.addEventListener('fetch', event => {\n    // Skip some of cross-origin requests, like those for Google Analytics.\n    if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {\n        // Stale-while-revalidate\n        // similar to HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale\n        // Upgrade from Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1\n        const cached = caches.match(event.request)\n        const fixedUrl = getFixedUrl(event.request)\n        const fetched = fetch(fixedUrl, { cache: 'no-store' })\n        const fetchedCopy = fetched.then(resp => resp.clone())\n\n        // Call respondWith() with whatever we get first.\n        // If the fetch fails (e.g disconnected), wait for the cache.\n        // If there’s nothing in cache, wait for the fetch.\n        // If neither yields a response, return offline pages.\n        event.respondWith(\n            Promise.race([fetched.catch(_ => cached), cached])\n                .then(resp => resp || fetched)\n                .catch(_ => { /* eat any errors */ })\n        )\n\n        // Update the cache with the version we fetched (only for ok status)\n        event.waitUntil(\n            Promise.all([fetchedCopy, caches.open(\"pwa-cache\")])\n                .then(([response, cache]) => response.ok && cache.put(event.request, response))\n                .catch(_ => { /* eat any errors */ })\n        )\n    }\n})\n\n\n//# sourceURL=webpack://simon-says-replay/./src/service-worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/service-worker.js"]();
/******/ 	
/******/ })()
;