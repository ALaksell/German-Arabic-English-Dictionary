/**
 * German Learning Dictionary
 * Created by: aksell
 */

// --- Dictionary Data (Comprehensive Structure) ---
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
        ar: "يوم سعيد",
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
        ar: "وداعاً",
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
      {
        de: "Wie geht es Ihnen?",
        pro_en: "vee gayt es ee-nen",
        pro_ar: "في غيت إس إينن",
        en: "How are you? (formal)",
        ar: "كيف حالك؟ (رسمي)",
        ex: "Wie geht es Ihnen heute? <br><em>(How are you today?)</em>",
      },
      {
        de: "Wie geht's?",
        pro_en: "vee gayts",
        pro_ar: "في غيتس",
        en: "How's it going?",
        ar: "كيف الحال؟",
        ex: "Hey, wie geht's? <br><em>(Hey, how's it going?)</em>",
      },
      {
        de: "Mir geht es gut",
        pro_en: "meer gayt es goot",
        pro_ar: "مير غيت إس غوت",
        en: "I'm fine",
        ar: "أنا بخير",
        ex: "Mir geht es gut, danke! <br><em>(I'm fine, thanks!)</em>",
      },
      {
        de: "Freut mich",
        pro_en: "froyt mikh",
        pro_ar: "فرويت ميش",
        en: "Nice to meet you",
        ar: "تشرفت بمعرفتك",
        ex: "Freut mich, Sie kennenzulernen. <br><em>(Nice to meet you.)</em>",
      },

      // --- NUMBERS (0-100) ---
      {
        de: "null",
        pro_en: "nool",
        pro_ar: "نول",
        en: "zero",
        ar: "صفر",
        ex: "Die Temperatur ist null Grad. <br><em>(The temperature is zero degrees.)</em>",
      },
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
        de: "vier",
        pro_en: "feer",
        pro_ar: "فير",
        en: "four",
        ar: "أربعة",
        ex: "Wir sind vier Personen. <br><em>(We are four people.)</em>",
      },
      {
        de: "fünf",
        pro_en: "fewnf",
        pro_ar: "فونف",
        en: "five",
        ar: "خمسة",
        ex: "Ich habe fünf Finger. <br><em>(I have five fingers.)</em>",
      },
      {
        de: "sechs",
        pro_en: "zeks",
        pro_ar: "زكس",
        en: "six",
        ar: "ستة",
        ex: "Es ist sechs Uhr. <br><em>(It is six o'clock.)</em>",
      },
      {
        de: "sieben",
        pro_en: "zee-ben",
        pro_ar: "زيبن",
        en: "seven",
        ar: "سبعة",
        ex: "Sieben Tage hat eine Woche. <br><em>(A week has seven days.)</em>",
      },
      {
        de: "acht",
        pro_en: "akht",
        pro_ar: "آخت",
        en: "eight",
        ar: "ثمانية",
        ex: "Ich arbeite acht Stunden. <br><em>(I work eight hours.)</em>",
      },
      {
        de: "neun",
        pro_en: "noyn",
        pro_ar: "نوين",
        en: "nine",
        ar: "تسعة",
        ex: "Neun ist meine Lieblingszahl. <br><em>(Nine is my favorite number.)</em>",
      },
      {
        de: "zehn",
        pro_en: "tsayn",
        pro_ar: "تسين",
        en: "ten",
        ar: "عشرة",
        ex: "Es ist zehn Uhr. <br><em>(It is ten o'clock.)</em>",
      },
      {
        de: "elf",
        pro_en: "elf",
        pro_ar: "إلف",
        en: "eleven",
        ar: "أحد عشر",
        ex: "Elf Spieler sind in einer Mannschaft. <br><em>(Eleven players are in a team.)</em>",
      },
      {
        de: "zwölf",
        pro_en: "tsvulf",
        pro_ar: "تسفولف",
        en: "twelve",
        ar: "اثنا عشر",
        ex: "Ein Jahr hat zwölf Monate. <br><em>(A year has twelve months.)</em>",
      },
      {
        de: "zwanzig",
        pro_en: "tsvan-tsikh",
        pro_ar: "تسفانتسيش",
        en: "twenty",
        ar: "عشرون",
        ex: "Ich bin zwanzig Jahre alt. <br><em>(I am twenty years old.)</em>",
      },
      {
        de: "dreißig",
        pro_en: "dry-sikh",
        pro_ar: "درايسيش",
        en: "thirty",
        ar: "ثلاثون",
        ex: "Der Film dauert dreißig Minuten. <br><em>(The film lasts thirty minutes.)</em>",
      },
      {
        de: "vierzig",
        pro_en: "feer-tsikh",
        pro_ar: "فيرتسيش",
        en: "forty",
        ar: "أربعون",
        ex: "Mein Vater ist vierzig. <br><em>(My father is forty.)</em>",
      },
      {
        de: "fünfzig",
        pro_en: "fewnf-tsikh",
        pro_ar: "فونفتسيش",
        en: "fifty",
        ar: "خمسون",
        ex: "Es kostet fünfzig Euro. <br><em>(It costs fifty euros.)</em>",
      },
      {
        de: "hundert",
        pro_en: "hoon-dert",
        pro_ar: "هوندرت",
        en: "hundred",
        ar: "مئة",
        ex: "Hundert Prozent richtig! <br><em>(One hundred percent correct!)</em>",
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
      {
        de: "der Großvater",
        pro_en: "dair grohs-fah-ter",
        pro_ar: "دير غروسفاتر",
        en: "Grandfather",
        ar: "الجد",
        ex: "Mein Großvater ist 80 Jahre alt. <br><em>(My grandfather is 80 years old.)</em>",
      },
      {
        de: "die Großmutter",
        pro_en: "dee grohs-moo-ter",
        pro_ar: "دي غروسموتر",
        en: "Grandmother",
        ar: "الجدة",
        ex: "Meine Großmutter backt Kuchen. <br><em>(My grandmother bakes cakes.)</em>",
      },
      {
        de: "der Onkel",
        pro_en: "dair ong-kel",
        pro_ar: "دير أونكل",
        en: "Uncle",
        ar: "العم / الخال",
        ex: "Mein Onkel wohnt in München. <br><em>(My uncle lives in Munich.)</em>",
      },
      {
        de: "die Tante",
        pro_en: "dee tan-tuh",
        pro_ar: "دي تانته",
        en: "Aunt",
        ar: "العمة / الخالة",
        ex: "Meine Tante ist Ärztin. <br><em>(My aunt is a doctor.)</em>",
      },
      {
        de: "der Mann",
        pro_en: "dair man",
        pro_ar: "دير مان",
        en: "Man / Husband",
        ar: "الرجل / الزوج",
        ex: "Der Mann liest die Zeitung. <br><em>(The man is reading the newspaper.)</em>",
      },
      {
        de: "die Frau",
        pro_en: "dee frow",
        pro_ar: "دي فراو",
        en: "Woman / Wife",
        ar: "المرأة / الزوجة",
        ex: "Die Frau arbeitet im Büro. <br><em>(The woman works in the office.)</em>",
      },
      {
        de: "der Freund",
        pro_en: "dair froynt",
        pro_ar: "دير فرويند",
        en: "Friend (m) / Boyfriend",
        ar: "الصديق",
        ex: "Mein Freund kommt aus Spanien. <br><em>(My friend comes from Spain.)</em>",
      },
      {
        de: "die Freundin",
        pro_en: "dee froyn-din",
        pro_ar: "دي فرويندين",
        en: "Friend (f) / Girlfriend",
        ar: "الصديقة",
        ex: "Meine Freundin spielt Tennis. <br><em>(My girlfriend plays tennis.)</em>",
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
        de: "der Tee",
        pro_en: "dair tay",
        pro_ar: "دير تي",
        en: "Tea",
        ar: "الشاي",
        ex: "Möchtest du Tee? <br><em>(Would you like tea?)</em>",
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
      {
        de: "der Apfel",
        pro_en: "dair ap-fel",
        pro_ar: "دير آبفل",
        en: "Apple",
        ar: "التفاحة",
        ex: "Der Apfel ist rot. <br><em>(The apple is red.)</em>",
      },
      {
        de: "die Banane",
        pro_en: "dee ba-nah-nuh",
        pro_ar: "دي بانانه",
        en: "Banana",
        ar: "الموزة",
        ex: "Ich esse eine Banane. <br><em>(I'm eating a banana.)</em>",
      },
      {
        de: "das Fleisch",
        pro_en: "das flysh",
        pro_ar: "داس فلايش",
        en: "Meat",
        ar: "اللحم",
        ex: "Das Fleisch ist teuer. <br><em>(The meat is expensive.)</em>",
      },
      {
        de: "der Fisch",
        pro_en: "dair fish",
        pro_ar: "دير فيش",
        en: "Fish",
        ar: "السمك",
        ex: "Ich esse gern Fisch. <br><em>(I like eating fish.)</em>",
      },
      {
        de: "der Käse",
        pro_en: "dair kay-zuh",
        pro_ar: "دير كيزه",
        en: "Cheese",
        ar: "الجبن",
        ex: "Brot mit Käse, bitte. <br><em>(Bread with cheese, please.)</em>",
      },
      {
        de: "das Ei",
        pro_en: "das eye",
        pro_ar: "داس آي",
        en: "Egg",
        ar: "البيضة",
        ex: "Ich möchte ein Ei zum Frühstück. <br><em>(I'd like an egg for breakfast.)</em>",
      },
      {
        de: "der Reis",
        pro_en: "dair rice",
        pro_ar: "دير رايس",
        en: "Rice",
        ar: "الأرز",
        ex: "Reis mit Gemüse ist lecker. <br><em>(Rice with vegetables is delicious.)</em>",
      },
      {
        de: "die Suppe",
        pro_en: "dee zoo-puh",
        pro_ar: "دي زوبه",
        en: "Soup",
        ar: "الحساء",
        ex: "Die Suppe ist heiß. <br><em>(The soup is hot.)</em>",
      },
      {
        de: "der Salat",
        pro_en: "dair za-laht",
        pro_ar: "دير زلات",
        en: "Salad",
        ar: "السلطة",
        ex: "Ich nehme einen Salat. <br><em>(I'll have a salad.)</em>",
      },
      {
        de: "das Frühstück",
        pro_en: "das frew-shtewk",
        pro_ar: "داس فروشتوك",
        en: "Breakfast",
        ar: "الفطور",
        ex: "Was isst du zum Frühstück? <br><em>(What do you eat for breakfast?)</em>",
      },
      {
        de: "das Mittagessen",
        pro_en: "das mi-tahg-es-sen",
        pro_ar: "داس ميتاغ إسن",
        en: "Lunch",
        ar: "الغداء",
        ex: "Das Mittagessen ist fertig. <br><em>(Lunch is ready.)</em>",
      },
      {
        de: "das Abendessen",
        pro_en: "das ah-bent-es-sen",
        pro_ar: "داس آبند إسن",
        en: "Dinner",
        ar: "العشاء",
        ex: "Was gibt es zum Abendessen? <br><em>(What's for dinner?)</em>",
      },

      // --- COLORS ---
      {
        de: "rot",
        pro_en: "roht",
        pro_ar: "روت",
        en: "red",
        ar: "أحمر",
        ex: "Das Auto ist rot. <br><em>(The car is red.)</em>",
      },
      {
        de: "blau",
        pro_en: "blow",
        pro_ar: "بلاو",
        en: "blue",
        ar: "أزرق",
        ex: "Der Himmel ist blau. <br><em>(The sky is blue.)</em>",
      },
      {
        de: "grün",
        pro_en: "grewn",
        pro_ar: "غرون",
        en: "green",
        ar: "أخضر",
        ex: "Das Gras ist grün. <br><em>(The grass is green.)</em>",
      },
      {
        de: "gelb",
        pro_en: "gelp",
        pro_ar: "غيلب",
        en: "yellow",
        ar: "أصفر",
        ex: "Die Sonne ist gelb. <br><em>(The sun is yellow.)</em>",
      },
      {
        de: "schwarz",
        pro_en: "shvarts",
        pro_ar: "شفارتس",
        en: "black",
        ar: "أسود",
        ex: "Meine Katze ist schwarz. <br><em>(My cat is black.)</em>",
      },
      {
        de: "weiß",
        pro_en: "vice",
        pro_ar: "فايس",
        en: "white",
        ar: "أبيض",
        ex: "Der Schnee ist weiß. <br><em>(The snow is white.)</em>",
      },
      {
        de: "orange",
        pro_en: "oh-rahn-juh",
        pro_ar: "أورانج",
        en: "orange",
        ar: "برتقالي",
        ex: "Die Orange ist orange. <br><em>(The orange is orange.)</em>",
      },
      {
        de: "rosa",
        pro_en: "roh-za",
        pro_ar: "روزا",
        en: "pink",
        ar: "وردي",
        ex: "Die Blume ist rosa. <br><em>(The flower is pink.)</em>",
      },
      {
        de: "grau",
        pro_en: "grow",
        pro_ar: "غراو",
        en: "gray",
        ar: "رمادي",
        ex: "Der Elefant ist grau. <br><em>(The elephant is gray.)</em>",
      },
      {
        de: "braun",
        pro_en: "brown",
        pro_ar: "براون",
        en: "brown",
        ar: "بني",
        ex: "Meine Haare sind braun. <br><em>(My hair is brown.)</em>",
      },
      {
        de: "lila",
        pro_en: "lee-la",
        pro_ar: "ليلا",
        en: "purple",
        ar: "بنفسجي",
        ex: "Die Trauben sind lila. <br><em>(The grapes are purple.)</em>",
      },

      // --- DAYS & TIME ---
      {
        de: "Montag",
        pro_en: "mohn-tahg",
        pro_ar: "مونتاغ",
        en: "Monday",
        ar: "الاثنين",
        ex: "Am Montag gehe ich zur Arbeit. <br><em>(On Monday I go to work.)</em>",
      },
      {
        de: "Dienstag",
        pro_en: "deens-tahg",
        pro_ar: "دينستاغ",
        en: "Tuesday",
        ar: "الثلاثاء",
        ex: "Dienstag ist mein Lieblingstag. <br><em>(Tuesday is my favorite day.)</em>",
      },
      {
        de: "Mittwoch",
        pro_en: "mit-vokh",
        pro_ar: "ميتفوخ",
        en: "Wednesday",
        ar: "الأربعاء",
        ex: "Mittwoch ist die Wochenmitte. <br><em>(Wednesday is the middle of the week.)</em>",
      },
      {
        de: "Donnerstag",
        pro_en: "don-ers-tahg",
        pro_ar: "دونرستاغ",
        en: "Thursday",
        ar: "الخميس",
        ex: "Am Donnerstag habe ich frei. <br><em>(On Thursday I'm off.)</em>",
      },
      {
        de: "Freitag",
        pro_en: "fry-tahg",
        pro_ar: "فرايتاغ",
        en: "Friday",
        ar: "الجمعة",
        ex: "Freitag ist Wochenende! <br><em>(Friday is the weekend!)</em>",
      },
      {
        de: "Samstag",
        pro_en: "zahms-tahg",
        pro_ar: "زامستاغ",
        en: "Saturday",
        ar: "السبت",
        ex: "Am Samstag gehe ich einkaufen. <br><em>(On Saturday I go shopping.)</em>",
      },
      {
        de: "Sonntag",
        pro_en: "zon-tahg",
        pro_ar: "زونتاغ",
        en: "Sunday",
        ar: "الأحد",
        ex: "Sonntag ist Ruhetag. <br><em>(Sunday is a day of rest.)</em>",
      },
      {
        de: "heute",
        pro_en: "hoy-tuh",
        pro_ar: "هويته",
        en: "today",
        ar: "اليوم",
        ex: "Heute ist ein schöner Tag. <br><em>(Today is a beautiful day.)</em>",
      },
      {
        de: "morgen",
        pro_en: "mor-gen",
        pro_ar: "مورغن",
        en: "tomorrow",
        ar: "غداً",
        ex: "Morgen habe ich einen Termin. <br><em>(Tomorrow I have an appointment.)</em>",
      },
      {
        de: "gestern",
        pro_en: "ges-tern",
        pro_ar: "غيسترن",
        en: "yesterday",
        ar: "أمس",
        ex: "Gestern war ich müde. <br><em>(Yesterday I was tired.)</em>",
      },
      {
        de: "die Uhr",
        pro_en: "dee oor",
        pro_ar: "دي أور",
        en: "clock / watch",
        ar: "الساعة",
        ex: "Die Uhr zeigt 10:00. <br><em>(The clock shows 10:00.)</em>",
      },
      {
        de: "die Stunde",
        pro_en: "dee shtoon-duh",
        pro_ar: "دي شتونده",
        en: "hour",
        ar: "الساعة (وحدة زمنية)",
        ex: "Eine Stunde hat 60 Minuten. <br><em>(An hour has 60 minutes.)</em>",
      },
      {
        de: "die Minute",
        pro_en: "dee mi-noo-tuh",
        pro_ar: "دي مينوته",
        en: "minute",
        ar: "الدقيقة",
        ex: "Warte eine Minute! <br><em>(Wait a minute!)</em>",
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
        ar: "يملك",
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
        de: "arbeiten",
        pro_en: "ar-by-ten",
        pro_ar: "أربايتن",
        en: "to work",
        ar: "يعمل",
        ex: "Ich arbeite als Lehrer. <br><em>(I work as a teacher.)</em>",
      },
      {
        de: "schlafen",
        pro_en: "shlah-fen",
        pro_ar: "شلافن",
        en: "to sleep",
        ar: "ينام",
        ex: "Ich will schlafen. <br><em>(I want to sleep.)</em>",
      },
      {
        de: "essen",
        pro_en: "es-sen",
        pro_ar: "إيسن",
        en: "to eat",
        ar: "يأكل",
        ex: "Ich esse gern Pizza. <br><em>(I like eating pizza.)</em>",
      },
      {
        de: "trinken",
        pro_en: "tring-ken",
        pro_ar: "ترينكن",
        en: "to drink",
        ar: "يشرب",
        ex: "Was trinkst du? <br><em>(What are you drinking?)</em>",
      },
      {
        de: "lesen",
        pro_en: "lay-zen",
        pro_ar: "ليزن",
        en: "to read",
        ar: "يقرأ",
        ex: "Ich lese ein Buch. <br><em>(I am reading a book.)</em>",
      },
      {
        de: "schreiben",
        pro_en: "shry-ben",
        pro_ar: "شرايبن",
        en: "to write",
        ar: "يكتب",
        ex: "Ich schreibe einen Brief. <br><em>(I am writing a letter.)</em>",
      },
      {
        de: "sehen",
        pro_en: "zay-en",
        pro_ar: "زيين",
        en: "to see",
        ar: "يرى",
        ex: "Ich sehe einen Film. <br><em>(I am watching a movie.)</em>",
      },
      {
        de: "hören",
        pro_en: "heu-ren",
        pro_ar: "هورن",
        en: "to hear / listen",
        ar: "يسمع",
        ex: "Ich höre Musik. <br><em>(I am listening to music.)</em>",
      },
      {
        de: "kaufen",
        pro_en: "kow-fen",
        pro_ar: "كاوفن",
        en: "to buy",
        ar: "يشتري",
        ex: "Ich kaufe Brot. <br><em>(I am buying bread.)</em>",
      },
      {
        de: "spielen",
        pro_en: "shpee-len",
        pro_ar: "شبيلن",
        en: "to play",
        ar: "يلعب",
        ex: "Die Kinder spielen im Park. <br><em>(The children are playing in the park.)</em>",
      },
      {
        de: "wissen",
        pro_en: "vis-sen",
        pro_ar: "فيسن",
        en: "to know (fact)",
        ar: "يعرف (معلومة)",
        ex: "Ich weiß es nicht. <br><em>(I don't know.)</em>",
      },
      {
        de: "kennen",
        pro_en: "ken-nen",
        pro_ar: "كينن",
        en: "to know (person)",
        ar: "يعرف (شخص)",
        ex: "Kennst du ihn? <br><em>(Do you know him?)</em>",
      },

      // --- PLACES ---
      {
        de: "das Haus",
        pro_en: "das hows",
        pro_ar: "داس هاوس",
        en: "house",
        ar: "البيت",
        ex: "Das Haus ist groß. <br><em>(The house is big.)</em>",
      },
      {
        de: "die Wohnung",
        pro_en: "dee voh-noong",
        pro_ar: "دي فونونغ",
        en: "apartment",
        ar: "الشقة",
        ex: "Meine Wohnung ist klein. <br><em>(My apartment is small.)</em>",
      },
      {
        de: "die Schule",
        pro_en: "dee shoo-luh",
        pro_ar: "دي شوله",
        en: "school",
        ar: "المدرسة",
        ex: "Die Kinder gehen zur Schule. <br><em>(The children go to school.)</em>",
      },
      {
        de: "das Büro",
        pro_en: "das bew-roh",
        pro_ar: "داس بورو",
        en: "office",
        ar: "المكتب",
        ex: "Ich arbeite im Büro. <br><em>(I work in the office.)</em>",
      },
      {
        de: "das Krankenhaus",
        pro_en: "das kran-ken-hows",
        pro_ar: "داس كرانكنهاوس",
        en: "hospital",
        ar: "المستشفى",
        ex: "Er ist im Krankenhaus. <br><em>(He is in the hospital.)</em>",
      },
      {
        de: "der Supermarkt",
        pro_en: "dair zoo-per-markt",
        pro_ar: "دير زوبرماركت",
        en: "supermarket",
        ar: "السوبرماركت",
        ex: "Ich gehe zum Supermarkt. <br><em>(I'm going to the supermarket.)</em>",
      },
      {
        de: "das Restaurant",
        pro_en: "das res-toh-rahng",
        pro_ar: "داس رستورانت",
        en: "restaurant",
        ar: "المطعم",
        ex: "Wir essen im Restaurant. <br><em>(We eat at the restaurant.)</em>",
      },
      {
        de: "der Bahnhof",
        pro_en: "dair bahn-hohf",
        pro_ar: "دير بانهوف",
        en: "train station",
        ar: "محطة القطار",
        ex: "Der Zug fährt vom Bahnhof ab. <br><em>(The train departs from the station.)</em>",
      },
      {
        de: "der Flughafen",
        pro_en: "dair floog-hah-fen",
        pro_ar: "دير فلوغهافن",
        en: "airport",
        ar: "المطار",
        ex: "Der Flughafen ist weit. <br><em>(The airport is far.)</em>",
      },
      {
        de: "der Park",
        pro_en: "dair park",
        pro_ar: "دير بارك",
        en: "park",
        ar: "الحديقة",
        ex: "Wir spazieren im Park. <br><em>(We walk in the park.)</em>",
      },
      {
        de: "die Stadt",
        pro_en: "dee shtat",
        pro_ar: "دي شتات",
        en: "city",
        ar: "المدينة",
        ex: "Berlin ist eine große Stadt. <br><em>(Berlin is a big city.)</em>",
      },
      {
        de: "die Straße",
        pro_en: "dee strah-suh",
        pro_ar: "دي شتراسه",
        en: "street",
        ar: "الشارع",
        ex: "Die Straße ist lang. <br><em>(The street is long.)</em>",
      },

      // --- QUESTION WORDS ---
      { de: "wer", pro_en: "vair", pro_ar: "فير", en: "who", ar: "من", ex: "Wer ist das? <br><em>(Who is that?)</em>" },
      {
        de: "was",
        pro_en: "vas",
        pro_ar: "فاس",
        en: "what",
        ar: "ماذا",
        ex: "Was machst du? <br><em>(What are you doing?)</em>",
      },
      {
        de: "wo",
        pro_en: "voh",
        pro_ar: "فو",
        en: "where",
        ar: "أين",
        ex: "Wo wohnst du? <br><em>(Where do you live?)</em>",
      },
      {
        de: "wann",
        pro_en: "van",
        pro_ar: "فان",
        en: "when",
        ar: "متى",
        ex: "Wann kommst du? <br><em>(When are you coming?)</em>",
      },
      {
        de: "warum",
        pro_en: "va-room",
        pro_ar: "فاروم",
        en: "why",
        ar: "لماذا",
        ex: "Warum bist du traurig? <br><em>(Why are you sad?)</em>",
      },
      {
        de: "wie",
        pro_en: "vee",
        pro_ar: "في",
        en: "how",
        ar: "كيف",
        ex: "Wie heißt du? <br><em>(What is your name?)</em>",
      },
      {
        de: "wie viel",
        pro_en: "vee feel",
        pro_ar: "في فيل",
        en: "how much",
        ar: "كم (للكمية)",
        ex: "Wie viel kostet das? <br><em>(How much does it cost?)</em>",
      },
      {
        de: "wie viele",
        pro_en: "vee fee-luh",
        pro_ar: "في فيله",
        en: "how many",
        ar: "كم (للعدد)",
        ex: "Wie viele Kinder hast du? <br><em>(How many children do you have?)</em>",
      },
      {
        de: "welcher",
        pro_en: "vel-kher",
        pro_ar: "فيلشر",
        en: "which",
        ar: "أي",
        ex: "Welcher Tag ist heute? <br><em>(Which day is today?)</em>",
      },

      // --- ADJECTIVES ---
      {
        de: "groß",
        pro_en: "grohs",
        pro_ar: "غروس",
        en: "big / tall",
        ar: "كبير / طويل",
        ex: "Das Haus ist groß. <br><em>(The house is big.)</em>",
      },
      {
        de: "klein",
        pro_en: "kline",
        pro_ar: "كلاين",
        en: "small",
        ar: "صغير",
        ex: "Die Katze ist klein. <br><em>(The cat is small.)</em>",
      },
      {
        de: "gut",
        pro_en: "goot",
        pro_ar: "غوت",
        en: "good",
        ar: "جيد",
        ex: "Das Essen ist gut. <br><em>(The food is good.)</em>",
      },
      {
        de: "schlecht",
        pro_en: "shlekht",
        pro_ar: "شليشت",
        en: "bad",
        ar: "سيء",
        ex: "Das Wetter ist schlecht. <br><em>(The weather is bad.)</em>",
      },
      {
        de: "neu",
        pro_en: "noy",
        pro_ar: "نوي",
        en: "new",
        ar: "جديد",
        ex: "Ich habe ein neues Auto. <br><em>(I have a new car.)</em>",
      },
      {
        de: "alt",
        pro_en: "alt",
        pro_ar: "آلت",
        en: "old",
        ar: "قديم / كبير السن",
        ex: "Das Buch ist alt. <br><em>(The book is old.)</em>",
      },
      {
        de: "schön",
        pro_en: "shurn",
        pro_ar: "شون",
        en: "beautiful",
        ar: "جميل",
        ex: "Die Blumen sind schön. <br><em>(The flowers are beautiful.)</em>",
      },
      {
        de: "hässlich",
        pro_en: "hess-likh",
        pro_ar: "هيسليش",
        en: "ugly",
        ar: "قبيح",
        ex: "Das Bild ist hässlich. <br><em>(The picture is ugly.)</em>",
      },
      {
        de: "schnell",
        pro_en: "shnel",
        pro_ar: "شنيل",
        en: "fast",
        ar: "سريع",
        ex: "Der Zug ist schnell. <br><em>(The train is fast.)</em>",
      },
      {
        de: "langsam",
        pro_en: "lang-zahm",
        pro_ar: "لانغزام",
        en: "slow",
        ar: "بطيء",
        ex: "Die Schnecke ist langsam. <br><em>(The snail is slow.)</em>",
      },
      {
        de: "heiß",
        pro_en: "hice",
        pro_ar: "هايس",
        en: "hot",
        ar: "حار",
        ex: "Der Kaffee ist heiß. <br><em>(The coffee is hot.)</em>",
      },
      {
        de: "kalt",
        pro_en: "kalt",
        pro_ar: "كالت",
        en: "cold",
        ar: "بارد",
        ex: "Das Wasser ist kalt. <br><em>(The water is cold.)</em>",
      },
      {
        de: "teuer",
        pro_en: "toy-er",
        pro_ar: "توير",
        en: "expensive",
        ar: "غالي",
        ex: "Das Hotel ist teuer. <br><em>(The hotel is expensive.)</em>",
      },
      {
        de: "billig",
        pro_en: "bi-likh",
        pro_ar: "بيليش",
        en: "cheap",
        ar: "رخيص",
        ex: "Das T-Shirt ist billig. <br><em>(The T-shirt is cheap.)</em>",
      },
      {
        de: "müde",
        pro_en: "mew-duh",
        pro_ar: "موده",
        en: "tired",
        ar: "متعب",
        ex: "Ich bin sehr müde. <br><em>(I am very tired.)</em>",
      },
      {
        de: "hungrig",
        pro_en: "hoong-rikh",
        pro_ar: "هونغريش",
        en: "hungry",
        ar: "جائع",
        ex: "Bist du hungrig? <br><em>(Are you hungry?)</em>",
      },
      {
        de: "durstig",
        pro_en: "door-stikh",
        pro_ar: "دورستيش",
        en: "thirsty",
        ar: "عطشان",
        ex: "Ich bin durstig. <br><em>(I am thirsty.)</em>",
      },

      // --- CLOTHES ---
      {
        de: "das Hemd",
        pro_en: "das hemt",
        pro_ar: "داس هيمد",
        en: "shirt",
        ar: "القميص",
        ex: "Das Hemd ist weiß. <br><em>(The shirt is white.)</em>",
      },
      {
        de: "die Hose",
        pro_en: "dee hoh-zuh",
        pro_ar: "دي هوزه",
        en: "pants",
        ar: "البنطلون",
        ex: "Die Hose ist blau. <br><em>(The pants are blue.)</em>",
      },
      {
        de: "das Kleid",
        pro_en: "das klite",
        pro_ar: "داس كلايد",
        en: "dress",
        ar: "الفستان",
        ex: "Das Kleid ist schön. <br><em>(The dress is beautiful.)</em>",
      },
      {
        de: "die Jacke",
        pro_en: "dee ya-kuh",
        pro_ar: "دي ياكه",
        en: "jacket",
        ar: "الجاكيت",
        ex: "Zieh die Jacke an! <br><em>(Put on the jacket!)</em>",
      },
      {
        de: "der Mantel",
        pro_en: "dair man-tel",
        pro_ar: "دير مانتل",
        en: "coat",
        ar: "المعطف",
        ex: "Der Mantel ist warm. <br><em>(The coat is warm.)</em>",
      },
      {
        de: "die Schuhe",
        pro_en: "dee shoo-uh",
        pro_ar: "دي شوه",
        en: "shoes",
        ar: "الأحذية",
        ex: "Die Schuhe sind neu. <br><em>(The shoes are new.)</em>",
      },
      {
        de: "die Socken",
        pro_en: "dee zok-ken",
        pro_ar: "دي زوكن",
        en: "socks",
        ar: "الجوارب",
        ex: "Die Socken sind schwarz. <br><em>(The socks are black.)</em>",
      },
      {
        de: "die Mütze",
        pro_en: "dee mew-tsuh",
        pro_ar: "دي موتسه",
        en: "hat / cap",
        ar: "القبعة",
        ex: "Trag eine Mütze! <br><em>(Wear a hat!)</em>",
      },

      // --- PROFESSIONS ---
      {
        de: "der Arzt",
        pro_en: "dair artst",
        pro_ar: "دير آرتست",
        en: "doctor",
        ar: "الطبيب",
        ex: "Der Arzt hilft den Patienten. <br><em>(The doctor helps the patients.)</em>",
      },
      {
        de: "der Lehrer",
        pro_en: "dair lay-rer",
        pro_ar: "دير ليرر",
        en: "teacher",
        ar: "المعلم",
        ex: "Der Lehrer unterrichtet Deutsch. <br><em>(The teacher teaches German.)</em>",
      },
      {
        de: "der Ingenieur",
        pro_en: "dair in-zhen-yeur",
        pro_ar: "دير إنجينيور",
        en: "engineer",
        ar: "المهندس",
        ex: "Mein Vater ist Ingenieur. <br><em>(My father is an engineer.)</em>",
      },
      {
        de: "der Student",
        pro_en: "dair shtoo-dent",
        pro_ar: "دير شتودنت",
        en: "student",
        ar: "الطالب",
        ex: "Ich bin Student. <br><em>(I am a student.)</em>",
      },
      {
        de: "der Kellner",
        pro_en: "dair kel-ner",
        pro_ar: "دير كيلنر",
        en: "waiter",
        ar: "النادل",
        ex: "Der Kellner bringt das Essen. <br><em>(The waiter brings the food.)</em>",
      },
      {
        de: "der Polizist",
        pro_en: "dair po-li-tsist",
        pro_ar: "دير بوليتسيست",
        en: "policeman",
        ar: "الشرطي",
        ex: "Der Polizist regelt den Verkehr. <br><em>(The policeman directs traffic.)</em>",
      },
      {
        de: "der Fahrer",
        pro_en: "dair fah-rer",
        pro_ar: "دير فارر",
        en: "driver",
        ar: "السائق",
        ex: "Der Fahrer fährt den Bus. <br><em>(The driver drives the bus.)</em>",
      },
      {
        de: "der Koch",
        pro_en: "dair kokh",
        pro_ar: "دير كوخ",
        en: "cook / chef",
        ar: "الطباخ",
        ex: "Der Koch kocht das Essen. <br><em>(The chef cooks the food.)</em>",
      },
    ],
    exercises: [
      { q: "How do you say 'Thank you' in German?", options: ["Hallo", "Danke", "Bitte", "Nein"], correct: 1 },
      { q: "What does 'Wasser' mean?", options: ["Bread", "Wine", "Water", "Milk"], correct: 2 },
      { q: "Translate: 'Good night'", options: ["Guten Morgen", "Guten Tag", "Gute Nacht", "Hallo"], correct: 2 },
      { q: "What color is 'blau'?", options: ["Red", "Green", "Blue", "Yellow"], correct: 2 },
      { q: "What does 'die Mutter' mean?", options: ["Father", "Mother", "Sister", "Brother"], correct: 1 },
      {
        q: "How do you say 'I am tired'?",
        options: ["Ich bin hungrig", "Ich bin müde", "Ich bin durstig", "Ich bin glücklich"],
        correct: 1,
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
        en: "daily routine",
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
        ex: "Ich dusche jeden Morgen. <br><em>(I shower every morning.)</em>",
      },
      {
        de: "frühstücken",
        pro_en: "frew-shtew-ken",
        pro_ar: "فروشتوكن",
        en: "to have breakfast",
        ar: "يتناول الفطور",
        ex: "Wir frühstücken zusammen. <br><em>(We have breakfast together.)</em>",
      },
      {
        de: "sich anziehen",
        pro_en: "zikh an-tsee-en",
        pro_ar: "زيش أنتسيين",
        en: "to get dressed",
        ar: "يرتدي ملابسه",
        ex: "Ich ziehe mich schnell an. <br><em>(I get dressed quickly.)</em>",
      },
      {
        de: "zur Arbeit gehen",
        pro_en: "tsoor ar-bite gay-en",
        pro_ar: "تسور أربايت غيين",
        en: "to go to work",
        ar: "يذهب للعمل",
        ex: "Ich gehe um 8 Uhr zur Arbeit. <br><em>(I go to work at 8.)</em>",
      },
      {
        de: "zu Mittag essen",
        pro_en: "tsoo mi-tahg es-sen",
        pro_ar: "تسو ميتاغ إيسن",
        en: "to have lunch",
        ar: "يتناول الغداء",
        ex: "Wir essen um 12 Uhr zu Mittag. <br><em>(We have lunch at 12.)</em>",
      },
      {
        de: "nach Hause kommen",
        pro_en: "nakh how-zuh kom-men",
        pro_ar: "ناخ هاوزه كومن",
        en: "to come home",
        ar: "يعود للبيت",
        ex: "Ich komme um 18 Uhr nach Hause. <br><em>(I come home at 6 PM.)</em>",
      },
      {
        de: "fernsehen",
        pro_en: "fairn-zay-en",
        pro_ar: "فيرنزيين",
        en: "to watch TV",
        ar: "يشاهد التلفاز",
        ex: "Abends sehe ich fern. <br><em>(In the evening I watch TV.)</em>",
      },
      {
        de: "ins Bett gehen",
        pro_en: "ins bet gay-en",
        pro_ar: "إنس بيت غيين",
        en: "to go to bed",
        ar: "يذهب للنوم",
        ex: "Ich gehe um 23 Uhr ins Bett. <br><em>(I go to bed at 11 PM.)</em>",
      },

      // --- HEALTH ---
      {
        de: "die Gesundheit",
        pro_en: "dee ge-zoont-hite",
        pro_ar: "دي غيزوندهايت",
        en: "health",
        ar: "الصحة",
        ex: "Gesundheit ist wichtig. <br><em>(Health is important.)</em>",
      },
      {
        de: "krank",
        pro_en: "krank",
        pro_ar: "كرانك",
        en: "sick",
        ar: "مريض",
        ex: "Ich bin krank. <br><em>(I am sick.)</em>",
      },
      {
        de: "gesund",
        pro_en: "ge-zoont",
        pro_ar: "غيزوند",
        en: "healthy",
        ar: "صحي",
        ex: "Er ist wieder gesund. <br><em>(He is healthy again.)</em>",
      },
      {
        de: "der Kopfschmerz",
        pro_en: "dair kopf-shmerts",
        pro_ar: "دير كوبف شميرتس",
        en: "headache",
        ar: "صداع",
        ex: "Ich habe Kopfschmerzen. <br><em>(I have a headache.)</em>",
      },
      {
        de: "das Fieber",
        pro_en: "das fee-ber",
        pro_ar: "داس فيبر",
        en: "fever",
        ar: "الحمى",
        ex: "Das Kind hat Fieber. <br><em>(The child has a fever.)</em>",
      },
      {
        de: "die Erkältung",
        pro_en: "dee er-kel-toong",
        pro_ar: "دي إركيلتونغ",
        en: "cold (illness)",
        ar: "نزلة برد",
        ex: "Ich habe eine Erkältung. <br><em>(I have a cold.)</em>",
      },
      {
        de: "der Husten",
        pro_en: "dair hoos-ten",
        pro_ar: "دير هوستن",
        en: "cough",
        ar: "السعال",
        ex: "Der Husten ist schlimm. <br><em>(The cough is bad.)</em>",
      },
      {
        de: "die Apotheke",
        pro_en: "dee ah-po-tay-kuh",
        pro_ar: "دي أبوتيكه",
        en: "pharmacy",
        ar: "الصيدلية",
        ex: "Ich gehe zur Apotheke. <br><em>(I'm going to the pharmacy.)</em>",
      },
      {
        de: "das Medikament",
        pro_en: "das me-di-ka-ment",
        pro_ar: "داس ميديكامنت",
        en: "medicine",
        ar: "الدواء",
        ex: "Nimm das Medikament! <br><em>(Take the medicine!)</em>",
      },
      {
        de: "der Termin",
        pro_en: "dair ter-meen",
        pro_ar: "دير ترمين",
        en: "appointment",
        ar: "الموعد",
        ex: "Ich habe einen Termin beim Arzt. <br><em>(I have a doctor's appointment.)</em>",
      },

      // --- WEATHER ---
      {
        de: "das Wetter",
        pro_en: "das vet-ter",
        pro_ar: "داس فيتر",
        en: "weather",
        ar: "الطقس",
        ex: "Wie ist das Wetter heute? <br><em>(How is the weather today?)</em>",
      },
      {
        de: "sonnig",
        pro_en: "zon-nikh",
        pro_ar: "زونيش",
        en: "sunny",
        ar: "مشمس",
        ex: "Es ist sonnig. <br><em>(It is sunny.)</em>",
      },
      {
        de: "bewölkt",
        pro_en: "be-vulkt",
        pro_ar: "بيفولكت",
        en: "cloudy",
        ar: "غائم",
        ex: "Der Himmel ist bewölkt. <br><em>(The sky is cloudy.)</em>",
      },
      {
        de: "regnerisch",
        pro_en: "rayg-ne-rish",
        pro_ar: "ريغنريش",
        en: "rainy",
        ar: "ممطر",
        ex: "Es ist regnerisch. <br><em>(It is rainy.)</em>",
      },
      {
        de: "der Regen",
        pro_en: "dair ray-gen",
        pro_ar: "دير ريغن",
        en: "rain",
        ar: "المطر",
        ex: "Der Regen fällt. <br><em>(The rain is falling.)</em>",
      },
      {
        de: "der Schnee",
        pro_en: "dair shnay",
        pro_ar: "دير شني",
        en: "snow",
        ar: "الثلج",
        ex: "Im Winter gibt es Schnee. <br><em>(In winter there is snow.)</em>",
      },
      {
        de: "windig",
        pro_en: "vin-dikh",
        pro_ar: "فينديش",
        en: "windy",
        ar: "عاصف",
        ex: "Es ist sehr windig. <br><em>(It is very windy.)</em>",
      },
      {
        de: "warm",
        pro_en: "varm",
        pro_ar: "فارم",
        en: "warm",
        ar: "دافئ",
        ex: "Es ist warm draußen. <br><em>(It is warm outside.)</em>",
      },
      {
        de: "kühl",
        pro_en: "kewl",
        pro_ar: "كول",
        en: "cool",
        ar: "بارد قليلاً",
        ex: "Der Abend ist kühl. <br><em>(The evening is cool.)</em>",
      },
      {
        de: "das Gewitter",
        pro_en: "das ge-vit-ter",
        pro_ar: "داس غيفيتر",
        en: "thunderstorm",
        ar: "العاصفة الرعدية",
        ex: "Es gibt ein Gewitter. <br><em>(There is a thunderstorm.)</em>",
      },

      // --- WORK & EDUCATION ---
      {
        de: "die Arbeit",
        pro_en: "dee ar-bite",
        pro_ar: "دي أربايت",
        en: "work",
        ar: "العمل",
        ex: "Die Arbeit ist interessant. <br><em>(The work is interesting.)</em>",
      },
      {
        de: "das Büro",
        pro_en: "das bew-roh",
        pro_ar: "داس بورو",
        en: "office",
        ar: "المكتب",
        ex: "Ich arbeite im Büro. <br><em>(I work in the office.)</em>",
      },
      {
        de: "der Chef",
        pro_en: "dair shef",
        pro_ar: "دير شيف",
        en: "boss",
        ar: "المدير",
        ex: "Mein Chef ist nett. <br><em>(My boss is nice.)</em>",
      },
      {
        de: "der Kollege",
        pro_en: "dair ko-lay-guh",
        pro_ar: "دير كوليغه",
        en: "colleague",
        ar: "الزميل",
        ex: "Mein Kollege hilft mir. <br><em>(My colleague helps me.)</em>",
      },
      {
        de: "das Gehalt",
        pro_en: "das ge-halt",
        pro_ar: "داس غيهالت",
        en: "salary",
        ar: "الراتب",
        ex: "Das Gehalt ist gut. <br><em>(The salary is good.)</em>",
      },
      {
        de: "der Urlaub",
        pro_en: "dair oor-lowp",
        pro_ar: "دير أورلاوب",
        en: "vacation",
        ar: "الإجازة",
        ex: "Ich brauche Urlaub. <br><em>(I need a vacation.)</em>",
      },
      {
        de: "die Besprechung",
        pro_en: "dee be-shpre-khoong",
        pro_ar: "دي بيشبريشونغ",
        en: "meeting",
        ar: "الاجتماع",
        ex: "Die Besprechung ist um 10 Uhr. <br><em>(The meeting is at 10.)</em>",
      },
      {
        de: "die Universität",
        pro_en: "dee oo-ni-ver-zi-tayt",
        pro_ar: "دي أونيفرزيتيت",
        en: "university",
        ar: "الجامعة",
        ex: "Ich studiere an der Universität. <br><em>(I study at the university.)</em>",
      },
      {
        de: "der Kurs",
        pro_en: "dair koors",
        pro_ar: "دير كورس",
        en: "course",
        ar: "الدورة",
        ex: "Der Deutschkurs ist gut. <br><em>(The German course is good.)</em>",
      },
      {
        de: "die Prüfung",
        pro_en: "dee prew-foong",
        pro_ar: "دي بروفونغ",
        en: "exam",
        ar: "الامتحان",
        ex: "Die Prüfung ist schwer. <br><em>(The exam is difficult.)</em>",
      },
      {
        de: "die Hausaufgabe",
        pro_en: "dee hows-owf-gah-buh",
        pro_ar: "دي هاوس أوفغابه",
        en: "homework",
        ar: "الواجب المنزلي",
        ex: "Ich mache meine Hausaufgaben. <br><em>(I do my homework.)</em>",
      },

      // --- TRAVEL ---
      {
        de: "die Reise",
        pro_en: "dee ry-zuh",
        pro_ar: "دي رايزه",
        en: "trip / journey",
        ar: "الرحلة",
        ex: "Die Reise war schön. <br><em>(The trip was nice.)</em>",
      },
      {
        de: "reisen",
        pro_en: "ry-zen",
        pro_ar: "رايزن",
        en: "to travel",
        ar: "يسافر",
        ex: "Ich reise gern. <br><em>(I like to travel.)</em>",
      },
      {
        de: "das Flugzeug",
        pro_en: "das floog-tsoyg",
        pro_ar: "داس فلوغتسويغ",
        en: "airplane",
        ar: "الطائرة",
        ex: "Das Flugzeug fliegt nach Berlin. <br><em>(The plane flies to Berlin.)</em>",
      },
      {
        de: "der Zug",
        pro_en: "dair tsoog",
        pro_ar: "دير تسوغ",
        en: "train",
        ar: "القطار",
        ex: "Der Zug kommt um 9 Uhr. <br><em>(The train arrives at 9.)</em>",
      },
      {
        de: "der Bus",
        pro_en: "dair boos",
        pro_ar: "دير بوس",
        en: "bus",
        ar: "الحافلة",
        ex: "Der Bus fährt zum Bahnhof. <br><em>(The bus goes to the station.)</em>",
      },
      {
        de: "das Hotel",
        pro_en: "das ho-tel",
        pro_ar: "داس هوتيل",
        en: "hotel",
        ar: "الفندق",
        ex: "Das Hotel ist teuer. <br><em>(The hotel is expensive.)</em>",
      },
      {
        de: "der Koffer",
        pro_en: "dair kof-fer",
        pro_ar: "دير كوفر",
        en: "suitcase",
        ar: "الحقيبة",
        ex: "Mein Koffer ist schwer. <br><em>(My suitcase is heavy.)</em>",
      },
      {
        de: "der Reisepass",
        pro_en: "dair ry-zuh-pas",
        pro_ar: "دير رايزه باس",
        en: "passport",
        ar: "جواز السفر",
        ex: "Wo ist mein Reisepass? <br><em>(Where is my passport?)</em>",
      },
      {
        de: "buchen",
        pro_en: "boo-khen",
        pro_ar: "بوخن",
        en: "to book",
        ar: "يحجز",
        ex: "Ich buche ein Zimmer. <br><em>(I book a room.)</em>",
      },
      {
        de: "ankommen",
        pro_en: "an-kom-men",
        pro_ar: "أنكومن",
        en: "to arrive",
        ar: "يصل",
        ex: "Wann kommen wir an? <br><em>(When do we arrive?)</em>",
      },
      {
        de: "abfahren",
        pro_en: "ap-fah-ren",
        pro_ar: "أبفارن",
        en: "to depart",
        ar: "يغادر",
        ex: "Der Zug fährt um 10 Uhr ab. <br><em>(The train departs at 10.)</em>",
      },

      // --- SHOPPING ---
      {
        de: "einkaufen",
        pro_en: "ine-kow-fen",
        pro_ar: "آينكاوفن",
        en: "to shop",
        ar: "يتسوق",
        ex: "Ich gehe einkaufen. <br><em>(I'm going shopping.)</em>",
      },
      {
        de: "das Geschäft",
        pro_en: "das ge-sheft",
        pro_ar: "داس غيشيفت",
        en: "shop / store",
        ar: "المتجر",
        ex: "Das Geschäft ist geschlossen. <br><em>(The shop is closed.)</em>",
      },
      {
        de: "der Preis",
        pro_en: "dair price",
        pro_ar: "دير برايس",
        en: "price",
        ar: "السعر",
        ex: "Was ist der Preis? <br><em>(What is the price?)</em>",
      },
      {
        de: "bezahlen",
        pro_en: "be-tsah-len",
        pro_ar: "بيتسالن",
        en: "to pay",
        ar: "يدفع",
        ex: "Ich möchte bezahlen. <br><em>(I would like to pay.)</em>",
      },
      {
        de: "die Kasse",
        pro_en: "dee kas-suh",
        pro_ar: "دي كاسه",
        en: "cash register",
        ar: "الصندوق",
        ex: "Bitte gehen Sie zur Kasse. <br><em>(Please go to the register.)</em>",
      },
      {
        de: "der Rabatt",
        pro_en: "dair ra-bat",
        pro_ar: "دير رابات",
        en: "discount",
        ar: "الخصم",
        ex: "Es gibt 20% Rabatt. <br><em>(There is a 20% discount.)</em>",
      },
      {
        de: "die Größe",
        pro_en: "dee grur-suh",
        pro_ar: "دي غروسه",
        en: "size",
        ar: "المقاس",
        ex: "Welche Größe brauchen Sie? <br><em>(What size do you need?)</em>",
      },
      {
        de: "anprobieren",
        pro_en: "an-pro-bee-ren",
        pro_ar: "أنبروبيرن",
        en: "to try on",
        ar: "يجرب (ملابس)",
        ex: "Kann ich das anprobieren? <br><em>(Can I try this on?)</em>",
      },
      {
        de: "die Quittung",
        pro_en: "dee kvit-toong",
        pro_ar: "دي كفيتونغ",
        en: "receipt",
        ar: "الإيصال",
        ex: "Hier ist Ihre Quittung. <br><em>(Here is your receipt.)</em>",
      },

      // --- DIRECTIONS ---
      {
        de: "links",
        pro_en: "links",
        pro_ar: "لينكس",
        en: "left",
        ar: "يسار",
        ex: "Gehen Sie nach links. <br><em>(Go left.)</em>",
      },
      {
        de: "rechts",
        pro_en: "rekhts",
        pro_ar: "ريشتس",
        en: "right",
        ar: "يمين",
        ex: "Das Hotel ist rechts. <br><em>(The hotel is on the right.)</em>",
      },
      {
        de: "geradeaus",
        pro_en: "ge-rah-de-ows",
        pro_ar: "غيراده أوس",
        en: "straight ahead",
        ar: "مباشرة للأمام",
        ex: "Gehen Sie geradeaus. <br><em>(Go straight ahead.)</em>",
      },
      {
        de: "die Ecke",
        pro_en: "dee ek-kuh",
        pro_ar: "دي إيكه",
        en: "corner",
        ar: "الزاوية",
        ex: "An der Ecke ist eine Bank. <br><em>(There is a bank at the corner.)</em>",
      },
      {
        de: "die Kreuzung",
        pro_en: "dee kroy-tsoong",
        pro_ar: "دي كرويتسونغ",
        en: "intersection",
        ar: "التقاطع",
        ex: "An der Kreuzung links abbiegen. <br><em>(Turn left at the intersection.)</em>",
      },
      {
        de: "gegenüber",
        pro_en: "gay-gen-ew-ber",
        pro_ar: "غيغن أوبر",
        en: "opposite",
        ar: "مقابل",
        ex: "Die Post ist gegenüber. <br><em>(The post office is opposite.)</em>",
      },
      {
        de: "neben",
        pro_en: "nay-ben",
        pro_ar: "نيبن",
        en: "next to",
        ar: "بجانب",
        ex: "Das Café ist neben der Bank. <br><em>(The café is next to the bank.)</em>",
      },
      {
        de: "zwischen",
        pro_en: "tsvi-shen",
        pro_ar: "تسفيشن",
        en: "between",
        ar: "بين",
        ex: "Das Hotel ist zwischen dem Park und dem Bahnhof. <br><em>(The hotel is between the park and the station.)</em>",
      },

      // --- PERFEKT (Past Tense) ---
      {
        de: "Ich habe gegessen",
        pro_en: "ikh hah-buh ge-es-sen",
        pro_ar: "إيش هابه غيغيسن",
        en: "I have eaten / I ate",
        ar: "أنا أكلت",
        ex: "Ich habe Pizza gegessen. <br><em>(I ate pizza.)</em>",
      },
      {
        de: "Ich habe getrunken",
        pro_en: "ikh hah-buh ge-troon-ken",
        pro_ar: "إيش هابه غيترونكن",
        en: "I have drunk / I drank",
        ar: "أنا شربت",
        ex: "Ich habe Kaffee getrunken. <br><em>(I drank coffee.)</em>",
      },
      {
        de: "Ich habe gearbeitet",
        pro_en: "ikh hah-buh ge-ar-by-tet",
        pro_ar: "إيش هابه غيأربايتت",
        en: "I have worked / I worked",
        ar: "أنا عملت",
        ex: "Ich habe gestern gearbeitet. <br><em>(I worked yesterday.)</em>",
      },
      {
        de: "Ich bin gegangen",
        pro_en: "ikh bin ge-gang-en",
        pro_ar: "إيش بين غيغانغن",
        en: "I have gone / I went",
        ar: "أنا ذهبت",
        ex: "Ich bin ins Kino gegangen. <br><em>(I went to the cinema.)</em>",
      },
      {
        de: "Ich bin gefahren",
        pro_en: "ikh bin ge-fah-ren",
        pro_ar: "إيش بين غيفارن",
        en: "I have driven / I drove",
        ar: "أنا سافرت بالسيارة",
        ex: "Ich bin nach München gefahren. <br><em>(I drove to Munich.)</em>",
      },
      {
        de: "Ich habe gekauft",
        pro_en: "ikh hah-buh ge-kowft",
        pro_ar: "إيش هابه غيكاوفت",
        en: "I have bought / I bought",
        ar: "أنا اشتريت",
        ex: "Ich habe ein Buch gekauft. <br><em>(I bought a book.)</em>",
      },
      {
        de: "Ich habe geschlafen",
        pro_en: "ikh hah-buh ge-shlah-fen",
        pro_ar: "إيش هابه غيشلافن",
        en: "I have slept / I slept",
        ar: "أنا نمت",
        ex: "Ich habe gut geschlafen. <br><em>(I slept well.)</em>",
      },
      {
        de: "Ich habe gesehen",
        pro_en: "ikh hah-buh ge-zay-en",
        pro_ar: "إيش هابه غيزيين",
        en: "I have seen / I saw",
        ar: "أنا رأيت",
        ex: "Ich habe einen Film gesehen. <br><em>(I saw a movie.)</em>",
      },
    ],
    exercises: [
      {
        q: "How do you say 'I get up at 7' in German?",
        options: ["Ich schlafe um 7", "Ich stehe um 7 Uhr auf", "Ich esse um 7", "Ich gehe um 7"],
        correct: 1,
      },
      { q: "What does 'die Erkältung' mean?", options: ["Headache", "Fever", "Cold (illness)", "Cough"], correct: 2 },
      {
        q: "Translate: 'The weather is sunny'",
        options: ["Das Wetter ist kalt", "Das Wetter ist sonnig", "Das Wetter ist regnerisch", "Das Wetter ist windig"],
        correct: 1,
      },
      { q: "What is 'der Koffer'?", options: ["Passport", "Suitcase", "Ticket", "Hotel"], correct: 1 },
      {
        q: "How do you say 'I went to the cinema'?",
        options: ["Ich gehe ins Kino", "Ich bin ins Kino gegangen", "Ich war im Kino", "Ich werde ins Kino gehen"],
        correct: 1,
      },
      { q: "What does 'geradeaus' mean?", options: ["Left", "Right", "Straight ahead", "Behind"], correct: 2 },
    ],
  },
  B1: {
    title: "Level B1: Intermediate",
    desc: "Opinions, education, environment, health, media, and expressing complex ideas.",
    words: [
      // --- OPINIONS & EXPRESSIONS ---
      {
        de: "Ich denke, dass...",
        pro_en: "ikh den-kuh das",
        pro_ar: "إيش دينكه داس",
        en: "I think that...",
        ar: "أعتقد أن...",
        ex: "Ich denke, dass das richtig ist. <br><em>(I think that is correct.)</em>",
      },
      {
        de: "Meiner Meinung nach",
        pro_en: "my-ner my-noong nakh",
        pro_ar: "ماينر ماينونغ ناخ",
        en: "In my opinion",
        ar: "في رأيي",
        ex: "Meiner Meinung nach ist das falsch. <br><em>(In my opinion, that is wrong.)</em>",
      },
      {
        de: "Ich glaube",
        pro_en: "ikh glow-buh",
        pro_ar: "إيش غلاوبه",
        en: "I believe",
        ar: "أعتقد / أؤمن",
        ex: "Ich glaube, er kommt später. <br><em>(I believe he's coming later.)</em>",
      },
      {
        de: "Es scheint mir",
        pro_en: "es shynt meer",
        pro_ar: "إس شاينت مير",
        en: "It seems to me",
        ar: "يبدو لي",
        ex: "Es scheint mir wichtig. <br><em>(It seems important to me.)</em>",
      },
      {
        de: "Ich bin überzeugt",
        pro_en: "ikh bin ew-ber-tsoygt",
        pro_ar: "إيش بين أوبرتسويغت",
        en: "I am convinced",
        ar: "أنا مقتنع",
        ex: "Ich bin überzeugt, dass er Recht hat. <br><em>(I am convinced that he is right.)</em>",
      },
      {
        de: "Ich stimme zu",
        pro_en: "ikh shtim-muh tsoo",
        pro_ar: "إيش شتيمه تسو",
        en: "I agree",
        ar: "أوافق",
        ex: "Ich stimme dir zu. <br><em>(I agree with you.)</em>",
      },
      {
        de: "Ich bin dagegen",
        pro_en: "ikh bin da-gay-gen",
        pro_ar: "إيش بين داغيغن",
        en: "I am against it",
        ar: "أنا ضد ذلك",
        ex: "Ich bin dagegen. <br><em>(I am against it.)</em>",
      },
      {
        de: "einerseits... andererseits",
        pro_en: "eye-ner-zites... an-de-rer-zites",
        pro_ar: "آينرزايتس... أندررزايتس",
        en: "on one hand... on the other hand",
        ar: "من ناحية... من ناحية أخرى",
        ex: "Einerseits ist es gut, andererseits ist es teuer. <br><em>(On one hand it's good, on the other hand it's expensive.)</em>",
      },

      // --- EDUCATION & STUDIES ---
      {
        de: "der Studiengang",
        pro_en: "dair shtoo-dee-en-gang",
        pro_ar: "دير شتوديينغانغ",
        en: "degree program",
        ar: "البرنامج الدراسي",
        ex: "Mein Studiengang ist Informatik. <br><em>(My degree program is computer science.)</em>",
      },
      {
        de: "der Abschluss",
        pro_en: "dair ap-shloos",
        pro_ar: "دير أبشلوس",
        en: "degree / graduation",
        ar: "الشهادة / التخرج",
        ex: "Ich habe meinen Abschluss gemacht. <br><em>(I got my degree.)</em>",
      },
      {
        de: "das Stipendium",
        pro_en: "das shti-pen-dee-oom",
        pro_ar: "داس شتيبينديوم",
        en: "scholarship",
        ar: "المنحة الدراسية",
        ex: "Ich habe ein Stipendium bekommen. <br><em>(I received a scholarship.)</em>",
      },
      {
        de: "die Forschung",
        pro_en: "dee for-shoong",
        pro_ar: "دي فورشونغ",
        en: "research",
        ar: "البحث العلمي",
        ex: "Die Forschung ist wichtig. <br><em>(Research is important.)</em>",
      },
      {
        de: "die Vorlesung",
        pro_en: "dee for-lay-zoong",
        pro_ar: "دي فورليزونغ",
        en: "lecture",
        ar: "المحاضرة",
        ex: "Die Vorlesung beginnt um 9 Uhr. <br><em>(The lecture starts at 9.)</em>",
      },
      {
        de: "das Seminar",
        pro_en: "das ze-mi-nar",
        pro_ar: "داس زيمينار",
        en: "seminar",
        ar: "الندوة",
        ex: "Das Seminar war interessant. <br><em>(The seminar was interesting.)</em>",
      },
      {
        de: "das Praktikum",
        pro_en: "das prak-ti-koom",
        pro_ar: "داس براكتيكوم",
        en: "internship",
        ar: "التدريب العملي",
        ex: "Ich mache ein Praktikum. <br><em>(I'm doing an internship.)</em>",
      },
      {
        de: "bestehen",
        pro_en: "be-shtay-en",
        pro_ar: "بيشتيين",
        en: "to pass (exam)",
        ar: "ينجح في",
        ex: "Ich habe die Prüfung bestanden. <br><em>(I passed the exam.)</em>",
      },
      {
        de: "durchfallen",
        pro_en: "doorkh-fal-len",
        pro_ar: "دورشفالن",
        en: "to fail (exam)",
        ar: "يرسب في",
        ex: "Er ist durchgefallen. <br><em>(He failed.)</em>",
      },

      // --- ENVIRONMENT ---
      {
        de: "die Umwelt",
        pro_en: "dee oom-velt",
        pro_ar: "دي أومفيلت",
        en: "environment",
        ar: "البيئة",
        ex: "Wir müssen die Umwelt schützen. <br><em>(We must protect the environment.)</em>",
      },
      {
        de: "der Klimawandel",
        pro_en: "dair klee-ma-van-del",
        pro_ar: "دير كليمافاندل",
        en: "climate change",
        ar: "تغير المناخ",
        ex: "Der Klimawandel ist ein Problem. <br><em>(Climate change is a problem.)</em>",
      },
      {
        de: "der Umweltschutz",
        pro_en: "dair oom-velt-shoots",
        pro_ar: "دير أومفيلتشوتس",
        en: "environmental protection",
        ar: "حماية البيئة",
        ex: "Umweltschutz ist wichtig. <br><em>(Environmental protection is important.)</em>",
      },
      {
        de: "erneuerbare Energie",
        pro_en: "er-noy-er-ba-ruh e-ner-gee",
        pro_ar: "إرنويربارة إنرغي",
        en: "renewable energy",
        ar: "الطاقة المتجددة",
        ex: "Wir brauchen erneuerbare Energie. <br><em>(We need renewable energy.)</em>",
      },
      {
        de: "das Recycling",
        pro_en: "das ree-sy-kling",
        pro_ar: "داس ريسايكلينغ",
        en: "recycling",
        ar: "إعادة التدوير",
        ex: "Recycling ist gut für die Umwelt. <br><em>(Recycling is good for the environment.)</em>",
      },
      {
        de: "die Verschmutzung",
        pro_en: "dee fer-shmoo-tsoong",
        pro_ar: "دي فيرشموتسونغ",
        en: "pollution",
        ar: "التلوث",
        ex: "Die Verschmutzung nimmt zu. <br><em>(Pollution is increasing.)</em>",
      },
      {
        de: "der Müll",
        pro_en: "dair mewl",
        pro_ar: "دير مول",
        en: "garbage / waste",
        ar: "القمامة",
        ex: "Wir trennen den Müll. <br><em>(We separate the garbage.)</em>",
      },
      {
        de: "nachhaltig",
        pro_en: "nakh-hal-tikh",
        pro_ar: "ناخهالتيش",
        en: "sustainable",
        ar: "مستدام",
        ex: "Wir brauchen nachhaltige Lösungen. <br><em>(We need sustainable solutions.)</em>",
      },

      // --- TECHNOLOGY ---
      {
        de: "die Technologie",
        pro_en: "dee tekh-no-lo-gee",
        pro_ar: "دي تكنولوغي",
        en: "technology",
        ar: "التكنولوجيا",
        ex: "Die Technologie entwickelt sich schnell. <br><em>(Technology is developing quickly.)</em>",
      },
      {
        de: "das Internet",
        pro_en: "das in-ter-net",
        pro_ar: "داس إنترنت",
        en: "internet",
        ar: "الإنترنت",
        ex: "Ich brauche das Internet. <br><em>(I need the internet.)</em>",
      },
      {
        de: "die Software",
        pro_en: "dee soft-vair",
        pro_ar: "دي سوفتوير",
        en: "software",
        ar: "البرنامج",
        ex: "Die Software ist neu. <br><em>(The software is new.)</em>",
      },
      {
        de: "herunterladen",
        pro_en: "he-roon-ter-lah-den",
        pro_ar: "هيرونترلادن",
        en: "to download",
        ar: "يحمّل",
        ex: "Ich lade die App herunter. <br><em>(I'm downloading the app.)</em>",
      },
      {
        de: "hochladen",
        pro_en: "hokh-lah-den",
        pro_ar: "هوخلادن",
        en: "to upload",
        ar: "يرفع",
        ex: "Ich lade das Foto hoch. <br><em>(I'm uploading the photo.)</em>",
      },
      {
        de: "das Passwort",
        pro_en: "das pas-vort",
        pro_ar: "داس باسفورت",
        en: "password",
        ar: "كلمة المرور",
        ex: "Ich habe mein Passwort vergessen. <br><em>(I forgot my password.)</em>",
      },
      {
        de: "der Datenschutz",
        pro_en: "dair dah-ten-shoots",
        pro_ar: "دير داتنشوتس",
        en: "data protection",
        ar: "حماية البيانات",
        ex: "Datenschutz ist wichtig. <br><em>(Data protection is important.)</em>",
      },
      {
        de: "aktualisieren",
        pro_en: "ak-too-a-li-zee-ren",
        pro_ar: "أكتواليزيرن",
        en: "to update",
        ar: "يحدّث",
        ex: "Ich muss die App aktualisieren. <br><em>(I need to update the app.)</em>",
      },

      // --- MEDIA ---
      {
        de: "die Nachrichten",
        pro_en: "dee nakh-rikh-ten",
        pro_ar: "دي ناخريشتن",
        en: "news",
        ar: "الأخبار",
        ex: "Ich schaue die Nachrichten. <br><em>(I watch the news.)</em>",
      },
      {
        de: "der Bericht",
        pro_en: "dair be-rikht",
        pro_ar: "دير بيريشت",
        en: "report",
        ar: "التقرير",
        ex: "Der Bericht war interessant. <br><em>(The report was interesting.)</em>",
      },
      {
        de: "das Interview",
        pro_en: "das in-ter-vyoo",
        pro_ar: "داس إنترفيو",
        en: "interview",
        ar: "المقابلة",
        ex: "Das Interview war lang. <br><em>(The interview was long.)</em>",
      },
      {
        de: "die Sendung",
        pro_en: "dee zen-doong",
        pro_ar: "دي زيندونغ",
        en: "program / show",
        ar: "البرنامج التلفزيوني",
        ex: "Die Sendung ist um 20 Uhr. <br><em>(The show is at 8 PM.)</em>",
      },
      {
        de: "die Werbung",
        pro_en: "dee vair-boong",
        pro_ar: "دي فيربونغ",
        en: "advertisement",
        ar: "الإعلان",
        ex: "Die Werbung ist laut. <br><em>(The advertisement is loud.)</em>",
      },
      {
        de: "soziale Medien",
        pro_en: "zo-tsee-ah-luh may-dee-en",
        pro_ar: "زوتسياله ميديين",
        en: "social media",
        ar: "وسائل التواصل الاجتماعي",
        ex: "Ich nutze soziale Medien. <br><em>(I use social media.)</em>",
      },

      // --- CONNECTORS ---
      {
        de: "obwohl",
        pro_en: "op-vohl",
        pro_ar: "أوبفول",
        en: "although",
        ar: "بالرغم من",
        ex: "Obwohl es regnet, gehe ich spazieren. <br><em>(Although it's raining, I'm going for a walk.)</em>",
      },
      {
        de: "trotzdem",
        pro_en: "trots-daym",
        pro_ar: "تروتسديم",
        en: "nevertheless",
        ar: "مع ذلك",
        ex: "Es regnet, trotzdem gehe ich. <br><em>(It's raining, nevertheless I'm going.)</em>",
      },
      {
        de: "deshalb",
        pro_en: "des-halp",
        pro_ar: "ديسهالب",
        en: "therefore",
        ar: "لذلك",
        ex: "Ich bin müde, deshalb schlafe ich. <br><em>(I'm tired, therefore I'm sleeping.)</em>",
      },
      {
        de: "außerdem",
        pro_en: "ow-ser-daym",
        pro_ar: "أوسرديم",
        en: "besides / moreover",
        ar: "بالإضافة إلى ذلك",
        ex: "Außerdem ist es teuer. <br><em>(Besides, it's expensive.)</em>",
      },
      {
        de: "jedoch",
        pro_en: "ye-dokh",
        pro_ar: "يدوخ",
        en: "however",
        ar: "ولكن",
        ex: "Es ist schön, jedoch teuer. <br><em>(It's nice, however expensive.)</em>",
      },
      {
        de: "falls",
        pro_en: "fals",
        pro_ar: "فالس",
        en: "in case / if",
        ar: "في حالة",
        ex: "Falls du kommst, ruf mich an. <br><em>(In case you come, call me.)</em>",
      },
      {
        de: "sobald",
        pro_en: "zo-balt",
        pro_ar: "زوبالت",
        en: "as soon as",
        ar: "بمجرد أن",
        ex: "Sobald ich fertig bin, komme ich. <br><em>(As soon as I'm done, I'll come.)</em>",
      },
      {
        de: "während",
        pro_en: "vay-rent",
        pro_ar: "فيرند",
        en: "while / during",
        ar: "بينما / أثناء",
        ex: "Während ich esse, lese ich. <br><em>(While I eat, I read.)</em>",
      },
    ],
    exercises: [
      {
        q: "How do you say 'In my opinion' in German?",
        options: ["Ich denke", "Meiner Meinung nach", "Ich glaube", "Es scheint mir"],
        correct: 1,
      },
      {
        q: "What does 'der Klimawandel' mean?",
        options: ["Weather", "Climate change", "Environment", "Pollution"],
        correct: 1,
      },
      {
        q: "Translate: 'I passed the exam'",
        options: [
          "Ich habe die Prüfung gemacht",
          "Ich habe die Prüfung bestanden",
          "Ich bin durchgefallen",
          "Ich lerne für die Prüfung",
        ],
        correct: 1,
      },
      { q: "What is 'herunterladen'?", options: ["To upload", "To download", "To delete", "To update"], correct: 1 },
      { q: "What does 'obwohl' mean?", options: ["Because", "Therefore", "Although", "However"], correct: 2 },
      {
        q: "How do you say 'sustainable' in German?",
        options: ["umweltfreundlich", "nachhaltig", "erneuerbar", "recycelbar"],
        correct: 1,
      },
    ],
  },
  B2: {
    title: "Level B2: Upper Intermediate",
    desc: "Abstract concepts, politics, business, academic texts, and complex emotions.",
    words: [
      // --- ABSTRACT CONCEPTS ---
      {
        de: "die Gerechtigkeit",
        pro_en: "dee ge-rekh-tikh-kite",
        pro_ar: "دي غيريشتيغكايت",
        en: "justice",
        ar: "العدالة",
        ex: "Gerechtigkeit ist wichtig. <br><em>(Justice is important.)</em>",
      },
      {
        de: "die Freiheit",
        pro_en: "dee fry-hite",
        pro_ar: "دي فرايهايت",
        en: "freedom",
        ar: "الحرية",
        ex: "Freiheit ist ein Grundrecht. <br><em>(Freedom is a basic right.)</em>",
      },
      {
        de: "die Verantwortung",
        pro_en: "dee fer-ant-vor-toong",
        pro_ar: "دي فيرأنتفورتونغ",
        en: "responsibility",
        ar: "المسؤولية",
        ex: "Ich übernehme die Verantwortung. <br><em>(I take responsibility.)</em>",
      },
      {
        de: "die Identität",
        pro_en: "dee ee-den-ti-tayt",
        pro_ar: "دي إيدنتيتيت",
        en: "identity",
        ar: "الهوية",
        ex: "Die kulturelle Identität ist wichtig. <br><em>(Cultural identity is important.)</em>",
      },
      {
        de: "die Moral",
        pro_en: "dee mo-rahl",
        pro_ar: "دي مورال",
        en: "morality",
        ar: "الأخلاق",
        ex: "Die Moral der Geschichte ist klar. <br><em>(The moral of the story is clear.)</em>",
      },
      {
        de: "die Würde",
        pro_en: "dee vewr-duh",
        pro_ar: "دي فورده",
        en: "dignity",
        ar: "الكرامة",
        ex: "Die Würde des Menschen ist unantastbar. <br><em>(Human dignity is inviolable.)</em>",
      },
      {
        de: "das Bewusstsein",
        pro_en: "das be-voost-zine",
        pro_ar: "داس بيفوستزاين",
        en: "consciousness / awareness",
        ar: "الوعي",
        ex: "Das Umweltbewusstsein wächst. <br><em>(Environmental awareness is growing.)</em>",
      },
      {
        de: "die Wahrheit",
        pro_en: "dee vahr-hite",
        pro_ar: "دي فارهايت",
        en: "truth",
        ar: "الحقيقة",
        ex: "Die Wahrheit ist wichtig. <br><em>(The truth is important.)</em>",
      },
      {
        de: "die Hoffnung",
        pro_en: "dee hof-noong",
        pro_ar: "دي هوفنونغ",
        en: "hope",
        ar: "الأمل",
        ex: "Die Hoffnung stirbt zuletzt. <br><em>(Hope dies last.)</em>",
      },

      // --- POLITICS ---
      {
        de: "die Regierung",
        pro_en: "dee re-gee-roong",
        pro_ar: "دي ريغيرونغ",
        en: "government",
        ar: "الحكومة",
        ex: "Die Regierung hat entschieden. <br><em>(The government has decided.)</em>",
      },
      {
        de: "die Demokratie",
        pro_en: "dee de-mo-kra-tee",
        pro_ar: "دي ديموكراتي",
        en: "democracy",
        ar: "الديمقراطية",
        ex: "Demokratie ist wichtig. <br><em>(Democracy is important.)</em>",
      },
      {
        de: "die Wahl",
        pro_en: "dee vahl",
        pro_ar: "دي فال",
        en: "election",
        ar: "الانتخابات",
        ex: "Die Wahl ist nächsten Monat. <br><em>(The election is next month.)</em>",
      },
      {
        de: "die Partei",
        pro_en: "dee par-ty",
        pro_ar: "دي بارتاي",
        en: "political party",
        ar: "الحزب السياسي",
        ex: "Welche Partei wählst du? <br><em>(Which party do you vote for?)</em>",
      },
      {
        de: "das Gesetz",
        pro_en: "das ge-zets",
        pro_ar: "داس غيزيتس",
        en: "law",
        ar: "القانون",
        ex: "Das Gesetz wurde geändert. <br><em>(The law was changed.)</em>",
      },
      {
        de: "die Reform",
        pro_en: "dee re-form",
        pro_ar: "دي ريفورم",
        en: "reform",
        ar: "الإصلاح",
        ex: "Die Reform ist notwendig. <br><em>(The reform is necessary.)</em>",
      },
      {
        de: "die Opposition",
        pro_en: "dee o-po-zi-tsee-ohn",
        pro_ar: "دي أوبوزيتسيون",
        en: "opposition",
        ar: "المعارضة",
        ex: "Die Opposition kritisiert die Regierung. <br><em>(The opposition criticizes the government.)</em>",
      },
      {
        de: "das Parlament",
        pro_en: "das par-la-ment",
        pro_ar: "داس بارلامنت",
        en: "parliament",
        ar: "البرلمان",
        ex: "Das Parlament tagt heute. <br><em>(Parliament meets today.)</em>",
      },
      {
        de: "der Bürger",
        pro_en: "dair bewr-ger",
        pro_ar: "دير بورغر",
        en: "citizen",
        ar: "المواطن",
        ex: "Die Bürger haben gewählt. <br><em>(The citizens have voted.)</em>",
      },

      // --- BUSINESS ---
      {
        de: "das Unternehmen",
        pro_en: "das oon-ter-nay-men",
        pro_ar: "داس أونترنيمن",
        en: "company / enterprise",
        ar: "الشركة",
        ex: "Das Unternehmen wächst. <br><em>(The company is growing.)</em>",
      },
      {
        de: "die Investition",
        pro_en: "dee in-ves-ti-tsee-ohn",
        pro_ar: "دي إنفيستيتسيون",
        en: "investment",
        ar: "الاستثمار",
        ex: "Die Investition war erfolgreich. <br><em>(The investment was successful.)</em>",
      },
      {
        de: "die Aktie",
        pro_en: "dee ak-tsee-uh",
        pro_ar: "دي أكتسيه",
        en: "stock / share",
        ar: "السهم",
        ex: "Die Aktien steigen. <br><em>(The stocks are rising.)</em>",
      },
      {
        de: "die Bilanz",
        pro_en: "dee bi-lants",
        pro_ar: "دي بيلانتس",
        en: "balance sheet",
        ar: "الميزانية",
        ex: "Die Bilanz ist positiv. <br><em>(The balance sheet is positive.)</em>",
      },
      {
        de: "der Gewinn",
        pro_en: "dair ge-vin",
        pro_ar: "دير غيفين",
        en: "profit",
        ar: "الربح",
        ex: "Der Gewinn ist hoch. <br><em>(The profit is high.)</em>",
      },
      {
        de: "der Verlust",
        pro_en: "dair fer-loost",
        pro_ar: "دير فيرلوست",
        en: "loss",
        ar: "الخسارة",
        ex: "Das Unternehmen macht Verlust. <br><em>(The company is making a loss.)</em>",
      },
      {
        de: "der Vertrag",
        pro_en: "dair fer-trahg",
        pro_ar: "دير فيرتراغ",
        en: "contract",
        ar: "العقد",
        ex: "Wir unterschreiben den Vertrag. <br><em>(We sign the contract.)</em>",
      },
      {
        de: "die Verhandlung",
        pro_en: "dee fer-hand-loong",
        pro_ar: "دي فيرهاندلونغ",
        en: "negotiation",
        ar: "المفاوضات",
        ex: "Die Verhandlungen waren schwierig. <br><em>(The negotiations were difficult.)</em>",
      },

      // --- JOB INTERVIEWS ---
      {
        de: "die Bewerbung",
        pro_en: "dee be-vair-boong",
        pro_ar: "دي بيفيربونغ",
        en: "application",
        ar: "طلب التوظيف",
        ex: "Ich schreibe eine Bewerbung. <br><em>(I'm writing an application.)</em>",
      },
      {
        de: "der Lebenslauf",
        pro_en: "dair lay-bens-lowf",
        pro_ar: "دير ليبنسلاوف",
        en: "CV / resume",
        ar: "السيرة الذاتية",
        ex: "Mein Lebenslauf ist aktuell. <br><em>(My CV is up to date.)</em>",
      },
      {
        de: "die Qualifikation",
        pro_en: "dee kva-li-fi-ka-tsee-ohn",
        pro_ar: "دي كفاليفيكاتسيون",
        en: "qualification",
        ar: "المؤهل",
        ex: "Welche Qualifikationen haben Sie? <br><em>(What qualifications do you have?)</em>",
      },
      {
        de: "die Stärke",
        pro_en: "dee shter-kuh",
        pro_ar: "دي شتيركه",
        en: "strength",
        ar: "نقطة القوة",
        ex: "Was sind Ihre Stärken? <br><em>(What are your strengths?)</em>",
      },
      {
        de: "die Schwäche",
        pro_en: "dee shve-khuh",
        pro_ar: "دي شفيشه",
        en: "weakness",
        ar: "نقطة الضعف",
        ex: "Was sind Ihre Schwächen? <br><em>(What are your weaknesses?)</em>",
      },
      {
        de: "die Erfahrung",
        pro_en: "dee er-fah-roong",
        pro_ar: "دي إرفارونغ",
        en: "experience",
        ar: "الخبرة",
        ex: "Ich habe viel Erfahrung. <br><em>(I have a lot of experience.)</em>",
      },
      {
        de: "die Motivation",
        pro_en: "dee mo-ti-va-tsee-ohn",
        pro_ar: "دي موتيفاتسيون",
        en: "motivation",
        ar: "الدافع",
        ex: "Was ist Ihre Motivation? <br><em>(What is your motivation?)</em>",
      },

      // --- ACADEMIC ---
      {
        de: "die Hypothese",
        pro_en: "dee hew-po-tay-zuh",
        pro_ar: "دي هيبوتيزه",
        en: "hypothesis",
        ar: "الفرضية",
        ex: "Die Hypothese wurde bestätigt. <br><em>(The hypothesis was confirmed.)</em>",
      },
      {
        de: "die Analyse",
        pro_en: "dee a-na-lew-zuh",
        pro_ar: "دي أناليزه",
        en: "analysis",
        ar: "التحليل",
        ex: "Die Analyse ist komplex. <br><em>(The analysis is complex.)</em>",
      },
      {
        de: "die Methodik",
        pro_en: "dee me-toh-dik",
        pro_ar: "دي ميتوديك",
        en: "methodology",
        ar: "المنهجية",
        ex: "Die Methodik ist wichtig. <br><em>(The methodology is important.)</em>",
      },
      {
        de: "das Ergebnis",
        pro_en: "das er-gayp-nis",
        pro_ar: "داس إرغيبنيس",
        en: "result",
        ar: "النتيجة",
        ex: "Das Ergebnis ist positiv. <br><em>(The result is positive.)</em>",
      },
      {
        de: "die Schlussfolgerung",
        pro_en: "dee shloos-fol-ge-roong",
        pro_ar: "دي شلوسفولغيرونغ",
        en: "conclusion",
        ar: "الاستنتاج",
        ex: "Die Schlussfolgerung ist klar. <br><em>(The conclusion is clear.)</em>",
      },
      {
        de: "die Quelle",
        pro_en: "dee kvel-luh",
        pro_ar: "دي كفيله",
        en: "source",
        ar: "المصدر",
        ex: "Die Quelle ist zuverlässig. <br><em>(The source is reliable.)</em>",
      },
      {
        de: "das Zitat",
        pro_en: "das tsi-taht",
        pro_ar: "داس تسيتات",
        en: "quote / citation",
        ar: "الاقتباس",
        ex: "Das Zitat ist bekannt. <br><em>(The quote is well-known.)</em>",
      },

      // --- COMPLEX EMOTIONS ---
      {
        de: "die Sehnsucht",
        pro_en: "dee zayn-zookht",
        pro_ar: "دي زينزوخت",
        en: "longing / yearning",
        ar: "الشوق",
        ex: "Ich habe Sehnsucht nach Hause. <br><em>(I'm longing for home.)</em>",
      },
      {
        de: "die Verzweiflung",
        pro_en: "dee fer-tsvife-loong",
        pro_ar: "دي فيرتسفايفلونغ",
        en: "despair",
        ar: "اليأس",
        ex: "Er war voller Verzweiflung. <br><em>(He was full of despair.)</em>",
      },
      {
        de: "die Begeisterung",
        pro_en: "dee be-gys-te-roong",
        pro_ar: "دي بيغايسترونغ",
        en: "enthusiasm",
        ar: "الحماس",
        ex: "Die Begeisterung war groß. <br><em>(The enthusiasm was great.)</em>",
      },
      {
        de: "die Enttäuschung",
        pro_en: "dee ent-toy-shoong",
        pro_ar: "دي إنتويشونغ",
        en: "disappointment",
        ar: "خيبة الأمل",
        ex: "Die Enttäuschung war groß. <br><em>(The disappointment was great.)</em>",
      },
      {
        de: "die Zuneigung",
        pro_en: "dee tsoo-ny-goong",
        pro_ar: "دي تسونايغونغ",
        en: "affection",
        ar: "المودة",
        ex: "Ich empfinde Zuneigung für sie. <br><em>(I feel affection for her.)</em>",
      },
      {
        de: "die Reue",
        pro_en: "dee roy-uh",
        pro_ar: "دي رويه",
        en: "regret / remorse",
        ar: "الندم",
        ex: "Er zeigt keine Reue. <br><em>(He shows no remorse.)</em>",
      },
      {
        de: "die Eifersucht",
        pro_en: "dee eye-fer-zookht",
        pro_ar: "دي آيفرزوخت",
        en: "jealousy",
        ar: "الغيرة",
        ex: "Eifersucht ist gefährlich. <br><em>(Jealousy is dangerous.)</em>",
      },
      {
        de: "die Dankbarkeit",
        pro_en: "dee dank-bar-kite",
        pro_ar: "دي دانكباركايت",
        en: "gratitude",
        ar: "الامتنان",
        ex: "Ich empfinde große Dankbarkeit. <br><em>(I feel great gratitude.)</em>",
      },

      // --- KONJUNKTIV II ---
      {
        de: "Wenn ich reich wäre",
        pro_en: "ven ikh rykh vay-ruh",
        pro_ar: "فين إيش رايش فيره",
        en: "If I were rich",
        ar: "لو كنت غنياً",
        ex: "Wenn ich reich wäre, würde ich reisen. <br><em>(If I were rich, I would travel.)</em>",
      },
      {
        de: "Ich hätte gern",
        pro_en: "ikh het-tuh gairn",
        pro_ar: "إيش هيته غيرن",
        en: "I would like",
        ar: "أود أن يكون لدي",
        ex: "Ich hätte gern einen Kaffee. <br><em>(I would like a coffee.)</em>",
      },
      {
        de: "Könnten Sie mir helfen?",
        pro_en: "kurn-ten zee meer hel-fen",
        pro_ar: "كونتن زي مير هيلفن",
        en: "Could you help me?",
        ar: "هل يمكنك مساعدتي؟",
        ex: "Könnten Sie mir bitte helfen? <br><em>(Could you please help me?)</em>",
      },
      {
        de: "Das wäre schön",
        pro_en: "das vay-ruh shurn",
        pro_ar: "داس فيره شون",
        en: "That would be nice",
        ar: "سيكون ذلك جميلاً",
        ex: "Das wäre wirklich schön. <br><em>(That would be really nice.)</em>",
      },
      {
        de: "Ich würde sagen",
        pro_en: "ikh vewr-duh zah-gen",
        pro_ar: "إيش فورده زاغن",
        en: "I would say",
        ar: "أود أن أقول",
        ex: "Ich würde sagen, das ist richtig. <br><em>(I would say that is correct.)</em>",
      },

      // --- ADVANCED NEGATION ---
      {
        de: "kaum",
        pro_en: "kowm",
        pro_ar: "كاوم",
        en: "hardly / barely",
        ar: "بالكاد",
        ex: "Ich kann kaum glauben. <br><em>(I can hardly believe it.)</em>",
      },
      {
        de: "weder... noch",
        pro_en: "vay-der... nokh",
        pro_ar: "فيدر... نوخ",
        en: "neither... nor",
        ar: "لا... ولا",
        ex: "Weder er noch sie kam. <br><em>(Neither he nor she came.)</em>",
      },
      {
        de: "keineswegs",
        pro_en: "ky-nes-vaygs",
        pro_ar: "كاينسفيغس",
        en: "by no means",
        ar: "بأي حال من الأحوال",
        ex: "Das ist keineswegs richtig. <br><em>(That is by no means correct.)</em>",
      },
      {
        de: "niemals",
        pro_en: "nee-mahls",
        pro_ar: "نيمالس",
        en: "never",
        ar: "أبداً",
        ex: "Ich werde das niemals vergessen. <br><em>(I will never forget that.)</em>",
      },
    ],
    exercises: [
      {
        q: "What does 'die Gerechtigkeit' mean?",
        options: ["Freedom", "Justice", "Responsibility", "Truth"],
        correct: 1,
      },
      {
        q: "How do you say 'government' in German?",
        options: ["die Partei", "das Parlament", "die Regierung", "die Wahl"],
        correct: 2,
      },
      {
        q: "What is 'der Lebenslauf'?",
        options: ["Cover letter", "CV / Resume", "Application", "Interview"],
        correct: 1,
      },
      {
        q: "Translate: 'If I were rich'",
        options: ["Wenn ich reich bin", "Wenn ich reich wäre", "Ich bin reich", "Ich werde reich"],
        correct: 1,
      },
      {
        q: "What does 'die Sehnsucht' mean?",
        options: ["Happiness", "Sadness", "Longing / Yearning", "Anger"],
        correct: 2,
      },
      {
        q: "What does 'weder... noch' mean?",
        options: ["Either... or", "Neither... nor", "Both... and", "Not only... but also"],
        correct: 1,
      },
    ],
  },
}

// --- Level Info ---
const levelInfo = {
  A1: {
    title: "Level A1: Absolute Beginner",
    desc: "Essential vocabulary for daily life, greetings, family, numbers, and basic needs.",
  },
  A2: { title: "Level A2: Elementary", desc: "Daily routine, shopping, work, travel, health, and simple past events." },
  B1: {
    title: "Level B1: Intermediate",
    desc: "Opinions, education, environment, health, media, and expressing complex ideas.",
  },
  B2: {
    title: "Level B2: Upper Intermediate",
    desc: "Abstract concepts, politics, business, academic texts, and complex emotions.",
  },
}

// --- State ---
let currentLevel = "A1"
let currentView = "dictionary"
let currentPage = "dictionary-page"

// --- DOM Elements ---
const levelBtns = document.querySelectorAll(".level-btn")
const toggleBtns = document.querySelectorAll(".toggle-btn")
const mainNavBtns = document.querySelectorAll(".main-nav-btn")
const dictionaryBody = document.getElementById("dictionary-body")
const exercisesContainer = document.getElementById("exercises-container")
const levelTitle = document.getElementById("current-level-title")
const levelDesc = document.getElementById("current-level-desc")
const searchInput = document.getElementById("dict-search")

// --- Functions ---
function renderDictionary(words) {
  if (!dictionaryBody) return
  dictionaryBody.innerHTML = words
    .map(
      (w) => `
        <tr>
            <td class="col-de">${w.de}</td>
            <td class="col-pron-en">${w.pro_en}</td>
            <td class="col-pron-ar" dir="rtl">${w.pro_ar}</td>
            <td class="col-en">${w.en}</td>
            <td class="col-ar" dir="rtl">${w.ar}</td>
            <td class="col-ex">${w.ex}</td>
        </tr>
    `,
    )
    .join("")
}

function renderExercises(exercises) {
  if (!exercisesContainer) return
  exercisesContainer.innerHTML = exercises
    .map(
      (ex, i) => `
        <div class="exercise-card">
            <h3>Exercise ${i + 1}</h3>
            <p class="exercise-question">${ex.q}</p>
            <div class="options-grid">
                ${ex.options
                  .map(
                    (opt, j) => `
                    <button class="option-btn" data-correct="${j === ex.correct}" onclick="checkAnswer(this)">${opt}</button>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("")
}

function loadLevel(level) {
  currentLevel = level
  const data = dictionaryData[level]
  if (!data) return

  // Update level info
  if (levelTitle) levelTitle.textContent = data.title
  if (levelDesc) levelDesc.textContent = data.desc

  // Render content
  renderDictionary(data.words)
  renderExercises(data.exercises)

  // Update active button
  levelBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.level === level)
  })

  // Clear search
  if (searchInput) searchInput.value = ""
}

function switchView(view) {
  currentView = view
  document.getElementById("dictionary-view")?.classList.toggle("active", view === "dictionary")
  document.getElementById("exercises-view")?.classList.toggle("active", view === "exercises")
  toggleBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view)
  })
}

function switchPage(page) {
  currentPage = page
  document.querySelectorAll(".page-content").forEach((p) => {
    p.classList.toggle("active", p.id === page)
  })
  mainNavBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === page)
  })
}

function checkAnswer(btn) {
  const isCorrect = btn.dataset.correct === "true"
  btn.classList.add(isCorrect ? "correct" : "wrong")

  // Disable all buttons in this exercise
  const parent = btn.closest(".options-grid")
  parent.querySelectorAll(".option-btn").forEach((b) => {
    b.disabled = true
    if (b.dataset.correct === "true") b.classList.add("correct")
  })
}

function filterDictionary(query) {
  const data = dictionaryData[currentLevel]
  if (!data) return

  const q = query.toLowerCase().trim()
  if (!q) {
    renderDictionary(data.words)
    return
  }

  const filtered = data.words.filter(
    (w) => w.de.toLowerCase().includes(q) || w.en.toLowerCase().includes(q) || w.ar.includes(q) || w.pro_ar.includes(q),
  )
  renderDictionary(filtered)
}

// --- Event Listeners ---
levelBtns.forEach((btn) => {
  btn.addEventListener("click", () => loadLevel(btn.dataset.level))
})

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => switchView(btn.dataset.view))
})

mainNavBtns.forEach((btn) => {
  btn.addEventListener("click", () => switchPage(btn.dataset.page))
})

if (searchInput) {
  searchInput.addEventListener("input", (e) => filterDictionary(e.target.value))
}

// --- Level Cards (Collapsible) ---
document.querySelectorAll(".level-card-header").forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.closest(".level-card")
    const isOpen = card.classList.contains("open")

    // Close all other cards
    document.querySelectorAll(".level-card").forEach((c) => c.classList.remove("open"))

    // Toggle current card
    if (!isOpen) {
      card.classList.add("open")
      header.setAttribute("aria-expanded", "true")
    } else {
      header.setAttribute("aria-expanded", "false")
    }
  })
})

// --- 3D Background Animation ---
const canvas = document.getElementById("scene")
const ctx = canvas.getContext("2d")

let particles = []
const particleCount = 80
let mouseX = 0
let mouseY = 0

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function createParticles() {
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
    })
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 150) {
        const opacity = (1 - dist / 150) * 0.3
        ctx.beginPath()
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  // Draw particles
  particles.forEach((p) => {
    const perspective = 1000 / (1000 + p.z)
    const screenX = p.x * perspective + (canvas.width / 2) * (1 - perspective)
    const screenY = p.y * perspective + (canvas.height / 2) * (1 - perspective)
    const size = p.size * perspective

    ctx.beginPath()
    ctx.arc(screenX, screenY, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(6, 182, 212, ${0.5 * perspective})`
    ctx.fill()

    // Update position
    p.x += p.vx + (mouseX - canvas.width / 2) * 0.00005
    p.y += p.vy + (mouseY - canvas.height / 2) * 0.00005
    p.z -= 0.5

    // Reset if out of bounds
    if (p.z < 1) p.z = 1000
    if (p.x < 0) p.x = canvas.width
    if (p.x > canvas.width) p.x = 0
    if (p.y < 0) p.y = canvas.height
    if (p.y > canvas.height) p.y = 0
  })

  requestAnimationFrame(drawParticles)
}

// Mouse tracking
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

// Initialize
window.addEventListener("resize", () => {
  resizeCanvas()
  createParticles()
})

resizeCanvas()
createParticles()
drawParticles()
loadLevel("A1")
