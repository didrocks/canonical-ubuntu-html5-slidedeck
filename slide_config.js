var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Opportunistic Developers on Ubuntu',
    subtitle: 'Making Ubuntu the best platform for developers<br>(Android & cloud devs)',
    eventTitle: 'Malta sprint',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/ubuntu_cof_orange_bg.png',
    fonts: [
      'Ubuntu:regular,semibold,italic,italicsemibold'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Didier Roche',
    company: 'Desktop team, Canonical',
    email: 'didier.roche@canonical.com'
    /*gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'*/
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Canonical',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/],

  company: {
    name: 'Canonical',
    community_website: 'www.ubuntu.com',
    website: 'www.canonical.com'
  }
};

