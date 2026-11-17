(function () {
  "use strict";

  /* =====================================================================
     1. CONTENT (English + French).
     ===================================================================== */
  var CV_FILE = "CV_Youssef_Hachicha.pdf";
  var CONTACT = {
    email: "youssefhachicha74@gmail.com",
    phone: "+216 58 657 389",
    phoneRaw: "+21658657389",
    linkedin: "https://www.linkedin.com/in/youssef-hachicha/",
    linkedinUser: "linkedin.com/in/youssef-hachicha",
    github: "https://github.com/Youssef-Hachicha",
    githubUser: "github.com/Youssef-Hachicha",
    location: {
      en: "Sfax, Tunisia",
      fr: "Sfax, Tunisie"
    }
  };

  /* =====================================================================
     SVG ICONS (Clean, embedded, offline-ready vector icons)
     ===================================================================== */
  function getIconSvg(name, size) {
    var s = size || 24;
    var icons = {
      sun: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
      moon: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
      envelope: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="3"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
      phone: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></svg>',
      github: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
      location: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
      copy: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
      check: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
      paperplane: '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',

      /* Technology SVG Logos */
      python: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#387eb8" d="M63.5 12.3c-14.7 0-23.7 6.4-23.7 18.7v13.7h24.3v3.4H28.4C16.1 48.1 7.2 56.6 7.2 73c0 16.5 10.3 26 23.3 26h8.6V86.7c0-13.8 11.8-24.8 25.6-24.8h24.3v-3.4H64.7c-7.9 0-14.4-6.4-14.4-14.4V26.7c0-7.9 6.4-14.4 14.4-14.4h23.7c7.9 0 14.4 6.4 14.4 14.4v9.8h11.8c12.3 0 20.3-8.8 20.3-21.2 0-12.3-8-23-20.3-23H63.5zm-8.8 7.3c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.4 2-4.4 4.4-4.4z"/><path fill="#ffe052" d="M64.5 115.7c14.7 0 23.7-6.4 23.7-18.7V83.3H63.9v-3.4h35.7c12.3 0 21.2-8.5 21.2-24.9 0-16.5-10.3-26-23.3-26h-8.6v12.3c0 13.8-11.8 24.8-25.6 24.8H39v3.4h24.3c7.9 0 14.4 6.4 14.4 14.4v17.4c0 7.9-6.4 14.4-14.4 14.4H39.6c-7.9 0-14.4-6.4-14.4-14.4v-9.8H13.4C1.1 87.6 0 96.4 0 108.8c0 12.3 8 23 20.3 23h44.2zm8.8-7.3c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4s4.4 2 4.4 4.4c0 2.4-2 4.4-4.4 4.4z"/></svg>',
      javascript: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><rect width="128" height="128" rx="16" fill="#f7df1e"/><path d="M67.3 100c0 9-5.3 14-14.3 14-8 0-12.7-4.3-15.3-9.5l9.2-5.6c1.6 2.8 3.4 5.2 6.1 5.2 3.1 0 5-1.5 5-6.6V55h11.2v45zm28.7 14.3c-14.5 0-23.5-7.5-23.5-19.5 0-11 7.2-16.8 19-21.5l3.8-1.5c6.3-2.5 9-4.5 9-8.4 0-3.6-2.8-6.1-7.5-6.1-5.1 0-8.2 2.7-10.3 6.8l-9.2-5.9c4.2-7.5 11.2-11.1 19.5-11.1 12.8 0 21 6.8 21 17.5 0 10.3-6.5 16-17.7 20.5l-4 1.6c-6.8 2.8-9.8 4.7-9.8 9 0 4.2 3.5 6.9 8.7 6.9 5.8 0 9.8-3 12.3-7.7l8.8 5.6c-4.1 8.2-11.8 13.9-20.1 13.9z"/></svg>',
      java: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#ea2d2e" d="M46.7 94.6s-5.8 3.5 4.1 4.7c12 1.4 18.2 1.2 31.4-1.5 0 0 4.6 2.9 10.8 5.4-38.3 16.2-73.4-3.1-46.3-8.6zm-4.4-17s-6.7 4.9 3.5 6.2c12.3 1.5 23.3 1.8 40.5-2.2 0 0 3.2 2.3 7.7 4.1-32.9 12.3-69.6-1.5-51.7-8.1z"/><path fill="#0074bd" d="M68.5 49.3c5.3 6.1-1.4 11.8-1.4 11.8s13.4-7 7.2-15.8c-5.8-8.3-10.8-12.4 14.8-27.4-25.5 5.5-31.5 18.1-20.6 31.4zm23.8 37.1c24.6-12.8 13.2-25.1 5.3-23.4-1.9.4-2.7.2-2.7.2s.8-1.3 2.5-1.9c10.3-3.6 18.4 13.1-5.1 25.1zm-15.6-59.2c10.5 7.6-4.5 21.2-4.5 21.2s17-8.6 9-23.7c-6.8-12.9-25.7-18.7-41.2-6.5 22.8-2 30 2.8 36.7 9z"/></svg>',
      csharp: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#9b4f96" d="M64 4.5l51.5 29.8v59.4L64 123.5 12.5 93.7V34.3L64 4.5z"/><path fill="#fff" d="M64 24.8c-21.6 0-39.2 17.6-39.2 39.2S42.4 103.2 64 103.2c15.4 0 28.8-8.9 35.1-21.8l-15.6-9c-3.6 7.4-11.3 12.5-20.1 12.5-12.4 0-22.5-10.1-22.5-22.5S51 43.1 63.4 43.1c8.9 0 16.5 5.2 20.1 12.6l15.6-9C92.8 33.7 79.4 24.8 64 24.8zm33.8 24.8v9h-6.2v4.8h6.2v9h4.8v-9h9v-4.8h-9v-9h-4.8zm-7.6 13.8v4.8h6.2v-4.8h-6.2zm13.8 0v4.8h9v-4.8h-9z"/></svg>',
      c: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#00599c" d="M64 4.5l51.5 29.8v59.4L64 123.5 12.5 93.7V34.3L64 4.5z"/><path fill="#fff" d="M64 24.8c-21.6 0-39.2 17.6-39.2 39.2S42.4 103.2 64 103.2c15.4 0 28.8-8.9 35.1-21.8l-15.6-9c-3.6 7.4-11.3 12.5-20.1 12.5-12.4 0-22.5-10.1-22.5-22.5S51 43.1 63.4 43.1c8.9 0 16.5 5.2 20.1 12.6l15.6-9C92.8 33.7 79.4 24.8 64 24.8z"/></svg>',
      php: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><ellipse cx="64" cy="64" rx="60" ry="38" fill="#777bb4"/><path fill="#fff" d="M42 48h-11l-6 32h7l2-10h6c8 0 13-4 14-11 1-7-3-11-12-11zm-3 15h-4l2-9h4c4 0 6 2 5 5 0 3-3 4-7 4zm36-15h-7l-6 32h7l2-11h9l-2 11h7l6-32h-7l-2 12h-9l2-12zm34 0h-11l-6 32h7l2-10h6c8 0 13-4 14-11 1-7-3-11-12-11zm-3 15h-4l2-9h4c4 0 6 2 5 5 0 3-3 4-7 4z"/></svg>',
      dart: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#01579b" d="M24 16l40 88 40-88z"/><path fill="#00b0ff" d="M24 16l40 40H24z"/><path fill="#29b6f6" d="M64 56l40-40H64z"/><path fill="#0288d1" d="M24 16l40 88V56z"/><path fill="#01579b" d="M64 56v48l40-88z"/></svg>',
      html5: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#e34f26" d="M19 116L9 4h110l-10 112-45 12z"/><path fill="#ef652a" d="M64 118l37-10 8-94H64z"/><path fill="#ebebeb" d="M64 54H44l-2-19h22V20H24l4 50h36zm0 37l-18-5-1-13H30l2 25 32 9z"/><path fill="#fff" d="M64 54h20l-2 19-18 5v15l18-5 1-15h15l-3 34-31 9zm0-34v15h39l1-15z"/></svg>',
      css3: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#1572b6" d="M19 116L9 4h110l-10 112-45 12z"/><path fill="#33a9dc" d="M64 118l37-10 8-94H64z"/><path fill="#ebebeb" d="M64 54H44l-2-19h22V20H24l4 50h36zm0 37l-18-5-1-13H30l2 25 32 9z"/><path fill="#fff" d="M64 54h20l-2 19-18 5v15l18-5 1-15h15l-3 34-31 9zm0-34v15h39l1-15z"/></svg>',
      react: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><circle cx="64" cy="64" r="11" fill="#61dafb"/><g fill="none" stroke="#61dafb" stroke-width="7"><ellipse cx="64" cy="64" rx="54" ry="21"/><ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(120 64 64)"/></g></svg>',
      spring: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#6db33f" d="M60.4 12.3c2.2-1.3 5-1.3 7.2 0l42.4 24.5c2.2 1.3 3.6 3.7 3.6 6.3v49c0 2.5-1.4 4.9-3.6 6.3L67.6 123c-2.2 1.3-5 1.3-7.2 0L18 98.4c-2.2-1.3-3.6-3.7-3.6-6.3v-49c0-2.5 1.4-4.9 3.6-6.3L60.4 12.3z"/><path fill="#fff" d="M84.7 75.3c-6.8 9.3-18.5 12.8-28.8 8.8-1.5-.6-2.9-1.4-4.2-2.3l6.5-3.3c.7.4 1.4.7 2.2.9 6.2 1.8 13.1-.7 16.7-6.2 3.8-5.8 2.8-13.3-2.1-18l5.2-2.6c6.2 6.5 7.4 16.2 4.5 22.7zm-26.2-7.5c-4.2-2.3-6.2-7.1-4.9-11.8 1.4-4.8 5.7-8 10.7-8.1l-2.6-5.2c-7.6.6-14 5.7-16.1 13-2 7.3 1 15 7.5 18.6l5.4-6.5z"/></svg>',
      vue: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#42b883" d="M78.8 11.5L64 37 49.2 11.5H18.5L64 90.2l45.5-78.7z"/><path fill="#35495e" d="M78.8 11.5L64 37 49.2 11.5H34.4L64 62.7l29.6-51.2z"/></svg>',
      angular: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#dd0031" d="M64 10l52 18.5-8 69.5L64 118 20 98 12 28.5z"/><path fill="#c3002f" d="M64 10v108l44-20 8-69.5z"/><path fill="#fff" d="M64 26L37.5 86h11.2l5.3-13.4h20l5.3 13.4h11.2zm-7.6 37.6l7.6-18.4 7.6 18.4z"/></svg>',
      laravel: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#ff2d20" d="M112 36.4L68.8 11.5c-2.9-1.7-6.6-1.7-9.5 0L16 36.4c-2.9 1.7-4.7 4.8-4.7 8.2v49.8c0 3.4 1.8 6.5 4.7 8.2l43.2 24.9c2.9 1.7 6.6 1.7 9.5 0L112 102.6c2.9-1.7 4.7-4.8 4.7-8.2V44.6c0-3.4-1.8-6.5-4.7-8.2zM64 21.8l36 20.8-14 8.1-36-20.8 14-8.1zm-4.8 90.4L23.2 91.4V49.8l36 20.8v41.6zm9.5 0V70.6l14-8.1v41.6l-14 8.1zm36-20.8l-14 8.1V58l14-8.1v41.3z"/></svg>',
      dotnet: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><rect width="128" height="128" rx="20" fill="#512bd4"/><path fill="#fff" d="M42 92h-8V36h8v56zm32 0h-8V60c0-6-3-9-8-9s-8 3-8 9v32h-8V36h8v15c3-5 8-8 14-8 9 0 14 6 14 16v33zm30-22c0 14-9 23-22 23-14 0-22-9-22-23s8-23 22-23c13 0 22 9 22 23zm-8 0c0-10-5-16-14-16s-14 6-14 16 5 16 14 16 14-6 14-16z"/></svg>',
      bootstrap: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><rect width="116" height="116" x="6" y="6" rx="26" fill="#7952b3"/><path fill="#fff" d="M47.7 34h20.6c11.2 0 17.7 5.7 17.7 14.1 0 6.6-4.3 11.6-10.4 13.1v.5c7.7 1.4 12.8 7.1 12.8 14.6 0 9.8-7.9 15.7-19.8 15.7H47.7V34zm13.7 20.3h6.5c4.7 0 7.7-2.3 7.7-6.2 0-4-3-6.2-7.7-6.2h-6.5v12.4zm0 29.7h7.2c5.6 0 8.9-2.5 8.9-6.9s-3.3-6.9-8.9-6.9h-7.2V84z"/></svg>',
      flutter: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#02569b" d="M79 12L24 67l17 17L96 29H79z"/><path fill="#0175c2" d="M79 67L48 98l17 17 31-31V67H79z"/><path fill="#29b6f6" d="M65 81l14-14 17 17-14 14z"/></svg>',
      firebase: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#ffa000" d="M22.5 94.7l14.4-88.8a3 3 0 0 1 5.7-.7l16.1 30.2z"/><path fill="#f57c00" d="M72.4 46.2l-10-18.8a3 3 0 0 0-5.3 0L19.4 97.4z"/><path fill="#ffca28" d="M108.6 94.7L94.2 24.3a3 3 0 0 0-5.5-1.2L18.4 97.4l41.2 23.2a10 10 0 0 0 9.6 0z"/></svg>',
      postgresql: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#336791" d="M64 12c-28.7 0-52 23.3-52 52 0 23.4 15.5 43.1 36.8 49.5 2.6.5 3.6-1.1 3.6-2.5v-9.6c-14.5 3.1-17.5-6.2-17.5-6.2-2.4-6-5.8-7.6-5.8-7.6-4.7-3.2.4-3.2.4-3.2 5.2.4 8 5.4 8 5.4 4.7 8 12.2 5.7 15.2 4.3 0-3.4 1.4-5.7 2.9-7-11.5-1.3-23.7-5.8-23.7-25.7 0-5.7 2-10.3 5.3-13.9-.5-1.3-2.3-6.6.5-13.7 0 0 4.4-1.4 14.3 5.3 4.1-1.2 8.6-1.7 13-1.7s8.9.6 13 1.7c9.9-6.7 14.3-5.3 14.3-5.3 2.8 7.1 1 12.4.5 13.7 3.3 3.6 5.3 8.2 5.3 13.9 0 20-12.2 24.4-23.8 25.6 1.9 1.6 3.5 4.8 3.5 9.7v14.4c0 1.4 1 3 3.6 2.5C100.5 107.1 116 87.4 116 64c0-28.7-23.3-52-52-52z"/></svg>',
      mysql: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#00758f" d="M64 14C36.4 14 14 36.4 14 64s22.4 50 50 50 50-22.4 50-50S91.6 14 64 14zm-4.2 81.2c-15.6 0-27.4-11.2-27.4-26.8 0-15.8 12-27 27.6-27 9.8 0 17.6 4.6 22 12l-8.6 5.2c-2.6-4.4-7.2-7.2-13.4-7.2-9.4 0-16.2 7.2-16.2 17s6.8 16.8 16.2 16.8c6.2 0 10.8-2.8 13.4-7.2l8.6 5.2c-4.4 7.4-12.2 12-22.2 12z"/><path fill="#f29111" d="M84.2 41.4L64 76.2 43.8 41.4h11.2l9 16.4 9-16.4z"/></svg>',
      sqlserver: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><ellipse cx="64" cy="30" rx="46" ry="16" fill="#cc292b"/><path fill="#e63e40" d="M18 30v32c0 8.8 20.6 16 46 16s46-7.2 46-16V30z"/><path fill="#b32426" d="M18 62v34c0 8.8 20.6 16 46 16s46-7.2 46-16V62z"/></svg>',
      oracle: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#f80000" d="M41 34h46c19.3 0 35 13.4 35 30s-15.7 30-35 30H41C21.7 94 6 80.6 6 64s15.7-30 35-30zm45 46c11 0 20-7.2 20-16s-9-16-20-16H42c-11 0-20 7.2-20 16s9 16 20 16h44z"/></svg>',
      linux: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#fcc624" d="M35 105c-5 0-9 4-9 9s4 9 9 9c7 0 15-4 22-8-6-4-15-10-22-10zm58 0c-7 0-16 6-22 10 7 4 15 8 22 8 5 0 9-4 9-9s-4-9-9-9z"/><path fill="#222" d="M64 12c-17 0-27 15-27 34 0 10 3 24 7 34-4 3-10 10-10 17 0 8 13 11 25 11 3 0 6 0 9-1 3 1 6 1 9 1 12 0 25-3 25-11 0-7-6-14-10-17 4-10 7-24 7-34 0-19-10-34-27-34z"/><ellipse cx="54" cy="42" rx="4" ry="6" fill="#fff"/><ellipse cx="74" cy="42" rx="4" ry="6" fill="#fff"/><circle cx="55" cy="43" r="2.5" fill="#000"/><circle cx="73" cy="43" r="2.5" fill="#000"/><path fill="#fcc624" d="M64 48c-7 0-10 5-10 9 0 6 5 8 10 8s10-2 10-8c0-4-3-9-10-9z"/><path fill="#fff" d="M64 68c-12 0-21 11-21 24 0 8 5 15 13 17 2-3 5-5 8-5s6 2 8 5c8-2 13-9 13-17 0-13-9-24-21-24z"/></svg>',
      windows: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><path fill="#0078d7" d="M12 21.6l44-6v43.2H12zm0 43.2h44v43.2l-44-6zm50-50.4l54-7.4v51H62zm0 50.4h54v51l-54-7.4z"/></svg>',
      uml: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><rect x="14" y="14" width="100" height="100" rx="14" fill="#0284c7" stroke="#38bdf8" stroke-width="4"/><line x1="14" y1="46" x2="114" y2="46" stroke="#fff" stroke-width="3"/><line x1="14" y1="78" x2="114" y2="78" stroke="#fff" stroke-width="3"/><circle cx="34" cy="30" r="5" fill="#fff"/><circle cx="52" cy="30" r="5" fill="#fff"/><path d="M30 62h30M30 96h50" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>',
      json: '<svg viewBox="0 0 128 128" width="' + s + '" height="' + s + '"><rect width="116" height="116" x="6" y="6" rx="20" fill="#292929"/><text x="64" y="78" fill="#f7df1e" font-family="monospace" font-size="44" font-weight="bold" text-anchor="middle">{ ; }</text></svg>'
    };
    return icons[name] || '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>';
  }

  /* =====================================================================
     CERTIFICATE BADGE ICONS (Pixel-accurate reproduction of official marks)
     ===================================================================== */
  function getCertBadgeSvg(name) {
    if (name === "pmi") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#ffffff"/>' +
        '<g transform="translate(13, 13)">' +
          '<text x="7" y="15" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="18" fill="#000000" text-anchor="middle">P</text>' +
          '<g transform="translate(20, 0)">' +
            '<path d="M1 1 C8 5, 8 13, 1 17 Z" fill="#f36d38"/>' +
            '<path d="M17 1 C10 5, 10 13, 17 17 Z" fill="#f36d38"/>' +
          '</g>' +
          '<g transform="translate(0, 20)">' +
            '<path d="M0 0 H18 V5 C13 5, 13 13, 18 13 V18 H0 V13 C5 13, 5 5, 0 5 Z" fill="#00a3e0"/>' +
          '</g>' +
          '<g transform="translate(20, 20)">' +
            '<rect width="18" height="18" fill="#4f2d7f"/>' +
            '<g clip-path="url(#pmi-clip)">' +
              '<clipPath id="pmi-clip"><rect width="18" height="18"/></clipPath>' +
              '<path d="M-5 5 L5 -5 M-5 13 L13 -5 M-5 21 L21 -5 M3 23 L23 3 M11 23 L23 11" stroke="#ffffff" stroke-width="2.5"/>' +
            '</g>' +
          '</g>' +
        '</g>' +
      '</svg>';
    }
    if (name === "cisco") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#071324"/>' +
        '<g transform="translate(12, 14)">' +
          '<rect x="0" y="14" width="2.6" height="10" rx="1.3" fill="#ffffff"/>' +
          '<rect x="4.6" y="9" width="2.6" height="15" rx="1.3" fill="#ffffff"/>' +
          '<rect x="9.2" y="4" width="2.6" height="20" rx="1.3" fill="#ffffff"/>' +
          '<rect x="13.8" y="9" width="2.6" height="15" rx="1.3" fill="#ffffff"/>' +
          '<rect x="18.4" y="14" width="2.6" height="10" rx="1.3" fill="#ffffff"/>' +
          '<rect x="23" y="9" width="2.6" height="15" rx="1.3" fill="#ffffff"/>' +
          '<rect x="27.6" y="4" width="2.6" height="20" rx="1.3" fill="#ffffff"/>' +
          '<rect x="32.2" y="9" width="2.6" height="15" rx="1.3" fill="#ffffff"/>' +
          '<rect x="36.8" y="14" width="2.6" height="10" rx="1.3" fill="#ffffff"/>' +
          '<text x="19.7" y="32" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="9.5" fill="#ffffff" text-anchor="middle" letter-spacing="1.2">CISCO</text>' +
        '</g>' +
      '</svg>';
    }
    if (name === "anthropic") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#f4f1ea"/>' +
        '<g transform="translate(13, 14)">' +
          '<path d="M10.8 1.5 L0.5 28 H6.2 L8.6 21.8 H17.8 L20.2 28 H25.8 L15.6 1.5 H10.8 Z M10.4 17.2 L13.2 9.5 L16 17.2 H10.4 Z" fill="#141413"/>' +
          '<path d="M21 1.5 L26.6 1.5 L32.6 28 L27 28 Z" fill="#141413"/>' +
        '</g>' +
      '</svg>';
    }
    if (name === "nvidia") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#0a1a0e"/>' +
        '<path d="M22 17c-4 0-7 3-7 7v16c0 4 3 7 7 7h20c4 0 7-3 7-7V24c0-4-3-7-7-7H22zm10 24c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" fill="#76b900"/>' +
        '<circle cx="32" cy="31" r="5" fill="#ffffff"/>' +
      '</svg>';
    }
    if (name === "linkedin") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#0077b5"/>' +
        '<path d="M17 25h6v18h-6zm3-8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM27 25h5.5v2.5h.1c.8-1.5 2.6-3 5.4-3 5.8 0 6.9 3.8 6.9 8.8V43h-6v-8.5c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V43h-6z" fill="#ffffff"/>' +
      '</svg>';
    }
    if (name === "spring") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#0e2414"/>' +
        '<path d="M42 18c-12 0-21 8-21 21 0 1 .1 2 .2 3L19 44c-.5.5-.2 1.3.5 1.3h1c11 0 22-7 22-21 0-3-.5-5-1.5-6.3h1z" fill="#6db33f"/>' +
      '</svg>';
    }
    if (name === "skillvalue") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#1a1a2e"/>' +
        '<rect x="10" y="10" width="44" height="44" rx="10" fill="#f36d38"/>' +
        '<text x="32" y="43" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle">S</text>' +
      '</svg>';
    }
    if (name === "google") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#ffffff"/>' +
        '<path d="M32 29h15c.5 2 .8 4 .8 6C47.8 44.5 41 50 32 50c-10 0-18-8-18-18s8-18 18-18c5 0 9 1.9 12 5l-5 5c-1.9-1.8-4.4-2.8-7-2.8-5.5 0-10 4.5-10 10s4.5 10 10 10c5 0 9-3 10-7H32v-6z" fill="#4285f4"/>' +
        '<path d="M18 32c0-7.7 5.7-14 13-15.6l-6-5.2C18.5 14.2 14 22.6 14 32s4.5 17.8 11 20.8l6-5.2C24.3 46 18 39.7 18 32z" fill="#34a853"/>' +
      '</svg>';
    }
    if (name === "hackathon") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#1a0a2e"/>' +
        '<path d="M34 12l-12 22h10l-4 18 16-26H34l4-14z" fill="#a855f7" stroke="#c084fc" stroke-width="1" stroke-linejoin="round"/>' +
      '</svg>';
    }
    if (name === "amigoscode") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#0f172a"/>' +
        '<path d="M20 44l10-24 10 24" fill="none" stroke="#6db33f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M24 36h12" stroke="#6db33f" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="44" cy="22" r="4" fill="#6db33f"/>' +
      '</svg>';
    }
    if (name === "flutter") {
      return '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#0a192e"/>' +
        '<path fill="#02569b" d="M39 14L16 37l7 7 30-30H39z"/>' +
        '<path fill="#0175c2" d="M39 37L26 50l7 7 20-20V37H39z"/>' +
        '<path fill="#29b6f6" d="M33 43l7-7 7 7-7 7z"/>' +
      '</svg>';
    }
    return '<svg viewBox="0 0 64 64" width="52" height="52"><rect width="64" height="64" rx="16" fill="#1e1840"/><circle cx="32" cy="32" r="12" fill="#8b5cf6"/></svg>';
  }

  /* =====================================================================
     SKILLS DATA (Rich metadata with categorized items)
     ===================================================================== */
  var SKILLS = [
    // Programming Languages (Primary focus, highlighted with icons & cards)
    {
      name: "Python",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: "AI, Machine Learning, Data processing, Scripting & TTS", fr: "IA, Machine Learning, Traitement de données, Scripts & Synthèse vocale" },
      color: "#3776ab",
      rgb: "55, 118, 171",
      icon: "python"
    },
    {
      name: "JavaScript",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: "Modern ES6+, interactive web applications & dynamic DOM", fr: "ES6+ moderne, applications web interactives & DOM dynamique" },
      color: "#f7df1e",
      rgb: "247, 223, 30",
      icon: "javascript"
    },
    {
      name: "Java",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: "Object-oriented backend systems & Enterprise applications", fr: "Systèmes backend orientés objet & Applications d'entreprise" },
      color: "#ea2d2e",
      rgb: "234, 45, 46",
      icon: "java"
    },
    {
      name: "C#",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: ".NET framework, desktop & data-driven business solutions", fr: "Écosystème .NET, applications desktop & gestion de stock" },
      color: "#9b4f96",
      rgb: "155, 79, 150",
      icon: "csharp"
    },
    {
      name: "Dart",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: "Strongly typed client-side language powering Flutter apps", fr: "Langage typé moderne propulsant les applications mobiles Flutter" },
      color: "#0175c2",
      rgb: "1, 117, 194",
      icon: "dart"
    },
    {
      name: "PHP",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: "Backend server scripting, MVC apps & RESTful API endpoints", fr: "Développement web côté serveur, architecture MVC & API REST" },
      color: "#777bb4",
      rgb: "119, 123, 180",
      icon: "php"
    },
    {
      name: "C",
      category: "lang",
      catLabel: { en: "Programming Language", fr: "Langage de programmation" },
      desc: { en: "Procedural programming, low-level memory & core algorithms", fr: "Programmation procédurale, structures de données & algorithmique" },
      color: "#00599c",
      rgb: "0, 89, 156",
      icon: "c"
    },
    {
      name: "HTML5",
      category: "lang",
      catLabel: { en: "Web Markup", fr: "Balisage Web" },
      desc: { en: "Semantic web structure, accessibility & modern web APIs", fr: "Structure sémantique, accessibilité & intégration web moderne" },
      color: "#e34f26",
      rgb: "227, 79, 38",
      icon: "html5"
    },
    {
      name: "CSS3",
      category: "lang",
      catLabel: { en: "Modern Styling", fr: "Styles Modernes" },
      desc: { en: "Responsive layouts, Flexbox, Grid, CSS variables & animations", fr: "Mises en page responsives, Flexbox, CSS Grid & animations fluides" },
      color: "#1572b6",
      rgb: "21, 114, 182",
      icon: "css3"
    },

    // Frameworks
    {
      name: "React.js",
      category: "fw",
      catLabel: { en: "Frontend Framework", fr: "Framework Frontend" },
      desc: { en: "Component-driven single page applications & custom hooks", fr: "Applications réactives, architecture par composants & state management" },
      color: "#61dafb",
      rgb: "97, 218, 251",
      icon: "react"
    },
    {
      name: "Spring Boot",
      category: "fw",
      catLabel: { en: "Backend Framework", fr: "Framework Backend" },
      desc: { en: "Production-ready Java REST APIs, Spring Security & JPA", fr: "APIs REST sécurisées en Java, Spring Data JPA & architecture microservices" },
      color: "#6db33f",
      rgb: "109, 179, 63",
      icon: "spring"
    },
    {
      name: "Vue.js",
      category: "fw",
      catLabel: { en: "Frontend Framework", fr: "Framework Frontend" },
      desc: { en: "Progressive JavaScript framework & reactive UI components", fr: "Framework réactif progressif pour interfaces dynamiques et modulaires" },
      color: "#42b883",
      rgb: "66, 184, 131",
      icon: "vue"
    },
    {
      name: "Angular",
      category: "fw",
      catLabel: { en: "Enterprise Framework", fr: "Framework Entreprise" },
      desc: { en: "TypeScript enterprise web application architecture", fr: "Plateforme robuste en TypeScript pour applications d'entreprise" },
      color: "#dd0031",
      rgb: "221, 0, 49",
      icon: "angular"
    },
    {
      name: "Laravel",
      category: "fw",
      catLabel: { en: "PHP Framework", fr: "Framework PHP" },
      desc: { en: "Elegant MVC architecture, Eloquent ORM & route handling", fr: "Architecture MVC propre, ORM Eloquent & gestion de routes performante" },
      color: "#ff2d20",
      rgb: "255, 45, 32",
      icon: "laravel"
    },
    {
      name: "Entity Framework",
      category: "fw",
      catLabel: { en: "ORM (.NET)", fr: "ORM (.NET)" },
      desc: { en: "Object-relational mapping for .NET applications & database access", fr: "Mapping objet-relationnel pour écosystème C# / .NET" },
      color: "#512bd4",
      rgb: "81, 43, 212",
      icon: "dotnet"
    },
    {
      name: "Bootstrap",
      category: "fw",
      catLabel: { en: "UI Framework", fr: "Framework UI" },
      desc: { en: "Fast responsive prototyping & mobile-first utility classes", fr: "Grille responsive rapide & composants prêts à l'emploi" },
      color: "#7952b3",
      rgb: "121, 82, 179",
      icon: "bootstrap"
    },

    // Mobile & Cloud
    {
      name: "Flutter",
      category: "mobile",
      catLabel: { en: "Mobile Framework", fr: "Framework Mobile" },
      desc: { en: "Cross-platform iOS & Android mobile apps with native performance", fr: "Applications mobiles iOS & Android multiplateformes haute performance" },
      color: "#02569b",
      rgb: "2, 86, 155",
      icon: "flutter"
    },
    {
      name: "Firebase",
      category: "mobile",
      catLabel: { en: "Cloud Platform", fr: "Plateforme Cloud" },
      desc: { en: "Authentication, Firestore real-time database & cloud services", fr: "Authentification sécurisée, Firestore en temps réel & stockage cloud" },
      color: "#ffca28",
      rgb: "255, 202, 40",
      icon: "firebase"
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "db",
      catLabel: { en: "Relational DB", fr: "Base relationnelle" },
      desc: { en: "Advanced SQL queries, indexed transactions & ACID compliance", fr: "Requêtes avancées, intégrité transactionnelle & support JSON" },
      color: "#336791",
      rgb: "51, 103, 145",
      icon: "postgresql"
    },
    {
      name: "MySQL",
      category: "db",
      catLabel: { en: "Relational DB", fr: "Base relationnelle" },
      desc: { en: "Relational schema design, optimized joins & web database engine", fr: "Conception de schémas relationnels, jointures optimisées & requêtes SQL" },
      color: "#00758f",
      rgb: "0, 117, 143",
      icon: "mysql"
    },
    {
      name: "SQL Server",
      category: "db",
      catLabel: { en: "Enterprise DB", fr: "Base d'entreprise" },
      desc: { en: "Microsoft T-SQL development, stored procedures & triggers", fr: "T-SQL Microsoft, procédures stockées, triggers et vues" },
      color: "#cc292b",
      rgb: "204, 41, 43",
      icon: "sqlserver"
    },
    {
      name: "Oracle / PL-SQL",
      category: "db",
      catLabel: { en: "Enterprise DB", fr: "Base d'entreprise" },
      desc: { en: "Stored packages, triggers, cursors & high-volume transactional DB", fr: "Packages, déclencheurs, curseurs & gestion transactionnelle" },
      color: "#f80000",
      rgb: "248, 0, 0",
      icon: "oracle"
    },

    // Systems and tools
    {
      name: "Linux",
      category: "tools",
      catLabel: { en: "Operating System", fr: "Système d'exploitation" },
      desc: { en: "UNIX shell environment, CLI utilities, permissions & hosting", fr: "Ligne de commande Bash, administration système & environnements dev" },
      color: "#fcc624",
      rgb: "252, 198, 36",
      icon: "linux"
    },
    {
      name: "Windows",
      category: "tools",
      catLabel: { en: "Operating System", fr: "Système d'exploitation" },
      desc: { en: "Windows development environment, PowerShell scripting & tooling", fr: "Environnement de travail, scripts PowerShell & outils Microsoft" },
      color: "#0078d7",
      rgb: "0, 120, 215",
      icon: "windows"
    },
    {
      name: "UML / Enterprise Architect",
      category: "tools",
      catLabel: { en: "Modelling & Design", fr: "Modélisation & Conception" },
      desc: { en: "Use case, class, sequence diagrams & software architecture modelling", fr: "Diagrammes de cas d'utilisation, classes, séquences & conception logicielle" },
      color: "#0284c7",
      rgb: "2, 132, 199",
      icon: "uml"
    },
    {
      name: "JSON / REST APIs",
      category: "tools",
      catLabel: { en: "Data & Protocols", fr: "Données & Protocoles" },
      desc: { en: "Data serialization, API endpoints design & client-server exchanges", fr: "Sérialisation de données, format d'échanges client-serveur & payloads REST" },
      color: "#8390ff",
      rgb: "131, 144, 255",
      icon: "json"
    }
  ];

  var D = {
    en: {
      title: "Youssef Hachicha – Full Stack Developer and AI researcher",
      nav: { about: "About", projects: "Projects", skills: "Skills", certifications: "Certifications", languages: "Languages", events: "Events", contact: "Contact" },
      navContact: "Contact me",
      role: "Full Stack Developer and AI researcher",
      cta: { contact: "Get in touch", linkedin: "LinkedIn profile" },
      cv: "Download CV",
      hint: "This name started as noise. Move your cursor through it, click to run it again.",
      init: "init", epoch: "epoch", loss: "loss",
      about: {
        title: "About",
        intro: "Where the training data comes from.",
        lead: [
          "I'm Youssef, a management computer science student from Sfax, Tunisia. I build web and mobile applications, and I'm moving toward AI research.",
          "I'm doing a research Master in Information Systems and New Technologies (SINT) to deepen my academic and practical knowledge and build solutions that are efficient and relevant."
        ],
        eduTitle: "Education",
        edu: [
          { d: "2025 – 2027", t: "Research Master, Information Systems and New Technologies (SINT)", o: "FSEG Sfax", p: "Admitted to the 1st year." },
          { d: "2022 – 2025", t: "Bachelor in Management Computer Science", o: "FSEG Sfax", p: "Graduated in 2025 with an \"Assez Bien\" distinction." },
          { d: "2022", t: "Baccalaureate in Economics", o: "", p: "Passed with an \"Assez Bien\" distinction." }
        ],
        expTitle: "Experience",
        exp: [
          { d: "Mar – May 2025", t: "Final-year internship", o: "Association for the Preservation of the Quran", p: "Designed and built a web app to manage Quran learning and revision, with UML modelling in Enterprise Architect.", tags: ["Spring Boot", "React.js", "MySQL", "UML"] },
          { d: "July 2023", t: "Summer internship", o: "STEG Sfax", p: "Designed and built a fixed-asset management website, with UML modelling in Enterprise Architect.", tags: ["PHP", "HTML", "CSS", "Bootstrap", "UML"] }
        ]
      },
      projects: {
        title: "Projects",
        intro: "One run per academic year. Open a run to read it.",
        status: "finished",
        runs: [
          { t: "FSEGS clubs mobile app", d: "2025 – 2026", p: "A mobile app to manage the clubs of the FSEGS: events, trainings and memberships, with secure authentication.", tags: ["Flutter", "Dart", "Firebase"] },
          { t: "Device repair management app", d: "2023 – 2024", p: "A web app that automates repair management: repair sheets, labels and invoices, with secure access and a central database.", tags: ["React", "Spring Boot"] },
          { t: "Internship management website", d: "2022 – 2023", p: "Design and development of a website to manage internships.", tags: ["PHP", "HTML", "CSS", "Bootstrap"] },
          { t: "Stock management website", d: "2022 – 2023", p: "Design and development of a stock management website.", tags: ["C#", "Entity Framework"] }
        ]
      },
      skills: {
        title: "Skills",
        intro: "Programming languages, frameworks, and modern technologies mastered. Displayed as designed cards.",
        filterAll: "All",
        filterLang: "Languages",
        filterFw: "Frameworks",
        filterMobile: "Mobile",
        filterDb: "Databases",
        filterTools: "Tools & Systems",
        catHeaders: {
          lang: "Programming Languages",
          fw: "Frameworks & Libraries",
          mobile: "Mobile & Cloud Platforms",
          db: "Databases & Storage",
          tools: "Operating Systems & Tools"
        },
        viewMapBtn: "Toggle AI Embedding Map"
      },
      certifications: {
        tag: "RECOGNITION",
        title: "Certifications",
        intro: "Verified credentials and completed training programs.",
        viewCert: "View Certificate",
        list: [
          {
            id: "nvidia-dl",
            title: "Getting Started with Deep Learning",
            issuer: "NVIDIA",
            badge: "nvidia",
            color: "#76b900",
            file: "Certifications/My Learning _ NVIDIA.pdf"
          },
          {
            id: "linkedin-genai",
            title: "What Is Generative AI?",
            issuer: "LinkedIn Learning",
            date: "Aug 2025",
            badge: "linkedin",
            color: "#0077b5",
            file: "Certifications/CertificatDaccomplissement_What Is Generative AI.pdf"
          },
          {
            id: "spring-boot",
            title: "Spring Boot For Beginners",
            issuer: "Amigoscode",
            date: "Nov 2024",
            badge: "amigoscode",
            color: "#6db33f",
            file: "Certifications/certificate-of-completion-for-getting-started-with-spring-boot.pdf"
          },
          {
            id: "flutter-t3alem",
            title: "Flutter Online Course",
            issuer: "T3alem.tn",
            badge: "flutter",
            color: "#02569b",
            file: "Certifications/certification_t3alem.pdf"
          },
          {
            id: "flutter-quiz",
            title: "Flutter Quiz – Medium Level",
            issuer: "SkillValue by Pentalog",
            badge: "skillvalue",
            color: "#f36d38",
            file: "Certifications/flutter.JPG"
          },
          {
            id: "flutter-gsc",
            title: "Flutter Training",
            issuer: "Google Students Club FSEGS",
            badge: "google",
            color: "#4285f4",
            file: "Certifications/Flutter.png"
          },
          {
            id: "arsii-2026",
            title: "ARSII DAYS\u002726 Hackathon",
            issuer: "FSEG Sfax – ARSII",
            date: "Oct 2026",
            badge: "hackathon",
            color: "#a855f7",
            file: "Certifications/Attestation_ARSIIDAYS26_Youssef_hachicha.pdf"
          }
        ]
      },
      languages: {
        tag: "COMMUNICATION",
        title: "Languages",
        intro: "Multilingual proficiency facilitating global technical collaboration and research.",
        list: [
          {
            code: "ar",
            symbol: "ع",
            name: "Arabic",
            level: "Native language",
            percent: 100
          },
          {
            code: "fr",
            symbol: "Fr",
            name: "French",
            level: "Working proficiency",
            percent: 78
          },
          {
            code: "en",
            symbol: "En",
            name: "English",
            level: "Working proficiency",
            percent: 75
          }
        ]
      },
      events: {
        title: "Events",
        intro: "Where I tested myself outside the classroom.",
        list: [
          { t: "ARSII DAYS'26: Smart Management for the New Economy", d: "9 – 11 Oct 2026", o: "FSEG Sfax", p: "I took part in the ARSII days and hackathon, organised by ARSII-Sfax, the scientific research and innovation association in computer science.", tags: ["Hackathon", "Innovation"] },
          { t: "Speech processing week: from speech synthesis to deepfake detection", d: "28 Sep – 2 Oct 2026", o: "Master TALP Sfax, Erasmus+ with Le Mans Université", p: "A week on text-to-speech, neural voice synthesis, voice conversion and cloning, speech corpora, benchmarking and perceptual tests, ending with a mini-project.", tags: ["TTS", "Voice cloning", "Deepfake detection", "Python"] }
        ]
      },
      contact: {
        title: "Contact",
        intro: "Open to internships, research projects and collaborations.",
        opportunityTitle: "Final-Year Project Opportunity",
        opportunityDesc: "Looking for a 4–6 month final-year project (PFE) starting early 2027. Feel free to reach out to discuss your projects or a possible collaboration!",
        labels: {
          email: "PROFESSIONAL EMAIL",
          phone: "PHONE",
          linkedin: "LINKEDIN",
          github: "GITHUB",
          location: "LOCATION"
        },
        copy: "Copy",
        copied: "Copied!",
        placeholders: {
          name: "Your Name",
          email: "Your Email",
          subject: "Subject",
          message: "Your Message"
        },
        send: "Send message",
        successToast: "Email client opened with prefilled message!",
        place: "Based in Sfax, Tunisia.",
        done: "converged"
      },
      foot: "Built with modern HTML, CSS and JavaScript. High performance and accessibility."
    },

    fr: {
      title: "Youssef Hachicha – Développeur Full Stack et chercheur en IA",
      nav: { about: "À propos", projects: "Projets", skills: "Compétences", certifications: "Certifications", languages: "Langues", events: "Événements", contact: "Contact" },
      navContact: "Me contacter",
      role: "Développeur Full Stack et chercheur en IA",
      cta: { contact: "Me contacter", linkedin: "Profil LinkedIn" },
      cv: "Télécharger CV",
      hint: "Ce nom est parti du bruit. Passe le curseur dessus, clique pour relancer.",
      init: "init", epoch: "époque", loss: "perte",
      about: {
        title: "À propos",
        intro: "D'où viennent les données d'entraînement.",
        lead: [
          "Je suis Youssef, étudiant en informatique de gestion à Sfax, en Tunisie. Je crée des applications web et mobiles, et je me dirige vers la recherche en IA.",
          "Je prépare un Master de Recherche en Systèmes d'Information et Nouvelles Technologies (SINT) pour approfondir mes connaissances académiques et pratiques et développer des solutions performantes et pertinentes."
        ],
        eduTitle: "Formation",
        edu: [
          { d: "2025 – 2027", t: "Master de Recherche, Systèmes d'Information et Nouvelles Technologies (SINT)", o: "FSEG Sfax", p: "Admis en 1re année." },
          { d: "2022 – 2025", t: "Licence en Informatique de Gestion", o: "FSEG Sfax", p: "Diplômé en 2025 avec la mention Assez Bien." },
          { d: "2022", t: "Baccalauréat Économie", o: "", p: "Obtenu avec la mention Assez Bien." }
        ],
        expTitle: "Expérience",
        exp: [
          { d: "Mars – mai 2025", t: "Stage de fin d'études", o: "Association de préservation du Coran", p: "Conception et développement d'une application web de gestion de l'apprentissage du Coran et de sa révision, avec modélisation UML sous Enterprise Architect.", tags: ["Spring Boot", "React.js", "MySQL", "UML"] },
          { d: "Juillet 2023", t: "Stage d'été", o: "STEG Sfax", p: "Conception et développement d'un site web de gestion des immobilisations, avec modélisation UML sous Enterprise Architect.", tags: ["PHP", "HTML", "CSS", "Bootstrap", "UML"] }
        ]
      },
      projects: {
        title: "Projets",
        intro: "Un entraînement par année universitaire. Ouvre-en un pour le lire.",
        status: "terminé",
        runs: [
          { t: "Application mobile des clubs de la FSEGS", d: "2025 – 2026", p: "Une application mobile de gestion des clubs de la FSEGS : événements, formations et adhésions, avec authentification sécurisée.", tags: ["Flutter", "Dart", "Firebase"] },
          { t: "Application de gestion des réparations", d: "2023 – 2024", p: "Une application web qui automatise la gestion des réparations d'appareils : fiches, étiquettes et factures, avec accès sécurisé et base de données centralisée.", tags: ["React", "Spring Boot"] },
          { t: "Site de gestion des stages", d: "2022 – 2023", p: "Conception et développement d'un site web de gestion des stages.", tags: ["PHP", "HTML", "CSS", "Bootstrap"] },
          { t: "Site de gestion de stock", d: "2022 – 2023", p: "Conception et développement d'un site web de gestion de stock.", tags: ["C#", "Entity Framework"] }
        ]
      },
      skills: {
        title: "Compétences",
        intro: "Langages de programmation, frameworks et technologies modernes maîtrisés. Présentés sous forme de cartes élégantes.",
        filterAll: "Tous",
        filterLang: "Langages",
        filterFw: "Frameworks",
        filterMobile: "Mobile",
        filterDb: "Bases de données",
        filterTools: "Outils & Systèmes",
        catHeaders: {
          lang: "Langages de programmation",
          fw: "Frameworks & Bibliothèques",
          mobile: "Développement Mobile & Cloud",
          db: "Bases de données & Persistance",
          tools: "Systèmes d'exploitation & Outils"
        },
        viewMapBtn: "Afficher la carte d'embeddings IA"
      },
      certifications: {
        tag: "RECONNAISSANCE",
        title: "Certifications",
        intro: "Titres vérifiés et formations complétées.",
        viewCert: "Voir le certificat",
        list: [
          {
            id: "nvidia-dl",
            title: "Initiation au Deep Learning",
            issuer: "NVIDIA",
            badge: "nvidia",
            color: "#76b900",
            file: "Certifications/My Learning _ NVIDIA.pdf"
          },
          {
            id: "linkedin-genai",
            title: "Qu'est-ce que l'IA générative ?",
            issuer: "LinkedIn Learning",
            date: "Août 2025",
            badge: "linkedin",
            color: "#0077b5",
            file: "Certifications/CertificatDaccomplissement_What Is Generative AI.pdf"
          },
          {
            id: "spring-boot",
            title: "Spring Boot pour débutants",
            issuer: "Amigoscode",
            date: "Nov 2024",
            badge: "amigoscode",
            color: "#6db33f",
            file: "Certifications/certificate-of-completion-for-getting-started-with-spring-boot.pdf"
          },
          {
            id: "flutter-t3alem",
            title: "Formation Flutter en ligne",
            issuer: "T3alem.tn",
            badge: "flutter",
            color: "#02569b",
            file: "Certifications/certification_t3alem.pdf"
          },
          {
            id: "flutter-quiz",
            title: "Quiz Flutter – Niveau intermédiaire",
            issuer: "SkillValue by Pentalog",
            badge: "skillvalue",
            color: "#f36d38",
            file: "Certifications/flutter.JPG"
          },
          {
            id: "flutter-gsc",
            title: "Formation Flutter",
            issuer: "Google Students Club FSEGS",
            badge: "google",
            color: "#4285f4",
            file: "Certifications/Flutter.png"
          },
          {
            id: "arsii-2026",
            title: "Hackathon ARSII DAYS\u002726",
            issuer: "FSEG Sfax – ARSII",
            date: "Oct 2026",
            badge: "hackathon",
            color: "#a855f7",
            file: "Certifications/Attestation_ARSIIDAYS26_Youssef_hachicha.pdf"
          }
        ]
      },
      languages: {
        tag: "COMMUNICATION",
        title: "Langues",
        intro: "Compétences linguistiques facilitant la collaboration internationale et la recherche.",
        list: [
          {
            code: "ar",
            symbol: "ع",
            name: "Arabe",
            level: "Langue maternelle",
            percent: 100
          },
          {
            code: "fr",
            symbol: "Fr",
            name: "Français",
            level: "Capacité professionnelle",
            percent: 78
          },
          {
            code: "en",
            symbol: "En",
            name: "Anglais",
            level: "Capacité professionnelle",
            percent: 75
          }
        ]
      },
      events: {
        title: "Événements",
        intro: "Là où je me suis mis à l'épreuve hors de la salle de cours.",
        list: [
          { t: "ARSII DAYS'26 : Smart Management for the New Economy", d: "9 – 11 oct. 2026", o: "FSEG Sfax", p: "J'ai participé aux journées et au hackathon ARSII, organisés par ARSII-Sfax, l'association de recherche scientifique et d'innovation en informatique.", tags: ["Hackathon", "Innovation"] },
          { t: "Semaine traitement de la parole : de la synthèse vocale à la détection de deepfakes", d: "28 sept. – 2 oct. 2026", o: "Master TALP Sfax, Erasmus+ avec Le Mans Université", p: "Une semaine sur la synthèse vocale (TTS), les systèmes neuronaux, la conversion et le clonage vocal, les corpus, le benchmarking et les tests perceptifs, terminée par un mini-projet.", tags: ["TTS", "Clonage vocal", "Détection de deepfakes", "Python"] }
        ]
      },
      contact: {
        title: "Contact",
        intro: "Ouvert aux stages, projets de recherche et collaborations.",
        opportunityTitle: "Opportunité Projet de Fin d'Études",
        opportunityDesc: "À la recherche d'un projet de fin d'études (PFE) de 4 à 6 mois début 2027. N'hésitez pas à me contacter pour échanger sur vos projets ou une éventuelle collaboration !",
        labels: {
          email: "EMAIL PROFESSIONNEL",
          phone: "TÉLÉPHONE",
          linkedin: "LINKEDIN",
          github: "GITHUB",
          location: "LOCALISATION"
        },
        copy: "Copier",
        copied: "Copié !",
        placeholders: {
          name: "Votre nom",
          email: "Votre email",
          subject: "Sujet",
          message: "Votre message"
        },
        send: "Envoyer le message",
        successToast: "Messagerie ouverte avec le message pré-rempli !",
        place: "Basé à Sfax, Tunisie.",
        done: "convergé"
      },
      foot: "Conçu en HTML, CSS et JavaScript modernes. Haute performance et design soigné."
    }
  };

  var SECTIONS = ["about", "projects", "skills", "certifications", "languages", "events", "contact"];

  /* =====================================================================
     2. STATE + THEME + TOAST
     ===================================================================== */
  var lang = "fr";
  try {
    var saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") lang = saved;
    else if ((navigator.language || "").toLowerCase().indexOf("fr") === 0) lang = "fr";
    else lang = "en";
  } catch (e) { /* storage unavailable */ }

  var currentSkillFilter = "all";
  var showEmbeddingMap = false;

  var $ = function (id) { return document.getElementById(id); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showToast(msg) {
    var t = $("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("visible");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () {
      t.classList.remove("visible");
    }, 2800);
  }

  function copyToClipboard(text, btnElement, copiedText) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess, fallback);
    } else {
      fallback();
    }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        onSuccess();
      } catch (err) {
        showToast(text);
      }
      document.body.removeChild(ta);
    }
    function onSuccess() {
      if (btnElement) {
        var orig = btnElement.innerHTML;
        btnElement.innerHTML = getIconSvg("check", 14) + " <span>" + (copiedText || "Copié !") + "</span>";
        btnElement.classList.add("copied");
        setTimeout(function () {
          btnElement.innerHTML = orig;
          btnElement.classList.remove("copied");
        }, 2000);
      }
      showToast((copiedText || "Copié") + " : " + text);
    }
  }

  /* Theme management */
  function getTheme() {
    return document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function updateThemeUI(theme) {
    var iconWrap = $("themeIcon");
    if (!iconWrap) return;
    if (theme === "dark") {
      iconWrap.innerHTML = getIconSvg("sun", 18);
      $("themeToggle").setAttribute("aria-label", lang === "fr" ? "Activer le mode clair" : "Switch to light mode");
      $("themeToggle").setAttribute("title", lang === "fr" ? "Mode clair" : "Light mode");
    } else {
      iconWrap.innerHTML = getIconSvg("moon", 18);
      $("themeToggle").setAttribute("aria-label", lang === "fr" ? "Activer le mode sombre" : "Switch to dark mode");
      $("themeToggle").setAttribute("title", lang === "fr" ? "Mode sombre" : "Dark mode");
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    updateThemeUI(theme);
    readColors();
    drawLoss();
  }

  /* =====================================================================
     3. PAGE RENDERING
     ===================================================================== */
  function tags(a) {
    return a && a.length ? '<div class="tags">' + a.map(function (x) { return '<span class="tag">' + x + "</span>"; }).join("") + "</div>" : "";
  }
  function row(o) {
    return '<div class="row"><time>' + o.d + "</time><div><strong>" + o.t + "</strong>" +
      (o.o ? '<div class="org">' + o.o + "</div>" : "") + (o.p ? "<p>" + o.p + "</p>" : "") + tags(o.tags) + "</div></div>";
  }
  function head(d, key) {
    var n = SECTIONS.indexOf(key) + 1;
    return '<div class="sec-head"><p class="epoch">' + d.epoch + " " + n + "/" + SECTIONS.length + " · " + d.nav[key] +
      "</p><h2>" + d[key].title + "</h2><p class=\"intro\">" + d[key].intro + "</p></div>";
  }
  function wrap(d, key, body) {
    return '<div class="sec-grid">' + head(d, key) + '<div class="sec-body">' + body + "</div></div>";
  }

  /* AI Embedding Map (Bonus Interactive Canvas View) */
  var CENTERS = [[22, 30], [62, 28], [88, 52], [26, 80], [62, 78]];
  var MAP_GROUPS = [
    { n: "Languages", i: ["Python", "JavaScript", "Java", "C#", "Dart", "PHP", "C", "HTML5", "CSS3"] },
    { n: "Frameworks", i: ["React.js", "Spring Boot", "Vue.js", "Angular", "Laravel", "Entity Framework", "Bootstrap"] },
    { n: "Mobile", i: ["Flutter", "Firebase"] },
    { n: "Databases", i: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"] },
    { n: "Systems and tools", i: ["Linux", "Windows", "UML", "JSON"] }
  ];

  function mapHTML(groups) {
    var out = "";
    groups.forEach(function (g, gi) {
      var c = CENTERS[gi], n = g.i.length;
      var rx = n > 1 ? 5 + n * 0.9 : 0, ry = n > 1 ? rx * 1.5 : 0;
      var hx = n > 1 ? rx * 1.4 : 5, hy = n > 1 ? ry * 1.4 : 9;
      out += '<div class="hull" style="left:' + c[0] + "%;top:" + c[1] + "%;width:" + hx * 2 + "%;height:" + hy * 2 + '%"></div>';
      out += '<div class="hull-name" style="left:' + c[0] + "%;top:" + (c[1] + hy + 1) + '%">' + g.n + "</div>";
      g.i.forEach(function (s, i) {
        var a = (i / n) * Math.PI * 2 + gi * 0.7;
        var x = c[0] + (n > 1 ? Math.cos(a) * rx : 0), y = c[1] + (n > 1 ? Math.sin(a) * ry : 0);
        out += '<span class="pt" style="left:' + x.toFixed(1) + "%;top:" + y.toFixed(1) + "%;--d:" + (5 + ((i * 7 + gi * 3) % 5)) + 's"><i></i>' + s + "</span>";
      });
    });
    return '<div class="mapwrap"><div class="map" role="img" aria-label="Embedding Map">' + out + "</div></div>";
  }

  /* Skills Cards HTML Generator */
  function renderSkillsCards(d) {
    var categories = [
      { id: "lang", key: "filterLang" },
      { id: "fw", key: "filterFw" },
      { id: "mobile", key: "filterMobile" },
      { id: "db", key: "filterDb" },
      { id: "tools", key: "filterTools" }
    ];

    var filtersHtml = '<div class="skills-filters">' +
      '<button class="filter-btn' + (currentSkillFilter === "all" ? " active" : "") + '" data-cat="all">' + d.skills.filterAll + "</button>" +
      categories.map(function (c) {
        return '<button class="filter-btn' + (currentSkillFilter === c.id ? " active" : "") + '" data-cat="' + c.id + '">' + d.skills[c.key] + "</button>";
      }).join("") +
      "</div>";

    var cardsContent = "";

    if (currentSkillFilter === "all") {
      // Group by category with clean sub-headings
      categories.forEach(function (c) {
        var list = SKILLS.filter(function (s) { return s.category === c.id; });
        if (!list.length) return;
        cardsContent += '<div class="skills-category-group">' +
          '<div class="skills-category-title">' + d.skills.catHeaders[c.id] + "</div>" +
          '<div class="skills-grid">' +
          list.map(function (s) { return skillCardHtml(s, d); }).join("") +
          "</div></div>";
      });
    } else {
      var filtered = SKILLS.filter(function (s) { return s.category === currentSkillFilter; });
      cardsContent = '<div class="skills-grid">' +
        filtered.map(function (s) { return skillCardHtml(s, d); }).join("") +
        "</div>";
    }

    var mapSection = showEmbeddingMap
      ? mapHTML(MAP_GROUPS)
      : "";

    var toggleMapBtn = '<div class="view-toggle-wrap">' +
      '<button class="btn-view-toggle" id="btnToggleMap">' +
      (showEmbeddingMap ? "✕ " + (lang === "fr" ? "Masquer la carte" : "Hide Map") : "✦ " + d.skills.viewMapBtn) +
      "</button></div>";

    return '<div class="skills-container">' +
      filtersHtml +
      cardsContent +
      toggleMapBtn +
      mapSection +
      "</div>";
  }

  function skillCardHtml(s, d) {
    return '<div class="skill-card" style="--card-accent:' + s.color + ';--card-glow:rgba(' + s.rgb + ',0.25);--card-icon-bg:rgba(' + s.rgb + ',0.12)">' +
      '<div class="skill-header">' +
        '<div class="skill-icon-wrap">' + getIconSvg(s.icon, 26) + "</div>" +
        '<span class="skill-badge">' + s.catLabel[lang] + "</span>" +
      "</div>" +
      '<h4 class="skill-name">' + s.name + "</h4>" +
      '<p class="skill-desc">' + s.desc[lang] + "</p>" +
    "</div>";
  }

  /* Contact Section HTML Generator (Matches reference image) */
  function renderContactSection(d) {
    var c = d.contact;
    var loc = CONTACT.location[lang];

    var leftCard = '<div class="contact-info-card">' +
      '<div class="contact-info-header">' +
        "<h3>" + c.opportunityTitle + "</h3>" +
        '<p class="contact-info-desc">' + c.opportunityDesc + "</p>" +
      "</div>" +
      '<div class="contact-items-list">' +
        // 1. Email
        '<div class="contact-item-card">' +
          '<div class="contact-item-main">' +
            '<div class="contact-item-icon">' + getIconSvg("envelope", 20) + "</div>" +
            '<div class="contact-item-content">' +
              '<span class="contact-item-label">' + c.labels.email + "</span>" +
              '<span class="contact-item-val">' + CONTACT.email + "</span>" +
            "</div>" +
          "</div>" +
          '<button class="btn-copy" type="button" data-copy="' + CONTACT.email + '" aria-label="Copy email">' +
            getIconSvg("copy", 14) + " <span>" + c.copy + "</span>" +
          "</button>" +
        "</div>" +

        // 2. Phone
        '<div class="contact-item-card">' +
          '<div class="contact-item-main">' +
            '<div class="contact-item-icon">' + getIconSvg("phone", 20) + "</div>" +
            '<div class="contact-item-content">' +
              '<span class="contact-item-label">' + c.labels.phone + "</span>" +
              '<span class="contact-item-val">' + CONTACT.phone + "</span>" +
            "</div>" +
          "</div>" +
          '<button class="btn-copy" type="button" data-copy="' + CONTACT.phoneRaw + '" aria-label="Copy phone">' +
            getIconSvg("copy", 14) + " <span>" + c.copy + "</span>" +
          "</button>" +
        "</div>" +

        // 3. LinkedIn
        '<a class="contact-item-card" href="' + CONTACT.linkedin + '" target="_blank" rel="noopener">' +
          '<div class="contact-item-main">' +
            '<div class="contact-item-icon">' + getIconSvg("linkedin", 20) + "</div>" +
            '<div class="contact-item-content">' +
              '<span class="contact-item-label">' + c.labels.linkedin + "</span>" +
              '<span class="contact-item-val">' + CONTACT.linkedinUser + "</span>" +
            "</div>" +
          "</div>" +
          '<span class="btn-copy">↗</span>' +
        "</a>" +

        // 4. GitHub
        '<a class="contact-item-card" href="' + CONTACT.github + '" target="_blank" rel="noopener">' +
          '<div class="contact-item-main">' +
            '<div class="contact-item-icon">' + getIconSvg("github", 20) + "</div>" +
            '<div class="contact-item-content">' +
              '<span class="contact-item-label">' + c.labels.github + "</span>" +
              '<span class="contact-item-val">' + CONTACT.githubUser + "</span>" +
            "</div>" +
          "</div>" +
          '<span class="btn-copy">↗</span>' +
        "</a>" +

        // 5. Location
        '<div class="contact-item-card">' +
          '<div class="contact-item-main">' +
            '<div class="contact-item-icon">' + getIconSvg("location", 20) + "</div>" +
            '<div class="contact-item-content">' +
              '<span class="contact-item-label">' + c.labels.location + "</span>" +
              '<span class="contact-item-val">' + loc + "</span>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>";

    var rightCard = '<div class="contact-form-card">' +
      '<form class="contact-form" id="contactForm">' +
        '<div class="contact-field-wrap">' +
          '<input type="text" id="contactName" class="contact-input" placeholder="' + c.placeholders.name + '" required>' +
        "</div>" +
        '<div class="contact-field-wrap">' +
          '<input type="email" id="contactEmail" class="contact-input" placeholder="' + c.placeholders.email + '" required>' +
        "</div>" +
        '<div class="contact-field-wrap">' +
          '<input type="text" id="contactSubject" class="contact-input" placeholder="' + c.placeholders.subject + '" required>' +
        "</div>" +
        '<div class="contact-field-wrap">' +
          '<textarea id="contactMessage" class="contact-input contact-textarea" placeholder="' + c.placeholders.message + '" required></textarea>' +
        "</div>" +
        '<button type="submit" class="contact-submit-btn" id="contactSubmitBtn">' +
          "<span>" + c.send + "</span>" +
          getIconSvg("paperplane", 18) +
        "</button>" +
        '<div class="form-status" id="formStatus"></div>' +
      "</form>" +
      '<p class="converged">' + c.place + " · " + d.loss + " → <b>0.000</b> · " + c.done + "</p>" +
    "</div>";

    return '<div class="contact-grid">' + leftCard + rightCard + "</div>";
  }

  /* =====================================================================
     CERTIFICATIONS SECTION
     ===================================================================== */
  function renderCertificationsSection(d) {
    var c = d.certifications;

    var cardsHtml = c.list.map(function (item) {
      var badgeSvg = getCertBadgeSvg(item.badge);
      var dateHtml = item.date
        ? '<span class="cert-card-date">' + item.date + '</span>'
        : '';

      var actionHtml =
        '<a class="cert-action-btn" href="' + item.file + '" target="_blank" rel="noopener" style="--cert-accent:' + item.color + '">' +
          '<span>' + c.viewCert + '</span>' +
          '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5"/></svg>' +
        '</a>';

      return '<div class="cert-card" style="--cert-accent:' + item.color + '">' +
        '<div class="cert-card-top">' +
          '<div class="cert-badge-wrap">' + badgeSvg + '</div>' +
          '<div class="cert-card-info">' +
            '<h3 class="cert-card-title">' + item.title + '</h3>' +
            '<p class="cert-card-issuer">' + item.issuer + '</p>' +
            dateHtml +
          '</div>' +
        '</div>' +
        '<div class="cert-card-bottom">' + actionHtml + '</div>' +
      '</div>';
    }).join('');

    return '<div class="custom-sec-container">' +
      '<div class="custom-sec-header">' +
        '<span class="custom-sec-tag">' + c.tag + '</span>' +
        '<h2 class="custom-sec-title">' + c.title + '</h2>' +
        '<div class="custom-sec-accent-line"></div>' +
      '</div>' +
      '<div class="certifications-grid">' + cardsHtml + '</div>' +
    '</div>';
  }

  /* =====================================================================
     LANGUAGES SECTION (Matching uploaded reference image)
     ===================================================================== */
  function renderLanguagesSection(d) {
    var l = d.languages;
    var r = 40;
    var circ = 2 * Math.PI * r;

    var cardsHtml = l.list.map(function (item) {
      var offset = circ * (1 - (item.percent / 100));
      var isAr = item.code === "ar";
      var charHtml = isAr ?
        '<span class="lang-char lang-char-ar">' + item.symbol + '</span>' :
        '<span class="lang-char">' + item.symbol + '</span>';

      return '<div class="lang-card">' +
        '<div class="lang-gauge-wrap">' +
          '<svg class="lang-gauge" viewBox="0 0 100 100" width="96" height="96" aria-hidden="true">' +
            '<circle class="lang-gauge-bg" cx="50" cy="50" r="' + r + '" />' +
            '<circle class="lang-gauge-bar" cx="50" cy="50" r="' + r + '" style="stroke-dasharray: ' + circ.toFixed(2) + '; stroke-dashoffset: ' + offset.toFixed(2) + ';" />' +
          '</svg>' +
          '<div class="lang-symbol-center">' + charHtml + '</div>' +
        '</div>' +
        '<h3 class="lang-name">' + item.name + '</h3>' +
        '<p class="lang-level">' + item.level + '</p>' +
      '</div>';
    }).join("");

    return '<div class="custom-sec-container">' +
      '<div class="custom-sec-header">' +
        '<span class="custom-sec-tag">' + l.tag + '</span>' +
        '<h2 class="custom-sec-title">' + l.title + '</h2>' +
        '<div class="custom-sec-accent-line"></div>' +
      '</div>' +
      '<div class="languages-grid">' + cardsHtml + '</div>' +
    '</div>';
  }

  function render() {
    var d = D[lang];
    document.documentElement.lang = lang;
    document.title = d.title;

    $("nav").innerHTML = SECTIONS.map(function (k) { return '<a href="#' + k + '">' + d.nav[k] + "</a>"; }).join("");
    $("navContact").textContent = d.navContact;
    $("heroRole").textContent = d.role;
    $("heroHint").textContent = d.hint;
    $("cv").href = CV_FILE;
    $("cv").setAttribute("download", CV_FILE);
    $("cv").innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v8M4.5 7 8 10.5 11.5 7M3 13.5h10"/></svg><span>' + d.cv + "</span>";
    $("heroCta").innerHTML = '<a class="btn primary" href="#contact">' + d.cta.contact + '</a>' +
      '<a class="btn" href="' + CONTACT.linkedin + '" target="_blank" rel="noopener">' + d.cta.linkedin + '</a>';

    var a = d.about;
    $("about").innerHTML = wrap(d, "about",
      '<div class="me"><img src="portraitelegantenstudio.png" alt="Youssef Hachicha" width="88" height="88" onerror="this.parentNode.style.display=\'none\'"></div>' +
      '<div class="lead">' + a.lead.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>" +
      "<h3>" + a.eduTitle + "</h3>" + a.edu.map(row).join("") +
      "<h3>" + a.expTitle + "</h3>" + a.exp.map(row).join(""));

    var p = d.projects;
    $("projects").innerHTML = wrap(d, "projects", p.runs.map(function (r, i) {
      var id = "run-" + String(p.runs.length - i).padStart(2, "0");
      return '<details class="run"' + (i === 0 ? " open" : "") + "><summary><span class=\"id\">" + id + '</span><span class="name">' + r.t +
        '</span><span class="chev" aria-hidden="true">›</span><span class="when">' + r.d + ' · <span class="status">' + p.status + "</span></span></summary>" +
        '<div class="body"><p>' + r.p + "</p>" + tags(r.tags) + "</div></details>";
    }).join(""));

    // Skills section with Cards and Icons
    $("skills").innerHTML = wrap(d, "skills", renderSkillsCards(d));

    // Certifications section (matching user's reference image)
    $("certifications").innerHTML = renderCertificationsSection(d);

    // Languages section (matching user's reference image)
    $("languages").innerHTML = renderLanguagesSection(d);

    // Events section
    $("events").innerHTML = wrap(d, "events", d.events.list.map(function (e) {
      return '<article class="bench"><h3>' + e.t + "</h3><time>" + e.d + '</time><div class="org">' + e.o + "</div><p>" + e.p + "</p>" + tags(e.tags) + "</article>";
    }).join(""));

    // Contact section matching reference image
    $("contact").innerHTML = wrap(d, "contact", renderContactSection(d));

    $("foot").textContent = d.foot + " © 2026 Youssef Hachicha";

    // Bind event handlers
    bindEvents();
    updateThemeUI(getTheme());
    drawLoss();
  }

  function bindSkillsEvents() {
    var filterBtns = $("skills").querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentSkillFilter = this.getAttribute("data-cat");
        $("skills").innerHTML = wrap(D[lang], "skills", renderSkillsCards(D[lang]));
        bindSkillsEvents();
      });
    });

    var toggleMapBtn = $("btnToggleMap");
    if (toggleMapBtn) {
      toggleMapBtn.addEventListener("click", function () {
        showEmbeddingMap = !showEmbeddingMap;
        $("skills").innerHTML = wrap(D[lang], "skills", renderSkillsCards(D[lang]));
        bindSkillsEvents();
      });
    }
  }

  function bindContactEvents() {
    var copyBtns = $("contact").querySelectorAll(".btn-copy[data-copy]");
    copyBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = this.getAttribute("data-copy");
        copyToClipboard(text, this, D[lang].contact.copied);
      });
    });

    var form = $("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = ($("contactName").value || "").trim();
        var email = ($("contactEmail").value || "").trim();
        var subject = ($("contactSubject").value || "").trim();
        var msg = ($("contactMessage").value || "").trim();

        var body = (lang === "fr"
          ? "Nom : " + name + "\nEmail : " + email + "\n\nMessage :\n" + msg
          : "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + msg);

        var mailSubject = "[" + (subject || (lang === "fr" ? "Contact Portfolio" : "Portfolio Contact")) + "] " + name;
        location.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(mailSubject) + "&body=" + encodeURIComponent(body);

        var st = $("formStatus");
        if (st) {
          st.style.display = "block";
          st.textContent = D[lang].contact.successToast;
        }
        showToast(D[lang].contact.successToast);
      });
    }
  }

  function bindEvents() {
    bindSkillsEvents();
    bindContactEvents();
  }

  // Language button
  $("lang").addEventListener("click", function () {
    lang = lang === "en" ? "fr" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    render();
  });

  // Theme toggle button
  $("themeToggle").addEventListener("click", function () {
    var current = getTheme();
    var next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });

  /* =====================================================================
     4. HERO: Denoising particle name simulation
     ===================================================================== */
  var cv = $("denoise"), ctx = cv.getContext("2d");
  var W = 0, H = 0, dpr = 1, parts = [], size = 3;
  var T = 1000, t0 = 0, running = false, mouse = { x: -999, y: -999 };
  var ACC = [43, 60, 255], NOI = [140, 150, 178];
  var heroEl = $("hero"), lastK = -1;

  function setK(k) {
    if (k === lastK) return;
    lastK = k;
    heroEl.style.setProperty("--k", k.toFixed(3));
  }

  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    var f = function (n) {
      var v = cs.getPropertyValue(n).trim();
      return v ? v.split(",").map(Number) : [43, 60, 255];
    };
    ACC = f("--accent-rgb"); NOI = f("--noise-rgb");
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
      var t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(t);
    } else {
      readColors();
      drawLoss();
    }
  });

  function buildParticles() {
    var r = cv.getBoundingClientRect();
    W = r.width; H = r.height; dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var off = document.createElement("canvas"), o = off.getContext("2d");
    off.width = W; off.height = H;
    var font = '400 100px "Instrument Serif", Georgia, serif';
    o.font = font;
    var w100 = Math.max(o.measureText("Youssef").width, o.measureText("Hachicha").width);
    var wide = W >= 900;
    var fs = Math.min(H * (wide ? 0.28 : 0.3), ((wide ? W * 0.54 : W * 0.84) / w100) * 100);
    var cx = wide ? Math.max(40, W * 0.04) : W / 2, cy = H * (wide ? 0.34 : 0.3);
    o.font = font.replace("100px", fs + "px");
    o.textAlign = wide ? "left" : "center"; o.textBaseline = "middle"; o.fillStyle = "#000";
    o.fillText("Youssef", cx, cy);
    o.fillText("Hachicha", cx, cy + fs * 0.92);

    var step = Math.max(4, Math.round(fs / 26));
    while (true) {
      var data = o.getImageData(0, 0, W, H).data, pts = [];
      for (var y = 0; y < H; y += step)
        for (var x = 0; x < W; x += step)
          if (data[((y | 0) * off.width + (x | 0)) * 4 + 3] > 128) pts.push([x, y]);
      if (pts.length < 5200 || step > 30) break;
      step += 1;
    }
    size = Math.max(2, step * 0.5);
    parts = pts.map(function (p) {
      return { tx: p[0], ty: p[1], sx: Math.random() * W, sy: Math.random() * H, x: Math.random() * W, y: Math.random() * H, heat: 0 };
    });
  }

  function restart() {
    t0 = performance.now() + 350;
    parts.forEach(function (p) { p.sx = Math.random() * W; p.sy = Math.random() * H; });
    T = 1000;
  }

  function frame(now) {
    if (!running) return;
    var el = Math.max(0, (now - t0) / 3800);
    T = el >= 1 ? 0 : 1000 * Math.pow(1 - el, 3);
    var k = T / 1000;
    setK(k);
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      var dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 16900) {
        var d = Math.sqrt(d2) || 1;
        p.heat = 1;
        p.x += (dx / d) * (130 - d) * 0.12;
        p.y += (dy / d) * (130 - d) * 0.12;
      }
      var jit = k * 26 + p.heat * 60;
      var gx = p.tx * (1 - k) + p.sx * k + (Math.random() - 0.5) * jit;
      var gy = p.ty * (1 - k) + p.sy * k + (Math.random() - 0.5) * jit;
      p.x += (gx - p.x) * 0.16;
      p.y += (gy - p.y) * 0.16;
      p.heat *= 0.955;
      var m = Math.min(1, k * 1.3 + p.heat);
      ctx.fillStyle = "rgb(" + Math.round(ACC[0] + (NOI[0] - ACC[0]) * m) + "," + Math.round(ACC[1] + (NOI[1] - ACC[1]) * m) + "," + Math.round(ACC[2] + (NOI[2] - ACC[2]) * m) + ")";
      ctx.fillRect(p.x, p.y, size, size);
    }
    $("tval").textContent = Math.round(T);
    requestAnimationFrame(frame);
  }

  function drawStatic() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgb(" + ACC.join(",") + ")";
    parts.forEach(function (p) { ctx.fillRect(p.tx, p.ty, size, size); });
    $("tval").textContent = "0";
    setK(0);
  }

  function startHero() {
    readColors();
    buildParticles();
    if (reduce) { drawStatic(); return; }
    restart();
    running = true;
    requestAnimationFrame(frame);
  }

  if (!reduce) {
    cv.parentNode.addEventListener("pointermove", function (e) {
      var r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    cv.parentNode.addEventListener("pointerleave", function () { mouse.x = mouse.y = -999; });
    cv.parentNode.addEventListener("click", restart);
    new IntersectionObserver(function (en) {
      var vis = en[0].isIntersecting;
      if (vis && !running && parts.length) { running = true; requestAnimationFrame(frame); }
      else if (!vis) running = false;
    }).observe(cv);
  }

  var rz;
  window.addEventListener("resize", function () {
    clearTimeout(rz);
    rz = setTimeout(function () { running = false; startHero(); drawLoss(); }, 200);
  });

  /* =====================================================================
     5. LOSS MONITOR
     ===================================================================== */
  var N = 120, curve = [], seed = 7;
  function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
  for (var i = 0; i < N; i++) {
    var x = i / (N - 1);
    curve.push(Math.max(0, 0.02 + 0.98 * Math.exp(-4.2 * x) + (rnd() - 0.5) * 0.12 * Math.exp(-2.2 * x)));
  }
  curve[N - 1] = 0;

  var lc = $("loss"), lx = lc.getContext("2d");
  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  }
  function currentEpoch() {
    var e = 0, line = window.innerHeight * 0.45;
    SECTIONS.forEach(function (k, i) {
      var el = $(k);
      if (el && el.getBoundingClientRect().top < line) e = i + 1;
    });
    return e;
  }
  function drawLoss() {
    var cs = getComputedStyle(document.documentElement);
    var line = cs.getPropertyValue("--line").trim() || "#242c52";
    var accent = cs.getPropertyValue("--accent").trim() || "#8390ff";
    var amber = cs.getPropertyValue("--amber").trim() || "#f2a900";
    var w = lc.width, h = lc.height, pad = 8, p = progress(), head = Math.round(p * (N - 1));
    lx.clearRect(0, 0, w, h);
    lx.strokeStyle = line; lx.lineWidth = 1;
    for (var g = 1; g < 4; g++) { lx.beginPath(); lx.moveTo(0, (h / 4) * g); lx.lineTo(w, (h / 4) * g); lx.stroke(); }
    var X = function (i) { return pad + (i / (N - 1)) * (w - pad * 2); };
    var Y = function (v) { return pad + (1 - Math.min(1, v)) * (h - pad * 2); };
    lx.strokeStyle = accent; lx.lineWidth = 2; lx.lineJoin = "round"; lx.beginPath();
    for (var i = 0; i <= head; i++) { if (i) lx.lineTo(X(i), Y(curve[i])); else lx.moveTo(X(0), Y(curve[0])); }
    lx.stroke();
    lx.fillStyle = amber; lx.beginPath(); lx.arc(X(head), Y(curve[head]), 4, 0, Math.PI * 2); lx.fill();
    var d = D[lang], ep = currentEpoch();
    $("mEpoch").textContent = ep ? d.epoch + " " + ep + "/" + SECTIONS.length : d.init;
    $("mLoss").textContent = d.loss + " " + curve[head].toFixed(3);
    document.body.classList.toggle("at-top", window.scrollY < window.innerHeight * 0.5);
  }

  var tick = false;
  window.addEventListener("scroll", function () {
    if (tick) return;
    tick = true;
    requestAnimationFrame(function () { drawLoss(); tick = false; });
  }, { passive: true });

  /* =====================================================================
     6. STARTUP
     ===================================================================== */
  var initialTheme = getTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);
  render();

  var fontReady = document.fonts && document.fonts.load ? document.fonts.load('400 100px "Instrument Serif"') : Promise.resolve();
  Promise.race([fontReady, new Promise(function (r) { setTimeout(r, 1500); })]).then(startHero, startHero);
})();
