/**
 * German Levels Page Module
 * Renders the A1-B2 levels overview with collapsible cards
 */

const LevelsPage = (() => {
  const LEVEL_DATA = {
    A1: {
      badge: "a1",
      title: "Beginner",
      titleDe: "Anfänger",
      titleAr: "المبتدئ",
      grammar: [
        {
          name: "Verb conjugation in Präsens (Present tense)",
          nameAr: "تصريف الأفعال في زمن المضارع",
          example: "ich gehe, du gehst, er/sie/es geht, wir gehen, ihr geht, sie gehen",
        },
        {
          name: "Personal pronouns (Personalpronomen)",
          nameAr: "الضمائر الشخصية",
          example: "ich (أنا), du (أنت), er (هو), sie (هي), es (هو/هي للمحايد)",
        },
        {
          name: "Definite articles (der, die, das)",
          nameAr: "أدوات التعريف",
          example: "der Mann (الرجل - مذكر), die Frau (المرأة - مؤنث), das Kind (الطفل - محايد)",
        },
        {
          name: "Simple nominal and verbal sentences",
          nameAr: "الجمل الاسمية والفعلية البسيطة",
          example: "Das ist ein Buch. (هذا كتاب) | Ich lese ein Buch. (أنا أقرأ كتاباً)",
        },
        {
          name: "Question words (Fragewörter)",
          nameAr: "أدوات الاستفهام",
          example: "wo (أين), wer (من), was (ماذا), wann (متى), wie (كيف), warum (لماذا)",
        },
      ],
      vocabulary: [
        {
          icon: "fa-hand-wave",
          name: "Introductions",
          nameAr: "التعارف",
          examples: "Hallo, Guten Tag, Wie heißt du?, Ich heiße...",
        },
        {
          icon: "fa-users",
          name: "Family",
          nameAr: "العائلة",
          examples: "Vater, Mutter, Bruder, Schwester, Sohn, Tochter",
        },
        {
          icon: "fa-hashtag",
          name: "Numbers",
          nameAr: "الأرقام",
          examples: "eins, zwei, drei, vier, fünf... bis hundert",
        },
        {
          icon: "fa-briefcase",
          name: "Professions",
          nameAr: "المهن",
          examples: "Arzt, Lehrer, Ingenieur, Student, Kellner",
        },
        { icon: "fa-palette", name: "Colors", nameAr: "الألوان", examples: "rot, blau, grün, gelb, schwarz, weiß" },
        { icon: "fa-utensils", name: "Food", nameAr: "الطعام", examples: "Brot, Käse, Fleisch, Fisch, Reis, Suppe" },
        { icon: "fa-shirt", name: "Clothes", nameAr: "الملابس", examples: "Hemd, Hose, Kleid, Jacke, Schuhe" },
        {
          icon: "fa-clock",
          name: "Time & Days",
          nameAr: "الوقت والأيام",
          examples: "Montag-Sonntag, Januar-Dezember, heute, morgen",
        },
        {
          icon: "fa-map-marker-alt",
          name: "Basic Places",
          nameAr: "الأماكن الأساسية",
          examples: "Haus, Schule, Supermarkt, Bahnhof",
        },
      ],
      skills: [
        { text: "Introducing yourself and others", textAr: "تقديم نفسك والآخرين" },
        { text: "Simple descriptions of objects and people", textAr: "وصف بسيط للأشياء والأشخاص" },
        { text: "Forming very short, clear sentences", textAr: "تكوين جمل قصيرة جداً وواضحة" },
        { text: "Understanding very simple conversations", textAr: "فهم المحادثات البسيطة جداً" },
      ],
      categories: ["greetings", "numbers", "family", "food", "colors", "professions", "clothing", "places"],
    },
    A2: {
      badge: "a2",
      title: "Elementary",
      titleDe: "Grundlegende Kenntnisse",
      titleAr: "المستوى الأساسي",
      grammar: [
        {
          name: "Perfekt (Present Perfect)",
          nameAr: "زمن الماضي التام",
          example: "Ich habe gegessen. (أنا أكلت) | Ich bin gegangen. (أنا ذهبت)",
        },
        {
          name: "Adjectives and their usage",
          nameAr: "الصفات واستخدامها",
          example: "der große Mann, eine kleine Frau, ein schönes Haus",
        },
        {
          name: "Possessive pronouns",
          nameAr: "ضمائر الملكية",
          example: "mein (ملكي), dein (ملكك), sein (ملكه), ihr (ملكها)",
        },
        {
          name: 'Sentences with "weil" and "dass"',
          nameAr: 'الجمل مع "لأن" و "أن"',
          example: "Ich bleibe zu Hause, weil ich krank bin.",
        },
        {
          name: "Comparatives (Komparativ/Superlativ)",
          nameAr: "صيغ المقارنة والتفضيل",
          example: "groß → größer → am größten",
        },
        {
          name: "Prepositions with Dativ",
          nameAr: "حروف الجر مع حالة الجر",
          example: "mit, nach, bei, von, zu, aus, seit",
        },
      ],
      vocabulary: [
        {
          icon: "fa-heart-pulse",
          name: "Health",
          nameAr: "الصحة",
          examples: "Kopfschmerzen, Fieber, Erkältung, Arzt, Apotheke",
        },
        {
          icon: "fa-cloud-sun",
          name: "Weather",
          nameAr: "الطقس",
          examples: "sonnig, bewölkt, regnerisch, windig, Schnee",
        },
        {
          icon: "fa-graduation-cap",
          name: "Education",
          nameAr: "التعليم",
          examples: "Universität, Kurs, Prüfung, Hausaufgabe",
        },
        { icon: "fa-building", name: "Work", nameAr: "العمل", examples: "Büro, Chef, Kollege, Gehalt, Urlaub" },
        { icon: "fa-plane", name: "Travel", nameAr: "السفر", examples: "Flugzeug, Zug, Hotel, Koffer, Reisepass" },
        {
          icon: "fa-calendar-day",
          name: "Daily Routines",
          nameAr: "الروتين اليومي",
          examples: "aufstehen, duschen, frühstücken",
        },
        {
          icon: "fa-map",
          name: "Describing Places",
          nameAr: "وصف الأماكن",
          examples: "links, rechts, geradeaus, gegenüber",
        },
      ],
      skills: [
        { text: "Writing short messages", textAr: "كتابة رسائل قصيرة" },
        { text: "Making simple phone calls", textAr: "إجراء مكالمات هاتفية بسيطة" },
        { text: "Understanding short texts", textAr: "فهم النصوص القصيرة" },
        { text: "Talking about the past with some detail", textAr: "التحدث عن الماضي ببعض التفصيل" },
      ],
      categories: ["greetings", "verbs", "places", "food"],
    },
    B1: {
      badge: "b1",
      title: "Intermediate",
      titleDe: "Mittelstufe",
      titleAr: "المستوى المتوسط",
      grammar: [
        {
          name: "Präteritum (Simple Past)",
          nameAr: "زمن الماضي البسيط",
          example: "ich war (كنت), ich hatte (كان لدي), ich ging (ذهبت)",
        },
        { name: "Futur I (Future Tense)", nameAr: "زمن المستقبل", example: "Ich werde morgen kommen. (سأأتي غداً)" },
        {
          name: "Basic conditional sentences",
          nameAr: "الجمل الشرطية الأساسية",
          example: "Wenn es regnet, bleibe ich zu Hause.",
        },
        { name: "Passiv (Passive Voice)", nameAr: "المبني للمجهول", example: "Das Buch wird gelesen. (الكتاب يُقرأ)" },
        {
          name: "Advanced connectors",
          nameAr: "أدوات الربط المتقدمة",
          example: "obwohl (بالرغم من), trotzdem (مع ذلك), deshalb (لذلك)",
        },
      ],
      vocabulary: [
        {
          icon: "fa-comment-dots",
          name: "Opinions",
          nameAr: "الآراء",
          examples: "Ich denke, Meiner Meinung nach, Ich glaube",
        },
        {
          icon: "fa-book-open",
          name: "Education & Studies",
          nameAr: "التعليم والدراسة",
          examples: "Studiengang, Abschluss, Stipendium",
        },
        { icon: "fa-leaf", name: "Environment", nameAr: "البيئة", examples: "Klimawandel, Umweltschutz, Recycling" },
        { icon: "fa-laptop", name: "Technology", nameAr: "التكنولوجيا", examples: "Software, herunterladen, Passwort" },
        { icon: "fa-newspaper", name: "Media", nameAr: "الإعلام", examples: "Nachrichten, Bericht, soziale Medien" },
        { icon: "fa-masks-theater", name: "Culture", nameAr: "الثقافة", examples: "Tradition, Feiertag, Museum" },
      ],
      skills: [
        { text: "Writing medium texts (150-200 words)", textAr: "كتابة نصوص متوسطة" },
        { text: "Summarizing a text or story", textAr: "تلخيص نص أو قصة" },
        { text: "Holding a 10-minute conversation", textAr: "إجراء محادثة لمدة 10 دقائق" },
        { text: "Understanding light TV programs", textAr: "فهم البرامج التلفزيونية الخفيفة" },
        { text: "Giving justified opinions", textAr: "إبداء آراء مبررة" },
      ],
      categories: ["greetings", "verbs", "places"],
    },
    B2: {
      badge: "b2",
      title: "Upper Intermediate",
      titleDe: "Obere Mittelstufe",
      titleAr: "المستوى فوق المتوسط",
      grammar: [
        {
          name: "Very complex sentences",
          nameAr: "الجمل المعقدة جداً",
          example: "Obwohl er müde war, ging er zur Arbeit, weil er eine wichtige Besprechung hatte.",
        },
        {
          name: "Advanced negation",
          nameAr: "النفي المتقدم",
          example: "kaum (بالكاد), weder...noch (لا...ولا), keineswegs",
        },
        {
          name: "Plusquamperfekt (Past Perfect)",
          nameAr: "زمن الماضي الأبعد",
          example: "Nachdem ich gegessen hatte, ging ich spazieren.",
        },
        { name: "Advanced Passiv", nameAr: "المبني للمجهول المتقدم", example: "Das Haus war gebaut worden." },
        {
          name: "Konjunktiv II (Subjunctive II)",
          nameAr: "صيغة الشرطية",
          example: "Wenn ich reich wäre, würde ich reisen.",
        },
      ],
      vocabulary: [
        {
          icon: "fa-brain",
          name: "Abstract Concepts",
          nameAr: "المفاهيم المجردة",
          examples: "Gerechtigkeit, Freiheit, Verantwortung",
        },
        { icon: "fa-landmark", name: "Politics", nameAr: "السياسة", examples: "Regierung, Demokratie, Wahl, Gesetz" },
        { icon: "fa-chart-line", name: "Business", nameAr: "الأعمال", examples: "Unternehmen, Investition, Vertrag" },
        {
          icon: "fa-file-alt",
          name: "Job Interviews",
          nameAr: "مقابلات العمل",
          examples: "Bewerbung, Lebenslauf, Qualifikation",
        },
        {
          icon: "fa-microscope",
          name: "Academic",
          nameAr: "الأكاديمي",
          examples: "Hypothese, Analyse, Schlussfolgerung",
        },
        {
          icon: "fa-heart",
          name: "Complex Emotions",
          nameAr: "المشاعر المعقدة",
          examples: "Sehnsucht, Verzweiflung, Begeisterung",
        },
      ],
      skills: [
        { text: "Writing 250-word essays", textAr: "كتابة مقالات من 250 كلمة" },
        { text: "Long debates and discussions", textAr: "مناقشات ومناظرات طويلة" },
        { text: "Watching videos without subtitles", textAr: "مشاهدة الفيديوهات بدون ترجمة" },
        {
          text: "Reading long texts and explaining complex ideas",
          textAr: "قراءة النصوص الطويلة وشرح الأفكار المعقدة",
        },
      ],
      categories: ["greetings", "professions"],
    },
  }

  /**
   * Render the levels page
   */
  function render(container) {
    const html = `
      <div class="levels-panel">
        <div class="levels-header">
          <h2><i class="fas fa-layer-group"></i> German Language Levels</h2>
          <p>Comprehensive overview of Grammar, Vocabulary, and Skills for each CEFR level</p>
        </div>

        <div class="levels-container">
          ${Object.entries(LEVEL_DATA)
            .map(([level, data]) => renderLevelCard(level, data))
            .join("")}
        </div>
      </div>
    `

    container.innerHTML = html
    attachEventListeners(container)
  }

  /**
   * Render a single level card
   */
  function renderLevelCard(level, data) {
    return `
      <div class="level-card" data-level-card="${level}">
        <button class="level-card-header" aria-expanded="false" aria-controls="level-content-${level}">
          <div class="level-card-title">
            <span class="level-badge ${data.badge}">${level}</span>
            <div>
              <h3>${data.title}</h3>
              <p>${data.titleDe} - ${data.titleAr}</p>
            </div>
          </div>
          <i class="fas fa-chevron-down level-card-icon"></i>
        </button>
        <div class="level-card-content" id="level-content-${level}">
          
          <!-- Grammar Section -->
          <div class="section-block">
            <div class="section-header">
              <i class="fas fa-spell-check"></i>
              <h4>Grammatik (Grammar) - القواعد</h4>
            </div>
            <div class="section-content">
              <ul class="grammar-list">
                ${data.grammar
                  .map(
                    (g) => `
                  <li>
                    <strong>${g.name}</strong>
                    <p>${g.nameAr}</p>
                    <div class="example-box">
                      <code>${g.example}</code>
                    </div>
                  </li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
          </div>

          <!-- Vocabulary Section -->
          <div class="section-block">
            <div class="section-header">
              <i class="fas fa-language"></i>
              <h4>Wortschatz (Vocabulary) - المفردات</h4>
            </div>
            <div class="section-content">
              <div class="vocab-grid">
                ${data.vocabulary
                  .map(
                    (v) => `
                  <div class="vocab-category">
                    <h5><i class="fas ${v.icon}"></i> ${v.name} - ${v.nameAr}</h5>
                    <p>${v.examples}</p>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="section-block">
            <div class="section-header">
              <i class="fas fa-star"></i>
              <h4>Fertigkeiten (Skills) - المهارات</h4>
            </div>
            <div class="section-content">
              <ul class="skills-list">
                ${data.skills
                  .map(
                    (s) => `
                  <li><i class="fas fa-check-circle"></i> ${s.text} - ${s.textAr}</li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="level-cta">
            <button class="cta-btn" data-show-level="${level}" data-categories="${data.categories.join(",")}">
              <i class="fas fa-book-open"></i>
              Show sample ${level} words
            </button>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Attach event listeners
   */
  function attachEventListeners(container) {
    // Collapsible cards
    container.querySelectorAll(".level-card-header").forEach((header) => {
      header.addEventListener("click", () => {
        const card = header.closest(".level-card")
        const isOpen = card.classList.contains("open")

        // Close all cards
        container.querySelectorAll(".level-card").forEach((c) => {
          c.classList.remove("open")
          c.querySelector(".level-card-header").setAttribute("aria-expanded", "false")
        })

        // Open clicked card if it was closed
        if (!isOpen) {
          card.classList.add("open")
          header.setAttribute("aria-expanded", "true")
        }
      })

      // Keyboard support
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          header.click()
        }
      })
    })

    // CTA buttons
    container.querySelectorAll(".cta-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const level = e.currentTarget.dataset.showLevel
        const categories = e.currentTarget.dataset.categories.split(",")

        window.dispatchEvent(
          new CustomEvent("showLevelWords", {
            detail: { level, categories },
          }),
        )
      })
    })
  }

  // Public API
  return {
    render,
    LEVEL_DATA,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.LevelsPage = LevelsPage
}
