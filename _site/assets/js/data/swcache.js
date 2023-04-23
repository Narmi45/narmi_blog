const resource = [
    /* --- CSS --- */
    '/narmi_blog/assets/css/style.css',

    /* --- PWA --- */
    '/narmi_blog/app.js',
    '/narmi_blog/sw.js',

    /* --- HTML --- */
    '/narmi_blog/index.html',
    '/narmi_blog/404.html',

    
        '/narmi_blog/categories/',
    
        '/narmi_blog/tags/',
    
        '/narmi_blog/archives/',
    
        '/narmi_blog/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/narmi_blog/assets/img/favicons/android-chrome-192x192.png',
        '/narmi_blog/assets/img/favicons/android-chrome-512x512.png',
        '/narmi_blog/assets/img/favicons/apple-touch-icon.png',
        '/narmi_blog/assets/img/favicons/favicon-16x16.png',
        '/narmi_blog/assets/img/favicons/favicon-32x32.png',
        '/narmi_blog/assets/img/favicons/favicon.ico',
        '/narmi_blog/assets/img/favicons/mstile-150x150.png',
        '/narmi_blog/assets/js/dist/categories.min.js',
        '/narmi_blog/assets/js/dist/commons.min.js',
        '/narmi_blog/assets/js/dist/home.min.js',
        '/narmi_blog/assets/js/dist/misc.min.js',
        '/narmi_blog/assets/js/dist/page.min.js',
        '/narmi_blog/assets/js/dist/post.min.js',
        '/narmi_blog/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

