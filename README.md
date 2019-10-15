### GENERAL GUIDELINES BEHIND OPTIMIZING APPLICATIONS:

**We will focus on 3 aspects of an app to optimize performance as much as possible by configuring the front end side, network requests and the backend.**

 - 1. Frontend (client-side):
       * Critical Render Path
       * Optimized Code
       * Progressive Web App
 - 2. Network Requests (latency):
       * Minimize Files
       * Minimize Delivery
 - 3. Backend (Database):
       * CDNs
       * Caching
       * Load Balancing
       * DB Scaling
       * GZIP

**NETWORK PERFORMANCE:**

**MINIMIZE FILES:**

   “Honey I shrunk the files” (reference to speeding up loading process and memory space).
   “The traveling deliveryman” (processing distance, caching)
   
   - Browsers have a limit of files able to carry per request (2-6 based on HTTP protocols as well as a size limit for each file)
   - https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser (Example and definition)

**IMAGE OPTIMIZATIONS:**

   **Types of Images and Brief Overview:**
   
      - JPG: complex, high mb
      - GIF: grainy, reduced color count, good for small animation
      - SVG: vector graphics, expand several times its size and keep visual effects
      - PNG: smaller than jpg, allowed to add transparency
      
         1. Minimize Text:
            - Uglify.js can remove white spaces in order to save memory before bundling.
            - Also Minify.js available for CSS files.
            
         2. Methods to Minimize Images:
         
            - Reduce size of PNG images by using TinyPNG and JPEG-optimizer for JPG use.
            - Choose simple illustrations over highly detailed photographs.
            - Always lower JPEG image quality (30-60%).
            - Resize image based on size it will be displayed.
            - Display different sized images for different backgrounds.
            - Use CDNs like imigx (https://www.imgix.com/).
            - Remove image metadata (https://www.verexif.com/)

**CLIENT SIDE PERFORMANCE:**

**CRITICAL RENDER PATH:**

   **1. HTML**
   
      * Load style tag in the
      * Load script right before the
   **2. CSS (RENDER BLOCKING)**
   
      * Only load whatever is needed
      * Above the fold loading
      * Media Attributes
      * Less Specificity (not as important)
   **3. JAVASCRIPT (PARSER BLOCKING)**
   
      * Load scripts asynchronously (scripts not as important should use async or defer tag)
          * ``<script async>``: Suggested use for scripts having no knowledge of our code since it can affect user exp.(i.e. HTML, CSS)
          * ``<script defer>``: Loads after HTML has been parsed, great for scripts that will act on the render tree or DOM
      * Defer loading of scripts
      * Minimize DOM manipulation
      * Avoid long running javascript
   
   **Helpful links:**
   - https://developers.google.com/speed/pagespeed/insights/ (test web pages on mobile or desktop with suggestions for optimizations based on webpage link provided from user)
   - www.webpagetest.org
   - http://youmightnotneedjquery.com/ (native JS is faster without heavy jQuery library use)
   - https://css-tricks.com/prefetching-preloading-prebrowsing/ (Pre-fetching, pre-loading, pre-browsing)
   - https://imagecompressor.com/ (image optimizer)
   
 

**CODE SPLITTING:**

 - Splitting up the Javascript files based on the needs to optimize browser efficiency
 - Lazy loading: deferring initialization of an object until the point at which it is needed
 - Component based splitting (i.e. sidebar not activated until user clicks).
 - Avoid blocking Main thread (minimize JS code, parse time)
 - Avoid Memory Leaks (remove unused event listeners, variables after use, setTimeout)
 - Tree shaking (Webpack configures unused code from library but not with 100% accuracy, Babel preset-env also helps with this)
 
**Helpful Links:**

 - https://github.com/jamiebuilds/react-loadable
 - https://www.smooth-code.com/open-source/loadable-components/docs/loadable-vs-react-lazy/ (easy to use react component level code splitting)
 - https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/ (Tree Shaking)

**REACT OPTIMIZATION:**

 - React Perf (i.e. localhost:3000/?react_perf)
 - Avoid Multiple re-rendering (minimize DOM manipulations)
 - Use React Dev Tools to check "rendering processes" within each component and reduce 'ms' time
 - 'shouldComponentUpdate' gives developer control to stop rerendering of components (use with caution since it will not pass props)
 - 'PureComponent' does the same job as 'shouldComponentUpdate' if you don't have nested objects (a 'shallow comparison' will only rerender when props change and not deeply nested objects).
 
**Helpful Links:**

 - https://github.com/maicki/why-did-you-update (Use this to tackle when to actually use performance enhancements without overly doing it)
 - https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3 (React setState is asynchronous)
 - https://vasanthk.gitbooks.io/react-bits/patterns/19.async-nature-of-setState.html (Async Nature Of setState())

**PROGRESSIVE WEB APPLICATIONS:**

**HTTPS:** protects information sent through browser to server in encrypted fashion
    - https://letsencrypt.org/ (free encryption certification service)
    - https://www.cloudflare.com/ (similar hosting site with encryption)
**App Manifest:**
    - Make sure the viewport inside html file is included since this is the file which makes web app responsive across different platforms (source: https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag)
    - Manifest.json is where the app's icon, name, color can be modified (favicon/splashscreen generator: https://realfavicongenerator.net/)
    
**Service Worker:** A script (JS file) that runs in background and assists in offline first web application development (assists with Push Notifications and background syncs).
    - https://jakearchibald.github.io/isserviceworkerready/ (Which versions of the browsers have implemented service worker)
    - https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/ (PWA push notifications) 
    
**Useful Links:**

 - http://debuggerdotbreak.judahgabriel.com/2018/04/13/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned/
 - https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7
 - https://www.pwabuilder.com/ (converting web apps into app packages)
 - https://www.macincloud.com/ (if you do not own a Mac but need xcode)

**BACKEND OPTIMIZATION**

**CDNS (Content Delivery Network):**

- Helps with accelerating any website by caching its files in servers anywhere in the world. Content is served from the nearest server for the fastest possible speeds. (i.e. of popular services: CloudFare, AWS CloudFront, Microsoft Azure CDN)
- Removes latency due to factors concerning physical distance from the hosting servers (i.e. NY vs Singapore) which would require multiple routers to send files needed before finalizing request. Caching preloads files necessary in servers hosted around the world to speed up this process.

**GZIP (GNU zip):**

- One of the best way to optimize performance and simple to implement by compressing files.
- ``const compression = require('compression')`` + ``app.use(compression())`` to compress files (gzip works with many file types so the client side can reduce file size and increase performance).
- https://github.com/google/brotli (Google's Brotli is similar to gzip but 20% more efficient compressing files)

**DB SCALING:**

- Identify Inefficient Queries: Making requests only for absolutely necessary information and by indexing which helps sort through a number of records on multiple fields (i.e. creating an index on a field that is age of the user table it'll create a new copy of the data structure which holds the field value and a pointer to the record that it relates to).  Indexes allow use to binary searches to increase performance but downsize requires additional space on disk.
 - Example of creating an index: ``CREATE INDEX idx_name on table_name (column_name);``
 - Storage is the slowest piece in a relational database.  One bad SQL query can cause a huge delay.
- Increase Memory: After checking inefficient queries, one way to improve bottlenecks is to improve the hardware that the database on working on.  By increasing the amount information  in memory, you aren't acccesing the disk as often as you increase your speed so you can store more information in memory for a db but only allowed to add a certain amount of db in memory.
- Vertical Scaling (Redis, Memchached): Information can be cached on Redis to reduce amount of queries being sent to the DB (similar to CDNs but using memory access instead of disk access).
- Sharding: Simply breaking down the website or parts of data into different pieces (separate databases). Instead of searching through a giant database you can categorize the information into parts to reduce time spent on queries.
- More Databases: Having multiple db we can have more options and less queries to a single db in order to distribute the load (postgresql has preconfigured or use load balancer to distribute the loads).
- Database Type: When picking database what characteristics do we need since there are so many ways to store data.

**CACHING:**

- Process of storing some data in cache which is temporary storage component area where the data is stored so in the future data can be served faster.
 - 3 Basic components: CPUs, RAM (random access memory), Hard disk drives.
  - CPUs: Built with a special onchip memory called 'registers' which usually consists of small amount fast storage. Nowadays have some memory as well instead of doing all the brain work.  Closest and smallest memory storage in computers but also the fastest (i.e of 'registers' would be L0, L1, L3, L4 cache).
  - RAM: Closer to the CPU not as close as registers (small pieces of memory in CPU) but large enough to hold significant information (short term memory) that the CPU can access.
  - Hard disk drives: Performance cost becomes cheaper but slower.  Hard disk on the other hand can store long term data even with power shutting down.
- Server can cache information on browsers (client side), database, memory storage like redis (sessions, database requests). 

**Useful Articles relating to Caching:**

- https://www.freecodecamp.org/news/the-hidden-components-of-web-caching-970854fe2c49/ (Components of Caching)
- https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching (Http Caching)
- https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers (Increasing Application performance with HTTP Cache Headers)
