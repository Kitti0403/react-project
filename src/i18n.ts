import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Journey",
        goals: "My Goals",
        contact: "Message Me",
      },
      hero: {
        title: "Welcome to Modern React Development",
        desc: "Build fast, scalable applications with React 18, TypeScript, and Vite. Experience the power of modern web development with cutting-edge tools and best practices.",
        doc: "Open React Documentation",
      },
      about: {
        title: "About This Journey",
        desc: "Hi! I'm Kitti from Hungary, currently in my fifth year at technical school. This website is my personal project where I'm exploring React and TypeScript while building something meaningful - a platform for my art commission goals.",
        built: "What I've Built Here",
        gallery: "🎨 Interactive art gallery with drag-to-scroll functionality",
        form: "📩 Working contact form for messages",
        mobile: "📱 Mobile-responsive design optimized for 16:9 displays",
        personal: "🥳 Personal touch with honest thoughts",
        infinite: "♻️ Infinite scroll carousel for smooth user experience",
      },
      stats: {
        personal: "Personal",
        personalDesc: "Built with honesty and personality",
        interactive: "Interactive",
        interactiveDesc: "Drag, scroll, and explore freely",
        functional: "Functional",
        functionalDesc: "Working forms and real connections",
        creative: "Creative",
        creativeDesc: "Art meets code",
        free: "Free",
        freeDesc: "It wasn't forced on me to do",
        responsive: "Responsive",
        responsiveDesc: "Which I hated to fix",
      },
      services: {
        title: "What I'm Trying to Achieve",
        development: "Development",
        developmentDesc:
          "I aim for Front-end development, what comes after was forced :S",
        design: "Design",
        designDesc:
          "Responsive UI/UX design optimized for all screen sizes and devices.",
        exams: "Exams",
        examsDesc:
          "I'm in my fifth year at a technical school. THE LAST EXAM IS COMIIING!",
        commissions: "Art Commissions",
        commissionsDesc:
          "My goal is to build a website for commissioning me and my partner for art work.",
        art: "Art, seriously?",
        artDesc: "I don't want to throw out my old hobby, that's it.",
      },
      dragHint: "👆 Grab and drag to explore • Infinite scroll ∞",
      contact: {
        title: "Leave a Message to the Author",
        desc: "I'm still learning how to build proper websites so I'd love to hear what do you think about this project, and the bugs if you found any. Whether it's feedback, questions, or just saying hello - drop me a message!",
        email: "Email",
        willRead: "Will I read it?",
        willReadVal: "Most likely! ૮₍ ˶•⤙•˶ ₎ა",
        location: "Location",
        locationVal: "Hungary 🇭🇺",
        attach:
          "Feel free to attach images to show me something cool you're working on!",
        memes: "Memes will suffice too lol",
      },
      form: {
        name: "Your Name",
        namePlaceholder: "Your name here...",
        email: "Your Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What's this about?",
        message: "Your Message",
        messagePlaceholder: "Tell me what's on your mind...",
        imageLabel: "📷 Attach an Image (optional)",
        imageInfo: "Only image files allowed (JPG, PNG, GIF, WebP) - Max 10MB.",
        submitIdle: "Send Message",
        submitSending: "Sending...",
        successMsg:
          "✅ Message sent successfully! I'll receive it directly in my email and get back to you soon! 😊",
        errorMsg:
          "❌ Oops! Something went wrong. Please try again or email me directly at annus.kitti@gmail.com",
      },
      footer: {
        quick: "Quick Links",
        connect: "Connect",
        github: "GitHub",
        copyright:
          "© 2025 Kitti's Gallery. Built with React + TypeScript + Vite.",
      },
    },
  },
  hu: {
    translation: {
      navbar: {
        home: "Főoldal",
        about: "Az Utam",
        goals: "Céljaim",
        contact: "Üzenj Nekem",
      },
      hero: {
        title: "Üdv a Modern React Fejlesztésben",
        desc: "Építs gyors, skálázható alkalmazásokat React 18, TypeScript és Vite segítségével. Tapasztald meg a modern webfejlesztés erejét a legújabb eszközökkel és legjobb gyakorlatokkal.",
        doc: "React Dokumentáció Megnyitása",
      },
      about: {
        title: "Az Utam",
        desc: "Szia! Kitti vagyok Magyarországról, jelenleg ötödéves technikumi tanuló. Ez a weboldal a személyes projektem, ahol Reactet és TypeScriptet tanulok, miközben valami értelmeset építek – egy platformot a művészeti megbízásaimhoz.",
        built: "Amit Itt Készítettem",
        gallery: "🎨 Interaktív galéria húzható görgetéssel",
        form: "📩 Működő kapcsolatfelvételi űrlap",
        mobile: "📱 Mobilbarát, 16:9-re optimalizált design",
        personal: "🥳 Személyes hangvétel, őszinte gondolatokkal",
        infinite: "♻️ Végtelen görgetés a gördülékeny élményért",
      },
      stats: {
        personal: "Személyes",
        personalDesc: "Őszinteséggel és egyéniséggel építve",
        interactive: "Interaktív",
        interactiveDesc: "Húzd, görgess, fedezd fel szabadon",
        functional: "Működő",
        functionalDesc: "Működő űrlapok és valós kapcsolatok",
        creative: "Kreatív",
        creativeDesc: "A művészet találkozik a kóddal",
        free: "Szabad",
        freeDesc: "Nem kényszerítettek rá",
        responsive: "Reszponzív",
        responsiveDesc: "Amit utáltam javítani",
      },
      services: {
        title: "Amit El Akarok Érni",
        development: "Fejlesztés",
        developmentDesc:
          "Front-end fejlesztésre törekszem, ami utána jön, azt rám kényszerítették :S",
        design: "Tervezés",
        designDesc:
          "Reszponzív UI/UX tervezés, minden képernyőméretre és eszközre optimalizálva.",
        exams: "Vizsgák",
        examsDesc: "Ötödéves vagyok egy technikumban. AZ UTOLSÓ VIZSGA JÖÖÖÖN!",
        commissions: "Művészeti Megbízások",
        commissionsDesc:
          "A célom egy weboldal készítése, hogy engem és a partnerem művészeti munkákra lehessen megbízni.",
        art: "Művészet, komolyan?",
        artDesc: "Nem akarom kidobni a régi hobbimat, ennyi.",
      },
      dragHint: "👆 Fogd meg és húzd a felfedezéshez • Végtelen görgetés ∞",
      contact: {
        title: "Üzenj a Szerzőnek",
        desc: "Még tanulom a weboldalak készítését, ezért szívesen hallanám, mit gondolsz erről a projektről, és a hibákról is, ha találtál. Akár visszajelzés, kérdés, vagy csak egy hello - írj bátran!",
        email: "Email",
        willRead: "Elolvasom?",
        willReadVal: "Valószínűleg igen! ૮₍ ˶•⤙•˶ ₎ა",
        location: "Helyszín",
        locationVal: "Magyarország 🇭🇺",
        attach: "Csatolj nyugodtan képet, ha valami menőt mutatnál!",
        memes: "Memek is jöhetnek, lol",
      },
      form: {
        name: "Neved",
        namePlaceholder: "Itt írd a neved...",
        email: "Email címed",
        emailPlaceholder: "te.email@pelda.hu",
        subject: "Tárgy",
        subjectPlaceholder: "Miről szól ez?",
        message: "Üzeneted",
        messagePlaceholder: "Mondd el, mi jár a fejedben...",
        imageLabel: "📷 Kép csatolása (opcionális)",
        imageInfo:
          "Csak képfájlok engedélyezettek (JPG, PNG, GIF, WebP) - Max 10MB.",
        submitIdle: "Üzenet Küldése",
        submitSending: "Küldés...",
        successMsg:
          "✅ Üzenet sikeresen elküldve! Közvetlenül megkapom az emailemben és hamarosan válaszolok! 😊",
        errorMsg:
          "❌ Hoppá! Valami elromlott. Próbáld újra vagy írj nekem közvetlenül: annus.kitti@gmail.com",
      },
      footer: {
        quick: "Gyorslinkek",
        connect: "Kapcsolat",
        github: "GitHub",
        copyright:
          "© 2025 Kitti Galériája. Készült React + TypeScript + Vite segítségével.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
