/* ============================================
   CALM TEAM v2 — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // LOADER
  // =============================================
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
  setTimeout(() => loader.classList.add('hidden'), 3000);

  // Typewriter vars (hoisted early for language switcher)
  const typewriter = document.getElementById('typewriter');
  let typeState = { phraseIndex: 0, charIndex: 0, isDeleting: false, timer: null };

  // =============================================
  // LANGUAGE SWITCHER (EN / AR)
  // =============================================
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_roster: 'Roster',
      nav_community: 'Community',
      nav_stats: 'Stats',
      nav_timeline: 'Timeline',
      nav_products: 'Products',
      nav_contact: 'Contact',
      loader_sub: 'Loading experience...',
      hero_subtitle: 'Calm Team',
      hero_desc: 'Esports • Community • Passion',
      hero_btn_about: 'Discover Our Journey',
      hero_btn_community: 'Join Community',
      hero_scroll: 'Scroll',
      about_tag: 'Who We Are',
      about_title: 'The Calm Team Story',
      about_desc_1: '<strong>Calm Team</strong> — the esports division of Calm. Founded in <strong>2018</strong> with a clear vision: to create a safe and professional space for gaming enthusiasts, bringing together fair competition and positive spirit.',
      about_desc_2: 'We are more than just a team — we are a <strong>family</strong>. We believe gaming is not only about winning, but about building memories and friendships that last.',
      value_1: 'Respect',
      value_2: 'Excellence',
      value_3: 'Family',
      value_4: 'Passion',
      value_5: 'Energy',
      value_6: 'Determination',
      roster_tag: 'Our Team',
      roster_title: 'Our Legendary Players',
      community_tag: 'Our Community',
      community_desc: 'Calm Community is more than just a group of players — it\'s a <strong>sanctuary</strong> for those seeking positive and professional vibes in the gaming world. We welcome everyone, from pros to beginners.',
      feature_1_title: 'Discord Server',
      feature_1_desc: 'Vibrant community, tournament organization, and weekly events',
      feature_2_title: 'Weekly Events',
      feature_2_desc: 'Internal tournaments, game nights, and ongoing challenges',
      feature_3_title: 'Skill Development',
      feature_3_desc: 'Training sessions and tips from our core team players',
      feature_4_title: 'Rewards & Prizes',
      feature_4_desc: 'Prizes for tournament winners and most active members',
      community_btn: 'Join us on Discord',
      stats_tag: 'Statistics',
      stats_title: 'Our Numbers Speak',
      stats_label_1: 'Founded',
      stats_label_2: 'Members',
      stats_label_3: 'Tournaments',
      stats_label_4: 'Titles',
      tl_tag: 'Our Journey',
      tl_title: 'Our Bright Milestones',
      tl_1_title: 'Foundation',
      tl_1_desc: 'Launching the team with a new vision in the esports world',
      tl_2_title: 'First Tournament',
      tl_2_desc: 'First participation in a local tournament achieving 3rd place',
      tl_3_title: 'Community Growth',
      tl_3_desc: 'Launching Calm Community reaching 50 members',
      tl_4_title: 'First Title',
      tl_4_desc: 'Winning the first major tournament and claiming the title',
      tl_5_title: 'Professionalism',
      tl_5_desc: 'Entering professional competitions and building infrastructure',
      tl_6_title: 'Triple Titles',
      tl_6_desc: 'Winning three tournaments in one season — historic achievement',
      tl_7_title: 'New Partnerships',
      tl_7_desc: 'Establishing partnerships with brands and sports platforms',
      tl_8_title: '100+ Members',
      tl_8_desc: 'Our community surpasses 100 members and our team at its strongest',
      testimonials_tag: 'Testimonials',
      testimonials_title: 'What They Say About Us',
      testimonial_1: 'The best gaming community I\'ve ever joined. Great vibes and everyone is welcome.',
      testimonial_2: 'Professional team with high ethics. I learned so much from the players here.',
      testimonial_3: 'Calm Team is not just a team, it\'s a family. Proud to be part of this journey.',
      testimonial_1_date: 'Member since 2020',
      testimonial_2_date: 'Member since 2021',
      testimonial_3_date: 'Member since 2019',
      contact_tag: 'Contact',
      contact_title: 'Stay Connected',
      contact_heading: 'Get in Touch',
      contact_desc: 'Follow us on social media and join our growing community',
      form_name: 'Your Name',
      form_email: 'Your Email',
      form_message: 'Your Message...',
      form_submit: 'Send Message',
      footer_desc: 'Calm Team — Since 2018',
      footer_quick_title: 'Quick Links',
      footer_link_about: 'About',
      footer_link_roster: 'Roster',
      footer_link_community: 'Community',
      footer_link_contact: 'Contact',
      footer_follow_title: 'Follow Us',
      footer_games_title: 'Games',
      footer_copy: '&copy; 2026 Calm Team. All rights reserved.',
      footer_made: 'Made with',
      footer_made_from: 'by Calm Community',
      discord_msg_1: 'Welcome everyone to Calm Community! 🎮',
      discord_msg_2: 'Proud to be part of this family!',
      discord_msg_3: 'Today\'s tournament was EPIC! 🔥',
      discord_active: 'Active'
    },
    ar: {
      nav_home: 'الرئيسية',
      nav_about: 'عن الفريق',
      nav_roster: 'الفريق',
      nav_community: 'المجتمع',
      nav_stats: 'الإحصائيات',
      nav_timeline: 'المسيرة',
      nav_products: 'منتجاتنا',
      nav_contact: 'اتصل بنا',
      loader_sub: 'Loading experience...',
      hero_subtitle: 'فريق هدوء',
      hero_desc: 'رياضة إلكترونية • مجتمع • شغف',
      hero_btn_about: 'اكتشف رحلتنا',
      hero_btn_community: 'انضم للمجتمع',
      hero_scroll: 'اسفل',
      about_tag: 'من نحن',
      about_title: 'قصة فريق هدوء',
      about_desc_1: '<strong>Calm Team</strong> — فريق هدوء للرياضات الإلكترونية. تأسسنا عام <strong>2018</strong> برؤية واضحة: أن نخلق مساحة آمنة ومحترفة لعشاق الألعاب، تجمع بين المنافسة الشريفة والروح الإيجابية.',
      about_desc_2: 'نحن لسنا مجرد فريق — نحن <strong>عائلة</strong>. نؤمن بأن اللعب ليس فقط للفوز، بل لبناء ذكريات وصداقات تدوم.',
      value_1: 'الاحترام',
      value_2: 'التميز',
      value_3: 'العائلة',
      value_4: 'الشغف',
      value_5: 'الطاقة',
      value_6: 'العزيمة',
      roster_tag: 'فريقنا',
      roster_title: 'لاعبونا الأسطوريون',
      community_tag: 'مجتمعنا',
      community_desc: 'مجتمع كالم هو أكثر من مجرد مجموعة لاعبين — إنه <strong>ملاذ</strong> لكل من يبحث عن أجواء إيجابية ومحترفة في عالم الألعاب. نرحب بالجميع، من المحترفين إلى المبتدئين.',
      feature_1_title: 'سيرفر ديسكورد',
      feature_1_desc: 'مجتمع نابض، تنظيم بطولات، وفعاليات أسبوعية',
      feature_2_title: 'فعاليات أسبوعية',
      feature_2_desc: 'بطولات داخلية، ليالي ألعاب، وتحديات مستمرة',
      feature_3_title: 'تطوير المهارات',
      feature_3_desc: 'جلسات تدريبية ونصائح من لاعبي الفريق الأساسي',
      feature_4_title: 'مكافآت وهدايا',
      feature_4_desc: 'جوائز للفائزين بالبطولات وأكثر الأعضاء نشاطًا',
      community_btn: 'انضم إلينا على ديسكورد',
      stats_tag: 'إحصائيات',
      stats_title: 'أرقامنا تتحدث',
      stats_label_1: 'تأسسنا',
      stats_label_2: 'عضو',
      stats_label_3: 'بطولة',
      stats_label_4: 'لقب',
      tl_tag: 'مسيرتنا',
      tl_title: 'محطاتنا المشرقة',
      tl_1_title: 'التأسيس',
      tl_1_desc: 'انطلاق الفريق برؤية جديدة في عالم الرياضات الإلكترونية',
      tl_2_title: 'أول بطولة',
      tl_2_desc: 'المشاركة الأولى في بطولة محلية وتحقيق المركز الثالث',
      tl_3_title: 'توسع المجتمع',
      tl_3_desc: 'إطلاق مجتمع كالم ووصول العدد إلى 50 عضو',
      tl_4_title: 'أول لقب',
      tl_4_desc: 'الفوز بأول بطولة كبرى وتحقيق لقب البطولة',
      tl_5_title: 'الاحترافية',
      tl_5_desc: 'دخول الفريق في منافسات احترافية وتجهيز البنية التحتية',
      tl_6_title: 'ثلاثية الألقاب',
      tl_6_desc: 'الفوز بثلاث بطولات في موسم واحد — إنجاز تاريخي',
      tl_7_title: 'شراكات جديدة',
      tl_7_desc: 'عقد شراكات مع علامات تجارية ومنصات رياضية',
      tl_8_title: '100+ عضو',
      tl_8_desc: 'مجتمعنا يتخطى 100 عضو وفريقنا في أقوى مستوياته',
      testimonials_tag: 'شهادات',
      testimonials_title: 'ماذا يقولون عنا',
      testimonial_1: 'أفضل مجتمع ألعاب انضممت له. الأجواء رائعة والكل مرحب به.',
      testimonial_2: 'فريق محترف وأخلاق عالية. تعلمت الكثير من اللاعبين هنا.',
      testimonial_3: 'Calm Team ليس مجرد فريق، بل عائلة. فخور بكوني جزء من هالمسيرة.',
      testimonial_1_date: 'عضو منذ 2020',
      testimonial_2_date: 'عضو منذ 2021',
      testimonial_3_date: 'عضو منذ 2019',
      contact_tag: 'تواصل',
      contact_title: 'ابق على اتصال',
      contact_heading: 'تواصل معنا',
      contact_desc: 'تابعنا على وسائل التواصل وانضم إلى مجتمعنا المتنامي',
      form_name: 'اسمك',
      form_email: 'بريدك الإلكتروني',
      form_message: 'رسالتك...',
      form_submit: 'إرسال الرسالة',
      footer_desc: 'فريق هدوء — منذ 2018',
      footer_quick_title: 'روابط سريعة',
      footer_link_about: 'عن الفريق',
      footer_link_roster: 'الفريق',
      footer_link_community: 'المجتمع',
      footer_link_contact: 'اتصل بنا',
      footer_follow_title: 'تابعنا',
      footer_games_title: 'الألعاب',
      footer_copy: '&copy; 2026 Calm Team. كل الحقوق محفوظة.',
      footer_made: 'صنع بـ',
      footer_made_from: 'من Calm Community',
      discord_msg_1: 'مرحبًا بالجميع في مجتمع كالم! 🎮',
      discord_msg_2: 'فخور إني جزء من هالعائلة!',
      discord_msg_3: 'بطولة اليوم كانت EPIC! 🔥',
      discord_active: 'نشيط'
    }
  };

  let currentLang = 'en';

  const typewriterPhrases = {
    en: [
      'Where competition meets calm',
      'More than a team — a family',
      'Calm Team — Since 2018',
      'Shaping the champions of tomorrow',
      'Esports • Community • Passion'
    ],
    ar: [
      'حيث تلتقي المنافسة بالهدوء',
      'أكثر من مجرد فريق — عائلة',
      'Calm Team — منذ 2018',
      'نصنع أبطال الغد',
      'Esports • Community • Passion'
    ]
  };

  function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update data-i18n elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update data-i18n elements that contain HTML (use innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update html lang and dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('calm-lang', lang);

    // Update toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
    }

    // Update typewriter phrases
    if (typewriter) {
      typewriter.textContent = '';
      if (typeof runTypeEffect === 'function') {
        resetTypewriter();
      }
    }
  }

  // Set language from localStorage or default to English
  const savedLang = localStorage.getItem('calm-lang') || 'en';
  setLanguage(savedLang);

  // Language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(newLang);
      // Toggle nav menu if open
      if (window.innerWidth <= 768 && document.querySelectorAll('.nav-menu.active')) {
        // keep menu state
      }
    });
  }

  // =============================================
  // THEME TOGGLE (Dark / Light)
  // =============================================
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('calm-theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
  }
  const savedTheme = localStorage.getItem('calm-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(savedTheme);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // =============================================
  // THREE.JS — 3D Particle Galaxy
  // =============================================
  const container = document.getElementById('three-container');
  if (container && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Galaxy parameters
    const parameters = {
      count: 3000,
      size: 0.04,
      radius: 8,
      branches: 3,
      spin: 1.5,
      randomness: 0.8,
      randomnessPower: 3,
      insideColor: '#d6a566',
      outsideColor: '#b8894a'
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * parameters.radius;
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;
      const spinAngle = radius * parameters.spin;
      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone().lerp(colorOutside, radius / parameters.radius);
      colors[i3]     = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: parameters.size,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9
    });

    const galaxy = new THREE.Points(geometry, material);
    scene.add(galaxy);

    camera.position.z = 6;

    // Mouse tracking
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Resize
    window.addEventListener('resize', () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    // Animate
    function animateGalaxy() {
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;

      galaxy.rotation.y += 0.002;
      galaxy.rotation.x = targetY * 0.3;
      galaxy.rotation.z = targetX * 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animateGalaxy);
    }
    animateGalaxy();
  }

  // =============================================
  // CUSTOM CURSOR
  // =============================================
  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursorTrail');

  if (cursor && cursorTrail && window.innerWidth > 768) {
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      trailX = e.clientX;
      trailY = e.clientY;
    });

    // Trail follows with delay
    let trailCurrentX = 0, trailCurrentY = 0;
    function updateTrail() {
      trailCurrentX += (trailX - trailCurrentX) * 0.08;
      trailCurrentY += (trailY - trailCurrentY) * 0.08;
      cursorTrail.style.left = trailCurrentX + 'px';
      cursorTrail.style.top = trailCurrentY + 'px';
      requestAnimationFrame(updateTrail);
    }
    updateTrail();

    // Hover effects on clickable elements
    const hoverTargets = document.querySelectorAll('a, button, .player-card, .feature-item, .stats-card, .tl-item, .testimonial-card, .social-link, .value-item');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(0.8)');
    document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
  } else if (cursor && cursorTrail) {
    cursor.style.display = 'none';
    cursorTrail.style.display = 'none';
  }

  // =============================================
  // SCROLL PROGRESS
  // =============================================
  const scrollProgress = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + '%';
  });

  // =============================================
  // NAVBAR
  // =============================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    navbar.classList.toggle('scrolled', currentScroll > 80);

    // Hide on scroll down, show on scroll up
    if (currentScroll > 120 && currentScroll > lastScroll) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;

    updateActiveLink();
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('.section, .hero');
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 300) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  // =============================================
  // DATA REVEAL — Intersection Observer
  // =============================================
  const revealElements = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // =============================================
  // COUNTER ANIMATION
  // =============================================
  const statNumbers = document.querySelectorAll('.stats-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const steps = 50;
    const increment = target / steps;
    const duration = 1500;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  }

  // =============================================
  // STATS RING ANIMATION
  // =============================================
  const statCards = document.querySelectorAll('.stats-card');

  const ringObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const ring = card.querySelector('.ring-fill');
        if (ring) {
          const targetOffset = parseFloat(ring.style.getPropertyValue('--target')) || 0;
          setTimeout(() => {
            ring.style.setProperty('--offset', targetOffset);
          }, 300);
        }
        ringObserver.unobserve(card);
      }
    });
  }, { threshold: 0.3 });

  statCards.forEach(card => ringObserver.observe(card));

  // =============================================
  // TYPEWRITER EFFECT
  // =============================================
  if (typewriter) {
    function getPhrases() {
      return typewriterPhrases[currentLang] || typewriterPhrases.en;
    }

    function runTypeEffect() {
      const phrases = getPhrases();
      const currentPhrase = phrases[typeState.phraseIndex];
      if (typeState.isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, typeState.charIndex - 1);
        typeState.charIndex--;
      } else {
        typewriter.textContent = currentPhrase.substring(0, typeState.charIndex + 1);
        typeState.charIndex++;
      }

      if (!typeState.isDeleting && typeState.charIndex === currentPhrase.length) {
        typeState.isDeleting = true;
        typeState.timer = setTimeout(runTypeEffect, 2000);
        return;
      }
      if (typeState.isDeleting && typeState.charIndex === 0) {
        typeState.isDeleting = false;
        typeState.phraseIndex = (typeState.phraseIndex + 1) % phrases.length;
        typeState.timer = setTimeout(runTypeEffect, 400);
        return;
      }

      const speed = typeState.isDeleting ? 40 : 80;
      typeState.timer = setTimeout(runTypeEffect, speed);
    }

    typeState.timer = setTimeout(runTypeEffect, 2000);
  }

  function resetTypewriter() {
    if (!typewriter) return;
    clearTimeout(typeState.timer);
    typeState.phraseIndex = 0;
    typeState.charIndex = 0;
    typeState.isDeleting = false;
    typewriter.textContent = '';
    typeState.timer = setTimeout(runTypeEffect, 400);
  }

  // =============================================
  // MAGNETIC BUTTONS
  // =============================================
  const magneticBtns = document.querySelectorAll('.magnetic');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // =============================================
  // 3D TILT — About Card
  // =============================================
  const aboutTilt = document.getElementById('aboutTilt');
  if (aboutTilt && window.innerWidth > 768) {
    const parent = aboutTilt.parentElement;
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      aboutTilt.style.transform = `
        perspective(800px)
        rotateY(${x * 15}deg)
        rotateX(${-y * 15}deg)
        translateZ(20px)
      `;
      const glow = aboutTilt.querySelector('::before');
    });
    parent.addEventListener('mouseleave', () => {
      aboutTilt.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  }

  // =============================================
  // 3D TILT — Player Cards
  // =============================================
  const playerCards = document.querySelectorAll('.player-card');

  playerCards.forEach(card => {
    if (window.innerWidth <= 768) return;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `
        perspective(600px)
        rotateY(${x * 8}deg)
        rotateX(${-y * 8}deg)
        translateZ(10px)
      `;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  });

  // =============================================
  // BACK TO TOP
  // =============================================
  const backToTop = document.getElementById('backToTop');
  const bttRing = backToTop?.querySelector('.btt-ring circle');

  window.addEventListener('scroll', () => {
    if (!backToTop) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight);

    backToTop.classList.toggle('visible', scrollTop > 500);

    if (bttRing) {
      const circumference = 132;
      bttRing.style.strokeDashoffset = circumference - (progress * circumference);
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =============================================
  // CONTACT FORM
  // =============================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn');
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...');
      btn.disabled = true;

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData
      }).then(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> ' + (currentLang === 'en' ? 'Sent ✓' : 'تم الإرسال ✓');
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      }).catch(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> ' + (currentLang === 'en' ? 'Sent ✓' : 'تم الإرسال ✓');
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 2500);
      });
    });
  }

  // =============================================
  // MARQUEE DUPLICATE (for infinite scroll)
  // =============================================
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    const clone = marqueeTrack.cloneNode(true);
    marqueeTrack.parentElement.appendChild(clone);
  }

  // =============================================
  // PARALLAX ON SCROLL
  // =============================================
  const heroContent = document.querySelector('.hero-content');
  const heroFloating = document.querySelector('.hero-floating');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (heroContent && scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
    }
    if (heroFloating && scrollY < window.innerHeight) {
      heroFloating.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
  });

  // =============================================
  // DISCORD CARD TYPING ANIMATION
  // =============================================
  const typingMsg = document.querySelector('.typing-dots');
  if (typingMsg) {
    setInterval(() => {
      typingMsg.style.opacity = '0';
      setTimeout(() => typingMsg.style.opacity = '1', 300);
    }, 3000);
  }

  // =============================================
  // SMOOTH ANCHOR SCROLL
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =============================================
  // PAGE TRANSITION
  // =============================================
  const transitionOverlay = document.getElementById('pageTransition');
  if (transitionOverlay) {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        transitionOverlay.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      });
    });
    // Fade in on load
    window.addEventListener('pageshow', () => {
      transitionOverlay.classList.remove('active');
    });
  }

  console.log('%c Calm Team v2 ', 'background: #d6a566; color: #0a0a16; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px; font-family: Teko, sans-serif; letter-spacing: 3px;');
  console.log('%c Calm Team — Since 2018 ', 'font-size: 14px; color: #8888bb;');
});
