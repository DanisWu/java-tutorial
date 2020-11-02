/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1d4c9a7b01cb2c1c73304159364ada65"
  },
  {
    "url": "assets/css/0.styles.65c8ce09.css",
    "revision": "a6f6a81e3e452235d40ad1fbb0a90e61"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1454a03e.js",
    "revision": "7d897a165ddea2ab789b29fcb8db7778"
  },
  {
    "url": "assets/js/11.f61b4616.js",
    "revision": "cbecebfd4071a93237a30e4d03d35ae8"
  },
  {
    "url": "assets/js/12.817c00ec.js",
    "revision": "24ae686e37db80e04b6d99beb0482027"
  },
  {
    "url": "assets/js/13.da04dcc2.js",
    "revision": "c653306a89b5b042803534780ca9460e"
  },
  {
    "url": "assets/js/14.bafeec55.js",
    "revision": "4b44c5c0af08e74d55c15c607aa83d57"
  },
  {
    "url": "assets/js/15.d06e0c95.js",
    "revision": "d54efaecdc3ecca98fe60ff95e291f4e"
  },
  {
    "url": "assets/js/16.006e46f0.js",
    "revision": "ea76ffa4ae64c71a2a901b563e1a4024"
  },
  {
    "url": "assets/js/17.1a758712.js",
    "revision": "7e960db359bf7580c3f6ebcb27ca4a24"
  },
  {
    "url": "assets/js/18.822883a1.js",
    "revision": "08725dea036166bc2d94183e29713682"
  },
  {
    "url": "assets/js/19.c2435088.js",
    "revision": "728ab33f1abd8f4b4498812c532db9b7"
  },
  {
    "url": "assets/js/20.c4a9e764.js",
    "revision": "6000e4930396424a539c6bdec22994ba"
  },
  {
    "url": "assets/js/21.99a9d5bd.js",
    "revision": "04bcf88cc531a40ee9fff06801de1267"
  },
  {
    "url": "assets/js/22.dc45f92d.js",
    "revision": "bd537966fcc73a02ae53a64d990fded9"
  },
  {
    "url": "assets/js/23.5f0347e3.js",
    "revision": "35fe37dfe75de43bc98137fd05f2ff8a"
  },
  {
    "url": "assets/js/24.32b834b0.js",
    "revision": "9387967d5ca6b34c8654954ca8d3b0dc"
  },
  {
    "url": "assets/js/25.31b0c1f1.js",
    "revision": "f717648d789ee514f378e6b0e4683e63"
  },
  {
    "url": "assets/js/26.213ef6b4.js",
    "revision": "298b27e2a9878c3d57e9bffb36e4807e"
  },
  {
    "url": "assets/js/27.e3d6ceeb.js",
    "revision": "3ad0ec6f0db447c9fc5db68add57f6bd"
  },
  {
    "url": "assets/js/28.161200ef.js",
    "revision": "21403fff3694902b6f798b38974a6029"
  },
  {
    "url": "assets/js/29.3f395da2.js",
    "revision": "1bc18a7246ea4d8f609624e15cfd36fd"
  },
  {
    "url": "assets/js/30.7f873bd3.js",
    "revision": "0f529f67a4299a4015db28e81a3cc64c"
  },
  {
    "url": "assets/js/31.1cb359e1.js",
    "revision": "f657a172b1a7ff10bbe129aaa531bddb"
  },
  {
    "url": "assets/js/32.6483f2fd.js",
    "revision": "89453140adb78ab399ecb1186776b6a6"
  },
  {
    "url": "assets/js/33.50f3bbd7.js",
    "revision": "916ca4cb96e1403b032c419c0c0b4163"
  },
  {
    "url": "assets/js/34.ce28b4f6.js",
    "revision": "e352c12711379a25a0cf4f3c1d50388a"
  },
  {
    "url": "assets/js/35.6896a9d6.js",
    "revision": "39d0073f5e7de090e811f1bdc4c7ce18"
  },
  {
    "url": "assets/js/36.a785a976.js",
    "revision": "f0154807ad6c7355f6da17023cd186ad"
  },
  {
    "url": "assets/js/37.77e30b25.js",
    "revision": "33ef215920a68e8634d1b41e0832ebce"
  },
  {
    "url": "assets/js/38.bc8fc6d8.js",
    "revision": "bac4e7a1ad586892d07376e347cbf7c9"
  },
  {
    "url": "assets/js/4.ce2f3f99.js",
    "revision": "6aac152e4264091151bc891ddd5befe1"
  },
  {
    "url": "assets/js/5.beaf686e.js",
    "revision": "c4c7c942324d49db15c2326b999b5b75"
  },
  {
    "url": "assets/js/6.10ffc154.js",
    "revision": "aa4d4ecd60116c6e0cf037384d86d0c2"
  },
  {
    "url": "assets/js/7.9cce5f20.js",
    "revision": "70a817c706528f83e7f544f225855ae9"
  },
  {
    "url": "assets/js/8.b19ddf4b.js",
    "revision": "62024e2e3ab3d85465061e02af9308e1"
  },
  {
    "url": "assets/js/9.3d954868.js",
    "revision": "a4397ea5856259f0b61ae8814638663c"
  },
  {
    "url": "assets/js/app.07016b0b.js",
    "revision": "6f4081d5e97d225d5046b01cf33b10b8"
  },
  {
    "url": "assets/js/vendors~flowchart.df386160.js",
    "revision": "9e51bfe691edc8bf8a33b7f6ab5bc8d3"
  },
  {
    "url": "assets/js/vendors~notification.5cedef2c.js",
    "revision": "2078acfa65b99daa1be14c50a1b5089a"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "7e94f712fccbd325f8255d21095e43f7"
  },
  {
    "url": "javaee/index.html",
    "revision": "e06aa6a4dba3ec5bcc3eb6b7a48d0b0d"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "06e78185bfece9fb6e797bd3a42398ee"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "571074fe487fb43447b538a6597b5cc3"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "474356fb37991815516a6a9be3ad779a"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "1e1f084910a7c735789ad3acb205f864"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "fa1c5a6afc3bec68c5d2eedbd63d1efb"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "679311d513ae01d827f721e41884e207"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "f3b26698c2f39580723a400e1030f86e"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "9c23b940f884a2803caf936ba6fedeff"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "14dad78c78ed175ce6445aee19f36eb3"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "a62d4add4c9fc1d9689769c1be16b048"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "a2837d880eb7358af274fad879c389c9"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "5d0d159835d8dae5e619c89a4ceb8194"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "9ab90a1a961e927e24fcb643eba051e5"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "683fe738971784268c2f96172f9feef9"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "457968ef4fbb337a3605a320a6c19dba"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "b77d66041b98c6f619a7963cc837c227"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "988ac0b5522ee5fdad098b86de4dd7b6"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "9baada304f513922d6dff3fb00437c1c"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "0dbe63ab448983cb85f73c58afa0692f"
  },
  {
    "url": "javatool/index.html",
    "revision": "462ff87be47395e6796b5afa901827ea"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "40fd71a0557b7ac7e0b3e7558fa0a146"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "f3e88d79d9f5d6a75bdaba3669401976"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "f505246142276b6c7b7996df0b71ad8c"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "73a954317a7d52624e12021ca1079a83"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "d420799ee559118eabd37dd3f5a5144f"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "e7355dc310642cf02acafdc1f8078b1d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
