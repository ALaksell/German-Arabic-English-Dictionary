/**
 * German Learning Dictionary
 * Created by: aksell
 */

// --- Dictionary Data (Comprehensive Structure) ---
// Structure: [German, PronunciationEN, PronunciationAR, English, Arabic, Example(DE + AR translation)]
const dictionaryData = {
  A1: {
    title: "Level A1: Absolute Beginner",
    desc: "Essential vocabulary for daily life, greetings, family, numbers, and basic needs.",
    words: [
      // --- GREETINGS & BASICS ---
      {
        de: "Hallo",
        pro_en: "hah-loh",
        pro_ar: "هالو",
        en: "Hello",
        ar: "مرحباً",
        ex: "Hallo, wie geht es dir? <br><em>(Hello, how are you?)</em>",
      },
      {
        de: "Guten Morgen",
        pro_en: "goo-ten mor-gen",
        pro_ar: "غوتن مورغن",
        en: "Good morning",
        ar: "صباح الخير",
        ex: "Guten Morgen! Hast du gut geschlafen? <br><em>(Good morning! Did you sleep well?)</em>",
      },
      {
        de: "Guten Tag",
        pro_en: "goo-ten tahg",
        pro_ar: "غوتن تاغ",
        en: "Good day",
        ar: "يوم سعيد / نهارك سعيد",
        ex: "Guten Tag, mein Name ist Müller. <br><em>(Good day, my name is Müller.)</em>",
      },
      {
        de: "Guten Abend",
        pro_en: "goo-ten ah-bent",
        pro_ar: "غوتن آبند",
        en: "Good evening",
        ar: "مساء الخير",
        ex: "Guten Abend, willkommen! <br><em>(Good evening, welcome!)</em>",
      },
      {
        de: "Gute Nacht",
        pro_en: "goo-tuh nakht",
        pro_ar: "غوتة ناخت",
        en: "Good night",
        ar: "تصبح على خير",
        ex: "Gute Nacht, schlaf gut! <br><em>(Good night, sleep well!)</em>",
      },
      {
        de: "Auf Wiedersehen",
        pro_en: "owf vee-der-zayn",
        pro_ar: "أوف فيدر زين",
        en: "Goodbye",
        ar: "إلى اللقاء",
        ex: "Auf Wiedersehen, bis morgen! <br><em>(Goodbye, see you tomorrow!)</em>",
      },
      {
        de: "Tschüss",
        pro_en: "chews",
        pro_ar: "تشوس",
        en: "Bye",
        ar: "وداعاً (غير رسمي)",
        ex: "Tschüss! Bis bald. <br><em>(Bye! See you soon.)</em>",
      },
      {
        de: "Danke",
        pro_en: "dahn-kuh",
        pro_ar: "دانكه",
        en: "Thank you",
        ar: "شكراً",
        ex: "Danke für das Geschenk. <br><em>(Thank you for the gift.)</em>",
      },
      {
        de: "Bitte",
        pro_en: "bi-tuh",
        pro_ar: "بيته",
        en: "Please / You're welcome",
        ar: "من فضلك / عفواً",
        ex: "Einen Kaffee, bitte. <br><em>(A coffee, please.)</em>",
      },
      {
        de: "Entschuldigung",
        pro_en: "ent-shool-dee-goong",
        pro_ar: "إنتشولديغونغ",
        en: "Excuse me / Sorry",
        ar: "المعذرة / آسف",
        ex: "Entschuldigung, darf ich vorbei? <br><em>(Excuse me, may I pass?)</em>",
      },
      {
        de: "Ja",
        pro_en: "ya",
        pro_ar: "يا",
        en: "Yes",
        ar: "نعم",
        ex: "Ja, ich komme mit. <br><em>(Yes, I am coming along.)</em>",
      },
      {
        de: "Nein",
        pro_en: "nine",
        pro_ar: "ناين",
        en: "No",
        ar: "لا",
        ex: "Nein, ich habe keine Zeit. <br><em>(No, I don't have time.)</em>",
      },
      {
        de: "Vielleicht",
        pro_en: "fee-laisht",
        pro_ar: "فيلايشت",
        en: "Maybe",
        ar: "ربما",
        ex: "Vielleicht komme ich später. <br><em>(Maybe I will come later.)</em>",
      },

      // --- NUMBERS (0-20) ---
      {
        de: "eins",
        pro_en: "eyns",
        pro_ar: "آينس",
        en: "one",
        ar: "واحد",
        ex: "Ich habe eine Katze. <br><em>(I have one cat.)</em>",
      },
      {
        de: "zwei",
        pro_en: "tsvai",
        pro_ar: "تسفاي",
        en: "two",
        ar: "اثنان",
        ex: "Zwei Kaffee, bitte. <br><em>(Two coffees, please.)</em>",
      },
      {
        de: "drei",
        pro_en: "dry",
        pro_ar: "دراي",
        en: "three",
        ar: "ثلاثة",
        ex: "Aller guten Dinge sind drei. <br><em>(All good things come in threes.)</em>",
      },
      {
        de: "zehn",
        pro_en: "tsayn",
        pro_ar: "تسين",
        en: "ten",
        ar: "عشرة",
        ex: "Es ist zehn Uhr. <br><em>(It is ten o'clock.)</em>",
      },

      // --- FAMILY & PEOPLE ---
      {
        de: "die Familie",
        pro_en: "dee fah-mee-lyuh",
        pro_ar: "دي فاميليا",
        en: "Family",
        ar: "العائلة",
        ex: "Meine Familie wohnt in Berlin. <br><em>(My family lives in Berlin.)</em>",
      },
      {
        de: "der Vater",
        pro_en: "dair fah-ter",
        pro_ar: "دير فاتر",
        en: "Father",
        ar: "الأب",
        ex: "Mein Vater arbeitet bei der Bank. <br><em>(My father works at the bank.)</em>",
      },
      {
        de: "die Mutter",
        pro_en: "dee moo-ter",
        pro_ar: "دي موتر",
        en: "Mother",
        ar: "الأم",
        ex: "Meine Mutter kocht sehr gut. <br><em>(My mother cooks very well.)</em>",
      },
      {
        de: "der Sohn",
        pro_en: "dair zohn",
        pro_ar: "دير زون",
        en: "Son",
        ar: "الابن",
        ex: "Mein Sohn geht zur Schule. <br><em>(My son goes to school.)</em>",
      },
      {
        de: "die Tochter",
        pro_en: "dee tokh-ter",
        pro_ar: "دي توختر",
        en: "Daughter",
        ar: "الابنة",
        ex: "Meine Tochter spielt Klavier. <br><em>(My daughter plays piano.)</em>",
      },
      {
        de: "das Kind",
        pro_en: "das kint",
        pro_ar: "داس كينت",
        en: "Child",
        ar: "الطفل",
        ex: "Das Kind spielt im Garten. <br><em>(The child is playing in the garden.)</em>",
      },
      {
        de: "der Bruder",
        pro_en: "dair broo-der",
        pro_ar: "دير برودر",
        en: "Brother",
        ar: "الأخ",
        ex: "Mein Bruder ist älter als ich. <br><em>(My brother is older than me.)</em>",
      },
      {
        de: "die Schwester",
        pro_en: "dee shves-ter",
        pro_ar: "دي شفيستر",
        en: "Sister",
        ar: "الأخت",
        ex: "Meine Schwester studiert Medizin. <br><em>(My sister studies medicine.)</em>",
      },

      // --- FOOD & DRINKS ---
      {
        de: "das Essen",
        pro_en: "das es-sen",
        pro_ar: "داس إيسن",
        en: "Food",
        ar: "الطعام",
        ex: "Das Essen schmeckt gut. <br><em>(The food tastes good.)</em>",
      },
      {
        de: "das Wasser",
        pro_en: "das vas-ser",
        pro_ar: "داس فاسر",
        en: "Water",
        ar: "الماء",
        ex: "Ich trinke gern Wasser. <br><em>(I like drinking water.)</em>",
      },
      {
        de: "das Brot",
        pro_en: "das broht",
        pro_ar: "داس بروت",
        en: "Bread",
        ar: "الخبز",
        ex: "Das Brot ist frisch. <br><em>(The bread is fresh.)</em>",
      },
      {
        de: "der Kaffee",
        pro_en: "dair kaf-fay",
        pro_ar: "دير كافي",
        en: "Coffee",
        ar: "القهوة",
        ex: "Ich brauche Kaffee. <br><em>(I need coffee.)</em>",
      },
      {
        de: "die Milch",
        pro_en: "dee milsh",
        pro_ar: "دي ميلش",
        en: "Milk",
        ar: "الحليب",
        ex: "Trinkst du Milch? <br><em>(Do you drink milk?)</em>",
      },
      {
        de: "der Zucker",
        pro_en: "dair tsoo-ker",
        pro_ar: "دير تسوكر",
        en: "Sugar",
        ar: "السكر",
        ex: "Kaffee mit Zucker, bitte. <br><em>(Coffee with sugar, please.)</em>",
      },
      {
        de: "das Obst",
        pro_en: "das opst",
        pro_ar: "داس أوبست",
        en: "Fruit",
        ar: "الفاكهة",
        ex: "Obst ist gesund. <br><em>(Fruit is healthy.)</em>",
      },
      {
        de: "das Gemüse",
        pro_en: "das ge-mew-zuh",
        pro_ar: "داس جيموزة",
        en: "Vegetables",
        ar: "الخضروات",
        ex: "Wir essen viel Gemüse. <br><em>(We eat a lot of vegetables.)</em>",
      },

      // --- COMMON VERBS ---
      {
        de: "sein",
        pro_en: "zine",
        pro_ar: "زاين",
        en: "to be",
        ar: "يكون",
        ex: "Ich bin müde. <br><em>(I am tired.)</em>",
      },
      {
        de: "haben",
        pro_en: "hah-ben",
        pro_ar: "هابن",
        en: "to have",
        ar: "يملك / لديه",
        ex: "Ich habe eine Frage. <br><em>(I have a question.)</em>",
      },
      {
        de: "machen",
        pro_en: "makh-en",
        pro_ar: "ماخن",
        en: "to do / make",
        ar: "يفعل / يصنع",
        ex: "Was machst du? <br><em>(What are you doing?)</em>",
      },
      {
        de: "gehen",
        pro_en: "gay-en",
        pro_ar: "غيين",
        en: "to go / walk",
        ar: "يذهب",
        ex: "Ich gehe nach Hause. <br><em>(I am going home.)</em>",
      },
      {
        de: "kommen",
        pro_en: "kom-men",
        pro_ar: "كومن",
        en: "to come",
        ar: "يأتي",
        ex: "Woher kommen Sie? <br><em>(Where do you come from?)</em>",
      },
      {
        de: "wohnen",
        pro_en: "voh-nen",
        pro_ar: "فونن",
        en: "to live",
        ar: "يسكن",
        ex: "Ich wohne in Deutschland. <br><em>(I live in Germany.)</em>",
      },
      {
        de: "sprechen",
        pro_en: "shpre-khen",
        pro_ar: "شبريشن",
        en: "to speak",
        ar: "يتحدث",
        ex: "Sprichst du Deutsch? <br><em>(Do you speak German?)</em>",
      },
      {
        de: "lernen",
        pro_en: "lair-nen",
        pro_ar: "ليرنن",
        en: "to learn",
        ar: "يتعلم",
        ex: "Ich lerne Deutsch. <br><em>(I am learning German.)</em>",
      },
      {
        de: "schlafen",
        pro_en: "shlah-fen",
        pro_ar: "شلافن",
        en: "to sleep",
        ar: "ينام",
        ex: "Ich will schlafen. <br><em>(I want to sleep.)</em>",
      },
    ],
    exercises: [
      {
        q: "How do you say 'Thank you'?",
        options: ["Hallo", "Danke", "Bitte", "Nein"],
        correct: 1,
      },
      {
        q: "What does 'Wasser' mean?",
        options: ["Bread", "Wine", "Water", "Milk"],
        correct: 2,
      },
      {
        q: "Translate: 'Good night'",
        options: ["Guten Morgen", "Guten Tag", "Gute Nacht", "Hallo"],
        correct: 2,
      },
    ],
  },
  A2: {
    title: "Level A2: Elementary",
    desc: "Daily routine, shopping, work, travel, health, and simple past events.",
    words: [
      // --- DAILY ROUTINE ---
      {
        de: "der Alltag",
        pro_en: "dair al-tahg",
        pro_ar: "دير ألتاغ",
        en: "Daily routine",
        ar: "الحياة اليومية",
        ex: "Mein Alltag ist stressig. <br><em>(My daily life is stressful.)</em>",
      },
      {
        de: "aufstehen",
        pro_en: "owf-shtay-en",
        pro_ar: "أوف شتيين",
        en: "to get up",
        ar: "يستيقظ",
        ex: "Ich stehe um 7 Uhr auf. <br><em>(I get up at 7.)</em>",
      },
      {
        de: "duschen",
        pro_en: "doo-shen",
        pro_ar: "دوشن",
        en: "to shower",
        ar: "يستحم",
        ex: "Ich dusche morgens. <br><em>(I shower in the morning.)</em>",
      },
      {
        de: "frühstücken",
        pro_en: "frew-shtew-ken",
        pro_ar: "فروشتوكن",
        en: "to have breakfast",
        ar: "يتناول الإفطار",
        ex: "Wir frühstücken zusammen. <br><em>(We have breakfast together.)</em>",
      },
      {
        de: "putzen",
        pro_en: "poot-sen",
        pro_ar: "بوتسن",
        en: "to clean",
        ar: "ينظف",
        ex: "Ich putze meine Wohnung. <br><em>(I am cleaning my apartment.)</em>",
      },

      // --- HOUSE & LIVING ---
      {
        de: "die Wohnung",
        pro_en: "dee voh-noong",
        pro_ar: "دي فونونغ",
        en: "Apartment",
        ar: "الشقة",
        ex: "Die Wohnung ist groß. <br><em>(The apartment is big.)</em>",
      },
      {
        de: "der Schlüssel",
        pro_en: "dair shlew-sel",
        pro_ar: "دير شلوسل",
        en: "Key",
        ar: "المفتاح",
        ex: "Wo ist mein Schlüssel? <br><em>(Where is my key?)</em>",
      },
      {
        de: "das Zimmer",
        pro_en: "das tsim-mer",
        pro_ar: "داس تسيمر",
        en: "Room",
        ar: "الغرفة",
        ex: "Das Zimmer ist hell. <br><em>(The room is bright.)</em>",
      },
      {
        de: "die Küche",
        pro_en: "dee kew-she",
        pro_ar: "دي كوشة",
        en: "Kitchen",
        ar: "المطبخ",
        ex: "Die Küche ist neu. <br><em>(The kitchen is new.)</em>",
      },
      {
        de: "das Bad",
        pro_en: "das baht",
        pro_ar: "داس باد",
        en: "Bathroom",
        ar: "الحمام",
        ex: "Das Bad ist besetzt. <br><em>(The bathroom is occupied.)</em>",
      },

      // --- SHOPPING & CLOTHES ---
      {
        de: "einkaufen",
        pro_en: "ain-kow-fen",
        pro_ar: "أين كاوفن",
        en: "to shop",
        ar: "يتسوق",
        ex: "Ich gehe einkaufen. <br><em>(I am going shopping.)</em>",
      },
      {
        de: "der Supermarkt",
        pro_en: "dair zoo-per-markt",
        pro_ar: "دير سوبر ماركت",
        en: "Supermarket",
        ar: "السوبر ماركت",
        ex: "Der Supermarkt ist offen. <br><em>(The supermarket is open.)</em>",
      },
      {
        de: "die Kleidung",
        pro_en: "dee kly-doong",
        pro_ar: "دي كلايدونغ",
        en: "Clothing",
        ar: "الملابس",
        ex: "Ich brauche neue Kleidung. <br><em>(I need new clothes.)</em>",
      },
      {
        de: "die Hose",
        pro_en: "dee hoh-zuh",
        pro_ar: "دي هوزة",
        en: "Trousers / Pants",
        ar: "بنطلون",
        ex: "Die Hose passt mir nicht. <br><em>(The pants don't fit me.)</em>",
      },
      {
        de: "das T-Shirt",
        pro_en: "das tee-shirt",
        pro_ar: "داس تي شيرت",
        en: "T-Shirt",
        ar: "قميص",
        ex: "Das T-Shirt ist rot. <br><em>(The T-shirt is red.)</em>",
      },

      // --- HEALTH ---
      {
        de: "der Arzt",
        pro_en: "dair artst",
        pro_ar: "دير أرتست",
        en: "Doctor",
        ar: "الطبيب",
        ex: "Ich muss zum Arzt. <br><em>(I must go to the doctor.)</em>",
      },
      {
        de: "krank",
        pro_en: "krahnk",
        pro_ar: "كرانك",
        en: "Sick",
        ar: "مريض",
        ex: "Ich bin krank. <br><em>(I am sick.)</em>",
      },
      {
        de: "die Apotheke",
        pro_en: "dee a-po-tay-kuh",
        pro_ar: "دي أبوتيكة",
        en: "Pharmacy",
        ar: "الصيدلية",
        ex: "Die Apotheke ist dort. <br><em>(The pharmacy is over there.)</em>",
      },
      {
        de: "das Medikament",
        pro_en: "das me-di-ka-ment",
        pro_ar: "داس ميديكامنت",
        en: "Medicine",
        ar: "الدواء",
        ex: "Nimmst du Medikamente? <br><em>(Do you take medicine?)</em>",
      },
      {
        de: "die Schmerzen",
        pro_en: "dee shmer-tsen",
        pro_ar: "دي شمرتسن",
        en: "Pain",
        ar: "الألم",
        ex: "Ich habe Rückenschmerzen. <br><em>(I have back pain.)</em>",
      },

      // --- TRAVEL & LEISURE ---
      {
        de: "aufstehen",
        pro_en: "owf-shtay-en",
        pro_ar: "أوف شتيين",
        en: "to get up",
        ar: "يستيقظ / ينهض",
        ex: "Ich stehe jeden Tag um 7 Uhr auf. <br><em>(I get up every day at 7 AM.)</em>",
      },
      {
        de: "das Frühstück",
        pro_en: "das frew-shtewk",
        pro_ar: "داس فروشتوك",
        en: "Breakfast",
        ar: "الإفطار",
        ex: "Zum Frühstück esse ich Müsli. <br><em>(For breakfast, I eat muesli.)</em>",
      },
      {
        de: "die Wohnung",
        pro_en: "dee voh-noong",
        pro_ar: "دي فونونغ",
        en: "Apartment",
        ar: "الشقة",
        ex: "Unsere Wohnung hat drei Zimmer. <br><em>(Our apartment has three rooms.)</em>",
      },
      {
        de: "mieten",
        pro_en: "mee-ten",
        pro_ar: "ميتن",
        en: "to rent",
        ar: "يستأجر",
        ex: "Wir wollen ein Haus mieten. <br><em>(We want to rent a house.)</em>",
      },
      {
        de: "der Schlüssel",
        pro_en: "dair shlew-sel",
        pro_ar: "دير شلوسل",
        en: "Key",
        ar: "المفتاح",
        ex: "Ich habe meinen Schlüssel vergessen. <br><em>(I forgot my key.)</em>",
      },
      // --- WORK & SHOPPING ---
      {
        de: "der Beruf",
        pro_en: "dair be-roof",
        pro_ar: "دير بيروف",
        en: "Profession / Job",
        ar: "المهنة",
        ex: "Was ist dein Beruf von Beruf? <br><em>(What is your profession?)</em>",
      },
      {
        de: "arbeiten",
        pro_en: "ar-bai-ten",
        pro_ar: "أربايتن",
        en: "to work",
        ar: "يعمل",
        ex: "Sie arbeitet bei Siemens. <br><em>(She works at Siemens.)</em>",
      },
      {
        de: "einkaufen",
        pro_en: "ain-kow-fen",
        pro_ar: "أين كاوفن",
        en: "to shop",
        ar: "يتسوق",
        ex: "Am Samstag gehe ich einkaufen. <br><em>(On Saturday I go shopping.)</em>",
      },
      {
        de: "teuer",
        pro_en: "toy-er",
        pro_ar: "توير",
        en: "Expensive",
        ar: "غالي",
        ex: "Das Auto ist zu teuer. <br><em>(The car is too expensive.)</em>",
      },
      {
        de: "billig",
        pro_en: "bil-ish",
        pro_ar: "بيليش",
        en: "Cheap",
        ar: "رخيص",
        ex: "Die Bananen sind heute billig. <br><em>(The bananas are cheap today.)</em>",
      },
      {
        de: "bezahlen",
        pro_en: "be-tsah-len",
        pro_ar: "بيتسالن",
        en: "to pay",
        ar: "يدفع (المال)",
        ex: "Kann ich mit Karte bezahlen? <br><em>(Can I pay with card?)</em>",
      },
      // --- HEALTH & BODY ---
      {
        de: "der Arzt",
        pro_en: "dair artst",
        pro_ar: "دير أرتست",
        en: "Doctor (male)",
        ar: "الطبيب",
        ex: "Ich muss zum Arzt gehen. <br><em>(I have to go to the doctor.)</em>",
      },
      {
        de: "krank",
        pro_en: "krahnk",
        pro_ar: "كرانك",
        en: "Sick / Ill",
        ar: "مريض",
        ex: "Er ist krank und liegt im Bett. <br><em>(He is sick and lying in bed.)</em>",
      },
      {
        de: "die Kopfschmerzen",
        pro_en: "dee kopf-shmer-tsen",
        pro_ar: "دي كوبف شمرتسن",
        en: "Headache",
        ar: "صداع",
        ex: "Ich habe starke Kopfschmerzen. <br><em>(I have a strong headache.)</em>",
      },
      {
        de: "die Apotheke",
        pro_en: "dee a-po-tay-kuh",
        pro_ar: "دي أبوتيكة",
        en: "Pharmacy",
        ar: "الصيدلية",
        ex: "Wo ist die nächste Apotheke? <br><em>(Where is the nearest pharmacy?)</em>",
      },
      // --- TRAVEL & LEISURE ---
      {
        de: "der Urlaub",
        pro_en: "dair oor-lowb",
        pro_ar: "دير أورلاوب",
        en: "Vacation",
        ar: "الإجازة / العطلة",
        ex: "Wir fahren im Sommer in den Urlaub. <br><em>(We are going on vacation in summer.)</em>",
      },
      {
        de: "der Zug",
        pro_en: "dair tsoog",
        pro_ar: "دير تسوغ",
        en: "Train",
        ar: "القطار",
        ex: "Der Zug hat Verspätung. <br><em>(The train is delayed.)</em>",
      },
      {
        de: "das Flugzeug",
        pro_en: "das floog-tsoyg",
        pro_ar: "داس فلوغ تسويغ",
        en: "Airplane",
        ar: "الطائرة",
        ex: "Ich fliege nicht gern mit dem Flugzeug. <br><em>(I don't like flying by plane.)</em>",
      },
      {
        de: "besuchen",
        pro_en: "be-zoo-khen",
        pro_ar: "بيزوخن",
        en: "to visit",
        ar: "يزور",
        ex: "Wir besuchen unsere Großeltern. <br><em>(We are visiting our grandparents.)</em>",
      },
      {
        de: "interessant",
        pro_en: "in-te-re-sant",
        pro_ar: "إنتيريسانت",
        en: "Interesting",
        ar: "مثير للاهتمام",
        ex: "Das Buch ist sehr interessant. <br><em>(The book is very interesting.)</em>",
      },
      {
        de: "langweilig",
        pro_en: "lang-vai-lish",
        pro_ar: "لانغ فايليش",
        en: "Boring",
        ar: "ممل",
        ex: "Der Film war total langweilig. <br><em>(The movie was totally boring.)</em>",
      },
      {
        de: "vielleicht",
        pro_en: "fee-laisht",
        pro_ar: "فيلايشت",
        en: "Maybe",
        ar: "ربما",
        ex: "Vielleicht regnet es morgen. <br><em>(Maybe it will rain tomorrow.)</em>",
      },
    ],
    exercises: [
      {
        q: "What does 'einkaufen' mean?",
        options: ["To sleep", "To cook", "To shop", "To run"],
        correct: 2,
      },
      {
        q: "Choose the correct word for 'Key'",
        options: ["Der Koffer", "Der Schlüssel", "Der Stuhl", "Der Tisch"],
        correct: 1,
      },
    ],
  },
  B1: {
    title: "Level B1: Intermediate",
    desc: "Expressing opinions, making plans, reporting events, health, environment, and media.",
    words: [
      // --- OPINIONS & DISCUSSION ---
      {
        de: "die Meinung",
        pro_en: "dee my-noong",
        pro_ar: "دي ماينونغ",
        en: "Opinion",
        ar: "الرأي",
        ex: "Meiner Meinung nach... <br><em>(In my opinion...)</em>",
      },
      {
        de: "glauben",
        pro_en: "glow-ben",
        pro_ar: "غلاوبن",
        en: "to believe",
        ar: "يعتقد / يصدق",
        ex: "Ich glaube das nicht. <br><em>(I don't believe that.)</em>",
      },
      {
        de: "zustimmen",
        pro_en: "tsoo-shtim-men",
        pro_ar: "تسو شتيمن",
        en: "to agree",
        ar: "يوافق",
        ex: "Ich stimme dir zu. <br><em>(I agree with you.)</em>",
      },
      {
        de: "ablehnen",
        pro_en: "ab-lay-nen",
        pro_ar: "أب لينن",
        en: "to reject / decline",
        ar: "يرفض",
        ex: "Er hat das Angebot abgelehnt. <br><em>(He rejected the offer.)</em>",
      },
      {
        de: "überzeugen",
        pro_en: "ew-ber-tsoy-gen",
        pro_ar: "أوبر تسويغن",
        en: "to convince",
        ar: "يقنع",
        ex: "Du hast mich überzeugt. <br><em>(You convinced me.)</em>",
      },

      // --- WORK & CAREER ---
      {
        de: "die Erfahrung",
        pro_en: "dee er-fah-roong",
        pro_ar: "دي إيرفارونغ",
        en: "Experience",
        ar: "الخبرة",
        ex: "Viel Erfahrung haben. <br><em>(To have a lot of experience.)</em>",
      },
      {
        de: "der Lebenslauf",
        pro_en: "dair lay-bens-lowf",
        pro_ar: "دير ليبنس لاوف",
        en: "CV",
        ar: "السيرة الذاتية",
        ex: "Schicken Sie Ihren Lebenslauf. <br><em>(Send your CV.)</em>",
      },
      {
        de: "sich bewerben",
        pro_en: "zish be-ver-ben",
        pro_ar: "زيش بيفيربن",
        en: "to apply",
        ar: "يتقدم (لوظيفة)",
        ex: "Ich bewerbe mich um die Stelle. <br><em>(I am applying for the position.)</em>",
      },
      {
        de: "kündigen",
        pro_en: "kewn-di-gen",
        pro_ar: "كونديغن",
        en: "to resign / fire",
        ar: "يستقيل / يطرد",
        ex: "Er hat gestern gekündigt. <br><em>(He resigned yesterday.)</em>",
      },
      {
        de: "der Erfolg",
        pro_en: "dair er-folg",
        pro_ar: "دير إيرفولغ",
        en: "Success",
        ar: "النجاح",
        ex: "Viel Erfolg! <br><em>(Good luck / Much success!)</em>",
      },

      // --- ENVIRONMENT ---
      {
        de: "die Umwelt",
        pro_en: "dee oom-velt",
        pro_ar: "دي أوم فيلت",
        en: "Environment",
        ar: "البيئة",
        ex: "Die Umwelt schützen. <br><em>(Protect the environment.)</em>",
      },
      {
        de: "der Klimawandel",
        pro_en: "dair klee-ma-van-del",
        pro_ar: "دير كليما فاندل",
        en: "Climate change",
        ar: "التغير المناخي",
        ex: "Der Klimawandel ist real. <br><em>(Climate change is real.)</em>",
      },
      {
        de: "recyceln",
        pro_en: "re-sy-keln",
        pro_ar: "ريسايكلن",
        en: "to recycle",
        ar: "يعيد تدوير",
        ex: "Wir müssen mehr recyceln. <br><em>(We must recycle more.)</em>",
      },
      {
        de: "verschmutzen",
        pro_en: "fer-shmoot-sen",
        pro_ar: "فير شموتسن",
        en: "to pollute",
        ar: "يلوث",
        ex: "Autos verschmutzen die Luft. <br><em>(Cars pollute the air.)</em>",
      },

      // --- TECHNOLOGY ---
      {
        de: "das Gerät",
        pro_en: "das ge-rate",
        pro_ar: "داس جيريت",
        en: "Device",
        ar: "الجهاز",
        ex: "Welches Gerät benutzt du? <br><em>(Which device do you use?)</em>",
      },
      {
        de: "die Datei",
        pro_en: "dee da-tye",
        pro_ar: "دي داتاي",
        en: "File (digital)",
        ar: "الملف",
        ex: "Speichern Sie die Datei. <br><em>(Save the file.)</em>",
      },
      {
        de: "herunterladen",
        pro_en: "he-roon-ter-lah-den",
        pro_ar: "هيرونتر لادن",
        en: "to download",
        ar: "يحمل",
        ex: "Musik herunterladen. <br><em>(To download music.)</em>",
      },
      {
        de: "das Passwort",
        pro_en: "das pass-vort",
        pro_ar: "داس باسوورت",
        en: "Password",
        ar: "كلمة المرور",
        ex: "Passwort vergessen? <br><em>(Forgot password?)</em>",
      },
      // --- OPINIONS & COMMUNICATION ---
      {
        de: "die Meinung",
        pro_en: "dee my-noong",
        pro_ar: "دي ماينونغ",
        en: "Opinion",
        ar: "الرأي",
        ex: "Meiner Meinung nach ist das falsch. <br><em>(In my opinion, that is wrong.)</em>",
      },
      {
        de: "diskutieren",
        pro_en: "dis-koo-tee-ren",
        pro_ar: "ديسكوتيرن",
        en: "to discuss",
        ar: "يناقش",
        ex: "Wir müssen über dieses Problem diskutieren. <br><em>(We must discuss this problem.)</em>",
      },
      {
        de: "sich ärgern",
        pro_en: "zish air-gern",
        pro_ar: "زيش إيرغرن",
        en: "to get angry/annoyed",
        ar: "ينزعج / يغضب",
        ex: "Ich ärgere mich über den Lärm. <br><em>(I am annoyed by the noise.)</em>",
      },
      {
        de: "zustimmen",
        pro_en: "tsoo-shtim-men",
        pro_ar: "تسو شتيمن",
        en: "to agree",
        ar: "يوافق",
        ex: "Ich stimme dir vollkommen zu. <br><em>(I agree with you completely.)</em>",
      },
      // --- WORK & EDUCATION ---
      {
        de: "die Erfahrung",
        pro_en: "dee er-fah-roong",
        pro_ar: "دي إيرفارونغ",
        en: "Experience",
        ar: "الخبرة",
        ex: "Haben Sie Erfahrung in diesem Bereich? <br><em>(Do you have experience in this field?)</em>",
      },
      {
        de: "sich bewerben",
        pro_en: "zish be-ver-ben",
        pro_ar: "زيش بيفيربن",
        en: "to apply (job)",
        ar: "يتقدم لوظيفة",
        ex: "Ich habe mich bei BMW beworben. <br><em>(I applied at BMW.)</em>",
      },
      {
        de: "der Lebenslauf",
        pro_en: "dair lay-bens-lowf",
        pro_ar: "دير ليبنس لاوف",
        en: "CV / Resume",
        ar: "السيرة الذاتية",
        ex: "Bitte senden Sie uns Ihren Lebenslauf. <br><em>(Please send us your CV.)</em>",
      },
      {
        de: "die Ausbildung",
        pro_en: "dee ows-bil-doong",
        pro_ar: "دي أوس بيلدونغ",
        en: "Apprenticeship / Education",
        ar: "التدريب المهني / التعليم",
        ex: "Er macht eine Ausbildung als Mechaniker. <br><em>(He is doing an apprenticeship as a mechanic.)</em>",
      },
      // --- ENVIRONMENT & SOCIETY ---
      {
        de: "die Umwelt",
        pro_en: "dee oom-velt",
        pro_ar: "دي أوم فيلت",
        en: "Environment",
        ar: "البيئة",
        ex: "Wir müssen die Umwelt schützen. <br><em>(We must protect the environment.)</em>",
      },
      {
        de: "der Müll",
        pro_en: "dair mewl",
        pro_ar: "دير مول",
        en: "Garbage / Trash",
        ar: "القمامة",
        ex: "Wir trennen den Müll. <br><em>(We separate the trash.)</em>",
      },
      {
        de: "die Zukunft",
        pro_en: "dee tsoo-koonft",
        pro_ar: "دي تسوكونفت",
        en: "Future",
        ar: "المستقبل",
        ex: "In der Zukunft möchte ich reisen. <br><em>(In the future, I want to travel.)</em>",
      },
      {
        de: "die Gesellschaft",
        pro_en: "dee ge-zel-shaft",
        pro_ar: "دي جيزيل شافت",
        en: "Society",
        ar: "المجتمع",
        ex: "Die Gesellschaft ändert sich schnell. <br><em>(Society is changing fast.)</em>",
      },
      // --- HEALTH & FEELINGS ---
      {
        de: "sich fühlen",
        pro_en: "zish few-len",
        pro_ar: "زيش فولن",
        en: "to feel",
        ar: "يشعر",
        ex: "Heute fühle ich mich nicht gut. <br><em>(I don't feel good today.)</em>",
      },
      {
        de: "die Verletzung",
        pro_en: "dee fer-let-soong",
        pro_ar: "دي فيرليتس ونغ",
        en: "Injury",
        ar: "الإصابة",
        ex: "Die Verletzung ist nicht schlimm. <br><em>(The injury is not bad.)</em>",
      },
      {
        de: "der Unfall",
        pro_en: "dair oon-fall",
        pro_ar: "دير أونفال",
        en: "Accident",
        ar: "الحادث",
        ex: "Ich hatte einen kleinen Unfall mit dem Fahrrad. <br><em>(I had a small accident with the bike.)</em>",
      },
      // --- MEDIA & TECH ---
      {
        de: "die Nachricht",
        pro_en: "dee nakh-risht",
        pro_ar: "دي ناخريشت",
        en: "Message / News",
        ar: "رسالة / خبر",
        ex: "Ich habe deine Nachricht bekommen. <br><em>(I got your message.)</em>",
      },
      {
        de: "das Gerät",
        pro_en: "das ge-rate",
        pro_ar: "داس جيريت",
        en: "Device / Appliance",
        ar: "الجهاز",
        ex: "Schalten Sie das Gerät bitte aus. <br><em>(Please switch off the device.)</em>",
      },
      {
        de: "herunterladen",
        pro_en: "he-roon-ter-lah-den",
        pro_ar: "هيرونتر لادن",
        en: "to download",
        ar: "يحمل (من الإنترنت)",
        ex: "Du kannst die Datei hier herunterladen. <br><em>(You can download the file here.)</em>",
      },
    ],
    exercises: [
      {
        q: "Translate: 'In my opinion'",
        options: ["Meiner Meinung nach", "Ich denke nicht", "Das ist meine Idee", "Ich weiß es"],
        correct: 0,
      },
      {
        q: "What implies 'to apply for a job'?",
        options: ["Sich ausruhen", "Sich bewerben", "Sich freuen", "Sich ärgern"],
        correct: 1,
      },
    ],
  },
  B2: {
    title: "Level B2: Upper Intermediate",
    desc: "Advanced topics, abstract concepts, professional language, politics, and culture.",
    words: [
      // --- ABSTRACT CONCEPTS ---
      {
        de: "die Herausforderung",
        pro_en: "dee he-rows-for-de-rung",
        pro_ar: "دي هيراوس فورديرونغ",
        en: "Challenge",
        ar: "التحدي",
        ex: "Eine neue Herausforderung. <br><em>(A new challenge.)</em>",
      },
      {
        de: "die Gelegenheit",
        pro_en: "dee ge-lay-gen-hait",
        pro_ar: "دي جيليغين هايت",
        en: "Opportunity",
        ar: "الفرصة",
        ex: "Nutze die Gelegenheit! <br><em>(Seize the opportunity!)</em>",
      },
      {
        de: "die Verantwortung",
        pro_en: "dee fer-ant-vor-tung",
        pro_ar: "دي فير أنت فورتونغ",
        en: "Responsibility",
        ar: "المسؤولية",
        ex: "Verantwortung übernehmen. <br><em>(To take responsibility.)</em>",
      },
      {
        de: "die Ursache",
        pro_en: "dee oor-zah-khe",
        pro_ar: "دي أورزاخة",
        en: "Cause",
        ar: "السبب",
        ex: "Die Ursache ist unklar. <br><em>(The cause is unclear.)</em>",
      },
      {
        de: "die Wirkung",
        pro_en: "dee veer-koong",
        pro_ar: "دي فيركونغ",
        en: "Effect / Impact",
        ar: "التأثير",
        ex: "Das hat eine positive Wirkung. <br><em>(That has a positive effect.)</em>",
      },

      // --- POLITICS & SOCIETY ---
      {
        de: "die Gesellschaft",
        pro_en: "dee ge-zel-shaft",
        pro_ar: "دي جيزيل شافت",
        en: "Society",
        ar: "المجتمع",
        ex: "Unsere Gesellschaft. <br><em>(Our society.)</em>",
      },
      {
        de: "die Regierung",
        pro_en: "dee re-gee-roong",
        pro_ar: "دي ريغيرونغ",
        en: "Government",
        ar: "الحكومة",
        ex: "Die Regierung plant neue Gesetze. <br><em>(The government plans new laws.)</em>",
      },
      {
        de: "die Wirtschaft",
        pro_en: "dee virt-shaft",
        pro_ar: "دي فيرت شافت",
        en: "Economy",
        ar: "الاقتصاد",
        ex: "Die Wirtschaft wächst. <br><em>(The economy is growing.)</em>",
      },
      {
        de: "die Wahl",
        pro_en: "dee vahl",
        pro_ar: "دي فال",
        en: "Election / Choice",
        ar: "الانتخاب / الاختيار",
        ex: "Die nächste Wahl. <br><em>(The next election.)</em>",
      },
      {
        de: "das Gesetz",
        pro_en: "das ge-zets",
        pro_ar: "داس جيزيتس",
        en: "Law",
        ar: "القانون",
        ex: "Gegen das Gesetz. <br><em>(Against the law.)</em>",
      },

      // --- ACADEMIC & WORK ---
      {
        de: "analysieren",
        pro_en: "a-na-lew-zee-ren",
        pro_ar: "أناليزيرن",
        en: "to analyze",
        ar: "يحلل",
        ex: "Wir müssen die Daten analysieren. <br><em>(We must analyze the data.)</em>",
      },
      {
        de: "entwickeln",
        pro_en: "ent-vi-keln",
        pro_ar: "إنت فيكلن",
        en: "to develop",
        ar: "يطوّر",
        ex: "Eine Strategie entwickeln. <br><em>(To develop a strategy.)</em>",
      },
      {
        de: "behaupten",
        pro_en: "be-howp-ten",
        pro_ar: "بيهاوبتن",
        en: "to claim / assert",
        ar: "يدعي / يزعم",
        ex: "Er behauptet, es zu wissen. <br><em>(He claims to know it.)</em>",
      },
      {
        de: "verursachen",
        pro_en: "fer-oor-zah-khen",
        pro_ar: "فير أورزاخن",
        en: "to cause",
        ar: "يسبب",
        ex: "Stress verursacht Krankheiten. <br><em>(Stress causes illnesses.)</em>",
      },
      // --- ABSTRACT CONCEPTS ---
      {
        de: "die Herausforderung",
        pro_en: "dee he-rows-for-de-rung",
        pro_ar: "دي هيراوس فورديرونغ",
        en: "Challenge",
        ar: "التحدي",
        ex: "Dieser Job ist eine große Herausforderung für mich. <br><em>(This job is a big challenge for me.)</em>",
      },
      {
        de: "die Verantwortung",
        pro_en: "dee fer-ant-vor-tung",
        pro_ar: "دي فير أنت فورتونغ",
        en: "Responsibility",
        ar: "المسؤولية",
        ex: "Eltern tragen die Verantwortung für ihre Kinder. <br><em>(Parents bear responsibility for their children.)</em>",
      },
      {
        de: "die Gelegenheit",
        pro_en: "dee ge-lay-gen-hait",
        pro_ar: "دي جيليغين هايت",
        en: "Opportunity",
        ar: "الفرصة",
        ex: "Das ist eine einmalige Gelegenheit. <br><em>(That is a unique opportunity.)</em>",
      },
      {
        de: "die Eigenschaft",
        pro_en: "dee eye-gen-shaft",
        pro_ar: "دي أيغن شافت",
        en: "Characteristic / Trait",
        ar: "السمة / الصفة",
        ex: "Geduld ist eine gute Eigenschaft. <br><em>(Patience is a good trait.)</em>",
      },
      // --- POLITICS & SOCIETY ---
      {
        de: "die Bevölkerung",
        pro_en: "dee be-föl-ke-rung",
        pro_ar: "دي بيفولكيرونغ",
        en: "Population",
        ar: "السكان",
        ex: "Die Bevölkerung der Stadt wächst schnell. <br><em>(The city's population is growing fast.)</em>",
      },
      {
        de: "die Wirtschaft",
        pro_en: "dee virt-shaft",
        pro_ar: "دي فيرت شافت",
        en: "Economy",
        ar: "الاقتصاد",
        ex: "Die Wirtschaft erholt sich langsam. <br><em>(The economy is recovering slowly.)</em>",
      },
      {
        de: "die Regierung",
        pro_en: "dee re-gee-roong",
        pro_ar: "دي ريغيرونغ",
        en: "Government",
        ar: "الحكومة",
        ex: "Die Regierung plant neue Gesetze. <br><em>(The government plans new laws.)</em>",
      },
      {
        de: "die Entwicklung",
        pro_en: "dee ent-vick-lung",
        pro_ar: "دي إنتفيكلونغ",
        en: "Development",
        ar: "التطور / التنمية",
        ex: "Die technische Entwicklung geht immer weiter. <br><em>(Technical development keeps going on.)</em>",
      },
      // --- WORK & BUSINESS ---
      {
        de: "verhandeln",
        pro_en: "fer-han-deln",
        pro_ar: "فيرهاندلن",
        en: "to negotiate",
        ar: "يفاوض",
        ex: "Wir müssen über den Preis verhandeln. <br><em>(We must negotiate the price.)</em>",
      },
      {
        de: "überzeugen",
        pro_en: "uber-tsoy-gen",
        pro_ar: "أوبر تسويغن",
        en: "to convince",
        ar: "يقنع",
        ex: "Er konnte den Chef von seiner Idee überzeugen. <br><em>(He could convince the boss of his idea.)</em>",
      },
      {
        de: "die Konkurrenz",
        pro_en: "dee kon-koo-rents",
        pro_ar: "دي كونكورينتس",
        en: "Competition (business)",
        ar: "المنافسة",
        ex: "Die Konkurrenz auf dem Markt ist groß. <br><em>(Competition in the market is high.)</em>",
      },
      {
        de: "effizient",
        pro_en: "e-fi-tsient",
        pro_ar: "إيفيتسينت",
        en: "Efficient",
        ar: "فعال / كفء",
        ex: "Wir müssen effizienter arbeiten. <br><em>(We must work more efficiently.)</em>",
      },
      // --- ACADEMIC & LANGUAGE ---
      {
        de: "die Wissenschaft",
        pro_en: "dee vis-sen-shaft",
        pro_ar: "دي فيسن شافت",
        en: "Science",
        ar: "العلوم",
        ex: "Die Wissenschaft sucht nach Antworten. <br><em>(Science looks for answers.)</em>",
      },
      {
        de: "die Untersuchung",
        pro_en: "dee oon-ter-zoo-khung",
        pro_ar: "دي أونترزوخونغ",
        en: "Investigation / Examination",
        ar: "التحقيق / الفحص",
        ex: "Die Untersuchung dauerte zwei Stunden. <br><em>(The examination lasted two hours.)</em>",
      },
      {
        de: "verursachen",
        pro_en: "fer-oor-za-khen",
        pro_ar: "فير أورزاخن",
        en: "to cause",
        ar: "يسبب",
        ex: "Der Sturm verursachte große Schäden. <br><em>(The storm caused great damage.)</em>",
      },
      {
        de: "der Zusammenhang",
        pro_en: "dair tsu-zam-men-hang",
        pro_ar: "دير تسوزامن هانغ",
        en: "Context / Connection",
        ar: "السياق / العلاقة",
        ex: "In diesem Zusammenhang ist das wichtig. <br><em>(In this context, that is important.)</em>",
      },
      {
        de: "teilweise",
        pro_en: "tile-vy-ze",
        pro_ar: "تايل فايزه",
        en: "Partially",
        ar: "جزئياً",
        ex: "Ich stimme dir nur teilweise zu. <br><em>(I only partially agree with you.)</em>",
      },
      {
        de: "hauptsächlich",
        pro_en: "howpt-sech-lish",
        pro_ar: "هاوبت زيشليش",
        en: "Mainly / Primarily",
        ar: "بشكل رئيسي",
        ex: "Das Problem liegt hauptsächlich in der Kommunikation. <br><em>(The problem lies mainly in communication.)</em>",
      },
    ],
    exercises: [
      {
        q: "Which word means 'Challenge'?",
        options: ["Die Chance", "Die Herausforderung", "Die Hoffnung", "Die Heimat"],
        correct: 1,
      },
      {
        q: "What does 'verhandeln' mean?",
        options: ["To handle", "To negotiate", "To sell", "To buy"],
        correct: 1,
      },
    ],
  },
}

// --- State Management ---
let currentLevel = "A1"

// --- DOM Elements ---
const tableBody = document.getElementById("dictionary-body")
const levelTitle = document.getElementById("current-level-title")
const levelDesc = document.getElementById("current-level-desc")
const levelBtns = document.querySelectorAll(".level-btn")
const viewBtns = document.querySelectorAll(".toggle-btn")
const dictView = document.getElementById("dictionary-view")
const exView = document.getElementById("exercises-view")
const exContainer = document.getElementById("exercises-container")

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  loadLevel("A1")
  initSearch()
  initScene() // Start 3D Background
  animate()
})

// --- Event Listeners ---
levelBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    levelBtns.forEach((b) => b.classList.remove("active"))
    // Add to clicked
    btn.classList.add("active")
    // Update level
    currentLevel = btn.getAttribute("data-level")
    loadLevel(currentLevel)
  })
})

viewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    const view = btn.getAttribute("data-view")
    if (view === "dictionary") {
      dictView.classList.add("active")
      exView.classList.remove("active")
    } else {
      dictView.classList.remove("active")
      exView.classList.add("active")
    }
  })
})

// --- Functions ---

function loadLevel(level) {
  if (!dictionaryData[level]) return
  currentLevel = level

  // Update UI Info
  document.getElementById("current-level-title").textContent = dictionaryData[level].title
  document.getElementById("current-level-desc").textContent = dictionaryData[level].desc

  // Update Nav Buttons
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.level === level) btn.classList.add("active")
  })

  // Reset Search
  const searchInput = document.getElementById("dict-search")
  if (searchInput) searchInput.value = ""

  // Render Content
  renderDictionary(dictionaryData[level].words)
  renderExercises(dictionaryData[level].exercises)
}

// Render dictionary words for a specific level
function renderDictionary(words) {
  tableBody.innerHTML = "" // Clear previous content
  if (!words || words.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='6'>No words found for this level.</td></tr>"
    return
  }
  words.forEach((word) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td class="col-de">${word.de}</td>
            <td class="col-pron-en">${word.pro_en}</td>
            <td class="col-pron-ar">${word.pro_ar}</td>
            <td class="col-en">${word.en}</td>
            <td class="col-ar">${word.ar}</td>
            <td class="col-ex">${word.ex}</td>
        `
    tableBody.appendChild(row)
  })
}

function renderExercises(exercises) {
  exContainer.innerHTML = ""
  if (!exercises || exercises.length === 0) {
    exContainer.innerHTML = "<p>No exercises available for this level yet.</p>"
    return
  }

  exercises.forEach((ex, index) => {
    const card = document.createElement("div")
    card.className = "exercise-card"

    let optionsHtml = '<div class="options-grid">'
    ex.options.forEach((opt, optIndex) => {
      optionsHtml += `<button class="option-btn" onclick="checkAnswer(this, ${optIndex === ex.correct})">${opt}</button>`
    })
    optionsHtml += "</div>"

    card.innerHTML = `
            <h3>Exercise ${index + 1}</h3>
            <p class="exercise-question">${ex.q}</p>
            ${optionsHtml}
        `
    exContainer.appendChild(card)
  })
}

// Global function for inline onclick
window.checkAnswer = (btn, isCorrect) => {
  // Disable siblings
  const parent = btn.parentElement
  const buttons = parent.querySelectorAll(".option-btn")
  buttons.forEach((b) => (b.style.pointerEvents = "none"))

  if (isCorrect) {
    btn.classList.add("correct")
    btn.innerHTML += ' <i class="fas fa-check"></i>'
  } else {
    btn.classList.add("wrong")
    btn.innerHTML += ' <i class="fas fa-times"></i>'
  }
}

// --- 3D Background Animation (Vanilla JS + Canvas) ---
// Renamed init3DBackground to initScene for consistency
function initScene() {
  const canvas = document.getElementById("scene")
  // Ensure context is obtained only once
  if (!canvas) return // Exit if canvas element is not found
  ctx = canvas.getContext("2d") // Assign to a globally accessible variable if needed elsewhere, or keep local

  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight

  // Create Particles - moved inside initScene to ensure particles are recreated on resize if needed
  const particleCount = 150
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
}

// Global variables for canvas, context, width, height, and particles array
let canvas, ctx, width, height
const particles = []

// Resize
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
})

// Particle Class
class Particle {
  constructor() {
    this.reset()
  }

  reset() {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.z = Math.random() * 2 + 0.5 // Depth
    this.size = Math.random() * 2
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.color = Math.random() > 0.8 ? "rgba(6, 182, 212," : "rgba(255, 255, 255," // Cyan or White
    this.opacity = Math.random() * 0.5
  }

  update() {
    this.x += this.speedX * this.z
    this.y += this.speedY * this.z

    // Wrap around
    if (this.x > width) this.x = 0
    if (this.x < 0) this.x = width
    if (this.y > height) this.y = 0
    if (this.y < 0) this.y = height
  }

  draw() {
    if (!ctx) return // Ensure context is available
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * this.z, 0, Math.PI * 2)
    ctx.fillStyle = this.color + this.opacity + ")"
    ctx.fill()
  }
}

// Animation Loop
function animate() {
  if (!ctx) return // Ensure context is available
  ctx.clearRect(0, 0, width, height)

  // Draw connections (constellations)
  ctx.lineWidth = 0.5
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    p.update()
    p.draw()

    // Connect nearby particles
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j]
      const dx = p.x - p2.x
      const dy = p.y - p2.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 100) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist / 1000})`
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }
    }
  }

  requestAnimationFrame(animate)
}

function initSearch() {
  const searchInput = document.getElementById("dict-search")
  if (!searchInput) return

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase()
    const currentData = dictionaryData[currentLevel].words

    // Filter logic
    const filtered = currentData.filter(
      (word) => word.de.toLowerCase().includes(term) || word.en.toLowerCase().includes(term) || word.ar.includes(term),
    )

    renderDictionary(filtered)
  })
}
