// Turkish and German translations for every element tagged with data-i18n / data-i18n-placeholder.
// English is captured from the markup itself at load time, so it never goes stale.
(function () {
  var TR = {
    'nav.apps': 'Uygulamalar',
    'nav.studio': 'Stüdyo',
    'nav.work': 'Birlikte çalışalım',
    'nav.contact': 'İletişim',

    'hero.title': 'Her güne uygulamalar, <em>özenle yapılmış.</em>',
    'hero.desc': 'Technous bağımsız bir uygulama stüdyosudur. Kendi uygulamalarımızı tasarlar, geliştirir ve işletiriz: tek bir işi iyi yapan, gizliliğinize saygı duyan ve her gün kullanması keyifli, odaklı araçlar.',
    'hero.apps': 'Uygulamalarımızı görün',
    'hero.studio': 'Nasıl geliştiriyoruz',
    'hero.apps.nimble': 'Yapay zeka koçu',
    'hero.apps.tact': 'Yazım aracı',
    'hero.apps.skye': 'Yapay zeka astroloğu',

    'apps.badge': 'Uygulamalarımız',
    'apps.title': 'Geliştirdiğimiz ve her gün kullandığımız uygulamalar',
    'products.tact.tagline': 'Her seferinde doğru söyleyin',
    'products.tact.desc': 'Tact mesajlarınıza doğru tonu verir ve yapay zeka komutlarınızı daha etkili hale getirir. Tasarımı gereği gizli; sözleriniz asla kaydedilmez.',
    'products.nimble.tagline': 'Sabah koçun',
    'products.nimble.desc': "Mira, Arden, Vexo veya Kai'den birini seçin; ruh halinize, hedeflerinize ve alışkanlıklarınıza göre hazırlanmış taze bir mesajla onların sesine uyanın.",
    'products.soon': 'Yakında',
    'products.skye.tagline': 'Kozmik kızın',
    'products.skye.desc': 'Doğum haritan, bugünün gökyüzü ve tarot hakkında Skye ile istediğin zaman sohbet et. Yıldızlarını okur ve seninle bir arkadaş gibi konuşur.',

    'studio.badge': 'Stüdyo',
    'studio.title': 'Uygulamalarımızı nasıl yapıyoruz',
    'studio.desc': 'Kendimizin de kullanmak istediği ürünleri geliştiren küçük ve deneyimli bir ekibiz. Asla taviz vermediğimiz birkaç kural:',
    'studio.1.title': 'Gündelik anlar için',
    'studio.1.desc': 'Uyanmak, bir mesaj yazmak, yıldızlarına bakmak. Her gün yaşanan küçük anlar için geliştiriyoruz.',
    'studio.2.title': 'Tasarımı gereği gizli',
    'studio.2.desc': 'Yalnızca uygulamanın çalışması için gerekeni toplarız ve bunun ne olduğunu açıkça söyleriz.',
    'studio.3.title': 'Ayrıntılara özen',
    'studio.3.desc': 'Hareket, ses ve sözcükler; her ekranda ve her dilde doğru hissettirene kadar ince ayar.',
    'studio.4.title': 'Uzun soluklu',
    'studio.4.desc': 'Yayınladığımızı biz işletiriz. Güncellemeler, destek ve düzeltmeler lansmandan çok sonra da sürer.',

    'work.badge': 'Birlikte çalışalım',
    'work.title': 'Seçili projelerde de ortaklık yapıyoruz',
    'work.desc': 'Zaman zaman inandığımız bir şey geliştiren şirketlerle ekip oluyor, kendi uygulamalarımızın arkasındaki ürün mühendisliği, keşif ve bulut deneyimini onlara da taşıyoruz.',
    'work.reach': 'Bize anlatın',

    'footer.tagline': 'Technous LTD. Özenle yapıldı.',
    'footer.privacy': 'Gizlilik politikası',
    'footer.terms': 'Şartlar ve koşullar',
    'footer.contact': 'İletişim',
    'footer.home': 'Ana sayfa',

    'contact.badge': 'İletişim',
    'contact.title': 'Merhaba deyin',
    'contact.desc': 'Uygulamalarımız hakkında sorular, basın, ortaklıklar ya da aklınızdaki bir proje. Bize yazın, bir iş günü içinde yanıt verelim.',
    'contact.form.title': 'Bize mesaj gönderin',
    'contact.form.topic': 'Konu nedir?',
    'contact.topic.nimble': 'Nimble desteği',
    'contact.topic.tact': 'Tact desteği',
    'contact.topic.skye': 'Skye desteği',
    'contact.topic.press': 'Basın ve medya',
    'contact.topic.work': 'Ortaklık veya proje',
    'contact.topic.careers': 'Kariyer',
    'contact.topic.other': 'Başka bir konu',
    'contact.form.name': 'Ad soyad',
    'contact.form.email': 'E-posta',
    'contact.form.company': 'Şirket (isteğe bağlı)',
    'contact.form.message': 'Size nasıl yardımcı olabiliriz?',
    'contact.form.send': 'Mesaj gönder',
    'contact.details.title': 'Kısa bilgiler',
    'contact.details.desc': 'E-postayı mı tercih edersiniz? Bize doğrudan yazın, notunuzu doğru kişiye iletelim.',
    'contact.details.remote': 'Uzaktan öncelikli, GMT çalışma saatleri',
    'contact.details.response': '1 iş günü içinde yanıt',
    'contact.include.title': 'Daha hızlı yanıt vermemize yardımcı olur',
    'contact.include.1': 'Destek için: uygulama, cihazınız ve ne olduğu',
    'contact.include.2': 'Basın için: yayın kuruluşunuz ve son teslim tarihi',
    'contact.include.3': 'Projeler için: hedefler, zaman planı ve bütçe',
    'contact.include.4': 'Kariyer için: çalışmalarınızın veya özgeçmişinizin bağlantısı',
    'contact.status': 'E-posta istemciniz açılıyor. Açılmazsa bize doğrudan hello@technous.dev adresinden yazın',

    'ph.contact.form.company': 'Şirket adı',
    'ph.contact.form.message': 'Aklınızdakini anlatın'
  };

  var DE = {
    'nav.apps': 'Apps',
    'nav.studio': 'Studio',
    'nav.work': 'Zusammenarbeit',
    'nav.contact': 'Kontakt',

    'hero.title': 'Apps für jeden Tag, <em>mit Sorgfalt gemacht.</em>',
    'hero.desc': 'Technous ist ein unabhängiges App-Studio. Wir entwerfen, entwickeln und betreiben unsere eigenen Apps: fokussierte Werkzeuge, die eine Sache gut machen, Ihre Privatsphäre respektieren und sich jeden Tag gut anfühlen.',
    'hero.apps': 'Unsere Apps ansehen',
    'hero.studio': 'Wie wir bauen',
    'hero.apps.nimble': 'KI-Coach',
    'hero.apps.tact': 'Schreibwerkzeug',
    'hero.apps.skye': 'KI-Astrologin',

    'apps.badge': 'Unsere Apps',
    'apps.title': 'Apps, die wir bauen und selbst täglich nutzen',
    'products.tact.tagline': 'Jedes Mal den richtigen Ton treffen',
    'products.tact.desc': 'Tact gibt Ihren Nachrichten den perfekten Ton und macht Ihre KI-Prompts wirksamer. Privat by Design – Ihre Worte werden nie gespeichert.',
    'products.nimble.tagline': 'Dein Morgen-Coach',
    'products.nimble.desc': 'Wählen Sie eine von vier Figuren – Mira, Arden, Vexo oder Kai – und wachen Sie zu ihrer Stimme auf, mit einer frischen Nachricht rund um Ihre Stimmung, Ihre Ziele und Ihre Gewohnheiten.',
    'products.soon': 'Bald',
    'products.skye.tagline': 'Dein kosmisches Girl',
    'products.skye.desc': 'Sprich mit Skye jederzeit über dein Geburtshoroskop, den Himmel von heute und Tarot. Sie liest deine Sterne und redet mit dir wie eine Freundin.',

    'studio.badge': 'Studio',
    'studio.title': 'Wie wir Apps machen',
    'studio.desc': 'Wir sind ein kleines, erfahrenes Team und bauen Produkte, die wir selbst nutzen wollen. Ein paar Regeln, an denen wir festhalten:',
    'studio.1.title': 'Für kleine Momente im Alltag',
    'studio.1.desc': 'Aufwachen, eine Nachricht schreiben, einen Blick in die Sterne werfen. Wir bauen für die kleinen Momente, die jeden Tag passieren.',
    'studio.2.title': 'Privat by Design',
    'studio.2.desc': 'Wir erheben nur, was eine App zum Funktionieren braucht, und sagen klar, was das ist.',
    'studio.3.title': 'Liebe zum Detail',
    'studio.3.desc': 'Bewegung, Klang und Worte, so lange verfeinert, bis sie sich richtig anfühlen – auf jedem Screen und in jeder Sprache.',
    'studio.4.title': 'Auf Dauer angelegt',
    'studio.4.desc': 'Wir betreiben, was wir veröffentlichen. Updates, Support und Fixes gibt es auch lange nach dem Launch.',

    'work.badge': 'Zusammenarbeit',
    'work.title': 'Ausgewählte Projekte begleiten wir auch als Partner',
    'work.desc': 'Ab und zu arbeiten wir mit Unternehmen zusammen, die etwas bauen, an das wir glauben – mit derselben Produktentwicklung, Discovery- und Cloud-Erfahrung, die hinter unseren eigenen Apps steckt.',
    'work.reach': 'Erzählen Sie uns davon',

    'footer.tagline': 'Technous LTD. Mit Sorgfalt gebaut.',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Allgemeine Geschäftsbedingungen',
    'footer.contact': 'Kontakt',
    'footer.home': 'Startseite',

    'contact.badge': 'Kontakt',
    'contact.title': 'Sagen Sie Hallo',
    'contact.desc': 'Fragen zu unseren Apps, Presse, Partnerschaften oder ein Projekt im Kopf? Schreiben Sie uns, wir antworten innerhalb eines Werktags.',
    'contact.form.title': 'Schreiben Sie uns',
    'contact.form.topic': 'Worum geht es?',
    'contact.topic.nimble': 'Nimble-Support',
    'contact.topic.tact': 'Tact-Support',
    'contact.topic.skye': 'Skye-Support',
    'contact.topic.press': 'Presse und Medien',
    'contact.topic.work': 'Partnerschaft oder Projekt',
    'contact.topic.careers': 'Karriere',
    'contact.topic.other': 'Etwas anderes',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail',
    'contact.form.company': 'Unternehmen (optional)',
    'contact.form.message': 'Wie können wir helfen?',
    'contact.form.send': 'Nachricht senden',
    'contact.details.title': 'Kurz und knapp',
    'contact.details.desc': 'Lieber per E-Mail? Schreiben Sie uns direkt, wir leiten Ihre Nachricht an die richtige Person weiter.',
    'contact.details.remote': 'Remote-first, Kernzeiten GMT',
    'contact.details.response': 'Antwort innerhalb von 1 Werktag',
    'contact.include.title': 'So können wir schneller antworten',
    'contact.include.1': 'Für Support: die App, Ihr Gerät und was passiert ist',
    'contact.include.2': 'Für Presse: Ihr Medium und Ihre Deadline',
    'contact.include.3': 'Für Projekte: Ziele, Zeitplan und Budget',
    'contact.include.4': 'Für Karriere: ein Link zu Ihren Arbeiten oder Ihrem Lebenslauf',
    'contact.status': 'Ihr E-Mail-Programm wird geöffnet. Falls nicht, schreiben Sie uns direkt an hello@technous.dev',

    'ph.contact.form.company': 'Firmenname',
    'ph.contact.form.message': 'Erzählen Sie uns, worum es geht'
  };

  // Strings that live only in script, so they are not captured from the markup.
  var EN = {
    'contact.status': 'Opening your email client. If it doesn\'t open, email us directly at hello@technous.dev'
  };

  var DICTS = { en: EN, tr: TR, de: DE };
  var LANGS = ['en', 'tr', 'de'];

  var root = document.documentElement;
  var textNodes = document.querySelectorAll('[data-i18n]');
  var placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');

  textNodes.forEach(function (el) {
    var value = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent;
    EN[el.getAttribute('data-i18n')] = value.trim().replace(/\s+/g, ' ');
  });
  placeholderNodes.forEach(function (el) {
    EN['ph.' + el.getAttribute('data-i18n-placeholder')] = el.getAttribute('placeholder') || '';
  });

  function apply(lang) {
    var dict = DICTS[lang] || EN;
    textNodes.forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value == null) value = EN[el.getAttribute('data-i18n')];
      if (value != null) {
        if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
        else el.textContent = value;
      }
    });
    placeholderNodes.forEach(function (el) {
      var value = dict['ph.' + el.getAttribute('data-i18n-placeholder')];
      if (value == null) value = EN['ph.' + el.getAttribute('data-i18n-placeholder')];
      if (value != null) el.setAttribute('placeholder', value);
    });
    root.setAttribute('lang', lang);
    document.querySelectorAll('.lang-current').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', lang); } catch (e) { }
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem('lang');
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) { }
    var nav = (navigator.language || '').toLowerCase();
    for (var i = 0; i < LANGS.length; i++) {
      if (nav.indexOf(LANGS[i]) === 0) return LANGS[i];
    }
    return 'en';
  }

  window.siteLang = function () {
    var lang = root.getAttribute('lang');
    return LANGS.indexOf(lang) > -1 ? lang : 'en';
  };
  window.siteText = function (key) {
    return DICTS[window.siteLang()][key] || EN[key] || '';
  };

  apply(initialLang());

  // Language menus: a trigger that opens a small list of options on desktop,
  // and the same options laid out inline inside the mobile nav.
  var menus = document.querySelectorAll('.lang-switch');

  function closeMenus(except) {
    menus.forEach(function (menu) {
      if (menu === except) return;
      var trigger = menu.querySelector('.lang-trigger');
      var list = menu.querySelector('.lang-menu');
      if (!trigger || !list) return;
      list.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    });
  }

  menus.forEach(function (menu) {
    var trigger = menu.querySelector('.lang-trigger');
    var list = menu.querySelector('.lang-menu');
    if (trigger && list) {
      trigger.addEventListener('click', function (event) {
        event.stopPropagation();
        var open = list.hidden;
        closeMenus(menu);
        list.hidden = !open;
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  });

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-lang'));
      closeMenus();
    });
  });

  document.addEventListener('click', function () { closeMenus(); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenus();
  });
})();
