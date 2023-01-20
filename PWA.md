# Provide ReactJs Application into a PWA

### Step 1 - Install Workbox as a tool to write Service Worker
- Workbox is a tool (library) that provides service worker at the level of production in a simple way. To make this work I need to install the following tools:

```shell
npm i workbox-core workbox-expiration workbox-precaching workbox-routing workbox-strategies
```

### Step 2 - Creating Web Manifest
- We need to create the app of our PWA which is the manifest if you are using CRA (Create React App), it is possible that inside the public folder it already comes with one called manifest.json. Which is a json file with information about our PWA

### Step 3 - Splash Screen
- It is shown if there is a delay when app loads!. To get this functionality if you have add the theme color, icons and description it will get generated automatically, but for safari browsers and apple it needs to be applied differently using the next syntax:

```html
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-width: 896px) and (-webkit-device-pixel-ratio: 3)" href="icons/apple-splash-1242-2688.jpg" />
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-width: 896px) and (-webkit-device-pixel-ratio: 2)" href="icons/apple-splash-828-1792.jpg" />
<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-width: 812px) and (-webkit-device-pixel-ratio: 3)" href="icons/apple-splash-1125-2436.jpg" />
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-width: 736px) and (-webkit-device-pixel-ratio: 3)" href="icons/apple-splash-1242-2208.jpg" />
<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-width: 667px) and (-webkit-device-pixel-ratio: 2)" href="icons/apple-splash-750-1334.jpg" />
```

### Step 4 - SAFARI Modifications
1. Icon you must to add following html tag
```html
<link rel="apple-touch-icon" href="%PUBLIC_URL%/enerTrack.png" />
<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180.png" />
```

2. App Title: For safari you need to provide a meta tag specific for safari
```html
<meta name="apple-mobile-web-app-title" content="Energy Tracker (Oil & Gas)" />
```

3. For standalone mode you need to add this meta tag in safari
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
```

4. Status bar for safari to minimize the status bard at top level. Add this tag:
```html
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
```

### Step 5 - Creating Service Worker
- To create the service worker we will ue workbox with all the libraries we installed check file serviceWorker.ts

### Step 6 - Register Service Worker
- To register the service worker we will create the file serviceWorkerRegistration.ts where the logic is.
- After that in index.tsx I will called the worker registration to register my PWA.

### Step 7 - Download PWA
- To test the PWA i will build the app and run my app with serve tool like this

```shell
yarn run build

npx serve -s build
```
