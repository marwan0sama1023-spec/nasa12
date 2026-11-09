/* Global candidate records: coordinates are map anchors, not surveyed study polygons. */
const sites = [
  {
    id: "atacama", number: "01", ar: "صحراء أتاكاما", en: "Atacama Desert", country: "تشيلي · أمريكا الجنوبية", subsite: "محيط محطة يونغاي البحثية", lat: -24.09, lon: -69.93, coordStatus: "نقطة مرجعية تقريبية؛ يلزم تثبيت حدود الدراسة", elevation: null, area: null, type: "صحراء فائقة الجفاف", color: "#bd5036",
    brief: "مرشح لدراسة الجفاف والتربة شديدة الجفاف؛ لا تُعرض هنا قياسات مناخية أو كيميائية قبل توثيقها من محطة أو مجموعة بيانات محددة.",
    strengths: ["يوفر سياقًا لدراسة التربة الجافة والاستشعار عن بعد.", "يلزم تحديد محطة القياس والفترة الزمنية قبل مقارنة درجات الحرارة أو الرطوبة."],
    limits: ["ضغط الأرض وغلافها الجوي وجاذبيتها وإشعاعها لا تماثل المريخ.", "وجود نقطة على الخريطة لا يحدد مساحة متجانسة أو موقعًا مرخصًا للاختبارات."],
  },
  {
    id: "hawaii", number: "02", ar: "جزر هاواي", en: "Hawaiian Islands", country: "الولايات المتحدة الأمريكية", subsite: "حقول الحمم العليا في ماونا لوا", lat: 19.4756, lon: -155.608, coordStatus: "مركز بركاني مرجعي تقريبي؛ ليس نقطة اختبار مصرحًا بها", elevation: null, area: null, type: "تضاريس بركانية", color: "#bd8b48",
    brief: "نركز على تضاريس الحمم البركانية في ماونا لوا بدل تعميم خصائص الأرخبيل. صلاحية أي حقل للاختبار تتطلب فحصًا ميدانيًا وتصاريح.",
    strengths: ["توفر صور NASA ASTER سياقًا متعدد الأطياف لتضاريس الحمم.", "تظل الصورة استشعارًا عن بعد وليست تحليلًا ميدانيًا للصخور."],
    limits: ["لا تعني الصخور البركانية تطابق التركيب المعدني أو بيئة المريخ.", "الارتفاع والطقس والنشاط البركاني والقيود الإدارية تختلف باختلاف الموقع الفرعي."],
  },
  {
    id: "death-valley", number: "03", ar: "وادي الموت", en: "Death Valley", country: "كاليفورنيا · الولايات المتحدة الأمريكية", subsite: "حوض بادووتر", lat: 36.230, lon: -116.767, coordStatus: "نقطة مرجعية تقريبية لحوض بادووتر", elevation: null, area: null, type: "حوض صحراوي وسبخة ملحية", color: "#bd5036",
    brief: "مشاهد NASA ASTER توثق تغيرًا بصريًا في حوض بادووتر بين تاريخين؛ لا تُستنتج منها قياسات مناخية أو كيميائية.",
    strengths: ["تسمح المشاهد المؤرخة بملاحظة تغير سطحي بين صورتين.", "لا تمثل الصورة الواحدة قياسًا ميدانيًا أو وصفًا دائمًا للموقع."],
    limits: ["الماء السطحي والحرارة والملوحة متغيرة مكانيًا وزمنيًا.", "لا يحاكي الموقع الضغط الجوي أو تركيب الغلاف الجوي أو الجاذبية المريخية."],
  },
  {
    id: "mcmurdo", number: "04", ar: "الوديان الجافة في ماكموردو", en: "McMurdo Dry Valleys", country: "القارة القطبية الجنوبية", subsite: "مرجع تقريبي داخل الوديان الجافة", lat: -77.62317, lon: 162.90054, coordStatus: "نقطة تمثيلية تقريبية للعرض؛ ليست محطة قياس أو موقع اختبار معتمدًا", elevation: null, area: null, type: "صحراء قطبية", color: "#567b8b",
    brief: "تُظهر صورة NASA ASTER مشهدًا مداريًا تاريخيًا للوديان الجافة؛ لا تعرض قياسات محطة أرضية أو سلسلة مناخية.",
    strengths: ["توفر الصورة سياقًا بصريًا إقليميًا موثقًا من NASA.", "لا يثبت المشهد وحده خصائص كل نقطة أو ظروفها الموسمية."],
    limits: ["الموقع القطبي والموسمية والغطاء الجليدي تختلف عن كثير من مواقع المريخ.", "الوصول والسلامة والحماية البيئية واللوجستيات تتطلب موافقات خاصة."],
  },
  {
    id: "devon", number: "05", ar: "جزيرة ديفون", en: "Devon Island", country: "نونافوت · كندا", subsite: "فوهة هوتون والبيئات المحيطة", lat: 75.37, lon: -89.68, coordStatus: "مركز تقريبي للفوهة؛ يلزم تثبيت موقع الدراسة وحدودها", elevation: null, area: null, type: "فوهة اصطدام وبيئة قطبية", color: "#567b8b",
    brief: "تجمع المنطقة بين بيئة قطبية وفوهة اصطدام، ما قد يفيد تجارب جيولوجية أو عملياتية محددة. لا يجعل ذلك البيئة بأكملها مماثلة للمريخ.",
    strengths: ["فوهة هوتون هدف لدراسة بنية الاصطدام والتضاريس المرتبطة بها.", "الموقع القطبي يتيح أسئلة بحث مختلفة عن المواقع الصحراوية الدافئة."],
    limits: ["البيئة القطبية والمناخ الأرضي والكتلة الحيوية لا تماثل المريخ.", "إمكانية الوصول موسمية وتتطلب موافقات محلية وبيئية وترتيبات لوجستية."],
  },
  {
    id: "rio-tinto", number: "07", ar: "نهر ريو تينتو", en: "Río Tinto", country: "الأندلس · إسبانيا", subsite: "الحوض الأعلى لنهر ريو تينتو", lat: 37.70, lon: -6.55, coordStatus: "نقطة حوض مرجعية تقريبية؛ لا تمثل قياس مياه", elevation: null, area: null, type: "حوض مائي وجيولوجيا معدنية", color: "#bd5036",
    brief: "تُدرس خصائص الحوض والمياه والمعادن كلٌّ ببياناتها. الحموضة أو وجود معادن بعينها، إن قيست، لا يكفيان لإثبات تماثل بيئة المريخ.",
    strengths: ["قد يخدم دراسة تفاعلات الماء والصخر والبيئات الحمضية عند توفر قياسات موثقة.", "مناسب لصياغة أسئلة عن كشف مؤشرات الحياة دون الادعاء بوجودها."],
    limits: ["الماء الجاري والظروف الكيميائية المحلية لا تمثل كامل سطح المريخ.", "لا توجد هنا قيم pH أو تراكيز معادن؛ يجب ربطها بعينة وتاريخ وطريقة قياس."],
  },
  {
    id: "svalbard", number: "08", ar: "أرخبيل سفالبارد", en: "Svalbard", country: "النرويج", subsite: "وادي أدفنتدالن قرب لونغييربين", lat: 78.18, lon: 15.90, coordStatus: "نقطة مرجعية تقريبية؛ يلزم تحديد تضريس/محطة القياس", elevation: null, area: null, type: "بيئة قطبية وجليدية", color: "#567b8b",
    brief: "يتيح الأرخبيل دراسة بيئات قطبية وجليدية متنوعة. لا يصح تعميم مناخ الأرخبيل أو خصائصه على نقطة واحدة دون تحديد المحطة والفصل.",
    strengths: ["يمكن توجيه البحث إلى عمليات التربة الصقيعية أو الجليد ببيانات ميدانية محددة.", "تتوفر مؤسسات أبحاث قطبية في المنطقة."],
    limits: ["الغطاء الجليدي والموسمية والضغط الجوي الأرضي تختلف عن ظروف المريخ.", "تتطلب الأنشطة تصاريح وتخطيطًا للسلامة والحياة البرية والبيئة."],
  },
  {
    id: "meteor-crater", number: "09", ar: "فوهة ميتيور", en: "Meteor Crater", country: "أريزونا · الولايات المتحدة الأمريكية", subsite: "مركز فوهة بارينجر", lat: 35.027, lon: -111.022, coordStatus: "مركز تقريبي للفوهة؛ يلزم اعتماد مرجع إحداثي موثق", elevation: null, area: null, type: "فوهة اصطدام", color: "#bd8b48",
    brief: "توفر الفوهة سياقًا لدراسة آثار الاصطدامات وتضاريسها. وجود فوهة اصطدام لا يعني تشابه البيئة كاملة مع سطح المريخ.",
    strengths: ["هدف جيولوجي واضح لتجارب تفسير التضاريس والمواد المرتبطة بالاصطدام.", "يمكن مقارنتها بأشكال فوهات مريخية باستخدام بيانات تصوير وارتفاع منفصلة."],
    limits: ["لا تمثل الفوهة الجفاف أو الضغط أو الغلاف الجوي أو المناخ المريخي.", "ملكية الموقع وإمكانية أخذ العينات أو إجراء التجارب تحتاج تحققًا وتصاريح."],
  }
];
const analogSiteOrder = ["meteor-crater", "hawaii", "devon", "atacama", "death-valley", "mcmurdo"];
sites.splice(0, sites.length, ...analogSiteOrder.map(id => sites.find(site => site.id === id)));
sites.forEach((site, index) => { site.number = String(index + 1).padStart(2, "0"); });

const siteVisuals = {
  atacama: {
    color: "#35aee9",
    image: { src: "assets/atacama-streambed.jpg", alt: "مجرى جاف على مروحة غرينية في صحراء أتاكاما، شمال تشيلي", title: "مجرى جاف على مروحة غرينية", caption: "صورة استشعار عن بعد لمجرى جاف وتوزع حبيباته؛ لا تمثل قياسًا مناخيًا أو تربة لموقع يونغاي.", credit: "NASA/UC Berkeley", date: "سجل NASA: 2012؛ تاريخ الالتقاط غير محدد في الملخص", source: "https://images-assets.nasa.gov/image/PIA16191/collection.json" },
    guide: { summary: "أتاكاما صحراء شديدة الجفاف، وتُظهر الصورة مجرى جافًا على مروحة غرينية في شمال تشيلي. قد تساعد تضاريسها على اختبار حركة الروبوتات وقراءة التربة في بيئة قليلة الماء. لكنها لا تحاكي ضغط المريخ أو غلافه الجوي أو جاذبيته أو إشعاعه.", similarity: "الجفاف وبعض أشكال التعرية والمواد السطحية أسئلة قابلة للمقارنة بعد توثيق موقع القياس والفترة.", advantage: "مجال مناسب لتصميم اختبارات تربة وجوالات، مع بيانات وموقع فرعي محددين.", difference: "الجفاف الأرضي لا يعيد الضغط الجوي المنخفض أو تركيب غلاف المريخ ولا يثبت تشابهًا كاملًا.", more: "الصورة الفضائية توضح مظهر مجرى جاف فقط؛ يلزم ربط كل استنتاج بقياسات أرضية موثقة وبمنتج مريخي متوافق." }
  },
  hawaii: {
    color: "#4f8fe8",
    image: { src: "https://images-assets.nasa.gov/image/PIA02604/PIA02604~medium.jpg", alt: "صورة NASA ASTER متعددة الأطياف لجزيرة هاواي وتدفقات الحمم حول ماونا لوا", title: "ASTER Images the Island of Hawaii", caption: "بيانات ASTER على قمر NASA Terra التقطت في 19 مارس 2000؛ يوضح المصدر تدفقات الحمم وتباين الإشارات الطيفية، لا عينة صخرية مباشرة.", credit: "NASA/GSFC/METI/ERSDAC/JAROS and U.S./Japan ASTER Science Team", date: "19 مارس 2000", source: "https://images-assets.nasa.gov/image/PIA02604/collection.json" },
    guide: { summary: "نركز على حقول الحمم البركانية في ماونا لوا، لا على الأرخبيل كله. يمكن اختبار حركة العجلات وأدوات التصوير فوق تضاريس بركانية بعد اختيار قطاع محدد ومصرح به. الحمم الأرضية لا تثبت تطابق المعادن أو المناخ مع المريخ.", similarity: "الصخور البركانية والتضاريس الوعرة قد تخدم أسئلة جيولوجية واختبارات حركة الروبوت.", advantage: "تُظهر صورة NASA ASTER من القمر Terra تدفقات الحمم وتباين الإشارات متعددة الأطياف؛ وهي ملاحظة استشعار عن بعد وليست تحليلًا لعينة صخرية.", difference: "الطقس والرطوبة والنشاط البركاني والقيود داخل الحديقة مختلفة عن بيئة المريخ.", more: "الصورة توثق ثوران ماونا لوا عام 2022، وليست توصية بالعمل قرب الحمم النشطة؛ التراخيص والسلامة شرط قبل أي اختبار." }
  },
  "death-valley": {
    color: "#218fbf",
    image: { src: "assets/death-valley.jpg", alt: "صورة ASTER لحوض بادووتر في وادي الموت بعد أمطار إعصار هيلاري", title: "بادووتر، وادي الموت", caption: "مشهدان فضائيان لبادووتر، أحدهما بعد امتلاء مؤقت بالمياه؛ يوضح التغير الزمني ولا يصف الظروف الدائمة.", credit: "NASA/METI/AIST/Japan Space Systems and U.S./Japan ASTER Science Team", date: "25 أكتوبر 2023 و10 نوفمبر 2012", source: "https://images-assets.nasa.gov/image/PIA26197/collection.json" },
    guide: { summary: "يجمع حوض بادووتر بين السبخات الملحية وأشكال أرضية متنوعة في وادي الموت. يمكنه دعم اختبارات الملاحة على أرض جافة أو ملحية ومراجعة أثر السيول على السطح. لكنه يظل بيئة أرضية ذات غلاف جوي وجاذبية مختلفين.", similarity: "السهول الجافة والرواسب والتعرية توفر أشكالًا سطحية قابلة لدراسة عمليات الروبوت.", advantage: "توثق صور NASA ASTER مشهدين مؤرخين لبادووتر، أحدهما بعد امتلاء مؤقت بالمياه؛ لا تمثل هذه الصور قياسات ميدانية.", difference: "تُظهر الصورة نفسها تغيرًا كبيرًا بعد المطر؛ لا يجوز تعميم صورة واحدة على ظروف المناخ أو رطوبة التربة.", more: "صورتا ASTER مثالان بصريان مؤرخان، وليستا سلسلة قياسات مناخية أو كيميائية." }
  },
  mcmurdo: {
    color: "#55b9e2",
    image: { src: "assets/mcmurdo-dry-valleys.jpg", alt: "صورة فضائية للوديان الجافة في ماكموردو بالقارة القطبية الجنوبية", title: "الوديان الجافة، أنتاركتيكا", caption: "مشهد Terra/ASTER للوديان الجافة؛ وصف إقليمي لا يمثل محطة القياس أو كامل المساحة.", credit: "NASA/GSFC/METI/ERSDAC/JAROS and U.S./Japan ASTER Science Team", date: "8 ديسمبر 2002", source: "https://images-assets.nasa.gov/image/PIA12461/collection.json" },
    guide: { summary: "ماكموردو صحراء قطبية تضم تربة مكشوفة وبحيرات مغطاة بالجليد وجداول موسمية. قد تفيد في اختبار أجهزة تعمل في البرودة والجفاف وعمليات أخذ العينات. لكن القارة القطبية والغلاف الأرضي والجاذبية لا تماثل المريخ.", similarity: "البرودة والجفاف وبعض البيئات المحدودة بالماء مفيدة لأسئلة اختبار محددة.", advantage: "توثق صورة NASA ASTER للوديان الجافة مظهر السطح من المدار؛ لا تعرض قياسًا لمحطة أرضية أو سلسلة رصد مناخية.", difference: "الجليد الموسمي والنظام البيئي القطبي وظروف الغلاف الأرضي ليست نسخة من سطح المريخ.", more: "الإحداثيات المعروضة نقطة مرجعية تقريبية للمشروع وليست محطة قياس أو حدًا إقليميًا. الوصول والتصاريح والوقاية البيئية تحديات أساسية." }
  },
  devon: {
    color: "#4385d6",
    image: { src: "assets/devon-haughton.jpg", alt: "عربة K-10 الروبوتية قرب تشكيل The Fortress داخل فوهة هوتون في جزيرة ديفون", title: "عربة K-10 قرب فوهة هوتون", caption: "توثق الصورة تجربة عربة ميدانية قرب تشكيل The Fortress؛ ليست خريطة جيولوجية ولا قياسًا لظروف المريخ.", credit: "NASA / Lorenzo Fluckiger", date: "سجل NASA: 15 يوليو 2007؛ يوم الالتقاط غير مؤكد", source: "https://images-assets.nasa.gov/image/ARC-2007-ACD09-0255-001/collection.json" },
    guide: { summary: "تجمع جزيرة ديفون بين مناخ قطبي وفوهة هوتون وآثار اصطدامها. استخدمت بعثات تجريبية عربات ميدانية لدراسة الحركة والاستطلاع. أهمية الفوهة لا تعني أن مناخ الجزيرة أو جاذبيتها يشبه المريخ.", similarity: "تضاريس الاصطدام والاختبارات الروبوتية الميدانية قريبة من بعض أهداف الاستكشاف.", advantage: "يمكن ربط دراسة البنية الجيولوجية بتخطيط عمليات روبوتية في بيئة قطبية.", difference: "الثلوج والطقس والأنظمة البيئية القطبية والضغط الأرضي تظل مختلفة عن المريخ.", more: "الإحداثيات المعروضة مرجع تقريبي للفوهة وليست إحداثيات الصورة أو موقع تجربة معتمدًا. يلزم التحقق من الوصول والتصاريح المحلية." }
  },
  "rio-tinto": {
    color: "#337fc4",
    image: { src: "assets/rio-tinto.jpg", alt: "صورة فضائية من ASTER لنهر ريو تينتو في الأندلس جنوب غرب إسبانيا", title: "ريو تينتو، إسبانيا", caption: "صورة ASTER فضائية للنهر؛ ألوان الصورة لا تمثل قياسًا مباشرًا للحموضة أو المعادن.", credit: "NASA/GSFC/METI/ERSDAC/JAROS and U.S./Japan ASTER Science Team", date: "سجل NASA: 2 سبتمبر 2010؛ تاريخ الالتقاط غير مثبت هنا", source: "https://images-assets.nasa.gov/image/PIA13365/collection.json" },
    guide: { summary: "ريو تينتو حوض مائي وجيولوجي في الأندلس، وتلفت صورته الفضائية الانتباه إلى مجرى النهر. يمكن أن يدعم دراسة تفاعلات الماء والصخر إذا توفر قياس ميداني موثق. لون الصورة لا يثبت درجة الحموضة ولا يجعل النهر مطابقًا للمريخ.", similarity: "تفاعلات الماء والمعادن والسياقات الجيولوجية قد تساعد على صياغة أسئلة أحياء فلكية.", advantage: "يوفر حالة لدراسة أدوات كشف الخصائص الكيميائية ومؤشرات بيئية محددة.", difference: "الماء الجاري والبيئة الأرضية لا يحاكيان سطح المريخ؛ لا توجد قيم pH في سجل المشروع.", more: "يجب ربط الحموضة والمعادن بعينة وتاريخ وطريقة مختبرية، لا باستنتاج من اللون أو صورة القمر الصناعي." }
  },
  svalbard: {
    color: "#59b9dc",
    image: { src: "assets/svalbard-longyearbyen.jpg", alt: "صورة فضائية من Terra لمركز لونغييربين في جزيرة سبيتسبيرغن، سفالبارد", title: "لونغييربين، سفالبارد", caption: "مشهد Terra/ASTER لمنطقة لونغييربين؛ لا يمثل وحده وادي أدفنتدالن أو محطة قياس بعينها.", credit: "NASA/GSFC/METI/ERSDAC/JAROS and U.S./Japan ASTER Science Team", date: "12 يوليو 2003", source: "https://images-assets.nasa.gov/image/PIA10626/collection.json" },
    guide: { summary: "سفالبارد أرخبيل قطبي يجمع الأنهار الجليدية والتربة الصقيعية والوديان. يمكن دراسة عمليات باردة أو أدوات تعمل قرب الجليد في مواقع فرعية محددة. لكن الجو الأرضي والجاذبية والموسمية والحياة القطبية تختلف عن المريخ.", similarity: "البيئات القطبية والجليدية تتيح أسئلة مرتبطة بتحديد الجليد وعمليات السطح البارد.", advantage: "توجد مؤسسات بحث قطبي وبيانات ميدانية يمكن تحديدها بحسب الموقع والموسم.", difference: "الغطاء الجليدي والمناخ والأحياء القطبية ليست دليلًا على تشابه شامل مع المريخ.", more: "الصورة توثق لونغييربين من المدار، لا تضاريس وادي أدفنتدالن بالتفصيل. يلزم اختيار محطة وفترة وبيانات دقيقة قبل المقارنة." }
  },
  "meteor-crater": {
    color: "#7f9fda",
    image: { src: "assets/meteor-crater.jpg", alt: "فوهة ميتيور في أريزونا كما صورتها طاقم المحطة الفضائية الدولية", title: "فوهة ميتيور، أريزونا", caption: "صورة مدارية لفوهة اصطدام على هضبة كولورادو؛ شكل الفوهة لا يعني تشابه المناخ أو البيئة كاملة.", credit: "NASA/JSC · Expedition 74", date: "26 يناير 2026", source: "https://images-assets.nasa.gov/image/iss074e0208832/collection.json" },
    guide: { summary: "فوهة ميتيور بنية اصطدام واضحة في صحراء أريزونا. يمكن دراستها لفهم أشكال الفوهات والمواد المرتبطة بالاصطدام. لكنها لا تحاكي وحدها الجفاف أو الضغط أو الغلاف الجوي أو سطح المريخ كله.", similarity: "تسمح بمقارنة شكل اصطدام أرضي بصور فوهات مريخية موثقة.", advantage: "هدف جيولوجي محدد يتيح اختبار تفسير التضاريس وقراءة صور الفوهات.", difference: "وجود فوهة اصطدام لا يثبت تطابق البيئة أو المعادن أو عمليات السطح مع المريخ.", more: "الصورة التقطتها محطة الفضاء الدولية من المدار. التصاريح وملكية الموقع تحدد ما يمكن فعله ميدانيًا." }
  }
};
sites.forEach(site => Object.assign(site, siteVisuals[site.id]));

const sitePhotoCatalog = {
  "meteor-crater": [
    ["حافة فوهة ميتور", "مشهد ميداني يوضح الحافة الدائرية ومواد السطح حول فوهة الاصطدام."],
    ["جدار الفوهة الداخلي", "منظر من داخل الفوهة يبرز انحدار الجدار واتساع الحوض."],
    ["فوهة الاصطدام في أريزونا", "منظر واسع للفوهة ضمن البيئة شبه الصحراوية المحيطة."]
  ],
  atacama: [
    ["تضاريس صحراء أتاكاما", "مشهد جوي للأحواض الجافة والتلال المكشوفة في شمال تشيلي."],
    ["عربة استكشاف في أتاكاما", "عربة روبوتية قرب نتوء صخري ضمن سهل صحراوي؛ المشهد يوضح سياق الاختبارات الميدانية."],
    ["وادي صخري في أتاكاما", "منظر واسع لتلال وأودية جافة مكشوفة في شمال تشيلي."]
  ],
  hawaii: [
    ["تدفق بركاني يصل إلى الساحل", "تظهر الصورة تماس تدفق ساخن مع مياه المحيط وتكوّن بخار كثيف؛ لا تمثل موقعًا آمنًا للزيارة."],
    ["سطح تدفق حمم حديث", "تظهر قشرة داكنة مع شقوق متوهجة؛ المشهد يوثق نشاطًا بركانيًا ولا يعني أن كل تضاريس هاواي منصهرة."],
    ["فوهة ونشاط بركاني", "أبخرة ومواد متوهجة قرب فوهة بركانية؛ صورة للمقارنة البصرية وليست دعوة للاقتراب من منطقة نشطة."]
  ],
  devon: [
    ["عربة استكشاف قرب فوهة هوتون", "عربة ميدانية تختبر الحركة والاستطلاع في تضاريس جزيرة ديفون."],
    ["محطة ميدانية في جزيرة ديفون", "منظر للمخيم البحثي المعزول في بيئة القطب الشمالي."],
    ["وادي صخري قطبي", "تضاريس مكشوفة واسعة ضمن البيئة الباردة والجافة لجزيرة ديفون."]
  ],
  mcmurdo: [
    ["نهر تايلور الجليدي", "نهر جليدي وبحوض صخري في الوديان الجافة بالقارة القطبية الجنوبية."],
    ["أرض مكشوفة في ماكموردو", "تربة جافة وحصى مكشوفة بين الجبال والكتل الجليدية."],
    ["الوديان الجافة من الجو", "منظر إقليمي يوضح الجبال والوديان والأنهار الجليدية."]
  ],
  "death-valley": [
    ["قشرة ملحية في وادي الموت", "أشكال متعددة الأضلاع على سطح سبخة جافة في حوض بادووتر."],
    ["مسطحات بادووتر الملحية", "منظر واسع للأملاح والجبال المحيطة بالحوض المغلق."],
    ["رواسب تبخرية في الحوض", "سطح ملحي متشقق تشكل مع تبخر المياه وتغير الظروف السطحية."]
  ]
};

const siteScienceData = {
  "meteor-crater": {
    geology: "فوهة اصطدام قطرها نحو 1.2 كم وعمقها الحالي نحو 170–180 م، تشكلت قبل قرابة 50 ألف سنة بفعل جسم غني بالحديد والنيكل. تحيط بها مواد مقذوفة وصخور متكسرة بالصدمة.",
    climate: "بيئة شبه صحراوية؛ لا تعرض المنصة قياسات محلية للحرارة أو الهطول.",
    rocks: "حجر رملي وحجر جيري وصخور متكسرة بفعل الاصطدام؛ الجسم المصطدم غني بالحديد والنيكل.",
    terrain: "حافة مرتفعة، جدار داخلي منحدر، حوض الفوهة وغطاء من المواد المقذوفة.",
    water: "لا توجد موارد مائية سطحية دائمة موثقة ضمن سجل هذه الصفحة.",
    mars: "تتيح مقارنة شكل فوهة اصطدام وموادها بصور الفوهات المريخية، ولا تمثل مناخ المريخ أو غلافه الجوي.",
    research: "دراسة عمليات الاصطدام وتكوّن الفوهات وتوزع الصخور والمواد المقذوفة.",
    task: "ابدأ من الحافة، اقترب من الجدار، ثم استكشف الحوض واجمع نماذج تعليمية من الصخور المتأثرة بالاصطدام.",
    points: [
      { title: "حافة الفوهة", text: "الفوهة بنية اصطدام قطرها نحو 1.2 كم؛ ارتفاع الحافة في هذا المشهد التوضيحي ليس قياسًا ميدانيًا.", x: 2, z: 0 },
      { title: "الجدار الداخلي", text: "تُظهر الفوهة جدارًا منحدرًا وطبقات صخرية متأثرة بالاصطدام. العمق المرجعي الحالي نحو 170–180 م.", x: -4, z: -5 },
      { title: "مواد مقذوفة", text: "تنتشر مواد قذف وصخور متكسرة حول الفوهة؛ موضع العلامة داخل اللعبة تقريبي.", x: 17, z: 9 }
    ],
    sources: [{ name: "NASA Earth Observatory: Meteor Crater", url: "https://images.nasa.gov/details/iss074e0208832" }, { name: "Barringer Meteor Crater", url: "https://meteorcrater.com/" }]
  },
  atacama: {
    geology: "صحراء فائقة الجفاف تضم رواسب ملحية ومراوح غرينية وأودية جافة، مع صخور بركانية ورسوبية.",
    climate: "من أشد المناطق غير القطبية جفافًا؛ قد تمر سنوات بلا هطول يُذكر في بعض أجزائها. الرطوبة الداخلية منخفضة والإشعاع الشمسي قوي، من دون أرقام محلية معروضة هنا.",
    rocks: "رواسب وأملاح تشمل الجبس والهاليت، إلى جانب صخور بركانية ورسوبية.",
    terrain: "أحواض جافة، مراوح غرينية، مجارٍ قديمة وتلال صخرية مكشوفة.",
    water: "الماء السائل نادر وغير منتظم في المناطق شديدة الجفاف؛ لا تمثل الرواسب الملحية مورد ماء متاحًا.",
    mars: "الجفاف والتربة والاختبارات الميدانية تفيد تطوير أدوات البحث عن الحياة، لكنها لا تحاكي ضغط المريخ أو غلافه الجوي.",
    research: "اختبار أجهزة البحث عن الحياة وتحليل التربة، ودراسة حدود كشف الإشارات الحيوية في بيئة جافة.",
    task: "اجمع عينات تمثيلية من التربة والرواسب الملحية، افحصها، وقيّم صعوبة رصد مؤشرات الحياة الدقيقة.",
    points: [
      { title: "مروحة غرينية", text: "تتجمع الرواسب عند مخارج الأودية؛ صورة NASA المرجعية توثق مجرى جافًا ولا تحدد تركيب العينة الافتراضية.", x: -14, z: -12 },
      { title: "قشرة ملحية", text: "قد تشمل الرواسب الجبس والهاليت. يلزم تحليل عينة فعلية لتحديد المعادن في موضع بعينه.", x: 12, z: -4 },
      { title: "منطقة فائقة الجفاف", text: "تتكيف كائنات دقيقة مع الجفاف في بعض البيئات؛ صعوبة العثور عليها لا تثبت غياب الحياة.", x: 5, z: 17 }
    ],
    sources: [{ name: "NASA: Dry Streambed in Northern Chile", url: "https://images.nasa.gov/details/PIA16191" }, { name: "NASA Astrobiology", url: "https://astrobiology.nasa.gov/" }]
  },
  hawaii: {
    geology: "بيئة بركانية في الجزيرة الكبرى، مع التركيز على كيلاويا وماونا لوا وتدفقات حمم متجمدة وشقوق وفوهات بركانية.",
    climate: "الظروف تختلف مع الارتفاع والاتجاه والموقع؛ لا تُعرض هنا قيمة مناخية واحدة للأرخبيل.",
    rocks: "تسود الصخور البازلتية. تشمل أشكال تدفق الحمم Pāhoehoe الناعمة نسبيًا وʻAʻā الوعرة، مع أنابيب حمم.",
    terrain: "حقول حمم قديمة، فوهات وشقوق بركانية وأنابيب حمم؛ المشهد ليس كله نشطًا أو خطيرًا.",
    water: "الماء متغير مكانيًا ومناخيًا؛ لا تُعد الحمم البركانية موردًا مائيًا.",
    mars: "تدعم دراسة الصخور البركانية والروبوتات واختبارات العمل الميداني مثل NASA BASALT؛ الأنابيب قد تكون ذات أهمية لاستكشاف المريخ، دون افتراض تطابقها.",
    research: "فهم الصخور البركانية وتطوير تقنيات الاستطلاع والعمل الميداني في تضاريس وعرة.",
    task: "ميّز بين أسطح Pāhoehoe وʻAʻā، افحص البازلت، واستكشف مدخل أنبوب حمم قديم.",
    points: [
      { title: "تدفق Pāhoehoe", text: "تتخذ هذه الحمم عادة سطحًا متحرك المظهر أو حبليًا بعد التصلب؛ الشكل هنا تمثيل بصري.", x: -14, z: 6 },
      { title: "تدفق ʻAʻā", text: "سطح حمم متصلب خشن ومجزأ؛ لا يعني وجوده أن الحمم نشطة حاليًا.", x: 13, z: 12 },
      { title: "أنبوب حمم", text: "قد توفر الأنابيب البركانية الطبيعية مأوى أو سجلًا جيولوجيًا مهمًا للاستكشاف الكوكبي؛ هذا الممر لعبة تعليمية.", x: 4, z: -17 }
    ],
    sources: [{ name: "USGS Hawaiian Volcano Observatory", url: "https://www.usgs.gov/observatories/hvo" }, { name: "NASA ASTER: Island of Hawaii", url: "https://images.nasa.gov/details/PIA02604" }, { name: "NASA BASALT", url: "https://basaltproject.org/" }]
  },
  devon: {
    geology: "تضم جزيرة ديفون فوهة هوتون ذات قطر يقارب 20 كم وعمر يقارب 38 مليون سنة، مع صخور متأثرة بالاصطدام.",
    climate: "بيئة قطبية باردة وجافة؛ الغطاء النباتي محدود للغاية ولا تُعرض قياسات طقس آنية.",
    rocks: "صخور مكشوفة ومواد متكسرة مرتبطة بالفوهة، مع تربة دائمة التجمد (Permafrost).",
    terrain: "تضاريس صخرية وجليدية واسعة حول فوهة هوتون، مع أرض متجمدة وعزلة ميدانية.",
    water: "يوجد جليد وماء متجمد موسميًا؛ لا تفترض اللعبة توفر ماء سائل صالح للاستخدام.",
    mars: "استُخدمت المنطقة لمحاكاة عمليات استكشاف المريخ واختبار الروبوتات وجمع العينات؛ التشابه عملياتي وجيولوجي محدود.",
    research: "اختبار حركة الروبوتات والاستطلاع وأخذ العينات في بيئة قطبية معزولة.",
    task: "اعبر السطح الصخري والجليدي، وافحص التربة المتجمدة والصخور المتأثرة بالاصطدام.",
    points: [
      { title: "فوهة هوتون", text: "فوهة اصطدام قطرها نحو 20 كم وعمرها نحو 38 مليون سنة؛ تختلف عن فوهة Meteor Crater في أريزونا.", x: -17, z: -9 },
      { title: "تربة دائمة التجمد", text: "تبقى التربة متجمدة مدة طويلة؛ العلامة لا تمثل عينة حقلية أو قياس حرارة.", x: 14, z: -13 },
      { title: "سطح صخري وجليدي", text: "تجعل التضاريس والعزلة الحركة والاستطلاع الميداني تحديًا لوجستيًا.", x: 8, z: 16 }
    ],
    sources: [{ name: "NASA: K-10 Rover near Haughton Crater", url: "https://images.nasa.gov/details/ARC-2007-ACD09-0255-001" }, { name: "Haughton-Mars Project", url: "https://haughtonmarsproject.com/" }]
  },
  mcmurdo: {
    geology: "تضم الوديان الجافة مكاشف صخرية وتربة حصوية ورملية، إضافة إلى أنهار جليدية وبحيرات مغطاة بالجليد.",
    climate: "من أشد البيئات القطبية جفافًا وبرودة؛ تهب رياح كاتاباتية قوية، ويحدث ذوبان موسمي محدود. لا تعرض الصفحة قياسات آنية.",
    rocks: "صخور مكشوفة ورواسب حصوية ورملية ومواضع ترسب ملحي.",
    terrain: "تشمل وديان Taylor وWright وVictoria، ومجاري ذوبان موسمية وأنهارًا جليدية.",
    water: "بحيرات تحت/مغطاة بالجليد، منها Lake Bonney وLake Fryxell وLake Hoare؛ الملوحة والظروف تختلف بين المواقع.",
    mars: "تفيد في دراسة الأحياء الدقيقة والماء في ظروف قاسية واختبار معدات الاستكشاف؛ الجليد والجو الأرضي لا يطابقان المريخ.",
    research: "دراسة الحياة الميكروبية والماء والذوبان الموسمي في البيئات شديدة البرودة والجفاف.",
    task: "استكشف الوادي، وخذ عينات تعليمية من التربة والجليد، وافحص أثر الأملاح والذوبان المحدود.",
    points: [
      { title: "نهر تايلور الجليدي", text: "نهر جليدي يغذي جداول ذوبان موسمية محدودة في الوادي؛ التوقيت والكمية يتغيران.", x: -15, z: -12 },
      { title: "بحيرات مغطاة بالجليد", text: "تشمل المنطقة بحيرات Bonney وFryxell وHoare؛ لا تمثل بيانات اللعبة قياسًا لملوحتها.", x: 13, z: -5 },
      { title: "تربة مكشوفة", text: "تعيش كائنات دقيقة متكيفة مع الظروف القاسية في أجزاء من هذه البيئة؛ النموذج لا يرصدها مباشرة.", x: 7, z: 17 }
    ],
    sources: [{ name: "NASA ASTER: Dry Valleys, Antarctica", url: "https://images.nasa.gov/details/PIA12461" }, { name: "McMurdo Dry Valleys LTER", url: "https://mcm.lternet.edu/" }]
  },
  "death-valley": {
    geology: "حوض مغلق شديد الحرارة يضم Badwater Basin، الذي يقع نحو 86 م تحت مستوى سطح البحر، ومسطحات ملحية وكثبان Mesquite Flat.",
    climate: "بيئة صحراوية شديدة الحرارة؛ تتباين الظروف بحسب الموسم والموقع. لا تعرض الصفحة حرارة آنية أو قياسًا ميدانيًا.",
    rocks: "تكوينات صخرية ورسوبية ومعادن شائعة تشمل الهاليت والجبس والكالسيت.",
    terrain: "حوض ملحي وكثبان رملية وجبال وأودية وطبقات صخرية مكشوفة.",
    water: "تترسب الأملاح مع تبخر المياه في الحوض؛ تظهر المياه أو آثار الجريان مؤقتًا وتتغير بمرور الزمن.",
    mars: "تتيح دراسة التعرية والرواسب وتفسير الأسطح الجافة، لكنها لا تحاكي الضغط أو الغلاف الجوي المريخي.",
    research: "دراسة التبخر والتعرية وتكوّن الرواسب الملحية وتغير تضاريس الحوض.",
    task: "اجمع عينات تعليمية من القشرة والرواسب، حلل تركيبها المحتمل، وقارن الحوض بالجبال المحيطة.",
    points: [
      { title: "حوض بادووتر", text: "يقع قاع الحوض نحو 86 م تحت مستوى سطح البحر؛ الفرق في اللعبة تمثيل تضاريسي وليس مقياس ارتفاع.", x: -17, z: -8 },
      { title: "قشرة ملحية", text: "تترك عملية تبخر المياه رواسب ملحية؛ لا يحدد مظهر الصورة وحده معدنًا أو تركيزًا.", x: 13, z: 4 },
      { title: "كثبان Mesquite Flat", text: "تضيف الكثبان تضاريس رملية إلى المشهد الصحراوي وتختلف عن أرض السبخة.", x: 7, z: 18 }
    ],
    sources: [{ name: "NASA ASTER: Badwater, Death Valley", url: "https://images.nasa.gov/details/PIA26197" }, { name: "Death Valley National Park", url: "https://www.nps.gov/deva/" }]
  }
};

sites.forEach(site => {
  site.gallery = sitePhotoCatalog[site.id].map(([title, caption], index) => ({
    src: `assets/sites/${site.id}/photo-${String(index + 1).padStart(2, "0")}.jpeg`,
    alt: `${title} · ${site.ar}`,
    title,
    caption,
    credit: "صورة ميدانية رفعها المستخدم",
    date: "تاريخ الالتقاط غير متاح",
    source: "صورة مرفوعة من المستخدم"
  }));
  site.image = site.gallery[0];
  site.science = siteScienceData[site.id];
});

const siteGroups = {
  lunar: { title: "بيئات مشابهة للقمر", eyebrow: "استكشاف تضاريس القمر", description: "ثلاثة مواقع أرضية تساعد على دراسة خصائص جيولوجية أو تضاريسية محددة. التشابه جزئي، ولا يعني محاكاة الجاذبية أو الإشعاع أو البيئة القمرية كاملة.", ids: ["meteor-crater", "hawaii", "devon"] },
  mars: { title: "بيئات مشابهة للمريخ", eyebrow: "استكشاف تضاريس المريخ", description: "ثلاث بيئات أرضية تتيح اختبار أسئلة محددة عن الجفاف أو التضاريس أو العمل الروبوتي. لكل موقع اختلافات مهمة عن ضغط المريخ وغلافه الجوي وإشعاعه.", ids: ["atacama", "death-valley", "mcmurdo"] }
};

const nasaSourcePages = {
  "meteor-crater": { id: "iss074e0208832", title: "Meteor Crater in Arizona", url: "https://images.nasa.gov/details/iss074e0208832" },
  hawaii: { id: "PIA02604", title: "ASTER Images the Island of Hawaii", url: "https://images.nasa.gov/details/PIA02604" },
  devon: { id: "ARC-2007-ACD09-0255-001", title: "K-10 Rover near Haughton Crater", url: "https://images.nasa.gov/details/ARC-2007-ACD09-0255-001" },
  atacama: { id: "PIA16191", title: "Dry Streambed on Alluvial Fan in Northern Chile", url: "https://images.nasa.gov/details/PIA16191" },
  "death-valley": { id: "PIA26197", title: "Badwater, Death Valley", url: "https://images.nasa.gov/details/PIA26197" },
  mcmurdo: { id: "PIA12461", title: "Dry Valleys, Antarctica", url: "https://images.nasa.gov/details/PIA12461" }
};
const equipmentCatalog = {
  "oxygen-tank": { name: "خزان أكسجين", image: "assets/gear/oxygen-tank.svg", effect: "إمداد أكسجين لرحلة مدتها دقيقتان؛ العداد يعمل تلقائيًا.", actionLabel: "يعمل تلقائيًا", action: null },
  "thermal-layer": { name: "طبقة حرارية", image: "assets/gear/thermal-layer.svg", effect: "تحمي من موجات البرودة والحرارة على القمر عند تفعيلها.", actionLabel: "تشغيل الحماية", action: "thermal-layer" },
  "dust-filter": { name: "مرشح الغبار", image: "assets/gear/dust-filter.svg", effect: "يقلل عتامة عاصفة الغبار وضررها على المريخ.", actionLabel: "تنشيط المرشح", action: "dust-filter" },
  "comms-unit": { name: "وحدة اتصال", image: "assets/gear/comms-unit.svg", effect: "ترسل نداءً وتعرض اتجاه أقرب عينة والمسافة إليها.", actionLabel: "إرسال نداء", action: "comms-unit" },
  "med-kit": { name: "حقيبة إسعاف", image: "assets/gear/med-kit.svg", effect: "تعالج إصابات الهبوط وتستعيد 40 نقطة سلامة مرة واحدة.", actionLabel: "استخدام الإسعاف", action: "med-kit" }
};
const teamMembers = [{ name: "Marwan Osama Mohamed", leader: true }, "Alaa Ramadan", "Martina mounir labib", "Menna Ahmed", "Haneen Khairy Ezzedine"];

const siteDescriptions = {
  "meteor-crater": { brief: "فوهة اصطدام في أريزونا تتيح دراسة شكل الفوهات والمواد المقذوفة. تفيد المقارنة الجيولوجية مع فوهات القمر، لكنها ليست نسخة من سطحه.", type: "فوهة اصطدام", subsite: "فوهة بارينجر (Meteor Crater)", similarities: "شكل الفوهة والمواد المرتبطة بالاصطدام أسئلة جيولوجية يمكن مقارنتها بصور الفوهات القمرية.", difference: "الفوهة بيئة أرضية؛ الغلاف الجوي والجاذبية والتعرية والبيئة المحيطة تختلف عن القمر.", guide: "تقع فوهة ميتيور في أريزونا بالولايات المتحدة، وهي فوهة ناتجة عن اصطدام نيزكي. تساعد دراسة شكلها والمواد المقذوفة حولها على فهم تضاريس الاصطدام ومقارنتها بالفوهات القمرية. التشابه جيولوجي في بعض السمات فقط، وليست الفوهة نسخة مطابقة من سطح القمر." },
  hawaii: { brief: "تُظهر بيانات NASA ASTER تدفقات حمم حول ماونا لوا واختلاف الإشارات الطيفية للصخور والسطح؛ الصور الفضائية لا تمثل عينات ميدانية.", type: "تضاريس بركانية وتدفقات حمم", subsite: "ماونا لوا، الجزيرة الكبيرة في هاواي", similarities: "تدفقات الحمم وتباين استجابتها الطيفية موضوع مناسب لدراسة الاستشعار عن بعد والسطوح البركانية.", difference: "الصورة متعددة الأطياف لا تحاكي جاذبية القمر أو غلافه الجوي أو الإشعاع، ولا تحدد وحدها التركيب المعدني الدقيق.", guide: "تقع ماونا لوا في الجزيرة الكبيرة من جزر هاواي. سجل NASA ASTER من Terra يُظهر تدفقات الحمم حول البركان ويشرح تباين استجاباتها في نطاقات الأشعة تحت الحمراء. تساعد هذه البيانات على دراسة التضاريس البركانية والاستشعار عن بعد، لكنها ليست عينة صخرية ولا محاكاة لبيئة القمر." },
  "death-valley": { brief: "حوض بادووتر في وادي الموت حوض صحراوي وسبخة ملحية تتغير ملامحها مع الأحداث المطرية؛ صور ASTER المتاحة توثق مشاهد مؤرخة لا ظروفًا دائمة.", type: "حوض صحراوي وسبخة ملحية", subsite: "حوض بادووتر", similarities: "السهول الجافة والرواسب والتغير السطحي الموثق بصور مؤرخة تتيح أسئلة عن الملاحة وقراءة الصور.", difference: "الماء السطحي متغير زمنيًا، والجاذبية والغلاف الجوي والمناخ الأرضي لا تماثل المريخ؛ الصور لا تثبت كيمياء الرواسب.", guide: "توثق صور NASA ASTER مشهدين مؤرخين لحوض بادووتر، أحدهما بعد امتلاء مؤقت بالمياه. تفيد المقارنة في دراسة تغير السطح وقراءة الصور، لكنها لا تقدم قياسات مناخية أو كيميائية ولا تجعل وادي الموت بديلًا مطابقًا للمريخ." },
  atacama: { brief: "توثق صور NASA مجرى جافًا على مروحة غرينية في أتاكاما، كما توثق نشاطًا ميدانيًا لاختبار روبوتات في يونغاي؛ لا تمثل الصور قياسات ضغط أو كيمياء.", type: "مجرى جاف ومروحة غرينية", subsite: "محيط يونغاي، شمال تشيلي", similarities: "المجرى الجاف وتفاوت أحجام الحبيبات الموصوفان في سجل NASA يقدمان مثالًا لدراسة الصور السطحية وأدوات أخذ العينات.", difference: "هذه أدلة أرضية وصور تاريخية؛ لا تقيس ضغط المريخ أو تركيب غلافه الجوي أو إشعاعه.", guide: "تقع منطقة يونغاي في صحراء أتاكاما شمال تشيلي. يصف سجل NASA صورة ASTER لمجرى جاف على مروحة غرينية وتفاوت أحجام الحبيبات، كما توثق NASA Ames اختبار روبوتات في المنطقة. تفيد هذه الأمثلة في دراسة قراءة الصور والاختبارات الميدانية، لكنها لا تقدم قياسات لغلاف المريخ أو ضغطه." },
  devon: { brief: "تجمع جزيرة ديفون القطبية في كندا بين تضاريس صخرية وفوهة هوتون. يمكن دراسة بنية الاصطدام والاستطلاع الروبوتي فيها، لا اعتبارها نسخة من سطح القمر.", type: "بيئة قطبية وفوهة اصطدام", subsite: "فوهة هوتون والبيئات المحيطة", similarities: "فوهة الاصطدام والتضاريس الصخرية تتيح مقارنة أشكال الفوهات واختبار عمليات الاستطلاع الميداني.", difference: "الجاذبية والغلاف الجوي والمناخ القطبي والأنظمة البيئية الأرضية تختلف عن القمر؛ التشابه جيولوجي وعملياتي محدود.", guide: "تقع فوهة هوتون في جزيرة ديفون بنونافوت، كندا، ضمن بيئة قطبية صخرية قاسية. تجمع المنطقة بين تضاريس الاصطدام والعزلة الميدانية، وقد دعمت تجارب للمركبات والروبوتات. يمكن مقارنة بعض أشكال الفوهات واختبار عمليات الاستطلاع، لكن البيئة لا تحاكي جاذبية القمر أو فراغه أو إضاءته." },
  mcmurdo: { brief: "الوديان الجافة في أنتاركتيكا بيئة قطبية شديدة الجفاف والبرودة، تتيح دراسة التربة والصخور واختبار معدات الاستكشاف مع مراعاة قيودها.", type: "وديان صحراوية قطبية", subsite: "الوديان الجافة في ماكموردو", similarities: "الجفاف والبرودة وبعض الترب المكشوفة تفيد في اختبار معدات الاستكشاف وأساليب البحث عن مؤشرات الحياة.", difference: "البيئة القطبية شديدة البرودة والجليد الموسمي والضغط الأرضي لا تطابق درجات الحرارة أو الضغط الجوي على المريخ.", guide: "تقع الوديان الجافة في منطقة ماكموردو بالقارة القطبية الجنوبية، وتضم تربة مكشوفة وصخورًا وبيئات شديدة الجفاف والبرودة. تساعد على دراسة البيئات القاسية واختبار معدات الاستكشاف وتقنيات البحث عن مؤشرات الحياة. لكن البرد القطبي والجليد الموسمي والضغط الجوي الأرضي لا يطابق ظروف المريخ." }
};
sites.forEach(site => {
  const details = siteDescriptions[site.id];
  site.brief = details.brief;
  site.type = details.type;
  site.subsite = details.subsite;
  site.target = ["meteor-crater", "hawaii", "devon"].includes(site.id) ? "القمر" : "المريخ";
  site.guide.summary = details.guide;
  site.guide.similarity = details.similarities;
  site.guide.difference = details.difference;
  site.guide.advantage = site.guide.advantage;
  site.guide.more = `${details.similarities} ${details.difference}`;
});
const marsDisplayImage = { src: "assets/mars-hubble-phobos.jpg" };
const marsPanorama = { src: "assets/mars-spirit-panorama.jpg", title: "بانوراما Lookout من المركبة Spirit" };

const criteria = [
  { id: "geology", label: "الجيولوجيا والمعادن", weight: 16, direction: 1 },
  { id: "terrain", label: "التضاريس والسطح", weight: 14, direction: 1 },
  { id: "climate", label: "الحرارة والبيئة", weight: 12, direction: 1 },
  { id: "water", label: "الجفاف والماء / الجليد", weight: 12, direction: 1 },
  { id: "robotics", label: "اختبار الروبوتات", weight: 12, direction: 1 },
  { id: "field", label: "العمليات الميدانية", weight: 10, direction: 1 },
  { id: "data", label: "جودة البيانات", weight: 10, direction: 1 },
  { id: "access", label: "الوصول والسلامة", weight: 7, direction: 1 },
  { id: "difference", label: "الاختلاف عن المريخ", weight: 7, direction: -1 }
];

const storageKeys = { shortlist: "atlas-shortlist", pinned: "atlas-pinned", scores: "atlas-scores", weights: "atlas-weights" };
const app = document.getElementById("app");
let currentMap = null;
let mapResizeFrame = null;
let marsGlobeFrame = null;
let spaceGameEngine = null;
let gameResumeSaveTimer = null;
const gamePresentation = { active: false, content: null, layer: null, cancelled: false, resumeChoice: false, cancelOrientationWait: null, orientationPaused: false };
const MARS_ROTATION_SECONDS = 60;
let searchTerm = "";
let scoreState = readStore(storageKeys.scores, {});
let evidenceState = readStore("atlas-score-evidence", {});
let confidenceState = readStore("atlas-confidence", {});
let weights = readStore(storageKeys.weights, Object.fromEntries(criteria.map(item => [item.id, item.weight])));
let shortlist = readStore(storageKeys.shortlist, []);
let pinnedSelection = readStore(storageKeys.pinned, null);
const spaceGameStorageKey = "planetary-space-explorer";
let spaceGame = loadSpaceGame();
let guideStarted = false;
let guideBusy = false;
let pendingGuideResponse = null;
let activeAssistantReveal = null;
let guideAudioContext = null;
let guideAudioUnlocked = false;
let guideContext = readStore("atlas-guide-context", null);
let guideHistory = readStore("atlas-guide-conversation", []).filter(message => message && typeof message.text === "string" && ["user", "assistant"].includes(message.kind)).slice(-40);

function readStore(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; }
}
function writeStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage may be disabled by the browser. */ }
}
function freshSpaceGame() {
  return { sampleAnalysisVersion: 2, character: null, destination: null, selectedSite: null, suit: null, spacecraft: null, equipment: [], discovered: [], readSites: [], discoveredPoints: [], discoveredSamples: [], analyzedSamples: [], journeyLog: [], quizResults: {}, completedMissions: [], collectedSamples: [], analyzedSites: [], roverUnlocked: false, settings: { sound: true, soundVersion: 1, quality: "medium", mouseSensitivity: 1, cameraShake: true }, xp: 0, resumeState: null };
}
function loadSpaceGame() {
  const stored = readStore(spaceGameStorageKey, {});
  const saved = stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
  const knownSites = new Set(sites.map(site => site.id));
  const resumeState = saved.resumeState;
  const hasValidResumeState = resumeState && [resumeState.x, resumeState.y, resumeState.z, resumeState.cameraYaw, resumeState.cameraPitch, resumeState.timeLimit].every(Number.isFinite);
  const collectedSamples = new Set(Array.isArray(saved.collectedSamples) ? saved.collectedSamples.filter(id => /^(earth|moon|mars):/.test(id)) : []);
  const hasSeparateSampleAnalysis = saved.sampleAnalysisVersion === 2;
  const analyzedSamples = new Set(hasSeparateSampleAnalysis && Array.isArray(saved.analyzedSamples) ? saved.analyzedSamples : []);
  const legacySite = saved.character === "alien" && knownSites.has(saved.selectedSite)
    ? sites.find(site => site.id === saved.selectedSite && site.target === (saved.destination === "moon" ? "القمر" : "المريخ"))
    : null;
  if (legacySite) {
    const legacyId = `sample-${legacySite.id}`;
    const migratedSample = window.SpaceGameData.samplesFor({ character: "alien", destination: saved.destination, site: legacySite })[0];
    if (migratedSample && Array.isArray(saved.collectedSamples) && saved.collectedSamples.includes(legacyId)) collectedSamples.add(migratedSample.id);
    if (hasSeparateSampleAnalysis && migratedSample && Array.isArray(saved.analyzedSites) && saved.analyzedSites.includes(legacySite.id)) analyzedSamples.add(migratedSample.id);
  }
  const completedMissions = Array.isArray(saved.completedMissions) ? saved.completedMissions : [];
  const migratedMissions = hasSeparateSampleAnalysis ? completedMissions : completedMissions.filter(id => !/^(sample-trio|site-stage)-/.test(id));
  const analyzedSites = hasSeparateSampleAnalysis && Array.isArray(saved.analyzedSites) ? saved.analyzedSites.filter(id => knownSites.has(id)) : [];
  if (!hasSeparateSampleAnalysis) {
    writeStore(spaceGameStorageKey, {
      ...saved,
      sampleAnalysisVersion: 2,
      collectedSamples: [...collectedSamples],
      analyzedSamples: [],
      analyzedSites: [],
      completedMissions: migratedMissions
    });
  }
  return {
    ...freshSpaceGame(),
    sampleAnalysisVersion: 2,
    character: ["alien", "astronaut"].includes(saved.character) ? saved.character : null,
    destination: ["moon", "mars"].includes(saved.destination) ? saved.destination : null,
    selectedSite: knownSites.has(saved.selectedSite) ? saved.selectedSite : null,
    suit: ["moon-suit", "mars-suit"].includes(saved.suit) ? saved.suit : null,
    spacecraft: ["lunar-lander", "mars-lander"].includes(saved.spacecraft) ? saved.spacecraft : null,
    equipment: Array.isArray(saved.equipment) ? saved.equipment.filter(id => ["oxygen-tank", "thermal-layer", "dust-filter", "tool-kit", "med-kit", "sample-bag", "comms-unit", "thermal-suit"].includes(id)) : [],
    discovered: Array.isArray(saved.discovered) ? saved.discovered.filter(id => knownSites.has(id)) : [],
    readSites: Array.isArray(saved.readSites) ? saved.readSites.filter(id => knownSites.has(id)) : [],
    discoveredPoints: Array.isArray(saved.discoveredPoints) ? saved.discoveredPoints.filter(id => typeof id === "string" && [...knownSites].some(siteId => id.startsWith(`${siteId}-point-`))) : [],
    journeyLog: Array.isArray(saved.journeyLog) ? saved.journeyLog.filter(event => event && typeof event.title === "string" && typeof event.detail === "string" && Number.isFinite(Date.parse(event.at))).slice(-200).map(event => ({
      id: typeof event.id === "string" ? event.id.slice(0, 80) : `${Date.parse(event.at)}`,
      type: typeof event.type === "string" ? event.type.slice(0, 32) : "note",
      siteId: knownSites.has(event.siteId) ? event.siteId : null,
      title: event.title.slice(0, 160),
      detail: event.detail.slice(0, 600),
      at: new Date(event.at).toISOString()
    })) : [],
    discoveredSamples: Array.isArray(saved.discoveredSamples) ? saved.discoveredSamples.filter(id => /^(earth|moon|mars):/.test(id)) : [],
    analyzedSamples: [...analyzedSamples],
    quizResults: saved.quizResults && typeof saved.quizResults === "object" ? saved.quizResults : {},
    completedMissions: migratedMissions,
    collectedSamples: [...collectedSamples],
    analyzedSites,
    roverUnlocked: Boolean(saved.roverUnlocked),
    settings: {
      sound: saved.settings?.soundVersion === 1 ? Boolean(saved.settings.sound) : true,
      soundVersion: 1,
      quality: ["low", "medium", "high"].includes(saved.settings?.quality) ? saved.settings.quality : "medium",
      mouseSensitivity: Number.isFinite(saved.settings?.mouseSensitivity) ? Math.min(2, Math.max(0.5, saved.settings.mouseSensitivity)) : 1,
      cameraShake: saved.settings?.cameraShake !== false
    },
    xp: Number.isFinite(saved.xp) ? Math.max(0, saved.xp) : 0,
    resumeState: hasValidResumeState ? { x: resumeState.x, y: resumeState.y, z: resumeState.z, cameraYaw: resumeState.cameraYaw, cameraPitch: resumeState.cameraPitch, timeLimit: resumeState.timeLimit } : null
  };
}
function saveSpaceGame() {
  writeStore(spaceGameStorageKey, spaceGame);
}
function recordJourneyEvent(type, title, detail, siteId = spaceGame.selectedSite) {
  const event = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    siteId: sites.some(site => site.id === siteId) ? siteId : null,
    title: String(title).slice(0, 160),
    detail: String(detail).slice(0, 600),
    at: new Date().toISOString()
  };
  spaceGame.journeyLog = [...(spaceGame.journeyLog || []), event].slice(-200);
  saveSpaceGame();
}
function hasValidSavedSpaceGame() {
  if (!spaceGame || !["alien", "astronaut"].includes(spaceGame.character) || !["moon", "mars"].includes(spaceGame.destination)) return false;
  const resume = spaceGame.resumeState;
  if (resume && [resume.x, resume.y, resume.z, resume.cameraYaw, resume.cameraPitch, resume.timeLimit].every(Number.isFinite)) return true;
  const site = spaceGame.character === "alien"
    ? sites.find(item => item.id === spaceGame.selectedSite && item.target === (spaceGame.destination === "moon" ? "القمر" : "المريخ"))
    : null;
  const samples = window.SpaceGameData.samplesFor({ character: spaceGame.character, destination: spaceGame.destination, site });
  const sampleIds = new Set(samples.map(sample => sample.id));
  return spaceGame.collectedSamples.some(id => sampleIds.has(id))
    || spaceGame.analyzedSamples.some(id => sampleIds.has(id))
    || spaceGame.completedMissions.includes(spaceGame.character === "alien" && site
      ? siteStageMissionId(site.id)
      : `sample-trio-${spaceGame.character === "alien" ? "earth" : spaceGame.destination}-${spaceGame.destination}`);
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function route() { return decodeURIComponent(location.hash.replace(/^#\/?/, "")) || "home"; }
function sitePath(site) { return `#site/${site.id}`; }
function formatCoord(value) { return Number(value).toFixed(4); }
function linkButton(href, label, extra = "") { return `<a class="button ${extra}" href="${href}">${label}</a>`; }
function heading(eyebrow, title, description, actions = "") {
  return `<div class="page-heading fade-in"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
}
function siteCard(site) {
  const isMoon = site.target === "القمر";
  const targetLabel = isMoon ? "محاكاة القمر" : "محاكاة المريخ";
  const targetClass = isMoon ? "target-moon" : "target-mars";
  return `<article class="site-card panel fade-in ${targetClass}">
    <div class="site-card-top">
      <img src="${escapeHtml(site.image.src)}" alt="${escapeHtml(site.image.alt)}" loading="lazy">
      <div class="site-card-badges">
        <span class="site-type ${targetClass}">
          <span class="type-dot"></span>
          <span>${targetLabel}</span>
        </span>
        <span class="site-number">${site.number} <i>/ ${String(sites.length).padStart(2, "0")}</i></span>
      </div>
      <div class="site-card-gradient"></div>
    </div>
    <div class="site-card-content">
      <div class="site-card-header">
        <h3>${escapeHtml(site.ar)}</h3>
        <div class="site-en" lang="en" dir="ltr">${escapeHtml(site.en)}</div>
      </div>
      <p class="site-country">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${escapeHtml(site.country)} · ${escapeHtml(site.subsite)}</span>
      </p>
      <p class="site-card-brief">${escapeHtml(site.brief)}</p>
      <div class="site-card-foot">
        <span class="coords">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span>${formatCoord(site.lat)}, ${formatCoord(site.lon)}</span>
        </span>
        <a class="site-open-btn" href="${sitePath(site)}">
          <span>ملف الموقع</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </a>
      </div>
    </div>
  </article>`;
}
function sitePhoto(site) {
  return `<section class="site-detail-photo panel" aria-label="صور ${escapeHtml(site.ar)}">
    <div class="site-photo-grid">${site.gallery.map((photo, index) => `<button class="site-photo-thumb${index === 0 ? " is-featured" : ""}" type="button" data-photo-site="${site.id}" data-photo-index="${index}" aria-label="عرض ${escapeHtml(photo.title)} بحجم أكبر">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy">
      <span><strong>${escapeHtml(photo.title)}</strong><small>${escapeHtml(photo.caption)}</small></span>
    </button>`).join("")}</div>
    <p class="site-photo-credit">${escapeHtml(site.image.credit)} · ${escapeHtml(site.image.date)}</p>
  </section>${photoViewerMarkup()}`;
}
function photoViewerMarkup() {
  return `<dialog class="photo-viewer" data-photo-viewer aria-label="عارض صور المواقع">
    <button class="photo-viewer-close" type="button" data-photo-close aria-label="إغلاق عارض الصور">×</button>
    <button class="photo-viewer-arrow photo-viewer-prev" type="button" data-photo-step="-1" aria-label="الصورة السابقة">‹</button>
    <figure><img data-photo-viewer-image alt=""><figcaption><strong data-photo-viewer-title></strong><span data-photo-viewer-caption></span><small data-photo-viewer-count></small></figcaption></figure>
    <button class="photo-viewer-arrow photo-viewer-next" type="button" data-photo-step="1" aria-label="الصورة التالية">›</button>
  </dialog>`;
}
let activePhotoViewer = null;
function updatePhotoViewer() {
  const viewer = document.querySelector("[data-photo-viewer]");
  const site = sites.find(item => item.id === activePhotoViewer?.siteId);
  if (!viewer || !site) return;
  const photo = site.gallery[activePhotoViewer.index];
  viewer.querySelector("[data-photo-viewer-image]").src = photo.src;
  viewer.querySelector("[data-photo-viewer-image]").alt = photo.alt;
  viewer.querySelector("[data-photo-viewer-title]").textContent = `${site.ar} · ${photo.title}`;
  viewer.querySelector("[data-photo-viewer-caption]").textContent = photo.caption;
  viewer.querySelector("[data-photo-viewer-count]").textContent = `${activePhotoViewer.index + 1} / ${site.gallery.length}`;
}
function openPhotoViewer(siteId, index) {
  const viewer = document.querySelector("[data-photo-viewer]");
  const site = sites.find(item => item.id === siteId);
  if (!viewer || !site) return;
  activePhotoViewer = { siteId, index: (index + site.gallery.length) % site.gallery.length };
  updatePhotoViewer();
  viewer.showModal();
}
function stepPhotoViewer(step) {
  const site = sites.find(item => item.id === activePhotoViewer?.siteId);
  if (!site) return;
  activePhotoViewer.index = (activePhotoViewer.index + step + site.gallery.length) % site.gallery.length;
  updatePhotoViewer();
}
function siteScienceMarkup(site) {
  const science = site.science;
  const facts = [
    ["الخصائص الجيولوجية", science.geology], ["المناخ", science.climate],
    ["الصخور والمعادن", science.rocks], ["التضاريس", science.terrain],
    ["المياه والموارد", science.water], ["أوجه الشبه بالمريخ", science.mars],
    ["أهمية الموقع البحثية", science.research]
  ];
  return `<section class="panel detail-panel site-science-panel">
    <div class="panel-header-row"><div class="panel-header-icon" aria-hidden="true">⌖</div><div><span class="eyebrow">ملخص ميداني · ${escapeHtml(site.en)}</span><h2>قراءة علمية سريعة</h2></div></div>
    <div class="site-science-grid">${facts.map(([label, value]) => `<article><h3>${label}</h3><p>${escapeHtml(value)}</p></article>`).join("")}</div>
    <div class="site-research-task"><strong>مهمة الاستكشاف</strong><p>${escapeHtml(science.task)}</p></div>
    <div class="site-science-sources"><strong>المصادر</strong>${science.sources.map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)} ↗</a>`).join("")}</div>
    <p class="site-science-caveat">الموقع الأرضي نموذج لدراسة خصائص محددة، وليس نسخة مطابقة للمريخ. الإحداثيات المعروضة نقاط مرجعية تقريبية، ومؤشرات اللعبة لا تمثل قياسات ميدانية.</p>
  </section>`;
}
function homePage() {
  return `<section class="hero-panel fade-in">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="pulse-indicator"></span>
        <span class="hero-badge-text">استكشاف علمي تفاعلي</span>
      </div>
      <h1>عوالم بعيدة <span class="hero-title-highlight">تبدأ من كوكب الأرض</span></h1>
      <p class="hero-description">رحلة استكشاف تفاعلية ترصد البيئات الأرضية فائقة الشبه بتضاريس القمر والمريخ، لفهم كيفية تأهيل واختبار معدات ورواد الاستكشاف الفضائي قبل الانطلاق.</p>
      <div class="hero-actions">
        <a class="button primary glow-btn" href="#lunar">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          <span>استكشف بيئات القمر</span>
        </a>
        <a class="button secondary glass-btn" href="#mars-analogs">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M18 6l4-4m0 0h-4m4 0v4"/></svg>
          <span>استكشف بيئات المريخ</span>
        </a>
        <a class="button outline-btn" href="#map">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
          <span>الخريطة التفاعلية</span>
        </a>
      </div>
    </div>

    <!-- Planetary orrery with a perspective approximation, not an orbital simulation. -->
    <div class="hero-planet-wrapper">
      <div class="hero-system-scene" data-foreground="earth" aria-label="مشهد بصري تقريبي للأرض والقمر والمريخ">
        <div class="system-starfield" aria-hidden="true"></div>
        <div class="earth-group">
          <button class="planet-select earth-select" type="button" data-planet="earth" aria-label="إحضار الأرض إلى المقدمة" aria-pressed="true">
            <span class="planet-sphere earth-sphere" aria-hidden="true">
              <span class="earth-clouds"></span>
              <span class="planet-lighting"></span>
              <span class="planet-atmosphere"></span>
            </span>
            <span class="planet-name">الأرض</span>
          </button>
          <div class="moon-orbit" aria-hidden="true">
            <button class="planet-select moon-select" type="button" tabindex="-1" aria-label="القمر، يدور حول الأرض" disabled>
              <span class="moon-sphere"></span>
              <span class="moon-name">القمر</span>
            </button>
          </div>
        </div>
        <button class="planet-select mars-select" type="button" data-planet="mars" aria-label="إحضار المريخ إلى المقدمة" aria-pressed="false">
          <span class="planet-sphere mars-sphere" aria-hidden="true">
            <img class="mars-texture-base" src="${escapeHtml(marsDisplayImage.src)}" alt="" draggable="false">
            <canvas class="mars-globe-canvas" aria-hidden="true"></canvas>
            <span class="mars-global-texture" aria-hidden="true"></span>
            <span class="planet-lighting"></span>
            <span class="planet-atmosphere mars-atmosphere"></span>
          </span>
          <span class="planet-name">المريخ</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Modern Key Stats Strip -->
  <section class="stats-strip fade-in">
    <div class="stat-card">
      <div class="stat-icon-wrap icon-cyan">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>
      </div>
      <div class="stat-info">
        <div class="stat-num">06</div>
        <div class="stat-label">مواقع أرضية نظيرة</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon-wrap icon-mars">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M18 6l4-4m0 0h-4m4 0v4"/></svg>
      </div>
      <div class="stat-info">
        <div class="stat-num">02</div>
        <div class="stat-label">عوالم كوكبية (القمر & المريخ)</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon-wrap icon-indigo">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>
      </div>
      <div class="stat-info">
        <div class="stat-num">06</div>
        <div class="stat-label">مواقع قيد الاستكشاف</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon-wrap icon-emerald">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
      </div>
      <div class="stat-info">
        <div class="stat-num">GIS</div>
        <div class="stat-label">خرائط مدارية حية وتفاعلية</div>
      </div>
    </div>
  </section>

  <!-- World Selection Portals -->
  <section class="home-section">
    <div class="section-head">
      <div>
        <span class="eyebrow">بوابات الاستكشاف</span>
        <h2>اختر عالمًا لتبدأ الاستكشاف</h2>
        <p>استكشف البيئات التناظرية الأرضية بحسب طبيعة المحاكاة العلمية: القمر أو المريخ.</p>
      </div>
    </div>
    <div class="world-links">
      <a class="world-link lunar-link" href="#lunar">
        <img src="assets/hawaii-mauna-loa.jpg" alt="بيئات شبيهة بالقمر">
        <div class="world-link-overlay"></div>
        <div class="world-link-content">
          <span class="world-badge lunar-badge">Moon Analogues · 04 مواقع</span>
          <strong>بيئات شبيهة بالقمر</strong>
          <p>تضاريس بازلتية وفوهات بركانية وأنفاق حمم تحاكي سطح القمر وبرامج أرتيميس.</p>
          <span class="world-link-arrow">استكشف البيئات القمرية ←</span>
        </div>
      </a>
      <a class="world-link mars-link" href="#mars-analogs">
        <img src="mars-perseverance.jpg" alt="بيئات شبيهة بالمريخ">
        <div class="world-link-overlay"></div>
        <div class="world-link-content">
          <span class="world-badge mars-badge">Mars Analogues · 03 مواقع</span>
          <strong>بيئات شبيهة بالمريخ</strong>
          <p>صحاري قاحلة وتضاريس متطرفة تحاكي تربة وتاريخ المياه والمناخ على الكوكب الأحمر.</p>
          <span class="world-link-arrow">استكشف البيئات المريخية ←</span>
        </div>
      </a>
    </div>
  </section>

  <!-- All Analog Sites Grid -->
  <section class="home-section">
    <div class="section-head">
      <div>
        <span class="eyebrow">المواقع التناظرية الستة</span>
        <h2>المواقع البحثية المعتمدة</h2>
        <p>ستة مواقع أرضية موثقة بمراجع وصور NASA، ولكل منها حدود مقارنة مختلفة.</p>
      </div>
      <a class="button outline-btn" href="#gallery">معرض الصور ↗</a>
    </div>
    <div class="site-grid">
      ${sites.map(siteCard).join("")}
    </div>
  </section>

  <!-- Interactive Map Section -->
  <section class="home-section">
    <div class="home-lower">
      <div class="panel map-panel">
        <div class="section-head">
          <div>
            <span class="eyebrow">GIS · الرصد المداري</span>
            <h2>خريطة المواقع التفاعلية</h2>
            <p>رصد مواقع الاختبار الأرضية عبر صور الأقمار الصناعية من NASA GIBS.</p>
          </div>
          <a class="button small outline-btn" href="#map">تكبير الخريطة ↗</a>
        </div>
        <div class="map-wrap">
          <div class="map-canvas" id="home-map" role="application" aria-label="خريطة مصغرة لمواقع الاستكشاف"></div>
          <div class="map-note">
            <span class="live-dot"></span>
            <span>NASA GIBS Live Tiles</span>
          </div>
        </div>
      </div>

      <div class="panel why-teaser">
        <div class="why-teaser-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>
        </div>
        <span class="eyebrow">لماذا تهمنا هذه البيئات؟</span>
        <h2>أهمية الدراسات التناظرية</h2>
        <p>توفر البيئات الأرضية الشبيهة فرصة لا تعوض لرواد الفضاء والمهندسين لاختبار تقنيات الاستكشاف قبل الانطلاق إلى الفضاء السحيق.</p>
        <div class="why-highlights">
          <div class="why-chip"><span>✦</span> اختبار الجوالات والمعدات في بيئات صعبة</div>
          <div class="why-chip"><span>✦</span> تدريب الرواد على الجيولوجيا الميدانية</div>
          <div class="why-chip"><span>✦</span> اختبار أنظمة البحث عن مؤشرات الحياة القديمة</div>
        </div>
        <a class="button secondary" href="#why">اقرأ المزيد عن الأهمية العلمية ←</a>
      </div>
    </div>
  </section>

  <section class="home-section space-game-promo" aria-labelledby="space-game-promo-title">
    <div class="space-game-promo-scene" aria-hidden="true"><span class="promo-orbit promo-orbit-one"></span><span class="promo-orbit promo-orbit-two"></span><span class="promo-planet promo-moon"></span><span class="promo-planet promo-mars"></span><span class="promo-comet">✦</span></div>
    <div class="space-game-promo-copy"><span class="eyebrow">SPACE EXPLORER · مستكشف الفضاء</span><h2 id="space-game-promo-title">المهمة التالية: اكتشف نظائر الأرض</h2><p>انطلق مع مستكشف فضائي أو رائد، واعثر على مواقع أرضية حقيقية تساعد العلماء على دراسة تضاريس القمر والمريخ.</p><a class="button primary glow-btn" href="#game"><span aria-hidden="true">✦</span> ابدأ المغامرة</a></div>
    <div class="space-game-promo-character" aria-hidden="true"><span>👽</span><small>READY FOR DISCOVERY</small></div>
  </section>

  <!-- Team Teaser Card -->
  <section class="home-section">
    <div class="team-teaser-card">
      <div class="team-teaser-content">
        <span class="eyebrow">طاقم المهمة</span>
        <h2>فريق الاستكشاف</h2>
        <div class="team-motto">عوالم مختلفة، وأسئلة علمية مشتركة</div>
        <p>تعرف على أعضاء الفريق والصورة الأصلية للمشروع.</p>
        <div class="team-meta-pills">
          <div class="team-pill"><span>5</span> أعضاء الفريق</div>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a class="button primary glow-btn" href="#team">تعرف على طاقم الفريق ←</a>
          <a class="button secondary" href="#team">عرض صورة الفريق الأصلية</a>
        </div>
      </div>
      <div class="team-teaser-image">
        <img src="assets/nebula-tarantula.jpg" alt="سديم نجمي في مشهد فضائي" loading="lazy">
      </div>
    </div>
  </section>

  `;
}

function sitesPage(target) {
  const isLunar = target === "lunar";
  const groupSites = sites.filter(s => isLunar ? s.target === "القمر" : s.target === "المريخ");
  return `<div class="fade-in">
    <div class="category-hero-card ${isLunar ? "lunar-hero" : "mars-hero"}">
      <div class="category-hero-text">
        <span class="eyebrow">${isLunar ? "البيئات القمرية النظيرة" : "البيئات المريخية النظيرة"}</span>
        <h2>${isLunar ? "مواقع أرضية تحاكي تضاريس القمر" : "مواقع أرضية تحاكي تضاريس المريخ"}</h2>
        <p>${isLunar ? "مواقع أرضية جيولوجية وبركانية ذات صخور بازلتية وأنفاق حمم وفوهات صدمية، تساعد وكالات الفضاء على اختبار تقنيات الهبوط وتدريب رواد مهمات أرتيميس (Artemis)." : "بيئات صحراوية قاحلة شديدة الجفاف وأحواض مائية قديمة ومناطق قطبية متجمدة، تشكل مختبرات طبيعية لاختبار حركة الجوالات وأجهزة البحث عن مؤشرات الحياة."}</p>
      </div>
      <div class="category-hero-stats">
        <div class="cat-stat"><strong>${String(groupSites.length).padStart(2, "0")}</strong><span>مواقع بحثية</span></div>
        <div class="cat-stat"><strong>NASA</strong><span>بيانات موثقة</span></div>
      </div>
    </div>
    <div class="site-grid">${groupSites.map(siteCard).join("")}</div>
    <div class="callout info" style="margin-top:20px">
      <div class="callout-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div>
      <div><strong>تنبيه علمي منهجي:</strong> هذه أوجه شبه محددة في الجيولوجيا أو التضاريس أو الاختبارات الميدانية، وليست ادعاءً بأن أي موقع أرضي يطابق القمر أو المريخ تمامًا، فالغلاف الجوي والجاذبية والإشعاع عوامل فارقة.</div>
    </div>
  </div>`;
}


function mapPage() {
  return `${heading("استكشاف المواقع", "الخريطة التفاعلية", "خريطة صور أقمار صناعية تفاعلية. العلامات الست تمثل مواقع على الأرض فقط.")}
  <section class="panel map-panel">
    <div class="section-head">
      <div>
        <span class="eyebrow">رصد الأرض المداري</span>
        <h2>بيانات NASA GIBS المباشرة</h2>
        <p>اختر مشهد الأقمار الصناعية أو فعّل طبقات المعالم والحدود وأسماء الأماكن الرسمية.</p>
      </div>
      <div class="map-toolbar">
        <div class="toolbar-group">
          <label for="basemap-select" class="filter-count">مشهد الأقمار:</label>
          <select id="basemap-select" aria-label="اختر صورة القمر الصناعي">
            <option value="blueMarble">Blue Marble · تضاريس وظلال عالمية</option>
            <option value="satellite">صور الأقمار الصناعية عالية الدقة (Satellite Imagery)</option>
          </select>
        </div>
        <div class="toolbar-toggles">
          <label class="map-layer-toggle"><input id="nasa-features" type="checkbox" checked> <span>المعالم الجغرافية</span></label>
          <label class="map-layer-toggle"><input id="nasa-labels" type="checkbox" checked> <span>أسماء الأماكن</span></label>
        </div>
        <button class="button small primary" type="button" data-action="fit-sites">عرض كل المواقع</button>
      </div>
    </div>
    <div class="map-wrap">
      <div class="map-canvas map-large" id="world-map" role="application" aria-label="خريطة تفاعلية لصور NASA GIBS ومواقع الاستكشاف الستة"></div>
      <div class="map-note">
        <span class="live-dot"></span>
        <span>NASA Blue Marble · طبقة مرجعية عالمية من GIBS</span>
      </div>
    </div>
    <div class="map-caption">
      <span>NASA GIBS / Earthdata · منتجات MODIS Terra وBlue Marble</span>
      <span id="basemap-caption">Blue Marble · تضاريس وظلال مرجعية؛ ليست بثًا حيًا أو بيانات ميدانية.</span>
    </div>
  </section>
  <section class="map-separation">
    <div class="map-sep-thumb">
      <img src="assets/mars-hubble-globe.jpg" alt="المريخ كما رصده تلسكوب هابل" loading="lazy">
    </div>
    <div class="map-sep-text">
      <strong>فصل خرائط الأرض عن بيانات الكواكب:</strong>
      <p>المواقع الأرضية على هذه الخريطة منفصلة عن خرائط الكواكب ولا تُرسم فوق سطح المريخ أو القمر.</p>
    </div>
  </section>`;
}
function spaceGameBadges() {
  const targetsRead = new Set(spaceGame.readSites.map(id => sites.find(site => site.id === id)?.target).filter(Boolean));
  const badges = [];
  if (spaceGame.discovered.length) badges.push({ icon: "✦", label: "رائد الاستكشاف" });
  if (targetsRead.has("القمر")) badges.push({ icon: "◐", label: "مستكشف القمر" });
  if (targetsRead.has("المريخ")) badges.push({ icon: "◉", label: "خبير المريخ" });
  return badges;
}
function gameBadgesMarkup() {
  const badges = spaceGameBadges();
  if (spaceGame.analyzedSites?.length) badges.push({ icon: "⌕", label: "خبير التضاريس" });
  if (spaceGame.roverUnlocked) badges.push({ icon: "◈", label: "قائد العربة" });
  return badges.length
    ? badges.map(badge => `<span class="game-badge"><span aria-hidden="true">${badge.icon}</span>${badge.label}</span>`).join("")
    : `<span class="game-badge-locked">الشارات تُفتح مع الاكتشاف</span>`;
}
function spaceGameHeader() {
  return `<header class="game-header">
    <div class="game-header-title">
      <span class="eyebrow">SPACE EXPLORER · مستكشف الفضاء</span>
      <h1>رحلة تبدأ بسؤال علمي</h1>
      <p>استكشف مواقع أرضية حقيقية، واكتشف ما يمكن مقارنته بعوالم القمر والمريخ وما لا يمكن.</p>
    </div>
    <div class="game-xp-panel"><span class="game-xp-icon">✦</span><strong><span class="game-xp-value">${spaceGame.xp}</span> XP</strong><small>رصيد الرحلة</small></div>
  </header>`;
}
function campaignSites(destination) {
  const target = destination === "moon" ? "القمر" : "المريخ";
  return sites.filter(site => site.target === target);
}
function siteStageMissionId(siteId) {
  return `site-stage-${siteId}`;
}
function isSiteStageComplete(destination, site) {
  const samples = getMissionSampleCatalog("alien", destination, site);
  const sampleIds = new Set(samples.map(sample => sample.id));
  return samples.length > 0
    && spaceGame.completedMissions.includes(siteStageMissionId(site.id))
    && samples.every(sample => sampleIds.has(sample.id) && spaceGame.collectedSamples.includes(sample.id));
}
function isCampaignComplete(destination) {
  const campaign = campaignSites(destination);
  return campaign.length > 0 && campaign.every(site => isSiteStageComplete(destination, site));
}
function isAstronautDestinationComplete(destination) {
  const samples = getMissionSampleCatalog("astronaut", destination, null);
  return samples.length > 0 && samples.every(sample => spaceGame.collectedSamples.includes(sample.id));
}
function isAstronautCampaignComplete() {
  return isAstronautDestinationComplete("moon") && isAstronautDestinationComplete("mars");
}
function nextCampaignSite(destination) {
  return campaignSites(destination).find(site => !isSiteStageComplete(destination, site)) || null;
}
function journeyLogMarkup() {
  const events = spaceGame.journeyLog || [];
  const rows = events.length
    ? events.map(event => {
      const timestamp = new Date(event.at);
      const time = Number.isFinite(timestamp.getTime())
        ? new Intl.DateTimeFormat("ar", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(timestamp)
        : "وقت غير متاح";
      return `<li><time datetime="${escapeHtml(event.at)}">${escapeHtml(time)}</time><div><strong>${escapeHtml(event.title)}</strong><p>${escapeHtml(event.detail)}</p></div></li>`;
    }).join("")
    : `<li class="game-route-empty">لم تُسجل أحداث بعد؛ ابدأ رحلة واكتشف نقاط الاهتمام واجمع عينات لتحصل على سجل فعلي.</li>`;
  return `<section class="game-journey-log" aria-label="سجل أحداث الرحلة"><header><span class="eyebrow">المسار الفعلي · ${events.length} أحداث</span><h2>ما أنجزته خلال الرحلة</h2></header><ol>${rows}</ol></section>`;
}
function astronautCampaignCompleteScreen() {
  const destinations = ["moon", "mars"];
  const summaries = destinations.map(destination => {
    const samples = getMissionSampleCatalog("astronaut", destination, null);
    const collected = spaceGame.collectedSamples.map(id => samples.find(sample => sample.id === id)).filter(Boolean);
    const label = destination === "moon" ? "القمر" : "المريخ";
    return `<article><strong>استكشاف ${label}</strong><span>${collected.length} من ${samples.length} عينات</span><ul>${collected.map(sample => `<li>العينة ${spaceGame.collectedSamples.indexOf(sample.id) + 1}: ${escapeHtml(sample.name)}</li>`).join("")}</ul></article>`;
  }).join("");
  return `<div class="game-screen game-campaign-complete game-astronaut-summary"><div class="game-screen-heading"><span class="game-step">اكتملت الرحلة</span><h2>ملخص استكشاف القمر والمريخ</h2><p>جمعت ${spaceGame.collectedSamples.filter(id => /^(moon|mars):/.test(id)).length} عينات واكتشفت تضاريس العالمين. رصيد الرحلة: ${spaceGame.xp} XP.</p></div><div class="game-campaign-summary">${summaries}</div>${journeyLogMarkup()}<div class="game-resume-actions"><button class="button primary" type="button" data-game-action="return-home">العودة إلى الصفحة الرئيسية</button></div></div>`;
}
function spaceGameCampaignCompleteScreen() {
  const isMoon = spaceGame.destination === "moon";
  const target = isMoon ? "القمر" : "المريخ";
  const campaign = campaignSites(spaceGame.destination);
  const sampleCount = campaign.reduce((count, site) => count + getMissionSampleCatalog("alien", spaceGame.destination, site).filter(sample => spaceGame.collectedSamples.includes(sample.id)).length, 0);
  return `<div class="game-screen game-campaign-complete">
    <div class="game-screen-heading"><span class="game-step">اكتمل المسار · ${campaign.length} مواقع</span><h2>${isMoon ? "رائع! لقد أكملت استكشاف جميع المواقع الأرضية النظيرة لبيئة القمر." : "اكتمل استكشاف جميع المواقع الأرضية النظيرة للمريخ."}</h2><p>سجلت ${sampleCount} عينات افتراضية من ${campaign.length} مواقع، وتعلمت حدود المقارنة في كل موقع.</p></div>
    <div class="game-campaign-summary">${campaign.map(site => `<article><strong>${escapeHtml(site.ar)}</strong><span>${escapeHtml(site.guide.similarity)}</span></article>`).join("")}</div>
    ${journeyLogMarkup()}
    <div class="game-resume-actions">${isMoon ? `<button class="button primary" type="button" data-game-action="continue-mars-campaign">استكشاف مواقع المريخ على الأرض</button>` : ""}<button class="game-menu-secondary" type="button" data-game-action="finish-campaign">إنهاء اللعبة والعودة إلى القائمة الرئيسية</button></div>
  </div>`;
}
function getMissionSampleCatalog(character, destination, stageSite) {
  return window.SpaceGameData.samplesFor({ character, destination, site: stageSite });
}
function spaceCharacterScreen() {
  return `<div class="game-screen game-character-screen">
    <div class="game-screen-heading"><span class="game-step">01 · اختر مسارك</span><h2>من سيقود الرحلة؟</h2><p>ابدأ من الأرض مع مستكشف فضائي، أو انطلق من قاعدة مدارية كرائد فضاء.</p></div>
    <div class="game-character-grid">
      <button class="game-character-choice alien-choice" type="button" data-game-action="choose-character" data-character="alien">
        <span class="game-character-art" aria-hidden="true"><span class="game-character-emoji">👽</span><i class="game-character-star">✦</i></span>
        <span class="game-character-copy"><strong>الفضائي</strong><small lang="en">ALIEN EXPLORER</small><span>أول زيارة للأرض. اختر بيئة تناظرية وتعلّم لماذا يدرسها العلماء.</span></span>
        <span class="game-choice-arrow" aria-hidden="true">←</span>
      </button>
      <button class="game-character-choice astronaut-choice" type="button" data-game-action="choose-character" data-character="astronaut">
        <span class="game-character-art" aria-hidden="true"><span class="game-character-emoji">🧑‍🚀</span><i class="game-character-star">✦</i></span>
        <span class="game-character-copy"><strong>رائد الفضاء</strong><small lang="en">ASTRONAUT EXPLORER</small><span>انطلق من قاعدة مدارية، ثم اختر وجهة بصرية للقمر أو المريخ.</span></span>
        <span class="game-choice-arrow" aria-hidden="true">←</span>
      </button>
    </div>
    <div class="game-character-footer"><span class="game-signal-dot"></span> تُضبط مؤثرات الخطوات والبيئة من إعدادات اللعبة.</div>
  </div>`;
}
function spaceDestinationScreen() {
  const isAstronaut = spaceGame.character === "astronaut";
  const moonLabel = isAstronaut ? "القمر" : "الأماكن التي تشبه القمر على الأرض";
  const marsLabel = isAstronaut ? "المريخ" : "الأماكن التي تشبه المريخ على الأرض";
  const moonDesc = isAstronaut ? "فوهات اصطدام وتضاريس بركانية" : campaignSites("moon").map(site => site.ar).join("، ");
  const marsDesc = isAstronaut ? "جفاف وتضاريس واختبارات ميدانية" : campaignSites("mars").map(site => site.ar).join("، ");
  return `<div class="game-screen game-destination-screen">
    <div class="game-screen-heading"><span class="game-step">02 · الوجهة التناظرية</span><h2>${isAstronaut ? "إلى أي عالم ننطلق؟" : "اختر البيئة التناظرية على كوكب الأرض"}</h2><p>${isAstronaut ? "رحلة تخيلية إلى وجهة فضائية، ثم عودة إلى مواقع أرضية حقيقية للمقارنة العلمية." : "اختر البيئة التناظرية؛ ستنطلق في رحلة استكشافية للأماكن الشبيهة بها على كوكب الأرض."}</p></div>
    <div class="game-destination-grid">
      <button class="game-destination-choice moon-destination" type="button" data-game-action="choose-destination" data-destination="moon">
        <span class="game-destination-orb moon-orb" aria-hidden="true"></span>
        <span class="game-destination-text"><small>${isAstronaut ? "وجهة فضائية" : "بيئة أرضية · نظير القمر"}</small><strong>${moonLabel}</strong><span>${moonDesc}</span></span>
        <span class="game-choice-arrow" aria-hidden="true">←</span>
      </button>
      <button class="game-destination-choice mars-destination" type="button" data-game-action="choose-destination" data-destination="mars">
        <span class="game-destination-orb mars-orb" aria-hidden="true"></span>
        <span class="game-destination-text"><small>${isAstronaut ? "وجهة فضائية" : "بيئة أرضية · نظير المريخ"}</small><strong>${marsLabel}</strong><span>${marsDesc}</span></span>
        <span class="game-choice-arrow" aria-hidden="true">←</span>
      </button>
    </div>
    <button class="game-text-button" type="button" data-game-action="change-character">تغيير الشخصية</button>
  </div>`;
}
function spaceGearSummaryScreen() {
  const destination = spaceGame.destination;
  const isAstronaut = spaceGame.character === "astronaut";
  const isMoon = destination === "moon";
  const target = isMoon ? "القمر" : "المريخ";
  const targetEn = isMoon ? "Moon" : "Mars";

  const gear = isAstronaut
    ? (isMoon
      ? {
          suit: { id: "moon-suit", name: "بدلة القمر", color: "#e8ecf0", trim: "#7a8aa8", icon: "🌕",
            props: ["حماية من الفراغ الكوني التام", "نظام تحكم حراري نشط (-130°C إلى +120°C)", "مصممة للجاذبية المنخفضة (1/6 من جاذبية الأرض)", "خوذة مع visor عاكس"] },
          craft: { id: "lunar-lander", name: "مركبة هبوط القمر", icon: "🚀",
            props: ["أرجل هبوط ثابتة للفراغ الكوني", "لا تحتاج مظلات (لا غلاف جوي)", "نظام دعم حياة مدمج", "مصممة للهبوط على سطح القمر"] },
          equipment: [
            { id: "oxygen-tank", name: "خزان أكسجين", icon: "🫁", desc: "تنفس خارج الغلاف الجوي الأرضي" },
            { id: "thermal-layer", name: "طبقة حرارية إضافية", icon: "🧥", desc: "حماية من التقلبات الحرارية الشديدة" },
            { id: "comms-unit", name: "وحدة اتصال", icon: "📡", desc: "تواصل مع مركز التحكم الأرضي" },
            { id: "med-kit", name: "حقيبة إسعاف أولي", icon: "🩹", desc: "علاج الإصابات الطارئة" }
          ]
        }
      : {
          suit: { id: "mars-suit", name: "بدلة المريخ", color: "#ff8e6e", trim: "#5a3a2e", icon: "🔴",
            props: ["نظام ترشيح ثاني أكسيد الكربون", "حماية من الغبار المريخي الناعم", "مصممة لجاذبية 0.38g", "ختم محكم للغلاف الجوي الرقيق"] },
          craft: { id: "mars-lander", name: "مركبة هبوط المريخ", icon: "🛬",
            props: ["مظلات هبوط للغلاف الجوي الرقيق", "درع حراري ضد الاحتكاك", "نظام تبريد نشط", "مصممة للهبوط على سطح المريخ"] },
          equipment: [
            { id: "oxygen-tank", name: "خزان أكسجين", icon: "🫁", desc: "تنفس في الغلاف الجوي الرقيق (95% CO2)" },
            { id: "dust-filter", name: "مرشح غبار", icon: "😷", desc: "منع تسرب الغبار المريخي إلى البدلة" },
            { id: "comms-unit", name: "وحدة اتصال", icon: "📡", desc: "تواصل مع مركز التحكم الأرضي" },
            { id: "med-kit", name: "حقيبة إسعاف أولي", icon: "🩹", desc: "علاج الإصابات الطارئة" }
          ]
        })
    : null;

  // Auto-assign mandatory gear based on destination
  spaceGame.suit = gear ? gear.suit.id : null;
  spaceGame.spacecraft = gear ? gear.craft.id : null;
  spaceGame.equipment = gear ? gear.equipment.map(e => e.id) : [];

  if (!isAstronaut) {
    return `<div class="game-screen game-gear-screen">
      <div class="game-screen-heading"><span class="game-step">استعداد الرحلة</span><h2>مستكشف فضائي - الأرض</h2><p>ستستكشف مواقع أرضية تناظرية دون حاجة لبدلة فضائية أو مركبة هبوط كوكبية.</p></div>
      <div class="game-gear-note">الشخصية المختارة: الفضائي · لا تتطلب هذه الرحلة عتاداً فضائياً.</div>
      <button class="button primary glow-btn" type="button" data-game-action="start-mission">ابدأ الاستكشاف ✦</button>
    </div>`;
  }

  const suitColor = gear.suit.color;
  const suitTrim = gear.suit.trim;

  const suitVisual = `
    <div class="game-gear-visual-wrap">
      <div class="game-gear-visual suit-visual" style="--suit-color:${suitColor};--suit-trim:${suitTrim};">
        <div class="suit-helmet"></div>
        <div class="suit-visor"></div>
        <div class="suit-body"></div>
        <div class="suit-glow"></div>
      </div>
    </div>`;

  const craftVisual = isMoon
    ? `<div class="game-gear-visual-wrap"><div class="game-gear-visual craft-visual lunar-land-visual"><div class="craft-capsule"></div><div class="craft-leg l1"></div><div class="craft-leg l2"></div><div class="craft-leg l3"></div><div class="craft-glow"></div></div></div>`
    : `<div class="game-gear-visual-wrap"><div class="game-gear-visual craft-visual mars-land-visual"><div class="craft-capsule"></div><div class="craft-shield"></div><div class="craft-parachute"></div><div class="craft-glow"></div></div></div>`;

  const equipmentVisuals = gear.equipment.map(e => {
    const equipment = equipmentCatalog[e.id];
    return `<article class="game-gear-item"><img class="game-gear-item-image" src="${equipment.image}" alt="${escapeHtml(e.name)}" width="120" height="88"><div class="game-gear-item-copy"><strong>${escapeHtml(e.name)}</strong><p>${escapeHtml(e.desc)}</p><small>${escapeHtml(equipment.effect)}</small></div></article>`;
  }).join("");

  return `<div class="game-screen game-gear-screen">
    <div class="game-screen-heading"><span class="game-step">03 · العتاد الإلزامي للرحلة</span><h2>عتاد رحلتك إلى ${target}</h2><p>جميع القطع أدناه إلزامية للرحلة. يتم تجهيزها تلقائياً وفقاً للوجهة المختارة.</p></div>

    <div class="game-gear-grid">
      <div class="game-gear-card game-gear-suit">
        ${suitVisual}
        <div class="game-gear-copy">
          <strong style="color:${suitColor}">${escapeHtml(gear.suit.name)}</strong>
          <div class="game-gear-type">بدلة فضائية إلزامية</div>
          <ul class="game-gear-props">${gear.suit.props.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="game-gear-card game-gear-craft">
        ${craftVisual}
        <div class="game-gear-copy">
          <strong>${escapeHtml(gear.craft.name)}</strong>
          <div class="game-gear-type">مركبة هبوط إلزامية</div>
          <ul class="game-gear-props">${gear.craft.props.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="game-gear-card game-gear-equipment">
        <div class="game-gear-copy">
          <strong>معدات المهمة</strong>
          <div class="game-gear-type">كل قطعة مرتبطة بوظيفة داخل العالم</div>
        </div>
        <div class="game-gear-equipment-grid">${equipmentVisuals}</div>
      </div>
    </div>

    <button class="button primary glow-btn" type="button" data-game-action="start-mission">ابدأ الاستكشاف الآن</button>
  </div>`;
}
function gameEquipmentPanelMarkup() {
  const items = spaceGame.equipment.map(id => {
    const equipment = equipmentCatalog[id];
    if (!equipment) return "";
    const button = equipment.action
      ? `<button type="button" class="game-equipment-use" data-equipment-use="${id}">${equipment.actionLabel}</button>`
      : `<span class="game-equipment-passive">${equipment.actionLabel}</span>`;
    return `<article class="game-equipment-use-card" data-equipment-id="${id}"><img src="${equipment.image}" alt="" width="72" height="56"><div><strong>${equipment.name}</strong><small>${equipment.effect}</small></div>${button}</article>`;
  }).join("");
  return `<section class="game-equipment-panel" id="game-equipment-panel" aria-label="معدات الرحلة" hidden><header><div><span class="game-step">عتاد الرائد</span><h2>استخدام المعدات</h2></div><button type="button" class="game-settings-close" data-engine-action="equipment-close" aria-label="إغلاق المعدات">×</button></header><div class="game-equipment-use-grid">${items}</div><p class="game-equipment-status" id="game-equipment-status" aria-live="polite">اختر أداة لاستخدامها داخل المهمة.</p></section>`;
}
function gameCrewRosterMarkup() {
  const isAlien = spaceGame.character === "alien";
  const roster = isAlien
    ? Array.from({ length: 5 }, (_, index) => ({ name: `ALIEN-${String(index + 1).padStart(2, "0")}`, leader: index === 0 }))
    : teamMembers;
  const members = roster.map(member => {
    const isLeader = typeof member === "object" && member.leader;
    const name = typeof member === "object" ? member.name : member;
    const initials = name.split(/\s+/).slice(0, 2).map(part => part[0]).join("");
    return `<li class="game-crew-member${isLeader ? " is-leader" : ""}"><span class="game-crew-avatar">${escapeHtml(initials)}</span><span class="game-crew-name" lang="en" dir="ltr">${escapeHtml(name)}</span><span class="game-crew-mark" aria-label="${isLeader ? "قائد الفريق" : "عضو الطاقم"}">${isLeader ? "★" : "•"}</span></li>`;
  }).join("");
  return `<aside class="game-crew-roster" aria-label="${isAlien ? "فريق الفضائيين" : "طاقم المهمة"}"><header><span>${isAlien ? "فريق الفضائيين" : "طاقم المهمة"}</span><small>05 / 05</small></header><ol>${members}</ol></aside>`;
}
function mountGameEquipmentControls(container) {
  if (!["astronaut", "alien"].includes(spaceGame.character)) return;
  const shell = container.closest(".game-world-shell");
  if (!shell) return;
  if (!shell.querySelector(".game-crew-roster")) {
    shell.insertAdjacentHTML("beforeend", gameCrewRosterMarkup());
    shell.classList.add("has-game-crew");
  }
  if (spaceGame.character !== "astronaut") return;
  if (spaceGame.equipment.length && !shell.querySelector("#game-equipment-panel")) shell.insertAdjacentHTML("beforeend", gameEquipmentPanelMarkup());
  if (!spaceGame.equipment.length) return;
  if (!shell.querySelector(".game-health-meter")) shell.querySelector(".game-hud-bottom")?.insertAdjacentHTML("beforeend", `<div class="game-health-meter" aria-label="سلامة البدلة"><span aria-hidden="true">♥</span><div><small>سلامة البدلة</small><strong id="game-health-value">100%</strong><div class="game-health-bar"><span id="game-health-fill"></span></div></div></div>`);
  if (!shell.querySelector("#game-environment-alert")) shell.insertAdjacentHTML("beforeend", `<div class="game-environment-alert" id="game-environment-alert" role="status" aria-live="polite" hidden></div>`);
  if (!shell.querySelector('[data-engine-action="equipment"]')) shell.querySelector(".game-hud-actions")?.insertAdjacentHTML("beforeend", `<button class="game-icon-control" type="button" data-engine-action="equipment" aria-label="معدات الرحلة" title="استخدام معدات الرحلة">🧰</button>`);
  if (!shell.querySelector('[data-engine-button="equipment"]')) shell.querySelector(".game-action-buttons")?.insertAdjacentHTML("beforeend", `<button type="button" data-engine-button="equipment" aria-label="معدات الرحلة">🧰<small>معدات</small></button>`);
}
function getActiveGameWorld() {
  if (!spaceGame.destination) return null;
  const target = spaceGame.destination === "moon" ? "القمر" : "المريخ";
  const world = spaceGame.character === "alien" ? "earth" : spaceGame.destination;
  const targetSites = campaignSites(spaceGame.destination);
  const stageSite = spaceGame.character === "alien"
    ? targetSites.find(site => site.id === spaceGame.selectedSite) || nextCampaignSite(spaceGame.destination) || targetSites[0]
    : null;
  const samples = getMissionSampleCatalog(spaceGame.character, spaceGame.destination, stageSite);
  const sampleIds = new Set(samples.map(sample => sample.id));
  const collected = spaceGame.collectedSamples.filter(id => sampleIds.has(id)).length;
  const missionKey = `${world}-${spaceGame.destination}`;
  return {
    target,
    world,
    missionKey,
    stageSite,
    samples,
    sampleGoal: samples.length,
    stageIndex: stageSite ? targetSites.findIndex(site => site.id === stageSite.id) : -1,
    stageCount: targetSites.length,
    lastStage: stageSite ? targetSites.at(-1)?.id === stageSite.id : false,
    collected,
    missionComplete: samples.length > 0 && collected >= samples.length
      && (spaceGame.character === "alien" || collected >= samples.length)
      && spaceGame.completedMissions.includes(stageSite ? siteStageMissionId(stageSite.id) : `sample-trio-${missionKey}`)
  };
}
function gamePlanetStripMarkup(world) {
  const isAstronaut = spaceGame.character === "astronaut";
  const destination = spaceGame.destination;
  const currentWorld = isAstronaut ? destination : world;
  const info = {
    moon: { name: "القمر", img: "assets/moon-apollo-11.jpg", gravity: "0.16g", note: "فراغ كوني تام" },
    mars: { name: "المريخ", img: "assets/mars-hubble-globe.jpg", gravity: "0.38g", note: "ضغط 6.1 hPa · 95% CO₂" },
    earth: { name: "الأرض", img: "assets/earth-blue-marble.jpg", gravity: "1.0g", note: "غلاف جوي طبيعي" }
  }[currentWorld] || { name: "الأرض", img: "assets/earth-blue-marble.jpg", gravity: "1.0g", note: "غلاف جوي طبيعي" };
  return `<div class="game-solar-strip" aria-label="الموقع الحالي">${isAstronaut ? `<div class="game-solar-body current"><img src="${info.img}" class="game-solar-planet-img current-img" alt="${info.name}"><span class="game-solar-label current-label">${info.name}</span></div>` : `<div class="game-solar-body current"><img src="${info.img}" class="game-solar-planet-img current-img" alt="${info.name}"><span class="game-solar-label current-label">${info.name}</span></div>`}</div>`;
}
function gameFieldLogMarkup(site) {
  const found = new Set(spaceGame.discoveredPoints || []);
  const discoveredPoints = site.science.points
    .map((point, index) => ({ ...point, id: `${site.id}-point-${index + 1}` }))
    .filter(point => found.has(point.id));
  const notes = discoveredPoints.length
    ? discoveredPoints.map(point => `<article><strong>${escapeHtml(point.title)}</strong><p>${escapeHtml(point.text)}</p></article>`).join("")
    : `<p class="game-field-log-empty">اقترب من علامة نقطة اهتمام لتسجيل ملاحظتها هنا.</p>`;
  return `<section class="game-field-log" id="game-field-log" hidden aria-label="سجل الاستكشاف الميداني">
    <header><div><span class="game-step">سجل ميداني · ${escapeHtml(site.ar)}</span><h2>الملاحظات المكتشفة</h2></div><button type="button" class="game-settings-close" data-engine-action="field-log-close" aria-label="إغلاق السجل">×</button></header>
    <div class="game-field-log-notes">${notes}</div>
    <div class="game-field-log-facts"><p><strong>الجيولوجيا:</strong> ${escapeHtml(site.science.geology)}</p><p><strong>المناخ:</strong> ${escapeHtml(site.science.climate)}</p><p><strong>المياه:</strong> ${escapeHtml(site.science.water)}</p><p><strong>حدود المقارنة:</strong> ${escapeHtml(site.science.mars)}</p></div>
    <div class="game-field-log-sources">${site.science.sources.map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)} ↗</a>`).join("")}</div>
  </section>`;
}
function alienSiteCompleteMarkup(gameWorld) {
  const { stageSite, stageIndex, stageCount, lastStage, missionComplete } = gameWorld;
  if (!stageSite) return "";
  const photos = stageSite.gallery || [stageSite.image];
  return `<div class="game-stage-complete" id="game-stage-complete" ${missionComplete ? "" : "hidden"}>
    <section class="game-stage-card">
      <span class="game-step">اكتمل جمع العينات · الموقع ${stageIndex + 1} من ${stageCount}</span>
      <h2>${escapeHtml(stageSite.ar)}</h2>
      <div class="game-stage-photos">${photos.map(photo => `<figure><img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="eager"><figcaption><strong>${escapeHtml(photo.title)}</strong><span>${escapeHtml(photo.caption)}</span></figcaption></figure>`).join("")}</div>
      <p>${escapeHtml(stageSite.guide.summary)}</p>
      <div><strong>عن المكان</strong><p>${escapeHtml(stageSite.guide.similarity)}</p></div>
      <div class="game-stage-actions"><button class="game-menu-secondary" type="button" data-game-action="show-journey-log">عرض المسار</button><button class="button primary" type="button" data-game-action="${lastStage ? "show-campaign-summary" : "next-site"}">${lastStage ? "عرض ملخص الرحلة" : "الانتقال إلى الموقع التالي"}</button></div>
      <div class="game-stage-journey-log" hidden>${journeyLogMarkup()}</div>
    </section>
  </div>`;
}
function spaceGameMapScreen() {
  const gameWorld = getActiveGameWorld();
  const { target, world, missionComplete, collected, analyzed, stageSite, stageIndex, stageCount, lastStage, sampleGoal } = gameWorld;
  const worldName = stageSite ? stageSite.ar : world === "earth" ? "نظير أرضي" : target;
  const celestialNote = spaceGame.character !== "astronaut" ? ""
    : spaceGame.destination === "moon" ? "موضع الأرض في السماء توضيحي لأن منطقة الهبوط القمرية غير محددة."
      : "فوبوس وديموس يظهران كنماذج مدارية تقريبية، لا محاكاة فلكية عالية الدقة.";
  const astronautMissionComplete = spaceGame.character === "astronaut" && (missionComplete || (sampleGoal > 0 && collected >= sampleGoal));
  const otherDestination = spaceGame.destination === "moon" ? "mars" : "moon";
  const otherDestinationComplete = spaceGame.character === "astronaut" && isAstronautDestinationComplete(otherDestination);
  const nextAstronautAction = otherDestinationComplete ? "astronaut-show-summary" : `astronaut-switch-${otherDestination}`;
  const nextAstronautLabel = otherDestinationComplete
    ? "عرض ملخص الرحلة"
    : otherDestination === "mars" ? "الانتقال لاستكشاف المريخ 🚀" : "الانتقال لاستكشاف القمر 🌕";
  const destinationImage = spaceGame.destination === "moon"
    ? { src: "assets/moon-apollo-11.jpg", alt: "سطح القمر وآثار أقدام رواد أبولو 11", credit: "NASA · Apollo 11" }
    : { src: "assets/mars-hubble-globe.jpg", alt: "المريخ كما رصده تلسكوب هابل", credit: "NASA · Hubble" };
  const stageCompletionMarkup = stageSite ? alienSiteCompleteMarkup(gameWorld) : "";
  const moonCharacteristicsMarkup = `
    <div class="game-planet-characteristics">
      <h3>خصائص القمر العلمية بناءً على العينات المجمعة:</h3>
      <ul>
        <li><strong>صخور الأنورثوسيت (Anorthosite):</strong> تمثل قشرة المرتفعات القمرية الفاتحة القديمة الغنية بالكالسيوم والسيليكون والألومنيوم، وهي دليل حي على تجمد محيط الصهارة القمري البدائي قبل 4.5 مليار عام.</li>
        <li><strong>بازلت بحار القمر (Mare Basalts):</strong> صخور غنية بعنصر التيتانيوم والحديد انسكبت من باطن القمر البركاني القديم لتملأ الأحواض النيزكية الكبرى.</li>
        <li><strong>الريغوليث القمري وحطام الصدم (Impact Breccia):</strong> تربة فتاتية خشنة وزجاج بركاني نتجت عن مليارات السنين من قصف النيازك الدقيقة المستمر في بيئة خالية تماماً من الماء والرياح.</li>
        <li><strong>البيئة التناظرية:</strong> فراغ كوني شبه تام، جاذبية منخفضة (1/6 من جاذبية الأرض)، وتفاوت حراري هائل بين النهار والليل (+120°C إلى -130°C).</li>
      </ul>
    </div>`;
  const marsCharacteristicsMarkup = `
    <div class="game-planet-characteristics">
      <h3>خصائص المريخ العلمية بناءً على العينات المجمعة:</h3>
      <ul>
        <li><strong>معادن الهيماتيت وأكاسيد الحديد (Iron Oxides):</strong> تمنح الكوكب لونه الصدئ المميز وتؤكد حدوث عمليات أكسدة كيميائية مائية وسطحية عميقة في ماضي المريخ.</li>
        <li><strong>معادن الكبريتات والصلصال الطيني (Sulfates & Clays):</strong> أدلة جيولوجية لا تقبل الشك على وجود مياه سائلة متدفقة وبحيرات قديمة سكنتها رواسب هادئة مثل فوهة جيزيرو.</li>
        <li><strong>البازلت الأوليفيني البركاني (Olivine Basalt):</strong> صخور بركانية داكنة تدل على تاريخ نشاط بركاني جبار أنتج براكين عملاقة كبركان أوليمبوس مونز.</li>
        <li><strong>البيئة التناظرية:</strong> غلاف جوي رقيق جداً (95% CO2، ضغط 0.6% من الأرض)، جاذبية 38% من الأرض، طقس جاف فائق البرودة وعواصف ترابية كوكبية.</li>
      </ul>
    </div>`;
  const astronautCompletionMarkup = spaceGame.character === "astronaut" ? `<div class="game-stage-complete" id="game-final-mission" ${astronautMissionComplete ? "" : "hidden"}><section class="game-stage-card"><span class="game-step">اكتمل استكشاف الوجهة ✦</span><h2>${spaceGame.destination === "moon" ? "اكتمل استكشاف سطح القمر!" : "اكتمل استكشاف سطح المريخ!"}</h2><figure class="game-planet-summary-image"><img src="${destinationImage.src}" alt="${destinationImage.alt}" loading="eager"><figcaption>${destinationImage.credit}</figcaption></figure><div class="game-stage-stats"><span><strong>${collected}/${sampleGoal}</strong> عينات تم جمعها</span><span><strong>100%</strong> اكتمال الجمع</span><span><strong>${spaceGame.xp}</strong> XP رحلة</span></div>${spaceGame.destination === "moon" ? moonCharacteristicsMarkup : marsCharacteristicsMarkup}<p>اكتمل جمع العينات الافتراضية من هذه الوجهة.</p><div class="game-stage-actions"><button class="button primary glow-btn" type="button" data-game-action="${nextAstronautAction}">${nextAstronautLabel}</button></div></section></div>` : "";
  const locKey = spaceGame.character === "astronaut" ? spaceGame.destination : world;
  const locInfo = { moon:{name:"القمر",gravity:"0.16g",note:"فراغ كوني تام"}, mars:{name:"المريخ",gravity:"0.38g",note:"ضغط 6.1 hPa · 95% CO₂"}, earth:{name:"الأرض",gravity:"1.0g",note:"غلاف جوي طبيعي"} }[locKey] || {name:"الأرض",gravity:"1.0g",note:"غلاف جوي طبيعي"};
  const locationBar = stageSite
    ? `<div class="game-location-bar"><span class="game-location-icon">🌍</span><span class="game-location-text">الأرض · ${escapeHtml(stageSite.type)} · وصف نوعي، لا قياسات آنية${["devon", "mcmurdo"].includes(stageSite.id) ? " · حركة أبطأ توضيحيًا على السطح البارد" : ""}</span></div>`
    : `<div class="game-location-bar"><span class="game-location-icon">🌍</span><span class="game-location-text">${locInfo.name} · ${locInfo.gravity} · ${locInfo.note}</span></div>`;
  return `<div class="game-screen game-world-screen">
    <div class="game-world-shell${spaceGame.character === "alien" ? " alien-game" : ""}">
      <div class="game-canvas-host" id="game-canvas-host"></div>
      ${gamePlanetStripMarkup(world)}
      <div class="game-arrival-title" id="game-arrival-title"><span>بدء المسح الميداني</span><strong>${worldName}</strong>${stageSite ? `<small>${escapeHtml(stageSite.science.task)}</small>` : ""}</div>
      ${spaceGame.character === "astronaut" ? `<div class="game-mission-kit"><div class="game-kit-item"><span class="game-kit-label">البدلة</span><strong>${spaceGame.suit === "moon-suit" ? "بدلة القمر" : spaceGame.suit === "mars-suit" ? "بدلة المريخ" : "بدلة قياسية"}</strong></div><div class="game-kit-item"><span class="game-kit-label">المركبة</span><strong>${spaceGame.spacecraft === "lunar-lander" ? "مركبة هبوط القمر" : spaceGame.spacecraft === "mars-lander" ? "مركبة هبوط المريخ" : "مركبة قياسية"}</strong></div><div class="game-kit-item"><span class="game-kit-label">العتاد</span><strong>${spaceGame.equipment.length ? spaceGame.equipment.map(id => ({ "oxygen-tank": "خزان أكسجين", "tool-kit": "حقيبة أدوات", "med-kit": "حقيبة إسعاف", "sample-bag": "حقيبة عينات", "comms-unit": "وحدة اتصال", "thermal-suit": "طبقة حرارية" }[id] || id)).join("، ") : "غير محدد"}</strong></div></div>` : ""}
      <div class="game-hud game-hud-top"><div class="game-objective-status"><span class="game-mission-index">${stageSite ? "مهمة الموقع · جمع العينات" : "المهمة 01 · تحدي 03:00"}</span><strong id="game-mission-title">${stageSite ? missionComplete ? "اكتملت العينات" : `اجمع ${sampleGoal} عينات` : missionComplete ? "اتبع المنارة إلى فوهة الاصطدام" : `اجمع ${sampleGoal} عينات افتراضية`}</strong><small id="game-mission-count">${stageSite ? `${collected}/${sampleGoal} عينات` : missionComplete ? "المركبة متاحة" : `${collected}/${sampleGoal} عينات مجمعة`}</small><span class="game-mission-clock" id="game-timer">03:00</span></div>${spaceGame.character === "astronaut" ? `<div class="game-oxygen-meter"><span class="game-oxygen-icon">🫁</span><div><small>الأكسجين</small><strong id="game-oxygen-time">02:00</strong></div><div class="game-oxygen-bar"><div id="game-oxygen-fill" style="width:100%"></div></div></div>` : ""}<div class="game-hud-actions"><button class="game-icon-control" type="button" data-engine-action="inventory" aria-label="حقيبة العينات" title="حقيبة العينات الميدانية (R)">🎒</button><button class="game-icon-control" type="button" data-engine-action="solar-system" aria-label="رؤية المجموعة الشمسية" title="رصد المجموعة الشمسية والنجوم">🪐</button><button class="game-icon-control" type="button" data-engine-action="camera" aria-label="تبديل زاوية الكاميرا" title="تبديل الكاميرا (شخص ثالث / قناع الخوذة / طائرة استطلاع)">📷</button><button class="game-icon-control" type="button" data-engine-action="settings" aria-label="إعدادات اللعبة" title="الإعدادات">⚙</button><button class="game-icon-control" type="button" data-engine-action="pause" aria-label="إيقاف مؤقت" title="إيقاف مؤقت">Ⅱ</button></div></div>${locationBar}
      <div class="game-beacon-solo" id="game-beacon-solo">${missionComplete ? '' : `<span class="game-beacon-solo-shell" aria-hidden="true"><svg id="game-beacon-arrow" viewBox="0 0 24 24" fill="none"><path d="M12 2.5L4.5 20.5L12 16.5L19.5 20.5L12 2.5Z" fill="#ffcf56" stroke="#fff1b8" stroke-width="1.2" stroke-linejoin="round"/></svg></span><span class="game-beacon-solo-label">إشارة العينة</span><strong id="game-beacon-distance-solo" class="game-beacon-solo-dist">-- م</strong>`}</div>
      <div class="game-helmet-visor" id="game-helmet-visor" hidden aria-hidden="true"><div class="visor-reflection"></div><div class="visor-hud-reticle"></div></div>
      <div class="game-crosshair" aria-hidden="true"><i></i></div>
      <div class="game-landscape-prompt" role="status" aria-live="polite"><div><span aria-hidden="true">▯</span><strong>أدر الهاتف أفقيًا</strong><small>سيبدأ الاستكشاف فور تدوير الجهاز.</small></div></div>
      <div class="game-hud game-hud-bottom"><div class="game-sample-meter"><span class="game-sample-icon">⌑</span><div><small>عينات محاكاة</small><strong id="game-sample-count">${collected}/${sampleGoal}</strong></div></div><div class="game-xp-meter"><span>✦</span><strong><span class="game-xp-value">${spaceGame.xp}</span> XP</strong></div></div>
      <div class="game-controls-hint">W A S D حركة · الماوس نظر · Space قفز/نفاث · Shift جري · E جمع/تفاعل · R حقيبة العينات · C كاميرا · V عربة</div>
      <div class="game-nearby-prompt" id="game-nearby-prompt" hidden></div>
      <aside class="game-science-point" id="game-science-point" role="status" aria-live="polite" hidden><span>نقطة اهتمام علمية</span><strong id="game-science-point-title"></strong><p id="game-science-point-text"></p><small>إضافة إلى سجل الاستكشاف · موضع توضيحي</small></aside>
      ${stageSite ? gameFieldLogMarkup(stageSite) : ""}
      <div class="game-companion-hint" id="game-companion-hint" hidden></div>
      <div class="game-toast" id="game-toast" role="status" aria-live="polite"></div>
      <div class="game-touch-controls" aria-label="عناصر تحكم اللمس"><div class="game-look-zone" aria-hidden="true"></div><div class="game-joystick" aria-label="عصا الحركة"><span class="game-joystick-knob"></span></div><div class="game-action-buttons"><button type="button" data-engine-button="inventory" aria-label="حقيبة العينات">🎒<small>عينات</small></button><button type="button" data-engine-button="camera" aria-label="تبديل زاوية الكاميرا">◉<small>كاميرا</small></button><button type="button" data-engine-button="interact" aria-label="تفاعل">E<small>تفاعل</small></button><button type="button" data-engine-button="rover" class="is-locked" aria-label="قيادة عربة الاستكشاف" hidden>◈<small>عربة</small></button><button type="button" data-engine-button="run" aria-label="جري">»<small>جري</small></button><button type="button" data-engine-button="jump" aria-label="قفز / دفع نفاث">↟<small>دفع</small></button></div></div>
      <div class="game-pause-overlay" id="game-pause-overlay" hidden><div class="game-menu-panel"><span class="game-step">توقفت المهمة مؤقتًا</span><h2>خذ وقتك أيها المستكشف</h2><button class="button primary" type="button" data-engine-action="resume">متابعة الاستكشاف</button><button class="game-menu-secondary" type="button" data-game-action="change-destination">تغيير الوجهة</button><button class="game-menu-secondary" type="button" data-game-action="change-character">تغيير الشخصية</button><button class="game-menu-secondary" type="button" data-game-action="reset">بدء مغامرة جديدة</button><button class="game-exit-button" type="button" data-game-exit>× <span>خروج من اللعبة</span></button></div></div>
      <div class="game-over-overlay" id="game-over-overlay" hidden><div class="game-menu-panel"><span class="game-step">جيم أوفر</span><h2 id="game-over-title">انتهت المهمة</h2><p id="game-over-reason">لم تتمكن من جمع العينات قبل انتهاء الوقت.</p><div class="game-stage-actions"><button class="button primary" type="button" data-game-action="reset">محاولة مرة أخرى</button><button class="game-exit-button" type="button" data-game-exit>الخروج من اللعبة</button></div></div></div>
      <div class="game-settings-panel" id="game-settings-panel" hidden><div class="game-settings-card"><button class="game-settings-close" type="button" data-engine-action="settings-close" aria-label="إغلاق الإعدادات">×</button><span class="game-step">تخصيص الرحلة</span><h2>إعدادات اللعبة</h2><label class="game-setting-row"><span>الأصوات المحيطية</span><input id="game-sound-toggle" type="checkbox" ${spaceGame.settings.sound ? "checked" : ""}></label><label class="game-setting-row"><span>اهتزاز الكاميرا الخفيف</span><input id="game-camera-shake-toggle" type="checkbox" ${spaceGame.settings.cameraShake ? "checked" : ""}></label><label class="game-setting-row"><span>حساسية الماوس</span><input id="game-mouse-sensitivity" type="range" min="0.5" max="2" step="0.1" value="${spaceGame.settings.mouseSensitivity}"><output id="game-mouse-sensitivity-value">${spaceGame.settings.mouseSensitivity.toFixed(1)}×</output></label><label class="game-setting-row"><span>جودة العرض</span><select id="game-quality-select"><option value="low" ${spaceGame.settings.quality === "low" ? "selected" : ""}>اقتصادية</option><option value="medium" ${spaceGame.settings.quality === "medium" ? "selected" : ""}>متوازنة</option><option value="high" ${spaceGame.settings.quality === "high" ? "selected" : ""}>عالية</option></select></label><button class="button primary" type="button" data-engine-action="settings-close">تم</button></div></div>
      <div class="game-inventory-panel" id="game-inventory-panel" hidden><div class="game-inventory-card"><div class="game-inventory-header"><div><span class="game-step">حقيبة العينات الميدانية (R)</span><h2>العينات المجمعة</h2></div><button class="game-settings-close" type="button" data-engine-action="inventory-close" aria-label="إغلاق حقيبة العينات">×</button></div><div class="game-inventory-list" id="game-inventory-list"></div><div class="game-inventory-footer"><small>تُرقّم العينات حسب أسبقية جمعها.</small><button class="button primary" type="button" data-engine-action="inventory-close">متابعة الاستكشاف</button></div></div></div>
      ${stageCompletionMarkup}
      ${astronautCompletionMarkup}
    </div>
      <footer class="game-world-footer"><div class="game-achievement-list" id="game-achievement-list">${gameBadgesMarkup()}</div><div class="game-astronaut-health" ${spaceGame.character !== "astronaut" ? "hidden" : ""}><div class="game-health-header"><span class="game-health-icon">🏥</span><strong>الصحة والسلامة داخل المركبة</strong></div><div class="game-health-list">${[
  { title: "فقدان كثافة العظام", desc: "جاذبية منخفضة تضعف العظام مع مرور الوقت داخل المركبة." },
  { title: "تضخم사와 جفاف الجلد", desc: "التعرض المتكرر للإشعاع الكوني وجفاف الهواء يؤثر على المظهر والبشرة." },
  { title: "ضغط النفس والعزلة", desc: "البقاء طويلاً داخل المركبة بعيداً عن الأرض يسبب توتراً نفسياً." },
  { title: "تقلب الضغط الداخلي", desc: "التنقل بين كبسولة المركبة وسطح الكوكب يتطلب توازن ضغط دقيق." }
].map(h => `<div class="game-health-item"><strong>${escapeHtml(h.title)}</strong><span>${escapeHtml(h.desc)}</span></div>`).join("")}</div></div><div><span class="game-world-scientific-note">${spaceGame.character === "alien" ? `البيئة مستوحاة من تضاريس أرضية؛ وجهة المقارنة: ${target}.` : `المشهد يصوّر ${target} بصريًا. ${celestialNote}`} العينات داخل اللعبة رموز تعليمية افتراضية وليست عينات أو قياسات ميدانية.</span><a href="#home" class="game-return-inline">العودة إلى Planetary Exploration</a></div></footer>
  </div>`;
}
function spaceGamePage() {
  const savedTrip = hasValidSavedSpaceGame();
  const actions = savedTrip
    ? `<div class="game-resume-actions"><button class="button primary" type="button" data-game-continue>متابعة الرحلة المحفوظة</button><button class="game-menu-secondary" type="button" data-game-new>بدء رحلة جديدة</button></div>`
    : `<button class="button primary game-launch-button" type="button" data-game-new>بدء رحلة جديدة</button>`;
  return `<section class="space-game-page game-entry-page" aria-label="Space Explorer"><div class="game-starfield" aria-hidden="true"></div><div class="game-entry-copy"><div class="game-entry-text"><span class="eyebrow">SPACE EXPLORER · مستكشف الفضاء</span><h1 id="space-game-title">رحلتك الاستكشافية تبدأ هنا</h1><p>انطلق إلى تضاريس القمر أو المريخ، واجمع العينات واكتشف العالم ثلاثي الأبعاد.</p></div>${actions}</div></section>`;
}
function spaceGameResumeScreen() {
  const destination = spaceGame.destination === "moon" ? "القمر" : "المريخ";
  return `<div class="game-screen game-resume-screen"><div class="game-screen-heading"><span class="game-step">رحلة محفوظة</span><h2>تحب تكمّل من آخر مرة؟</h2><p>شخصيتك ووجهتك وتقدمك محفوظين على هذا الجهاز. الوجهة الحالية: ${destination} · ${spaceGame.xp} XP.</p></div><div class="game-resume-actions"><button class="button primary" type="button" data-game-session="continue">متابعة الرحلة</button><button class="game-menu-secondary" type="button" data-game-session="new">بدء لعبة جديدة</button></div></div>`;
}
function spaceGameSessionPage() {
  const content = spaceGame.character === "astronaut" && isAstronautCampaignComplete()
    ? astronautCampaignCompleteScreen()
    : gamePresentation.resumeChoice ? spaceGameResumeScreen()
      : !spaceGame.character ? spaceCharacterScreen()
      : !spaceGame.destination ? spaceDestinationScreen()
        : spaceGame.character === "astronaut" && (!spaceGame.suit || !spaceGame.spacecraft || spaceGame.equipment.length === 0) ? spaceGearSummaryScreen()
          : spaceGame.character === "alien" && isCampaignComplete(spaceGame.destination) ? spaceGameCampaignCompleteScreen()
            : spaceGameMapScreen();
  return `<section class="space-game-page" aria-label="Space Explorer"><div class="game-starfield" aria-hidden="true"></div>${spaceGameHeader()}${content}<div class="game-engine-error" id="game-engine-error" role="alert" hidden><span>تعذر تهيئة العرض ثلاثي الأبعاد. تحقق من دعم WebGL واتصال الملفات المحلية.</span><button type="button" class="game-error-retry" data-game-retry>إعادة المحاولة</button></div></section>`;
}
async function startSpaceGameScene() {
  if (!gamePresentation.active || !spaceGame.character || !spaceGame.destination || gamePresentation.resumeChoice) return;
  const container = document.getElementById("game-canvas-host");
  if (!container) return;
  mountGameEquipmentControls(container);
  try {
    spaceGameEngine ||= await import("./vendor/space-game.js");
    if (!container.isConnected || route().split("/")[0] !== "game") return;
    const world = spaceGame.character === "alien" ? "earth" : spaceGame.destination;
    const target = spaceGame.destination === "moon" ? "القمر" : "المريخ";
    const gameWorld = getActiveGameWorld();
    const missionKey = gameWorld.missionKey;
    spaceGameEngine.startSpaceExplorer({
      container,
      hud: container.closest(".game-world-shell"),
      character: spaceGame.character,
      world,
      missionKey,
      target,
      sites: gameWorld.stageSite ? [gameWorld.stageSite] : [],
      stageSite: gameWorld.stageSite,
      samples: gameWorld.samples,
      progress: spaceGame,
      suit: spaceGame.suit,
      spacecraft: spaceGame.spacecraft,
      equipment: spaceGame.equipment,
      onSettings: settings => {
        spaceGame.settings = settings;
        saveSpaceGame();
      },
      onProgress: progress => {
        const newlyAnalyzed = progress.analyzedSites.filter(id => !spaceGame.analyzedSites.includes(id));
        newlyAnalyzed.forEach(id => {
          if (!spaceGame.discovered.includes(id)) spaceGame.discovered.push(id);
          if (!spaceGame.readSites.includes(id)) spaceGame.readSites.push(id);
        });
        const stageSite = gameWorld.stageSite;
        if (stageSite) {
          const pointIds = progress.discoveredPoints || [];
          pointIds.filter(id => !(spaceGame.discoveredPoints || []).includes(id)).forEach(id => {
            const pointIndex = Number(id.split("-point-").at(-1)) - 1;
            const point = stageSite.science.points[pointIndex];
            if (point) recordJourneyEvent("point", point.title, point.text, stageSite.id);
          });
          progress.discoveredSamples.filter(id => !spaceGame.discoveredSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-found", `اكتشاف: ${sample.name}`, sample.local, stageSite.id);
          });
          progress.collectedSamples.filter(id => !spaceGame.collectedSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-collected", `جمع: ${sample.name}`, `${sample.type} · ${sample.analysis}`, stageSite.id);
          });
          (progress.analyzedSamples || []).filter(id => !(spaceGame.analyzedSamples || []).includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-analyzed", `تحليل: ${sample.name}`, `${sample.analysis} ${sample.limitations}`, stageSite.id);
          });
          progress.completedMissions.filter(id => !spaceGame.completedMissions.includes(id)).forEach(id => {
            if (id === siteStageMissionId(stageSite.id)) recordJourneyEvent("site-complete", `إكمال الموقع: ${stageSite.ar}`, `اكتمل جمع ${gameWorld.sampleGoal} عينات تعليمية.`, stageSite.id);
          });
        } else {
          progress.discoveredSamples.filter(id => !spaceGame.discoveredSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-found", `اكتشاف: ${sample.name}`, sample.local, null);
          });
          progress.collectedSamples.filter(id => !spaceGame.collectedSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-collected", `جمع: ${sample.name}`, `${sample.type} · ${sample.analysis}`, null);
          });
          (progress.analyzedSamples || []).filter(id => !(spaceGame.analyzedSamples || []).includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-analyzed", `تحليل: ${sample.name}`, `${sample.analysis} ${sample.limitations}`, null);
          });
          progress.completedMissions.filter(id => !spaceGame.completedMissions.includes(id)).forEach(() => {
            recordJourneyEvent("destination-complete", `إكمال استكشاف ${target}`, `اكتمل جمع ${gameWorld.sampleGoal} عينات تعليمية.`, null);
          });
        }
        spaceGame = { ...spaceGame, ...progress };
        saveSpaceGame();
        document.querySelectorAll(".game-xp-value").forEach(node => { node.textContent = String(spaceGame.xp); });
        const achievements = document.getElementById("game-achievement-list");
        if (achievements) achievements.innerHTML = gameBadgesMarkup();
      },
      onStageComplete: () => {
        const currentWorld = getActiveGameWorld();
        handleSpaceGameAction({
          dataset: { gameAction: currentWorld.lastStage ? "show-campaign-summary" : "next-site" }
        });
      },
    });
  } catch (error) {
    console.error("Space Explorer could not start", error);
    const notice = document.getElementById("game-engine-error");
    if (notice) {
      notice.querySelector("span").textContent = /webgl|context|renderer/i.test(String(error))
        ? "تعذر تهيئة WebGL. فعّل تسريع الرسوم في Chrome أو استخدم جهازًا يدعم WebGL، ثم أعد المحاولة."
        : "تعذر تحميل محرك اللعبة المحلي. تحقق من ملفات الموقع ثم أعد المحاولة.";
      notice.hidden = false;
    }
  }
}

function updateSolarSystemBar() {
  const bar = document.querySelector(".game-solar-strip");
  if (!bar) return;

  // إظهار الشريط فقط داخل صفحة اللعبة، إخفاؤه في واجهة الموقع
  const page = route();
  if (page !== "game") {
    bar.style.display = "none";
    return;
  }
  bar.style.display = "flex";

  const isAstronaut = spaceGame.character === "astronaut";
  const destination = spaceGame.destination;

  // تحديد الكوكب النشط: رائد الفضاء على القمر → القمر، على المريخ → المريخ،否则 الأرض
  let activeBody = "earth";
  if (isAstronaut && destination === "moon") activeBody = "moon";
  if (isAstronaut && destination === "mars") activeBody = "mars";

  // إزالة جميع الفئات النشطة
  bar.querySelectorAll(".game-solar-body, .game-solar-earth-moon, .game-solar-body.solar-earth, .game-solar-body.solar-moon").forEach(el => {
    el.classList.remove("active", "earth-active", "moon-active");
  });

  // إضافة الفئة النشطة للكوكب المحدد
  const target = bar.querySelector(`.game-solar-body.solar-${activeBody}`);
  if (target) target.classList.add("active");

  // earth-group: إظهار الأرض सकریة عندما لا يكون على قمر/مريخ
  const earthGroup = bar.querySelector(".game-solar-earth-moon");
  if (earthGroup) {
    if (activeBody === "earth") {
      earthGroup.classList.add("earth-active");
    }
    if (activeBody === "moon") {
      earthGroup.classList.add("moon-active");
    }
  }
}
function stopSpaceGameScene() {
  if (spaceGameEngine) spaceGameEngine.stopSpaceExplorer();
}
function saveSpaceGameResumeState() {
  const resumeState = spaceGameEngine?.getSpaceExplorerResumeState?.();
  if (!resumeState) return;
  spaceGame.resumeState = resumeState;
  saveSpaceGame();
}
function showAlienWarpScreen(onFinish) {
  const overlay = document.createElement("div");
  overlay.className = "alien-ufo-warp-screen";
  overlay.innerHTML = `
    <div class="alien-ufo-warp-stars"></div>
    <div class="alien-ufo-craft-wrap">
      <svg width="120" height="70" viewBox="0 0 120 70" fill="none">
        <ellipse cx="60" cy="45" rx="54" ry="16" fill="#38bdf8" fill-opacity="0.25"/>
        <ellipse cx="60" cy="40" rx="50" ry="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <ellipse cx="60" cy="38" rx="42" ry="9" fill="#0369a1"/>
        <circle cx="28" cy="40" r="3" fill="#a7f3d0"/>
        <circle cx="44" cy="43" r="3" fill="#fde047"/>
        <circle cx="60" cy="44" r="3.5" fill="#f43f5e"/>
        <circle cx="76" cy="43" r="3" fill="#fde047"/>
        <circle cx="92" cy="40" r="3" fill="#a7f3d0"/>
        <path d="M40 34 C40 18, 80 18, 80 34 Z" fill="#67e8f9" fill-opacity="0.85" stroke="#bae6fd" stroke-width="2"/>
        <circle cx="60" cy="18" r="4" fill="#34d399"/>
        <line x1="60" y1="18" x2="60" y2="10" stroke="#34d399" stroke-width="2"/>
        <circle cx="60" cy="9" r="3" fill="#fef08a"/>
      </svg>
    </div>
    <h2 class="alien-ufo-warp-title">انتقال فضائي فائق بالطبق الطائر 🛸</h2>
    <p class="alien-ufo-warp-sub">جاري القفز عبر الزمكان إلى الموقع التالي بسرعة الضوء…</p>
    <div class="alien-ufo-warp-bar"><div class="alien-ufo-warp-fill"></div></div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.remove();
      if (typeof onFinish === "function") onFinish();
    }, 350);
  }, 3000);
}

function handleSpaceGameAction(button) {
  const { gameAction: action, character, destination, suit, spacecraft } = button.dataset;
  if (action === "show-journey-log") {
    const log = button.closest(".game-stage-card")?.querySelector(".game-stage-journey-log");
    if (log) {
      log.hidden = !log.hidden;
      button.textContent = log.hidden ? "عرض المسار" : "إخفاء المسار";
      if (!log.hidden) log.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    return;
  } else if (action === "choose-character") {
    spaceGame.character = character;
    spaceGame.destination = null;
    spaceGame.selectedSite = null;
  } else if (action === "choose-destination") {
    spaceGame.destination = destination;
    spaceGame.selectedSite = spaceGame.character === "alien" ? nextCampaignSite(destination)?.id || campaignSites(destination)[0]?.id || null : null;
    spaceGame.resumeState = null;
    const firstSite = campaignSites(destination).find(site => site.id === spaceGame.selectedSite);
    if (firstSite) recordJourneyEvent("site-arrival", `بدء الاستكشاف: ${firstSite.ar}`, firstSite.science.task, firstSite.id);
    else recordJourneyEvent("destination", `اختيار الوجهة: ${destination === "moon" ? "القمر" : "المريخ"}`, "بدأت رحلة استكشاف الوجهة.", null);
    if (spaceGame.character === "astronaut") {
      spaceGame.suit = null;
      spaceGame.spacecraft = null;
      spaceGame.equipment = [];
    }
  } else if (action === "start-mission") {
    // Gear is auto-assigned in spaceGearSummaryScreen; proceed to game map
  } else if (action === "change-character") {
    spaceGame.character = null;
    spaceGame.destination = null;
    spaceGame.selectedSite = null;
  } else if (action === "change-destination") {
    spaceGame.destination = null;
    spaceGame.selectedSite = null;
  } else if (action === "next-site") {
    const isAlien = spaceGame.character === "alien";
    const campaign = campaignSites(spaceGame.destination);
    const currentIndex = campaign.findIndex(site => site.id === spaceGame.selectedSite);
    spaceGame.selectedSite = campaign.slice(currentIndex + 1).find(site => !isSiteStageComplete(spaceGame.destination, site))?.id || null;
    spaceGame.resumeState = null;
    const nextSite = campaign.find(site => site.id === spaceGame.selectedSite);
    if (nextSite) recordJourneyEvent("site-arrival", `الانتقال إلى: ${nextSite.ar}`, nextSite.science.task, nextSite.id);
    if (isAlien) {
      saveSpaceGame();
      showAlienWarpScreen(() => render());
      return;
    }
  } else if (action === "continue-mars-campaign") {
    const isAlien = spaceGame.character === "alien";
    spaceGame.destination = "mars";
    spaceGame.selectedSite = nextCampaignSite("mars")?.id || campaignSites("mars")[0]?.id || null;
    spaceGame.resumeState = null;
    const firstMarsSite = campaignSites("mars").find(site => site.id === spaceGame.selectedSite);
    if (firstMarsSite) recordJourneyEvent("site-arrival", `بدء مسار المريخ: ${firstMarsSite.ar}`, firstMarsSite.science.task, firstMarsSite.id);
    if (isAlien) {
      saveSpaceGame();
      showAlienWarpScreen(() => render());
      return;
    }
  } else if (action === "show-campaign-summary") {
    spaceGame.resumeState = null;
  } else if (action === "astronaut-switch-mars") {
    spaceGame.destination = "mars";
    spaceGame.resumeState = null;
  } else if (action === "astronaut-switch-moon") {
    spaceGame.destination = "moon";
    spaceGame.resumeState = null;
  } else if (action === "astronaut-show-summary") {
    spaceGame.resumeState = null;
  } else if (action === "return-home") {
    location.hash = "#home";
    return;
  } else if (action === "finish-mission") {
    spaceGame.character = null;
    spaceGame.destination = null;
    spaceGame.selectedSite = null;
    spaceGame.resumeState = null;
  } else if (action === "finish-campaign") {
    spaceGame.character = null;
    spaceGame.destination = null;
    spaceGame.selectedSite = null;
    spaceGame.resumeState = null;
  } else if (action === "review-site") {
    spaceGameEngine?.reviewCompletedStage?.();
    return;
  } else if (action === "reset") {
    if (hasValidSavedSpaceGame()
      && !window.confirm("بدء رحلة جديدة سيستبدل تقدم الرحلة المحفوظة على هذا الجهاز. هل تريد المتابعة؟")) return;
    spaceGame = freshSpaceGame();
  }
  saveSpaceGame();
  render();
}
function handleGameSessionChoice(choice) {
  if (choice === "new" && hasValidSavedSpaceGame()
    && !window.confirm("بدء رحلة جديدة سيستبدل تقدم الرحلة المحفوظة على هذا الجهاز. هل تريد المتابعة؟")) return;
  gamePresentation.resumeChoice = false;
  if (choice === "new") {
    spaceGame = freshSpaceGame();
    saveSpaceGame();
  }
  render();
}
function waitForGamePresentation(ms) {
  return new Promise(resolve => {
    gamePresentation.countdownTimer = setTimeout(resolve, ms);
  });
}
function isPortraitTouchDevice() {
  const isTouchDevice = navigator.maxTouchPoints > 0 || window.matchMedia("(any-pointer: coarse)").matches;
  const screenIsPortrait = screen.orientation?.type?.startsWith("portrait") === true;
  const viewportIsPortrait = window.matchMedia("(orientation: portrait)").matches;
  return isTouchDevice && (screenIsPortrait || viewportIsPortrait);
}
function waitForLandscapeOrientation(layer) {
  if (!isPortraitTouchDevice()) return Promise.resolve();
  layer.classList.add("is-portrait-blocked");
  return new Promise(resolve => {
    const finish = (cancelled = false) => {
      if (!cancelled && isPortraitTouchDevice()) return;
      window.removeEventListener("orientationchange", checkOrientation);
      window.removeEventListener("resize", checkOrientation);
      screen.orientation?.removeEventListener?.("change", checkOrientation);
      layer.classList.remove("is-portrait-blocked");
      gamePresentation.cancelOrientationWait = null;
      resolve();
    };
    const checkOrientation = () => finish();
    gamePresentation.cancelOrientationWait = () => finish(true);
    window.addEventListener("orientationchange", checkOrientation);
    window.addEventListener("resize", checkOrientation);
    screen.orientation?.addEventListener?.("change", checkOrientation);
    checkOrientation();
  });
}
function updateGameOrientation() {
  const layer = gamePresentation.layer;
  if (!gamePresentation.active || !layer) return;
  const portrait = isPortraitTouchDevice();
  layer.classList.toggle("is-portrait-blocked", portrait);
  const pauseOverlay = layer.querySelector("#game-pause-overlay");
  if (!layer.classList.contains("is-playing") || !pauseOverlay) return;
  if (portrait && pauseOverlay.hidden) {
    layer.querySelector('[data-engine-action="pause"]')?.click();
    gamePresentation.orientationPaused = true;
  } else if (!portrait && gamePresentation.orientationPaused) {
    layer.querySelector('[data-engine-action="resume"]')?.click();
    gamePresentation.orientationPaused = false;
  }
}
window.addEventListener("orientationchange", updateGameOrientation);
window.addEventListener("resize", updateGameOrientation);
screen.orientation?.addEventListener?.("change", updateGameOrientation);
async function startGamePresentation(mode = "new") {
  if (gamePresentation.active) return;
  const page = app.querySelector(".space-game-page");
  if (!page) return;
  if (mode === "continue" && !hasValidSavedSpaceGame()) mode = "new";
  if (mode === "new" && hasValidSavedSpaceGame()
    && !window.confirm("بدء رحلة جديدة سيستبدل تقدم الرحلة المحفوظة على هذا الجهاز. هل تريد المتابعة؟")) return;
  if (mode === "new") {
    spaceGame = freshSpaceGame();
    saveSpaceGame();
  }
  gamePresentation.active = true;
  gamePresentation.cancelled = false;
  gamePresentation.resumeChoice = false;
  gamePresentation.orientationPaused = false;
  clearInterval(gameResumeSaveTimer);
  gameResumeSaveTimer = window.setInterval(saveSpaceGameResumeState, 2000);
  stopSpaceGameScene();
  const layer = document.createElement("div");
  layer.id = "game-launch-layer";
  layer.innerHTML = `<div class="game-launch-content"></div><div class="game-countdown" role="status" aria-live="assertive"><div class="game-countdown-orbit" aria-hidden="true"><i></i><i></i><i></i></div><p>جارٍ تجهيز مركبة الاستكشاف...</p><strong id="game-countdown-number">3</strong><small id="game-loading-status" hidden>جارٍ تجهيز العالم ثلاثي الأبعاد...</small></div><div class="game-orientation-gate" role="status" aria-live="polite"><div><span aria-hidden="true">▯</span><strong>أدر الهاتف أفقيًا</strong><p>لن يبدأ اللعب حتى تدوير الجهاز إلى الوضع الأفقي.</p><button class="game-menu-secondary" type="button" data-game-exit>إلغاء والعودة</button></div></div>`;
  const orientationGate = layer.querySelector(".game-orientation-gate");
  if (orientationGate) {
    orientationGate.querySelector("strong").textContent = "جارٍ تدوير الشاشة تلقائيًا";
    orientationGate.querySelector("p").textContent = "لن يبدأ اللعب قبل اكتمال الوضع الأفقي.";
  }
  gamePresentation.layer = layer;
  gamePresentation.content = layer.querySelector(".game-launch-content");
  document.body.append(layer);
  gamePresentation.content.append(page);
  gamePresentation.content.querySelector(".game-landscape-prompt")?.remove();
  document.body.classList.add("game-session-active");

  const isTouchDevice = navigator.maxTouchPoints > 0 || window.matchMedia("(any-pointer: coarse)").matches;
  const fullscreenRequest = document.documentElement.requestFullscreen
    ? document.documentElement.requestFullscreen().then(() => true).catch(() => false)
    : Promise.resolve(false);
  if (isTouchDevice) {
    const enteredFullscreen = await fullscreenRequest;
    if (enteredFullscreen && screen.orientation?.lock) {
      try { await screen.orientation.lock("landscape"); } catch { /* The portrait gate remains active when locking is unavailable. */ }
    }
    await waitForLandscapeOrientation(layer);
    if (gamePresentation.cancelled) return;
  } else {
    void fullscreenRequest;
  }
  const engineReady = import("./vendor/space-game.js").then(engine => {
    spaceGameEngine ||= engine;
    return true;
  }).catch(error => {
    console.error("Space Explorer engine could not be loaded", error);
    return false;
  });

  for (const number of [3, 2, 1]) {
    const numberElement = layer.querySelector("#game-countdown-number");
    if (numberElement) numberElement.textContent = String(number);
    await waitForGamePresentation(1000);
    if (gamePresentation.cancelled) return;
  }
  const loadingStatus = layer.querySelector("#game-loading-status");
  const loaded = await Promise.race([engineReady, new Promise(resolve => window.setTimeout(() => resolve(false), 500))]);
  if (!loaded && loadingStatus) loadingStatus.hidden = false;
  if (!loaded) await engineReady;
  if (gamePresentation.cancelled) return;
  layer.classList.add("is-playing");
  layer.querySelector(".game-countdown").hidden = true;
  render();
}
function exitGamePresentation() {
  if (!gamePresentation.active) return;
  gamePresentation.cancelOrientationWait?.();
  gamePresentation.cancelled = true;
  clearTimeout(gamePresentation.countdownTimer);
  clearInterval(gameResumeSaveTimer);
  gameResumeSaveTimer = null;
  saveSpaceGameResumeState();
  stopSpaceGameScene();
  screen.orientation?.unlock?.();
  if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  gamePresentation.layer?.remove();
  gamePresentation.active = false;
  gamePresentation.content = null;
  gamePresentation.layer = null;
  gamePresentation.resumeChoice = false;
  document.body.classList.remove("game-session-active");
  render();
  document.getElementById("game")?.scrollIntoView({ block: "start" });
}
function galleryPage() {
  return `${heading("صور المواقع", "معرض الصور الفضائية", `صور ميدانية أصلية للمواقع الستة · ${sites.reduce((count, site) => count + site.gallery.length, 0)} صورة.`)}
  <div class="site-grid gallery-grid">${sites.flatMap(site => site.gallery.map((photo, index) => `<article class="gallery-item">
    <button class="gallery-photo-button" type="button" data-photo-site="${site.id}" data-photo-index="${index}" aria-label="تكبير ${escapeHtml(photo.title)}">
      <div class="gallery-img-wrap"><img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy"></div>
      <span class="gallery-item-overlay"><span class="gallery-target-pill ${site.target === "القمر" ? "target-moon" : "target-mars"}">${site.target === "القمر" ? "القمر" : "المريخ"}</span><strong>${escapeHtml(photo.title)}</strong><small>${escapeHtml(site.ar)} · ${escapeHtml(photo.caption)}</small></span>
    </button>
    <a class="gallery-site-link" href="${sitePath(site)}">ملف ${escapeHtml(site.ar)} <span aria-hidden="true">↗</span></a>
  </article>`)).join("")}</div>${photoViewerMarkup()}`;
}
function whyPage() {
  return `${heading("الاستعداد لمهام الفضاء", "لماذا ندرس هذه البيئات التناظرية؟", "تساعد البيئات الأرضية على اختبار أجزاء المهمة الحساسة في ظروف تضاريس ومناخ حقيقية.")}
  <section class="why-intro panel">
    <div class="why-intro-header">
      <span class="eyebrow">أساسيات الاستكشاف التناظري</span>
      <h2>اختبار على الأرض.. قبل الرحلة إلى الفضاء</h2>
    </div>
    <p>تتيح البيئات الأرضية للفرق العلمية وهندسة الفضاء تجربة حركة المركبات الجوالة، وأذرع جمع العينات، وأجهزة التصوير والملاحة الذاتية، وإجراءات العمل الميداني في تضاريس قاسية وصخرية. تكشف هذه الاختبارات نقاط الضعف مبكرًا وتوفر مئات الملايين من الدولارات قبل إطلاق المركبات نحو الفضاء السحيق.</p>
  </section>
  <div class="why-grid">
    <article class="why-card">
      <span class="why-num">01</span>
      <div class="why-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>
      </div>
      <h3>الروبوتات وحركة الجوالات</h3>
      <p>تجربة تحمل العجلات وأنظمة الملاحة الذاتية فوق الحصى والرمال والتضاريس المنحدرة، تمامًا كما وثقت ناسا تجارب عربات K-10 في فوهة هوتون بكندا.</p>
    </article>
    <article class="why-card">
      <span class="why-num">02</span>
      <div class="why-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>
      <h3>أجهزة الاستشعار وأخذ العينات</h3>
      <p>معايرة كاميرات الأشعة تحت الحمراء، وأجهزة قياس الأطياف الصخرية، واختبار آليات الحفر وأخذ اللباب الصخري في بيئات جافة تحاكي تراب الكواكب.</p>
    </article>
    <article class="why-card">
      <span class="why-num">03</span>
      <div class="why-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/></svg>
      </div>
      <h3>فهم حدود المقارنة العلمية</h3>
      <p>الجاذبية المنخفضة (سدس جاذبية الأرض للقمر، وثلثها للمريخ) والضغط الجوي شديد الانخفاض والإشعاع الكوني تظل عوامل لا يمكن للأرض تكرارها بدقة.</p>
    </article>
  </div>
  <div class="callout warning" style="margin-top:20px">
    <div class="callout-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div><strong>مبدأ علمي حاسم:</strong> لا يوجد أي موقع على وجه الأرض يطابق سطح القمر أو المريخ تطابقًا كاملًا. استخدام المواقع الأرضية مقتصر على أهداف اختبار تجريبية محددة.</div>
  </div>`;
}
function sourcesPage() {
  const groups = [
    { id: "lunar", title: "مواقع القمر", target: "القمر", sites: siteGroups.lunar.ids, description: "مراجع NASA للمواقع الأرضية المستخدمة لدراسة أسئلة جيولوجية وعملياتية مرتبطة بالقمر." },
    { id: "mars", title: "مواقع المريخ", target: "المريخ", sites: siteGroups.mars.ids, description: "مراجع NASA للمواقع الأرضية المستخدمة لاختبار أسئلة محددة مرتبطة باستكشاف المريخ." }
  ];
  return `${heading("مراجع NASA الرسمية", "مصادر المواقع الستة", "سجلات NASA الأصلية المرتبطة بالصور والمشاهد المعروضة لكل موقع.")}
    <div class="sources-page">
      ${groups.map(group => `<section class="sources-group sources-group-${group.id}" aria-labelledby="sources-${group.id}-title">
        <header class="sources-group-heading">
          <span class="eyebrow">${group.sites.length} مواقع أرضية</span>
          <h2 id="sources-${group.id}-title">${group.title}</h2>
          <p>${group.description}</p>
        </header>
        <div class="sources-grid">
          ${group.sites.map(siteId => {
            const site = sites.find(item => item.id === siteId);
            const source = nasaSourcePages[siteId];
            return `<article class="source-entry">
              <div class="source-entry-meta">
                <span class="source-world-tag">${group.target}</span>
                <span class="source-nasa-id">NASA ID: ${source.id}</span>
              </div>
              <h3>${escapeHtml(site.ar)}</h3>
              <p class="source-location">${escapeHtml(site.country)} · ${escapeHtml(site.subsite)}</p>
              <p class="source-record-title" lang="en" dir="ltr">${escapeHtml(source.title)}</p>
              <a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">فتح سجل NASA الرسمي <span aria-hidden="true">↗</span></a>
            </article>`;
          }).join("")}
        </div>
      </section>`).join("")}
      <aside class="sources-note">
        <strong>حدود المراجع</strong>
        <p>تدعم هذه السجلات وصف الصور والمشاهد ومواقعها؛ ولا تُعد بحد ذاتها قياسات ميدانية أو إثباتًا لخصائص التربة أو تطابق الموقع مع القمر أو المريخ.</p>
      </aside>
    </div>`;
}
function teamPage() {
  return `<div class="team-page-container">
    <img src="صوره عن الفريق.jpeg" alt="" aria-hidden="true" class="team-page-background">
    <div class="team-artwork-banner">
      <div class="artwork-content-overlay">
        <div class="artwork-logo-badge">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/></svg>
          <span>Analog TriNexus</span>
        </div>
        <h1 class="artwork-motto">فريق Analog TriNexus</h1>
        <div class="artwork-submotto">
          <span class="submotto-item">القمر</span>
          <span class="submotto-dot">✦</span>
          <span class="submotto-item">الأرض</span>
          <span class="submotto-dot">✦</span>
          <span class="submotto-item">المريخ</span>
        </div>
      </div>
    </div>

    <div class="section-head">
      <div>
        <span class="eyebrow">فريق المشروع</span>
        <h2>أعضاء الفريق</h2>
        <p>الأسماء والأدوار المعروضة تقتصر على المعلومات المسجلة للمشروع.</p>
      </div>
    </div>

    <div class="team-grid">
      ${teamMembers.map(member => {
        const isLeader = typeof member === "object" && member.leader;
        const name = isLeader ? member.name : member;
        return `<article class="team-member-card ${isLeader ? "team-leader-card" : ""}">
          <div class="member-avatar-wrap">
            <div class="avatar-orbit"></div>
            <div class="avatar-core">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            ${isLeader ? `<span class="leader-crown-badge" title="قائد الفريق">★</span>` : ""}
          </div>
          <div class="member-info">
            <strong class="member-name" lang="en" dir="ltr">${escapeHtml(name)}</strong>
            <span class="member-role">${isLeader ? "قائد الفريق" : "عضو الفريق"}</span>
          </div>
        </article>`;
      }).join("")}
    </div>

    <!-- Project Vision Panel -->
    <section class="team-project-panel panel">
      <div class="project-panel-header">
        <div class="panel-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
        </div>
        <div>
          <span class="eyebrow">رؤية المشروع وأهدافه</span>
          <h2>عوالم بعيدة تبدأ من الأرض</h2>
        </div>
      </div>
      <p>رحلة تفاعلية لاستكشاف البيئات الأرضية التي تساعد على اختبار تقنيات الاستكشاف وفهم أوجه الشبه والاختلاف مع عوالم القمر والمريخ.</p>
      <div class="vision-grid">
        <div class="vision-card">
          <strong>استكشاف المواقع</strong>
          <p>عرض تفاعلي للمواقع وخصائصها وأوجه الشبه والاختلاف بينها.</p>
        </div>
        <div class="vision-card">
          <strong>تجربة تفاعلية ثرية</strong>
          <p>خريطة تفاعلية، وأدلة صوتية، ومساعد محلي يجيب اعتمادًا على محتوى المشروع.</p>
        </div>
        <div class="vision-card">
          <strong>منهجية مقارنة واضحة</strong>
          <p>التأكيد الدائم على أن المواقع الأرضية تخدم أهداف اختبار محددة ولا تدعي تطابقًا تامًا مع الفضاء.</p>
        </div>
      </div>
    </section>
  </div>`;
}
function problemsPage() {
  const problems = [
    { key: "moon", title: "سطح القمر", icon: "🌕", target: "القمر",
      problem: "فراغ كوني تام وجاذبية تبلغ سدس جاذبية الأرض، مع تفاوت حراري شديد بين النهار (+120°C) والليل (-130°C) قد يسبب تحمُّلاً حراريًا وفقدانًا سريعًا للحرارة.",
      solution: "ارتداء بدلة القمر المضغوطة مع نظام تحكم حراري نشط، واستخدام مركبة هبوط القمر المزودة بأرجل ثابتة لحماية الرواد أثناء الهبوط والتنقل." },
    { key: "mars", title: "سطح المريخ", icon: "🔴", target: "المريخ",
      problem: "غلاف جوي رقيق يتكون 대부분 من ثاني أكسيد الكربون وضغط منخفض جداً، مع غبار ناعم قد يتسرب إلى المعدات ويسبب مشاكل تنفسية.",
      solution: "ارتداء بدلة المريخ مع نظام دعم حياة يغلق الغبار تمامًا، ومركبة هبوط المريخ المزودة بنظام ترشيح هواء ومظلات هبوط للغلاف الجوي الرقيق." },
    { key: "meteor-crater", title: "فوهة ميتيور (أريزونا)", icon: "🕳️", target: "القمر",
      problem: "تضاريس فوهة اصطدام حادة ومنحدرة قد تؤدي إلى انزلاق المعدات وتعقيد حركة الرواد داخل المركبة وحولها.",
      solution: "استخدام عربة استكشاف مزودة بعجلات مقاومة للانزلاق، وحقيبة أدوات لإصلاح أي أعطال ميكانيكية داخل المركبة فور حدوثها." },
    { key: "hawaii", title: "جزر هاواي (ماونا لوا)", icon: "🌋", target: "القمر",
      problem: "صخور بركانية حادة وحرارة مرتفعة بالقرب من النشاط البركاني قد تلحق أضرارًا ببدلة الرواد وتسبب حروقًا أو تمزقات.",
      solution: "طبقة حرارية إضافية في العتاد، وبدلة مزودة بأعذار تقوية ضد القطع، مع خطة إخلاء سريعة إلى المركبة عند رصد نشاط بركاني." },
    { key: "devon", title: "جزيرة ديفون (كندا)", icon: "❄️", target: "القمر",
      problem: "برودة قطبية شديدة ورياح قوية قد تسبب انخفاض حرارة الجسم (Hypothermia) وتجمد الأطراف داخل المركبة إذا تعطل التدفئة.",
      solution: "حقيبة إسعاف أولي مع بطانيات حرارية، وخزان أكسجين يضمن تزويد مستمر بالهواء الدافئ داخل المركبة، وصيانة دورية لنظام التدفئة." },
    { key: "atacama", title: "صحراء أتاكاما (تشيلي)", icon: "🏜️", target: "المريخ",
      problem: "جفاف شديد وقلة رطوبة الهواء قد يسبب جفافًا سريعًا وجفاف الجلد والجفاف التنفسي للرواد خلال المهام الميدانية.",
      solution: "خزان أكسجين مزود بمرطب للهواء، وحقيبة عينات مغلقة لحفظ العينات دون تلوث، مع جدول تعاقب للشرب والترطيب داخل المركبة." },
    { key: "death-valley", title: "وادي الموت (كاليفورنيا)", icon: "☀️", target: "المريخ",
      problem: "حرارة سطحية مرتفعة جدًا قد تؤدي إلى ارتفاع درجة حرارة بدلة الرواد وتعطل أجهزة الاتصال داخل المركبة.",
      solution: "نظام تبريد نشط في بدلة المريخ/القمر، ووحدة اتصال مزودة بدرع حراري لحمايتها من أشعة الشمس المباشرة." },
    { key: "mcmurdo", title: "الوديان الجافة (أنتاركتيكا)", icon: "🧊", target: "المريخ",
      problem: "عزلة قطبية ممتدة وعدم إمدادات خارجية قد تزيد من التوتر النفسي ونقص المعدات الطبية داخل المركبة.",
      solution: "حقيبة إسعاف أولي متكاملة مع أدوية الإسعاف، ونظام اتصال أقمار صناعية للتواصل المستمر مع مركز التحكم الأرضي." }
  ];
  return `${heading("مشاكل وحلول رواد الفضاء", "تحديات الرواد والحلول المقترحة", "لكل موقع بيئته الخاصة، ولكل مشكلة حل. نستعرض هنا أهم المشكلات التي قد تواجه رواد الفضاء داخل المركبة وعلى سطح القمر والمريخ والمواقع النظيرة، مع الحل المقترح لكل موقع.")}
  <section class="panel problems-page-panel">
    <div class="problems-intro">
      <p>تستعرض البطاقات أدناه أبرز المشاكل البيئية والتشغيلية التي قد تواجه رواد الفضاء خلال مهام الاستكشاف، مع الحل التقني والتجهيزي المقترح لكل موقع.</p>
    </div>
    <div class="problems-grid">
      ${problems.map(item => `
        <article class="problem-card ${item.key}">
          <div class="problem-icon" aria-hidden="true">${item.icon}</div>
          <div class="problem-content">
            <h3>${escapeHtml(item.title)} <span class="problem-target">${escapeHtml(item.target)}</span></h3>
            <div class="problem-pair">
              <div class="problem-box problem-box-problem">
                <span class="problem-label">المشكلة</span>
                <p>${escapeHtml(item.problem)}</p>
              </div>
              <div class="problem-box problem-box-solution">
                <span class="problem-label">الحل</span>
                <p>${escapeHtml(item.solution)}</p>
              </div>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  </section>
  <div class="page-actions" style="margin-top:24px;text-align:center;">
    <a class="button secondary" href="#team">العودة إلى صفحة الفريق ←</a>
  </div>`;
}
function explorerCard(site) {
  return `<section class="explorer-card panel" aria-labelledby="explorer-title-${site.id}">
    <div class="ai-avatar-orb" aria-hidden="true">
      <div class="orb-halo"></div>
      <div class="orb-core">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
        </svg>
      </div>
      <div class="orb-ring ring-1"></div>
      <div class="orb-ring ring-2"></div>
      <span class="orb-status-ping"></span>
    </div>
    <div class="explorer-copy">
      <div class="explorer-badge">
        <span class="pulse-indicator"></span>
        <span>مساعد الاستكشاف المحلي · ${escapeHtml(site.ar)}</span>
      </div>
      <h2 id="explorer-title-${site.id}">تحليل بيئة الموقع مع المساعد الكوكبي</h2>
      <p class="explorer-summary">${escapeHtml(site.guide.summary)}</p>
      <div class="explorer-facts">
        <div class="fact-card">
          <div class="fact-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
          </div>
          <div>
            <strong>وجه التشابه</strong>
            <span>${escapeHtml(site.guide.similarity)}</span>
          </div>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div>
            <strong>ما الذي يمكن اختباره؟</strong>
            <span>${escapeHtml(site.guide.advantage)}</span>
          </div>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <strong>أبرز أوجه الاختلاف</strong>
            <span>${escapeHtml(site.guide.difference)}</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
function detailPage(site) {
  const isMoon = site.target === "القمر";
  return `<div class="site-detail-container fade-in">
    <div class="site-detail-head">
      <div class="site-detail-title-group">
        <div class="detail-badge-row">
          <span class="site-type ${isMoon ? "target-moon" : "target-mars"}">
            <span class="type-dot"></span>
            <span>بيئة تناظرية لدراسة ${escapeHtml(site.target)}</span>
          </span>
          <span class="site-number-pill">${site.number} / ${String(sites.length).padStart(2, "0")}</span>
        </div>
        <h1>${escapeHtml(site.ar)}</h1>
        <div class="site-en" lang="en" dir="ltr">${escapeHtml(site.en)} · ${escapeHtml(site.country)}</div>
        <p class="lede">${escapeHtml(site.brief)}</p>
      </div>
      <div class="detail-head-actions">
        <a class="button outline-btn" href="#${isMoon ? 'lunar' : 'mars-analogs'}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>العودة للقائمة</span>
        </a>
      </div>
    </div>

    ${sitePhoto(site)}

    <div class="site-detail-grid">
      <div class="detail-main">
        ${siteScienceMarkup(site)}
        <section class="panel detail-panel">
          <div class="panel-header-row">
            <div class="panel-header-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
            </div>
            <h2>الموقع والجغرافيا الميدانية</h2>
          </div>
          <div class="fact-grid">
            <div class="fact">
              <span>الموقع الفرعي</span>
              <strong>${escapeHtml(site.subsite)}</strong>
            </div>
            <div class="fact">
              <span>الإحداثيات المرجعية</span>
              <strong dir="ltr" class="coord-val">${formatCoord(site.lat)}, ${formatCoord(site.lon)}</strong>
            </div>
            <div class="fact">
              <span>حالة الإحداثيات</span>
              <strong>${escapeHtml(site.coordStatus)}</strong>
            </div>
            <div class="fact">
              <span>نوع التضاريس</span>
              <strong>${escapeHtml(site.type)}</strong>
            </div>
            <div class="fact">
              <span>الارتفاع عن سطح البحر</span>
              <strong>${site.elevation === null ? "لا تتوفر بيانات موثوقة كافية" : `${site.elevation} م`}</strong>
            </div>
            <div class="fact">
              <span>المساحة المدروسة</span>
              <strong>${site.area ?? "تتحدد وفق محطة الرصد"}</strong>
            </div>
          </div>
          <p class="panel-subtext">الإحداثيات نقاط مرجعية استرشادية للعرض المكاني، ولا تمثل حدود مساحة مقفلة أو ترخيصًا ميدانيًا منفردًا.</p>
        </section>

        <section class="panel detail-panel">
          <div class="panel-header-row">
            <div class="panel-header-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>
            </div>
            <h2>أوجه الشبه والاختلاف مع ${escapeHtml(site.target)}</h2>
          </div>
          <div class="comparison-cards">
            <div class="comp-box comp-similar">
              <div class="comp-header">
                <span class="comp-icon">✓</span>
                <h3>ما الذي يمكن أن نتعلمه ونختبره؟</h3>
              </div>
              <p>${escapeHtml(site.guide.similarity)}</p>
              <p>${escapeHtml(site.guide.advantage)}</p>
            </div>
            <div class="comp-box comp-diff">
              <div class="comp-header">
                <span class="comp-icon">✕</span>
                <h3>حدود المقارنة وفروق البيئة</h3>
              </div>
              <p>${escapeHtml(site.guide.difference)}</p>
            </div>
          </div>
        </section>

        <section class="panel detail-panel">
          <div class="panel-header-row">
            <div class="panel-header-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>
            </div>
            <h2>الخريطة المدارية لموقع ${escapeHtml(site.ar)}</h2>
          </div>
          <div class="map-wrap">
            <div class="map-canvas detail-map" id="detail-map" role="application" aria-label="موقع ${escapeHtml(site.ar)}"></div>
          </div>
          <div class="map-caption">
            <span>نقطة مرجعية · ${escapeHtml(site.coordStatus)}</span>
          </div>
        </section>
      </div>

      <aside class="detail-side">
      </aside>
    </div>

    ${explorerCard(site)}
  </div>`;
}
function currentScore(siteId, criterionId) {
  const value = scoreState?.[siteId]?.[criterionId];
  return value === undefined || value === null || value === "" ? "" : Number(value);
}
function currentEvidence(siteId, criterionId) {
  return evidenceState?.[siteId]?.[criterionId] || "";
}
function comparePage() {
  const rows = sites.map(site => `<tr><td class="site-table-name">${escapeHtml(site.ar)}<small>${escapeHtml(site.subsite)}</small></td>${criteria.map(item => `<td><input class="score-input" type="number" min="0" max="5" step="1" inputmode="numeric" placeholder="—" aria-label="${escapeHtml(site.ar)}، ${escapeHtml(item.label)}، من صفر إلى خمسة" data-score-site="${site.id}" data-score-criterion="${item.id}" value="${currentScore(site.id, item.id)}"><details class="score-evidence"><summary>مصدر / تبرير</summary><textarea rows="2" data-evidence-site="${site.id}" data-evidence-criterion="${item.id}" aria-label="مصدر وتبرير ${escapeHtml(site.ar)}، ${escapeHtml(item.label)}" placeholder="رابط المصدر أو عنوانه، سبب الدرجة…">${escapeHtml(currentEvidence(site.id, item.id))}</textarea></details></td>`).join("")}<td data-completeness="${site.id}">0/9</td><td><select class="confidence-select" data-confidence="${site.id}" aria-label="تقدير الفريق لثقة أدلة ${escapeHtml(site.ar)}"><option value="">غير مُقيّمة</option><option value="low" ${confidenceState[site.id] === "low" ? "selected" : ""}>منخفضة</option><option value="medium" ${confidenceState[site.id] === "medium" ? "selected" : ""}>متوسطة</option><option value="high" ${confidenceState[site.id] === "high" ? "selected" : ""}>مرتفعة</option></select></td><td data-result="${site.id}">غير محسوبة</td></tr>`).join("");
  return `${heading("مقارنة قابلة للمراجعة", "المقارنة والتقييم", "أدخلوا درجات صحيحة من 0 إلى 5، وأرفقوا مصدرًا وتبريرًا لكل درجة. لا يظهر ترتيب إلا عند وجود خمسة معايير مشتركة موثقة للمواقع الستة.", `<button class="button" data-action="clear-scores">مسح درجات الفريق</button>`)}
  <div class="callout warning" style="margin-bottom:14px"><strong>تنبيه منهجي</strong><br>لا توجد درجات مبدئية. الخانات الفارغة ليست أصفارًا. لا يكفي الرقم للترتيب: أضيفوا مصدرًا وتبريرًا لكل درجة مشتركة. حد الخمسة إجراء أولي وليس دليلًا على كفاية علمية. «الاختلاف عن المريخ» معيار سلبي: الدرجة الأعلى تعني اختلافًا أكبر.</div>
  <div class="compare-layout"><section class="panel"><div class="score-blocked">اكتمال الإدخالات هو عدد الدرجات التي لها مصدر/تبرير من 9. يختار الفريق مستوى الثقة يدويًا بعد مراجعة موثوقية المصدر ودقته واكتماله؛ لا تحسبه المنصة تلقائيًا.</div><div class="table-wrap"><table><thead><tr><th>الموقع</th>${criteria.map(item => `<th title="${escapeHtml(item.label)}">${escapeHtml(item.label)} · ${weights[item.id]}%</th>`).join("")}<th>درجات موثقة</th><th>ثقة الأدلة</th><th>النتيجة / 5</th></tr></thead><tbody>${rows}</tbody></table></div></section>
  <aside class="panel weight-panel"><h3>أوزان المعايير</h3><p>تتغير نسب الأوزان تلقائيًا إلى مجموع 100%. الأوزان لا تملأ البيانات الناقصة.</p>${criteria.map(item => `<div class="weight-row"><label for="weight-${item.id}"><span>${escapeHtml(item.label)}</span><span class="weight-value" id="weight-value-${item.id}">${weights[item.id]}%</span></label><input id="weight-${item.id}" type="range" min="0" max="30" step="1" value="${weights[item.id]}" data-weight="${item.id}"></div>`).join("")}<div class="rank-summary"><strong>النتائج الحالية</strong><div class="rank-chart" id="rank-chart" role="img" aria-label="مخطط ترتيب المواقع"></div><ol class="rank-list" id="rank-list"></ol></div><p style="margin-top:10px">مقياس الاستكمال نسبة الخانات التي راجعها الفريق فقط؛ ليس تقديرًا مستقلًا لجودة الأدلة. يلزم تقييم جودة المصادر يدويًا.</p></aside></div>`;
}
function updateComparison() {
  document.querySelectorAll("[data-weight]").forEach(input => {
    const id = input.dataset.weight;
    weights[id] = Number(input.value);
  });
  const total = Object.values(weights).reduce((sum, value) => sum + Number(value || 0), 0) || 1;
  criteria.forEach(item => {
    const display = document.getElementById(`weight-value-${item.id}`);
    const header = document.querySelector(`th[title="${CSS.escape(item.label)}"]`);
    const normalized = Math.round((Number(weights[item.id] || 0) / total) * 100);
    if (display) display.textContent = `${normalized}%`;
    if (header) header.textContent = `${item.label} · ${normalized}%`;
  });
  writeStore(storageKeys.weights, weights);
  sites.forEach(site => {
    const entered = criteria.filter(item => currentScore(site.id, item.id) !== "" && currentEvidence(site.id, item.id).trim()).length;
    const completeness = document.querySelector(`[data-completeness="${site.id}"]`);
    if (completeness) completeness.textContent = `${entered}/9`;
  });
  const sharedCriteria = criteria.filter(item => sites.every(site => currentScore(site.id, item.id) !== "" && currentEvidence(site.id, item.id).trim()));
  const ranked = sharedCriteria.length >= 5
    ? sites.map(site => {
      const totalWeight = sharedCriteria.reduce((sum, item) => sum + Math.max(0, Number(weights[item.id]) || 0), 0);
      const score = sharedCriteria.reduce((sum, item) => {
        const value = currentScore(site.id, item.id);
        return sum + (item.direction === -1 ? 5 - value : value) * Math.max(0, Number(weights[item.id]) || 0);
      }, 0);
      const finalScore = totalWeight ? score / totalWeight : null;
      const resultCell = document.querySelector(`[data-result="${site.id}"]`);
      if (resultCell) resultCell.textContent = finalScore === null ? "غير محسوبة" : `${finalScore.toFixed(2)} / 5`;
      return { site, result: { score: finalScore, count: sharedCriteria.length } };
    }).filter(entry => entry.result.score !== null).sort((a, b) => b.result.score - a.result.score)
    : [];
  if (sharedCriteria.length < 5) {
    sites.forEach(site => {
      const resultCell = document.querySelector(`[data-result="${site.id}"]`);
      if (resultCell) resultCell.textContent = "غير محسوبة";
    });
  }
  const list = document.getElementById("rank-list");
  if (list) list.innerHTML = ranked.length ? ranked.map(entry => `<li><span>${escapeHtml(entry.site.ar)} · ${entry.result.count} معايير مشتركة</span><b>${entry.result.score.toFixed(2)} / 5</b></li>`).join("") : `<li><span>لا ترتيب حتى اكتمال 5 معايير مشتركة للمواقع الستة</span></li>`;
  const chart = document.getElementById("rank-chart");
  if (chart) chart.innerHTML = ranked.length ? ranked.map((entry, index) => `<div class="rank-bar-row" aria-label="${escapeHtml(entry.site.ar)}: ${entry.result.score.toFixed(2)} من 5"><span>${String(index + 1).padStart(2, "0")}</span><i><b style="width:${Math.max(0, Math.min(100, (entry.result.score / 5) * 100))}%"></b></i><strong>${entry.result.score.toFixed(1)}</strong></div>`).join("") : `<div class="rank-chart-empty">يظهر المخطط بعد توفر 5 معايير مشتركة للمواقع الستة.</div>`;
}
function shortlistPage() {
  const confirmed = Array.isArray(shortlist) ? shortlist.slice(0, 3) : [];
  const pinned = pinnedSelection && Array.isArray(pinnedSelection.sites) ? pinnedSelection : null;
  const note = pinned?.note || "";
  return `${heading("قرار الفريق", "القائمة المختصرة", "اختروا ثلاثة مواقع يدويًا بعد مراجعة الأدلة والقيود. لا تقترح المنصة فائزين تلقائيًا؛ التثبيت يسجل اختيار الفريق وتاريخه ومبرراته.", `<a class="button" href="#compare">العودة إلى المقارنة</a>`)}
  <div class="callout info" style="margin-bottom:14px">تحديد الاختيار قرار بحثي قابل للمراجعة. قبل تثبيته، وثقوا لكل موقع سبب الاختيار، ونوع التجربة، والبيانات الناقصة، ومتطلبات الوصول والتصاريح.</div>
  <div class="shortlist-grid">${sites.map(site => `<label class="shortlist-option"><input type="checkbox" data-shortlist="${site.id}" ${confirmed.includes(site.id) ? "checked" : ""}><span><strong>${escapeHtml(site.ar)}</strong><small>${escapeHtml(site.subsite)}</small></span></label>`).join("")}</div>
  <div class="shortlist-tools"><span id="shortlist-count">المحدد: ${confirmed.length} من 3</span><button class="button primary" data-action="pin-selection" ${confirmed.length !== 3 || !note.trim() ? "disabled" : ""}>☆ تثبيت الاختيار النهائي</button></div>
  <section class="panel detail-panel"><h2>مذكرة مراجعة الفريق</h2><textarea class="review-note" id="review-note" placeholder="اكتبوا مبررات الاختيار، هدف الاختبار، القيود، ومصادر الأدلة…">${escapeHtml(note)}</textarea><p style="margin:7px 0 0;color:var(--muted);font-size:9px">إضافة المذكرة مطلوبة لتثبيت القرار. تحفظ المذكرة والاختيار في هذا المتصفح فقط.</p></section>
  <section class="final-state ${pinned ? "pinned" : ""}" id="final-state">${pinned ? `<h3>اختيار فريق مثبت · ${new Date(pinned.date).toLocaleDateString("ar")}</h3><p>${pinned.sites.map(id => escapeHtml(sites.find(site => site.id === id)?.ar || id)).join(" · ")}</p><p style="margin-top:6px">${escapeHtml(pinned.note || "لم تُسجل مذكرة تبرير.")}</p><button class="button small" style="margin-top:10px" data-action="unpin-selection">إلغاء التثبيت</button>` : `<h3>لا يوجد اختيار نهائي مثبت</h3><p>يظل هذا الحقل فارغًا حتى يختار الفريق ثلاثة مواقع ويثبت قراره بعد المراجعة.</p>`}</section>`;
}
function marsPage() {
  return `${heading("مرجع منفصل", "بيانات المريخ", "لا تعرض هذه الصفحة بيانات مريخية مرسومة على خريطة الأرض ولا تدعي إجراء تنزيل أو تحليل بعد.", `<a class="button" href="#method">منهجية المقارنة</a>`)}
  <div class="callout warning" style="margin-bottom:14px"><strong>بيانات الكواكب ليست قابلة للمقارنة مباشرة تلقائيًا.</strong><br>قبل التحليل يجب توحيد نوع القياس والوحدات والإسقاط المكاني والفترة والدقة، مع إبقاء الضغط وتركيب الغلاف والجاذبية والإشعاع عوامل اختلاف صريحة.</div>
  <figure class="mars-photo panel"><img src="${marsPanorama.src}" alt="بانوراما واسعة لتضاريس المريخ التقطتها كاميرا المركبة الجوالة Spirit في منطقة Larry's Lookout" loading="lazy"><figcaption><strong>${escapeHtml(marsPanorama.title)}</strong><span>فسيفساء بانورامية لسطح المريخ من صور التقطتها Spirit بين 27 فبراير و2 مارس 2005.</span></figcaption></figure>
  <section class="panel detail-panel" style="margin-top:15px"><h2>بيانات لم تُحمّل بعد</h2><div class="fact-grid"><div class="fact"><span>نماذج ارتفاع/تضاريس</span><strong>لم يُحدد منتج وإصدار موحد بعد</strong></div><div class="fact"><span>صور مدارية</span><strong>روابط الأرشيف متاحة؛ لا توجد صور مستضافة محليًا</strong></div><div class="fact"><span>الحرارة والخصائص السطحية</span><strong>لا توجد قياسات مستوردة أو معالجة</strong></div><div class="fact"><span>مواقع الهبوط</span><strong>راجع المنتجات المنشورة لكل مهمة في PDS</strong></div></div></section>`;
}
function methodPage() {
  const steps = [
    ["تحديد معايير التشابه", "نربط كل معيار بهدف تجربة محدد؛ فالتشابه يعتمد على المهمة."],
    ["تحديد المواقع الفرعية", "نعرف مضلع الدراسة ومحطة القياس بدل الاكتفاء باسم منطقة واسعة."],
    ["جمع بيانات الأرض", "نوثق المحطة أو المنتج، التاريخ، الدقة، الإحداثيات، والترخيص."],
    ["جمع بيانات المريخ", "نختار منتجًا رسميًا ملائمًا من NASA PDS، ونحفظ بياناته الوصفية وإصداره."],
    ["توحيد الوحدات والفترات", "نقارن قياسات متوافقة، مع إبقاء الفروق في أدوات القياس والبيئة."],
    ["فحص البيانات الناقصة", "لا نحوّل غياب القيمة إلى صفر أو إلى حكم سلبي على الموقع."],
    ["مقارنة GIS", "نوحد الإسقاط والدقة ونوثق عمليات إعادة أخذ العينات والحدود المكانية."],
    ["حساب درجات معلنة", "نعلن سلم 0–5 والأوزان ومصادر كل حكم ونحسب فقط عند حد معلومات معلن."],
    ["تحليل الحساسية", "نغير الأوزان ونفحص ما إذا كانت النتائج تتغير؛ الأداة الأولية لا تنفذ هذا التحليل بعد."],
    ["مراجعة بشرية", "يسجل الفريق أسباب اختيار أفضل ثلاثة والقيود ومجالات عدم اليقين." ]
  ];
  return `${heading("منهجية قابلة للتدقيق", "كيف نبني المقارنة؟", "خطوات مقترحة لتجميع الأدلة قبل إصدار أي ترتيب. المنصة الحالية تطبق سجل المواقع وإدخال درجات الفريق، لكنها لا تجلب بيانات مناخية أو GIS علمية آليًا.")}
  <div class="method-list">${steps.map(([title, text]) => `<article class="method-step"><div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}</div>
  <div class="callout warning" style="margin-top:14px"><strong>حدود المحاكاة الأرضية</strong><br>قد يصلح موقع لاختبار حركة العجلات أو سير العمليات الميدانية، لكنه لا يحاكي الضغط الجوي أو الغلاف الجوي أو الجاذبية أو الإشعاع على المريخ. يجب اختيار المؤشرات وفق غرض التجربة، لا إنتاج درجة تشابه عامة بلا سياق.</div>
  <div class="callout" style="margin-top:9px"><strong>تحليل الحساسية</strong><br>تغيير الأوزان في صفحة المقارنة يغيّر الدرجات الحالية، لكنه لا يُظهر بعد سيناريوهات متعددة أو نطاقات عدم يقين. أضيفوا ذلك بعد توفر درجات موثقة ومتعددة المراجعين.</div>`;
}
function aboutPage() {
  return `${heading("الفريق والسياق", "عن المشروع", "رحلة لاستكشاف البيئات الأرضية التي تساعدنا على الاستعداد لمهمات القمر والمريخ.")}
  <div class="about-grid"><section class="panel about-panel"><span class="eyebrow">سؤال البحث</span><h2 style="margin-top:7px">ما المواقع الأرضية الأنسب لاختبار تقنيات بعينها؟</h2><p>المنصة لا تفترض أن هناك موقعًا أرضيًا واحدًا يحاكي المريخ كاملًا. المقصود هو تحديد أفضل مكان لكل نوع اختبار مع شرح ما يمثله وما لا يمثله.</p><ul class="about-list"><li>الاسم المقترح قابل للتعديل لاحقًا.</li><li>الاختيار النهائي من مسؤولية الفريق ومراجعته.</li><li>البيانات لا تُعتبر موثقة لمجرد عرض رابط جهة رسمية.</li><li>التخزين المحلي للاختيارات والتقييمات على هذا الجهاز فقط.</li></ul></section>
  <section class="panel about-panel"><span class="eyebrow">حدود النسخة</span><h2 style="margin-top:7px">ما الذي يعمل الآن؟</h2><p>التنقل بين الصفحات وملفات المواقع والخريطة الأساسية والتصدير والمساعد النصي وإدخال أوزان ودرجات مراجعة الفريق.</p><p>ما لم يكتمل: تنزيل البيانات العلمية وتحليلها، طبقات مناخ/ارتفاع/جيولوجيا، توثيق مستقل لكل قيمة، تحليل حساسية كامل، وإدارة فريق متزامنة.</p><p>الفريق: أضيفوا أسماء الأعضاء والأدوار بعد الاتفاق عليها.</p></section></div>`;
}
function render() {
  updateSolarSystemBar();
  if (mapResizeFrame) { cancelAnimationFrame(mapResizeFrame); mapResizeFrame = null; }
  const previousMap = currentMap;
  currentMap = null;
  if (previousMap) previousMap.remove();
  stopMarsGlobe();
  stopSpaceGameScene();
  const pageRoot = gamePresentation.active ? gamePresentation.content : app;
  const page = route();
  document.body.classList.toggle("team-view-active", page === "team");
  const pageNames = { home: "الرئيسية", lunar: "البيئات المشابهة للقمر", "mars-analogs": "البيئات المشابهة للمريخ", map: "الخريطة التفاعلية", gallery: "معرض الصور", why: "لماذا تهمنا هذه البيئات؟", game: "Space Explorer", sources: "المصادر", team: "عن الفريق", problems: "مشاكل وحلول رواد الفضاء" };
  const [kind, id] = page.split("/");
  document.body.dataset.page = kind || "home";
  const site = kind === "site" ? sites.find(item => item.id === id) : null;
  document.getElementById("breadcrumb-current").textContent = site ? site.ar : pageNames[page] || pageNames[kind] || "نظرة عامة";
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("active", link.dataset.nav === (site ? (site.target === "القمر" ? "lunar" : "mars-analogs") : kind)));
  if (site) pageRoot.innerHTML = detailPage(site);
  else if (kind === "map") pageRoot.innerHTML = mapPage();
  else if (kind === "lunar") pageRoot.innerHTML = sitesPage("lunar");
  else if (kind === "mars-analogs") pageRoot.innerHTML = sitesPage("mars-analogs");
  else if (kind === "gallery") pageRoot.innerHTML = galleryPage();
  else if (kind === "problems") pageRoot.innerHTML = problemsPage();
  else if (kind === "sources") pageRoot.innerHTML = sourcesPage();
  else if (kind === "why") pageRoot.innerHTML = whyPage();
  else if (kind === "game") pageRoot.innerHTML = gamePresentation.active ? spaceGameSessionPage() : spaceGamePage();
  else if (kind === "team") pageRoot.innerHTML = teamPage();
  else pageRoot.innerHTML = homePage();
  if (kind === "map") mountMap("world-map", sites, { zoom: 2, fitAll: true });
  if (kind === "home") mountMap("home-map", sites, { zoom: 2, fitAll: true });
  if (site) mountMap("detail-map", [site], { zoom: 7, center: [site.lat, site.lon] });
  if (kind === "game") startSpaceGameScene();
  pageRoot.querySelectorAll('[data-action="speak-site"]').forEach(button => {
    button.hidden = !("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function";
  });
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("open");
  document.getElementById("sidebar-backdrop").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
  document.getElementById("menu-toggle").setAttribute("aria-label", "فتح القائمة");
  window.siteI18n?.apply(document.body);
  pageRoot.focus?.({ preventScroll: true });
}
function makeIcon(site) {
  const isMoon = site.target === "القمر";
  const pinClass = isMoon ? "pin-moon" : "pin-mars";
  return L.divIcon({
    className: "modern-map-marker",
    html: `<div class="marker-container ${pinClass}" title="${escapeHtml(site.ar)}">
      <span class="marker-pulse-ring"></span>
      <span class="marker-core-dot"></span>
    </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
}
function mountMap(id, selectedSites, options = {}) {
  const element = document.getElementById(id);
  if (!element) return;
  if (!window.L) {
    element.innerHTML = `<div class="empty-state">تعذر تحميل مكتبة الخرائط المحلية. افحص ملفات vendor/leaflet ثم أعد تحميل الصفحة.</div>`;
    return;
  }
  if (selectedSites.some(site => !Number.isFinite(site.lat) || !Number.isFinite(site.lon) || Math.abs(site.lat) > 90 || Math.abs(site.lon) > 180)) {
    element.innerHTML = `<div class="empty-state">توجد إحداثيات غير صالحة في سجل أحد المواقع؛ لم تُرسم النقاط حتى لا تظهر في مكان مضلل.</div>`;
    return;
  }
  const startCenter = options.center || [18, 0];
  const map = L.map(element, { scrollWheelZoom: Boolean(options.scrollWheelZoom), touchZoom: true, worldCopyJump: true }).setView(startCenter, options.zoom || 2);
  currentMap = map;
  const gibs = "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best";
  const gibsAttribution = 'Imagery: <a href="https://earthdata.nasa.gov/data/instruments/gibs" target="_blank" rel="noopener noreferrer">NASA GIBS / ESDIS</a>';
  const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { maxZoom: 19, attribution: 'Imagery: &copy; <a href="https://www.esri.com" target="_blank">Esri</a>, Maxar, Earthstar Geographics, USDA, USGS', crossOrigin: true, keepBuffer: 2 });
  const blueMarble = L.tileLayer(`${gibs}/BlueMarble_ShadedRelief_Bathymetry/default/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg`, { maxZoom: 18, maxNativeZoom: 8, attribution: gibsAttribution, crossOrigin: true, keepBuffer: 2 });
  const features = L.tileLayer(`${gibs}/Reference_Features_15m/default/default/GoogleMapsCompatible_Level13/{z}/{y}/{x}.png`, { maxZoom: 18, maxNativeZoom: 13, attribution: gibsAttribution, crossOrigin: true, opacity: 0.88 });
  const labels = L.tileLayer(`${gibs}/Reference_Labels_15m/default/default/GoogleMapsCompatible_Level13/{z}/{y}/{x}.png`, { maxZoom: 18, maxNativeZoom: 13, attribution: gibsAttribution, crossOrigin: true });
  const layers = { satellite, blueMarble };
  const allLayers = [satellite, blueMarble, features, labels];
  let activeLayer = null;
  let activeLayerLoaded = false;
  const select = document.getElementById("basemap-select");
  const featureToggle = document.getElementById("nasa-features");
  const labelToggle = document.getElementById("nasa-labels");
  const startLoading = layer => {
    activeLayerLoaded = false;
    showMapLoading(element);
    window.setTimeout(() => {
      if (currentMap === map && activeLayer === layer && !activeLayerLoaded && element.dataset.mapNotice === "loading") showTileError(element);
    }, 12000);
  };
  const setBasemap = (key, redraw = false) => {
    const nextLayer = layers[key];
    if (!nextLayer || currentMap !== map) return;
    if (activeLayer === nextLayer && !redraw) return;
    if (activeLayer && map.hasLayer(activeLayer)) map.removeLayer(activeLayer);
    activeLayer = nextLayer;
    if (select) select.value = key;
    const layerNote = element.parentElement.querySelector(".map-note:not([role='status'])");
    const layerCaption = document.getElementById("basemap-caption");
    if (select && layerNote) layerNote.textContent = key === "satellite" ? "صور الأقمار الصناعية عالية الدقة · Esri World Imagery" : "NASA Blue Marble · طبقة مرجعية عالمية من GIBS";
    if (layerCaption) layerCaption.textContent = key === "satellite" ? "صور فضائية عالية الدقة ومحدثة تتيح رؤية معالم وتضاريس المواقع بوضوح فائق." : "Blue Marble · تضاريس وظلال مرجعية؛ ليست بثًا حيًا أو بيانات ميدانية.";
    clearMapNotice(element);
    startLoading(activeLayer);
    activeLayer.addTo(map);
  };
  allLayers.forEach(layer => {
    layer.on("tileload", () => {
      if (currentMap !== map || activeLayer !== layer) return;
      activeLayerLoaded = true;
      if (element.dataset.mapNotice === "loading") clearMapNotice(element);
    });
    layer.on("tileerror", event => {
      if (currentMap !== map || activeLayer !== layer || (event.tile && !event.tile.isConnected) || (event.coords && event.coords.z !== map.getZoom())) return;
      showTileError(element);
    });
  });
  element._retryMapTiles = () => {
    if (currentMap !== map || !activeLayer) return;
    clearMapNotice(element);
    startLoading(activeLayer);
    activeLayer.redraw();
  };
  element._switchMapLayer = () => setBasemap(activeLayer === satellite ? "blueMarble" : "satellite", true);
  const setOverlay = (layer, enabled) => {
    if (enabled && !map.hasLayer(layer)) layer.addTo(map);
    if (!enabled && map.hasLayer(layer)) map.removeLayer(layer);
  };
  setBasemap("blueMarble");
  if (featureToggle) {
    setOverlay(features, featureToggle.checked);
    featureToggle.addEventListener("change", () => setOverlay(features, featureToggle.checked));
  }
  if (labelToggle) {
    setOverlay(labels, labelToggle.checked);
    labelToggle.addEventListener("change", () => setOverlay(labels, labelToggle.checked));
  }
  selectedSites.forEach(site => {
    const marker = L.marker([site.lat, site.lon], { icon: makeIcon(site), title: site.ar }).addTo(map);
    if (options.onSiteSelect) marker.on("click", () => options.onSiteSelect(site));
    if (options.suppressPopups) return;
    marker.bindPopup(`<div class="modern-map-popup">
      <div class="popup-image-wrap">
        <img class="popup-image" src="${escapeHtml(site.image.src)}" alt="${escapeHtml(site.image.alt)}">
        <span class="popup-target-badge ${site.target === 'القمر' ? 'target-moon' : 'target-mars'}">${escapeHtml(site.target)}</span>
      </div>
      <div class="popup-body">
        <div class="popup-title">${escapeHtml(site.ar)}</div>
        <div class="popup-sub">${escapeHtml(site.subsite)} · ${escapeHtml(site.country)}</div>
        <div class="popup-brief">${escapeHtml(site.brief)}</div>
        <a class="popup-link button small primary glow-btn" href="${sitePath(site)}">
          <span>عرض صفحة الموقع</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </a>
      </div>
    </div>`);
  });
  if (options.fitAll && selectedSites.length > 1) {
    map.fitBounds(selectedSites.map(site => [site.lat, site.lon]), { padding: [25, 25], maxZoom: 3 });
  }
  if (select) select.addEventListener("change", () => setBasemap(select.value));
  mapResizeFrame = requestAnimationFrame(() => {
    mapResizeFrame = null;
    if (currentMap === map && element.isConnected) map.invalidateSize({ pan: false });
  });
}
function clearMapNotice(mapElement) {
  mapElement.dataset.mapNotice = "";
  mapElement.parentElement.querySelectorAll(".map-note[role='status']").forEach(node => node.remove());
}
function showMapLoading(mapElement) {
  clearMapNotice(mapElement);
  mapElement.dataset.mapNotice = "loading";
  const notice = document.createElement("div");
  notice.className = "map-note map-loading";
  notice.setAttribute("role", "status");
  notice.textContent = "جارٍ تحميل صور NASA GIBS…";
  mapElement.parentElement.append(notice);
}
function showTileError(mapElement) {
  if (mapElement.dataset.mapNotice === "error") return;
  clearMapNotice(mapElement);
  mapElement.dataset.mapNotice = "error";
  const warning = document.createElement("div");
  warning.className = "map-note map-error";
  warning.setAttribute("role", "status");
  warning.innerHTML = `<span>تعذر تحميل صور NASA GIBS. تحقق من الاتصال؛ العلامات وروابط المواقع ما زالت متاحة.</span><div><button type="button" data-action="retry-map">إعادة المحاولة</button><button type="button" data-action="switch-map-layer">جرّب مشهد NASA البديل</button></div>`;
  mapElement.parentElement.append(warning);
}
function fillMarsTextureGaps(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const pixels = imageData.data;
  const rowBounds = [];
  const isMissing = offset => pixels[offset] < 12 && pixels[offset + 1] < 12 && pixels[offset + 2] < 12;

  for (let y = 0; y < height; y += 1) {
    let first = 0;
    while (first < width && isMissing((y * width + first) * 4)) first += 1;
    let last = width - 1;
    while (last >= first && isMissing((y * width + last) * 4)) last -= 1;
    rowBounds.push(first <= last ? [first, last] : null);
  }

  const validRows = rowBounds.flatMap((bounds, y) => bounds ? [y] : []);
  if (!validRows.length) return;
  rowBounds.forEach((bounds, y) => {
    if (!bounds) return;

    const [first, last] = bounds;
    for (let x = 0; x < first; x += 1) pixels.copyWithin((y * width + x) * 4, (y * width + first) * 4, (y * width + first + 1) * 4);
    for (let x = last + 1; x < width; x += 1) pixels.copyWithin((y * width + x) * 4, (y * width + last) * 4, (y * width + last + 1) * 4);

    let x = first;
    while (x <= last) {
      if (!isMissing((y * width + x) * 4)) {
        x += 1;
        continue;
      }
      const gapStart = x;
      while (x <= last && isMissing((y * width + x) * 4)) x += 1;
      const left = (y * width + gapStart - 1) * 4;
      const right = (y * width + x) * 4;
      const gapWidth = x - gapStart;
      for (let gap = 0; gap < gapWidth; gap += 1) {
        const ratio = (gap + 1) / (gapWidth + 1);
        const offset = (y * width + gapStart + gap) * 4;
        for (let channel = 0; channel < 3; channel += 1) {
          pixels[offset + channel] = pixels[left + channel] + (pixels[right + channel] - pixels[left + channel]) * ratio;
        }
        pixels[offset + 3] = 255;
      }
    }
  });
  rowBounds.forEach((bounds, y) => {
    if (bounds) return;
    const nearestRow = validRows.reduce((nearest, row) => Math.abs(row - y) < Math.abs(nearest - y) ? row : nearest, validRows[0]);
    pixels.copyWithin(y * width * 4, nearestRow * width * 4, (nearestRow + 1) * width * 4);
  });

  context.putImageData(imageData, 0, 0);
}

function startMarsGlobe() {
  const canvas = document.querySelector(".mars-globe-canvas");
  if (!canvas || !document.querySelector(".mars-texture-base")) return;
  const textureImage = new Image();
  textureImage.src = "assets/mars-global-marci.jpg";
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, powerPreference: "low-power" });
  if (!gl) return;
  const renderGlobe = () => {
    if (!canvas.isConnected) return;
    const vertexSource = `
      attribute vec3 aPosition;
      attribute vec2 aUv;
      uniform float uRotation;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        float c = cos(uRotation);
        float s = sin(uRotation);
        vec3 rotated = vec3(c * aPosition.x + s * aPosition.z, aPosition.y, -s * aPosition.x + c * aPosition.z);
        vNormal = rotated;
        gl_Position = vec4(rotated.xy * 0.94, -rotated.z * 0.5, 1.0);
        vUv = aUv;
      }`;
    const fragmentSource = `
      precision mediump float;
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 light = normalize(vec3(-0.65, 0.35, 0.9));
        float diffuse = max(dot(normal, light), 0.0);
        float illumination = 0.2 + diffuse * 0.9;
        vec4 surface = texture2D(uTexture, vUv);
        gl_FragColor = vec4(surface.rgb * illumination, surface.a);
      }`;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
      return shader;
    };
    const vertexShader = compile(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    const positions = [];
    const uvs = [];
    const indices = [];
    const rows = 48;
    const columns = 96;
    for (let row = 0; row <= rows; row += 1) {
      const latitude = Math.PI * row / rows;
      for (let column = 0; column <= columns; column += 1) {
        const longitude = Math.PI * 2 * column / columns;
        positions.push(Math.sin(latitude) * Math.sin(longitude), Math.cos(latitude), Math.sin(latitude) * Math.cos(longitude));
        uvs.push(column / columns, 1 - row / rows);
      }
    }
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const a = row * (columns + 1) + column;
        const b = a + columns + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const upload = (attribute, values, size) => {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
      const location = gl.getAttribLocation(program, attribute);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
    };
    gl.useProgram(program);
    upload("aPosition", positions, 3);
    upload("aUv", uvs, 2);
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = timestamp => {
      if (!canvas.isConnected) return;
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(bounds.width * pixelRatio));
      const height = Math.max(1, Math.round(bounds.height * pixelRatio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.uniform1f(gl.getUniformLocation(program, "uRotation"), reducedMotion ? 0 : timestamp / (MARS_ROTATION_SECONDS * 1000) * Math.PI * 2);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
      if (!reducedMotion) marsGlobeFrame = requestAnimationFrame(draw);
    };
    const uploadTexture = () => {
      if (!textureImage.complete || !textureImage.naturalWidth) return;
      const textureCanvas = document.createElement("canvas");
      textureCanvas.width = 1024;
      textureCanvas.height = 512;
      const textureContext = textureCanvas.getContext("2d");
      textureContext.drawImage(textureImage, 0, 0, textureCanvas.width, textureCanvas.height);
      fillMarsTextureGaps(textureContext, textureCanvas.width, textureCanvas.height);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
      gl.generateMipmap(gl.TEXTURE_2D);
      canvas.closest(".mars-sphere").classList.add("mars-webgl-ready");
      draw(performance.now());
    };
    if (textureImage.complete) uploadTexture();
    else textureImage.addEventListener("load", uploadTexture, { once: true });
  };
  renderGlobe();
}
function stopMarsGlobe() {
  if (marsGlobeFrame) cancelAnimationFrame(marsGlobeFrame);
  marsGlobeFrame = null;
}
function exportRecords(format) {
  const records = sites.map(site => ({ id: site.id, name_ar: site.ar, name_en: site.en, country: site.country, subsite: site.subsite, latitude: site.lat, longitude: site.lon, coordinate_status: site.coordStatus, elevation_m: site.elevation, area: site.area, terrain_type: site.type, coordinate_source: "نقطة مرجعية تقريبية اختيرت للعرض فقط، وليست قياسًا من NASA" }));
  let content;
  let type;
  let extension;
  if (format === "geojson") {
    content = JSON.stringify({ type: "FeatureCollection", features: records.map(record => ({ type: "Feature", properties: Object.fromEntries(Object.entries(record).filter(([key]) => !["latitude", "longitude"].includes(key))), geometry: { type: "Point", coordinates: [record.longitude, record.latitude] } })) }, null, 2);
    type = "application/geo+json;charset=utf-8"; extension = "geojson";
  } else {
    const headers = Object.keys(records[0]);
    const csv = [headers.join(","), ...records.map(record => headers.map(key => `"${String(record[key] ?? "").replaceAll('"', '""')}"`).join(","))].join("\r\n");
    content = `\uFEFF${csv}`; type = "text/csv;charset=utf-8"; extension = "csv";
  }
  const url = URL.createObjectURL(new Blob([content], { type }));
  const anchor = document.createElement("a"); anchor.href = url; anchor.download = `analog-trinexus-sites.${extension}`; anchor.click(); URL.revokeObjectURL(url);
}
function explainSite(site) {
  const explanation = app.querySelector(`[data-place-explanation="${site.id}"]`);
  if (!explanation) return;
  explanation.hidden = !explanation.hidden;
  app.querySelectorAll(`[data-action="explain-site"][data-site="${site.id}"]`).forEach(button => button.setAttribute("aria-expanded", String(!explanation.hidden)));
  if (!explanation.hidden) explanation.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function speakSite(site) {
  if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`${site.ar}. ${site.guide.summary} وجه التشابه: ${site.guide.similarity} الميزة: ${site.guide.advantage} الاختلاف: ${site.guide.difference}`);
  utterance.lang = "ar-SA";
  utterance.rate = 0.94;
  window.speechSynthesis.speak(utterance);
}
function answerQuestion(question) {
  const arithmetic = String(question).match(/(-?\d+(?:\.\d+)?)\s*([+\-*/×÷])\s*(-?\d+(?:\.\d+)?)/);
  if (arithmetic) {
    const first = Number(arithmetic[1]);
    const second = Number(arithmetic[3]);
    const result = { "+": () => first + second, "-": () => first - second, "*": () => first * second, "/": () => first / second, "×": () => first * second, "÷": () => first / second }[arithmetic[2]]();
    return Number.isFinite(result) ? `الناتج هو **${result}**.` : "لا يمكن القسمة على صفر.";
  }
  const normalize = value => value.toLowerCase().normalize("NFD").replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").replace(/[إ؟?!،؛,.]/g, " ").replace(/\s+/g, " ").trim();
  const normalized = normalize(question);
  const mentionedSites = sites.filter(site => [site.ar, site.ar.split(" ").at(-1), site.en, site.id.replaceAll("-", " ")].some(name => normalized.includes(normalize(name))));
  const mentionedSite = mentionedSites[0];
  if (mentionedSite) {
    guideContext = { siteId: mentionedSite.id };
    writeStore("atlas-guide-context", guideContext);
  }
  const contextualWords = ["هو", "هي", "ده", "دي", "دا", "دول", "عنها", "عنه", "منها", "منه", "مميزاته", "مميزاتها", "ازاي", "طيب", "كمان"];
  const contextualQuestion = contextualWords.some(word => normalized.split(" ").includes(word));
  const site = mentionedSite || (contextualQuestion && guideContext ? sites.find(item => item.id === guideContext.siteId) : null);
  const hasAny = (...terms) => terms.some(term => normalized.includes(normalize(term)));

  if (mentionedSites.length > 1 && hasAny("قارن", "مقارنه", "الفرق", "بين", "compare", "contrast", "versus", "vs")) {
    return `مقارنة موجزة بين الموقعين المذكورين:\n${mentionedSites.map(item => `• **${item.ar}** (${item.target}): ${item.guide.similarity} وحدّ المقارنة: ${item.guide.difference}`).join("\n")}\nلا تكفي هذه الأوصاف لترتيب الموقعين؛ يلزم تحديد نوع الاختبار وبيانات قابلة للمقارنة.`;
  }

  // Team questions
  if (hasAny("فريق", "تيم", "team", "اعضاء", "مين انتم", "مين صاحب", "ترينكسس", "trinexus", "analog trinexus", "مروان", "قائد")) {
    return "نحن فريق **Analog TriNexus**! 🚀\n✦ **قائد الفريق:** مروان أسامة محمد (Marwan Osama Mohamed)\n✦ **أعضاء الفريق:** آلاء رمضان، مارتينا منير لبيب، منة أحمد، حنين خيري عز الدين.\nمشروعنا يربط بين البيئات الأرضية التناظرية ومهمات استكشاف القمر والمريخ عبر محاكاة علمية تفاعلية دقيقة مبنية على بيانات وصور NASA.";
  }

  // Site specific queries
  if (site) {
    if (hasAny("مصدر", "مصادر", "تاريخ", "متى", "امتى", "صورة", "صور")) {
      const source = nasaSourcePages[site.id];
      return source
        ? `مرجع NASA المرتبط بموقع **${site.ar}** هو "${source.title}" (NASA ID: ${source.id}): ${source.url}\nيوثق المرجع الصورة أو المشهد ومعلوماته؛ ولا يُعد تحليلًا ميدانيًا للتربة.`
        : `لا يتوفر للموقع **${site.ar}** رابط مصدر مسجل في المشروع حتى الآن. لا أريد اختلاق مرجع؛ راجع صفحة المصادر للمواقع التي لها سجل موثق.`;
    }
    if (hasAny("اين", "فين", "مكان", "موقع جغرافي", "احداثيات", "location", "coordinates", "where")) {
      return `📍 **${site.ar}** يقع في ${site.country}، والمنطقة الفرعية المعروضة هي ${site.subsite}. الإحداثيات التقريبية في المشروع: ${formatCoord(site.lat)}, ${formatCoord(site.lon)}. هذه نقطة مرجعية للعرض وليست محطة قياس أو حدود موقع معتمدة.`;
    }
    if (hasAny("نوع", "تضاريس", "جيولوجيا", "ارض", "مناخ", "طقس", "حراره", "بروده", "terrain", "geology", "climate", "weather")) {
      return `**${site.ar}:** ${site.brief}\nنوع البيئة المسجل: ${site.type}. ${site.guide.difference} لا تتوفر في المشروع هنا قياسات ميدانية كافية لدرجات الحرارة أو كيمياء التربة.`;
    }
    if (hasAny("اختلاف", "عيب", "حدود", "مشابه", "تشابه", "زي", "شبه")) {
      return `🔍 **${site.ar} (${site.en}) — التحليل التناظري المقارن:**\n✦ **أوجه الشبه:** ${site.guide.similarity}\n✦ **أبرز أوجه الاختلاف:** ${site.guide.difference}\n⚠️ **ملاحظة علمية:** الموقع يمثل بيئة اختبار لأجهزة ومركبات وتضاريس محددة، ولا يطابق بيئة ${site.target} بنسبة 100%.`;
    }
    if (hasAny("مميز", "قوة", "فائدة", "افضل", "ميزة", "اهمية", "اهم")) {
      return `🌟 **أهمية ومميزات ${site.ar}:**\n✦ ${site.guide.advantage}\n✦ **الملخص:** ${site.guide.summary}`;
    }
    if (hasAny("عينات", "عينه", "صخور", "تربه", "ريغوليث")) {
      return `🪨 **عينات ${site.ar}:**\nيحتوي الموقع على عينات جيولوجية مميزة تمثل ${site.type}. في محاكي Space Explorer يمكنك جمع هذه العينات ودراسة خواصها التناظرية مقارنة بـ ${site.target}.`;
    }
    return `📍 **${site.ar} (${site.en})**\nالبيئة: ${site.type} · ${site.country}.\n✦ **الهدف:** بيئة تناظرية لدراسة ${site.target}.\n✦ **الملخص:** ${site.guide.summary}\n✦ **ما يختبر فيه:** ${site.guide.advantage}\n✦ **حدود المقارنة:** ${site.guide.difference}`;
  }

  // General planetary and science queries
  if (hasAny("جاذبيه", "جاذبية", "gravity", "وزن")) return "الجاذبية التقريبية: الأرض 1g، القمر 0.16g، والمريخ 0.38g. يتغير الوزن مع الجاذبية، بينما تبقى الكتلة نفسها. هذه الفروق لا يمكن إعادة إنتاجها بالكامل في موقع أرضي تناظري.";
  if (hasAny("غلاف جوي", "ضغط", "هواء", "atmosphere", "pressure")) return "الأرض لها غلاف جوي كثيف، والقمر له إكسوسفير شديد الرقة، أما غلاف المريخ فرقيق ويتكون معظمه من ثاني أكسيد الكربون. ضغط الأرض الجوي لا يحاكي ظروف القمر أو المريخ؛ والأرقام العامة لا تصف محطة محلية بعينها.";
  if (hasAny("حياه", "حياة", "كائنات", "فضائي", "فضائيين", "life", "aliens")) return "حتى الآن لا يوجد دليل مؤكد على اكتشاف حياة خارج الأرض. تبحث المهمات عن بيئات ملائمة أو مؤشرات حيوية محتملة، لكنها ليست إثباتًا للحياة. المواقع التناظرية تساعد على اختبار الأدوات وأساليب البحث فقط.";
  if (hasAny("مصادر", "المصادر", "مراجع", "sources", "references")) {
    return `مصادر NASA المسجلة للمواقع الحالية:\n${sites.map(site => { const source = nasaSourcePages[site.id]; return source ? `• ${site.ar}: ${source.url}` : ""; }).filter(Boolean).join("\n")}`;
  }
  if (hasAny("كم موقع", "عدد المواقع", "how many sites", "عدد المكان")) {
    const lunarCount = sites.filter(item => item.target === "القمر").length;
    const marsCount = sites.filter(item => item.target === "المريخ").length;
    return `يعرض المشروع ${sites.length} مواقع أرضية: ${lunarCount} لمقارنة أسئلة مرتبطة بالقمر و${marsCount} للمريخ. هذا تصنيف لأهداف الاختبار، وليس ترتيبًا علميًا لجودة المواقع.`;
  }
  if (hasAny("منهج", "كيف تقارن", "معيار", "criteria", "methodology", "analog site", "موقع تناظري")) {
    return `الموقع التناظري لا يُعد نسخة من كوكب آخر. نحدد أولًا هدف الاختبار، ثم ننظر إلى التضاريس والجيولوجيا والبيانات وإمكانية الوصول، ونذكر الفروق وحدود الأدلة. التقييمات داخل المشروع يحددها الفريق؛ لا تُحسب أفضلية علمية تلقائيًا.`;
  }
  if (hasAny("القمر", "قمر", "lunar", "moon")) {
    const lunarSites = sites.filter(item => item.target === "القمر").map(item => item.ar).join("، ");
    return `🌕 **استكشاف القمر:** سطحه صخري ومليء بالفوهات، وجاذبيته نحو سدس جاذبية الأرض. لا يملك غلافًا جويًا كثيفًا؛ لذلك تختلف الحركة والحرارة والإشعاع كثيرًا عن الأرض.\n✦ **المواقع الأرضية التي يضمها المشروع:** ${lunarSites}.\nتساعد هذه المواقع على اختبار تضاريس أو معدات محددة فقط، ولا تحاكي القمر كاملًا.`;
  }
  if (hasAny("المريخ", "mars", "مريخي", "كوكب احمر")) {
    const marsSites = sites.filter(item => item.target === "المريخ").map(item => item.ar).join("، ");
    return `🔴 **استكشاف المريخ:** كوكب صخري ذو غلاف جوي رقيق يغلب عليه ثاني أكسيد الكربون، وجاذبيته نحو 38% من جاذبية الأرض. تدرس بعثات مثل Perseverance جيولوجيته وتاريخ الماء فيه.\n✦ **المواقع الأرضية التي يضمها المشروع:** ${marsSites}.\nلكل موقع شبه جزئي مفيد لاختبار معين واختلافات تمنع اعتباره نسخة من المريخ.`;
  }
  if (hasAny("لعبة", "اللعبه", "game", "ازاي العب", "طريقه اللعب", "تحكم", "space explorer")) {
    return "🎮 **دليل Space Explorer:** على الكمبيوتر استخدم WASD للحركة، E للتفاعل، وShift للجري. على الهاتف تظهر أزرار لمس. يبدأ اللعب على الهاتف واللوحي بالوضع الأفقي؛ إذا لم يستطع المتصفح تدوير الشاشة، دوّر الجهاز يدويًا. اضغط E قرب العينة لجمعها، ثم افحصها من الحقيبة.";
  }
  if (hasAny("عينات", "العينات", "شنطة", "حقيبة")) {
    return "🎒 **العينات في اللعبة:** عينات المواقع الأرضية نماذج تعليمية افتراضية وليست عينات حقيقية جُمعت من الميدان. أما مسار القمر والمريخ فيستند إلى سجلات ومراجع بعثات NASA، ولا يعني أن النموذج داخل اللعبة عينة حقيقية.";
  }
  if (hasAny("gis", "الخريطة", "الموقع الجغرافي", "طبقات", "map")) return "🗺️ **الخريطة التفاعلية:** تعرض مواقع المشروع على الأرض باستخدام طبقات صور مرجعية من NASA GIBS وBlue Marble. العلامات نقاط تقريبية وليست حدودًا ميدانية، ولا تُعرض فوق سطح القمر أو المريخ.";
  if (hasAny("درجة", "تقييم", "ترتيب", "اختيار", "افضل موقع")) return "📊 **منهجية التقييم:**\nتتيح المنصة لفريق العمل إدخال درجات التقييم (من 0 إلى 5) وتحديد أوزان المعايير مع إرفاق التبريرات والأدلة العلمية لاتخاذ قرارات مدروسة وموثقة.";
  if (hasAny("مرحبا", "اهلا", "السلام", "ازيك", "عامل ايه", "صباح", "مساء", "الو", "help", "ماذا تستطيع", "تقدر تعمل")) return "أهلًا بك! أجيب من بيانات المواقع وسجلات NASA ومحتوى المشروع، وأساعدك في المقارنة والجاذبية والبيئات واللعبة والحسابات البسيطة. أعمل محليًا بلا نموذج خارجي؛ إذا لم أجد معلومة موثقة سأوضح ذلك بدل اختلاق إجابة.";
  
  return `لم أجد في سجل المشروع جوابًا موثقًا لهذا السؤال بعد. أستطيع مساعدتك في المواقع ${sites.map(item => item.ar).join("، ")}، أو القمر والمريخ، أو NASA واللعبة والمقارنة. إذا كان سؤالك عن موضوع عام، حدّد الجزء الذي تريد معرفته وسأحاول الإجابة بما يتوفر لدي؛ لا أستخدم خدمة ذكاء اصطناعي خارجية.`;
}
function addMessage(text, kind = "assistant") {
  const box = document.getElementById("guide-messages");
  if (!box) return;
  const shouldStick = box.scrollHeight - box.scrollTop - box.clientHeight < 96;
  const message = createMessageElement(text, kind);
  box.append(message);
  if (shouldStick) box.scrollTop = box.scrollHeight;
  if (text) rememberGuideMessage(text, kind);
  return message;
}
function createMessageElement(text, kind) {
  const message = document.createElement("div");
  message.className = `guide-message ${kind === "user" ? "user" : ""}`;
  message.dir = "auto";
  message.setAttribute("aria-live", "off");
  const content = document.createElement("div");
  content.className = "guide-message-content";
  appendMessageContent(content, text);
  message.append(content);
  if (kind === "user") appendMessageStatus(message, "تم الإرسال");
  return message;
}
function appendMessageStatus(message, label, state = "") {
  let status = message.querySelector(".guide-message-status");
  if (!status) {
    status = document.createElement("span");
    status.className = "guide-message-status";
    message.append(status);
  }
  status.className = `guide-message-status${state ? ` ${state}` : ""}`;
  status.textContent = label;
}
function rememberGuideMessage(text, kind) {
  guideHistory.push({ text, kind });
  guideHistory = guideHistory.slice(-40);
  writeStore("atlas-guide-conversation", guideHistory);
}
function isNearLatestMessage(box) {
  return box.scrollHeight - box.scrollTop - box.clientHeight < 96;
}
function splitReplyIntoChunks(text) {
  const words = text.match(/\S+\s*/gu) || [text];
  const chunks = [];
  let chunk = "";
  words.forEach(word => {
    if (chunk && chunk.length + word.length > 72) {
      chunks.push(chunk);
      chunk = "";
    }
    chunk += word;
  });
  if (chunk) chunks.push(chunk);
  return chunks;
}
function revealAssistantReply(text, message) {
  const box = document.getElementById("guide-messages");
  const content = message.querySelector(".guide-message-content");
  const partialText = document.createTextNode("");
  const chunks = splitReplyIntoChunks(text);
  content.append(partialText);
  return new Promise(resolve => {
    let index = 0;
    let completed = false;
    function completeReply() {
      if (completed) return;
      completed = true;
      content.replaceChildren();
      appendMessageContent(content, text);
      message.classList.add("is-complete");
      appendMessageStatus(message, "اكتمل الرد", "is-complete");
      rememberGuideMessage(text, "assistant");
      playGuideTone("assistant");
      activeAssistantReveal = null;
      resolve();
    }
    activeAssistantReveal = completeReply;
    function revealNextChunk() {
      if (completed) return;
      if (document.hidden) { completeReply(); return; }
      const shouldStick = isNearLatestMessage(box);
      partialText.appendData(chunks[index]);
      index += 1;
      if (shouldStick) box.scrollTop = box.scrollHeight;
      if (index < chunks.length) {
        setTimeout(revealNextChunk, 16);
        return;
      }
      completeReply();
    }
    if (document.hidden) completeReply();
    else setTimeout(revealNextChunk, 16);
  });
}
function appendMessageContent(message, text) {
  const urlPattern = /https:\/\/[^\s]+/g;
  let textStart = 0;
  let match;
  while ((match = urlPattern.exec(text))) {
    const trailing = match[0].match(/[),.;،؛]+$/)?.[0] || "";
    const href = match[0].slice(0, match[0].length - trailing.length);
    message.append(document.createTextNode(text.slice(textStart, match.index)));
    try {
      if (new URL(href).protocol !== "https:") throw new Error("Unsupported link protocol");
      const link = document.createElement("a");
      link.href = href;
      link.textContent = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      message.append(link);
    } catch {
      message.append(document.createTextNode(href));
    }
    if (trailing) message.append(document.createTextNode(trailing));
    textStart = match.index + match[0].length;
  }
  message.append(document.createTextNode(text.slice(textStart)));
}
function playGuideTone(kind) {
  if (!guideAudioUnlocked || !guideAudioContext || guideAudioContext.state !== "running") return;
  try {
    const oscillator = guideAudioContext.createOscillator();
    const gain = guideAudioContext.createGain();
    const now = guideAudioContext.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(kind === "user" ? 520 : 660, now);
    oscillator.frequency.exponentialRampToValueAtTime(kind === "user" ? 740 : 880, now + 0.09);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.035, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    oscillator.connect(gain).connect(guideAudioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.17);
  } catch { /* Audio is optional and may be unavailable in the browser. */ }
}
function unlockGuideAudio(event) {
  if (!event.isTrusted || guideAudioUnlocked) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    guideAudioContext ||= new AudioContextClass();
    const resume = guideAudioContext.state === "suspended" ? guideAudioContext.resume() : Promise.resolve();
    resume.then(() => { guideAudioUnlocked = guideAudioContext.state === "running"; }).catch(() => {});
  } catch { /* Audio is optional and may be unavailable in the browser. */ }
}
function sendGuideMessage(question) {
  if (guideBusy || !question.trim()) return;
  const input = document.getElementById("guide-input");
  const sendButton = document.querySelector(".guide-form button");
  const messages = document.getElementById("guide-messages");
  guideBusy = true;
  if (input) input.disabled = true;
  if (sendButton) sendButton.disabled = true;
  const userMessage = addMessage(question.trim(), "user");
  appendMessageStatus(userMessage, "جارٍ الإرسال", "is-sending");
  const thinking = document.createElement("div");
  thinking.className = "guide-thinking";
  thinking.setAttribute("role", "status");
  thinking.innerHTML = '<span class="guide-thinking-label">جارٍ التفكير في محتوى المشروع</span><span class="typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>';
  const stickBeforeThinking = isNearLatestMessage(messages);
  messages.append(thinking);
  if (stickBeforeThinking) messages.scrollTop = messages.scrollHeight;
  pendingGuideResponse = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const reply = answerQuestion(question.trim());
      appendMessageStatus(userMessage, "تم الإرسال");
      playGuideTone("user");
      thinking.remove();
      const shouldStick = isNearLatestMessage(messages);
      const assistantMessage = createMessageElement("", "assistant");
      messages.append(assistantMessage);
      if (shouldStick) messages.scrollTop = messages.scrollHeight;
      await revealAssistantReply(reply, assistantMessage);
    } catch {
      thinking.remove();
      const errorMessage = addMessage("تعذر تجهيز الإجابة محليًا. حاول مرة أخرى؛ لا يوجد اتصال بخدمة خارجية.", "assistant");
      errorMessage.classList.add("is-error");
      appendMessageStatus(errorMessage, "تعذر الرد", "is-error");
      appendMessageStatus(userMessage, "لم يكتمل الإرسال", "is-error");
    } finally {
      guideBusy = false;
      if (input) { input.disabled = false; input.focus(); }
      if (sendButton) sendButton.disabled = false;
    }
  };
  if (document.hidden) queueMicrotask(() => resumePendingGuideResponse());
  else setTimeout(() => resumePendingGuideResponse(), 0);
}
function resumePendingGuideResponse() {
  if (!pendingGuideResponse) return;
  const response = pendingGuideResponse;
  pendingGuideResponse = null;
  response();
}
function startGuide() {
  if (guideStarted) return;
  guideStarted = true;
  const box = document.getElementById("guide-messages");
  guideHistory.forEach(item => {
    box.append(createMessageElement(item.text, item.kind));
  });
  box.scrollTop = box.scrollHeight;
  if (!guideHistory.length) addMessage(`مرحبًا! أستطيع شرح المواقع الـ${sites.length} وحدود المقارنة العلمية.`);
  const prompts = ["لماذا ندرس هذه البيئات؟", "ما المواقع المشابهة للقمر؟", "ما المواقع المشابهة للمريخ؟"];
  document.getElementById("guide-prompts").innerHTML = prompts.map(prompt => `<button class="guide-prompt" type="button">${prompt}</button>`).join("");
}

window.addEventListener("hashchange", () => {
  render();
  setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
});
document.addEventListener("click", event => {
  const photoTrigger = event.target.closest("[data-photo-site]");
  if (photoTrigger) {
    openPhotoViewer(photoTrigger.dataset.photoSite, Number(photoTrigger.dataset.photoIndex));
    return;
  }
  if (event.target.closest("[data-photo-close]")) {
    document.querySelector("[data-photo-viewer]")?.close();
    return;
  }
  const photoStep = event.target.closest("[data-photo-step]");
  if (photoStep) {
    stepPhotoViewer(Number(photoStep.dataset.photoStep));
    return;
  }
  if (event.target.matches("[data-photo-viewer]")) {
    event.target.close();
    return;
  }
  const link = event.target.closest('a[href^="#"]');
  if (!link || link.getAttribute("href") === "#") return;
  event.preventDefault();
  const nextRoute = link.getAttribute("href");
  if (location.hash !== nextRoute) history.pushState(null, "", nextRoute);
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
});
document.addEventListener("keydown", event => {
  if (!document.querySelector("[data-photo-viewer]")?.open) return;
  if (event.key === "ArrowLeft") stepPhotoViewer(1);
  if (event.key === "ArrowRight") stepPhotoViewer(-1);
});
document.getElementById("menu-toggle").addEventListener("click", event => {
  const isOpen = document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("sidebar-backdrop").classList.toggle("open", isOpen);
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  event.currentTarget.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
});
document.getElementById("language-toggle").addEventListener("click", () => {
  window.siteI18n?.toggle();
  render();
});
document.getElementById("sidebar-backdrop").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
  document.getElementById("menu-toggle").setAttribute("aria-label", "فتح القائمة");
});
document.getElementById("guide-launcher").addEventListener("click", () => { startGuide(); document.getElementById("guide-panel").hidden = false; });
document.getElementById("guide-close").addEventListener("click", () => { document.getElementById("guide-panel").hidden = true; });
document.addEventListener("pointerdown", unlockGuideAudio, { once: true, capture: true });
document.addEventListener("keydown", unlockGuideAudio, { once: true, capture: true });
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) return;
  saveSpaceGameResumeState();
  resumePendingGuideResponse();
  activeAssistantReveal?.();
});
window.addEventListener("pagehide", saveSpaceGameResumeState);
app.addEventListener("click", event => {
  const planet = event.target.closest("[data-planet]");
  if (!planet) return;
  const scene = planet.closest(".hero-system-scene");
  if (!scene || scene.dataset.foreground === planet.dataset.planet) return;
  scene.dataset.foreground = planet.dataset.planet;
  scene.querySelectorAll("[data-planet]").forEach(button => button.setAttribute("aria-pressed", String(button === planet)));
  if (planet.dataset.planet === "mars") startMarsGlobe();
});
document.getElementById("guide-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("guide-input");
  const question = input.value.trim();
  if (guideBusy || !question) return;
  input.value = "";
  sendGuideMessage(question);
});
document.getElementById("guide-prompts").addEventListener("click", event => {
  const button = event.target.closest(".guide-prompt");
  if (button && !guideBusy) sendGuideMessage(button.textContent);
});
document.addEventListener("click", event => {
  if (event.target.closest("[data-game-continue]")) { startGamePresentation("continue"); return; }
  if (event.target.closest("[data-game-new]")) { startGamePresentation("new"); return; }
  if (event.target.closest("[data-game-launch]")) { startGamePresentation("new"); return; }
  if (event.target.closest("[data-game-exit]")) { exitGamePresentation(); return; }
  if (event.target.closest("[data-game-retry]")) { startSpaceGameScene(); return; }
  const gameSessionChoice = event.target.closest("[data-game-session]");
  if (gameSessionChoice) { handleGameSessionChoice(gameSessionChoice.dataset.gameSession); return; }
  const gameAction = event.target.closest("[data-game-action]");
  if (gameAction) {
    handleSpaceGameAction(gameAction);
    return;
  }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "export-csv") exportRecords("csv");
  if (action.dataset.action === "export-geojson") exportRecords("geojson");
  if (action.dataset.action === "fit-sites" && currentMap) currentMap.fitBounds(sites.map(site => [site.lat, site.lon]), { padding: [25, 25], maxZoom: 3 });
  if (action.dataset.action === "explain-site") { const site = sites.find(item => item.id === action.dataset.site); if (site) explainSite(site); }
  if (action.dataset.action === "speak-site") { const site = sites.find(item => item.id === action.dataset.site); if (site) speakSite(site); }
  if (action.dataset.action === "speak-site") { const site = sites.find(item => item.id === action.dataset.site); if (site) speakSite(site); }
  if (action.dataset.action === "clear-scores") {
    scoreState = {}; evidenceState = {}; confidenceState = {};
    writeStore(storageKeys.scores, scoreState); writeStore("atlas-score-evidence", evidenceState); writeStore("atlas-confidence", confidenceState);
    document.querySelectorAll(".score-input, [data-evidence-site]").forEach(input => { input.value = ""; });
    document.querySelectorAll("[data-confidence]").forEach(input => { input.value = ""; });
    updateComparison();
  }
  if (action.dataset.action === "pin-selection") {
    const note = document.getElementById("review-note")?.value.trim() || "";
    if (shortlist.length === 3 && note) { pinnedSelection = { sites: [...shortlist], note, date: new Date().toISOString() }; writeStore(storageKeys.pinned, pinnedSelection); render(); }
  }
  if (action.dataset.action === "unpin-selection") { pinnedSelection = null; writeStore(storageKeys.pinned, null); render(); }
  if (action.dataset.action === "retry-map") {
    const mapElement = action.closest(".map-wrap")?.querySelector(".map-canvas");
    mapElement?._retryMapTiles?.();
  }
  if (action.dataset.action === "switch-map-layer") action.closest(".map-wrap")?.querySelector(".map-canvas")?._switchMapLayer?.();
});
document.addEventListener("input", event => {
  const input = event.target;
  if (input.matches("[data-evidence-site]")) {
    const { evidenceSite: siteId, evidenceCriterion: criterionId } = input.dataset;
    evidenceState[siteId] ||= {};
    if (input.value.trim()) evidenceState[siteId][criterionId] = input.value;
    else delete evidenceState[siteId][criterionId];
    writeStore("atlas-score-evidence", evidenceState);
    updateComparison();
  }
  if (input.id === "site-search") {
    searchTerm = input.value;
    const cursor = input.selectionStart;
    const filtered = sites.filter(site => `${site.ar} ${site.en} ${site.country} ${site.subsite} ${site.type}`.toLowerCase().includes(searchTerm.toLowerCase()));
    const grid = document.getElementById("site-grid");
    if (grid) grid.innerHTML = filtered.length ? filtered.map(siteCard).join("") : `<div class="empty-state">لا توجد مواقع تطابق عبارة البحث.</div>`;
    const count = document.querySelector(".filter-count"); if (count) count.textContent = `${filtered.length} من ${sites.length} مواقع`;
    input.setSelectionRange(cursor, cursor);
  }
  if (input.matches("[data-score-site]")) {
    const { scoreSite: siteId, scoreCriterion: criterionId } = input.dataset;
    scoreState[siteId] ||= {};
    const score = Number(input.value);
    const validScore = input.value === "" || (Number.isInteger(score) && score >= 0 && score <= 5);
    input.setAttribute("aria-invalid", String(!validScore));
    if (input.value === "" || !validScore) delete scoreState[siteId][criterionId];
    else scoreState[siteId][criterionId] = score;
    writeStore(storageKeys.scores, scoreState); updateComparison();
  }
  if (input.matches("[data-weight]")) updateComparison();
  if (input.id === "review-note") {
    if (pinnedSelection) { pinnedSelection.note = input.value; writeStore(storageKeys.pinned, pinnedSelection); }
    const pin = document.querySelector('[data-action="pin-selection"]');
    if (pin) pin.disabled = shortlist.length !== 3 || !input.value.trim();
  }
});
document.addEventListener("change", event => {
  const input = event.target;
  if (input.matches("[data-confidence]")) {
    if (input.value) confidenceState[input.dataset.confidence] = input.value;
    else delete confidenceState[input.dataset.confidence];
    writeStore("atlas-confidence", confidenceState);
  }
  if (input.matches("[data-shortlist]")) {
    const id = input.dataset.shortlist;
    if (input.checked && shortlist.length >= 3) { input.checked = false; return; }
    shortlist = input.checked ? [...shortlist, id] : shortlist.filter(item => item !== id);
    writeStore(storageKeys.shortlist, shortlist);
    const count = document.getElementById("shortlist-count"); if (count) count.textContent = `المحدد: ${shortlist.length} من 3`;
    const pin = document.querySelector('[data-action="pin-selection"]');
    const note = document.getElementById("review-note")?.value.trim() || "";
    if (pin) pin.disabled = shortlist.length !== 3 || !note;
  }
});

function initSpaceViewport() {
  const canvas = document.getElementById("space-viewport-canvas");
  const context = canvas?.getContext("2d", { alpha: true });
  if (!canvas || !context) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const lowPower = (navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || window.innerWidth < 700;
  const stars = [];
  const galaxyDust = [];
  let width = 0;
  let height = 0;
  let frame = 0;
  let previousFrame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let galaxyRotation = 0;

  const starCount = lowPower ? 75 : 175;
  const dustCount = lowPower ? 60 : 150;
  const isInactive = () => document.hidden
    || !canvas.getClientRects().length
    || document.body.classList.contains("game-session-active")
    || document.body.dataset.page !== "home";

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.35);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    // 1. Moving Stars & Silver Glitter (from Moodboard)
    stars.length = 0;
    for (let index = 0; index < starCount; index++) {
      const isGlitter = Math.random() > 0.72;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isGlitter ? 0.8 + Math.random() * 1.4 : 0.35 + Math.random() * (lowPower ? 0.9 : 1.4),
        alpha: 0.25 + Math.random() * 0.7,
        speed: 0.02 + Math.random() * 0.08,
        phase: Math.random() * Math.PI * 2,
        depth: 0.15 + Math.random() * 0.85,
        isGlitter,
        // Colors from moodboard: Star White (#F5F3F0) or Galaxy Silver (#BCC6CC)
        color: isGlitter ? "220, 226, 235" : (Math.random() > 0.5 ? "245, 243, 240" : "188, 198, 204")
      });
    }

    // 2. Milky Way Galaxy Swirl Particles (Cosmic Purple #5D3A82 & Nebula Pink #D98CA8)
    galaxyDust.length = 0;
    const arms = 2;
    for (let i = 0; i < dustCount; i++) {
      const arm = i % arms;
      const armOffset = (arm * Math.PI);
      const distRatio = Math.pow(Math.random(), 1.6);
      const maxR = Math.min(width, height) * 0.46;
      const r = 24 + distRatio * maxR;
      const theta = armOffset + distRatio * 3.8 + (Math.random() - 0.5) * 0.7;
      const isPink = Math.random() > 0.52;
      galaxyDust.push({
        r,
        theta,
        size: 1.8 + Math.random() * 3.5,
        baseAlpha: 0.12 + Math.random() * 0.28,
        speed: 0.00012 + Math.random() * 0.0002,
        color: isPink ? "217, 140, 168" : "93, 58, 130" // Nebula Pink & Cosmic Purple
      });
    }

    draw(0, true);
  }

  function draw(timestamp, force = false) {
    if (!force && isInactive()) { frame = 0; return; }
    const minFrameTime = lowPower ? 90 : 50;
    if (!force && timestamp - previousFrame < minFrameTime) {
      frame = requestAnimationFrame(draw);
      return;
    }
    const elapsed = previousFrame ? Math.min(timestamp - previousFrame, 50) : 16;
    previousFrame = timestamp;
    context.clearRect(0, 0, width, height);

    if (!reducedMotion.matches) {
      galaxyRotation += 0.00015 * elapsed;
    }

    // --- Draw Milky Way Galaxy Swirl ---
    const gCenterX = width * 0.76 + pointerX * 18;
    const gCenterY = height * 0.42 + pointerY * 14;

    // Glowing Galaxy Core Gradient
    const coreGrad = context.createRadialGradient(gCenterX, gCenterY, 4, gCenterX, gCenterY, Math.min(width, height) * 0.36);
    coreGrad.addColorStop(0, "rgba(245, 243, 240, 0.22)"); // Star White core
    coreGrad.addColorStop(0.2, "rgba(217, 140, 168, 0.16)"); // Nebula Pink
    coreGrad.addColorStop(0.55, "rgba(93, 58, 130, 0.12)"); // Cosmic Purple
    coreGrad.addColorStop(1, "rgba(25, 26, 58, 0)"); // Midnight Blue edge
    context.fillStyle = coreGrad;
    context.beginPath();
    context.arc(gCenterX, gCenterY, Math.min(width, height) * 0.36, 0, Math.PI * 2);
    context.fill();

    // Swirling Nebula Dust Arms
    galaxyDust.forEach(p => {
      const angle = p.theta + galaxyRotation;
      const x = gCenterX + Math.cos(angle) * p.r;
      const y = gCenterY + Math.sin(angle) * p.r * 0.62; // 3D galactic disk tilt
      context.beginPath();
      context.fillStyle = `rgba(${p.color}, ${p.baseAlpha})`;
      context.arc(x, y, p.size, 0, Math.PI * 2);
      context.fill();
    });

    // --- Draw Moving Stars & Silver Glitter ---
    stars.forEach(star => {
      if (!reducedMotion.matches) {
        star.y += star.speed * elapsed;
        if (star.y > height + 4) { star.y = -4; star.x = Math.random() * width; }
      }
      const twinkle = reducedMotion.matches ? 1 : 0.7 + Math.sin(timestamp * 0.0016 + star.phase) * 0.3;
      const x = star.x + pointerX * star.depth * 8;
      const y = star.y + pointerY * star.depth * 6;
      const alpha = Math.max(0.08, star.alpha * twinkle);

      context.beginPath();
      context.fillStyle = `rgba(${star.color}, ${alpha})`;

      if (star.isGlitter && twinkle > 0.82) {
        // Shimmering 4-point glitter cross
        context.shadowBlur = 10;
        context.shadowColor = "rgba(220, 226, 235, 0.85)";
        const s = star.radius * 1.8;
        context.moveTo(x - s, y);
        context.lineTo(x + s, y);
        context.moveTo(x, y - s);
        context.lineTo(x, y + s);
        context.strokeStyle = `rgba(245, 243, 240, ${alpha})`;
        context.lineWidth = 0.9;
        context.stroke();
      } else {
        context.shadowBlur = star.radius > 1.2 ? 6 : 0;
        context.shadowColor = `rgba(${star.color}, 0.6)`;
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      }
    });

    context.shadowBlur = 0;
    if (!force && !reducedMotion.matches && !isInactive()) frame = requestAnimationFrame(draw);
    else frame = 0;
  }

  function pauseIfNeeded() {
    if (isInactive() || reducedMotion.matches) {
      cancelAnimationFrame(frame);
      frame = 0;
      if (!isInactive()) draw(0, true);
    } else if (!frame) {
      previousFrame = 0;
      frame = requestAnimationFrame(draw);
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", event => {
    pointerX = (event.clientX / Math.max(width, 1) - 0.5) * 2;
    pointerY = (event.clientY / Math.max(height, 1) - 0.5) * 2;
  }, { passive: true });
  document.addEventListener("visibilitychange", pauseIfNeeded);
  new MutationObserver(pauseIfNeeded).observe(document.body, { attributes: true, attributeFilter: ["class", "data-page"] });
  reducedMotion.addEventListener?.("change", pauseIfNeeded);
  resize();
  if (!reducedMotion.matches) frame = requestAnimationFrame(draw);
}

initSpaceViewport();
render();