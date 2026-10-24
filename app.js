/* Vital Organs — FA/EN gallery + university quiz */

const UI = {
  fa: {
    brand: "اندام‌های حیاتی",
    title: "اندام‌های حیاتی بدن",
    hook: "هشت اندام کلیدی بدن به همراه بیماری های آنها را بشناسید",
    progressLabel: "پیشرفت کاوش",
    galleryTitle: "گالری اندام‌ها",
    galleryHint: "روی هر کارت بزنید تا جزئیات باز شود",
    quizTitle: "آزمون",
    quizHint: "۱۸ پرسش دانشگاهی · آناتومی، فیزیولوژی و پاتولوژی",
    prev: "قبلی",
    next: "بعدی",
    finish: "پایان",
    restart: "شروع دوباره",
    fnLabel: "کارکرد و فیزیولوژی",
    factLabel: "نکات آناتومی و فیزیولوژی",
    diseaseLabel: "بیماری‌ها (شایع و نادر)",
    mild: "خفیف",
    mod: "متوسط",
    sev: "شدید",
    rare: "نادر",
    explainLabel: "توضیح",
    result: (s, t) => `نتیجه شما: ${toFa(s)} از ${toFa(t)}`,
    resultHint: (s, t) => {
      const p = s / t;
      if (p >= 0.85) return "عالی — سطح دانشگاهی قوی.";
      if (p >= 0.65) return "خوب — چند مبحث را دوباره مرور کنید.";
      if (p >= 0.45) return "متوسط — گالری و توضیحات بیماری‌ها را بازخوانی کنید.";
      return "نیاز به مرور بیشتر دارید — از جزئیات هر اندام شروع کنید.";
    },
  },
  en: {
    brand: "Vital Organs",
    title: "Vital Organs of the Body",
    hook: "Learn the eight key organs of the body and their diseases.",
    progressLabel: "Exploration progress",
    galleryTitle: "Organ gallery",
    galleryHint: "Tap a card to open details",
    quizTitle: "Quiz",
    quizHint: "18 university questions · anatomy, physiology & pathology",
    prev: "Prev",
    next: "Next",
    finish: "Finish",
    restart: "Restart",
    fnLabel: "Function & physiology",
    factLabel: "Anatomy & physiology notes",
    diseaseLabel: "Diseases (common & rare)",
    mild: "Mild",
    mod: "Moderate",
    sev: "Severe",
    rare: "Rare",
    explainLabel: "Explanation",
    result: (s, t) => `Your score: ${s} / ${t}`,
    resultHint: (s, t) => {
      const p = s / t;
      if (p >= 0.85) return "Excellent — strong university-level mastery.";
      if (p >= 0.65) return "Good — revisit a few topics.";
      if (p >= 0.45) return "Fair — reread organ sheets and disease notes.";
      return "Needs more review — start from each organ’s detail sheet.";
    },
  },
};

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
function toFa(n) {
  return String(n).replace(/\d/g, (d) => FA_DIGITS[d]);
}

/** Anatomical organ images (generated textbook-style illustrations) */
const ORGAN_IMG = {
  brain: "images/brain.webp",
  eyes: "images/eyes.webp",
  heart: "images/heart.webp",
  lungs: "images/lungs.webp",
  liver: "images/liver.webp",
  stomach: "images/stomach.webp",
  pancreas: "images/pancreas.webp",
  kidneys: "images/kidneys.webp",
};

function organImg(key, alt) {
  const src = ORGAN_IMG[key];
  return `<img src="${src}" alt="${alt}" width="256" height="256" loading="lazy" decoding="async" />`;
}

const ORGANS = [
  {
    id: "brain",
    fa: "مغز",
    en: "Brain",
    svg: "brain",
    fn: {
      fa: "مغز بخش مرکزی دستگاه عصبی است که اطلاعات حسی را یکپارچه می‌کند، حرکات ارادی و بسیاری از بازتاب‌ها را کنترل می‌نماید، و کارکردهای عالی مانند زبان، حافظه، تصمیم‌گیری و تنظیم هیجان را پشتیبانی می‌کند. ساقه مغز تنفس، ضربان قلب و هوشیاری پایه را تنظیم می‌کند؛ مخچه هماهنگی حرکت و تعادل را بر عهده دارد؛ و قشر مخ مناطق حسی، حرکتی و ارتباطی را سازمان می‌دهد.",
      en: "The brain is the central nervous system hub that integrates sensory input, controls voluntary movement and many reflexes, and supports higher functions such as language, memory, decision-making, and emotion regulation. The brainstem regulates breathing, heart rate, and basal arousal; the cerebellum coordinates movement and balance; and the cerebral cortex organizes sensory, motor, and association areas.",
    },
    facts: [
      { fa: "دو نیمکره توسط جسم پینه‌ای (corpus callosum) به هم متصل‌اند و شیار طولی آن‌ها را جدا می‌کند.", en: "The two hemispheres are linked by the corpus callosum and separated by the longitudinal fissure." },
      { fa: "سد خونی–مغزی ورود بسیاری از مواد را محدود می‌کند و محیط نورون‌ها را پایدار نگه می‌دارد.", en: "The blood–brain barrier limits entry of many substances and stabilizes the neuronal microenvironment." },
      { fa: "مغز حدود ۲٪ وزن بدن است اما نزدیک ۲۰٪ مصرف اکسیژن و گلوکز در حال استراحت را دارد.", en: "The brain is ~2% of body weight yet uses nearly 20% of resting oxygen and glucose." },
      { fa: "مایع مغزی–نخاعی (CSF) در بطن‌ها جریان دارد و نقش ضربه‌گیر و دفع متابولیت دارد.", en: "CSF circulates in the ventricles and cushions the brain while helping clear metabolites." },
    ],
    diseases: [
      { fa: "سکته مغزی (Stroke)", en: "Stroke", sev: "sev", rare: false, desc: { fa: "قطع ناگهانی خونرسانی (ایسکمیک) یا خونریزی داخل مغز؛ علائم کانونی مانند ضعف یک‌طرفه، اختلال گفتار یا بینایی. اورژانس زمانی است.", en: "Sudden loss of blood flow (ischemic) or intracranial bleeding; focal signs such as unilateral weakness, speech or vision loss. Time-critical emergency." } },
      { fa: "صرع", en: "Epilepsy", sev: "mod", rare: false, desc: { fa: "تمایل مزمن به تشنج به‌دلیل فعالیت الکتریکی غیرطبیعی نورون‌ها؛ می‌تواند کانونی یا جنرالیزه باشد.", en: "Chronic predisposition to seizures from abnormal neuronal electrical activity; may be focal or generalized." } },
      { fa: "بیماری آلزایمر", en: "Alzheimer’s disease", sev: "sev", rare: false, desc: { fa: "شایع‌ترین دمانس؛ تجمع پلاک آمیلوئید و توده‌های تاو با تحلیل پیش‌رونده حافظه و شناخت.", en: "Most common dementia; amyloid plaques and tau tangles with progressive memory and cognitive decline." } },
      { fa: "میگرن", en: "Migraine", sev: "mild", rare: false, desc: { fa: "سردرد ضربان‌دار اغلب یک‌طرفه با تهوع، حساسیت به نور/صدا؛ گاهی اورا عصبی پیش از حمله.", en: "Pulsatile often unilateral headache with nausea and light/sound sensitivity; may have neurologic aura." } },
      { fa: "بیماری هانتینگتون", en: "Huntington’s disease", sev: "sev", rare: true, desc: { fa: "نادر و ارثی (اتوزومال غالب)؛ تکرار CAG در ژن HTT باعث کره‌، تغییرات رفتاری و دمانس پیش‌رونده می‌شود.", en: "Rare autosomal-dominant disorder; CAG repeats in HTT cause chorea, behavioral change, and progressive dementia." } },
      { fa: "بیماری ویلسون (درگیری عصبی)", en: "Wilson disease (neuro form)", sev: "sev", rare: true, desc: { fa: "اختلال نادر متابولیسم مس؛ رسوب در عقده‌های قاعده‌ای می‌تواند لرزش، دیستونی و اختلال روان ایجاد کند.", en: "Rare copper-metabolism disorder; basal-ganglia deposition can cause tremor, dystonia, and psychiatric signs." } },
    ],
  },
  {
    id: "eyes",
    fa: "چشم‌ها",
    en: "Eyes",
    svg: "eyes",
    fn: {
      fa: "چشم نور را از قرنیه و عدسی متمرکز می‌کند تا روی شبکیه تصویر بسازد. گیرنده‌های میله‌ای و مخروطی سیگنال را به تکانه‌های عصبی تبدیل می‌کنند که از طریق عصب بینایی و مسیرهای بینایی به قشر اکسی‌پیتال می‌رسند. مردمک میزان نور ورودی را تنظیم می‌کند و عضلات خارج‌چشمی جهت نگاه و همگرایی را کنترل می‌کنند.",
      en: "The eye focuses light through the cornea and lens onto the retina. Rods and cones convert photons into neural impulses that travel via the optic nerve and visual pathways to the occipital cortex. The pupil regulates incoming light; extraocular muscles control gaze direction and convergence.",
    },
    facts: [
      { fa: "اتاق قدامی حاوی زلالیه است؛ مسیر خروج آن برای فشار داخل‌چشمی حیاتی است.", en: "The anterior chamber holds aqueous humor; its outflow path is critical for intraocular pressure." },
      { fa: "نقطه کور محل خروج عصب بینایی است و گیرنده نوری ندارد.", en: "The blind spot is the optic nerve head and has no photoreceptors." },
      { fa: "ماکولا (به‌ویژه فووهآ) بیشترین حدت بینایی مرکزی را فراهم می‌کند.", en: "The macula (especially the fovea) provides the highest central visual acuity." },
      { fa: "اشک لایه محافظ و تغذیه‌کننده سطح چشم است؛ اختلال آن باعث خشکی چشم می‌شود.", en: "The tear film protects and nourishes the ocular surface; its failure causes dry eye." },
    ],
    diseases: [
      { fa: "آب‌مروارید (کاتاراکت)", en: "Cataract", sev: "mod", rare: false, desc: { fa: "کدر شدن عدسی با کاهش تدریجی دید؛ شایع با افزایش سن، قابل درمان با جراحی تعویض عدسی.", en: "Lens opacification with gradual vision loss; age-related and treatable by lens replacement surgery." } },
      { fa: "گلوکوم (آب‌سیاه)", en: "Glaucoma", sev: "sev", rare: false, desc: { fa: "آسیب عصب بینایی اغلب مرتبط با افزایش فشار داخل‌چشمی؛ می‌تواند دید محیطی را بی‌علامت از بین ببرد.", en: "Optic-nerve damage often linked to raised intraocular pressure; can silently erode peripheral vision." } },
      { fa: "دژنراسیون ماکولا وابسته به سن", en: "Age-related macular degeneration", sev: "sev", rare: false, desc: { fa: "تخریب ماکولا باعث افت دید مرکزی می‌شود؛ فرم مرطوب با نئوواسکولاریزاسیون خطرناک‌تر است.", en: "Macular damage impairs central vision; the wet form with neovascularization is more aggressive." } },
      { fa: "خشکی چشم", en: "Dry eye disease", sev: "mild", rare: false, desc: { fa: "اختلال لایه اشکی با سوزش، احساس جسم خارجی و تاری متناوب؛ عوامل محیطی و التهاب نقش دارند.", en: "Tear-film dysfunction with burning, foreign-body sensation, and fluctuating blur; environment and inflammation matter." } },
      { fa: "رتینیت پیگمانتوزا", en: "Retinitis pigmentosa", sev: "sev", rare: true, desc: { fa: "گروهی از دیستروفی‌های نادر ارثی شبکیه؛ شب‌کوری و تنگ شدن میدان بینایی پیش‌رونده از ویژگی‌هاست.", en: "Group of rare inherited retinal dystrophies; night blindness and progressive visual-field constriction are typical." } },
      { fa: "قوز قرنیه پیشرفته / هیدروپس حاد", en: "Advanced keratoconus / acute hydrops", sev: "mod", rare: true, desc: { fa: "نازک و مخروطی شدن قرنیه؛ در موارد نادر پارگی غشای دسمه با ادم حاد و افت ناگهانی دید رخ می‌دهد.", en: "Corneal thinning into a cone; rarely Descemet rupture causes acute edema and sudden vision drop." } },
    ],
  },
  {
    id: "heart",
    fa: "قلب",
    en: "Heart",
    svg: "heart",
    fn: {
      fa: "قلب یک پمپ عضلانی چهارحفره‌ای است: دهلیز و بطن راست خون را به گردش ریوی می‌فرستند و دهلیز و بطن چپ خون اکسیژن‌دار را به گردش سیستمیک پمپ می‌کنند. گره سینوسی–دهلیزی ریتم ذاتی ایجاد می‌کند؛ سیستم هدایتی (AV node، دسته هیس، فیبرهای پورکنژ) انقباض هماهنگ را هدایت می‌نماید. برون‌ده قلبی به پیش‌بار، پس‌بار و قدرت انقباضی بستگی دارد.",
      en: "The heart is a four-chamber muscular pump: right atrium and ventricle send blood to the pulmonary circuit; left atrium and ventricle pump oxygenated blood into the systemic circuit. The sinoatrial node sets intrinsic rhythm; the conduction system (AV node, His bundle, Purkinje fibers) coordinates contraction. Cardiac output depends on preload, afterload, and contractility.",
    },
    facts: [
      { fa: "دریچه‌های دهلیزی–بطنی (میترال و تریکوسپید) و سینی‌لونی (آئورت و پولمونر) از برگشت خون جلوگیری می‌کنند.", en: "AV valves (mitral, tricuspid) and semilunar valves (aortic, pulmonary) prevent backflow." },
      { fa: "شریان‌های کرونری در دیاستول بیشتر خونرسانی میوکارد را تأمین می‌کنند.", en: "Coronary arteries supply most myocardial blood flow during diastole." },
      { fa: "دیواره بطن چپ ضخیم‌تر است چون باید فشار سیستمیک بالاتری تولید کند.", en: "The left ventricular wall is thicker because it generates higher systemic pressure." },
      { fa: "ECG فعالیت الکتریکی را ثبت می‌کند: موج P (دهلیز)، QRS (بطن)، موج T (ریپلاریزاسیون).", en: "The ECG records electrical activity: P wave (atria), QRS (ventricles), T wave (repolarization)." },
    ],
    diseases: [
      { fa: "سکته قلبی (انفارکتوس میوکارد)", en: "Myocardial infarction", sev: "sev", rare: false, desc: { fa: "معمولاً به‌دلیل ترومبوز روی پلاک آترواسکلروز کرونری؛ درد قفسه سینه، تنگی نفس، افزایش تروپونین.", en: "Usually coronary thrombosis on atherosclerotic plaque; chest pain, dyspnea, elevated troponin." } },
      { fa: "نارسایی قلبی", en: "Heart failure", sev: "sev", rare: false, desc: { fa: "قلب نمی‌تواند برون‌ده کافی تأمین کند؛ احتقان ریوی، ادم محیطی و کاهش تحمل فعالیت شایع است.", en: "Heart cannot maintain adequate output; pulmonary congestion, edema, and reduced exercise tolerance are common." } },
      { fa: "آریتمی (مثلاً فیبریلاسیون دهلیزی)", en: "Arrhythmia (e.g. atrial fibrillation)", sev: "mod", rare: false, desc: { fa: "اختلال ریتم؛ AF شایع است و خطر سکته آمبولیک را افزایش می‌دهد.", en: "Rhythm disorder; AF is common and raises embolic stroke risk." } },
      { fa: "پرفشاری خون", en: "Hypertension", sev: "mod", rare: false, desc: { fa: "فشار شریانی مزمن بالا؛ عامل خطر اصلی برای سکته، سکته قلبی و بیماری کلیه.", en: "Chronically elevated arterial pressure; major risk factor for stroke, MI, and kidney disease." } },
      { fa: "کاردیومیوپاتی هیپرتروفیک", en: "Hypertrophic cardiomyopathy", sev: "sev", rare: true, desc: { fa: "بیماری ژنتیکی میوکارد با هیپرتروفی نامتناسب؛ می‌تواند انسداد خروجی بطن چپ و مرگ ناگهانی در جوانان ایجاد کند.", en: "Genetic myocardial disease with inappropriate hypertrophy; may cause LVOT obstruction and sudden death in the young." } },
      { fa: "اندوکاردیت عفونی", en: "Infective endocarditis", sev: "sev", rare: true, desc: { fa: "عفونت نادر پوشش داخلی قلب؛ تب، سوفل جدید، آمبولی سپتیک؛ تشخیص با کشت خون و اکوکاردیوگرافی.", en: "Uncommon infection of the endocardium; fever, new murmur, septic emboli; diagnosed with blood cultures and echocardiography." } },
    ],
  },
  {
    id: "lungs",
    fa: "ریه‌ها",
    en: "Lungs",
    svg: "lungs",
    fn: {
      fa: "ریه‌ها محل تبادل گازند: در آلوئول‌ها اکسیژن به خون وارد و دی‌اکسیدکربن خارج می‌شود. تهویه توسط دیافراگم و عضلات تنفسی کنترل می‌شود و پرفیوژن باید با تهویه هماهنگ باشد (نسبت V/Q). سورفاکتانت کشش سطحی آلوئول را کم می‌کند تا کلاپس رخ ندهد.",
      en: "The lungs perform gas exchange: in alveoli oxygen enters blood and CO₂ leaves. Ventilation is driven by the diaphragm and respiratory muscles and must match perfusion (V/Q matching). Surfactant lowers alveolar surface tension to prevent collapse.",
    },
    facts: [
      { fa: "ریه راست معمولاً سه لوب و ریه چپ دو لوب دارد (فضای قلبی).", en: "The right lung usually has three lobes; the left has two (cardiac space)." },
      { fa: "درخت برونشی تا برونشیول‌های ترمینال و سپس آلوئول ادامه می‌یابد.", en: "The bronchial tree continues to terminal bronchioles and then alveoli." },
      { fa: "سطح تبادل گازی آلوئولی تقریباً به اندازه یک زمین تنیس است.", en: "Alveolar gas-exchange surface is roughly the area of a tennis court." },
      { fa: "هیپوکسی آلوئولی باعث انقباض عروق ریوی می‌شود تا خون به نواحی بهتر تهویه‌شده برود.", en: "Alveolar hypoxia triggers pulmonary vasoconstriction to redirect blood to better-ventilated regions." },
    ],
    diseases: [
      { fa: "آسم", en: "Asthma", sev: "mod", rare: false, desc: { fa: "التهاب مزمن راه‌های هوایی با انسداد برگشت‌پذیر؛ خس‌خس، تنگی نفس و هایپرپاسخ‌دهی برونش.", en: "Chronic airway inflammation with reversible obstruction; wheeze, dyspnea, and bronchial hyperresponsiveness." } },
      { fa: "ذات‌الریه (پنومونی)", en: "Pneumonia", sev: "sev", rare: false, desc: { fa: "عفونت پارانشیم ریه؛ تب، سرفه، نفوذ در تصویربرداری؛ می‌تواند هیپوکسمی شدید ایجاد کند.", en: "Infection of lung parenchyma; fever, cough, radiographic infiltrate; can cause severe hypoxemia." } },
      { fa: "COPD", en: "COPD", sev: "sev", rare: false, desc: { fa: "انسداد مزمن معمولاً مرتبط با سیگار؛ آمفیزم و برونشیت مزمن؛ محدودیت جریان هوا اغلب برگشت‌ناپذیر.", en: "Chronic obstruction usually smoking-related; emphysema and chronic bronchitis; airflow limitation often irreversible." } },
      { fa: "آمبولی ریه", en: "Pulmonary embolism", sev: "sev", rare: false, desc: { fa: "لخته معمولاً از وریدهای عمقی پا به شریان ریوی می‌رود؛ تنگی نفس ناگهانی و هیپوکسمی.", en: "Clot (often from deep leg veins) occludes pulmonary arteries; sudden dyspnea and hypoxemia." } },
      { fa: "فیبروز کیستیک (سیستیک فیبروزیس)", en: "Cystic fibrosis", sev: "sev", rare: true, desc: { fa: "بیماری ژنتیکی؛ اختلال کانال کلر (CFTR) با مخاط غلیظ، عفونت‌های مکرر و نارسایی پانکراس.", en: "Genetic disease; CFTR chloride-channel defect with thick mucus, recurrent infections, and pancreatic insufficiency." } },
      { fa: "هیپرتانسیون شریان ریوی ایدیوپاتیک", en: "Idiopathic pulmonary arterial hypertension", sev: "sev", rare: true, desc: { fa: "افزایش فشار شریان ریوی بدون علت واضح؛ تنگی نفس پیشرونده و نارسایی بطن راست.", en: "Elevated pulmonary arterial pressure without clear cause; progressive dyspnea and right-heart failure." } },
    ],
  },

  {
    id: "liver",
    fa: "کبد",
    en: "Liver",
    svg: "liver",
    fn: {
      fa: "کبد بزرگ‌ترین غده متابولیک بدن است: سم‌زدایی و متابولیسم داروها، ساخت پروتئین‌های پلاسما (مانند آلبومین و عوامل انعقادی)، ذخیره گلیکوژن، متابولیسم لیپید و کربوهیدرات، و ترشح صفرا برای هضم چربی. خون از ورید باب و شریان کبدی وارد می‌شود و از وریدهای کبدی خارج می‌گردد. هپاتوسیت‌ها در لوبول‌ها حول ورید مرکزی سازمان یافته‌اند.",
      en: "The liver is the body’s largest metabolic gland: detoxification and drug metabolism, synthesis of plasma proteins (albumin, clotting factors), glycogen storage, lipid/carbohydrate metabolism, and bile secretion for fat digestion. Blood enters via the portal vein and hepatic artery and leaves via hepatic veins. Hepatocytes are organized in lobules around a central vein.",
    },
    facts: [
      { fa: "کبد توان بازسازی قابل‌توجهی دارد اگر داربست و خونرسانی حفظ شود.", en: "The liver has remarkable regenerative capacity if scaffold and blood supply remain intact." },
      { fa: "فضای پورت (portal triad) شامل مجرای صفراوی، شاخه شریان کبدی و ورید باب است.", en: "A portal triad includes a bile duct, hepatic artery branch, and portal vein branch." },
      { fa: "بیلی‌روبین از تجزیه هم ساخته و در کبد کونژوگه می‌شود.", en: "Bilirubin comes from heme breakdown and is conjugated in the liver." },
      { fa: "اولین عبور (first-pass) بسیاری از داروهای خوراکی را قبل از رسیدن به گردش عمومی متابولیزه می‌کند.", en: "First-pass metabolism alters many oral drugs before they reach systemic circulation." },
    ],
    diseases: [
      { fa: "هپاتیت ویروسی (مثلاً B یا C)", en: "Viral hepatitis (e.g. B or C)", sev: "mod", rare: false, desc: { fa: "التهاب کبد به‌دلیل ویروس؛ می‌تواند حاد یا مزمن شود و به سیروز و سرطان کبد منجر گردد.", en: "Liver inflammation from viruses; may become chronic and progress to cirrhosis and hepatocellular carcinoma." } },
      { fa: "کبد چرب (NAFLD/MASLD)", en: "Fatty liver (NAFLD/MASLD)", sev: "mod", rare: false, desc: { fa: "تجمع چربی در هپاتوسیت‌ها مرتبط با سندرم متابولیک؛ می‌تواند به استئاتوهپاتیت و فیبروز برسد.", en: "Hepatocyte fat accumulation linked to metabolic syndrome; may progress to steatohepatitis and fibrosis." } },
      { fa: "سیروز", en: "Cirrhosis", sev: "sev", rare: false, desc: { fa: "فیبروز پیشرفته و گره‌های بازسازی؛ فشار خون باب، آسیت، انسفالوپاتی و اختلال انعقاد.", en: "Advanced fibrosis with regenerative nodules; portal hypertension, ascites, encephalopathy, and coagulopathy." } },
      { fa: "سنگ صفرا (بیماری مرتبط صفراوی)", en: "Gallstones (related biliary disease)", sev: "mild", rare: false, desc: { fa: "سنگ‌های کلسترولی یا پیگمانی در کیسه صفرا؛ کولیک صفراوی یا کلانژیت در صورت انسداد.", en: "Cholesterol or pigment stones in the gallbladder; biliary colic or cholangitis if obstructing." } },
      { fa: "هموکروماتوز ارثی", en: "Hereditary hemochromatosis", sev: "sev", rare: true, desc: { fa: "اختلال ژنتیکی جذب بیش از حد آهن؛ رسوب در کبد، قلب و پانکراس — سیروز و دیابت ثانویه ممکن است.", en: "Genetic iron-overload disorder; deposits in liver, heart, and pancreas — may cause cirrhosis and secondary diabetes." } },
      { fa: "بیماری ویلسون", en: "Wilson disease", sev: "sev", rare: true, desc: { fa: "نادر؛ نقص دفع مس با آسیب کبدی و حلقه کایزر–فلایشر در قرنیه؛ در جوانان مهم است.", en: "Rare copper-excretion defect with hepatic injury and Kayser–Fleischer rings; important in younger patients." } },
    ],
  },
  {
    id: "stomach",
    fa: "معده",
    en: "Stomach",
    svg: "stomach",
    fn: {
      fa: "معده یک مخزن Jشکل است که غذا را مکانیکی مخلوط و با اسید هیدروکلریک و پپسین از نظر شیمیایی هضم اولیه می‌کند. سلول‌های جداری اسید و فاکتور داخلی می‌سازند؛ سلول‌های اصلی پپسینوژن ترشح می‌کنند. دریچه پیلور تخلیه کنترل‌شده کیموس به دوازدهه را تنظیم می‌نماید. مخاط ضخیم و بی‌کربنات از خودهضمی جلوگیری می‌کنند.",
      en: "The stomach is a J-shaped reservoir that mechanically mixes food and begins chemical digestion with hydrochloric acid and pepsin. Parietal cells make acid and intrinsic factor; chief cells secrete pepsinogen. The pylorus regulates controlled emptying of chyme into the duodenum. Thick mucus and bicarbonate prevent autodigestion.",
    },
    facts: [
      { fa: "pH معده می‌تواند نزدیک ۱–۲ برسد؛ لایه مخاطی محافظ ضروری است.", en: "Gastric pH can approach 1–2; the protective mucus barrier is essential." },
      { fa: "فاکتور داخلی برای جذب ویتامین B۱۲ در ایلئوم لازم است.", en: "Intrinsic factor is required for vitamin B₁₂ absorption in the ileum." },
      { fa: "هورمون گاسترین ترشح اسید را تحریک می‌کند؛ سوماتواستاتین آن را مهار می‌کند.", en: "Gastrin stimulates acid secretion; somatostatin inhibits it." },
      { fa: "تخلیه معده برای مایعات سریع‌تر از جامدات و چربی‌هاست.", en: "Gastric emptying is faster for liquids than for solids and fats." },
    ],
    diseases: [
      { fa: "زخم پپتیک", en: "Peptic ulcer disease", sev: "mod", rare: false, desc: { fa: "نقص مخاط معده یا دوازدهه؛ اغلب هلیکوباکتر پیلوری یا NSAID؛ درد اپی‌گاستر، خطر خونریزی یا پرفوراسیون.", en: "Mucosal defect in stomach or duodenum; often H. pylori or NSAIDs; epigastric pain, risk of bleed or perforation." } },
      { fa: "گاستریت", en: "Gastritis", sev: "mild", rare: false, desc: { fa: "التهاب مخاط معده؛ حاد یا مزمن؛ می‌تواند با عفونت، الکل یا خودایمنی مرتبط باشد.", en: "Gastric mucosal inflammation; acute or chronic; may relate to infection, alcohol, or autoimmunity." } },
      { fa: "ریفلاکس معده به مری (GERD)", en: "GERD", sev: "mild", rare: false, desc: { fa: "برگشت اسید به مری به‌دلیل اختلال اسفنکتر تحتانی؛ سوزش سر دل و در بلندمدت ازوفاژیت.", en: "Acid reflux into the esophagus from LES dysfunction; heartburn and, chronically, esophagitis." } },
      { fa: "عفونت هلیکوباکتر پیلوری", en: "H. pylori infection", sev: "mod", rare: false, desc: { fa: "باکتری شایع مرتبط با گاستریت مزمن، زخم و افزایش خطر سرطان معده؛ قابل ریشه‌کنی با رژیم آنتی‌بیوتیکی.", en: "Common bacterium linked to chronic gastritis, ulcers, and higher gastric-cancer risk; treatable with eradication therapy." } },
      { fa: "بیماری منه‌تریر", en: "Ménétrier disease", sev: "mod", rare: true, desc: { fa: "اختلال نادر با هیپرتروفی چین‌های معده و از دست دادن پروتئین؛ درد، ادم و افت آلبومین ممکن است.", en: "Rare disorder with giant gastric folds and protein loss; pain, edema, and hypoalbuminemia may occur." } },
      { fa: "سندرم زولینگر–الیسون", en: "Zollinger–Ellison syndrome", sev: "sev", rare: true, desc: { fa: "گاسترینومای نادر با ترشح شدید اسید و زخم‌های مقاوم متعدد؛ گاهی بخشی از MEN1.", en: "Rare gastrinoma causing extreme acid output and multiple refractory ulcers; sometimes part of MEN1." } },
    ],
  },
  {
    id: "pancreas",
    fa: "لوزالمعده",
    en: "Pancreas",
    svg: "pancreas",
    fn: {
      fa: "لوزالمعده هم غده برون‌ریز و هم درون‌ریز است. بخش برون‌ریز آنزیم‌های گوارشی (آمیلاز، لیپاز، پروتئازها) و بی‌کربنات را از راه مجرای پانکراس به دوازدهه می‌فرستد. جزایر لانگرهانس انسولین، گلوکاگون، سوماتواستاتین و پلی‌پپتید پانکراسی ترشح می‌کنند و قند خون و متابولیسم را تنظیم می‌نمایند. از نظر آناتومی سر، بدنه و دم مشخص است.",
      en: "The pancreas is both exocrine and endocrine. Exocrine tissue sends digestive enzymes (amylase, lipase, proteases) and bicarbonate via the pancreatic duct into the duodenum. Islets of Langerhans secrete insulin, glucagon, somatostatin, and pancreatic polypeptide to regulate blood glucose and metabolism. Anatomically it has a head, body, and tail.",
    },
    facts: [
      { fa: "بیش از ۹۵٪ بافت پانکراس برون‌ریز است؛ جزایر بخش کوچکی اما حیاتی‌اند.", en: "Over 95% of pancreatic tissue is exocrine; islets are a small but critical fraction." },
      { fa: "آنزیم‌ها به‌صورت پروآنزیم غیرفعال ساخته می‌شوند تا خودهضمی رخ ندهد.", en: "Enzymes are made as inactive proenzymes to avoid autodigestion." },
      { fa: "سلول‌های بتا انسولین و سلول‌های آلفا گلوکاگون می‌سازند.", en: "Beta cells produce insulin; alpha cells produce glucagon." },
      { fa: "سر پانکراس در حلقه دوازدهه قرار دارد؛ دم نزدیک طحال است.", en: "The pancreatic head sits in the duodenal curve; the tail lies near the spleen." },
    ],
    diseases: [
      { fa: "دیابت نوع ۱", en: "Type 1 diabetes", sev: "sev", rare: false, desc: { fa: "تخریب خودایمنی سلول‌های بتا و کمبود مطلق انسولین؛ نیاز به انسولین خارجی؛ خطر کتواسیدوز.", en: "Autoimmune beta-cell destruction with absolute insulin deficiency; requires exogenous insulin; DKA risk." } },
      { fa: "دیابت نوع ۲", en: "Type 2 diabetes", sev: "mod", rare: false, desc: { fa: "مقاومت به انسولین و اختلال ترشح نسبی؛ مرتبط با چاقی و سبک زندگی؛ عوارض ریز و درشت‌عروقی.", en: "Insulin resistance with relative secretory failure; linked to obesity/lifestyle; micro- and macrovascular complications." } },
      { fa: "پانکراتیت حاد", en: "Acute pancreatitis", sev: "sev", rare: false, desc: { fa: "التهاب حاد اغلب به‌دلیل سنگ صفرا یا الکل؛ درد شدید اپی‌گاستر، افزایش لیپاز/آمیلاز.", en: "Acute inflammation often from gallstones or alcohol; severe epigastric pain, elevated lipase/amylase." } },
      { fa: "سرطان لوزالمعده (آدنوکارسینوم)", en: "Pancreatic adenocarcinoma", sev: "sev", rare: false, desc: { fa: "پیش‌آگهی ضعیف؛ اغلب دیر تشخیص داده می‌شود؛ زردی انسدادی اگر سر پانکراس درگیر باشد.", en: "Poor prognosis; often diagnosed late; obstructive jaundice if the head is involved." } },
      { fa: "تومور انسولینوما", en: "Insulinoma", sev: "mod", rare: true, desc: { fa: "تومور نادر سلول بتا با هیپوگلیسمی ناشتا، تعریق و گیجی؛ تشخیص با تریاد ویپل و تصویربرداری.", en: "Rare beta-cell tumor causing fasting hypoglycemia, sweating, and confusion; Whipple’s triad and imaging aid diagnosis." } },
      { fa: "پانکراتیت خودایمنی نوع ۱ (IgG4)", en: "Type 1 autoimmune pancreatitis (IgG4)", sev: "mod", rare: true, desc: { fa: "بیماری نادر التهابی؛ ممکن است توده شبیه سرطان بسازد اما معمولاً به کورتیکواستروئید پاسخ می‌دهد.", en: "Rare inflammatory disease; may form a mass mimicking cancer but often responds to corticosteroids." } },
    ],
  },
  {
    id: "kidneys",
    fa: "کلیه‌ها",
    en: "Kidneys",
    svg: "kidneys",
    fn: {
      fa: "کلیه‌ها خون را از طریق نفرون‌ها فیلتر می‌کنند: گلومرول اولترافیلتراسیون می‌سازد و توبول‌ها بازجذب انتخابی آب، الکترولیت‌ها و مواد مفید و ترشح مواد زائد را انجام می‌دهند. تنظیم حجم و اسمولالیته، تعادل اسید–باز، فشار خون (سیستم رنین–آنژیوتانسین–آلدوسترون)، و تولید اریتروپویتین و فعال‌سازی ویتامین D از نقش‌های کلیدی است.",
      en: "Kidneys filter blood via nephrons: the glomerulus forms ultrafiltrate while tubules selectively reabsorb water, electrolytes, and useful solutes and secrete wastes. They regulate volume and osmolality, acid–base balance, blood pressure (RAAS), and produce erythropoietin and activate vitamin D.",
    },
    facts: [
      { fa: "هر کلیه حدود یک میلیون نفرون دارد؛ هیلوم محل ورود عروق و خروج حالب است.", en: "Each kidney has about one million nephrons; the hilum is where vessels enter and the ureter exits." },
      { fa: "نرخ فیلتراسیون گلومرولی (GFR) شاخص اصلی کارکرد کلیه است.", en: "Glomerular filtration rate (GFR) is the main index of kidney function." },
      { fa: "قشر کلیه گلومرول‌ها را در خود دارد؛ مدولا شامل اهرام و لوپ هنله است.", en: "The cortex contains glomeruli; the medulla holds pyramids and loops of Henle." },
      { fa: "هورمون ADH نفوذپذیری مجاری جمع‌کننده به آب را افزایش می‌دهد.", en: "ADH increases water permeability of collecting ducts." },
    ],
    diseases: [
      { fa: "سنگ کلیه", en: "Kidney stones (nephrolithiasis)", sev: "mod", rare: false, desc: { fa: "تشکیل بلور (اغلب کلسیم اگزالات)؛ کولیک پهلو، هماچوری؛ انسداد حالب اورژانس نسبی است.", en: "Crystal formation (often calcium oxalate); flank colic and hematuria; ureteric obstruction needs urgent care." } },
      { fa: "پیلونفریت / عفونت ادراری فوقانی", en: "Pyelonephritis / upper UTI", sev: "mod", rare: false, desc: { fa: "عفونت پارانشیم کلیه؛ تب، درد پهلو، تهوع؛ می‌تواند به سپسیس منجر شود.", en: "Infection of renal parenchyma; fever, flank pain, nausea; can progress to sepsis." } },
      { fa: "بیماری مزمن کلیه (CKD)", en: "Chronic kidney disease", sev: "sev", rare: false, desc: { fa: "کاهش پایدار GFR یا آسیب کلیوی؛ دیابت و پرفشاری خون علل شایع؛ مراحل پیشرفته نیاز به دیالیز/پیوند.", en: "Persistent GFR decline or kidney damage; diabetes and hypertension are common causes; advanced stages need dialysis/transplant." } },
      { fa: "سندرم نفروتیک", en: "Nephrotic syndrome", sev: "mod", rare: false, desc: { fa: "پروتئینوری شدید، هیپوآلبومینمی، ادم و هیپرلیپیدمی؛ اختلال سد فیلتراسیون گلومرولی.", en: "Heavy proteinuria, hypoalbuminemia, edema, and hyperlipidemia; glomerular filtration-barrier failure." } },
      { fa: "بیماری کلیه پلی‌کیستیک اتوزومال غالب (ADPKD)", en: "ADPKD (polycystic kidney disease)", sev: "sev", rare: true, desc: { fa: "شایع‌ترین بیماری ژنتیکی کلیه اما در جمعیت کلی نسبتاً نادر؛ کیست‌های متعدد، بزرگی کلیه‌ها و پیشرفت به نارسایی.", en: "Most common genetic kidney disease but uncommon overall; multiple cysts, enlarged kidneys, progression to failure." } },
      { fa: "سندرم آلپورت", en: "Alport syndrome", sev: "sev", rare: true, desc: { fa: "اختلال نادر کلاژن نوع IV؛ هماچوری، کاهش شنوایی و پیشرفت به بیماری مزمن کلیه.", en: "Rare type-IV collagen disorder; hematuria, hearing loss, and progression to chronic kidney disease." } },
    ],
  },
];

const QUIZ = [
  {
    q: { fa: "کدام ساختار دو نیمکره مخ را عمدتاً به هم متصل می‌کند؟", en: "Which structure primarily connects the two cerebral hemispheres?" },
    options: [
      { fa: "ساقه مغز", en: "Brainstem" },
      { fa: "جسم پینه‌ای (corpus callosum)", en: "Corpus callosum" },
      { fa: "مخچه", en: "Cerebellum" },
      { fa: "نخاع", en: "Spinal cord" },
    ],
    answer: 1,
    explain: { fa: "جسم پینه‌ای بزرگ‌ترین دسته فیبرهای commissural است که ارتباط بین‌نیمکره‌ای را فراهم می‌کند.", en: "The corpus callosum is the largest commissural fiber bundle enabling interhemispheric communication." },
  },
  {
    q: { fa: "در گلوکوم، آسیب اصلی که دید را تهدید می‌کند معمولاً کدام است؟", en: "In glaucoma, which structure is primarily damaged and threatens vision?" },
    options: [
      { fa: "عدسی", en: "Lens" },
      { fa: "قرنیه", en: "Cornea" },
      { fa: "عصب بینایی", en: "Optic nerve" },
      { fa: "عضله مژگانی", en: "Ciliary muscle" },
    ],
    answer: 2,
    explain: { fa: "گلوکوم با آسیب پیشرونده عصب بینایی (اغلب مرتبط با فشار داخل‌چشمی) مشخص می‌شود.", en: "Glaucoma features progressive optic-nerve damage, often related to intraocular pressure." },
  },
  {
    q: { fa: "کدام دریچه بین بطن چپ و آئورت قرار دارد؟", en: "Which valve lies between the left ventricle and the aorta?" },
    options: [
      { fa: "میترال", en: "Mitral" },
      { fa: "تریکوسپید", en: "Tricuspid" },
      { fa: "پولمونر", en: "Pulmonary" },
      { fa: "آئورت", en: "Aortic" },
    ],
    answer: 3,
    explain: { fa: "دریچه آئورت سینی‌لونی است و مانع برگشت خون از آئورت به بطن چپ در دیاستول می‌شود.", en: "The aortic semilunar valve prevents backflow from the aorta into the left ventricle in diastole." },
  },
  {
    q: { fa: "سورفاکتانت ریوی عمدتاً چه اثری دارد؟", en: "What is the main effect of pulmonary surfactant?" },
    options: [
      { fa: "افزایش کشش سطحی آلوئول", en: "Increasing alveolar surface tension" },
      { fa: "کاهش کشش سطحی و جلوگیری از کلاپس آلوئول", en: "Lowering surface tension and preventing alveolar collapse" },
      { fa: "مسدود کردن برونش‌ها", en: "Blocking bronchi" },
      { fa: "افزایش فشار خون سیستمیک", en: "Raising systemic blood pressure" },
    ],
    answer: 1,
    explain: { fa: "سورفاکتانت کشش سطحی را کم می‌کند تا آلوئول‌ها در انتهای بازدم روی هم نخوابند.", en: "Surfactant reduces surface tension so alveoli do not collapse at end-expiration." },
  },
  {
    q: { fa: "خون غنی از مواد جذب‌شده از روده ابتدا بیشتر از کدام مسیر به کبد می‌رسد؟", en: "Nutrient-rich blood from the gut reaches the liver mainly via which vessel?" },
    options: [
      { fa: "شریان کبدی", en: "Hepatic artery" },
      { fa: "ورید باب", en: "Portal vein" },
      { fa: "ورید اجوف تحتانی", en: "Inferior vena cava" },
      { fa: "مجرای توراسیک", en: "Thoracic duct" },
    ],
    answer: 1,
    explain: { fa: "ورید باب خون روده‌ای را برای پردازش متابولیک (اثر first-pass) به کبد می‌آورد.", en: "The portal vein delivers intestinal blood to the liver for metabolic processing (first-pass)." },
  },
  {
    q: { fa: "فاکتور داخلی معده برای جذب کدام ویتامین ضروری است؟", en: "Gastric intrinsic factor is required to absorb which vitamin?" },
    options: [
      { fa: "ویتامین C", en: "Vitamin C" },
      { fa: "ویتامین D", en: "Vitamin D" },
      { fa: "ویتامین B۱۲", en: "Vitamin B₁₂" },
      { fa: "ویتامین K", en: "Vitamin K" },
    ],
    answer: 2,
    explain: { fa: "کمپلکس B۱۲–فاکتور داخلی در ایلئوم ترمینال جذب می‌شود؛ کمبود آن آنمی پرنیشیوز می‌دهد.", en: "The B₁₂–intrinsic factor complex is absorbed in the terminal ileum; deficiency causes pernicious anemia." },
  },
  {
    q: { fa: "انسولین از کدام سلول‌های جزایر لانگرهانس ترشح می‌شود؟", en: "Insulin is secreted by which islet cells?" },
    options: [
      { fa: "آلفا", en: "Alpha" },
      { fa: "بتا", en: "Beta" },
      { fa: "دلتا", en: "Delta" },
      { fa: "PP (F)", en: "PP (F) cells" },
    ],
    answer: 1,
    explain: { fa: "سلول‌های بتا انسولین می‌سازند؛ آلفا گلوکاگون و دلتا سوماتواستاتین تولید می‌کنند.", en: "Beta cells make insulin; alpha cells make glucagon and delta cells make somatostatin." },
  },
  {
    q: { fa: "واحد عملکردی فیلتراسیون کلیه چیست؟", en: "What is the functional filtration unit of the kidney?" },
    options: [
      { fa: "هپاتوسیت", en: "Hepatocyte" },
      { fa: "آلوئول", en: "Alveolus" },
      { fa: "نفرون", en: "Nephron" },
      { fa: "سارکومر", en: "Sarcomere" },
    ],
    answer: 2,
    explain: { fa: "نفرون شامل گلومرول و توبول‌هاست و فیلتراسیون، بازجذب و ترشح را انجام می‌دهد.", en: "A nephron includes a glomerulus and tubules performing filtration, reabsorption, and secretion." },
  },
  {
    q: { fa: "در سکته مغزی ایسکمیک، مکانیسم اصلی کدام است؟", en: "In ischemic stroke, what is the primary mechanism?" },
    options: [
      { fa: "خونریزی زیرعنکبوتیه خودبه‌خود", en: "Spontaneous subarachnoid hemorrhage" },
      { fa: "قطع خونرسانی به بافت مغز", en: "Interruption of blood supply to brain tissue" },
      { fa: "عفونت باکتریایی مننژ", en: "Bacterial meningitis" },
      { fa: "کمبود ویتامین A", en: "Vitamin A deficiency" },
    ],
    answer: 1,
    explain: { fa: "ایسکمی مغز معمولاً از ترومبوز یا آمبولی شریانی است؛ زمان برای درمان بازکردن رگ حیاتی است.", en: "Cerebral ischemia usually follows arterial thrombosis or embolism; time to reperfusion is critical." },
  },
  {
    q: { fa: "کدام یافته بیشتر با انفارکتوس میوکارد حاد سازگار است؟", en: "Which finding best supports acute myocardial infarction?" },
    options: [
      { fa: "افزایش تروپونین قلبی با علائم ایسکمی", en: "Rising cardiac troponin with ischemic symptoms" },
      { fa: "کاهش بیلی‌روبین", en: "Falling bilirubin" },
      { fa: "قند خون پایین تنها", en: "Isolated hypoglycemia" },
      { fa: "افزایش فقط TSH", en: "Isolated TSH rise" },
    ],
    answer: 0,
    explain: { fa: "تروپونین نشانگر آسیب میوکارد است و همراه علائم/ECG معیار تشخیص MI را می‌سازد.", en: "Troponin indicates myocardial injury and, with symptoms/ECG, supports MI diagnosis." },
  },
  {
    q: { fa: "نسبت V/Q به چه چیزی اشاره دارد؟", en: "What does the V/Q ratio refer to?" },
    options: [
      { fa: "حجم ضربه‌ای به برون‌ده قلبی", en: "Stroke volume to cardiac output" },
      { fa: "تهویه آلوئولی به پرفیوژن خونی", en: "Alveolar ventilation to blood perfusion" },
      { fa: "فشار وریدی به شریانی", en: "Venous to arterial pressure" },
      { fa: "فیلتراسیون به بازجذب کلیه", en: "Renal filtration to reabsorption" },
    ],
    answer: 1,
    explain: { fa: "تطابق تهویه و پرفیوژن برای تبادل مؤثر گاز ضروری است؛ ناهماهنگی هیپوکسمی می‌دهد.", en: "Matching ventilation and perfusion is essential for gas exchange; mismatch causes hypoxemia." },
  },
  {
    q: { fa: "سیروز پیشرفته بیشتر با کدام عارضه همراه است؟", en: "Advanced cirrhosis is most associated with which complication?" },
    options: [
      { fa: "فشار خون باب و آسیت", en: "Portal hypertension and ascites" },
      { fa: "هیپرتیروئیدی اولیه", en: "Primary hyperthyroidism" },
      { fa: "افزایش حدت بینایی", en: "Improved visual acuity" },
      { fa: "کاهش همیشگی کراتینین بدون علت", en: "Unexplained permanent creatinine fall" },
    ],
    answer: 0,
    explain: { fa: "فیبروز کبد مقاومت عروقی داخل کبد را بالا می‌برد → پورتال هیپرتانسیون، آسیت و واریس.", en: "Hepatic fibrosis raises intrahepatic resistance → portal hypertension, ascites, and varices." },
  },
  {
    q: { fa: "هلیکوباکتر پیلوری بیشتر با کدام بیماری مرتبط است؟", en: "H. pylori is most strongly associated with which condition?" },
    options: [
      { fa: "زخم پپتیک و گاستریت مزمن", en: "Peptic ulcer and chronic gastritis" },
      { fa: "آسم آلرژیک", en: "Allergic asthma" },
      { fa: "سنگ کلیه اگزالاتی", en: "Oxalate kidney stones" },
      { fa: "میگرن کلاسیک", en: "Classic migraine" },
    ],
    answer: 0,
    explain: { fa: "H. pylori مخاط معده را کلونیزه می‌کند و ریسک زخم و در بلندمدت آدنوکارسینوم معده را بالا می‌برد.", en: "H. pylori colonizes gastric mucosa and raises ulcer risk and, long-term, gastric adenocarcinoma risk." },
  },
  {
    q: { fa: "در پانکراتیت حاد، کدام آنزیم خون معمولاً برای تشخیص کمک‌کننده‌تر است؟", en: "In acute pancreatitis, which blood enzyme is more helpful for diagnosis?" },
    options: [
      { fa: "ALT به‌تنهایی", en: "ALT alone" },
      { fa: "لیپاز (یا آمیلاز)", en: "Lipase (or amylase)" },
      { fa: "TSH", en: "TSH" },
      { fa: "تروپونین I", en: "Troponin I" },
    ],
    answer: 1,
    explain: { fa: "لیپاز اختصاصی‌تر از آمیلاز برای پانکراتیت است؛ همراه درد اپی‌گاستر تشخیص را حمایت می‌کند.", en: "Lipase is more specific than amylase for pancreatitis and supports diagnosis with epigastric pain." },
  },
  {
    q: { fa: "سیستم رنین–آنژیوتانسین–آلدوسترون عمدتاً از کدام اندام آغاز پاسخ فشارخونی می‌گیرد؟", en: "The RAAS pressor cascade is primarily initiated from which organ?" },
    options: [
      { fa: "کبد به‌تنهایی", en: "Liver alone" },
      { fa: "کلیه‌ها (آزادسازی رنین)", en: "Kidneys (renin release)" },
      { fa: "طحال", en: "Spleen" },
      { fa: "تیروئید", en: "Thyroid" },
    ],
    answer: 1,
    explain: { fa: "کاهش پرفیوژن کلیه → ترشح رنین از دستگاه جنب‌گلومرولی → آبشار آنژیوتانسین و آلدوسترون.", en: "Reduced renal perfusion → juxtaglomerular renin release → angiotensin/aldosterone cascade." },
  },
  {
    q: { fa: "بیماری هانتینگتون از نظر ژنتیکی معمولاً چگونه به ارث می‌رسد؟", en: "How is Huntington’s disease typically inherited?" },
    options: [
      { fa: "اتوزومال مغلوب", en: "Autosomal recessive" },
      { fa: "اتوزومال غالب (تکرار CAG)", en: "Autosomal dominant (CAG repeat)" },
      { fa: "فقط وابسته به X مغلوب", en: "X-linked recessive only" },
      { fa: "غیرقابل توارث", en: "Non-heritable" },
    ],
    answer: 1,
    explain: { fa: "تکرار سه‌نوکلئوتیدی CAG در ژن HTT با وراثت اتوزومال غالب و پدیده anticipation همراه است.", en: "CAG trinucleotide repeats in HTT follow autosomal-dominant inheritance with anticipation." },
  },
  {
    q: { fa: "کدام گزینه درباره ریه راست درست‌تر است؟", en: "Which statement about the right lung is most accurate?" },
    options: [
      { fa: "معمولاً دو لوب دارد", en: "It usually has two lobes" },
      { fa: "معمولاً سه لوب دارد", en: "It usually has three lobes" },
      { fa: "فاقد برونش اصلی است", en: "It lacks a main bronchus" },
      { fa: "هیچ آلوئولی ندارد", en: "It has no alveoli" },
    ],
    answer: 1,
    explain: { fa: "ریه راست سه لوب (فوقانی، میانی، تحتانی) و ریه چپ معمولاً دو لوب دارد.", en: "The right lung has three lobes (upper, middle, lower); the left usually has two." },
  },
  {
    q: { fa: "سندرم زولینگر–الیسون با افزایش کدام هورمون مشخص می‌شود؟", en: "Zollinger–Ellison syndrome is characterized by excess of which hormone?" },
    options: [
      { fa: "انسولین", en: "Insulin" },
      { fa: "گاسترین", en: "Gastrin" },
      { fa: "ADH", en: "ADH" },
      { fa: "اریتروپویتین", en: "Erythropoietin" },
    ],
    answer: 1,
    explain: { fa: "گاسترینوما ترشح گاسترین را بالا می‌برد → اسید فراوان و زخم‌های مقاوم متعدد.", en: "A gastrinoma elevates gastrin → massive acid output and multiple refractory ulcers." },
  },
];

let lang = "fa";
const explored = new Set();
let quizIndex = 0;
const answers = Array(QUIZ.length).fill(null);
let quizLocked = false;

const $ = (sel) => document.querySelector(sel);

function applyI18n() {
  const dict = UI[lang];
  document.documentElement.lang = lang === "fa" ? "fa" : "en";
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-pill").forEach((p) => {
    p.classList.toggle("is-active", p.dataset.lang === lang);
  });

  renderGallery();
  updateProgress();
  renderQuiz();
  const openId = $("#sheet").dataset.orgId;
  if (openId && !$("#sheet").hidden) openSheet(openId, false);
}

function renderGallery() {
  const grid = $("#organGrid");
  grid.innerHTML = ORGANS.map((o) => {
    const exploredCls = explored.has(o.id) ? " is-explored" : "";
    return `
      <button type="button" class="organ-card${exploredCls}" data-id="${o.id}" aria-label="${o.fa} / ${o.en}">
        <div class="organ-art">${organImg(o.svg, lang === "fa" ? o.fa : o.en)}</div>
        <div class="organ-name">${lang === "fa" ? o.fa : o.en}</div>
        <div class="organ-en">${lang === "fa" ? o.en : o.fa}</div>
      </button>`;
  }).join("");

  grid.querySelectorAll(".organ-card").forEach((btn) => {
    btn.addEventListener("click", () => openSheet(btn.dataset.id, true));
  });
}

function updateProgress() {
  const n = explored.size;
  const total = ORGANS.length;
  $("#progressText").textContent = lang === "fa" ? `${toFa(n)} / ${toFa(total)}` : `${n} / ${total}`;
  $("#progressFill").style.width = `${(n / total) * 100}%`;
  $("#progressBar").setAttribute("aria-valuenow", String(n));
}

function sevLabel(sev) {
  const d = UI[lang];
  if (sev === "mild") return d.mild;
  if (sev === "mod") return d.mod;
  return d.sev;
}

function openSheet(id, mark) {
  const o = ORGANS.find((x) => x.id === id);
  if (!o) return;
  if (mark) {
    explored.add(id);
    updateProgress();
    renderGallery();
  }

  $("#sheetArt").innerHTML = organImg(o.svg, lang === "fa" ? o.fa : o.en);
  $("#sheetTitle").textContent = lang === "fa" ? o.fa : o.en;
  $("#sheetSub").textContent = lang === "fa" ? o.en : o.fa;
  $("#sheetFn").textContent = o.fn[lang];
  $("#sheetFacts").innerHTML = o.facts.map((f) => `<li>${f[lang]}</li>`).join("");
  $("#sheetDiseases").innerHTML = o.diseases
    .map((d) => {
      const rareBadge = d.rare ? `<span class="rare-tag">${UI[lang].rare}</span>` : "";
      return `
      <li class="disease-item${d.rare ? " is-rare" : ""}">
        <div class="disease-head">
          <strong>${lang === "fa" ? d.fa : d.en}</strong>
          <div class="disease-badges">
            ${rareBadge}
            <span class="sev sev-${d.sev}">${sevLabel(d.sev)}</span>
          </div>
        </div>
        <p class="disease-desc">${d.desc[lang]}</p>
      </li>`;
    })
    .join("");

  const sheet = $("#sheet");
  const backdrop = $("#sheetBackdrop");
  sheet.dataset.orgId = id;
  sheet.hidden = false;
  backdrop.hidden = false;
  requestAnimationFrame(() => sheet.classList.add("is-open"));
  document.body.classList.add("is-locked");
}

function closeSheet() {
  const sheet = $("#sheet");
  sheet.classList.remove("is-open");
  document.body.classList.remove("is-locked");
  setTimeout(() => {
    sheet.hidden = true;
    $("#sheetBackdrop").hidden = true;
  }, 280);
}

function renderQuiz() {
  const d = UI[lang];
  const item = QUIZ[quizIndex];
  $("#quizStep").textContent =
    lang === "fa" ? `${toFa(quizIndex + 1)} / ${toFa(QUIZ.length)}` : `${quizIndex + 1} / ${QUIZ.length}`;
  $("#quizQuestion").textContent = item.q[lang];

  const selected = answers[quizIndex];
  const showFeedback = selected != null;

  $("#quizOptions").innerHTML = item.options
    .map((opt, i) => {
      let cls = "quiz-opt";
      if (selected === i) cls += " is-selected";
      if (showFeedback && i === item.answer) cls += " is-correct";
      if (showFeedback && selected === i && i !== item.answer) cls += " is-wrong";
      return `<button type="button" class="${cls}" data-i="${i}" ${showFeedback ? "disabled" : ""}>${opt[lang]}</button>`;
    })
    .join("");

  $("#quizOptions").querySelectorAll(".quiz-opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answers[quizIndex] != null) return;
      answers[quizIndex] = Number(btn.dataset.i);
      renderQuiz();
    });
  });

  const explain = $("#quizExplain");
  if (showFeedback) {
    explain.hidden = false;
    explain.innerHTML = `<strong>${d.explainLabel}</strong>${item.explain[lang]}`;
  } else {
    explain.hidden = true;
    explain.innerHTML = "";
  }

  const prev = $("#quizPrev");
  const next = $("#quizNext");
  prev.disabled = quizIndex === 0 || quizLocked;
  const atEnd = quizIndex === QUIZ.length - 1;
  const allAnswered = answers.every((a) => a != null);

  if (quizLocked) next.textContent = d.restart;
  else if (atEnd && allAnswered) next.textContent = d.finish;
  else next.textContent = d.next;

  const result = $("#quizResult");
  if (quizLocked) {
    const score = answers.reduce((s, a, i) => s + (a === QUIZ[i].answer ? 1 : 0), 0);
    result.hidden = false;
    result.innerHTML = `<div>${d.result(score, QUIZ.length)}</div><div style="margin-top:6px;font-weight:500;opacity:.85">${d.resultHint(score, QUIZ.length)}</div>`;
    next.textContent = d.restart;
  } else {
    result.hidden = true;
  }
}

function onQuizNext() {
  if (quizLocked) {
    for (let i = 0; i < answers.length; i++) answers[i] = null;
    quizIndex = 0;
    quizLocked = false;
    renderQuiz();
    return;
  }
  const atEnd = quizIndex === QUIZ.length - 1;
  if (atEnd) {
    if (answers.every((a) => a != null)) {
      quizLocked = true;
      renderQuiz();
    }
    return;
  }
  if (answers[quizIndex] == null) return;
  quizIndex += 1;
  renderQuiz();
}

function onQuizPrev() {
  if (quizIndex === 0 || quizLocked) return;
  quizIndex -= 1;
  renderQuiz();
}

function init() {
  renderGallery();
  applyI18n();

  $("#langToggle").addEventListener("click", () => {
    lang = lang === "fa" ? "en" : "fa";
    applyI18n();
  });

  $("#sheetClose").addEventListener("click", closeSheet);
  $("#sheetBackdrop").addEventListener("click", closeSheet);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#sheet").hidden) closeSheet();
  });

  $("#quizNext").addEventListener("click", onQuizNext);
  $("#quizPrev").addEventListener("click", onQuizPrev);
}

init();
