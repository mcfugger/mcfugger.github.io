'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d64e7e61ab855a977483053aaddbf5d8",
"assets/assets/fonts/SegoeUI/SegoeUI-Bold.ttf": "b77ed086441e2d86fc0055ce409a5d46",
"assets/assets/fonts/SegoeUI/SegoeUI-Light.ttf": "b34ee12d90d0e7c0b64a4e10bc3cd75d",
"assets/assets/fonts/SegoeUI/SegoeUI-SemiBold.ttf": "310d75469691cb2a4402176b6ddbbeef",
"assets/assets/fonts/SegoeUI/SegoeUI.ttf": "463298714bb46fea5c4cb58f569767a1",
"assets/assets/icon1024.png": "e61ef39b4ea663b0be46efa2c3b4ab42",
"assets/assets/icons/ads.svg": "e26502c39dc48a8c3b3cb595fbe13116",
"assets/assets/icons/bonuswheel.svg": "5c0050f13cb1f9d03b48750fb966513e",
"assets/assets/icons/check.svg": "efc5a94fd7db97fd84629bc59feef483",
"assets/assets/icons/clicked.svg": "37ff118c5cf2d90be0a48c1b18cfb3f9",
"assets/assets/icons/connection.svg": "045501d5001c7f7c63622f54ffb24f35",
"assets/assets/icons/construction.svg": "8329224e92720f1b40cd3ab16d3407fb",
"assets/assets/icons/earned.svg": "5544f389054960eb9ee94b03852288bb",
"assets/assets/icons/empty.svg": "895443d6ab518e428a101ccc63756d3a",
"assets/assets/icons/fonts/Reklamista.ttf": "3d44074225979778671d06ce4049915d",
"assets/assets/icons/gift.svg": "388bcd2f622f895d8a0b8dd2f6fb9c76",
"assets/assets/icons/logo.svg": "a81d28dbf9e2fb3350a75ac3235eea6b",
"assets/assets/icons/money.svg": "838ce1cf82092c6f2e3edbd4ff900f0c",
"assets/assets/icons/money_card.svg": "a2b9e094f2f57e3d3804ef5c92dc990d",
"assets/assets/icons/play.svg": "76cbcbc35132118962757baa09348819",
"assets/assets/icons/refresh.svg": "bf2b71bfa33bd001c151a2bd0e6b0744",
"assets/assets/icons/search.svg": "72eef76eb5304a1ffa30627363f84027",
"assets/assets/icons/sms_error.svg": "403d5dd1736c44465cbe97d6d6886fd0",
"assets/assets/icons/sms_success.svg": "754e5af2bcfed5a7868b0aa1553bc606",
"assets/assets/icons/subscribed.svg": "5106e41d03a586b05aeaeee1b2443fbc",
"assets/assets/icons/unauth.svg": "7e1118131aa2359baedae51019038938",
"assets/assets/logoHorizontal.png": "a4385c23b4978a33bbaa7cf5aa10d152",
"assets/assets/logoVertical.png": "eb717d4abf60cb20d2d53a2a0b086de0",
"assets/assets/name.png": "786160ae53721661add50d5e406c59bf",
"assets/assets/splashLogo.png": "f5b7f6653136b6f9b5f161a42ed438f0",
"assets/assets/testScreens/Login.png": "f11ed7ae09e98f3a42d230afa6d9c753",
"assets/assets/testScreens/splashscreen.png": "aaafae84946a98838e4c4dbf9b8d98af",
"assets/FontManifest.json": "c3cd52fca613a7a435268636e5b1ca43",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dfcacb6420c1c5d0343e164a2e357c3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "202c24f43a5f169216f2e59f123607dc",
"/": "202c24f43a5f169216f2e59f123607dc",
"main.dart.js": "d045012881a9b4c2b83a9d5fdcb309a8",
"manifest.json": "cdea4a51c49890fe4d01264930e31aa1",
"splash/img/dark-1x.png": "b3ca40d88aecefb646438c7ae1776928",
"splash/img/dark-2x.png": "7e4135e3464d325681744c32a374d389",
"splash/img/dark-3x.png": "98519d6f5b27b14448b721d0276d10c8",
"splash/img/light-1x.png": "b3ca40d88aecefb646438c7ae1776928",
"splash/img/light-2x.png": "7e4135e3464d325681744c32a374d389",
"splash/img/light-3x.png": "98519d6f5b27b14448b721d0276d10c8",
"splash/style.css": "6b69cb06c7aa9b12ff83f688e0c80cde",
"version.json": "4d7aebdc325a4d6222007d355d8c98dc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
