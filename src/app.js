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
    sources: [{ name: "NASA Earth Observatory: Meteor Crater", url: "https://images.nasa.gov/details/iss074e0208832" }]
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
    sources: [{ name: "NASA ASTER: Island of Hawaii", url: "https://images.nasa.gov/details/PIA02604" }]
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
    sources: [{ name: "NASA: K-10 Rover near Haughton Crater", url: "https://images.nasa.gov/details/ARC-2007-ACD09-0255-001" }]
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
    sources: [{ name: "NASA ASTER: Dry Valleys, Antarctica", url: "https://images.nasa.gov/details/PIA12461" }]
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
    sources: [{ name: "NASA ASTER: Badwater, Death Valley", url: "https://images.nasa.gov/details/PIA26197" }]
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
  "meteor-crater": { brief: "فوهة اصطدام في أريزونا تتيح دراسة شكل الفوهات والمواد المقذوفة. تفيد المقارنة الجيولوجية مع فوهات القمر، لكنها ليست نسخة من سطحه.", type: "فوهة اصطدام", subsite: "فوهة بارينجر", similarities: "شكل الفوهة والمواد المرتبطة بالاصطدام أسئلة جيولوجية يمكن مقارنتها بصور الفوهات القمرية.", difference: "الفوهة بيئة أرضية؛ الغلاف الجوي والجاذبية والتعرية والبيئة المحيطة تختلف عن القمر.", guide: "تقع فوهة ميتيور في أريزونا بالولايات المتحدة، وهي فوهة ناتجة عن اصطدام نيزكي. تساعد دراسة شكلها والمواد المقذوفة حولها على فهم تضاريس الاصطدام ومقارنتها بالفوهات القمرية. التشابه جيولوجي في بعض السمات فقط، وليست الفوهة نسخة مطابقة من سطح القمر." },
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
const gamePresentation = { active: false, content: null, layer: null, cancelled: false, resumeChoice: false, summaryScreen: null, cancelOrientationWait: null, orientationPaused: false };
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
let guideConversationRefreshPending = false;
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
  return { sampleAnalysisVersion: 2, character: null, destination: null, selectedSite: null, suit: null, spacecraft: null, equipment: [], discovered: [], readSites: [], discoveredPoints: [], discoveredSamples: [], analyzedSamples: [], journeyLog: [], routePoints: [], quizResults: {}, completedMissions: [], collectedSamples: [], analyzedSites: [], settings: { sound: true, soundVersion: 1, quality: "medium", mouseSensitivity: 1, cameraShake: true }, xp: 0, resumeState: null };
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
      titleEn: typeof event.titleEn === "string" ? event.titleEn.slice(0, 160) : "",
      detailEn: typeof event.detailEn === "string" ? event.detailEn.slice(0, 600) : "",
      at: new Date(event.at).toISOString()
    })) : [],
    discoveredSamples: Array.isArray(saved.discoveredSamples) ? saved.discoveredSamples.filter(id => /^(earth|moon|mars):/.test(id)) : [],
    analyzedSamples: [...analyzedSamples],
    quizResults: saved.quizResults && typeof saved.quizResults === "object" ? saved.quizResults : {},
    completedMissions: migratedMissions,
    collectedSamples: [...collectedSamples],
    analyzedSites,
    settings: {
      sound: saved.settings?.soundVersion === 1 ? Boolean(saved.settings.sound) : true,
      soundVersion: 1,
      quality: ["low", "medium", "high"].includes(saved.settings?.quality) ? saved.settings.quality : "medium",
      mouseSensitivity: Number.isFinite(saved.settings?.mouseSensitivity) ? Math.min(2, Math.max(0.5, saved.settings.mouseSensitivity)) : 1,
      cameraShake: saved.settings?.cameraShake !== false
    },
    xp: Number.isFinite(saved.xp) ? Math.max(0, saved.xp) : 0,
    resumeState: hasValidResumeState ? { x: resumeState.x, y: resumeState.y, z: resumeState.z, cameraYaw: resumeState.cameraYaw, cameraPitch: resumeState.cameraPitch, timeLimit: resumeState.timeLimit } : null,
    routePoints: Array.isArray(saved.routePoints)
      ? saved.routePoints.filter(point => point && [point.x, point.y, point.z].every(Number.isFinite) && Math.abs(point.x) <= 52 && Math.abs(point.z) <= 52 && point.y >= -40 && point.y <= 60).slice(-180).map(point => ({ x: point.x, y: point.y, z: point.z }))
      : []
  };
}
function saveSpaceGame() {
  writeStore(spaceGameStorageKey, spaceGame);
}
function recordJourneyEvent(type, title, detail, siteId = spaceGame.selectedSite, titleEn = "", detailEn = "") {
  const event = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    siteId: sites.some(site => site.id === siteId) ? siteId : null,
    title: String(title).slice(0, 160),
    detail: String(detail).slice(0, 600),
    titleEn: String(titleEn || window.siteI18n?.translateValue(title) || title).slice(0, 160),
    detailEn: String(detailEn || window.siteI18n?.translateValue(detail) || detail).slice(0, 600),
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
  const targetName = site.target === "القمر" ? "القمر" : "المريخ";
  const similarityLabel = site.target === "القمر" ? "أوجه الشبه بالقمر" : "أوجه الشبه بالمريخ";
  const targetReference = site.target === "القمر" ? "للقمر" : "للمريخ";
  const facts = [
    ["الخصائص الجيولوجية", science.geology], ["المناخ", science.climate],
    ["الصخور والمعادن", science.rocks], ["التضاريس", science.terrain],
    ["المياه والموارد", science.water], [similarityLabel, science.mars],
    ["أهمية الموقع البحثية", science.research]
  ];
  return `<section class="panel detail-panel site-science-panel">
    <div class="panel-header-row"><div class="panel-header-icon" aria-hidden="true">⌖</div><div><span class="eyebrow">ملخص ميداني · ${escapeHtml(site.ar)}</span><h2>قراءة علمية سريعة</h2></div></div>
    <div class="site-science-grid">${facts.map(([label, value]) => `<article><h3>${label}</h3><p>${escapeHtml(value)}</p></article>`).join("")}</div>
    <div class="site-research-task"><strong>مهمة الاستكشاف</strong><p>${escapeHtml(science.task)}</p></div>
    <div class="site-science-sources"><strong>المصادر</strong>${science.sources.map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)} ↗</a>`).join("")}</div>
    <p class="site-science-caveat">الموقع الأرضي نموذج لدراسة خصائص محددة، وليس نسخة مطابقة ${targetReference}. الإحداثيات المعروضة نقاط مرجعية تقريبية، ومؤشرات اللعبة لا تمثل قياسات ميدانية.</p>
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
      <p class="hero-description">تستكشف المنصة ستة مواقع أرضية وتوضح أوجه المقارنة المحددة مع القمر والمريخ، من دون اعتبارها بدائل مطابقة في الجاذبية أو الغلاف الجوي أو الإشعاع.</p>
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

  <section class="exploration-premise" aria-labelledby="exploration-premise-title">
    <div class="exploration-premise-mark" aria-hidden="true"><span>NASA</span><strong>06</strong></div>
    <div class="exploration-premise-copy">
      <span class="exploration-premise-kicker">قاعدة الاستكشاف</span>
      <p id="exploration-premise-title">اكتشف أوجه الشبه والاختلاف بين ستة مواقع أرضية وعوالم القمر والمريخ بمراجع NASA.</p>
    </div>
    <div class="exploration-premise-links">
      <a href="#lunar">مواقع شبيهة بالقمر <span aria-hidden="true">←</span></a>
      <a href="#mars-analogs">مواقع شبيهة بالمريخ <span aria-hidden="true">←</span></a>
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
          <span class="world-badge lunar-badge">بيئات نظيرة للقمر · 03 مواقع</span>
          <strong>بيئات شبيهة بالقمر</strong>
          <p>تضاريس بازلتية وفوهات وأنفاق حمم لدراسة الجيولوجيا البركانية واختبار أدوات الاستكشاف القمري.</p>
          <span class="world-link-arrow">استكشف البيئات القمرية ←</span>
        </div>
      </a>
      <a class="world-link mars-link" href="#mars-analogs">
        <img src="assets/mars-perseverance.jpg" alt="بيئات شبيهة بالمريخ">
        <div class="world-link-overlay"></div>
        <div class="world-link-content">
          <span class="world-badge mars-badge">بيئات نظيرة للمريخ · 03 مواقع</span>
          <strong>بيئات شبيهة بالمريخ</strong>
          <p>صحاري وتضاريس جافة تساعد على اختبار قراءة السطح وأدوات العمل الميداني، لا مناخ المريخ أو غلافه الجوي.</p>
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
            <span>مربعات صور NASA GIBS المباشرة</span>
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
    <div class="space-game-promo-copy"><span class="eyebrow">مستكشف الفضاء</span><h2 id="space-game-promo-title">المهمة التالية: اكتشف نظائر الأرض</h2><p>انطلق مع مستكشف فضائي أو رائد، واعثر على مواقع أرضية حقيقية تساعد العلماء على دراسة تضاريس القمر والمريخ.</p><a class="button primary glow-btn" href="#game"><span aria-hidden="true">✦</span> ابدأ المغامرة</a></div>
    <div class="space-game-promo-character" aria-hidden="true"><span>👽</span><small>جاهز للاستكشاف</small></div>
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
        <h2>${isLunar ? "مواقع أرضية لدراسة خصائص قمرية محددة" : "مواقع أرضية لدراسة خصائص مريخية محددة"}</h2>
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
  return badges.length
    ? badges.map(badge => `<span class="game-badge"><span aria-hidden="true">${badge.icon}</span>${badge.label}</span>`).join("")
    : `<span class="game-badge-locked">الشارات تُفتح مع الاكتشاف</span>`;
}
function spaceGameHeader() {
  const english = window.siteI18n?.language === "en";
  return `<header class="game-header">
    <div class="game-header-title">
      <span class="eyebrow" data-i18n-ar="مستكشف الفضاء" data-i18n-en="SPACE EXPLORER">${english ? "SPACE EXPLORER" : "مستكشف الفضاء"}</span>
      <h1 data-i18n-ar="رحلة تبدأ بسؤال علمي" data-i18n-en="A journey begins with a scientific question">${english ? "A journey begins with a scientific question" : "رحلة تبدأ بسؤال علمي"}</h1>
      <p data-i18n-ar="استكشف مواقع أرضية حقيقية، واكتشف ما يمكن مقارنته بعوالم القمر والمريخ وما لا يمكن." data-i18n-en="Explore real Earth sites, compare them with lunar and Martian terrain, and learn where those comparisons end.">${english ? "Explore real Earth sites, compare them with lunar and Martian terrain, and learn where those comparisons end." : "استكشف مواقع أرضية حقيقية، واكتشف ما يمكن مقارنته بعوالم القمر والمريخ وما لا يمكن."}</p>
    </div>
    <div class="game-header-actions"><div class="game-xp-panel"><span class="game-xp-icon">✦</span><strong><span class="game-xp-value">${spaceGame.xp}</span> XP</strong><small data-i18n-ar="رصيد الرحلة" data-i18n-en="Mission XP">${english ? "Mission XP" : "رصيد الرحلة"}</small></div></div>
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
  const english = window.siteI18n?.language === "en";
  const events = spaceGame.journeyLog || [];
  const routePoints = spaceGame.routePoints || [];
  const routeSummary = routePoints.length > 1
    ? english
      ? `From (${routePoints[0].x.toFixed(1)}, ${routePoints[0].z.toFixed(1)}) to (${routePoints.at(-1).x.toFixed(1)}, ${routePoints.at(-1).z.toFixed(1)}) inside the simulation; these are not geographic coordinates.`
      : `من (${routePoints[0].x.toFixed(1)}, ${routePoints[0].z.toFixed(1)}) إلى (${routePoints.at(-1).x.toFixed(1)}, ${routePoints.at(-1).z.toFixed(1)}) داخل المحاكاة؛ هذه ليست إحداثيات جغرافية.`
    : english ? "No movement points have been recorded yet." : "لا توجد نقاط حركة مسجلة بعد.";
  const rows = events.length
    ? events.map(event => {
      const timestamp = new Date(event.at);
      const time = Number.isFinite(timestamp.getTime())
        ? new Intl.DateTimeFormat(english ? "en" : "ar", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(timestamp)
        : english ? "Time unavailable" : "وقت غير متاح";
      const title = english ? event.titleEn || window.siteI18n?.translateValue(event.title) || event.title : event.title;
      const detail = english ? event.detailEn || window.siteI18n?.translateValue(event.detail) || event.detail : event.detail;
      return `<li><time datetime="${escapeHtml(event.at)}">${escapeHtml(time)}</time><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(detail)}</p></div></li>`;
    }).join("")
    : `<li class="game-route-empty">${english ? "No events yet. Start exploring, visit a point of interest, and collect samples to build your mission log." : "لم تُسجل أحداث بعد؛ ابدأ رحلة واكتشف نقاط الاهتمام واجمع عينات لتحصل على سجل فعلي."}</li>`;
  return `<section class="game-journey-log" aria-label="${english ? "Journey event log" : "سجل أحداث الرحلة"}"><header><span class="eyebrow">${english ? `Route log · ${routePoints.length} points · ${events.length} events` : `المسار الفعلي · ${routePoints.length} نقطة · ${events.length} أحداث`}</span><h2>${english ? "Journey activity" : "ما أنجزته خلال الرحلة"}</h2></header><p class="game-route-summary">${escapeHtml(routeSummary)}</p><ol>${rows}</ol></section>`;
}
function refreshJourneyLogs() {
  const logs = [...document.querySelectorAll(".game-journey-log")];
  if (!logs.length) return;
  const template = document.createElement("template");
  template.innerHTML = journeyLogMarkup();
  logs.forEach(log => log.replaceWith(template.content.firstElementChild.cloneNode(true)));
}
function astronautCampaignCompleteScreen() {
  const english = window.siteI18n?.language === "en";
  const totalCollected = spaceGame.collectedSamples.filter(id => /^(moon|mars):/.test(id)).length;
  const sampleNoun = totalCollected === 1 ? "sample" : "samples";
  const destinations = ["moon", "mars"];
  const summaries = destinations.map(destination => {
    const samples = getMissionSampleCatalog("astronaut", destination, null);
    const collected = spaceGame.collectedSamples.map(id => samples.find(sample => sample.id === id)).filter(Boolean);
    const label = destination === "moon" ? english ? "the Moon" : "القمر" : english ? "Mars" : "المريخ";
    return `<article><strong>${english ? `Explore ${label}` : `استكشاف ${label}`}</strong><span>${english ? `${collected.length} of ${samples.length} samples` : `${collected.length} من ${samples.length} عينات`}</span><ul>${collected.map(sample => `<li>${english ? "Sample" : "العينة"} ${spaceGame.collectedSamples.indexOf(sample.id) + 1}: ${escapeHtml(gameSampleText(sample, "name"))}</li>`).join("")}</ul></article>`;
  }).join("");
  return `<div class="game-screen game-campaign-complete game-astronaut-summary"><div class="game-screen-heading"><span class="game-step">${english ? "Mission complete" : "اكتملت الرحلة"}</span><h2>${english ? "Moon and Mars exploration summary" : "ملخص استكشاف القمر والمريخ"}</h2><p>${english ? `Collected ${totalCollected} ${sampleNoun} across both worlds. Mission XP: ${spaceGame.xp}.` : `جمعت ${totalCollected} عينات واكتشفت تضاريس العالمين. رصيد الرحلة: ${spaceGame.xp} XP.`}</p></div><div class="game-campaign-summary">${summaries}</div>${journeyLogMarkup()}<div class="game-resume-actions"><button class="button primary" type="button" data-game-action="return-home">${english ? "Return to the home page" : "العودة إلى الصفحة الرئيسية"}</button></div></div>`;
}
function spaceGameCampaignCompleteScreen() {
  const english = window.siteI18n?.language === "en";
  const isMoon = spaceGame.destination === "moon";
  const target = isMoon ? "القمر" : "المريخ";
  const targetEn = isMoon ? "the Moon" : "Mars";
  const campaign = campaignSites(spaceGame.destination);
  const sampleCount = campaign.reduce((count, site) => count + getMissionSampleCatalog("alien", spaceGame.destination, site).filter(sample => spaceGame.collectedSamples.includes(sample.id)).length, 0);
  const sampleNoun = sampleCount === 1 ? "sample" : "samples";
  return `<div class="game-screen game-campaign-complete">
    <div class="game-screen-heading"><span class="game-step">${english ? `Campaign complete · ${campaign.length} sites` : `اكتمل المسار · ${campaign.length} مواقع`}</span><h2>${english ? `You explored all ${campaign.length} Earth analog sites for ${targetEn}.` : isMoon ? "رائع! لقد أكملت استكشاف جميع المواقع الأرضية النظيرة لبيئة القمر." : "اكتمل استكشاف جميع المواقع الأرضية النظيرة للمريخ."}</h2><p>${english ? `Collected ${sampleCount} virtual ${sampleNoun} across ${campaign.length} sites and learned the limits of each comparison.` : `سجلت ${sampleCount} عينات افتراضية من ${campaign.length} مواقع، وتعلمت حدود المقارنة في كل موقع.`}</p></div>
    <div class="game-campaign-summary">${campaign.map(site => `<article><strong>${escapeHtml(english ? site.en : site.ar)}</strong><span>${escapeHtml(english ? window.siteI18n?.translateValue(site.guide.similarity) || site.guide.similarity : site.guide.similarity)}</span></article>`).join("")}</div>
    ${journeyLogMarkup()}
    <div class="game-resume-actions">${isMoon ? `<button class="button primary" type="button" data-game-action="continue-mars-campaign">${english ? "Explore the Mars analog sites on Earth" : "استكشاف مواقع المريخ على الأرض"}</button>` : ""}<button class="game-menu-secondary" type="button" data-game-action="finish-campaign">${english ? "Finish and return to the main menu" : "إنهاء اللعبة والعودة إلى القائمة الرئيسية"}</button></div>
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
  const targetEn = isMoon ? "Moon" : "Mars";

  const gear = isAstronaut
    ? (isMoon
      ? {
          suit: { id: "moon-suit", name: "Lunar surface suit", color: "#e8ecf0", trim: "#7a8aa8", icon: "🌕",
            props: ["Protection from the vacuum of space", "Active thermal control (-130°C to +120°C)", "Designed for low gravity (1/6 of Earth's gravity)", "Helmet with reflective visor"] },
          craft: { id: "lunar-lander", name: "Lunar lander", icon: "🚀",
            props: ["Stable landing legs for the lunar surface", "No parachutes required (no atmosphere)", "Integrated life-support system", "Designed to land on the Moon"] },
          equipment: [
            { id: "oxygen-tank", name: "Oxygen tank", icon: "🫁", desc: "Breathing supply outside Earth's atmosphere" },
            { id: "thermal-layer", name: "Thermal layer", icon: "🧥", desc: "Protection from extreme temperature swings" },
            { id: "comms-unit", name: "Communication unit", icon: "📡", desc: "Contact mission control" },
            { id: "med-kit", name: "First-aid kit", icon: "🩹", desc: "Treat landing injuries" }
          ]
        }
      : {
          suit: { id: "mars-suit", name: "Mars surface suit", color: "#ff8e6e", trim: "#5a3a2e", icon: "🔴",
            props: ["Carbon dioxide filtration system", "Protection from fine Martian dust", "Designed for 0.38g gravity", "Sealed for the thin atmosphere"] },
          craft: { id: "mars-lander", name: "Mars lander", icon: "🛬",
            props: ["Parachutes for the thin atmosphere", "Heat shield for atmospheric entry", "Active cooling system", "Designed to land on Mars"] },
          equipment: [
            { id: "oxygen-tank", name: "Oxygen tank", icon: "🫁", desc: "Breathing supply in the thin atmosphere (95% CO2)" },
            { id: "dust-filter", name: "Dust filter", icon: "😷", desc: "Keeps Martian dust out of the suit" },
            { id: "comms-unit", name: "Communication unit", icon: "📡", desc: "Contact mission control" },
            { id: "med-kit", name: "First-aid kit", icon: "🩹", desc: "Treat landing injuries" }
          ]
        })
    : null;

  // Auto-assign mandatory gear based on destination
  spaceGame.suit = gear ? gear.suit.id : null;
  spaceGame.spacecraft = gear ? gear.craft.id : null;
  spaceGame.equipment = gear ? gear.equipment.map(e => e.id) : [];

  if (!isAstronaut) {
    return `<div class="game-screen game-gear-screen">
      <button class="language-toggle game-screen-language-toggle" type="button" aria-label="Switch to English" title="Switch to English">English</button>
      <div class="game-screen-heading"><span class="game-step">Mission preparation</span><h2>Earth explorer</h2><p>Explore Earth analog sites without a space suit or planetary lander.</p></div>
      <div class="game-gear-note">Selected character: alien explorer · This mission does not require space gear.</div>
      <button class="button primary glow-btn" type="button" data-game-action="start-mission">Start exploring ✦</button>
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
    <button class="language-toggle game-screen-language-toggle" type="button" aria-label="Switch to English" title="Switch to English">English</button>
    <div class="game-screen-heading"><span class="game-step">03 · Required mission gear</span><h2>Mission gear for ${targetEn}</h2><p>All items below are required and are assigned automatically for your destination.</p></div>

    <div class="game-gear-grid">
      <div class="game-gear-card game-gear-suit">
        ${suitVisual}
        <div class="game-gear-copy">
          <strong style="color:${suitColor}">${escapeHtml(gear.suit.name)}</strong>
          <div class="game-gear-type">Required space suit</div>
          <ul class="game-gear-props">${gear.suit.props.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="game-gear-card game-gear-craft">
        ${craftVisual}
        <div class="game-gear-copy">
          <strong>${escapeHtml(gear.craft.name)}</strong>
          <div class="game-gear-type">Required lander</div>
          <ul class="game-gear-props">${gear.craft.props.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="game-gear-card game-gear-equipment">
        <div class="game-gear-copy">
          <strong>Mission equipment</strong>
          <div class="game-gear-type">Each item has an in-world function</div>
        </div>
        <div class="game-gear-equipment-grid">${equipmentVisuals}</div>
      </div>
    </div>

    <button class="button primary glow-btn" type="button" data-game-action="start-mission">Start exploration</button>
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
  const astronautRoles = ["قائد المهمة", "الملاحة والاتصال", "الأنظمة والمعدات", "العينات والجيولوجيا", "الصحة والسلامة"];
  const alienRoles = ["قائد الفريق", "الاستطلاع", "التضاريس", "العينات", "التوثيق"];
  const roster = isAlien
    ? Array.from({ length: 5 }, (_, index) => ({ name: `ALIEN-${String(index + 1).padStart(2, "0")}`, leader: index === 0 }))
    : teamMembers;
  const members = roster.map((member, index) => {
    const isLeader = typeof member === "object" && member.leader;
    const name = typeof member === "object" ? member.name : member;
    const role = (isAlien ? alienRoles : astronautRoles)[index] || (isAlien ? "عضو الاستطلاع" : "عضو الطاقم");
    const initials = name.split(/\s+/).slice(0, 2).map(part => part[0]).join("");
    return `<li class="game-crew-member${isLeader ? " is-leader" : ""}"><span class="game-crew-avatar">${escapeHtml(initials)}</span><span class="game-crew-copy"><span class="game-crew-name" lang="en" dir="ltr">${escapeHtml(name)}</span><small class="game-crew-role">${escapeHtml(role)}</small></span><span class="game-crew-mark" aria-label="${escapeHtml(role)}">${isLeader ? "★" : "•"}</span></li>`;
  }).join("");
  return `<aside class="game-crew-roster" aria-label="${isAlien ? "فريق الفضائيين" : "طاقم المهمة"}"><header><span>${isAlien ? "فريق الفضائيين" : "طاقم المهمة"}</span><small>05 / 05</small></header><ol>${members}</ol></aside>`;
}
function mountGameEquipmentControls(container) {
  if (!["astronaut", "alien"].includes(spaceGame.character)) return;
  const shell = container.closest(".game-world-shell");
  if (!shell) return;
  if (!shell.querySelector(".game-world-language-toggle")) shell.insertAdjacentHTML("beforeend", `<button class="language-toggle game-language-toggle game-world-language-toggle" type="button" aria-label="Apply English to the game" title="Apply English to the game">English</button>`);
  const canUseEquipment = spaceGame.character === "astronaut" && ["moon", "mars"].includes(spaceGame.destination) && spaceGame.equipment.length > 0; if (!canUseEquipment) shell.querySelector('[data-engine-button="equipment"]')?.remove();
  shell.querySelector('[data-engine-button="rover"]')?.remove();
  if (!shell.querySelector(".game-crew-roster")) {
    shell.insertAdjacentHTML("beforeend", gameCrewRosterMarkup());
    shell.classList.add("has-game-crew");
  }
  const pauseMenu = shell.querySelector(".game-pause-overlay .game-menu-panel");
  if (pauseMenu && canUseEquipment && !pauseMenu.querySelector('[data-engine-action="equipment"]')) {
    pauseMenu.insertAdjacentHTML("afterbegin", `<button class="game-menu-secondary" type="button" data-engine-action="equipment">فتح العتاد</button>`);
  }
  if (pauseMenu && spaceGame.character === "alien" && spaceGame.selectedSite && !pauseMenu.querySelector('[data-engine-action="field-log"]')) {
    pauseMenu.insertAdjacentHTML("afterbegin", `<button class="game-menu-secondary" type="button" data-engine-action="field-log">ملاحظات الموقع</button>`);
  }
  if (spaceGame.character !== "astronaut" || !canUseEquipment) return;
  if (spaceGame.equipment.length && !shell.querySelector("#game-equipment-panel")) shell.insertAdjacentHTML("beforeend", gameEquipmentPanelMarkup());
  if (!spaceGame.equipment.length) return;
  if (!shell.querySelector(".game-health-meter")) shell.querySelector(".game-hud-bottom")?.insertAdjacentHTML("beforeend", `<div class="game-health-meter" aria-label="سلامة البدلة"><span aria-hidden="true">♥</span><div><small>سلامة البدلة</small><strong id="game-health-value">100%</strong><div class="game-health-bar"><span id="game-health-fill"></span></div></div></div>`);
  if (!shell.querySelector("#game-environment-alert")) shell.insertAdjacentHTML("beforeend", `<div class="game-environment-alert" id="game-environment-alert" role="status" aria-live="polite" hidden></div>`);
  if (!shell.querySelector('.game-hud-actions [data-engine-action="equipment"]')) shell.querySelector(".game-hud-actions")?.insertAdjacentHTML("beforeend", `<button class="game-icon-control" type="button" data-engine-action="equipment" aria-label="معدات الرحلة" title="استخدام معدات الرحلة">⚒</button>`);
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
    mars: { name: "المريخ", img: "assets/mars-hubble-globe.jpg", gravity: "0.38g", note: "95% CO₂" },
    earth: { name: "الأرض", img: "assets/earth-blue-marble.jpg", gravity: "1.0g", note: "غلاف جوي طبيعي" }
  }[currentWorld] || { name: "الأرض", img: "assets/earth-blue-marble.jpg", gravity: "1.0g", note: "غلاف جوي طبيعي" };
  return `<div class="game-solar-strip" aria-label="الموقع الحالي">${isAstronaut ? `<div class="game-solar-body current"><img src="${info.img}" class="game-solar-planet-img current-img" alt="${info.name}"><span class="game-solar-label current-label">${info.name}</span></div>` : `<div class="game-solar-body current"><img src="${info.img}" class="game-solar-planet-img current-img" alt="${info.name}"><span class="game-solar-label current-label">${info.name}</span></div>`}</div>`;
}
function gameSampleText(sample, field, language = window.siteI18n?.language) {
  const value = language === "en" ? sample[`${field}En`] : sample[field];
  return value || sample[field] || "";
}
function gameSampleEventLabel(sample, action, language = window.siteI18n?.language) {
  const english = language === "en";
  const labels = english
    ? { found: "Found", collected: "Collected", analyzed: "Analyzed" }
    : { found: "اكتشاف", collected: "جمع", analyzed: "تحليل" };
  return `${labels[action]}: ${gameSampleText(sample, "name")}`;
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
      <span class="game-step">Sample collection complete · site ${stageIndex + 1} of ${stageCount}</span>
      <h2>${escapeHtml(stageSite.en)}</h2>
      <div class="game-stage-photos">${photos.map((photo, index) => `<figure><img src="${escapeHtml(photo.src)}" alt="${escapeHtml(stageSite.en)} field image ${index + 1}" loading="eager"><figcaption><strong>${escapeHtml(stageSite.en)} field image ${index + 1}</strong><span>Field imagery for this Earth analog site.</span></figcaption></figure>`).join("")}</div>
      <p>Sample collection is complete for this site. In-game samples are educational models, not real samples or field measurements.</p>
      <div><strong>Science context</strong><p>Earth analog sites help researchers study specific questions; they do not fully reproduce the Moon or Mars.</p></div>
      <div class="game-stage-actions"><button class="game-menu-secondary" type="button" data-game-action="show-journey-log">View journey log</button><button class="button primary" type="button" data-game-action="${lastStage ? "show-campaign-summary" : "next-site"}">${lastStage ? "View mission summary" : "Continue to next site"}</button></div>
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
  const otherDestinationName = otherDestination === "moon" ? "Moon" : "Mars";
  const otherDestinationComplete = spaceGame.character === "astronaut" && isAstronautDestinationComplete(otherDestination);
  const nextAstronautAction = otherDestinationComplete ? "astronaut-show-summary" : `astronaut-switch-${otherDestination}`;
  const destinationImage = spaceGame.destination === "moon"
    ? { src: "assets/moon-apollo-11.jpg", alt: "سطح القمر وآثار أقدام رواد أبولو 11", credit: "NASA · Apollo 11" }
    : { src: "assets/mars-hubble-globe.jpg", alt: "المريخ كما رصده تلسكوب هابل", credit: "NASA · Hubble" };
  const stageCompletionMarkup = stageSite ? alienSiteCompleteMarkup(gameWorld) : "";
  const moonCharacteristicsMarkup = `
    <div class="game-planet-characteristics">
      <h3>Lunar science context for the collected samples</h3>
      <ul>
        <li><strong>Anorthosite:</strong> Bright, ancient highland crust rich in calcium, silicon, and aluminum; it records the early cooling of the Moon's magma ocean about 4.5 billion years ago.</li>
        <li><strong>Mare basalts:</strong> Titanium- and iron-rich volcanic rocks that filled large lunar impact basins.</li>
        <li><strong>Regolith and impact breccia:</strong> Fragmented soil and glass shaped by billions of years of impacts in an environment without liquid water or wind.</li>
        <li><strong>Environmental context:</strong> Near-total vacuum, about one-sixth of Earth's gravity, and extreme day-night temperatures from about +120°C to -130°C.</li>
      </ul>
    </div>`;
  const marsCharacteristicsMarkup = `
    <div class="game-planet-characteristics">
      <h3>Mars science context for the collected samples</h3>
      <ul>
        <li><strong>Hematite and iron oxides:</strong> These minerals give Mars its rusty color and record past oxidation processes involving water and the surface environment.</li>
        <li><strong>Sulfates and clays:</strong> These minerals preserve evidence of past liquid water, including streams and ancient lake deposits such as those in Jezero Crater.</li>
        <li><strong>Olivine basalt:</strong> Dark volcanic rock that records Mars' volcanic history, including large volcanoes such as Olympus Mons.</li>
        <li><strong>Environmental context:</strong> A thin atmosphere made mostly of carbon dioxide, about 38% of Earth's gravity, extreme cold, and planet-wide dust storms.</li>
      </ul>
    </div>`;
  const astronautCompletionMarkup = spaceGame.character === "astronaut" ? `<div class="game-stage-complete" id="game-final-mission" ${astronautMissionComplete ? "" : "hidden"}><section class="game-stage-card"><span class="game-step">Mission complete ✦</span><h2>${spaceGame.destination === "moon" ? "Lunar surface exploration complete" : "Martian surface exploration complete"}</h2><figure class="game-planet-summary-image"><img src="${destinationImage.src}" alt="${spaceGame.destination === "moon" ? "Lunar surface and Apollo 11 astronaut footprints" : "Mars as seen by the Hubble Space Telescope"}" loading="eager"><figcaption>${destinationImage.credit}</figcaption></figure><div class="game-stage-stats"><span><strong>${collected}/${sampleGoal}</strong> samples collected</span><span><strong>100%</strong> collection complete</span><span><strong>${spaceGame.xp}</strong> mission XP</span></div>${spaceGame.destination === "moon" ? moonCharacteristicsMarkup : marsCharacteristicsMarkup}<p>All mission samples have been collected from the ${spaceGame.destination === "moon" ? "lunar" : "Martian"} surface. Continue to explore ${otherDestinationName}?</p><div class="game-stage-actions"><button class="button primary glow-btn" type="button" data-game-action="${nextAstronautAction}">${otherDestinationComplete ? "View mission summary" : `Continue to ${otherDestinationName}`}</button></div></section></div>` : "";
  const locKey = spaceGame.character === "astronaut" ? spaceGame.destination : world;
  const locInfo = { moon:{name:"القمر",gravity:"0.16g",note:"فراغ كوني تام"}, mars:{name:"المريخ",gravity:"0.38g",note:"95% CO₂"}, earth:{name:"الأرض",gravity:"1.0g",note:"غلاف جوي طبيعي"} }[locKey] || {name:"الأرض",gravity:"1.0g",note:"غلاف جوي طبيعي"};
  const locationIcon = spaceGame.character === "astronaut" ? "" : `<span class="game-location-icon">🌍</span>`;
  const locationBar = stageSite
    ? `<div class="game-location-bar">${locationIcon}<span class="game-location-text">الأرض · ${escapeHtml(stageSite.type)} · وصف نوعي، لا قياسات آنية${["devon", "mcmurdo"].includes(stageSite.id) ? " · حركة أبطأ توضيحيًا على السطح البارد" : ""}</span></div>`
    : `<div class="game-location-bar">${locationIcon}<span class="game-location-text">${locInfo.name} · ${locInfo.gravity} · ${locInfo.note}</span></div>`;
  return `<div class="game-screen game-world-screen">
    <div class="game-world-shell${spaceGame.character === "alien" ? " alien-game" : ""}">
      <div class="game-canvas-host" id="game-canvas-host"></div>
      ${gamePlanetStripMarkup(world)}
      <div class="game-arrival-title" id="game-arrival-title"><span>بدء المسح الميداني</span><strong>${worldName}</strong>${stageSite ? `<small>${escapeHtml(stageSite.science.task)}</small>` : ""}</div>
      ${spaceGame.character === "astronaut" ? `<div class="game-mission-kit"><div class="game-kit-item"><span class="game-kit-label">البدلة</span><strong>${spaceGame.suit === "moon-suit" ? "بدلة القمر" : spaceGame.suit === "mars-suit" ? "بدلة المريخ" : "بدلة قياسية"}</strong></div><div class="game-kit-item"><span class="game-kit-label">المركبة</span><strong>${spaceGame.spacecraft === "lunar-lander" ? "مركبة هبوط القمر" : spaceGame.spacecraft === "mars-lander" ? "مركبة هبوط المريخ" : "مركبة قياسية"}</strong></div><div class="game-kit-item"><span class="game-kit-label">العتاد</span><strong>${spaceGame.equipment.length ? spaceGame.equipment.map(id => ({ "oxygen-tank": "خزان أكسجين", "tool-kit": "حقيبة أدوات", "med-kit": "حقيبة إسعاف", "sample-bag": "حقيبة عينات", "comms-unit": "وحدة اتصال", "thermal-layer": "طبقة حرارية" }[id] || id)).join("، ") : "غير محدد"}</strong></div></div>` : ""}
      <div class="game-hud game-hud-top"><div class="game-objective-status"><span class="game-mission-index">${stageSite ? "مهمة الموقع · جمع العينات" : "المهمة 01 · تحدي 03:00"}</span><strong id="game-mission-title">${stageSite ? missionComplete ? "اكتملت العينات" : `اجمع ${sampleGoal} عينات` : missionComplete ? "اتبع المنارة إلى فوهة الاصطدام" : `اجمع ${sampleGoal} عينات افتراضية`}</strong><small id="game-mission-count">${stageSite ? `${collected}/${sampleGoal} عينات` : missionComplete ? "اتبع الإشارة إلى الفوهة" : `${collected}/${sampleGoal} عينات مجمعة`}</small><span class="game-mission-clock" id="game-timer">03:00</span></div>${spaceGame.character === "astronaut" ? `<div class="game-oxygen-meter"><span class="game-oxygen-icon">🫁</span><div><small>الأكسجين</small><strong id="game-oxygen-time">02:00</strong></div><div class="game-oxygen-bar"><div id="game-oxygen-fill" style="width:100%"></div></div></div>` : ""}<div class="game-hud-actions"><button class="game-icon-control" type="button" data-engine-action="inventory" aria-label="حقيبة العينات" title="حقيبة العينات الميدانية (R)">🎒</button><button class="game-icon-control" type="button" data-engine-action="solar-system" aria-label="رؤية المجموعة الشمسية" title="رصد المجموعة الشمسية والنجوم">🪐</button><button class="game-icon-control" type="button" data-engine-action="camera" aria-label="تبديل زاوية الكاميرا" title="تبديل الكاميرا (شخص ثالث / قناع الخوذة / طائرة استطلاع)">📷</button><button class="game-icon-control" type="button" data-engine-action="settings" aria-label="إعدادات اللعبة" title="الإعدادات">⚙</button><button class="game-icon-control" type="button" data-engine-action="pause" aria-label="إيقاف مؤقت" title="إيقاف مؤقت">Ⅱ</button><button class="game-icon-control" type="button" data-game-exit aria-label="الخروج من اللعبة" title="الخروج من اللعبة">×</button></div></div>${locationBar}
      <div class="game-beacon-solo" id="game-beacon-solo">${missionComplete ? '' : `<span class="game-beacon-solo-shell" aria-hidden="true"><svg id="game-beacon-arrow" viewBox="0 0 24 24" fill="none"><path d="M12 2.5L4.5 20.5L12 16.5L19.5 20.5L12 2.5Z" fill="#ffcf56" stroke="#fff1b8" stroke-width="1.2" stroke-linejoin="round"/></svg></span><span class="game-beacon-solo-label">إشارة العينة</span><strong id="game-beacon-distance-solo" class="game-beacon-solo-dist">-- م</strong>`}</div>
      <div class="game-helmet-visor" id="game-helmet-visor" hidden aria-hidden="true"><div class="visor-reflection"></div><div class="visor-hud-reticle"></div></div>
      <div class="game-crosshair" aria-hidden="true"><i></i></div>
      <div class="game-landscape-prompt" role="status" aria-live="polite"><div><span aria-hidden="true">▯</span><strong>أدر الهاتف أفقيًا</strong><small>سيبدأ الاستكشاف فور تدوير الجهاز.</small></div></div>
      <div class="game-hud game-hud-bottom"><div class="game-sample-meter"><span class="game-sample-icon">⌑</span><div><small>عينات محاكاة</small><strong id="game-sample-count">${collected}/${sampleGoal}</strong></div></div><div class="game-xp-meter"><span>✦</span><strong><span class="game-xp-value">${spaceGame.xp}</span> XP</strong></div></div>
      <div class="game-controls-hint">W A S D للحركة · الماوس لتوجيه الكاميرا · مفتاح المسافة للقفز والدفع النفاث · مفتاح التبديل للجري · E للتفاعل · R لحقيبة العينات · C للكاميرا</div>
      <div class="game-nearby-prompt" id="game-nearby-prompt" hidden></div>
      <aside class="game-science-point" id="game-science-point" role="status" aria-live="polite" hidden><span>نقطة اهتمام علمية</span><strong id="game-science-point-title"></strong><p id="game-science-point-text"></p><small>إضافة إلى سجل الاستكشاف · موضع توضيحي</small></aside>
      ${stageSite ? gameFieldLogMarkup(stageSite) : ""}
      <div class="game-companion-hint" id="game-companion-hint" hidden></div>
      <div class="game-toast" id="game-toast" role="status" aria-live="polite"></div>
      <div class="game-touch-controls" aria-label="عناصر تحكم اللمس"><div class="game-look-zone" aria-hidden="true"></div><div class="game-joystick" aria-label="عصا الحركة"><span class="game-joystick-knob"></span></div><div class="game-action-buttons"><button type="button" data-engine-button="inventory" aria-label="حقيبة العينات">🎒<small>عينات</small></button><button type="button" data-engine-button="camera" aria-label="تبديل زاوية الكاميرا">◉<small>كاميرا</small></button><button type="button" data-engine-button="equipment" aria-label="استخدام المعدات">⚒<small>معدات</small></button><button type="button" data-engine-button="interact" aria-label="تفاعل">E<small>تفاعل</small></button><button type="button" data-engine-button="rover" class="is-locked" aria-label="قيادة عربة الاستكشاف" hidden>◈<small>عربة</small></button><button type="button" data-engine-button="run" aria-label="جري">»<small>جري</small></button><button type="button" data-engine-button="jump" aria-label="قفز / دفع نفاث">↟<small>دفع</small></button></div></div>
      <div class="game-pause-overlay" id="game-pause-overlay" hidden><div class="game-menu-panel"><span class="game-step">توقفت المهمة مؤقتًا</span><h2>خذ وقتك أيها المستكشف</h2><button class="button primary" type="button" data-engine-action="resume">متابعة الاستكشاف</button><button class="game-menu-secondary" type="button" data-game-action="change-destination">تغيير الوجهة</button><button class="game-menu-secondary" type="button" data-game-action="change-character">تغيير الشخصية</button><button class="game-menu-secondary" type="button" data-game-action="reset">بدء مغامرة جديدة</button><button class="game-exit-button" type="button" data-game-exit>× <span>خروج من اللعبة</span></button></div></div>
      <div class="game-over-overlay" id="game-over-overlay" hidden><div class="game-menu-panel"><span class="game-step">جيم أوفر</span><h2 id="game-over-title">انتهت المهمة</h2><p id="game-over-reason">لم تتمكن من جمع العينات قبل انتهاء الوقت.</p><div class="game-stage-actions"><button class="button primary" type="button" data-game-action="reset">محاولة مرة أخرى</button><button class="game-exit-button" type="button" data-game-exit>الخروج من اللعبة</button></div></div></div>
      <div class="game-settings-panel" id="game-settings-panel" hidden><div class="game-settings-card"><button class="game-settings-close" type="button" data-engine-action="settings-close" aria-label="إغلاق الإعدادات">×</button><span class="game-step">تخصيص الرحلة</span><h2>إعدادات اللعبة</h2><label class="game-setting-row"><span>الأصوات المحيطية</span><input id="game-sound-toggle" type="checkbox" ${spaceGame.settings.sound ? "checked" : ""}></label><label class="game-setting-row"><span>اهتزاز الكاميرا الخفيف</span><input id="game-camera-shake-toggle" type="checkbox" ${spaceGame.settings.cameraShake ? "checked" : ""}></label><label class="game-setting-row"><span>حساسية الماوس</span><input id="game-mouse-sensitivity" type="range" min="0.5" max="2" step="0.1" value="${spaceGame.settings.mouseSensitivity}"><output id="game-mouse-sensitivity-value">${spaceGame.settings.mouseSensitivity.toFixed(1)}×</output></label><label class="game-setting-row"><span>جودة العرض</span><select id="game-quality-select"><option value="low" ${spaceGame.settings.quality === "low" ? "selected" : ""}>اقتصادية</option><option value="medium" ${spaceGame.settings.quality === "medium" ? "selected" : ""}>متوازنة</option><option value="high" ${spaceGame.settings.quality === "high" ? "selected" : ""}>عالية</option></select></label><button class="button primary" type="button" data-engine-action="settings-close">تم</button></div></div>
      <div class="game-inventory-panel" id="game-inventory-panel" hidden><div class="game-inventory-card"><div class="game-inventory-header"><div><span class="game-step">حقيبة العينات الميدانية (R)</span><h2>العينات المجمعة</h2></div><button class="game-settings-close" type="button" data-engine-action="inventory-close" aria-label="إغلاق حقيبة العينات">×</button></div><div class="game-inventory-list" id="game-inventory-list"></div><div class="game-inventory-footer"><small>تُرقّم العينات حسب أسبقية جمعها.</small><button class="button primary" type="button" data-engine-action="inventory-close">متابعة الاستكشاف</button></div></div></div>
      ${stageCompletionMarkup}
      ${astronautCompletionMarkup}
    </div>
      <footer class="game-world-footer"><div class="game-achievement-list" id="game-achievement-list">${gameBadgesMarkup()}</div><div class="game-astronaut-health" ${spaceGame.character !== "astronaut" ? "hidden" : ""}><div class="game-health-header"><span class="game-health-icon">🏥</span><strong>الصحة والسلامة داخل المركبة</strong></div><div class="game-health-list">${[
  { title: "فقدان كثافة العظام", desc: "جاذبية منخفضة تضعف العظام مع مرور الوقت داخل المركبة." },
  { title: "جفاف وتهيّج الجلد", desc: "التعرض المتكرر للإشعاع الكوني وجفاف الهواء يؤثر على المظهر والبشرة." },
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
  return `<section class="space-game-page game-entry-page" aria-label="مستكشف الفضاء"><div class="game-starfield" aria-hidden="true"></div><div class="game-entry-copy"><div class="game-entry-text"><span class="eyebrow">مستكشف الفضاء</span><h1 id="space-game-title">رحلتك الاستكشافية تبدأ هنا</h1><p>انطلق إلى تضاريس القمر أو المريخ، واجمع العينات واكتشف العالم ثلاثي الأبعاد.</p></div>${actions}</div></section>`;
}
function spaceGameResumeScreen() {
  const destination = spaceGame.destination === "moon" ? "القمر" : "المريخ";
  return `<div class="game-screen game-resume-screen"><div class="game-screen-heading"><span class="game-step">رحلة محفوظة</span><h2>تحب تكمّل من آخر مرة؟</h2><p>شخصيتك ووجهتك وتقدمك محفوظين على هذا الجهاز. الوجهة الحالية: ${destination} · ${spaceGame.xp} XP.</p></div><div class="game-resume-actions"><button class="button primary" type="button" data-game-session="continue">متابعة الرحلة</button><button class="game-menu-secondary" type="button" data-game-session="new">بدء لعبة جديدة</button></div></div>`;
}
function spaceGameSessionPage() {
  const content = gamePresentation.summaryScreen === "astronaut" ? astronautCampaignCompleteScreen()
    : gamePresentation.summaryScreen === "alien" ? spaceGameCampaignCompleteScreen()
    : spaceGame.character === "astronaut" && isAstronautCampaignComplete()
    ? astronautCampaignCompleteScreen()
    : gamePresentation.resumeChoice ? spaceGameResumeScreen()
      : !spaceGame.character ? spaceCharacterScreen()
      : !spaceGame.destination ? spaceDestinationScreen()
        : spaceGame.character === "astronaut" && (!spaceGame.suit || !spaceGame.spacecraft || spaceGame.equipment.length === 0) ? spaceGearSummaryScreen()
          : spaceGame.character === "alien" && isCampaignComplete(spaceGame.destination) ? spaceGameCampaignCompleteScreen()
            : spaceGameMapScreen();
  return `<section class="space-game-page" aria-label="مستكشف الفضاء"><div class="game-starfield" aria-hidden="true"></div>${spaceGameHeader()}${content}<div class="game-engine-error" id="game-engine-error" role="alert" hidden><span>تعذر تهيئة العرض ثلاثي الأبعاد. تحقق من دعم WebGL واتصال الملفات المحلية.</span><button type="button" class="game-error-retry" data-game-retry>إعادة المحاولة</button></div></section>`;
}
async function startSpaceGameScene() {
  if (!gamePresentation.active || !spaceGame.character || !spaceGame.destination || gamePresentation.resumeChoice) return;
  const container = document.getElementById("game-canvas-host");
  if (!container) return;
  mountGameEquipmentControls(container);
  try {
    spaceGameEngine ||= await import("../vendor/space-game.js?v=astronaut-equipment-controls-20261111");
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
      language: window.siteI18n?.language || "ar",
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
            if (sample) recordJourneyEvent("sample-found", gameSampleEventLabel(sample, "found", "ar"), gameSampleText(sample, "local", "ar"), stageSite.id, gameSampleEventLabel(sample, "found", "en"), gameSampleText(sample, "local", "en"));
          });
          progress.collectedSamples.filter(id => !spaceGame.collectedSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-collected", gameSampleEventLabel(sample, "collected", "ar"), `${gameSampleText(sample, "type", "ar")} · ${gameSampleText(sample, "analysis", "ar")}`, stageSite.id, gameSampleEventLabel(sample, "collected", "en"), `${gameSampleText(sample, "type", "en")} · ${gameSampleText(sample, "analysis", "en")}`);
          });
          (progress.analyzedSamples || []).filter(id => !(spaceGame.analyzedSamples || []).includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-analyzed", gameSampleEventLabel(sample, "analyzed", "ar"), `${gameSampleText(sample, "analysis", "ar")} ${gameSampleText(sample, "limitations", "ar")}`, stageSite.id, gameSampleEventLabel(sample, "analyzed", "en"), `${gameSampleText(sample, "analysis", "en")} ${gameSampleText(sample, "limitations", "en")}`);
          });
          progress.completedMissions.filter(id => !spaceGame.completedMissions.includes(id)).forEach(id => {
            if (id === siteStageMissionId(stageSite.id)) recordJourneyEvent("site-complete", `إكمال الموقع: ${stageSite.ar}`, `اكتمل جمع ${gameWorld.sampleGoal} عينات تعليمية.`, stageSite.id);
          });
        } else {
          progress.discoveredSamples.filter(id => !spaceGame.discoveredSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-found", gameSampleEventLabel(sample, "found", "ar"), gameSampleText(sample, "local", "ar"), null, gameSampleEventLabel(sample, "found", "en"), gameSampleText(sample, "local", "en"));
          });
          progress.collectedSamples.filter(id => !spaceGame.collectedSamples.includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-collected", gameSampleEventLabel(sample, "collected", "ar"), `${gameSampleText(sample, "type", "ar")} · ${gameSampleText(sample, "analysis", "ar")}`, null, gameSampleEventLabel(sample, "collected", "en"), `${gameSampleText(sample, "type", "en")} · ${gameSampleText(sample, "analysis", "en")}`);
          });
          (progress.analyzedSamples || []).filter(id => !(spaceGame.analyzedSamples || []).includes(id)).forEach(id => {
            const sample = gameWorld.samples.find(item => item.id === id);
            if (sample) recordJourneyEvent("sample-analyzed", gameSampleEventLabel(sample, "analyzed", "ar"), `${gameSampleText(sample, "analysis", "ar")} ${gameSampleText(sample, "limitations", "ar")}`, null, gameSampleEventLabel(sample, "analyzed", "en"), `${gameSampleText(sample, "analysis", "en")} ${gameSampleText(sample, "limitations", "en")}`);
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
  const english = window.siteI18n?.language === "en";
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
    <h2 class="alien-ufo-warp-title">${english ? "UFO hyperspace transit 🛸" : "انتقال فضائي فائق بالطبق الطائر 🛸"}</h2>
    <p class="alien-ufo-warp-sub">${english ? "Jumping through spacetime to the next site at the speed of light…" : "جاري القفز عبر الزمكان إلى الموقع التالي بسرعة الضوء…"}</p>
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
  if (!["show-campaign-summary", "astronaut-show-summary", "show-journey-log"].includes(action)) {
    gamePresentation.summaryScreen = null;
  }
  if (action === "show-journey-log") {
    const log = button.closest(".game-stage-card")?.querySelector(".game-stage-journey-log");
    if (log) {
      log.hidden = !log.hidden;
      const english = window.siteI18n?.language === "en";
      button.textContent = log.hidden ? english ? "View route" : "عرض المسار" : english ? "Hide route" : "إخفاء المسار";
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
    spaceGame.routePoints = [];
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
    spaceGame.routePoints = [];
    const nextSite = campaign.find(site => site.id === spaceGame.selectedSite);
    if (nextSite) recordJourneyEvent("site-arrival", `الانتقال إلى: ${nextSite.ar}`, nextSite.science.task, nextSite.id);
    if (isAlien) {
      stopSpaceGameScene();
      saveSpaceGame();
      showAlienWarpScreen(() => render());
      return;
    }
  } else if (action === "continue-mars-campaign") {
    const isAlien = spaceGame.character === "alien";
    spaceGame.destination = "mars";
    spaceGame.selectedSite = nextCampaignSite("mars")?.id || campaignSites("mars")[0]?.id || null;
    spaceGame.resumeState = null;
    spaceGame.routePoints = [];
    const firstMarsSite = campaignSites("mars").find(site => site.id === spaceGame.selectedSite);
    if (firstMarsSite) recordJourneyEvent("site-arrival", `بدء مسار المريخ: ${firstMarsSite.ar}`, firstMarsSite.science.task, firstMarsSite.id);
    if (isAlien) {
      stopSpaceGameScene();
      saveSpaceGame();
      showAlienWarpScreen(() => render());
      return;
    }
  } else if (action === "show-campaign-summary") {
    spaceGame.resumeState = null;
    gamePresentation.summaryScreen = "alien";
  } else if (action === "astronaut-switch-mars") {
    spaceGame.destination = "mars";
    spaceGame.suit = null;
    spaceGame.spacecraft = null;
    spaceGame.equipment = [];
    spaceGame.resumeState = null;
    spaceGame.routePoints = [];
  } else if (action === "astronaut-switch-moon") {
    spaceGame.destination = "moon";
    spaceGame.suit = null;
    spaceGame.spacecraft = null;
    spaceGame.equipment = [];
    spaceGame.resumeState = null;
    spaceGame.routePoints = [];
  } else if (action === "astronaut-show-summary") {
    spaceGame.resumeState = null;
    gamePresentation.summaryScreen = "astronaut";
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
  } else if (action === "restart-mission") {
    const previousMission = spaceGame;
    spaceGame = freshSpaceGame();
    spaceGame.character = previousMission.character;
    spaceGame.destination = previousMission.destination;
    spaceGame.selectedSite = previousMission.selectedSite;
    spaceGame.suit = previousMission.suit;
    spaceGame.spacecraft = previousMission.spacecraft;
    spaceGame.equipment = [...previousMission.equipment];
    spaceGame.settings = { ...previousMission.settings };
    gamePresentation.resumeChoice = false;
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
  gamePresentation.summaryScreen = null;
  const page = app.querySelector(".space-game-page");
  if (!page) return;
  if (mode === "continue" && !hasValidSavedSpaceGame()) mode = "new";
  if (mode === "new" && hasValidSavedSpaceGame()
    && !window.confirm(window.siteI18n?.language === "en"
      ? "Starting a new journey will replace the saved progress on this device. Continue?"
      : "بدء رحلة جديدة سيستبدل تقدم الرحلة المحفوظة على هذا الجهاز. هل تريد المتابعة؟")) return;
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
  const english = window.siteI18n?.language === "en";
  const layer = document.createElement("div");
  layer.id = "game-launch-layer";
  layer.innerHTML = `<button class="language-toggle game-session-language-toggle" type="button" aria-label="Switch to English" title="Switch to English">English</button><div class="game-launch-content"></div><div class="game-countdown" role="status" aria-live="assertive"><div class="game-countdown-orbit" aria-hidden="true"><i></i><i></i><i></i></div><p>${english ? "Preparing the exploration vehicle..." : "جارٍ تجهيز مركبة الاستكشاف..."}</p><strong id="game-countdown-number">3</strong><small id="game-loading-status" hidden>${english ? "Preparing the 3D world..." : "جارٍ تجهيز العالم ثلاثي الأبعاد..."}</small></div><div class="game-orientation-gate" role="status" aria-live="polite"><div><span aria-hidden="true">▯</span><strong>${english ? "Switching to landscape mode" : "جارٍ تدوير الشاشة تلقائيًا"}</strong><p>${english ? "The game will begin when landscape mode is ready." : "لن يبدأ اللعب قبل اكتمال الوضع الأفقي."}</p><button class="game-menu-secondary" type="button" data-game-exit>${english ? "Cancel and return" : "إلغاء والعودة"}</button></div></div>`;
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
  const engineReady = import("../vendor/space-game.js?v=astronaut-equipment-controls-20261111").then(engine => {
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
  window.location.assign("https://marwan0sama1023-spec.github.io/nasa12/");
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
      <p>معايرة كاميرات الأشعة تحت الحمراء وأجهزة قياس الأطياف الصخرية واختبار آليات الحفر وأخذ اللباب في مواقع جافة؛ لا تعيد هذه الاختبارات إنتاج جاذبية الكواكب أو غلافها الجوي.</p>
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
  const allDocuments = [...GUIDE_REFERENCE_DOCUMENTS, ...GUIDE_CREW_PROBLEMS];
  const siteDocuments = sites.map(site => ({
    siteId: site.id,
    topics: guideChatTopics(`${site.brief} ${site.science?.geology || ""} ${site.science?.rocks || ""} ${site.science?.water || ""}`),
    ar: `${site.ar} (${site.en}) · ${site.guide.summary}`,
    en: [GUIDE_SITE_ENGLISH[site.id]?.summary, GUIDE_SITE_ENGLISH[site.id]?.geology, GUIDE_SITE_ENGLISH[site.id]?.limit].filter(Boolean).join(" "),
    sources: [
      ...(site.science?.sources || []),
      ...(site.image?.source ? [{ label: site.image.credit || `NASA image: ${site.image.title}`, url: site.image.source }] : []),
      ...(nasaSourcePages[site.id] ? [{ label: nasaSourcePages[site.id].title, url: nasaSourcePages[site.id].url }] : [])
    ]
  }));
  const problemDocuments = getGuideCorpus().filter(document => document.kind === "problem");
  const collect = documents => documents.flatMap(document => (document.sources || []).map(source => {
    const item = typeof source === "string" ? { label: "NASA", url: source } : source;
    return {
      ...item,
      description: document.ar || document.fieldsAr?.problem || document.title || "مرجع علمي مرتبط باستكشاف القمر والمريخ.",
      descriptionEn: document.en || document.fieldsEn?.problem || "A reference related to lunar and Mars exploration."
    };
  }));
  const nonReports = entries => entries.filter(source => !/ntrs\.nasa\.gov/i.test(source.url));
  const excludeSourcePaths = (entries, paths) => entries.filter(source => !paths.some(path => source.url.includes(path)));
  const documentsById = ids => allDocuments.filter(document => ids.includes(document.id));
  const siteAnalogProblems = siteProblemCards.filter(problem => !["moon-surface", "mars-surface"].includes(problem.key)).map(problem => ({ title: problem.title, ar: problem.problem, sources: problem.sources }));
  const technicalSources = [
    ...excludeSourcePaths(nonReports(collect(GUIDE_CREW_PROBLEMS)), ["nasas-perseverance-offers-clues-to-protect-crews-from-mars-dust", "moon-water-and-ices", "nasas-oxygen-generating-experiment-moxie-completes-mars-mission"]),
    ...nonReports([...collect(documentsById(["soil-earth-mars", "project-game"])), ...collect(GUIDE_CREW_PROBLEMS.filter(document => document.id === "crew-resources")).filter(source => source.url.includes("water-on-the-moon"))]),
    ...nonReports(collect(documentsById(["nasa-missions", "mars-robots", "landing-hazards"]))),
    ...collect([...siteDocuments, ...siteAnalogProblems, ...problemDocuments, ...allDocuments]).filter(source => /ntrs\.nasa\.gov/i.test(source.url))
  ];
  const categories = [
    { id: "lunar", title: "مصادر استكشاف القمر", titleEn: "Moon exploration", description: "مراجع عن القمر وموارده ومهماته.", descriptionEn: "References about the Moon, its resources, and missions.", sources: nonReports(collect(documentsById(["moon-world", "lunar-base"]))) },
    { id: "mars", title: "مصادر استكشاف المريخ", titleEn: "Mars exploration", description: "مراجع عن المريخ والماء والغبار والروبوتات.", descriptionEn: "References about Mars, water, dust, and robotic missions.", sources: excludeSourcePaths(nonReports(collect(documentsById(["mars-world", "mars-water", "space-dust"]))), ["/rover-components/"]) },
    { id: "analogs", title: "مصادر البيئات الأرضية التناظرية", titleEn: "Earth analog sites", description: "مراجع المواقع والتجارب وحدود المقارنة.", descriptionEn: "References about field sites, tests, and comparison limits.", sources: nonReports([...collect(siteDocuments), ...collect(siteAnalogProblems), ...collect(documentsById(["analog-method", "project-map-gallery"]))]) },
    { id: "technical", title: "الرواد والتقنيات والأبحاث", titleEn: "Astronauts, technology, and research", description: "مراجع عن سلامة الرواد، والأجهزة، والتقارير الفنية.", descriptionEn: "References about astronaut safety, technology, and technical research.", sources: technicalSources }
  ];
  const usedSourceUrls = new Set();
  categories.forEach(category => {
    category.sources = category.sources.filter(source => {
      if (!source.url || usedSourceUrls.has(source.url)) return false;
      try {
        const url = new URL(source.url);
        if (url.protocol !== "https:") return false;
      } catch { return false; }
      usedSourceUrls.add(source.url);
      return true;
    });
  });
  const publisherFor = url => {
    try {
      const host = new URL(url).hostname.replace(/^www\./, "");
      const publishers = {
        "nasa.gov": "وكالة ناسا",
        "science.nasa.gov": "علوم ناسا",
        "images.nasa.gov": "مكتبة صور ناسا",
        "images-assets.nasa.gov": "أرشيف صور ناسا",
        "ntrs.nasa.gov": "مستودع تقارير ناسا الفنية",
        "jpl.nasa.gov": "مختبر الدفع النفاث التابع لناسا",
        "usgs.gov": "هيئة المسح الجيولوجي الأمريكية",
        "nps.gov": "خدمة المتنزهات الوطنية الأمريكية",
        "lternet.edu": "شبكة الأبحاث البيئية طويلة الأمد",
        "astrobiology.nasa.gov": "برنامج ناسا لعلم الأحياء الفلكي"
      };
      return publishers[host] || publishers[host.split(".").slice(-2).join(".")] || "جهة علمية";
    } catch { return "مصدر علمي"; }
  };
  const publisherForEnglish = url => {
    try {
      const host = new URL(url).hostname.replace(/^www\./, "");
      const publishers = {
        "nasa.gov": "NASA",
        "science.nasa.gov": "NASA Science",
        "images.nasa.gov": "NASA Images",
        "images-assets.nasa.gov": "NASA Image Archive",
        "ntrs.nasa.gov": "NASA Technical Reports",
        "jpl.nasa.gov": "NASA Jet Propulsion Laboratory",
        "usgs.gov": "U.S. Geological Survey",
        "nps.gov": "U.S. National Park Service",
        "lternet.edu": "Long Term Ecological Research Network"
      };
      return publishers[host] || publishers[host.split(".").slice(-2).join(".")] || "Science source";
    } catch { return "Science source"; }
  };
  const english = window.siteI18n?.language === "en";
  const sourceTitlesArabic = new Map(Object.entries({
    "NASA Lunar Reconnaissance Orbiter": "المسبار الاستطلاعي المداري القمري (LRO) — NASA",
    "NASA Moon factsheet": "صحيفة حقائق القمر — NASA",
    "NASA Moon dust": "غبار القمر — علوم ناسا",
    "Lunar dust and EDS demonstration, NASA": "الغبار القمري وتجربة درع EDS — NASA",
    "Space radiation risk, NASA HRP": "مخاطر الإشعاع الفضائي — برنامج أبحاث الإنسان NASA",
    "EVA thermal control, NASA": "التحكم الحراري أثناء السير الفضائي — NASA",
    "NASA Mars facts": "حقائق عن المريخ — علوم ناسا",
    "NASA Perseverance rover": "مسبار بيرسيفيرانس — NASA",
    "NASA Opportunity: Mars-wide dust storm": "مسبار أوبورتيونيتي والعاصفة الغبارية المريخية — NASA",
    "NASA Earth Observatory: Meteor Crater": "مرصد الأرض التابع لناسا: فوهة ميتيور",
    "Barringer Meteor Crater": "فوهة بارينجر — الموقع الرسمي",
    "USGS Hawaiian Volcano Observatory": "مرصد براكين هاواي — هيئة المسح الجيولوجي الأمريكية",
    "NASA ASTER: Island of Hawaii": "صورة ASTER لجزيرة هاواي — NASA",
    "NASA BASALT": "مشروع BASALT لدراسة الصخور البركانية",
    "NASA: K-10 Rover near Haughton Crater": "العربة الروبوتية K-10 قرب فوهة هوتون — NASA",
    "Haughton-Mars Project": "مشروع هوتون-المريخ",
    "NASA: Dry Streambed in Northern Chile": "مجرى جاف في شمال تشيلي — NASA",
    "NASA Astrobiology": "برنامج ناسا لعلم الأحياء الفلكي",
    "NASA ASTER: Badwater, Death Valley": "صورة ASTER لحوض بادووتر في وادي الموت — NASA",
    "Death Valley National Park": "متنزه وادي الموت الوطني",
    "NASA ASTER: Dry Valleys, Antarctica": "صورة ASTER للوديان الجافة في أنتاركتيكا — NASA",
    "McMurdo Dry Valleys LTER": "برنامج الأبحاث البيئية طويلة الأمد في وديان ماكموردو",
    "NASA GIBS API documentation": "الوثائق التقنية لخدمة صور الأرض NASA GIBS",
    "NASA Earth observation for the sites": "صور ومشاهد رصد الأرض — NASA",
    "NASA Haughton-Mars field work": "العمل الميداني في مشروع هوتون-المريخ — NASA",
    "صندوق الإلكترونيات والتحكم الحراري في Perseverance، NASA": "صندوق الإلكترونيات والتحكم الحراري في مركبة بيرسيفيرانس — NASA",
    "اختبار نماذج Phoenix في الوديان الجافة، NASA NTRS": "اختبار نماذج فينكس لأجهزة التربة في الوديان الجافة — NASA NTRS",
    "NASA: The Human Body in Space": "جسم الإنسان في الفضاء — NASA",
    "NASA: International Space Station research": "الأبحاث العلمية على محطة الفضاء الدولية — NASA",
    "NASA: Space Radiation and Human Exploration": "الإشعاع الفضائي واستكشاف الإنسان — NASA",
    "NASA Moon facts and environment": "حقائق وبيئة القمر — NASA",
    "NASA Human Research Program": "برنامج أبحاث الإنسان — NASA",
    "NASA/JPL Deep Space Network": "شبكة الفضاء العميق — NASA/JPL",
    "NASA Apollo lunar sample catalog": "فهرس عينات أبولو القمرية — NASA",
    "Martian dust measurements and perchlorates, NASA/JPL": "قياسات غبار المريخ والبيركلورات — NASA/JPL",
    "NASA: Water and ice on the Moon": "الماء والجليد على القمر — NASA",
    "NASA Artemis": "برنامج أرتميس لاستكشاف القمر — NASA",
    "NASA MOXIE results": "نتائج تجربة إنتاج الأكسجين MOXIE — NASA"
  }));
  const sourceTitleArabic = source => {
    const title = source.label || source.name || "مرجع علمي";
    if (sourceTitlesArabic.has(title)) return sourceTitlesArabic.get(title);
    return title;
  };
  const sourceTitleEnglish = source => {
    const title = source.label || source.name || "";
    return /[A-Za-z]/.test(title) && !/[\u0600-\u06FF]/.test(title) ? title : `Verified reference from ${publisherForEnglish(source.url)}`;
  };
  const sourceDescription = source => {
    const text = String(source.description || "").replace(/\s+/g, " ").trim();
    const firstSentence = text.split(/(?<=[.!؟])\s+/)[0] || text;
    return firstSentence.length > 110 ? `${firstSentence.slice(0, 107)}…` : firstSentence;
  };
  return `${heading("مصادر موثوقة ومرتبة", "المصادر والمراجع", "اختر الموضوع، اقرأ ما يدعمه المرجع، ثم افتح رابطه الأصلي.")}
    <div class="sources-page">
      ${categories.map(group => `<section class="sources-group sources-group-${group.id}" aria-labelledby="sources-${group.id}-title">
        <header class="sources-group-heading">
          <span class="eyebrow" data-i18n-ar="${group.sources.length} مرجعًا" data-i18n-en="${group.sources.length} references">${group.sources.length} مرجعًا</span>
          <h2 id="sources-${group.id}-title" data-i18n-ar="${escapeHtml(group.title)}" data-i18n-en="${escapeHtml(group.titleEn)}">${group.title}</h2>
          <p data-i18n-ar="${escapeHtml(group.description)}" data-i18n-en="${escapeHtml(group.descriptionEn)}">${group.description}</p>
        </header>
        <div class="sources-grid">
          ${group.sources.map(source => `<article class="source-entry">
            <div class="source-entry-meta"><span class="source-world-tag" data-i18n-ar="${escapeHtml(publisherFor(source.url))}" data-i18n-en="${escapeHtml(publisherForEnglish(source.url))}">${escapeHtml(publisherFor(source.url))}</span></div>
            <h3 data-i18n-ar="${escapeHtml(sourceTitleArabic(source))}" data-i18n-en="${escapeHtml(sourceTitleEnglish(source))}">${escapeHtml(sourceTitleArabic(source))}</h3>
            <p class="source-location"><span data-i18n-ar="يدعم:" data-i18n-en="Supports:">يدعم:</span> <span data-i18n-ar="${escapeHtml(sourceDescription(source))}" data-i18n-en="${escapeHtml(source.descriptionEn ? source.descriptionEn.replace(/\\s+/g, " ").trim().slice(0, 110) : "Information in this section.")}">${escapeHtml(sourceDescription(source))}</span></p>
            <a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><span data-i18n-ar="فتح المصدر الأصلي" data-i18n-en="Open original source">فتح المصدر الأصلي</span> <span aria-hidden="true">↗</span></a>
          </article>`).join("")}
        </div>
      </section>`).join("")}
      <aside class="sources-note">
        <strong data-i18n-ar="كيف نستخدمها؟" data-i18n-en="How are these sources used?">كيف نستخدمها؟</strong>
        <p data-i18n-ar="المراجع تسند معلومات الموقع والمهام. الصور ليست قياسات ميدانية، ومواقع الأرض لا تطابق القمر أو المريخ." data-i18n-en="References support site and mission information. Images are not field measurements, and Earth sites do not replicate the Moon or Mars.">المراجع تسند معلومات الموقع والمهام. الصور ليست قياسات ميدانية، ومواقع الأرض لا تطابق القمر أو المريخ.</p>
      </aside>
    </div>`;
}
function teamPage() {
  return `<div class="team-page-container">
    <img src="assets/team-photo.jpeg" alt="" aria-hidden="true" class="team-page-background">
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
const siteProblemCards = [
    { key: "moon-surface", title: "سطح القمر · الغبار الكهروستاتيكي", icon: "◌", target: "بيئة فضائية · القمر",
      problem: "غبار الريغوليث القمري ناعم وحاد ويمكن أن يلتصق ببدلات الرواد والعدسات والمفاصل.",
      cause: "غياب التجوية بالماء والهواء يبقي الحبيبات زاويّة، وتكسب الجسيمات شحنة بفعل الأشعة فوق البنفسجية والرياح الشمسية. حركة الأقدام والعربات تثير الغبار في بيئة ضعيفة الجاذبية.",
      effect: "يدخل الغبار مع الرواد إلى المقصورة، فيبلي الأختام والوصلات ويخدش الأسطح؛ وقد وثّق رواد Apollo تهيج العينين والجهاز التنفسي. هذا خطر قمري حقيقي، لا نتيجة تجربة في موقع أرضي.",
      cause: "غياب التجوية بالماء والهواء يبقي الحبيبات زاويّة، وتكسب الجسيمات شحنة بفعل الأشعة فوق البنفسجية والرياح الشمسية. حركة الأقدام والعربات تثير الغبار في بيئة ضعيفة الجاذبية.",
      effect: "على سطح القمر يلوث الغبار الأختام والوصلات والبصريات؛ وقد أبلغ رواد Apollo عن تهيج بعد انتقال الغبار إلى المقصورة. هذا خطر قمري حقيقي، لا نتيجة تجربة في موقع أرضي.",
      status: "EDS عُرض على سطح القمر لأسطح محددة؛ عزل البدلات قيد التقييم",
      solution: "استخدم درع NASA الكهرو-ديناميكي EDS مجالًا كهربائيًا لإزاحة الغبار عن أسطح زجاج ومشعّ حراري خلال مهمة Blue Ghost في 2025. النجاح يثبت الإزالة عن تلك الأسطح فقط، لا عن بدلة كاملة أو مأوى. ويُدرس فصل البدلة المتربة عن الحيز النظيف باستخدام suitport أو مدخل متعدد الحجرات؛ لا يُعرض ذلك كحل طارئ معتمد على السطح.",
      sources: [{ label: "غبار القمر ومخاطره، NASA Science", url: "https://science.nasa.gov/moon/moon-dust/" }, { label: "اختبار EDS على سطح القمر، NASA (2025)", url: "https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/" }, { label: "تصاميم احتواء غبار البدلات، NASA/JPL", url: "https://www.nasa.gov/missions/mars-2020-perseverance/nasas-perseverance-offers-clues-to-protect-crews-from-mars-dust/" }] },
    { key: "mars-surface", title: "سطح المريخ · ضغط وغلاف غير قابل للتنفس", icon: "◉", target: "بيئة فضائية · المريخ",
      problem: "غلاف المريخ رقيق جدًا ومعظمه ثاني أكسيد الكربون، ولا يوفّر ضغطًا جزئيًا للأكسجين يسمح بالتنفس البشري.",
      cause: "الضغط السطحي المنخفض وكيمياء الغلاف، لا مجرد نقص الأكسجين، يمنعان التنفس المباشر ويجعلان البيئة غير مناسبة للجسم غير المحمي.",
      effect: "لا يستطيع الرائد العمل خارج بدلة مضغوطة، وأي تسرب في البدلة أو الموطن يهدد دعم الحياة؛ كما يحتاج المأوى إلى إمداد الأكسجين وإزالة CO₂ باستمرار.",
      cause: "الضغط السطحي المنخفض وكيمياء الغلاف، لا مجرد نقص الأكسجين، يمنعان التنفس البشري المباشر ويجعلان البيئة غير مناسبة للجسم غير المحمي.",
      effect: "أي تسرب أو فقد للضغط في البدلة أو الموطن يهدد دعم الحياة فورًا؛ كما يجب أن يعمل نظام المأوى باستمرار لإمداد الأكسجين وإزالة ثاني أكسيد الكربون.",
      status: "موطن مضغوط مطلوب؛ MOXIE عرض إنتاج أكسجين آلي محدود",
      solution: "يحتاج الطاقم موطنًا محكمًا ومنظومة دعم حياة تضبط الضغط والحرارة وتدوّر الهواء وتزيل CO₂. أثبت MOXIE على عربة Perseverance إمكان فصل الأكسجين من CO₂ المريخي، لكنه أنتج كميات تجريبية صغيرة وانتهت مهمته؛ ليس مولدًا بحجم استهلاك طاقم ولا موطنًا مضغوطًا.",
      sources: [{ label: "غلاف المريخ وحقائقه، NASA Science", url: "https://science.nasa.gov/mars/facts/" }, { label: "حصيلة وحدود تجربة MOXIE، NASA/JPL", url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/" }, { label: "مبادئ ضغط البدلة وإزالة CO₂، NASA", url: "https://www.nasa.gov/centers-and-facilities/johnson/spacewalk-spacesuit-basics/" }] },
    { key: "devon-site", title: "جزيرة ديفون · حفر البريشيا المتجمدة", icon: "❄", target: "موقع محاكاة أرضي · فوهة هوتون، القطب الشمالي الكندي",
      problem: "في اختبار NASA لمثقاب TRIDENT داخل فوهة هوتون، واجه الحفر بريشيا اصطدامية متجمدة وبطيئة النفاذية.",
      cause: "عند الطبقة النشطة/الجليد يتغير تماسك التربة؛ وفي الوحدات الكتلية قليلة النفاذية تتراكم نواتج القطع بدل صعودها في لولب المثقاب.",
      effect: "تباطأ المثقاب وظهرت حالتا اختناق واحتباس، ما عطّل جمع العينة وتطلب استعادة الأعطال. هذا تحدٍ لحملة الحفر الروبوتية الأرضية، لا عطل أصاب رواد فضاء.",
      cause: "توجد طبقة جليدية دائمة وبريشيا إسمنتية بالجليد تحت الطبقة النشطة؛ لا تتسرب إليها فتات الصخور الناتجة عن رأس الحفر كما يحدث في ركام مفكك.",
      effect: "تعطل أخذ العينة أو يفرض استعادة المثقاب والتحكم به يدويًا، ما يطيل الحملة الميدانية ويقيّد اختبار الحفر الآلي. هذه مشكلة في محاكاة واستكشاف روبوتي أرضي، وليست عطلًا أصاب رواد فضاء هناك.",
      status: "عطل وُثق ميدانيًا؛ خفض دفعة الحفر عولج به الانسداد في أهداف مماثلة",
      solution: "في تقرير TRIDENT توصي NASA بخفض طول دفعة الحفر من 10 سم إلى 1–2 سم عند الوحدات ضعيفة النفاذية، ورفع المثقاب بوتيرة أكبر لتفريغ الفتات؛ كما يتطلب الجليد الإسمنتي الطرق الإيقاعي ومراقبة العزم. نجح تقليل الدفعة في اختبارات تَفَتّتٍ صعبة أخرى، وتذكره NASA كطريقة تخفيف لا كإزالة دائمة للمشكلة.",
      sources: [{ label: "تحقق مثقاب TRIDENT في مواقع تناظرية، NASA NTRS (2024)", url: "https://ntrs.nasa.gov/citations/20240000585" }, { label: "عربة K-10 قرب فوهة هوتون، مكتبة صور NASA", url: "https://images.nasa.gov/details/ARC-2007-ACD09-0255-001" }, { label: "عرض أتمتة الحفر في فوهة هوتون، NASA NTRS", url: "https://ntrs.nasa.gov/citations/20060026170" }] },
    { key: "atacama-site", title: "صحراء أتاكاما · كشف مؤشرات الحياة في تربة شبه عقيمة", icon: "⌕", target: "موقع محاكاة أرضي · محيط يونغاي، تشيلي",
      problem: "سجلت دراسات NASA في أجزاء شديدة الجفاف من أتاكاما مادة عضوية قليلة جدًا، ولم تُعزل كائنات قابلة للزرع من بعض العينات.",
      cause: "ندرة الماء السائل والجفاف طويل الأمد يخفضان الكتلة الحيوية والإشارات الكيميائية القابلة للكشف؛ كما يتعرض السطح للأكسدة والأشعة.",
      effect: "قد تنتج أدوات الكشف نتيجة سالبة بسبب ضآلة الإشارة أو موضع العينة، وقد يسبب سوء مناولة العينة تلوثًا أو يحجب إشارة دقيقة. عدم الكشف في عينة لا يثبت خلو الصحراء كلها من الحياة.",
      cause: "الجفاف طويل الأمد وقلة الماء السائل والكتلة الحيوية المنخفضة تحد من المركبات الحيوية في السطح؛ كما أن التعرض السطحي للأكسدة والأشعة قد يقلل حفظ بعض الجزيئات.",
      effect: "قد يفشل المختبر الميداني في رصد مقدار ضئيل من البصمات الحيوية أو يخلط بين تلوث العينة وإشارتها الأصلية؛ ويصبح العمق وطريقة الحفظ وحساسية القياس عوامل حاسمة.",
      status: "ARADS اختبر الحفر وتحليل العينات عن بعد في أتاكاما؛ لا يثبت وجود حياة",
      solution: "طوّر برنامج NASA ARADS حفرًا روبوتيًا حتى نحو متر، ومناولة عينات وأجهزة كشف تُشغّل وفق بروتوكولات شبيهة بالمهمات. الوصول إلى ما تحت السطح يقلل أثر التعرض السطحي، مع ضبط العينات الفارغة والتنظيف لتقليل التلوث. توثق NASA أيضًا صعوبات الطاقة والاهتزاز التي منعت تشغيل بعض الأجهزة معًا؛ لذا يلزم جدولة تشغيلها بدل جمعها في قراءة متزامنة.",
      sources: [{ label: "انخفاض المادة العضوية في تربة أتاكاما، NASA NTRS", url: "https://ntrs.nasa.gov/citations/20050173968" }, { label: "مهمة حفر ومحاكاة كشف الحياة في أتاكاما، NASA NTRS", url: "https://ntrs.nasa.gov/citations/20220005416" }, { label: "حفر ARADS بعمق متر واختبار العينات، NASA NTRS", url: "https://ntrs.nasa.gov/citations/20210010250" }, { label: "دروس ARADS في الطاقة والاهتزاز والتنظيف، NASA NTRS (2024)", url: "https://ntrs.nasa.gov/citations/20240000586" }] },
    { key: "death-valley-site", title: "وادي الموت · حرارة بادووتر وتغيّر الحوض", icon: "☀", target: "موقع محاكاة أرضي · حوض بادووتر، كاليفورنيا",
      problem: "في حوض بادووتر تتعرض المعدات للحمل الحراري الصحراوي، كما قد يتغير السطح الجاف مؤقتًا بعد هطول نادر.",
      cause: "تجتمع الحرارة والإشعاع الشمسي في حوض منخفض، بينما قد يركز الحوض المغلق جريان عاصفة نادرة. وثقت NASA بعد عاصفة هيلاري في 2023 بحيرة مؤقتة بعمق يقارب 60 سم توقعت أن تتبخر خلال أسابيع.",
      effect: "قد تتغير قابلية المرور والقشرة الملحية بين حملة وأخرى، وتتجاوز حرارة الجهاز مجال معايرته؛ لذلك قد تصبح خريطة قديمة أو عينة غير مؤرخة أساسًا مضللًا للمحاكاة.",
      cause: "تجمع الجريان النادر في الحوض المغلق؛ ويضيف الحمل الحراري الصحراوي تعرضًا مباشرًا طويلًا للإلكترونيات والبطاريات وأجهزة القياس.",
      effect: "قد تتغير قابلية المرور والقشرة الملحية بين حملة وأخرى، كما قد تتجاوز حرارة الجهاز مجال معايرته؛ لذلك لا يصح استخدام خريطة قديمة أو قراءة غير مرتبطة بزمنها.",
      status: "توصية لمحاكاة الموقع؛ لا تدّعي الصفحة حملة NASA مأهولة في بادووتر",
      solution: "قبل كل حملة، تُحدّث خريطة المسار ببيانات فضائية وقياس أرضي بعد الهطول، وتُوقَف الحركة فوق القشرة المغمورة أو غير المتماسكة. تُعاير الأجهزة على مجال الحرارة المتوقع، وتُحفظ الإلكترونيات في حيز معزول ذي مراقبة حرارية؛ تستخدم عربة Perseverance صندوقًا إلكترونيًا مضبوط الحرارة ومراقبة مستمرة للحرارة والطاقة، لكن هذا العتاد لم يُختبر في بادووتر.",
      sources: [{ label: "فيضانات بحيرة بادووتر المؤقتة، NASA ASTER", url: "https://images.nasa.gov/details/PIA26197" }, { label: "موجز NASA عن وادي الموت كموقع نظير", url: "https://ntrs.nasa.gov/citations/20150005824" }, { label: "صندوق الإلكترونيات والتحكم الحراري في Perseverance، NASA", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }] },
    { key: "mcmurdo-site", title: "الوديان الجافة · قياس الماء تحت السطح القطبي", icon: "❄", target: "موقع محاكاة أرضي · ماكموردو، أنتاركتيكا",
      problem: "تجمع الوديان الجافة بين هواء شديد الجفاف ومواضع معزولة من الجليد أو المياه المغطاة بالجليد تحت السطح.",
      cause: "تختلف رطوبة السطح عن محتوى التربة والجليد المدفون؛ والبرد والعزلة يجعلان تسخين العينة أو تلوثها أثناء الجمع خطرًا على القياس.",
      effect: "قد تخفق عينة سطحية في كشف الماء أو الكيمياء تحت السطح، كما تتطلب التجارب نقل أجهزة ومعالجة عينات معقمة في موقع بعيد. هذا تحدٍ لفرق المحاكاة والبحث القطبي، لا مهمة رواد فضاء فعلية.",
      cause: "البرودة والجفاف يحصران الماء في مواضع وأشكال غير ظاهرة؛ وقد يؤدي تسخين العينة أو تلوثها أثناء الجمع إلى تغيير القياس الكيميائي أو البيولوجي.",
      effect: "تحتاج فرق المحاكاة إلى حفر وأخذ عينات معقمة وقياس حرارة/رطوبة مضبوطين في موقع بعيد ومعزول؛ وإلا قد يُخلط بين عدم الكشف عن الماء وغيابه فعلًا.",
      status: "اختبرت NASA نماذج أجهزة ومناولات عينات ميدانيًا؛ ليست أنظمة طيران معتمدة",
      solution: "أخذت حملة NASA نماذج هندسية من مختبر الكيمياء الرطب WCL ومسبار التوصيل والحرارة TECP إلى الوديان الجافة، وأجرت قياسات مماثلة وجمعت عينات معقمة لتحليلها لاحقًا. كما طوّر واختبر مشروع NASA ASTEP مفهوم مثقاب فوق صوتي لأخذ عينات من بيئة بحيرة Vida المغطاة بالجليد. هذه تجارب تطويرية لجمع عينات تحت السطح، وليست معدات طيران معتمدة، ولا دليلًا على وجود ماء متاح في كل نقطة من الوادي.",
      sources: [{ label: "اختبار نماذج Phoenix في الوديان الجافة، NASA NTRS", url: "https://ntrs.nasa.gov/citations/20100003844" }, { label: "مثقاب فوق صوتي لأخذ عينات من بحيرة مغطاة بالجليد، NASA ASTEP", url: "https://ntrs.nasa.gov/citations/20040085662" }, { label: "وصف جفاف الوديان، مكتبة صور NASA ASTER", url: "https://images.nasa.gov/details/PIA12461" }] },
    { key: "hawaii-site", title: "ماونا لوا · حركة الروبوت فوق تدفقات الحمم", icon: "⌖", target: "موقع محاكاة أرضي · تضاريس بركانية",
      problem: "تتضمن حقول الحمم المتصلبة حول ماونا لوا تضاريس وعرة، ولا تكشف الصور الفضائية الإقليمية وحدها كل عائق على مقياس عجلة أو قدم.",
      cause: "تختلف خشونة تدفقات الحمم وشقوقها ونتوءاتها من موضع لآخر؛ وتبلغ دقة قنوات ASTER المعروضة نحو 15–90 مترًا، وهي غير كافية وحدها لتخطيط عبور دقيق.",
      effect: "قد يختار فريق الاختبار مسارًا غير قابل للعبور أو يعرّض العجلات للتآكل على الصخور الحادة. هذا خطر على تجربة الروبوت أو فريق المحاكاة، وليس تقريرًا عن تجربة NASA مأهولة في ماونا لوا.",
      cause: "الصور الحرارية والطيفية مناسبة لرؤية الأنماط الإقليمية، أما فجوات التدفقات والنتوءات الصغيرة فتحتاج تصويرًا مجسمًا قريبًا وقياس ميل المسار.",
      effect: "قد تُستنتج قابلية عبور من مظهر مداري عام لا من تضاريس موضعية، فتتعثر مركبة الاختبار أو تتعرض العجلات للتآكل. هذا خطر على تجربة الروبوت أو فريق المحاكاة، وليس تقريرًا عن تجربة NASA مأهولة في ماونا لوا.",
      status: "تخطيط مقترح للموقع؛ تقنيات العجلات والكاميرات مثبتة على عربة مريخية",
      solution: "امسح المسار ميدانيًا بكاميرات مجسمة، صنّف الصخور والشقوق ومناطق الميل، وحدد نقاط منع المرور قبل التجربة. على Perseverance تستخدم NASA كاميرات HazCams لتقييم الصخور والحفر والكثبان، وأُعيد تصميم العجلات بعد تآكل عجلات Curiosity على الصخور الحادة؛ هذه حلول روبوتية مستعملة على المريخ ويمكن اختبارها في الموقع بعد مسح وتصريح، لا ادعاء أنها اختُبرت هناك من قبل.",
      sources: [{ label: "ASTER يصور جزيرة هاواي وماونا لوا، NASA", url: "https://images.nasa.gov/details/PIA02604" }, { label: "عجلات وكاميرات تفادي الأخطار في Perseverance، NASA", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }] },
    { key: "meteor-site", title: "فوهة ميتيور (بارينجر) · حدود تشبيه الفوهة", icon: "◎", target: "موقع محاكاة أرضي · أريزونا",
      problem: "سجل NASA يعرّف المكان باسم Meteor Crater في أريزونا: فوهة اصطدام قطرها نحو 4,000 قدم تشكلت قبل قرابة 50 ألف سنة؛ ليست قبة.",
      cause: "الفوهة في صحراء مرتفعة على الأرض؛ جاذبيتها وغلافها الجوي والتعرية التي تعرضت لها تختلف عن القمر، رغم أن شكل الاصطدام مفيد للمقارنة.",
      effect: "قد تؤدي مساواة التضاريس الأرضية بالقمر إلى استنتاج خاطئ عن الحركة أو المنحدرات أو توزيع المقذوفات. سجل صورة NASA يثبت هوية الموقع ولا يثبت أنه استُخدم لتدريب رواد أو في محاكاة NASA.",
      cause: "العمليات الأرضية والغلاف الجوي غيّرا الحافة والمواد منذ الاصطدام، كما أن الحركة على جاذبية الأرض لا تمثل توازن رائد أو مركبة على سطح قمري.",
      effect: "قد تؤدي مقارنة غير مضبوطة إلى استنتاجات خاطئة عن شكل المقذوفات أو سلامة السير على المنحدرات. لا يثبت سجل NASA للصورة أن الموقع نفسه استُخدم لتدريب رواد أو لإجراء محاكاة NASA.",
      status: "هوية ومورفولوجيا موثقتان؛ المقارنة مع القمر تحليل مكتبي لا تجربة مأهولة",
      solution: "ثبّت المقارنة على عناصر قابلة للرصد فقط: الحافة، الجدار، القاع والمواد المقذوفة. قارنها بخرائط الارتفاع ثلاثية الأبعاد وبيانات LOLA من المسبار القمري LRO، ودوّن اختلاف الجاذبية والتعرية بدل استنتاج قابلية حركة الرواد من الموقع الأرضي. يوفّر LRO خرائط ارتفاع تساعد NASA على دراسة التضاريس واختيار مواقع هبوط آمنة.",
      sources: [{ label: "Meteor Crater في أريزونا، NASA Image Library (2026)", url: "https://images.nasa.gov/details/iss074e0208832" }, { label: "رسم خرائط القمر وقياس الارتفاع LOLA، NASA LRO", url: "https://science.nasa.gov/mission/lro/" }] }
];

function problemsPage() {
  const problems = siteProblemCards;
  const localized = (arabic, english) => `data-i18n-ar="${escapeHtml(arabic)}" data-i18n-en="${escapeHtml(english)}"`;
  const targetLabels = {
    "moon-surface": "Space environment · Moon",
    "mars-surface": "Space environment · Mars",
    "devon-site": "Earth analog site · Haughton Crater, Canadian Arctic",
    "atacama-site": "Earth analog site · Yungay area, Chile",
    "death-valley-site": "Earth analog site · Badwater Basin, California",
    "mcmurdo-site": "Earth analog site · McMurdo Dry Valleys, Antarctica",
    "hawaii-site": "Earth analog site · volcanic terrain",
    "meteor-site": "Earth analog site · Arizona"
  };
  const pageIntro = "ثماني بطاقات تربط كل تحدٍ بمكانه المحدد، وتفصل بين خبرة NASA الموثقة والمقترحات الخاصة بحملات المحاكاة الأرضية.";
  const pageIntroEn = "Eight cards connect each challenge to a specific place, distinguishing documented NASA work from proposals for Earth-analog campaigns.";
  const overview = "القمر والمريخ بيئتان فضائيتان؛ أما ديفون وأتاكاما ووادي الموت وماكموردو وماونا لوا وفوهة ميتيور فهي مواقع أرضية لمحاكاة أسئلة محددة. لا تنسب البطاقات مشكلات المواقع الأرضية إلى رواد فضاء حقيقيين، ولا تدّعي تنفيذ NASA تجربة في موقع بعينه إلا حين يذكر المصدر ذلك. إحداثيات المواقع الأرضية في المنصة تقريبية، وقد لا تطابق نقطة الحملة البحثية المنشورة.";
  const overviewEn = "The Moon and Mars are space environments. Devon Island, the Atacama, Death Valley, McMurdo, Mauna Loa, and Meteor Crater are Earth sites used to study specific questions. These cards do not attribute Earth-site challenges to real astronauts or claim that NASA tested a particular site unless a source says so. Coordinates shown here are approximate and may not match a published campaign location.";
  return `${heading("مواقع الاستكشاف ونظائرها الأرضية", "مشكلة وحل لكل موقع", pageIntro)}
  <section class="panel problems-page-panel">
    <div class="problems-intro">
      <p ${localized(overview, overviewEn)}>${overview}</p>
    </div>
    <div class="problems-grid">
      ${problems.map(item => {
        const englishFields = GUIDE_PROBLEM_ENGLISH[item.key] || {};
        return `
        <article class="problem-card risk-card ${item.key}">
          <div class="problem-card-heading"><div class="problem-icon" aria-hidden="true">${item.icon}</div><span class="problem-target" ${localized(item.target, targetLabels[item.key] || item.target)}>${escapeHtml(item.target)}</span></div>
          <div class="problem-content">
            <h2 ${localized(item.title, GUIDE_PROBLEM_ENGLISH_TITLES[item.key] || item.title)}>${escapeHtml(item.title)}</h2>
            <div class="problem-pair">
              <div class="problem-box problem-box-problem">
                <span class="problem-label" ${localized("المشكلة", "The challenge")}>المشكلة</span>
                <p ${localized(item.problem, englishFields.problem || item.problem)}>${escapeHtml(item.problem)}</p>
                <p><strong ${localized("السبب:", "Why it happens:")}>السبب:</strong> <span ${localized(item.cause, englishFields.cause || item.cause)}>${escapeHtml(item.cause)}</span></p>
                <p><strong ${localized("الأثر على الاستكشاف:", "Impact on exploration:")}>الأثر على الاستكشاف:</strong> <span ${localized(item.effect, englishFields.effect || item.effect)}>${escapeHtml(item.effect)}</span></p>
              </div>
              <div class="problem-box problem-box-solution">
                <span class="problem-label" ${localized(`الحل · ${item.status}`, `Response · ${englishFields.status || item.status}`)}>الحل · ${escapeHtml(item.status)}</span>
                <p ${localized(item.solution, englishFields.solution || item.solution)}>${escapeHtml(item.solution)}</p>
              </div>
            </div>
          </div>
        </article>
      `;}).join("")}
    </div>
  </section>
  <div class="page-actions" style="margin-top:24px;text-align:center;">
    <a class="button secondary" href="#team" ${localized("العودة إلى صفحة الفريق ←", "Back to the team page ←")}>العودة إلى صفحة الفريق ←</a>
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
        <div class="site-en">${escapeHtml(site.country)} · ${escapeHtml(site.subsite)}</div>
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
  const pageNames = { home: "الرئيسية", lunar: "البيئات المشابهة للقمر", "mars-analogs": "البيئات المشابهة للمريخ", map: "الخريطة التفاعلية", gallery: "معرض الصور", why: "لماذا تهمنا هذه البيئات؟", game: "مستكشف الفضاء", sources: "المصادر", team: "عن الفريق", problems: "مشاكل وحلول رواد الفضاء" };
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
  if (kind === "game" && gamePresentation.active && spaceGame.character === "astronaut") {
    pageRoot.querySelector(".game-world-shell")?.classList.add("astronaut-game");
    pageRoot.querySelector(".game-mission-clock")?.remove();
    const missionLabel = pageRoot.querySelector(".game-mission-index");
    if (missionLabel) missionLabel.textContent = "المهمة 01";
  }
  const retryButton = kind === "game" && gamePresentation.active
    ? pageRoot.querySelector('#game-over-overlay [data-game-action="reset"]')
    : null;
  if (retryButton) retryButton.dataset.gameAction = "restart-mission";
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
  if (guideStarted) updateGuidePrompts();
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
  const gibsAttribution = 'الصور: <a href="https://nasa-gibs.github.io/gibs-api-docs/" target="_blank" rel="noopener noreferrer">NASA GIBS / ESDIS</a>';
  const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { maxZoom: 19, attribution: 'الصور: &copy; <a href="https://www.esri.com" target="_blank">Esri</a>, Maxar, Earthstar Geographics, USDA, USGS', crossOrigin: true, keepBuffer: 2 });
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
function answerQuestionLegacy(question) {
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

const GUIDE_TOPIC_ALIASES = {
  comparison: ["compare", "comparison", "difference", "similar", "similarity", "versus", "vs", "قارن", "مقارنة", "فرق", "الفرق", "اختلاف", "اوجه الشبه", "وجه الشبه", "تشابه"],
  geology: ["geology", "geological", "terrain", "surface", "rock", "rocks", "crater", "lava", "volcanic", "جيولوجيا", "تضاريس", "سطح", "صخر", "صخور", "فوهة", "حمم", "بركان", "البازلت"],
  soil: ["soil", "regolith", "sediment", "sand", "gravel", "sample", "samples", "تربة", "التراب", "ريغوليث", "رواسب", "رمل", "حصى", "عينه", "عينات"],
  water: ["water", "ice", "frost", "brine", "humidity", "ماء", "مياه", "جليد", "ثلج", "صقيع", "رطوبة", "ملوحة", "مياه جوفية"],
  atmosphere: ["atmosphere", "pressure", "air", "oxygen", "breathe", "co2", "غلاف جوي", "ضغط", "هواء", "اكسجين", "تنفس", "ثاني اكسيد الكربون"],
  climate: ["climate", "weather", "temperature", "heat", "hot", "cold", "حرارة", "حراره", "طقس", "مناخ", "بارد", "برودة", "حر"],
  dust: ["dust", "dust storm", "dust storms", "غبار", "غبار قمري", "غبار مريخي", "عاصفة ترابية", "عواصف ترابية", "تراب"],
  radiation: ["radiation", "cosmic ray", "solar particle", "اشعاع", "إشعاع", "اشعة", "أشعة", "شعاع"],
  biology: ["life", "biology", "microbe", "microbial", "biosignature", "organic", "كائن", "حياة", "احياء", "ميكروب", "مؤشر حيوي", "بصمة حيوية", "مادة عضوية"],
  robotics: ["robot", "robotic", "rover", "wheel", "mobility", "vehicle", "drill", "روبوت", "روبوتات", "عربة", "عربات", "مركبة", "مركبات", "جوالة", "عجلات", "حفر", "مثقاب"],
  mission: ["mission", "nasa", "artemis", "apollo", "perseverance", "curiosity", "moxie", "lro", "بعثة", "مهمة", "ناسا", "ارتميس", "ابولو", "بيرسيفيرانس", "كوريوسيتي"],
  analog: ["analog", "analogue", "simulation", "simulate", "test", "testing", "field test", "تناظري", "محاكاة", "يحاكي", "اختبار", "تجربة", "ميداني"],
  engineering: ["engineering", "equipment", "technology", "solution", "problem", "challenge", "risk", "engineer", "هندسي", "معدات", "تقنية", "حل", "مشكلة", "تحدي", "خطر", "مخاطر"],
  landing: ["landing", "touchdown", "hazard avoidance", "navigation", "هبوط", "هبوط المركبة", "تجنب العوائق", "ملاحة", "صخور", "منحدر"],
  isolation: ["isolation", "confinement", "crew", "sleep", "psychology", "عزلة", "انغلاق", "حصر", "طاقم", "نوم", "نفسي"],
  map: ["map", "imagery", "image", "gallery", "gis", "خريطة", "صور", "صورة", "معرض", "طبقة"],
  sources: ["source", "sources", "reference", "references", "citation", "مراجع", "مصدر", "مصادر", "مرجع", "توثيق"],
  methodology: ["method", "methodology", "criteria", "how do you compare", "منهج", "منهجية", "معيار", "كيف تقارن", "كيف نقارن"],
  game: ["game", "controls", "play", "لعبة", "اللعبة", "التحكم", "العب", "تحكم"]
};

const GUIDE_STOP_WORDS = new Set(("في من على الى إلى عن مع ما ماذا هل هو هي هم هذا هذه ذلك تلك كيف لماذا ليش وين اين where what which who when why how the and or to of for in on at as is are be do does can may a an it we you them der die das und oder von zu im am ein eine einheit der dieser que el la los y con de en a para" ).split(/\s+/));
const GUIDE_SITE_ALIASES = {
  atacama: ["اتاكاما", "اتاكما", "اتاكامه", "اتاكاما", "يونغاي", "yungay", "atacama"],
  hawaii: ["هاواي", "هاواى", "ماونا لوا", "مونا لوا", "mauna loa", "hawaii"],
  "death-valley": ["وادي الموت", "بادووتر", "بادواتر", "death valley", "badwater"],
  mcmurdo: ["الوديان الجافة", "وديان ماكموردو", "ماكموردو", "مكموردو", "mcmurdo", "dry valleys", "antarctic dry valleys"],
  devon: ["جزيرة ديفون", "ديفون", "فوهة هوتون", "هوتون", "devon island", "haughton crater", "haughton"],
  "meteor-crater": ["فوهة ميتيور", "فوهة ميتيور كريتر", "ميتيور كريتر", "فوهة بارينجر", "بارينجر", "meteor crater", "barringer crater"]
};
const GUIDE_WORLD_ALIASES = {
  moon: ["القمر", "قمري", "قمر", "moon", "lunar"],
  mars: ["المريخ", "مريخي", "مريخ", "الكوكب الاحمر", "mars", "martian", "red planet"],
  earth: ["الارض", "ارض", "earth", "terrestrial"]
};

const GUIDE_REFERENCE_DOCUMENTS = [
  { id: "moon-world", type: "reference", title: "القمر وخصائصه", enTitle: "The Moon", aliases: ["القمر", "moon", "lunar world"], topics: ["moon", "geology", "gravity", "water", "climate", "dust", "radiation"], ar: "القمر جسم صخري بلا غلاف جوي كثيف وله جاذبية أقل كثيرًا من الأرض. ترسم مهمة LRO تضاريسه ثلاثية الأبعاد وتقيس خصائص السطح وموارده، وتساعد بياناتها في اختيار مواقع هبوط مناسبة. قد يوجد جليد ماء في مناطق قطبية مظللة؛ لا يعني ذلك توفره في أي نقطة أو كونه موردًا جاهزًا للاستخدام.", en: "The Moon is a rocky world without a substantial atmosphere and has much lower gravity than Earth. NASA's Lunar Reconnaissance Orbiter maps its topography and measures surface properties to support landing-site selection. Water ice may occur in permanently shadowed polar regions; that does not make it available at every location or ready for use.", sources: [{ label: "NASA Lunar Reconnaissance Orbiter", url: "https://science.nasa.gov/mission/lro/" }, { label: "NASA Moon factsheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html" }, { label: "NASA Moon dust", url: "https://science.nasa.gov/moon/moon-dust/" }] },
  { id: "mars-world", type: "reference", title: "المريخ وخصائصه", enTitle: "Mars", aliases: ["المريخ", "mars", "red planet", "الكوكب الاحمر"], topics: ["mars", "geology", "atmosphere", "climate", "water", "dust", "gravity"], ar: "المريخ كوكب صخري ذو غلاف جوي رقيق يغلب عليه ثاني أكسيد الكربون؛ لا يمكن التنفس خارجه. تتغير درجات الحرارة والطقس حسب المكان والفصل، وقد ترفع الرياح غبارًا إقليميًا أو عالميًا. ترصد المركبات الجليد والتاريخ الجيولوجي، لكن بيانات موقع واحد لا تمثل الكوكب كله.", en: "Mars is a rocky planet with a thin atmosphere dominated by carbon dioxide; its air is not breathable. Temperature and weather vary by location and season, and winds can raise regional or global dust storms. Rovers study ice and geological history, but measurements from one site do not represent the entire planet.", sources: [{ label: "NASA Mars facts", url: "https://science.nasa.gov/mars/facts/" }, { label: "NASA Perseverance rover", url: "https://science.nasa.gov/mission/mars-2020-perseverance/" }] },
  { id: "mars-water", type: "reference", title: "الماء والجليد على المريخ", enTitle: "Water and ice on Mars", aliases: ["ماء المريخ", "الجليد على المريخ", "mars water", "mars ice", "water on mars"], topics: ["mars", "water", "resources", "missions"], ar: "توجد على المريخ أدلة على ماء قديم، ويوجد اليوم جليد مائي تحت السطح وفي المناطق القطبية. تبحث المهمات عن الماء بمدارات ومستشعرات وحفر روبوتي؛ أما استخراج الماء وتنقيته للاستخدام البشري فيحتاج نظامًا مصممًا ومختبرًا، ولا يثبت رصد الجليد وحده سهولة الوصول إليه.", en: "Mars preserves evidence of ancient liquid water, and water ice exists beneath the surface and in polar regions today. Missions search using orbital instruments and robotic sampling; extracting and purifying water for human use requires a dedicated, validated system. Detecting ice does not by itself prove it is easy to reach.", sources: [{ label: "NASA Mars facts", url: "https://science.nasa.gov/mars/facts/" }, { label: "NASA Perseverance rover components and sample systems", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }] },
  { id: "planet-comparison", type: "reference", title: "مقارنة القمر والمريخ والأرض", enTitle: "Moon, Mars, and Earth comparison", aliases: ["مقارنة الكواكب", "الفرق بين القمر والمريخ", "moon vs mars", "moon and mars", "earth moon mars"], topics: ["comparison", "moon", "mars", "earth", "gravity", "atmosphere", "climate"], ar: "القمر عالم صخري بلا غلاف جوي كثيف، بينما للمريخ غلاف رقيق غني بثاني أكسيد الكربون. جاذبية القمر نحو 1/6 من جاذبية الأرض، وجاذبية المريخ نحو 0.38g. تختلف الحرارة والموارد والتضاريس بينهما وبين الأرض؛ لذلك لا تحاكي المواقع الأرضية إلا سؤالًا أو عملية محددة.", en: "The Moon is a rocky world without a substantial atmosphere, while Mars has a thin carbon-dioxide-rich atmosphere. Lunar gravity is about one-sixth of Earth's; Martian gravity is about 0.38g. Terrain, temperature, and resources differ, so an Earth analog reproduces only a specific question or operation, not an entire world.", sources: [{ label: "NASA Moon factsheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html" }, { label: "NASA Mars facts", url: "https://science.nasa.gov/mars/facts/" }] },
  { id: "mars-robots", type: "reference", title: "الروبوتات والاستكشاف الميداني", enTitle: "Rovers and field exploration", aliases: ["الروبوتات", "المركبات الروبوتية", "rovers", "robot exploration", "rover wheels"], topics: ["robotics", "engineering", "geology", "missions", "landing"], ar: "تستخدم مركبات مثل Perseverance عجلات ونظام تعليق وكاميرات ملاحة وتفادي أخطار، وتتحرك بحذر فوق الصخور والمنحدرات. في Devon وAtacama اختُبرت عمليات الحفر وأخذ العينات عن بعد على الأرض. تجارب النظير تساعد على كشف أعطال الإجراءات والأدوات، لكنها لا تمثل ظروف المريخ الفيزيائية.", en: "Rovers such as Perseverance use wheels, suspension, navigation cameras, and hazard-detection cameras to move carefully around rocks and slopes. Field tests in Devon and the Atacama have exercised remote drilling and sampling operations on Earth. Analog campaigns can expose procedural and hardware faults, but they do not reproduce Mars physics.", sources: [{ label: "NASA Perseverance rover components", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }, { label: "NASA TRIDENT field validation", url: "https://ntrs.nasa.gov/citations/20240000585" }, { label: "NASA ARADS Atacama drilling", url: "https://ntrs.nasa.gov/citations/20220005416" }] },
  { id: "nasa-missions", type: "reference", title: "بعثات NASA للقمر والمريخ", enTitle: "NASA Moon and Mars missions", aliases: ["مهمات ناسا", "بعثات ناسا", "future nasa missions", "artemis", "apollo", "perseverance", "curiosity", "moxie", "lro"], topics: ["mission", "moon", "mars", "robotics", "resources"], ar: "تشمل سجلات NASA القمرية بعثات Apollo وLRO وبرنامج Artemis الجاري للتحضير لاستكشاف مأهول جديد. وعلى المريخ تدرس مركبتا Curiosity وPerseverance الجيولوجيا والبيئة؛ كما اختبر MOXIE إنتاج الأكسجين من CO₂ ضمن عرض تقني صغير انتهى، وليس نظام دعم حياة للطاقم.", en: "NASA's lunar exploration includes Apollo, the Lunar Reconnaissance Orbiter, and the ongoing Artemis campaign preparing for renewed crewed exploration. On Mars, Curiosity and Perseverance study geology and environment. MOXIE demonstrated small-scale oxygen production from CO2, but it has ended and is not a crew life-support system.", sources: [{ label: "NASA LRO", url: "https://science.nasa.gov/mission/lro/" }, { label: "NASA Artemis", url: "https://www.nasa.gov/humans-in-space/artemis/" }, { label: "NASA Mars 2020 Perseverance", url: "https://science.nasa.gov/mission/mars-2020-perseverance/" }, { label: "NASA MOXIE results", url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/" }] },
  { id: "analog-method", type: "reference", title: "منهجية المواقع التناظرية وحدودها", enTitle: "Analog-site methodology and limits", aliases: ["كيف نستخدم المواقع", "منهجية المحاكاة", "earth analog sites", "analog methodology", "حدود التشابه"], topics: ["analog", "methodology", "comparison", "sources"], ar: "يبدأ العمل التناظري بسؤال محدد، مثل اختبار مثقاب أو إجراء مناورة أو تحليل عينة؛ ثم تُختار بيئة أرضية تلائم هذا السؤال وتُقاس خصائصها. يجب فصل ما قيس فعلًا عن الصور الفضائية والوصف العام، وتوثيق الموقع والتاريخ والأداة. لا تحاكي الأرض جاذبية القمر أو ضغط المريخ أو الإشعاع الفضائي.", en: "Analog work starts with a defined question—such as drill performance, a traverse procedure, or sample analysis—then selects an Earth setting relevant to that question and measures it. Keep measurements separate from satellite imagery and general descriptions, and document location, date, and instrument. Earth does not reproduce lunar gravity, Martian pressure, or space radiation.", sources: [{ label: "NASA Haughton-Mars field work", url: "https://ntrs.nasa.gov/citations/20060013129" }, { label: "NASA Atacama ARADS lessons", url: "https://ntrs.nasa.gov/citations/20240000586" }] },
  { id: "project-map-gallery", type: "reference", title: "خريطة وصور المشروع", enTitle: "Project map and images", aliases: ["ماذا تعرض الخريطة", "مصدر الصور", "صور الموقع", "map layers", "gallery photos"], topics: ["map", "sources", "images"], ar: "تعرض الخريطة مواقع أرضية فقط، وعلاماتها نقاط مرجعية تقريبية وليست حدودًا أو محطات قياس. صور NASA ASTER أو الصور المدارية توثق مشاهد وتواريخ محددة؛ لا تقيس وحدها كيمياء التربة أو حالة الطقس الحالية. طبقات الخريطة تعتمد NASA GIBS عند توفر الاتصال.", en: "The map displays Earth sites only; markers are approximate reference points, not surveyed boundaries or measurement stations. NASA ASTER or orbital images document specific scenes and dates; they do not by themselves measure soil chemistry or current weather. Map imagery uses NASA GIBS layers when online.", sources: [{ label: "NASA GIBS API documentation", url: "https://nasa-gibs.github.io/gibs-api-docs/" }, { label: "NASA Earth observation for the sites", url: "https://images.nasa.gov/" }] },
  { id: "project-game", type: "reference", title: "لعبة Space Explorer والعينات", enTitle: "Space Explorer game and samples", aliases: ["كيف ألعب", "طريقة اللعب", "عينات اللعبة", "space explorer controls", "virtual samples"], topics: ["game", "robotics", "soil", "missions"], ar: "لعبة Space Explorer محاكاة تعليمية ثلاثية الأبعاد. عينات المواقع الأرضية افتراضية، ومسارات القمر والمريخ مبنية بصريًا على سجلات المهمات وليست بعثات حقيقية أو عينات ميدانية. على الكمبيوتر: WASD للحركة، E للتفاعل، Space للقفز/الدفع، وShift للجري. على اللمس استخدم عصا الحركة والأزرار الظاهرة.", en: "Space Explorer is an educational 3D simulation. Earth-site samples are virtual, and the Moon/Mars scenes are visual mission-inspired simulations—not real missions or field samples. On desktop: WASD moves, E interacts, Space jumps/boosts, and Shift runs. On touch devices, use the joystick and on-screen controls.", sources: [{ label: "NASA Mars 2020 sample collection", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }, { label: "NASA Apollo lunar sample catalog", url: "https://curator.jsc.nasa.gov/lunar/" }] }
];

GUIDE_REFERENCE_DOCUMENTS.push(
  { id: "soil-earth-mars", type: "reference", title: "تربة المريخ وترب الأرض", enTitle: "Martian regolith and Earth soils", aliases: ["تربة المريخ والارض", "تربة المريخ", "mars soil", "martian soil", "earth soil", "regolith comparison"], topics: ["soil", "mars", "earth", "comparison", "biology"], ar: "لا توجد تربة أرضية واحدة للمقارنة، كما أن مادة سطح المريخ ريغوليث معدني وليست تربة زراعية مماثلة لترب الأرض. في مناطق أتاكاما شديدة الجفاف سجلت دراسات NASA مادة عضوية قليلة جدًا؛ وعلى المريخ تقيس Perseverance غبارًا معدنيًا دقيقًا وقد رُصدت مركبات مثل البيركلورات. يجب مقارنة عينة محددة بتحليلها وسياقها، لا تعميم نتيجة أتاكاما على كل الأرض أو المريخ.", en: "There is no single Earth soil for comparison, and Martian surface material is mineral regolith rather than ordinary agricultural soil. NASA studies found very low organic matter in some hyper-arid Atacama samples; Perseverance has measured fine mineral dust on Mars, where compounds such as perchlorates have also been detected. Compare a defined sample and method instead of generalizing one Atacama result to all Earth or Mars.", sources: [{ label: "Low organic matter in hyper-arid Atacama samples, NASA NTRS", url: "https://ntrs.nasa.gov/citations/20050173968" }, { label: "Martian dust measurements and perchlorates, NASA/JPL", url: "https://www.nasa.gov/missions/mars-2020-perseverance/nasas-perseverance-offers-clues-to-protect-crews-from-mars-dust/" }, { label: "Mars sample and regolith systems, NASA", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }] },
  { id: "lunar-base", type: "reference", title: "تحديات قاعدة مأهولة على القمر", enTitle: "Challenges for a crewed lunar base", aliases: ["قاعدة على القمر", "بناء قاعدة قمرية", "lunar base", "moon base", "settlement on the moon"], topics: ["moon", "engineering", "dust", "radiation", "climate", "water", "resources", "isolation"], ar: "تحتاج قاعدة قمرية إلى ضغط وهواء قابل للتنفس، وتحكم حراري خلال الإضاءة والظل، وإدارة الغبار الكاشط، وحماية من الإشعاع، وطاقة واتصالات وموارد موثوقة. يساعد LRO في رسم التضاريس وتقييم الإضاءة والموارد المحتملة؛ لكن اختيار موقع أو وجود جليد لا يثبت وحده توفر بنية قاعدة أو استخراج مورد جاهز.", en: "A lunar base needs a pressurized breathable habitat, thermal control across sunlight and shadow, abrasive-dust management, radiation protection, reliable power and communications, and accessible resources. LRO maps topography, illumination, and potential resources; a mapped site or detected ice alone does not establish a ready base or usable resource system.", sources: [{ label: "NASA LRO mapping and site selection", url: "https://science.nasa.gov/mission/lro/" }, { label: "Lunar dust and EDS demonstration, NASA", url: "https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/" }, { label: "Space radiation risk, NASA HRP", url: "https://www.nasa.gov/hrp/hazard-space-radiation/" }, { label: "EVA thermal control, NASA", url: "https://www.nasa.gov/centers-and-facilities/johnson/spacewalk-spacesuit-basics/" }] },
  { id: "landing-hazards", type: "reference", title: "مخاطر الهبوط والملاحة الذاتية", enTitle: "Landing hazards and autonomous navigation", aliases: ["مخاطر الهبوط", "هبوط المركبات", "تفادي الصخور", "landing hazard", "terrain relative navigation", "safe landing site"], topics: ["landing", "robotics", "engineering", "geology", "moon", "mars"], ar: "الصخور الكبيرة والمنحدرات والحفر ومناطق الرمال قد تتلف مركبة الهبوط أو تعرقل حركتها. استخدمت Perseverance ملاحة نسبية للتضاريس: تقارن صور الهبوط بخريطة onboard وتستطيع الانحراف إلى منطقة أكثر أمانًا ضمن مجال الهبوط. وللقمر يرسم LRO الارتفاعات ثلاثية الأبعاد لدعم اختيار المواقع. هذه تقنيات موثقة لمهمات روبوتية؛ اعتمادها لمركبة مأهولة يتطلب تصميمًا وتأهيلًا خاصين.", en: "Large rocks, slopes, craters, and loose sand can damage a lander or block a traverse. Perseverance used Terrain-Relative Navigation: descent images were compared with an onboard map and the vehicle could divert toward safer terrain within its landing zone. LRO's 3D elevation maps support lunar site assessment. These capabilities are documented for robotic missions; crewed systems require their own design and qualification.", sources: [{ label: "Perseverance rover components and terrain-relative navigation, NASA", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }, { label: "LRO lunar topography and mapping, NASA", url: "https://science.nasa.gov/mission/lro/" }] }
);

GUIDE_REFERENCE_DOCUMENTS.push({
  id: "space-dust", type: "reference", title: "الغبار على القمر والمريخ", enTitle: "Dust on the Moon and Mars", aliases: ["غبار الفضاء", "غبار القمر والمريخ", "dust on moon and mars", "dust effects on equipment"], topics: ["dust", "moon", "mars", "engineering", "problem", "solution"],
  ar: "الغبار القمري زاوي ومشحون ويمكن أن يلتصق بالبدلات والبصريات؛ أما غبار المريخ فتثيره الرياح وقد يترسب على الأسطح. وثقت NASA تهيجًا من غبار القمر، كما أنهت عاصفة مريخية عالمية اتصال Opportunity بعد أن حد الغبار من ضوء الشمس لألواحه. تختلف المعالجة: أُظهر EDS على أسطح قمرية محددة، بينما تحتاج المهمات المريخية هوامش طاقة وخطط طوارئ ومواد مقاومة للغبار. لا يوجد نظام واحد مثبت لكل الأسطح والبيئات.",
  en: "Lunar grains are sharp and charged and can stick to suits and optics; Martian winds raise dust that can settle on hardware. NASA documented lunar dust irritation, while a global Martian dust storm reduced sunlight to Opportunity's solar arrays and the rover stopped communicating. Mitigations differ: EDS was demonstrated on selected lunar surfaces; Mars missions need power margin, contingency plans, and dust-tolerant materials. No single system is proven for every surface and environment.",
  sources: [{ label: "NASA Moon dust", url: "https://science.nasa.gov/moon/moon-dust/" }, { label: "NASA Opportunity: Mars-wide dust storm", url: "https://science.nasa.gov/mission/mer-opportunity/" }, { label: "NASA EDS lunar demonstration", url: "https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/" }]
});

const GUIDE_CREW_PROBLEMS = [
  { id: "crew-microgravity", type: "problem", title: "انعدام الجاذبية · العظام والعضلات والتوازن", titleEn: "Microgravity: bones, muscles, and balance", aliases: ["انعدام الجاذبية", "الجاذبية الصغرى", "فقدان العظام", "ضعف العضلات", "bone loss", "muscle loss", "microgravity", "weightlessness"], topics: ["crew", "health", "microgravity", "bones", "muscles", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "في الجاذبية الصغرى يقل الحمل الميكانيكي على العظام والعضلات وتتغير سوائل الجسم والتوازن. قد يحدث فقد في كثافة العظام وضعف عضلي وتكيّف دهليزي، مع اختلاف الاستجابة بين الأفراد والمهام.", en: "In microgravity, reduced mechanical loading affects bones and muscles, while body fluids and balance adapt. Crews can experience bone-density loss, muscle deconditioning, and vestibular changes, with individual variation.",
    fieldsAr: { problem: "إزالة الحمل المعتاد عن الهيكل العضلي والعظمي تؤدي إلى فقدان تكيّف بدني، وقد يظهر دوار أو صعوبة اتزان عند العودة إلى الجاذبية.", cause: "غياب الجاذبية المستمرة يقلل التحميل على العظام والعضلات ويعيد توزيع سوائل الجسم؛ المدة والتمرين والحالة الفردية تؤثر في مقدار التغير.", effect: "قد تتراجع القوة والقدرة على أداء المهام، ويزداد خطر الإصابة أثناء العمل والعودة، كما يحتاج الطاقم إلى إعادة تأهيل بعد المهمة.", status: "تُستخدم مقاومة وتمارين هوائية على محطة الفضاء الدولية مع متابعة طبية؛ الحماية ليست كاملة وتُدرس وسائل إضافية للبعثات الطويلة.", solution: "تتضمن الإجراءات الحالية برنامج تمارين منتظم بأجهزة مقاومة ودراجة وجهاز جري، مع تغذية ومراقبة طبية. تُبحث الجاذبية الاصطناعية كخيار تصميمي، لكنها ليست علاجًا تشغيليًا مثبتًا على رحلات مأهولة حالية." },
    fieldsEn: { problem: "Reduced loading can cause physical deconditioning and balance symptoms during adaptation or return to gravity.", cause: "Microgravity reduces normal bone and muscle loading and shifts body fluids; mission duration, exercise, and individual response matter.", effect: "Strength and task performance may decline, injury risk can rise, and crews may need rehabilitation after flight.", status: "ISS crews use scheduled aerobic and resistance exercise with medical monitoring; mitigation is incomplete for long missions.", solution: "Current countermeasures include regular resistance, cycling, and treadmill exercise plus nutrition and monitoring. Artificial gravity remains a studied design option, not an operational treatment on current crewed missions." },
    sources: [{ label: "NASA: The Human Body in Space", url: "https://www.nasa.gov/humans-in-space/the-human-body-in-space/" }, { label: "NASA: International Space Station research", url: "https://www.nasa.gov/missions/station/iss-research/" }] },
  { id: "crew-radiation", type: "problem", title: "الإشعاع الفضائي والعواصف الشمسية", titleEn: "Space radiation and solar particle events", aliases: ["الاشعاع الكوني", "العواصف الشمسية", "الجسيمات الشمسية", "radiation", "solar storm", "cosmic rays"], topics: ["crew", "radiation", "health", "moon", "mars", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "خارج الحماية الجزئية التي يوفرها المجال المغناطيسي والغلاف الجوي للأرض، يتعرض الرواد للأشعة الكونية المجرية والجسيمات الشمسية. تختلف الجرعة مع المسار والمدة والنشاط الشمسي والتدريع.", en: "Beyond much of Earth's magnetic and atmospheric shielding, crews encounter galactic cosmic rays and solar energetic particles. Dose depends on trajectory, duration, solar activity, and shielding.",
    fieldsAr: { problem: "التعرض للإشعاع المؤين قد يرفع مخاطر السرطان ويؤثر في الجهاز العصبي والقلب والأوعية، وقد تسبب عاصفة شمسية جرعة حادة.", cause: "الجسيمات عالية الطاقة تخترق المركبة والأنسجة؛ لا يوجد تدريع عملي يوقف كل الإشعاع الكوني دون كتلة كبيرة.", effect: "تتراكم الجرعة مع الزمن، وتفرض العواصف الشمسية إدارة فورية للعمليات ومأوى أقل تعرضًا.", status: "ترصد NASA الإشعاع وتقيم المخاطر وتخطط للتدريع والعمليات؛ لا توجد حماية كاملة للرحلات العميقة.", solution: "تشمل الإجراءات قياس الجرعة والتنبؤ بالطقس الفضائي وتحديد ملاذ محمي بمواد مناسبة وإدارة مدة التعرض. تصميم دروع خفيفة محسنة وتقنيات الحماية النشطة ما زالت موضوع بحث، وليست حماية تشغيلية مثبتة للطاقم." },
    fieldsEn: { problem: "Ionizing radiation can increase cancer risk and affect the nervous and cardiovascular systems; a solar event can deliver an acute dose.", cause: "High-energy particles penetrate spacecraft and tissue; practical shielding cannot stop all cosmic radiation without substantial mass.", effect: "Dose accumulates over time, and solar events require rapid operational response and shelter.", status: "NASA monitors radiation and evaluates shielding and operational controls; deep-space missions have no complete protection.", solution: "Controls include dosimetry, space-weather forecasting, designated shelter, suitable shielding, and exposure management. Lightweight improved shielding and active protection remain research topics, not operational crew protection." },
    sources: [{ label: "NASA HRP: Space Radiation", url: "https://www.nasa.gov/hrp/hazard-space-radiation/" }, { label: "NASA: Space Radiation and Human Exploration", url: "https://www.nasa.gov/humans-in-space/space-radiation-wont-stop-nasas-human-exploration/" }] },
  { id: "crew-life-support", type: "problem", title: "الضغط والأكسجين وإزالة ثاني أكسيد الكربون", titleEn: "Pressure, oxygen, and carbon-dioxide control", aliases: ["التنفس", "نقص الاكسجين", "تسرب الضغط", "دعم الحياة", "life support", "oxygen supply", "carbon dioxide", "decompression"], topics: ["crew", "lifeSupport", "atmosphere", "health", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "الفراغ القمري وغلاف المريخ الرقيق غير قابلين للتنفس. يحتاج الطاقم إلى ضغط وحرارة وتركيب غاز مضبوط وإزالة مستمرة لثاني أكسيد الكربون والرطوبة والملوثات.", en: "The lunar vacuum and thin Martian atmosphere are unbreathable. Crews need controlled pressure, temperature, gas composition, and continuous removal of carbon dioxide, moisture, and contaminants.",
    fieldsAr: { problem: "فقدان الضغط أو تعطل الأكسجين وإزالة CO₂ يهدد الحياة سريعًا، ويختلف تصميم دعم الحياة بين المركبة والبدلة والموطن.", cause: "لا يوفر القمر هواءً، وغلاف المريخ منخفض الضغط وغني بـCO₂؛ الأنظمة المغلقة تعتمد على حساسات ومضخات ومرشحات وطاقة.", effect: "التسرب قد يؤدي إلى نقص أكسجة أو فرط CO₂ أو انخفاض ضغط خطير، وتعطل عنصر واحد قد يفرض إلغاء النشاط والعودة للمأوى.", status: "تستخدم محطة الفضاء الدولية أنظمة دعم حياة وتجديد هواء وماء؛ MOXIE أثبت إنتاج أكسجين آليًا على المريخ بكميات تجريبية صغيرة، وانتهت تجربته.", solution: "تعتمد الهندسة على مراقبة مستمرة للضغط والغازات، إنذارات، عزل مناطق التسرب، مخزون احتياطي وإجراءات عودة. يلزم للبعثات المريخية نظام مستقل قابل للصيانة؛ لا يمد MOXIE الطاقم بالأكسجين ولا يُعد نظام دعم حياة مأهولًا." },
    fieldsEn: { problem: "Loss of pressure, oxygen supply, or CO2 removal can become life-threatening; spacecraft, suits, and habitats need different life-support designs.", cause: "The Moon has no breathable atmosphere and Mars has low-pressure CO2-rich air; closed systems depend on sensors, pumps, filters, and power.", effect: "A leak can cause hypoxia, CO2 buildup, or dangerous depressurization; a component failure may force an EVA abort or shelter return.", status: "The ISS operates environmental-control and life-support systems. MOXIE demonstrated small-scale robotic oxygen production on Mars and has completed its experiment.", solution: "Engineering controls include continuous atmosphere monitoring, alarms, leak isolation, reserves, and return procedures. Mars crews need maintainable independent systems; MOXIE does not supply crew oxygen and is not crew life support." },
    sources: [{ label: "NASA: Spacewalk spacesuit basics", url: "https://www.nasa.gov/centers-and-facilities/johnson/spacewalk-spacesuit-basics/" }, { label: "NASA: MOXIE completes Mars mission", url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/" }] },
  { id: "crew-thermal", type: "problem", title: "الحرارة والبرودة في الفضاء وعلى الأسطح", titleEn: "Thermal extremes in space and on planetary surfaces", aliases: ["الحرارة المتطرفة", "البرد الشديد", "التبريد", "التدفئة", "thermal control", "extreme temperature"], topics: ["crew", "climate", "EVA", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "في الفراغ ينتقل معظم الحمل الحراري بالإشعاع والتوصيل عبر البدلة؛ وعلى القمر تتباين الإضاءة والظل بشدة، بينما يعتمد المريخ على غلاف رقيق وغبار وموقع وفصل.", en: "In vacuum, thermal exchange is dominated by radiation and conduction through the suit. Lunar illumination and shadow contrast sharply; Martian conditions vary with location, season, and dust.",
    fieldsAr: { problem: "فرط الحرارة أو فقدها يضعف الأداء وقد يسبب إصابة؛ كما تتأثر البطاريات والأجهزة والمواد.", cause: "غياب الحمل الحراري في الفراغ، التعرض للشمس أو الظل، حرارة الجسم أثناء العمل، وتغيرات الموقع تجعل التوازن الحراري تحديًا هندسيًا.", effect: "قد ترتفع حرارة البدلة أو المقصورة أو تتجمد أجزاء، ويصبح على الرواد إنهاء السير خارج المركبة إذا تجاوز النظام حدوده.", status: "تستخدم بدلات السير أنظمة تبريد وملابس تبريد سائل وعزلًا ومراقبة؛ كل بدلة مصممة لبيئة تشغيل محددة.", solution: "تُدار الحرارة عبر عزل متعدد الطبقات، عواكس، دوائر تبريد ومبادلات حرارية، وتخطيط أوقات العمل. حلول قواعد القمر أو المريخ تحتاج تصميمًا واختبارات بيئية خاصة؛ لا تُعمم مواصفات بدلة محطة الفضاء عليها تلقائيًا." },
    fieldsEn: { problem: "Overheating or heat loss can impair performance and damage equipment, batteries, and materials.", cause: "Vacuum removes convective cooling; sunlight, shadow, metabolic heat, and local conditions complicate thermal balance.", effect: "Suit or cabin temperatures can exceed limits, requiring an EVA to end early.", status: "EVA suits use insulation, liquid-cooling garments, thermal control, and monitoring; each suit is designed for a specific operating environment.", solution: "Controls include multilayer insulation, reflective surfaces, cooling loops, heat exchangers, and activity scheduling. Lunar and Martian habitat systems need environment-specific design and testing; ISS suit specifications cannot simply be assumed suitable." },
    sources: [{ label: "NASA: Spacewalk spacesuit basics", url: "https://www.nasa.gov/centers-and-facilities/johnson/spacewalk-spacesuit-basics/" }, { label: "NASA Moon facts and environment", url: "https://science.nasa.gov/moon/facts/" }] },
  { id: "crew-dust", type: "problem", title: "الغبار القمري والمريخي وتأثيره على الطاقم والمعدات", titleEn: "Lunar and Martian dust hazards", aliases: ["غبار البدلة", "الغبار على المعدات", "غبار الرواد", "mars dust", "lunar dust", "dust on spacesuits"], topics: ["crew", "dust", "moon", "mars", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "غبار القمر حاد وزاوي ويمكن أن يكتسب شحنة ويلتصق بالأسطح؛ أما غبار المريخ فتحركه الرياح وقد يحجب الضوء عن الألواح الشمسية ويترسب على المعدات.", en: "Lunar dust is angular and can become electrostatically charged and adhere to surfaces. Martian winds raise dust that can reduce sunlight on solar arrays and settle on hardware.",
    fieldsAr: { problem: "الغبار يسبب تآكل الأختام والمفاصل وخدش البصريات أو تلوث المقصورة، وقد يهيج العين والجهاز التنفسي؛ وعلى المريخ يخفض الطاقة الشمسية.", cause: "طحن الصخور والبيئة القمرية تحفظ حبيبات حادة، بينما الرياح المريخية ترفع غبارًا دقيقًا لمسافات واسعة.", effect: "تزداد الصيانة ومخاطر التسرب والتلوث، وقد تحد طبقة الغبار من قدرة المركبات المعتمدة على الطاقة الشمسية.", status: "أُظهر EDS على أسطح محددة بمهمة قمرية في 2025، وليس على بدلة كاملة؛ طرق إزالة الغبار من البدلات والمساكن ما زالت موضع تطوير.", solution: "تتضمن الضوابط تقليل انتقال الغبار إلى المقصورة، أختام ومواد مقاومة للتآكل، تنظيفًا مضبوطًا وإدارة احتياط الطاقة. درع EDS عرض تقني لأسطح محددة؛ لا يوجد حل واحد مثبت لإزالة الغبار عن كل البدلات والمعدات." },
    fieldsEn: { problem: "Dust can abrade seals and joints, scratch optics, contaminate habitats, irritate eyes or airways, and reduce solar power on Mars.", cause: "Lunar surface processes leave sharp grains; Martian winds can loft fine dust over large areas.", effect: "Maintenance and contamination risks rise, and dust on solar arrays can reduce available power.", status: "EDS was demonstrated on selected lunar surfaces in 2025, not a complete spacesuit; suit and habitat dust-control integration remains under development.", solution: "Controls include limiting dust transfer into habitats, abrasion-resistant seals and materials, controlled cleaning, and power reserves. EDS is a surface-specific demonstration, not a proven universal dust-removal system." },
    sources: [{ label: "NASA Moon dust", url: "https://science.nasa.gov/moon/moon-dust/" }, { label: "NASA electrodynamic dust shield demonstration", url: "https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/" }, { label: "NASA: Mars dust and crew protection", url: "https://www.nasa.gov/missions/mars-2020-perseverance/nasas-perseverance-offers-clues-to-protect-crews-from-mars-dust/" }] },
  { id: "crew-resources", type: "problem", title: "الماء والغذاء وإعادة تدوير الموارد", titleEn: "Water, food, and resource recycling", aliases: ["نقص المياه", "الغذاء في الفضاء", "اعادة تدوير الماء", "water recycling", "food supply", "in situ resources"], topics: ["crew", "water", "resources", "nutrition", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "المهمات البعيدة محدودة الإمداد؛ الماء والهواء والغذاء والمواد الاستهلاكية كتلة وحجم وطاقة، كما تختلف موارد الجليد المكتشفة عن مورد قابل للاستخراج.", en: "Long missions have limited resupply. Water, air, food, and consumables require mass, volume, and power; detected ice is not automatically an accessible resource.",
    fieldsAr: { problem: "فقد الماء أو الغذاء أو تعطل إعادة التدوير يضعف صحة الطاقم ويهدد استمرارية المهمة.", cause: "المسافة وتأخر الإمداد، التسربات، تلوث المياه، والاعتماد على أنظمة معالجة متعددة المراحل تحد من الاستقلالية.", effect: "يزداد مخزون الإطلاق ومتطلبات الطاقة، وأي خلل قد يجبر الطاقم على تقنين الاستهلاك أو إنهاء المهمة.", status: "تستعيد محطة الفضاء الدولية جزءًا كبيرًا من الماء من مصادر متعددة وتختبر أنظمة دعم الحياة؛ إنتاج الغذاء الكامل أو الاعتماد على موارد القمر والمريخ لم يصبح حلًا مأهولًا مكتملًا.", solution: "تستخدم المهمات الحالية مخزونًا مدروسًا وأنظمة استعادة ومعالجة ومراقبة جودة. تُدرس الزراعة وإنتاج الوقود أو الماء من الموارد المحلية، لكن يلزم إثبات الاستخراج والتنقية والاعتمادية في الموقع قبل اعتبارها موردًا تشغيليًا." },
    fieldsEn: { problem: "Loss of water, food, or recycling capability can harm crew health and mission continuity.", cause: "Distance, delayed resupply, leaks, contamination, and multistage treatment systems constrain autonomy.", effect: "Launch mass and power needs increase; a failure may require rationing or mission termination.", status: "The ISS recovers a substantial portion of water and tests life-support systems. Full food production or routine use of lunar/Martian resources is not yet a complete crewed solution.", solution: "Current missions use planned reserves, recovery, treatment, and quality monitoring. Crop production and local resource extraction are being studied, but extraction, purification, and reliability must be demonstrated at the destination before treating them as operational supplies." },
    sources: [{ label: "NASA: International Space Station life support research", url: "https://www.nasa.gov/missions/station/iss-research/" }, { label: "NASA: Water and ice on the Moon", url: "https://science.nasa.gov/moon/moon-water-and-ices/" }, { label: "NASA Mars facts and water", url: "https://science.nasa.gov/mars/facts/" }] },
  { id: "crew-psychology", type: "problem", title: "العزلة والنوم والصحة النفسية", titleEn: "Isolation, sleep, and behavioral health", aliases: ["العزلة", "الضغط النفسي", "الوحدة", "النوم في الفضاء", "isolation", "confinement", "sleep disruption", "psychological"], topics: ["crew", "psychology", "isolation", "health", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "الاحتجاز في حيز محدود، البعد عن الأسرة، عبء العمل، اختلاف دورة الضوء وتأخر التواصل قد تؤثر في النوم والمزاج والانتباه والعمل الجماعي.", en: "Confinement, distance from family, workload, altered light-dark cycles, and communication delays can affect sleep, mood, attention, and teamwork.",
    fieldsAr: { problem: "الإجهاد واضطراب النوم أو النزاع داخل الطاقم قد يضعف القرار والسلامة في مهمة لا يمكن مغادرتها سريعًا.", cause: "العزلة والبيئة المغلقة والجدول المكثف وفقدان الإشارات الزمنية الأرضية تتفاعل مع الفروق الفردية.", effect: "قد تتراجع جودة النوم والانتباه والأداء، وتتعقد الاستجابة للطوارئ والعمل المشترك.", status: "تستخدم المهمات الحالية اختيار الطاقم والتدريب والدعم النفسي والجدولة والنوم؛ بعثات المريخ ستحتاج استقلالية أكبر بسبب تأخر الاتصال.", solution: "تشمل الإجراءات تصميم جداول عمل وراحة، إضاءة مناسبة، خصوصية ومساحة مشتركة، تدريبًا سلوكيًا ودعمًا نفسيًا واتصالًا غير متزامن. وسائل المحاكاة الأرضية تساعد على دراسة العوامل، لكنها لا تتنبأ وحدها باستجابة كل طاقم." },
    fieldsEn: { problem: "Stress, sleep disruption, or crew conflict can degrade decisions and safety when a mission cannot be quickly exited.", cause: "Isolation, a closed environment, demanding schedules, and loss of Earth-like time cues interact with individual differences.", effect: "Sleep, attention, performance, emergency response, and teamwork may suffer.", status: "Current missions use crew selection, training, behavioral support, scheduling, and sleep planning; Mars crews need greater autonomy because of communication delay.", solution: "Controls include work/rest schedules, suitable lighting, privacy and shared space, behavioral training, psychological support, and asynchronous communication. Earth analogs help study factors but cannot predict every crew response." },
    sources: [{ label: "NASA Human Research Program", url: "https://www.nasa.gov/hrp/" }, { label: "NASA: The Human Body in Space", url: "https://www.nasa.gov/humans-in-space/the-human-body-in-space/" }] },
  { id: "crew-communications", type: "problem", title: "تأخر الاتصالات والاستقلالية التشغيلية", titleEn: "Communication delay and operational autonomy", aliases: ["تاخر الاتصالات", "انقطاع الاتصال", "التواصل مع الارض", "communication delay", "signal delay", "mission autonomy"], topics: ["crew", "communication", "mars", "engineering", "problem"], targetWorld: "mars",
    ar: "تستغرق الإشارة بين الأرض والمريخ دقائق إلى عشرات الدقائق في اتجاه واحد بحسب المسافة، وتوجد أيضًا نوافذ حجب واتصال محدودة؛ لذلك لا يصلح التحكم اللحظي عن بعد.", en: "One-way Earth–Mars signal time ranges from minutes to tens of minutes depending on orbital geometry, with additional communication windows and outages; real-time remote control is not practical.",
    fieldsAr: { problem: "لا يمكن للأرض توجيه كل خطوة أو الرد الفوري على الطوارئ، كما قد ينقطع الاتصال مؤقتًا.", cause: "المسافة بين الكواكب تحدد زمن انتقال الإشارة، وتعمل الروابط عبر شبكات ومركبات ترحيل ونوافذ رؤية.", effect: "يجب على الطاقم أو الروبوت تشخيص المشكلة واتخاذ إجراءات آمنة محليًا، وتصبح خطة المهمة أقل تفاعلية.", status: "تستخدم المركبات المريخية أوامر مجدولة وروابط ترحيل وعمليات ذاتية محدودة؛ استقلالية طاقم بشري بعيد يجري تصميمها ودراستها.", solution: "تُبنى إجراءات الطوارئ على قواعد محلية واضحة، تخطيط مسبق، سجلات تشخيص، اتصال مؤجل ومخازن بيانات. لا تُعامل أنظمة محطة الفضاء القريبة كبديل مباشر لقيادة بعثة مريخية مستقلة." },
    fieldsEn: { problem: "Earth cannot direct every action or respond immediately to emergencies, and communication outages can occur.", cause: "Interplanetary distance creates signal latency; links also depend on relay assets and visibility windows.", effect: "Crew or robots must diagnose and enter safe states locally, reducing interactive mission control.", status: "Mars spacecraft use scheduled commands, relay links, and bounded autonomy; human deep-space autonomy is still being designed and studied.", solution: "Use local emergency rules, preplanned operations, diagnostic logs, delayed messaging, and onboard data storage. Near-Earth ISS operations are not a direct substitute for autonomous Mars mission operations." },
    sources: [{ label: "NASA Perseverance rover components and communications", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }, { label: "NASA/JPL Deep Space Network", url: "https://deepspace.jpl.nasa.gov/" }] },
  { id: "crew-equipment", type: "problem", title: "أعطال المركبة والطاقة وأنظمة دعم الحياة", titleEn: "Spacecraft, power, and life-support failures", aliases: ["اعطال المركبة", "تعطل الطاقة", "عطل نظام دعم الحياة", "equipment failure", "power failure", "spacecraft fault"], topics: ["crew", "power", "lifeSupport", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "المركبة المأهولة تعتمد على أنظمة مترابطة للطاقة والحرارة والاتصالات والضغط؛ وتتعرض المكونات للاهتزاز والإشعاع ودورات الحرارة وصعوبة الإصلاح.", en: "Crewed spacecraft depend on interconnected power, thermal, communication, and pressure systems; components face vibration, radiation, thermal cycling, and difficult repair.",
    fieldsAr: { problem: "عطل منفرد أو متسلسل قد يفقد الطاقة أو الاتصال أو التحكم البيئي ويجبر الطاقم على إلغاء المهمة أو الاحتماء.", cause: "البيئة القاسية والاعتماد المتبادل والتآكل ومحدودية قطع الغيار وأدوات الصيانة.", effect: "قد تتوقف تجارب أو مركبات، أو يتعرض الطاقم لخطر إذا فشلت أنظمة حرجة دون بديل.", status: "تعتمد المركبات الحالية على اختبارات وتأهيل ومراقبة وإجراءات طوارئ وتكرار لبعض الأنظمة؛ حجم الاستقلالية والإصلاح يختلف بين المركبات.", solution: "تستخدم الهندسة تحليل أنماط الفشل، استقلالية الأنظمة الحرجة، عزل الأعطال، قواطع وحساسات، قطع غيار، تشخيصًا قابلًا للصيانة وتدريب الطاقم. تُصمم كل منظومة وفق تحليل مخاطرها؛ لا توجد مضاعفة واحدة تضمن منع كل الأعطال." },
    fieldsEn: { problem: "A single or cascading fault can remove power, communications, or environmental control and force an abort or shelter-in-place response.", cause: "Harsh conditions, system coupling, wear, limited spares, and constrained maintenance contribute to failures.", effect: "Experiments or vehicles may stop, and crew safety can be threatened if a critical function has no fallback.", status: "Current spacecraft use qualification, monitoring, emergency procedures, and redundancy for selected functions; details vary by vehicle.", solution: "Engineering uses failure-mode analysis, independent critical paths, fault isolation, breakers and sensors, spares, maintainable diagnostics, and crew training. Each system requires its own risk-based design; no single redundancy approach prevents every failure." },
    sources: [{ label: "NASA Human Research Program", url: "https://www.nasa.gov/hrp/" }, { label: "NASA Spacewalk spacesuit basics", url: "https://www.nasa.gov/centers-and-facilities/johnson/spacewalk-spacesuit-basics/" }] },
  { id: "crew-landing", type: "problem", title: "الهبوط والتنقل الآمن على السطح", titleEn: "Landing and safe surface mobility", aliases: ["مخاطر الهبوط", "هبوط المركبة", "التحرك على السطح", "landing hazard", "terrain navigation", "surface mobility"], topics: ["crew", "landing", "robotics", "moon", "mars", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "الصخور والمنحدرات والحفر والتربة المفككة قد تعيق الهبوط أو السير؛ تختلف جاذبية القمر وغلاف المريخ وطرق الهبوط، ولا يمكن نقل حل روبوتي إلى مركبة مأهولة دون تأهيل.", en: "Rocks, slopes, craters, and loose soil can threaten landing and traverses. Lunar gravity and the Martian atmosphere differ, and robotic landing capability cannot be assumed qualified for crewed vehicles.",
    fieldsAr: { problem: "قد تنقلب المركبة أو تعلق أو تتضرر الأرجل والعجلات، وقد يتعذر على الرواد الوصول إلى هدف أو العودة للمأوى.", cause: "الرؤية المحدودة أثناء الهبوط، عدم يقين الخرائط، خواص التربة، ميل السطح، الغبار وتفاوت التضاريس.", effect: "يهدد الهبوط الفاشل المركبة والطاقم، ويزيد عبور التضاريس الوعرة استهلاك الطاقة ووقت السير ومخاطر السقوط.", status: "استخدمت Perseverance ملاحة نسبية للتضاريس في هبوط روبوتي؛ خرائط LRO تدعم دراسة مواقع القمر. ذلك لا يثبت تأهيل نظام مماثل لهبوط بشري.", solution: "تجمع الضوابط بين خرائط عالية الدقة، ملاحة مستقلة وتفادي أخطار، هوامش في الوقود والطاقة، اختيار مسار محافظ، وتدريب على الحركة والإنقاذ. تُختبر البدلات والمركبات المأهولة على متطلبات البيئة والحمولة الفعلية." },
    fieldsEn: { problem: "A lander can tip, become stuck, or damage legs and wheels; crews may be unable to reach a target or return to shelter.", cause: "Limited descent visibility, map uncertainty, soil properties, slopes, dust, and variable terrain.", effect: "A failed landing threatens the vehicle and crew; rough traverses increase time, energy use, and fall risk.", status: "Perseverance used Terrain-Relative Navigation for a robotic landing, while LRO maps support lunar site assessment. Neither fact qualifies an equivalent crewed landing system.", solution: "Controls combine high-resolution maps, autonomous navigation and hazard avoidance, fuel and power margins, conservative routing, and mobility/rescue training. Crewed vehicles and suits require qualification for their actual environment and loads." },
    sources: [{ label: "NASA Perseverance rover components and landing navigation", url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/" }, { label: "NASA Lunar Reconnaissance Orbiter", url: "https://science.nasa.gov/mission/lro/" }] },
  { id: "crew-eva", type: "problem", title: "العمل خارج المركبة (EVA)", titleEn: "Extravehicular activity workload and suit limits", aliases: ["السير في الفضاء", "العمل خارج المركبة", "بدلة الفضاء", "EVA", "spacewalk", "spacesuit mobility"], topics: ["crew", "EVA", "health", "engineering", "problem"], targetWorld: "spaceflight",
    ar: "البدلة تحافظ على الضغط والتنفس والحرارة لكنها تضيف كتلة ومقاومة للحركة؛ يتطلب العمل أدوات وتثبيتًا واتصالًا ومراقبة للأكسجين والوقت.", en: "A suit provides pressure, breathing, and thermal control but adds mass and mobility resistance; EVA requires tools, restraint, communications, and oxygen/time monitoring.",
    fieldsAr: { problem: "الإجهاد البدني، تقييد حركة المفاصل، تسرب البدلة، تلف القفازات أو فقد التثبيت قد يهدد المهمة والطاقم.", cause: "اختلاف الضغط عبر البدلة، مقاومة المفاصل، الحرارة والبرودة، الإضاءة، الغبار، وانعدام نقاط الارتكاز.", effect: "تستهلك المهام وقتًا وطاقة، وقد يتطلب إنذار أو تدهور صحي إنهاء السير والعودة إلى المركبة.", status: "تستخدم EVA الحالية قوائم تحقق وربطًا بالمركبة وأنظمة دعم حياة ومراقبة؛ تصميم بدلات القمر والمريخ له متطلبات مختلفة وما زالت أنظمة قيد التطوير.", solution: "تُقلل المخاطر بتدريب ومحاكاة، أدوات وقيود تثبيت، فحص البدلة، حدود زمنية، مراقبة حيوية واتصال، وخطة إجهاض وعودة. تحسين الحركة والوقاية من الغبار للبدلات المستقبلية قيد التطوير ولا يُعرض كقدرة مكتملة." },
    fieldsEn: { problem: "Physical workload, restricted joint motion, suit leaks, glove damage, or loss of restraint can threaten the crew and task.", cause: "Pressure across the suit, joint resistance, thermal conditions, lighting, dust, and limited footholds.", effect: "EVA consumes time and energy; an alarm or health concern may require early return to the vehicle.", status: "Current EVAs use checklists, restraints, life-support systems, and monitoring. Lunar and Mars suits have different requirements, and future systems remain in development.", solution: "Risk controls include training, simulation, restraints and tools, suit inspections, time limits, biomedical monitoring, communications, and abort/return plans. Mobility and dust protection improvements for future suits are not yet a completed capability." },
    sources: [{ label: "NASA: Spacewalk spacesuit basics", url: "https://www.nasa.gov/centers-and-facilities/johnson/spacewalk-spacesuit-basics/" }, { label: "NASA Moon dust", url: "https://science.nasa.gov/moon/moon-dust/" }] }
];

const GUIDE_SITE_ENGLISH = {
  atacama: { environment: "Hyper-arid desert", location: "Chile · near Yungay", subsite: "Yungay area", summary: "NASA imagery documents a dry streambed on an alluvial fan in northern Chile. NASA's ARADS field campaigns tested rover drilling and life-detection workflows at an Atacama analog site.", geology: "The project record describes dry channels, alluvial fans, exposed hills, salts, and mixed sediment grain sizes. The NASA image is regional imagery, not a local soil assay.", climate: "An extremely arid region; this project records no local, time-stamped weather measurements.", water: "Liquid water is scarce and irregular in the hyper-arid area; the project records no site-specific water measurements.", advantage: "A useful setting for planning soil and rover tests when the exact location and supporting data are specified.", limit: "Hyperaridity can challenge biosignature detection, but Earth pressure, atmosphere, gravity, and radiation differ from Mars." },
  hawaii: { environment: "Volcanic lava terrain", location: "Hawaii, United States", subsite: "Mauna Loa", summary: "NASA ASTER imagery covers Mauna Loa and regional volcanic flows. It supports regional surface interpretation, not wheel-scale hazard mapping.", geology: "The image has 15–90 m spatial resolution depending on band, so it can map regional flow patterns but cannot identify every wheel-scale crack or rock.", climate: "Conditions vary with elevation, aspect, and location; the project records no single representative local measurement.", water: "Water availability varies across the islands and is not specified for the lava-flow site in this project record.", advantage: "NASA Terra ASTER imagery provides multispectral context for Mauna Loa's lava flows; it is not a field analysis of a rock sample.", limit: "Any rover traverse would need a permitted, close-range survey. The project does not claim a NASA crew or rover test at this exact point." },
  "death-valley": { environment: "Hot desert basin and salt flat", location: "California, United States", subsite: "Badwater Basin", summary: "NASA ASTER documented Badwater Basin before and after the temporary lake formed following Hurricane Hilary in 2023.", geology: "Badwater is a closed desert basin with salt flats, dunes, and surrounding mountains; surface conditions change after episodic flooding.", climate: "An extremely hot desert; this project records no current or site-specific weather measurements.", water: "Surface water is episodic and conditions change over time, including after rare storms; the project records no local water measurements.", advantage: "Dated ASTER images show how Badwater's surface changed, including after temporary flooding; they are not field measurements.", limit: "Surface conditions can change after rare floods; this is an Earth field-planning issue, not Martian weather." },
  mcmurdo: { environment: "Cold polar desert", location: "Antarctica", subsite: "McMurdo Dry Valleys", summary: "NASA tested engineering models of Phoenix soil instruments and collected sterile samples in the McMurdo Dry Valleys; NASA ASTEP also developed a subsurface corer concept there.", geology: "The region combines extremely dry exposed ground with localized buried ice, glaciers, and ice-covered lakes; a surface sample alone may not represent the subsurface.", climate: "A very cold, dry polar environment with strong katabatic winds and limited seasonal melt; no live weather measurements are shown here.", water: "The region includes ice-covered lakes and limited seasonal meltwater; availability and salinity vary by location.", advantage: "NASA field campaigns tested soil instruments and sterile sample handling in a cold, remote environment; those were engineering tests, not flight-ready systems.", limit: "Dry exposed ground can coexist with localized buried ice. The campaign tests sampling methods, not a flight-ready system or the whole Martian environment." },
  devon: { environment: "Arctic impact crater", location: "Nunavut, Canada", subsite: "Haughton Crater", summary: "NASA tested robotic drilling and remote exploration operations at Haughton Crater on Devon Island.", geology: "The site combines an impact structure, rocky terrain, and permafrost. NASA's TRIDENT tests encountered ice-cemented breccia and drill cuttings that could choke or bind the auger.", climate: "A cold polar environment; this project records no current, site-specific weather measurements.", water: "Water is present as ice and seasonal melt; the project does not establish a local supply of usable liquid water.", advantage: "Geological-structure studies can be paired with robotic operations planning in a remote polar environment.", limit: "Ice-cemented impact breccia and permafrost caused drill binding; this informs robotic hardware and field procedures, not actual astronaut activity on Mars." },
  "meteor-crater": { environment: "Impact crater in a high desert", location: "Arizona, United States", subsite: "Meteor Crater (Barringer Crater)", summary: "NASA identifies Meteor Crater in Arizona as an impact site about 4,000 feet across and roughly 50,000 years old.", geology: "Its rim, interior wall, basin, and ejecta provide a terrestrial impact-crater morphology for comparison with orbital images.", climate: "A semi-arid environment; this project records no local, time-stamped weather measurements.", water: "No permanent surface-water source is documented in this project's site record.", advantage: "A defined geological target for testing terrain interpretation and crater-image analysis.", limit: "NASA's image record confirms the site; it does not establish a NASA astronaut-training campaign there. Use it for morphology comparisons only." }
};

const GUIDE_PROBLEM_ENGLISH_TITLES = {
  "moon-surface": "Moon surface: electrostatic dust",
  "mars-surface": "Mars surface: thin, unbreathable atmosphere",
  "devon-site": "Devon Island: drilling ice-cemented breccia",
  "atacama-site": "Atacama Desert: life detection in hyper-arid soil",
  "death-valley-site": "Death Valley: heat and changing basin conditions",
  "mcmurdo-site": "McMurdo Dry Valleys: subsurface water sampling",
  "hawaii-site": "Mauna Loa: rover mobility over lava terrain",
  "meteor-site": "Meteor Crater (Barringer): limits of crater analogs"
};

const GUIDE_PROBLEM_ENGLISH = {
  "moon-surface": { problem: "Lunar regolith is fine, sharp, and electrostatically charged, so it adheres to suits, lenses, and joints.", cause: "The Moon lacks water-and-air weathering, and ultraviolet light and solar wind charge grains; walking and rover motion loft dust.", effect: "Dust abrades seals and optics and can enter habitats. Apollo crews reported eye and respiratory irritation.", status: "NASA demonstrated EDS on selected lunar surfaces; suit/habitat integration remains under evaluation.", solution: "NASA's Electrodynamic Dust Shield used electric fields to clear dust from glass and a thermal radiator during the 2025 Blue Ghost demonstration. That proves removal on those tested surfaces, not a whole-suit cleaning system. Suitports or multi-chamber airlocks are design approaches to limit dust transfer." },
  "mars-surface": { problem: "Mars has a very thin, carbon-dioxide-dominated atmosphere and no breathable surface air for people.", cause: "Low pressure and gas composition together require a sealed, pressurized environment.", effect: "A crew needs continuous pressure, oxygen supply, carbon-dioxide removal, and environmental control; a leak threatens life support.", status: "A pressurized habitat is required; MOXIE was a robotic technology demonstration, not crew life support.", solution: "A habitat needs closed environmental control and life support. MOXIE demonstrated oxygen extraction from Martian CO2 on Perseverance, but its experimental output and scale cannot supply a crew." },
  "devon-site": { problem: "NASA's TRIDENT drill encountered ice-cemented impact breccia with low cuttings permeability at Haughton Crater.", cause: "In massive material, drilling debris could not escape up the auger and accumulated around the bit.", effect: "Drilling slowed and choking/binding faults interrupted sample collection in the field campaign.", status: "NASA documented the fault; reducing bite size was demonstrated as a mitigation in difficult target material.", solution: "NASA's report recommends reducing drill bites from about 10 cm to 1–2 cm and lifting the auger more often to remove cuttings. Percussion was also needed in ice-cemented breccia." },
  "atacama-site": { problem: "Some hyper-arid Atacama samples have extremely low organic matter and sparse detectable microbial signals.", cause: "Long-term water scarcity and surface exposure limit biomass and can obscure molecular signatures.", effect: "A negative instrument reading may reflect low signal, sample location, or handling—not proof that the whole desert is lifeless.", status: "NASA's ARADS project field-tested drilling and life-detection workflows in an Atacama analog; it did not establish life at every site.", solution: "ARADS combined rover-based drilling, controlled sample handling, and remote operations to access subsurface material. NASA also reports power/vibration scheduling and repeated cleaning as field challenges; instrument duty cycles and contamination controls must be planned." },
  "death-valley-site": { problem: "Badwater Basin is exposed to desert heat, but its surface is not permanently dry: NASA documented a temporary lake after Hurricane Hilary in 2023.", cause: "Rare storm runoff collects in the closed basin; solar heat also loads batteries and electronics.", effect: "Flooding or salt-crust changes can invalidate an old route survey, while excessive equipment temperature can exceed calibration limits.", status: "This is a proposed field-campaign control, not a claim that NASA tested crewed equipment at Badwater.", solution: "Recheck imagery and ground-route conditions after storms, avoid flooded or unstable crust, and use temperature-rated, thermally monitored electronics. Perseverance's warm electronics box is an engineering precedent, not equipment tested at Badwater." },
  "mcmurdo-site": { problem: "The McMurdo Dry Valleys are extremely dry, with localized subsurface ice and ice-covered lakes.", cause: "Surface conditions do not reveal all subsurface water, and cold plus isolation complicate sterile sampling and instrument handling.", effect: "Surface-only sampling can miss targets; warming or contaminating a sample can alter measurements in remote field work.", status: "NASA tested Phoenix instrument models and a corer concept in the Dry Valleys; neither is a flight-qualified system.", solution: "NASA took Phoenix wet-chemistry and conductivity/temperature instrument engineering models into the Dry Valleys and collected sterile samples for lab analysis. A NASA ASTEP project also developed and tested an ultrasonic-corer concept at Lake Vida." },
  "hawaii-site": { problem: "ASTER imagery around Mauna Loa maps regional lava flows, but its 15–90 m bands cannot resolve every wheel-scale crack or block.", cause: "Regional multispectral imagery is coarser than close-range stereo terrain mapping, while lava surfaces vary locally in roughness and fractures.", effect: "A rover test route chosen from imagery alone may encounter impassable fissures or damaging rocks. This is a proposed ground-test risk, not a reported NASA crew campaign at Mauna Loa.", status: "Route mapping is a proposed site-specific control; the cited wheels and hazard cameras are flown on Mars rovers.", solution: "Survey and authorize a ground route, then map slopes, cracks, and blocks with close-range stereo images and define no-go areas. NASA redesigned Perseverance wheels after Curiosity wear on sharp rocks and uses HazCams to inspect rocks, trenches, and dunes." },
  "meteor-site": { problem: "NASA identifies Meteor Crater (Barringer Crater) in Arizona as an impact crater about 4,000 feet across and roughly 50,000 years old; it is not a dome.", cause: "Its rim, wall, basin, and ejecta have experienced Earth's gravity, atmosphere, and weathering, unlike lunar terrain.", effect: "Treating its slopes or ejecta as direct lunar analogs could mislead conclusions about mobility or surface processes. NASA's image record does not establish a training campaign there.", status: "NASA verifies the site's identity and morphology; the proposed use here is image-based comparison, not a NASA field trial.", solution: "Compare observable crater features with mapped lunar terrain and use LRO LOLA elevation data for 3D lunar topography and landing-site analysis. Keep gravity and weathering differences explicit." }
};
const GUIDE_CHAT_STOP_WORDS = new Set("في من على الى إلى عن مع ما ماذا هل هو هي هم هذا هذه تلك ذلك الذي التي و او انا انت انتِ نحن هم هو هي the a an and or to of in on at for from with about what why how which who is are was were do does did can could would should it they you we by as this that these those about tell me explain".split(/\s+/));
const GUIDE_CHAT_SITE_ALIASES = {
  atacama: ["اتاكاما", "اتاكما", "اتاكامه", "يونغاي", "yungay", "atacama"],
  hawaii: ["هاواي", "هاواى", "ماونا لوا", "مونا لوا", "mauna loa", "hawaii"],
  "death-valley": ["وادي الموت", "بادووتر", "بادواتر", "death valley", "badwater"],
  mcmurdo: ["الوديان الجافة", "وديان ماكموردو", "ماكموردو", "مكموردو", "mcmurdo", "dry valleys", "antarctic dry valleys"],
  devon: ["جزيرة ديفون", "ديفون", "فوهة هوتون", "هوتون", "devon island", "haughton crater", "haughton"],
  "meteor-crater": ["فوهة ميتيور", "ميتيور كريتر", "فوهة بارينجر", "بارينجر", "meteor crater", "barringer crater"]
};
const GUIDE_CHAT_WORLDS = {
  moon: ["القمر", "قمري", "قمر", "moon", "lunar"],
  mars: ["المريخ", "مريخي", "مريخ", "الكوكب الاحمر", "mars", "martian", "red planet"],
  earth: ["الارض", "ارض", "earth", "terrestrial"]
};
const GUIDE_CHAT_TOPICS = {
  comparison: ["compare", "comparison", "difference", "similar", "similarity", "versus", "vs", "قارن", "مقارنة", "فرق", "الفرق", "اختلاف", "اوجه الشبه", "وجه الشبه", "تشابه"],
  crew: ["astronaut", "astronauts", "crew", "spacefarer", "رواد الفضاء", "رائد الفضاء", "الطاقم", "رواد", "الرواد"],
  health: ["health", "medical", "physiology", "human body", "صحة", "صحي", "جسم الانسان", "فسيولوجيا", "طبي", "اصابة"],
  microgravity: ["microgravity", "weightlessness", "zero gravity", "انعدام الجاذبيه", "الجاذبيه الصغرى", "الجاذبيه المنخفضه"],
  bones: ["bone", "bones", "bone loss", "osteoporosis", "عظام", "كثافه العظام", "فقدان العظام"],
  muscles: ["muscle", "muscles", "muscle loss", "عضلات", "ضعف العضلات"],
  nutrition: ["nutrition", "food", "diet", "غذاء", "طعام", "تغذيه"],
  lifeSupport: ["life support", "oxygen supply", "carbon dioxide", "decompression", "دعم الحياه", "نظام دعم الحياة", "اكسجين", "تنفس", "ثاني اكسيد الكربون", "تسرب الضغط"],
  psychology: ["psychology", "psychological", "mental health", "stress", "نفسي", "الضغط النفسي", "الصحه النفسيه"],
  isolation: ["isolation", "confinement", "sleep", "عزله", "الوحده", "النوم", "الاحتجاز"],
  communication: ["communication delay", "signal delay", "communications", "اتصالات", "الاتصال", "تأخر الاتصال", "تاخر الاتصالات", "تأخر الاشاره"],
  power: ["power system", "power failure", "battery", "طاقة", "طاقه", "طاقة المركبة", "بطاريه", "انقطاع الطاقه"],
  EVA: ["eva", "spacewalk", "extravehicular", "space suit", "spacesuit", "السير في الفضاء", "العمل خارج المركبه", "بدله الفضاء"],
  soil: ["soil", "regolith", "sediment", "sand", "rock", "rocks", "تربة", "التراب", "ريغوليث", "رواسب", "رمل", "حصى", "صخور", "صخر"],
  geology: ["geology", "geological", "terrain", "surface", "crater", "lava", "volcanic", "جيولوجيا", "تضاريس", "سطح", "فوهة", "حمم", "بركان"],
  water: ["water", "ice", "frost", "brine", "humidity", "ماء", "مياه", "جليد", "ثلج", "صقيع", "رطوبة", "ملوحة"],
  atmosphere: ["atmosphere", "pressure", "air", "oxygen", "breathe", "co2", "غلاف جوي", "ضغط", "هواء", "اكسجين", "تنفس", "ثاني اكسيد الكربون"],
  climate: ["climate", "weather", "temperature", "heat", "hot", "cold", "حرارة", "حراره", "طقس", "مناخ", "بارد", "برودة", "حر"],
  dust: ["dust", "dust storm", "dust storms", "غبار", "غبار قمري", "غبار مريخي", "عاصفة ترابية", "عواصف ترابية"],
  radiation: ["radiation", "cosmic ray", "solar particle", "اشعاع", "إشعاع", "اشعه", "أشعة"],
  biology: ["life", "biology", "microbe", "biosignature", "organic", "كائن", "حياة", "احياء", "ميكروب", "مؤشر حيوي", "بصمة حيوية", "مادة عضوية"],
  robotics: ["robot", "robotic", "rover", "wheel", "mobility", "vehicle", "drill", "روبوت", "روبوتات", "عربة", "عربات", "مركبة", "مركبات", "جوالة", "عجلات", "حفر", "مثقاب"],
  mission: ["mission", "nasa", "artemis", "apollo", "perseverance", "curiosity", "moxie", "lro", "بعثة", "مهمة", "ناسا", "ارتميس", "ابولو", "بيرسيفيرانس", "كوريوسيتي"],
  analog: ["analog", "analogue", "simulation", "simulate", "test", "testing", "field test", "تناظري", "محاكاة", "يحاكي", "اختبار", "تجربة", "ميداني"],
  engineering: ["engineering", "equipment", "technology", "solution", "problem", "challenge", "risk", "هندسي", "معدات", "تقنية", "حل", "مشكلة", "تحدي", "خطر", "مخاطر"],
  problem: ["problem", "challenge", "risk", "issue", "hazard", "مشكلات", "مشاكل", "مشكلة", "تحدي", "تحديات", "خطر", "مخاطر"],
  solution: ["solution", "mitigation", "fix", "solve", "حل", "علاج", "معالجة", "تقليل", "نواجه", "نتعامل مع"],
  landing: ["landing", "touchdown", "hazard avoidance", "navigation", "هبوط", "تجنب العوائق", "ملاحة", "منحدر"],
  isolation: ["isolation", "confinement", "crew", "sleep", "psychology", "عزلة", "انغلاق", "حصر", "طاقم", "نوم", "نفسي"],
  map: ["map", "imagery", "image", "gallery", "gis", "خريطة", "صور", "صورة", "معرض", "طبقة"],
  sources: ["source", "sources", "reference", "references", "citation", "مراجع", "مصدر", "مصادر", "مرجع", "توثيق"],
  methodology: ["method", "methodology", "criteria", "how do you compare", "منهج", "منهجية", "معيار", "كيف تقارن", "كيف نقارن"],
  importance: ["important", "importance", "benefit", "useful", "why", "اهمية", "أهمية", "مهم", "فائدة", "يفيد", "لماذا", "ليه", "ليش"],
  game: ["game", "controls", "play", "لعبة", "اللعبة", "التحكم", "العب", "تحكم"]
};
const GUIDE_CHAT_TOPIC_HINTS = {
  "moon-surface": ["moon", "dust", "engineering"],
  "mars-surface": ["mars", "atmosphere", "engineering"],
  "devon-site": ["analog", "soil", "robotics", "cold", "engineering"],
  "atacama-site": ["analog", "soil", "biology", "robotics", "engineering"],
  "death-valley-site": ["analog", "climate", "geology", "engineering"],
  "mcmurdo-site": ["analog", "water", "cold", "isolation", "soil"],
  "hawaii-site": ["analog", "geology", "robotics", "landing"],
  "meteor-site": ["analog", "geology", "comparison"]
};

let guideCorpusCache = null;

function normalizeGuideText(value) {
  return String(value || "").toLowerCase().normalize("NFD")
    .replace(/[\u064B-\u065F\u0670\u0640\u0300-\u036F]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/[ؤئ]/g, "ء").replace(/ة/g, "ه").replace(/ى/g, "ي").replace(/گ/g, "ك")
    .replace(/(.)\1{2,}/g, "$1$1").replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim();
}

function guideChatTokens(value) {
  const raw = normalizeGuideText(value).match(/[\p{L}\p{N}]+/gu) || [];
  return raw.map(token => {
    if (!/^[\u0600-\u06FF]+$/.test(token)) return token;
    const prefix = ["وال", "بال", "كال", "فال", "لل", "و", "ف", "ب", "ك", "ل"].find(value => token.startsWith(value) && token.length - value.length > 2);
    const withoutPrefix = prefix ? token.slice(prefix.length) : token;
    return withoutPrefix.startsWith("ال") && withoutPrefix.length > 4 ? withoutPrefix.slice(2) : withoutPrefix;
  }).filter(token => token.length > 1 && !GUIDE_CHAT_STOP_WORDS.has(token));
}

function guideEditDistanceOne(first, second) {
  if (first === second) return true;
  if (Math.abs(first.length - second.length) > 1 || Math.min(first.length, second.length) < 4) return false;
  let a = 0;
  let b = 0;
  let edits = 0;
  while (a < first.length && b < second.length) {
    if (first[a] === second[b]) { a += 1; b += 1; continue; }
    edits += 1;
    if (edits > 1) return false;
    if (first.length > second.length) a += 1;
    else if (second.length > first.length) b += 1;
    else { a += 1; b += 1; }
  }
  return edits + Number(a < first.length || b < second.length) <= 1;
}

function guideTokenMatches(token, candidate) {
  if (token === candidate) return true;
  const isArabic = /^[\u0600-\u06FF]+$/.test(token) && /^[\u0600-\u06FF]+$/.test(candidate);
  if (token[0] !== candidate[0] || (isArabic && token.slice(0, 2) !== candidate.slice(0, 2))) return false;
  return guideEditDistanceOne(token, candidate);
}

function guideHasWholePhrase(normalized, phrase) {
  const cleanPhrase = normalizeGuideText(phrase);
  return Boolean(cleanPhrase) && (` ${normalized} `).includes(` ${cleanPhrase} `);
}

function guideChatTopics(text) {
  const normalized = normalizeGuideText(text);
  const tokens = guideChatTokens(normalized);
  return Object.entries(GUIDE_CHAT_TOPICS).filter(([, aliases]) => aliases.some(alias => {
    if (guideHasWholePhrase(normalized, alias)) return true;
    const aliasTokens = guideChatTokens(alias);
    return aliasTokens.length === 1 && tokens.some(token => guideTokenMatches(token, aliasTokens[0]));
  })).map(([topic]) => topic);
}

function guideNasaSources(sources) {
  const unique = new Map();
  (sources || []).forEach(source => {
    const url = typeof source === "string" ? source : source?.url;
    if (!url) return;
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:" || !(parsed.hostname === "nasa.gov" || parsed.hostname.endsWith(".nasa.gov") || parsed.hostname === "nasa-gibs.github.io")) return;
      unique.set(url, { label: typeof source === "string" ? parsed.hostname : source.label || source.name || parsed.hostname, url });
    } catch { /* Invalid and non-NASA sources are not surfaced as scientific citations. */ }
  });
  return [...unique.values()];
}

function getGuideCorpus() {
  if (guideCorpusCache) return guideCorpusCache;
  const siteDocuments = sites.map(site => {
    const science = site.science || {};
    const english = GUIDE_SITE_ENGLISH[site.id] || {};
    const fields = [site.brief, site.country, site.subsite, site.type, site.guide?.summary, site.guide?.similarity, site.guide?.advantage, site.guide?.difference, site.guide?.more, science.geology, science.climate, science.rocks, science.terrain, science.water, science.mars, science.research, science.task, site.image?.title, site.image?.caption].filter(Boolean);
    const aliases = [...(GUIDE_CHAT_SITE_ALIASES[site.id] || []), site.ar, site.en, site.id.replaceAll("-", " "), site.subsite].filter(Boolean);
    return { id: `site-${site.id}`, kind: "site", siteId: site.id, title: `${site.ar} (${site.en})`, aliases, topics: [...new Set(["site", "analog", site.target === "القمر" ? "moon" : "mars", ...guideChatTopics(fields.join(" "))])], ar: fields.join(" "), en: [english.summary, english.geology, english.limit, site.en, site.country, site.subsite].filter(Boolean).join(" "), site, sources: guideNasaSources([...(science.sources || []), site.image?.source, nasaSourcePages[site.id]?.url]) };
  });
  const problemDocuments = siteProblemCards.map(problem => {
    const english = GUIDE_PROBLEM_ENGLISH[problem.key] || {};
    const siteId = ({ "devon-site": "devon", "atacama-site": "atacama", "death-valley-site": "death-valley", "mcmurdo-site": "mcmurdo", "hawaii-site": "hawaii", "meteor-site": "meteor-crater" })[problem.key] || null;
    const site = siteId ? sites.find(item => item.id === siteId) : null;
    const ar = [problem.title, problem.target, problem.problem, problem.cause, problem.effect, problem.status, problem.solution].join(" ");
    const en = [english.problem, english.cause, english.effect, english.status, english.solution].filter(Boolean).join(" ");
    return { id: `problem-${problem.key}`, kind: "problem", siteId, title: problem.title, aliases: [problem.title, problem.target, site?.ar, site?.en, ...(GUIDE_CHAT_SITE_ALIASES[siteId] || [])].filter(Boolean), topics: [...new Set(["problem", "engineering", "solution", ...(GUIDE_CHAT_TOPIC_HINTS[problem.key] || []), ...guideChatTopics(`${ar} ${en}`)])], ar, en, fieldsAr: { problem: problem.problem, cause: problem.cause, effect: problem.effect, status: problem.status, solution: problem.solution }, fieldsEn: english, site, sources: guideNasaSources(problem.sources || []) };
  });
  const crewProblemDocuments = GUIDE_CREW_PROBLEMS.map(problem => ({
    ...problem,
    kind: "problem",
    aliases: [problem.title, problem.titleEn, ...(problem.aliases || [])],
    ar: `${problem.title} ${problem.ar} ${Object.values(problem.fieldsAr).join(" ")}`,
    en: `${problem.titleEn} ${problem.en} ${Object.values(problem.fieldsEn).join(" ")}`,
    fieldsAr: problem.fieldsAr,
    fieldsEn: problem.fieldsEn,
    sources: guideNasaSources(problem.sources || [])
  }));
  const references = GUIDE_REFERENCE_DOCUMENTS.map(document => ({ ...document, kind: "reference", topics: [...new Set([...document.topics, ...guideChatTopics(`${document.ar} ${document.en}`)])], sources: guideNasaSources(document.sources || []) }));
  guideCorpusCache = [...siteDocuments, ...problemDocuments, ...crewProblemDocuments, ...references].map(document => {
    const text = `${document.title} ${(document.aliases || []).join(" ")} ${document.ar} ${document.en} ${(document.topics || []).join(" ")}`;
    const tokens = guideChatTokens(text);
    return { ...document, tokens, tokenSet: new Set(tokens) };
  });
  return guideCorpusCache;
}

function analyzeGuideQuestion(question) {
  const normalized = normalizeGuideText(question);
  const tokens = guideChatTokens(question);
  const topics = guideChatTopics(question);
  const siteIds = [];
  for (const site of sites) {
    const aliases = [...(GUIDE_CHAT_SITE_ALIASES[site.id] || []), site.ar, site.en, site.id.replaceAll("-", " "), site.subsite].filter(Boolean);
    const direct = aliases.some(alias => normalized.includes(normalizeGuideText(alias)));
    const fuzzy = !direct && aliases.some(alias => {
      const aliasTokens = guideChatTokens(alias);
      return aliasTokens.length === 1 && tokens.some(token => guideTokenMatches(token, aliasTokens[0]));
    });
    if (direct || fuzzy) siteIds.push(site.id);
  }
  const worlds = Object.entries(GUIDE_CHAT_WORLDS).filter(([, aliases]) => aliases.some(alias => normalized.includes(normalizeGuideText(alias)))).map(([world]) => world);
  const allSites = ["all sites", "every site", "all locations", "all six", "compare all", "جميع المواقع", "كل المواقع", "كل المواقع الست", "المواقع الست", "قارن المواقع", "قارن بين المواقع"].some(alias => normalized.includes(normalizeGuideText(alias)));
  const followUp = /^(?:وماذا(?: عن)?|وكيف(?: حال)?|وكمان|وال(?:تربه|ماء|غبار|ضغط|حراره|صخور)|طيب(?:\s|$)|طب(?:\s|$)|كمان(?:\s|$)|and what\b|what about\b|how about\b|why\??$|how\??$|لماذا\??$|ليه\??$|كيف\??$)/.test(normalized)
    || /(?:هذه المنطقه|المنطقه دي|المنطقه دى|الموقع ده|المكان ده|هذه المنطقه|this area|this site|that site|\bthere\b|\bit\b)/.test(normalized);
  const arabicCount = (String(question).match(/[\u0600-\u06FF]/g) || []).length;
  const latinCount = (String(question).match(/[a-z]/gi) || []).length;
  return { normalized, tokens, topics, siteIds, worlds, allSites, followUp, language: latinCount > arabicCount * 1.2 ? "en" : "ar" };
}

function rankGuideDocuments(analysis, context) {
  const documents = getGuideCorpus();
  const topics = new Set(analysis.topics.length ? analysis.topics : (analysis.followUp ? context?.topics || [] : []));
  const queryTerms = new Set(analysis.tokens);
  for (const topic of topics) {
    queryTerms.add(topic);
    (GUIDE_CHAT_TOPICS[topic] || []).forEach(alias => guideChatTokens(alias).forEach(token => queryTerms.add(token)));
  }
  const averageLength = documents.reduce((sum, document) => sum + document.tokens.length, 0) / Math.max(documents.length, 1);
  const scored = documents.map(document => {
    let score = 0;
    for (const term of queryTerms) {
      let frequency = document.tokens.reduce((total, token) => total + Number(token === term), 0);
      if (!frequency && term.length >= 4) frequency = Number(document.tokens.some(token => guideTokenMatches(token, term))) * 0.35;
      if (!frequency) continue;
      const documentFrequency = documents.reduce((total, candidate) => total + Number(candidate.tokenSet.has(term) || candidate.topics.includes(term)), 0);
      const inverseFrequency = Math.log(1 + (documents.length - documentFrequency + 0.5) / (documentFrequency + 0.5));
      score += inverseFrequency * (frequency * 2.2) / (frequency + 1.2 * (0.25 + 0.75 * document.tokens.length / averageLength));
      if (document.topics.includes(term)) score += 1.35;
    }
    if ([document.title, ...(document.aliases || [])].some(alias => normalizeGuideText(alias) && analysis.normalized.includes(normalizeGuideText(alias)))) score += 4.5;
    if (analysis.siteIds.includes(document.siteId)) score += document.kind === "problem" ? 5.5 : 4.5;
    if (analysis.worlds.some(world => document.topics.includes(world))) score += 1.25;
    if (analysis.followUp && context?.siteIds?.includes(document.siteId)) score += 3.2;
    if (analysis.followUp && context?.worlds?.some(world => document.topics.includes(world))) score += 2.2;
    return { document, score };
  }).sort((first, second) => second.score - first.score);
  return { topics: [...topics], ranked: scored.filter(item => item.score > 0.35).slice(0, 8) };
}

function guideCitations(sources, language = "ar") {
  if (!sources?.length) return language === "en" ? "\n\n**NASA references:** None are recorded for this entry." : "\n\n**المصادر:** لا يوجد مرجع NASA مسجل لهذه المعلومة.";
  const heading = language === "en" ? "NASA references" : "مصادر NASA";
  return `\n\n**${heading}:**\n${sources.slice(0, 4).map(source => `- [${source.label}](${source.url})`).join("\n")}`;
}

function formatGuideProblem(document, language) {
  const fields = language === "en" ? document.fieldsEn : document.fieldsAr;
  const siteName = language === "en" ? document.site?.en : document.site?.ar;
  const heading = language === "en" ? `${siteName ? `${siteName} — ` : ""}${GUIDE_PROBLEM_ENGLISH_TITLES[document.id.replace("problem-", "")] || document.title}` : siteName ? `${siteName} — ${document.title}` : document.title;
  const title = language === "en" ? document.titleEn || GUIDE_PROBLEM_ENGLISH_TITLES[document.id.replace("problem-", "")] || document.title : document.title;
  const labels = language === "en"
    ? { problem: "Problem", cause: "Cause", effect: "Effect on exploration", status: "Solution status", solution: "Engineering/scientific response" }
    : { problem: "المشكلة", cause: "السبب", effect: "الأثر على الاستكشاف", status: "حالة الحل", solution: "الحل الهندسي/العلمي" };
  return `## ${language === "en" && document.kind === "problem" && !document.site ? title : heading}\n- **${labels.problem}:** ${fields.problem}\n- **${labels.cause}:** ${fields.cause}\n- **${labels.effect}:** ${fields.effect}\n- **${labels.status}:** ${fields.status}\n- **${labels.solution}:** ${fields.solution}${guideCitations(document.sources, language)}`;
}

function formatGuideSite(document, language, topics) {
  const site = document.site;
  const science = site.science || {};
  if (language === "en") {
    const english = GUIDE_SITE_ENGLISH[site.id] || {};
    const lines = [`## ${site.en} — ${english.environment || "Earth analog site"}`, `Location: ${english.location || site.country}${english.subsite ? `; subsite: ${english.subsite}` : ""}.`, english.summary || site.guide.summary];
    if (topics.includes("geology") || topics.includes("soil")) lines.push(english.geology || "The project has no site-specific field measurement for this topic.");
    if (topics.includes("water")) lines.push(`Water: ${english.water || "The project has no verified local water measurement for this site."}`);
    if (topics.includes("climate")) lines.push(`Climate: ${english.climate || "No local, time-stamped weather measurement is recorded in this project."}`);
    if (topics.includes("analog") || topics.includes("methodology") || topics.includes("comparison")) lines.push(`Analog use and limits: ${english.advantage || window.siteI18n?.translateValue(site.guide.advantage) || site.guide.advantage} ${english.limit || site.guide.difference}`);
    return `${lines.join("\n\n")}${guideCitations(document.sources, language)}`;
  }
  const lines = [`## ${site.ar} (${site.en})`, `**نوع البيئة:** ${site.type} · ${site.country} · ${site.subsite}.`];
  if (topics.includes("geology") || topics.includes("soil")) lines.push(`**الجيولوجيا والتربة:** ${science.geology || science.rocks || site.brief} ${science.rocks || ""} ${science.terrain || ""}`);
  else lines.push(`**ملخص الموقع:** ${site.brief} ${site.guide.summary}`);
  if (topics.includes("water")) lines.push(`**الماء:** ${science.water || "لا تتوفر في سجل المشروع قياسات موضعية للماء."}`);
  if (topics.includes("climate")) lines.push(`**المناخ:** ${science.climate || "لا تتوفر قياسات محلية مؤرخة في سجل المشروع."}`);
  if (topics.includes("analog") || topics.includes("methodology") || topics.includes("comparison") || topics.length === 0) lines.push(`**ما يمكن دراسته وحدود القياس:** ${site.guide.advantage} ${site.guide.difference}`);
  return `${lines.join("\n\n")}${guideCitations(document.sources, language)}`;
}

function formatGuideReference(document, language) {
  const heading = language === "en" ? document.enTitle || document.title : document.title;
  const text = language === "en" ? document.en : document.ar;
  return `## ${heading}\n${text}${guideCitations(document.sources, language)}`;
}

function formatAllGuideSites(language) {
  const rows = sites.map(site => {
    const english = GUIDE_SITE_ENGLISH[site.id] || {};
    if (language === "en") return `| ${site.en} | ${english.environment || "Earth analog site"} | ${english.summary || site.brief} | ${english.limit || site.guide.difference} |`;
    return `| ${site.ar} | ${site.target} · ${site.type} | ${site.guide.advantage} | ${site.guide.difference} |`;
  });
  const header = language === "en"
    ? "| Site | Environment | Documented use / data | Limit |\n| --- | --- | --- | --- |"
    : "| الموقع | البيئة | ما يدعمه السجل | حد المقارنة |\n| --- | --- | --- | --- |";
  const sources = guideNasaSources(sites.flatMap(site => [...(site.science.sources || []), nasaSourcePages[site.id]?.url]));
  const note = language === "en" ? "**Note:** Earth analogs test specific operations; they do not reproduce lunar or Martian gravity, atmosphere, or radiation." : "**ملاحظة:** المواقع الأرضية تختبر عمليات أو أسئلة محددة، ولا تعيد إنتاج جاذبية القمر أو المريخ أو غلافهما أو إشعاعهما.";
  return `${language === "en" ? "## Project sites compared" : "## مقارنة مواقع المشروع"}\n${header}\n${rows.join("\n")}\n\n${note}${guideCitations(sources, language)}`;
}

function formatGuideCrewOverview(language) {
  const groups = language === "en" ? [
    { title: "Human health", ids: ["crew-microgravity", "crew-radiation", "crew-psychology"] },
    { title: "Habitat and resources", ids: ["crew-life-support", "crew-thermal", "crew-resources", "crew-dust"] },
    { title: "Mission operations", ids: ["crew-communications", "crew-equipment", "crew-landing", "crew-eva"] }
  ] : [
    { title: "الصحة البشرية", ids: ["crew-microgravity", "crew-radiation", "crew-psychology"] },
    { title: "الموطن والموارد", ids: ["crew-life-support", "crew-thermal", "crew-resources", "crew-dust"] },
    { title: "عمليات المهمة", ids: ["crew-communications", "crew-equipment", "crew-landing", "crew-eva"] }
  ];
  const documents = new Map(GUIDE_CREW_PROBLEMS.map(document => [document.id, document]));
  const sections = groups.map(group => `### ${group.title}\n${group.ids.map(id => {
    const document = documents.get(id);
    const fields = language === "en" ? document.fieldsEn : document.fieldsAr;
    return `- **${language === "en" ? document.titleEn : document.title}:** ${fields.problem} ${fields.solution}`;
  }).join("\n")}`).join("\n\n");
  const sources = guideNasaSources(GUIDE_CREW_PROBLEMS.flatMap(document => document.sources)).slice(0, 10);
  return `${language === "en" ? "## Main crew risks and engineering responses" : "## أبرز مخاطر الطاقم والاستجابات الهندسية"}\n${sections}\n\n${language === "en" ? "These controls are mission-specific. ISS experience cannot be assumed to solve Mars communication, resupply, radiation, or surface risks; proposed and demonstration technologies are not operational systems." : "تختلف الضوابط حسب المهمة؛ لا تُنقل حلول محطة الفضاء الدولية تلقائيًا إلى مخاطر الاتصالات والإمداد والإشعاع والعمل السطحي على المريخ. العروض التقنية والمقترحات ليست أنظمة تشغيلية مكتملة."}${guideCitations(sources, language)}`;
}

function getGuideLanguage() {
  return window.siteI18n?.language === "en" ? "en" : "ar";
}

function answerGeneralConversation(question, language) {
  const normalized = normalizeGuideText(question);
  const has = (...phrases) => phrases.some(phrase => guideHasWholePhrase(normalized, phrase));
  const english = language === "en";

  if (has("how are you", "how are you doing", "how is it going", "ازيك", "عامل ايه", "عامله ايه", "اخبارك ايه")) {
    return english ? "I'm doing well, thanks for asking. What would you like to talk about?" : "أنا بخير، شكرًا لسؤالك. تحب نتكلم عن إيه؟";
  }
  if (has("hello", "hi", "hey", "مرحبا", "اهلا", "السلام عليكم", "صباح الخير", "مساء الخير", "ازيك")) {
    return english ? "Hi! How can I help? We can chat, or explore the project's science together." : "أهلًا! أقدر أساعدك في سؤال عادي أو نستكشف معلومات المشروع سوا.";
  }
  if (has("thank you", "thanks", "شكرا", "متشكر", "تسلم")) {
    return english ? "You're welcome!" : "العفو!";
  }
  if (has("goodbye", "bye", "see you", "مع السلامه", "سلام", "اشوفك بعدين")) {
    return english ? "Goodbye! Come back whenever you'd like to continue." : "مع السلامة! ارجع وقت ما تحب نكمل.";
  }
  if (has("who are you", "what is your name", "what's your name", "are you an ai", "هل انت ذكاء اصطناعي", "اسمك ايه", "من انت")) {
    return english ? "I'm the Planetary Exploration project assistant. I answer from the project's local records; I'm not connected to a general-purpose AI service." : "أنا مساعد مشروع استكشاف الكواكب. أجيب من سجلات المشروع المحلية، ولست متصلًا بخدمة ذكاء اصطناعي عامة.";
  }
  if (has("what can you do", "how can you help", "help me", "ماذا تستطيع", "تقدر تعمل ايه", "ممكن تساعدني", "ساعدني")) {
    return english ? "I can chat about common topics, explain the project's sites and NASA references, compare analog environments, and answer simple arithmetic. I don't have live web access." : "أقدر أجاوب على التحيات والأسئلة البسيطة، وأشرح مواقع المشروع ومراجع NASA وأقارن البيئات، وكمان أحل عمليات حسابية بسيطة. ما عنديش اتصال مباشر بالويب.";
  }
  return null;
}

function answerGuideArithmetic(question, language) {
  const match = String(question).match(/(-?\d+(?:\.\d+)?)\s*([+\-*/×÷])\s*(-?\d+(?:\.\d+)?)/);
  if (!match) return null;
  const first = Number(match[1]);
  const second = Number(match[3]);
  const operations = { "+": () => first + second, "-": () => first - second, "*": () => first * second, "/": () => first / second, "×": () => first * second, "÷": () => first / second };
  const result = operations[match[2]]();
  if (!Number.isFinite(result)) return language === "en" ? "Division by zero is undefined." : "لا يمكن القسمة على صفر.";
  return language === "en" ? `The result is **${result}**.` : `الناتج هو **${result}**.`;
}

function answerQuestion(question) {
  const trimmed = String(question || "").trim();
  if (!trimmed) return "";
  const language = getGuideLanguage();
  const generalReply = answerGeneralConversation(trimmed, language);
  if (generalReply) return generalReply;
  const arithmeticReply = answerGuideArithmetic(trimmed, language);
  if (arithmeticReply) return arithmeticReply;
  const analysis = analyzeGuideQuestion(trimmed);
  const previous = guideContext && typeof guideContext === "object" ? guideContext : {};
  const previousSiteIds = previous.siteIds || (previous.siteId ? [previous.siteId] : []);
  if (!analysis.followUp && !analysis.siteIds.length && !analysis.worlds.length && analysis.tokens.length <= 3
    && (previousSiteIds.length || (previous.worlds || []).length)) analysis.followUp = true;
  let siteIds = analysis.siteIds;
  let worlds = analysis.worlds;
  if (analysis.followUp) {
    if (!siteIds.length) siteIds = previousSiteIds;
    if (!worlds.length) worlds = previous.worlds || [];
  }
  if (!siteIds.length && !worlds.length && !analysis.followUp) {
    const activeRoute = route().split("/");
    if (activeRoute[0] === "site" && sites.some(site => site.id === activeRoute[1])) siteIds = [activeRoute[1]];
  }
  const intentTopics = new Set(["comparison", "importance", "problem", "solution", "sources", "methodology", "game"]);
  const hasNewSubject = analysis.topics.some(topic => !intentTopics.has(topic));
  const contextTopics = analysis.followUp
    ? [...new Set([...(previous.topics || []).filter(topic => hasNewSubject ? topic === "crew" : !intentTopics.has(topic)), ...analysis.topics])]
    : analysis.topics;
  if (analysis.siteIds.length || analysis.worlds.length || analysis.followUp || analysis.topics.length) {
    guideContext = { siteIds, worlds, topics: contextTopics, lastQuestion: trimmed, updatedAt: Date.now() };
    writeStore("atlas-guide-context", guideContext);
  }
  const normalized = analysis.normalized;
  const has = (...phrases) => phrases.some(phrase => normalized.includes(normalizeGuideText(phrase)));
  const asksForAllCrewRisks = (contextTopics.includes("crew") && contextTopics.includes("problem") && !contextTopics.includes("comparison"))
    || has("مشاكل رواد الفضاء", "مشكلات رواد الفضاء", "تحديات رواد الفضاء", "كل مشاكل الطاقم", "جميع مشكلات الطاقم", "all astronaut problems", "all crew risks", "all challenges astronauts");
  const asksAboutUnprotectedMarsExposure = has("بدون بدلة", "من غير بدلة", "دون بدلة", "without a suit", "without spacesuit", "breathe on mars", "live on mars");
  if (has("فريق", "اعضاء", "من انتم", "team", "trinexus")) {
    return language === "en"
      ? "Analog TriNexus is the project team led by Marwan Osama Mohamed, with Alaa Ramadan, Martina Mounir Labib, Menna Ahmed, and Hanin Khairy Ezz El-Din. The project explores how Earth analog environments can support specific lunar and Mars research questions."
      : "فريق Analog TriNexus بقيادة مروان أسامة محمد، ويضم آلاء رمضان ومارتينا منير لبيب ومنة أحمد وحنين خيري عز الدين. يدرس المشروع كيف تدعم البيئات الأرضية أسئلة بحثية محددة عن القمر والمريخ.";
  }
  if (contextTopics.includes("game")) {
    const gameDocument = getGuideCorpus().find(document => document.id === "project-game");
    if (gameDocument) return formatGuideReference(gameDocument, language);
  }
  if (analysis.allSites) return formatAllGuideSites(language);
  if (asksForAllCrewRisks) return formatGuideCrewOverview(language);
  const comparison = contextTopics.includes("comparison") || has("قارن", "مقارنة", "الفرق بين", "compare", "versus", "vs");
  const ranked = rankGuideDocuments({ ...analysis, siteIds, worlds }, { ...previous, siteIds, worlds, topics: contextTopics });
  const corpus = getGuideCorpus();

  if (comparison && (siteIds.length + worlds.length > 1)) {
    if (siteIds.length && worlds.length) {
      const siteDocs = siteIds.map(id => corpus.find(doc => doc.kind === "site" && doc.siteId === id)).filter(Boolean);
      const worldDocs = worlds.map(world => corpus.find(doc => doc.kind === "reference" && doc.id === `${world}-world`)).filter(Boolean);
      const soilDoc = contextTopics.includes("soil") ? corpus.find(doc => doc.id === "soil-earth-mars") : null;
      const siteRows = siteDocs.map(doc => {
        const facts = contextTopics.includes("soil") ? `${doc.site.science?.geology || ""} ${doc.site.science?.rocks || ""}`.trim() : contextTopics.includes("water") ? doc.site.science?.water : doc.site.guide.similarity;
        const detail = facts || GUIDE_SITE_ENGLISH[doc.siteId]?.summary || doc.site.brief;
        const requestedWorld = worlds.map(world => world === "moon" ? (language === "en" ? "Moon" : "القمر") : world === "mars" ? (language === "en" ? "Mars" : "المريخ") : (language === "en" ? "Earth" : "الأرض")).join(", ");
        const siteType = language === "en" ? `Earth site · requested comparison: ${requestedWorld}` : `موقع أرضي · المقارنة المطلوبة: ${requestedWorld}`;
        return language === "en" ? `| ${doc.site.en} | ${siteType} | ${GUIDE_SITE_ENGLISH[doc.siteId]?.summary || detail} | ${GUIDE_SITE_ENGLISH[doc.siteId]?.limit || doc.site.guide.difference} |` : `| ${doc.site.ar} | ${siteType} | ${detail} | ${doc.site.guide.difference} |`;
      });
      const worldRows = worldDocs.map(doc => {
        const label = doc.id === "moon-world" ? (language === "en" ? "Moon" : "القمر") : (language === "en" ? "Mars" : "المريخ");
        const worldDetail = soilDoc && doc.id === "mars-world" ? (language === "en" ? "Mars has mineral regolith and dust; compare analyzed samples rather than assuming it is ordinary Earth soil." : "للمريخ ريغوليث وغبار معدني؛ يجب مقارنة عينات محللة لا افتراض أنها تربة أرضية عادية.") : language === "en" ? doc.en : doc.ar;
        return language === "en" ? `| ${label} | Planet | ${worldDetail} | Earth sites only reproduce specific questions. |` : `| ${label} | عالم فضائي | ${worldDetail} | المواقع الأرضية لا تحاكي إلا سؤالًا محددًا. |`;
      });
      const table = language === "en" ? "| Entity | Type | Relevant facts | Limit |\n| --- | --- | --- | --- |" : "| المكان/العالم | النوع | المعلومات ذات الصلة | حد المقارنة |\n| --- | --- | --- | --- |";
      const soilNote = soilDoc ? `\n\n${language === "en" ? soilDoc.en : soilDoc.ar}` : "";
      return `## ${language === "en" ? "Comparison" : "المقارنة"}\n${table}\n${[...siteRows, ...worldRows].join("\n")}${soilNote}\n\n${guideCitations([...siteDocs, ...worldDocs, ...(soilDoc ? [soilDoc] : [])].flatMap(doc => doc.sources), language)}`;
    }
    if (!siteIds.length && contextTopics.includes("soil") && worlds.includes("mars") && worlds.includes("earth")) {
      const soilDoc = corpus.find(doc => doc.id === "soil-earth-mars");
      if (soilDoc) return formatGuideReference(soilDoc, language);
    }
    const docs = (siteIds.length ? siteIds : worlds.map(world => world)).map(id => corpus.find(doc => doc.kind === (siteIds.length ? "site" : "reference") && (siteIds.length ? doc.siteId === id : doc.id === `${id}-world`))).filter(Boolean);
    if (docs.length > 1) {
      const rows = docs.map(doc => language === "en" ? `| ${doc.site?.en || doc.enTitle} | ${doc.site ? GUIDE_SITE_ENGLISH[doc.siteId]?.environment || "Earth analog site" : (doc.id === "moon-world" ? "Moon" : "Mars")} | ${doc.site ? GUIDE_SITE_ENGLISH[doc.siteId]?.summary || doc.site.brief : doc.en} | ${doc.site ? GUIDE_SITE_ENGLISH[doc.siteId]?.limit || doc.site.guide.difference : "Planetary conditions are not reproduced by Earth sites."} |` : `| ${doc.site?.ar || doc.title} | ${doc.site ? `${doc.site.target} · ${doc.site.type}` : (doc.id === "moon-world" ? "القمر" : "المريخ")} | ${doc.site?.guide.similarity || doc.ar} | ${doc.site?.guide.difference || "تختلف الظروف الكوكبية عن المواقع الأرضية."} |`);
      const header = language === "en" ? "| Site/world | Environment | Similarity or evidence | Difference/limit |\n| --- | --- | --- | --- |" : "| الموقع/العالم | البيئة | وجه الشبه/الدليل | الاختلاف/الحد |\n| --- | --- | --- | --- |";
      return `${language === "en" ? "## Comparison" : "## المقارنة"}\n${header}\n${rows.join("\n")}\n\n${guideCitations(docs.flatMap(doc => doc.sources || []), language)}`;
    }
  }

  if (asksAboutUnprotectedMarsExposure) {
    const marsAtmosphereProblem = corpus.find(document => document.id === "problem-mars-surface");
    const lifeSupportProblem = corpus.find(document => document.id === "crew-life-support");
    if (marsAtmosphereProblem && lifeSupportProblem) return `${formatGuideProblem(marsAtmosphereProblem, language)}\n\n---\n\n${formatGuideProblem(lifeSupportProblem, language)}`;
  }

  if (siteIds.length) {
    const answers = [];
    for (const siteId of siteIds.slice(0, 3)) {
      const siteDoc = corpus.find(doc => doc.kind === "site" && doc.siteId === siteId);
      const problemDoc = corpus.find(doc => doc.kind === "problem" && doc.siteId === siteId);
      const asksForProblem = ["engineering", "solution", "problem", "landing", "robotics", "dust", "climate", "biology"].some(topic => contextTopics.includes(topic)) || (contextTopics.includes("analog") && contextTopics.includes("robotics")) || has("مشكلة", "تحدي", "حل", "روبوت", "حفر", "حرارة", "غبار", "مؤشرات الحياة", "problem", "solution", "robot");
      answers.push(asksForProblem && problemDoc ? formatGuideProblem(problemDoc, language) : formatGuideSite(siteDoc, language, contextTopics));
    }
    return answers.join("\n\n---\n\n");
  }

  const rankedReferences = ranked.ranked.filter(item => item.document.kind === "reference");
  const broadTopics = new Set(["engineering", "problem", "solution", "analog", "methodology", "comparison", "importance", "crew"]);
  const specificTopics = contextTopics.filter(topic => !broadTopics.has(topic));
  const relevantProblems = ranked.ranked.filter(item => item.document.kind === "problem")
    .filter(item => specificTopics.some(topic => item.document.topics.includes(topic)));
  const bestProblem = relevantProblems[0];
  const asksForProblem = contextTopics.includes("problem") || contextTopics.includes("solution")
    || (contextTopics.includes("engineering") && specificTopics.length > 0)
    || asksAboutUnprotectedMarsExposure
    || (contextTopics.some(topic => ["crew", "health", "microgravity", "bones", "muscles", "radiation", "lifeSupport", "psychology", "isolation", "communication", "power", "EVA", "landing"].includes(topic)) && relevantProblems.length > 0);
  if (asksForProblem && bestProblem && (contextTopics.includes("crew") || !rankedReferences.length || bestProblem.score >= rankedReferences[0].score * 1.15)) {
    return relevantProblems.slice(0, contextTopics.length > 1 ? 2 : 1).map(item => formatGuideProblem(item.document, language)).join("\n\n---\n\n");
  }

  if (rankedReferences.length) {
    const top = rankedReferences.slice(0, contextTopics.length > 1 ? 3 : 2);
    return top.map(item => formatGuideReference(item.document, language)).join("\n\n---\n\n");
  }

  if (ranked.ranked.length && ranked.ranked[0].score >= 1.2) {
    const top = ranked.ranked.slice(0, 2);
    return top.map(item => formatGuideReference(item.document, language)).join("\n\n---\n\n");
  }
  if (analysis.followUp && !siteIds.length && !worlds.length && !previousSiteIds.length && !(previous.worlds || []).length) {
    return language === "en" ? "What site or topic should I continue with?" : "عن أي موقع أو موضوع تريد أن أتابع؟";
  }
  const legacyTopics = ["game", "sources", "methodology"].some(topic => contextTopics.includes(topic));
  if (legacyTopics && language === "ar") return answerQuestionLegacy(trimmed);
  return language === "en"
    ? "I could not find a well-supported answer in the project’s local NASA knowledge records. Please specify a planet, site, mission, or topic; I do not have a live external AI or web search connection."
    : "لم أجد إجابة موثقة كافية في قاعدة المعرفة المحلية للمشروع. حدّد كوكبًا أو موقعًا أو مهمة أو موضوعًا؛ لا أستخدم نموذجًا خارجيًا أو بحث ويب مباشرًا.";
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
  appendMessageContent(content, text, kind === "assistant");
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
function appendGuideInline(parent, text) {
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\((https:\/\/[^)\s]+)\)|(https:\/\/[^\s]+)/g;
  let textStart = 0;
  let match;
  while ((match = pattern.exec(text))) {
    parent.append(document.createTextNode(text.slice(textStart, match.index)));
    if (match[1]) {
      const strong = document.createElement("strong");
      strong.textContent = match[1];
      parent.append(strong);
    } else {
      const href = match[3] || match[4];
      const trailing = match[3] ? "" : (href.match(/[),.;،؛]+$/)?.[0] || "");
      const cleanHref = href.slice(0, href.length - trailing.length);
      try {
        if (new URL(cleanHref).protocol !== "https:") throw new Error("Unsupported link protocol");
        const link = document.createElement("a");
        link.href = cleanHref;
        link.textContent = match[2] || cleanHref;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        parent.append(link);
      } catch {
        parent.append(document.createTextNode(match[2] || cleanHref));
      }
      if (trailing) parent.append(document.createTextNode(trailing));
    }
    textStart = match.index + match[0].length;
  }
  parent.append(document.createTextNode(text.slice(textStart)));
}

function appendMessageContent(message, text, markdown = true) {
  if (!markdown) {
    message.textContent = text;
    return;
  }

  const lines = String(text).split(/\r?\n/);
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const element = document.createElement(heading[1].length <= 2 ? "h3" : "h4");
      appendGuideInline(element, heading[2]);
      message.append(element);
      index += 1;
      continue;
    }
    if (/^\s*\|/.test(line)) {
      const tableLines = [];
      while (index < lines.length && /^\s*\|/.test(lines[index])) tableLines.push(lines[index++]);
      const rows = tableLines.map(row => row.trim().replace(/^\||\|$/g, "").split("|").map(cell => cell.trim()))
        .filter(row => !row.every(cell => /^:?-{2,}:?$/.test(cell)));
      if (!rows.length) continue;
      const table = document.createElement("table");
      const head = document.createElement("thead");
      const headRow = document.createElement("tr");
      rows[0].forEach(value => { const cell = document.createElement("th"); appendGuideInline(cell, value); headRow.append(cell); });
      head.append(headRow);
      const body = document.createElement("tbody");
      rows.slice(1).forEach(row => {
        const tableRow = document.createElement("tr");
        row.forEach(value => { const cell = document.createElement("td"); appendGuideInline(cell, value); tableRow.append(cell); });
        body.append(tableRow);
      });
      table.append(head, body);
      const wrapper = document.createElement("div");
      wrapper.className = "guide-table-wrap";
      wrapper.append(table);
      message.append(wrapper);
      continue;
    }
    const listMatch = line.match(/^\s*(?:[-*•]|\d+[.)])\s+(.+)$/);
    if (listMatch) {
      const ordered = /^\s*\d+[.)]/.test(line);
      const list = document.createElement(ordered ? "ol" : "ul");
      while (index < lines.length) {
        const item = lines[index].match(/^\s*(?:[-*•]|\d+[.)])\s+(.+)$/);
        if (!item || /^\s*\d+[.)]/.test(lines[index]) !== ordered) break;
        const element = document.createElement("li");
        appendGuideInline(element, item[1]);
        list.append(element);
        index += 1;
      }
      message.append(list);
      continue;
    }
    const paragraph = document.createElement("p");
    const paragraphLines = [];
    while (index < lines.length && lines[index].trim() && !/^(?:#{1,4}\s|\s*\||\s*(?:[-*•]|\d+[.)])\s+)/.test(lines[index])) paragraphLines.push(lines[index++].trim());
    appendGuideInline(paragraph, paragraphLines.join(" "));
    message.append(paragraph);
  }
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
  const english = getGuideLanguage() === "en";
  guideBusy = true;
  if (input) input.disabled = true;
  if (sendButton) sendButton.disabled = true;
  const userMessage = addMessage(question.trim(), "user");
  appendMessageStatus(userMessage, english ? "Sending" : "جارٍ الإرسال", "is-sending");
  const thinking = document.createElement("div");
  thinking.className = "guide-thinking";
  thinking.setAttribute("role", "status");
  thinking.innerHTML = `<span class="guide-thinking-label">${english ? "Thinking" : "جارٍ التفكير"}</span><span class="typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>`;
  const stickBeforeThinking = isNearLatestMessage(messages);
  messages.append(thinking);
  if (stickBeforeThinking) messages.scrollTop = messages.scrollHeight;
  pendingGuideResponse = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const reply = answerQuestion(question.trim());
      appendMessageStatus(userMessage, english ? "Sent" : "تم الإرسال");
      playGuideTone("user");
      thinking.remove();
      const shouldStick = isNearLatestMessage(messages);
      const assistantMessage = createMessageElement("", "assistant");
      messages.append(assistantMessage);
      if (shouldStick) messages.scrollTop = messages.scrollHeight;
      await revealAssistantReply(reply, assistantMessage);
    } catch {
      thinking.remove();
      const errorMessage = addMessage(english ? "I couldn't prepare a local answer. Please try again; no external service is connected." : "تعذر تجهيز الإجابة محليًا. حاول مرة أخرى؛ لا يوجد اتصال بخدمة خارجية.", "assistant");
      errorMessage.classList.add("is-error");
      appendMessageStatus(errorMessage, english ? "Could not reply" : "تعذر الرد", "is-error");
      appendMessageStatus(userMessage, english ? "Not sent" : "لم يكتمل الإرسال", "is-error");
    } finally {
      guideBusy = false;
      if (input) { input.disabled = false; input.focus(); }
      if (sendButton) sendButton.disabled = false;
      if (guideConversationRefreshPending) refreshGuideConversation();
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
function getGuidePrompts() {
  const isEnglish = document.documentElement.lang === "en";
  const [kind, id] = route().split("/");
  const site = kind === "site" ? sites.find(item => item.id === id) : null;
  if (site) return isEnglish
    ? [`What can be tested at ${site.en}?`, `How does it differ from ${site.target === "القمر" ? "the Moon" : "Mars"}?`, `Which NASA source documents this site?`]
    : [`ما الذي يمكن اختباره في ${site.ar}؟`, `كيف يختلف الموقع عن ${site.target}؟`, `ما مصدر NASA الذي يوثّق هذا الموقع؟`];
  if (kind === "lunar") return isEnglish
    ? ["How do these sites support lunar research?", "What limits their similarity to the Moon?", "Compare the crater and lava environments."]
    : ["كيف تدعم هذه المواقع أبحاث القمر؟", "ما حدود تشابهها مع القمر؟", "قارن بين الفوهة والتضاريس البركانية."];
  if (kind === "mars-analogs") return isEnglish
    ? ["Why is Atacama useful for life-detection tests?", "How does Devon compare with Mars?", "What can these sites not simulate?"]
    : ["لماذا تفيد أتاكاما في اختبار البحث عن الحياة؟", "كيف تقارن ديفون بالمريخ؟", "ما الذي لا تستطيع هذه المواقع محاكاته؟"];
  if (kind === "problems") return isEnglish
    ? ["Which lunar dust solutions have been demonstrated?", "How does Mars pressure affect a crew?", "Compare a real NASA test with a proposed solution."]
    : ["ما حلول غبار القمر التي اختُبرت فعليًا؟", "كيف يؤثر ضغط المريخ على الطاقم؟", "ميّز بين اختبار NASA وحل مقترح."];
  if (kind === "map" || kind === "gallery" || kind === "sources") return isEnglish
    ? ["What does the map or image actually measure?", "Which NASA source is linked to this place?", "What are the limits of satellite imagery?"]
    : ["ما الذي تقيسه الخريطة أو الصورة فعلًا؟", "ما مصدر NASA المرتبط بهذا الموقع؟", "ما حدود الصور المدارية؟"];
  if (kind === "game") return isEnglish
    ? ["Are the samples in the game real?", "How do the touch controls work?", "Which parts of the scene are illustrative?"]
    : ["هل عينات اللعبة حقيقية؟", "كيف تعمل أزرار اللمس؟", "ما العناصر التوضيحية في المشهد؟"];
  return isEnglish
    ? ["Compare the Moon and Mars.", "Why is Atacama useful for space research?", "How does NASA test rover technology?"]
    : ["قارن بين القمر والمريخ.", "لماذا تفيد أتاكاما أبحاث الفضاء؟", "كيف تختبر NASA تقنيات المركبات؟"];
}

function updateGuidePrompts() {
  const container = document.getElementById("guide-prompts");
  if (!container) return;
  container.replaceChildren(...getGuidePrompts().map(prompt => {
    const button = document.createElement("button");
    button.className = "guide-prompt";
    button.type = "button";
    button.textContent = prompt;
    return button;
  }));
}

function startGuide() {
  if (guideStarted) return;
  guideStarted = true;
  const box = document.getElementById("guide-messages");
  if (guideHistory.length) refreshGuideConversation();
  else addMessage(getGuideLanguage() === "en"
    ? `Hello! I can explain the project's ${sites.length} sites and the limits of each scientific comparison.`
    : `مرحبًا! أستطيع شرح المواقع الـ${sites.length} وحدود المقارنة العلمية.`);
  updateGuidePrompts();
}

function refreshGuideConversation() {
  const box = document.getElementById("guide-messages");
  if (!guideStarted || !box) return;
  if (guideBusy) {
    guideConversationRefreshPending = true;
    return;
  }
  guideConversationRefreshPending = false;
  const english = window.siteI18n?.language === "en";
  const previousHistory = guideHistory;
  guideContext = null;
  let pendingQuestion = null;
  guideHistory = previousHistory.map(item => {
    if (item.kind === "user") {
      pendingQuestion = item.text;
      return item;
    }
    if (!pendingQuestion) {
      return { text: english ? `Hello! I can explain the project's ${sites.length} sites and the limits of each scientific comparison.` : `مرحبًا! أستطيع شرح المواقع الـ${sites.length} وحدود المقارنة العلمية.`, kind: "assistant" };
    }
    const text = answerQuestion(pendingQuestion);
    pendingQuestion = null;
    return { text, kind: "assistant" };
  });
  writeStore("atlas-guide-conversation", guideHistory);
  box.replaceChildren(...guideHistory.map(item => createMessageElement(item.text, item.kind)));
  box.scrollTop = box.scrollHeight;
  updateGuidePrompts();
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
document.addEventListener("click", event => {
  if (!event.target.closest(".language-toggle")) return;
  window.siteI18n?.toggle();
});
window.addEventListener("site-language-change", event => {
  spaceGameEngine?.setSpaceExplorerLanguage?.(event.detail?.language);
  refreshJourneyLogs();
  refreshGuideConversation();
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
  document.body.classList.toggle("page-hidden", document.hidden);
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
  const deviceMemory = navigator.deviceMemory || 4;
  const processorCount = navigator.hardwareConcurrency || 4;
  const estimateDeviceTier = () => {
    if (deviceMemory <= 4 || processorCount <= 4 || window.innerWidth < 520) return 0;
    return deviceMemory >= 8 && processorCount >= 8 && window.innerWidth >= 1280 ? 2 : 1;
  };
  const visualProfiles = [
    { stars: 42, dust: 20, pixelRatio: 0.8 },
    { stars: 78, dust: 42, pixelRatio: 1 },
    { stars: 132, dust: 72, pixelRatio: 1.25 }
  ];
  let maxPerformanceTier = estimateDeviceTier();
  let performanceTier = maxPerformanceTier;
  const stars = [];
  const galaxyDust = [];
  let width = 0;
  let height = 0;
  let frame = 0;
  let previousFrame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let galaxyRotation = 0;

  let starCount = visualProfiles[performanceTier].stars;
  let dustCount = visualProfiles[performanceTier].dust;
  const isInactive = () => document.hidden
    || !canvas.getClientRects().length
    || document.body.classList.contains("game-session-active")
    || document.body.dataset.page !== "home";

  function resize() {
    maxPerformanceTier = estimateDeviceTier();
    performanceTier = Math.min(performanceTier, maxPerformanceTier);
    starCount = visualProfiles[performanceTier].stars;
    dustCount = visualProfiles[performanceTier].dust;
    const ratio = Math.min(window.devicePixelRatio || 1, visualProfiles[performanceTier].pixelRatio);
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
      const isGlitter = Math.random() > (performanceTier === 0 ? 0.97 : 0.93);
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isGlitter ? 0.9 + Math.random() * 0.7 : 0.35 + Math.random() * 0.9,
        alpha: 0.16 + Math.random() * 0.44,
        speedX: (Math.random() - 0.5) * 0.018,
        speedY: 0.004 + Math.random() * 0.018,
        phase: Math.random() * Math.PI * 2,
        depth: 0.15 + Math.random() * 0.85,
        twinkleAmount: Math.random() > 0.36 ? 0.08 + Math.random() * 0.2 : 0,
        isGlitter,
        color: isGlitter ? "222, 237, 247" : ["179, 205, 222", "136, 170, 192", "225, 237, 245"][Math.floor(Math.random() * 3)]
      });
    }

    // 2. Low-contrast blue galactic dust layers
    galaxyDust.length = 0;
    const arms = 2;
    for (let i = 0; i < dustCount; i++) {
      const arm = i % arms;
      const armOffset = (arm * Math.PI);
      const distRatio = Math.pow(Math.random(), 1.6);
      const maxR = Math.min(width, height) * 0.46;
      const r = 24 + distRatio * maxR;
      const theta = armOffset + distRatio * 3.8 + (Math.random() - 0.5) * 0.7;
      galaxyDust.push({
        r,
        theta,
        size: 0.6 + Math.random() * 1.6,
        baseAlpha: 0.035 + Math.random() * 0.085,
        speed: 0.00012 + Math.random() * 0.0002,
        color: Math.random() > 0.5 ? "93, 145, 178" : "130, 176, 202"
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
    coreGrad.addColorStop(0, "rgba(205, 225, 238, 0.12)");
    coreGrad.addColorStop(0.24, "rgba(90, 146, 178, 0.075)");
    coreGrad.addColorStop(0.58, "rgba(35, 83, 119, 0.055)");
    coreGrad.addColorStop(1, "rgba(7, 17, 31, 0)");
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
        star.x += star.speedX * elapsed;
        star.y += star.speedY * elapsed;
        if (star.y > height + 4) star.y = -4;
        if (star.y < -4) star.y = height + 4;
        if (star.x > width + 4) star.x = -4;
        if (star.x < -4) star.x = width + 4;
      }
      const twinkle = reducedMotion.matches ? 1 : 1 - star.twinkleAmount / 2 + Math.sin(timestamp * 0.0008 + star.phase) * star.twinkleAmount / 2;
      const x = star.x + pointerX * star.depth * 8;
      const y = star.y + pointerY * star.depth * 6;
      const alpha = Math.max(0.08, star.alpha * twinkle);

      context.beginPath();
      context.fillStyle = `rgba(${star.color}, ${alpha})`;

      if (star.isGlitter && twinkle > 0.82) {
        // Shimmering 4-point glitter cross
        context.shadowBlur = 3;
        context.shadowColor = "rgba(190, 220, 238, 0.45)";
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
