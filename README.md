GENERAL OVERVIEW ON HOW TO OPTIMIZE YOUR APP:
1. Frontend (client-side):
    * Critical Render Path
    * Optimized Code
    * Progressive Web App
2. Network Requests: network latency:
    * Minimize Files
    * Minimize Delivery
3. Backend (Database):
    * CDNs
    * Caching
    * Load Balancing
    * DB Scaling
    * GZIP

NETWORK PERFORMANCE:
“Honey I shrunk the files”
“The traveling deliveryman”
* Browsers have a limit of files able to carry per request (2-6 based on HTTP protocols as well as a size limit for each file)
* https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser (example)

IMAGE OPTIMIZATIONS:
Image Types:
* JPG: complex, high mb
* GIF: grainy, reduced color count, good for small animation
* SVG: vector graphics, expand several times its size and keep visual effects
* PNG: smaller than jpg, allowed to add transparency
1. Minimize Text
* Use Uglify.js to remove white spaces in order to save memory before bundling.
* Also can use Minify.js for CSS files.
2. Methods to Minimize Images:
* Reduce size of PNG images by using TinyPNG and JPEG-optimizer for JPG use.
* Choose simple illustrations over highly detailed photographs.
* Always lower JPEG image quality (30-60%).
* Resize image based on size it will be displayed.
* Display different sized images for different backgrounds.
* Use CDNs like imigx (https://www.imgix.com/).
* Remove image metadata (https://www.verexif.com/)

CRITICAL RENDER PATH:
1. HTML
* Load style tag in the
* Load script right before the
2. CSS (RENDER BLOCKING)
* Only load whatever is needed
* Above the fold loading
* Media Attributes
* Less Specificity (not as important)
3. JAVASCRIPT (PARSER BLOCKING)
* Load scripts asynchronously (scripts not as important should use async or defer tag)
    * <script async>: Suggested use for scripts having no knowledge of our code since it can affect user exp.(i.e. HTML, CSS)
    * <script defer>: Loads after HTML has been parsed, great for scripts that will act on the render tree or DOM
* Defer loading of scripts
* Minimize DOM manipulation
* Avoid long running javascript
Helpful links:
* https://developers.google.com/speed/pagespeed/insights/ (test web pages on mobile or desktop with suggestions for optimizations based on webpage link provided from user)
* www.webpagetest.org
* http://youmightnotneedjquery.com/ (native JS is faster without heavy jQuery library use)
* https://css-tricks.com/prefetching-preloading-prebrowsing/ (Pre-fetching, pre-loading, pre-browsing)
* https://imagecompressor.com/ (image optimizer)

CODE SPLITTING:
* Splitting up the Javascript files based on the needs to optimize browser efficiency
* Lazy loading: deferring initialization of an object until the point at which it is needed
* Component based splitting (i.e. sidebar not activated until user clicks).
* Avoid blocking Main thread (minimize JS code, parse time)
* Avoid Memory Leaks (remove unused event listeners, variables after use, setTimeout)
* Tree shaking (Webpack configures unused code from library but not with 100% accuracy, Babel preset-env also helps with this)
Helpful Links:
* https://github.com/jamiebuilds/react-loadable
* https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/ (easy to use react component level code splitting)
* https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/ (Tree Shaking)

REACT OPTIMIZATION:
* React Perf (i.e. localhost:3000/?react_perf)
* Avoid Multiple re-rendering (minimize DOM manipulations)
* Use React Dev Tools to check "rendering processes" within each component and reduce 'ms' time
* 'shouldComponentUpdate' gives developer control to stop rerendering of components (use with caution since it will not pass props)
* PureComponent does the same job as shouldComponentUpdate if you don't have nested objects ('shallow comparison' will only rerender when props change and not deeply nested objects).
Helpful Links:
* https://github.com/maicki/why-did-you-update (Use this to tackle when to actually use performance enhancements without overly doing it)
* https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3 (React setState is asynchronous)
* https://vasanthk.gitbooks.io/react-bits/patterns/19.async-nature-of-setState.html (Async Nature Of setState())

PROGRESSIVE WEB APPLICATIONS:
* HTTPS: protects information sent through browser to server in encrypted fashion
    * https://letsencrypt.org/ (free encryption certification service)
    * https://www.cloudflare.com/ (similar hosting site with encryption)
* App Manifest:
    * Make sure the viewport inside html file is included since this is the file which makes web app responsive across different platforms (source: https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag)
    * Manifest.json is where the app's icon, name, color can be modified (favicon/splashscreen generator: https://realfavicongenerator.net/)
* Service Worker: A script (JS file) that runs in background and assists in offline first web application development (assists with Push Notifications and background syncs).
    * https://jakearchibald.github.io/isserviceworkerready/ (Which versions of the browsers have implemented service worker)
    * https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/ (PWA push notifications) Related Links:
* http://debuggerdotbreak.judahgabriel.com/2018/04/13/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned/ 
* https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7 
* https://www.pwabuilder.com/ (converting web apps into app packages) 
* https://www.macincloud.com/ (if you do not own a Mac but need xcode) 
