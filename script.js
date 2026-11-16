(function () {
  "use strict";

  /* =====================================================================
     1. CONTENT (English + French). Edit your text here.
     ===================================================================== */
  var CV_FILE = "CV_Youssef_Hachicha.pdf"; /* put your CV (PDF) next to index.html with this exact name */
  var CONTACT = {
    email: "youssefhachicha74@gmail.com",
    phone: "+216 58657389",
    linkedin: "https://www.linkedin.com/in/youssef-hachicha/"
  };

  var D = {
    en: {
      title: "Youssef Hachicha – Full Stack Developer and AI researcher",
      nav: { about: "About", projects: "Projects", skills: "Skills", events: "Events", contact: "Contact" },
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
        intro: "Each dot is a skill. Related skills sit close together, like in an embedding space.",
        groups: [
          { n: "Languages", i: ["C#", "C", "Java", "JavaScript", "PHP", "Dart", "Python", "HTML5", "CSS3"] },
          { n: "Frameworks", i: ["React", "Vue.js", "Angular", "Spring Boot", "Laravel", "Entity Framework", "Bootstrap"] },
          { n: "Mobile", i: ["Flutter"] },
          { n: "Databases", i: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "PL/SQL"] },
          { n: "Systems and tools", i: ["Windows", "Linux", "UML", "JSON"] }
        ],
        certTitle: "Saved checkpoints",
        certs: [
          { t: "Getting Started with Deep Learning", o: "NVIDIA" },
          { t: "What Is Generative AI?", o: "LinkedIn Learning", d: "Aug 2025" },
          { t: "Spring Boot For Beginners", o: "Amigoscode", d: "Nov 2024" },
          { t: "Flutter online course", o: "T3alem.tn" },
          { t: "Flutter training", o: "Google Students Club FSEGS" },
          { t: "Flutter quiz, medium level", o: "SkillValue by Pentalog" },
          { t: "Scrum Agile certification", o: "Scrum Study" },
          { t: "Digital marketing fundamentals", o: "" }
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
        prompt: "prompt",
        ph: "Write your message here. Sending opens your email app.",
        send: "Run inference",
        subject: "Hello Youssef",
        email: "Email", phone: "Phone", linkedin: "LinkedIn",
        place: "Based in Sfax, Tunisia.",
        done: "converged"
      },
      foot: "Built with plain HTML, CSS and JavaScript. No frameworks, no libraries."
    },

    fr: {
      title: "Youssef Hachicha – Développeur Full Stack et chercheur en IA",
      nav: { about: "À propos", projects: "Projets", skills: "Compétences", events: "Événements", contact: "Contact" },
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
        intro: "Chaque point est une compétence. Les compétences proches sont voisines, comme dans un espace d'embeddings.",
        groups: [
          { n: "Langages", i: ["C#", "C", "Java", "JavaScript", "PHP", "Dart", "Python", "HTML5", "CSS3"] },
          { n: "Frameworks", i: ["React", "Vue.js", "Angular", "Spring Boot", "Laravel", "Entity Framework", "Bootstrap"] },
          { n: "Mobile", i: ["Flutter"] },
          { n: "Bases de données", i: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "PL/SQL"] },
          { n: "Systèmes et outils", i: ["Windows", "Linux", "UML", "JSON"] }
        ],
        certTitle: "Checkpoints sauvegardés",
        certs: [
          { t: "Getting Started with Deep Learning", o: "NVIDIA" },
          { t: "What Is Generative AI ?", o: "LinkedIn Learning", d: "Août 2025" },
          { t: "Spring Boot For Beginners", o: "Amigoscode", d: "Nov. 2024" },
          { t: "Formation en ligne Flutter", o: "T3alem.tn" },
          { t: "Formation Flutter", o: "Google Students Club FSEGS" },
          { t: "Quiz Flutter, niveau moyen", o: "SkillValue by Pentalog" },
          { t: "Certification Scrum Agile", o: "Scrum Study" },
          { t: "Les fondamentaux du marketing digital", o: "" }
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
        prompt: "prompt",
        ph: "Écris ton message ici. L'envoi ouvre ta messagerie.",
        send: "Lancer l'inférence",
        subject: "Bonjour Youssef",
        email: "E-mail", phone: "Téléphone", linkedin: "LinkedIn",
        place: "Basé à Sfax, Tunisie.",
        done: "convergé"
      },
      foot: "Fait en HTML, CSS et JavaScript purs. Sans framework, sans bibliothèque."
    }
  };

  var SECTIONS = ["about", "projects", "skills", "events", "contact"];

  /* =====================================================================
     2. STATE + PAGE RENDERING
     ===================================================================== */
  var lang = "en";
  try {
    var saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") lang = saved;
    else if ((navigator.language || "").toLowerCase().indexOf("fr") === 0) lang = "fr";
  } catch (e) { /* storage unavailable */ }

  var $ = function (id) { return document.getElementById(id); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  var CENTERS = [[22, 30], [62, 28], [88, 52], [26, 80], [62, 78]];
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
    return '<div class="mapwrap"><div class="map" role="img" aria-label="' + groups.map(function (g) { return g.n + ": " + g.i.join(", "); }).join(". ") + '">' + out + "</div></div>";
  }

  function render() {
    var d = D[lang];
    document.documentElement.lang = lang;
    document.title = d.title;
    $("nav").innerHTML = SECTIONS.map(function (k) { return '<a href="#' + k + '">' + d.nav[k] + "</a>"; }).join("");
    $("heroRole").textContent = d.role;
    $("heroHint").textContent = d.hint;
    $("cv").href = CV_FILE;
    $("cv").setAttribute("download", CV_FILE);
    $("cv").innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v8M4.5 7 8 10.5 11.5 7M3 13.5h10"/></svg><span>' + d.cv + "</span>";
    $("heroCta").innerHTML = '<a class="btn primary" href="#contact">' + d.cta.contact + '</a>' +
      '<a class="btn" href="' + CONTACT.linkedin + '" target="_blank" rel="noopener">' + d.cta.linkedin + '</a>';

    var a = d.about;
    $("about").innerHTML = wrap(d, "about",
      '<div class="me"><img src="Portrait_%C3%A9l%C3%A9gant_en_studio.png" alt="Youssef Hachicha" width="88" height="88" onerror="this.parentNode.style.display=\'none\'"></div>' +
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

    var s = d.skills;
    $("skills").innerHTML = wrap(d, "skills", mapHTML(s.groups) +
      "<h3>" + s.certTitle + "</h3>" + s.certs.map(function (c) {
        return '<div class="ckpt"><b><span class="ok">✓</span>' + c.t + "</b>" + (c.d ? "<time>" + c.d + "</time>" : "") + (c.o ? "<span>" + c.o + "</span>" : "") + "</div>";
      }).join(""));

    $("events").innerHTML = wrap(d, "events", d.events.list.map(function (e) {
      return '<article class="bench"><h3>' + e.t + "</h3><time>" + e.d + '</time><div class="org">' + e.o + "</div><p>" + e.p + "</p>" + tags(e.tags) + "</article>";
    }).join(""));

    var c = d.contact;
    $("contact").innerHTML = wrap(d, "contact",
      '<form class="term" id="mail"><span class="p">youssef@portfolio:~$</span> ' + c.prompt +
      '<textarea id="msg" aria-label="' + c.prompt + '" placeholder="' + c.ph + '"></textarea><button type="submit">' + c.send + "</button></form>" +
      '<div class="links">' +
      '<a href="mailto:' + CONTACT.email + '"><span>' + c.email + "</span><small>" + CONTACT.email + "</small></a>" +
      '<a href="tel:' + CONTACT.phone.replace(/\s/g, "") + '"><span>' + c.phone + "</span><small>" + CONTACT.phone + "</small></a>" +
      '<a href="' + CONTACT.linkedin + '" target="_blank" rel="noopener"><span>' + c.linkedin + "</span><small>youssef-hachicha</small></a></div>" +
      '<p class="converged">' + c.place + " · " + d.loss + " → <b>0.000</b> · " + c.done + "</p>");

    $("mail").addEventListener("submit", function (e) {
      e.preventDefault();
      location.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(c.subject) + "&body=" + encodeURIComponent($("msg").value);
    });

    $("foot").textContent = d.foot + " © 2026 Youssef Hachicha";
    drawLoss();
  }

  $("lang").addEventListener("click", function () {
    lang = lang === "en" ? "fr" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    render();
  });

  /* =====================================================================
     3. HERO: the name denoises out of random noise (diffusion-style)
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
    var f = function (n) { return cs.getPropertyValue(n).split(",").map(Number); };
    ACC = f("--accent-rgb"); NOI = f("--noise-rgb");
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", readColors);

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
     4. LOSS MONITOR: the curve is drawn as the visitor scrolls
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
    SECTIONS.forEach(function (k, i) { if ($(k).getBoundingClientRect().top < line) e = i + 1; });
    return e;
  }
  function drawLoss() {
    var cs = getComputedStyle(document.documentElement);
    var line = cs.getPropertyValue("--line").trim(), accent = cs.getPropertyValue("--accent").trim(), amber = cs.getPropertyValue("--amber").trim();
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
     5. START
     ===================================================================== */
  render();
  console.log("%cyh_", "font:600 20px monospace;color:#2b3cff", "Hi! Curious about the code? It's three plain files.");
  var fontReady = document.fonts && document.fonts.load ? document.fonts.load('400 100px "Instrument Serif"') : Promise.resolve();
  Promise.race([fontReady, new Promise(function (r) { setTimeout(r, 1500); })]).then(startHero, startHero);
})();