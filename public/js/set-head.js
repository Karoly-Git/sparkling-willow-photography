const website =
{
    'home':
    {
        name: "Home",
        http: '',
        title: 'Home',
        css_file: 'home.css',
        subpages: {},
    },
    'gallery':
    {
        name: "Gallery",
        http: '/gallery',
        title: 'Gallery',
        css_file: 'gallery.css',
        subpages: {},
    },
    'maternity-photos':
    {
        name: "Maternity photos",
        http: '/maternity-photos',
        title: 'Maternity photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'newborn-photos':
    {
        name: "Newborn photos",
        http: '/newborn-photos',
        title: 'Newborn photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'sitter-session-photos':
    {
        name: "Sitter Session photos",
        http: '/sitter-session-photos',
        title: 'Sitter Session photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'family-photos':
    {
        name: "Family photos",
        http: '/family-photos',
        title: 'Family photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'cake-smash-photos':
    {
        name: "Cake Smash photos",
        http: '/cake-smash-photos',
        title: 'Cake Smash photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'engagement-photos':
    {
        name: "Engagement photos",
        http: '/engagement-photos',
        title: 'Engagement photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'milestones':
    {
        name: "Milestone photos",
        http: '/milestone-photos',
        title: 'Milestone photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'award-winning':
    {
        name: "Award winning photos",
        http: '/award-winning-photos',
        title: 'Award winning photos',
        css_file: 'gallery.css',
        subpages: {},
    },
    'about':
    {
        name: "About",
        http: '/about',
        title: 'About',
        css_file: 'about.css',
        subpages: {},
    },
    'blog':
    {
        name: "Blog",
        http: '/blog',
        title: 'Blog',
        css_file: 'blog.css',
        subpages: {},
    },
    'contact':
    {
        name: "Contact",
        http: '/contact',
        title: 'Contact',
        css_file: 'contact.css',
        subpages: {},
    },
    'reviews':
    {
        name: "Reviews",
        http: '/reviews',
        title: 'Reviews',
        css_file: 'reviews.css',
        subpages: {},
    },
    'faq':
    {
        name: "Faq",
        http: '/faq',
        title: 'Frequently Asked Questions',
        css_file: 'faq.css',
        subpages: {},
    },
    'privacy-policy':
    {
        name: "Privacy policy",
        http: '/privacy-policy',
        title: 'Privacy policy',
        css_file: 'privacy-policy.css',
        subpages: {},
    },
    'success':
    {
        name: "Success page",
        http: '/success',
        title: 'Email sent',
        css_file: 'error_success.css',
        subpages: {},
    },
    'error':
    {
        name: "Error page",
        http: '/error',
        title: 'Error',
        css_file: 'error_success.css',
        subpages: {},
    },
    'human-check-failed':
    {
        name: "Human check failed",
        http: '/human-check-failed',
        title: 'Human Check Failed',
        css_file: 'error_success.css',
        subpages: {},
    },
};

function getPageHTTP() {
    return `${window.location.href.split('/')[window.location.href.split('/').length - 1]}`;
}

const head = document.querySelector('head');
const title = document.querySelector('title');
const pages = Object.keys(website);

for (let pg of pages) {
    if (website[pg].http === '' + getPageHTTP() || website[pg].http === '/' + getPageHTTP()) {
        title.innerHTML = `${website[pg].title} | Sparkling Willow Photography`;
        head.innerHTML += `<link rel="stylesheet" href="css/${website[pg].css_file}">`;
    }
}

