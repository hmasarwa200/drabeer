/* i18n.js — Hebrew / English / Arabic language switcher
   Keys are the site's original Hebrew strings (whitespace-normalized).
   Values: [English, Arabic]. */
(function () {
  var DICT = {
    "ד״ר עביר מסארוה": ["Dr. Abeer Masarwa", "د. عبير مصاروة"],
    "מומחית באולטרסאונד מיילדותי וגינקולוגי": ["Specialist in Obstetric & Gynecologic Ultrasound", "أخصائية في الأولتراساوند التوليدي والنسائي"],
    "עמוד הבית": ["Home", "الرئيسية"],
    "אודות": ["About", "نبذة"],
    "שירותים רפואיים": ["Medical Services", "الخدمات الطبية"],
    "אולטרסאונד בהריון": ["Pregnancy Ultrasound", "أولتراساوند الحمل"],
    "כל בדיקות ההריון": ["All pregnancy scans", "جميع فحوصات الحمل"],
    "הריון צעיר": ["Early Pregnancy", "الحمل المبكر"],
    "שבועות ראשונים": ["First weeks", "الأسابيع الأولى"],
    "שקיפות עורפית": ["Nuchal Translucency", "الشفافية القفوية"],
    "שבועות": ["Weeks", "أسابيع"],
    "ושישה ימים": ["+6 days", "وستة أيام"],
    "סקירת מערכות מוקדמת": ["Early Anatomy Scan", "مسح الأعضاء المبكر"],
    "סקירת מערכות מאוחרת": ["Late Anatomy Scan", "مسح الأعضاء المتأخر"],
    "סקירת מערכות שלישית": ["Third-Trimester Anatomy Scan", "مسح الأعضاء في الثلث الثالث"],
    "סקירה מכוונת למוח העובר": ["Targeted Fetal Brain Scan", "فحص موجّه لدماغ الجنين"],
    "סקירה מכוונת למומים אחרים": ["Targeted Scan for Other Anomalies", "فحص موجّه لتشوّهات أخرى"],
    "לפי צורך": ["As needed", "حسب الحاجة"],
    "גדילת העובר ובדיקת זרימות בדופלר": ["Fetal Growth & Doppler Flow Assessment", "نمو الجنين وفحص التدفقات بالدوبلر"],
    "מעקב": ["Monitoring", "متابعة"],
    "הריון מרובה עוברים": ["Multiple Pregnancy", "الحمل المتعدد الأجنّة"],
    "מעקב מותאם": ["Tailored monitoring", "متابعة مخصّصة"],
    "אולטרסאונד גינקולוגי": ["Gynecologic Ultrasound", "الأولتراساوند النسائي"],
    "בריאות האישה": ["Women's Health", "صحة المرأة"],
    "נוירולוגיית העובר": ["Fetal Neurology", "طب أعصاب الجنين"],
    "יצירת קשר": ["Contact", "تواصل معنا"],
    "אולטרסאונד מיילדותי וגינקולוגי": ["Obstetric & Gynecologic Ultrasound", "أولتراساوند توليدي ونسائي"],
    "מבט ראשון": ["A first look", "نظرة أولى"],
    "לעולם חדש": ["at a new world", "إلى عالم جديد"],
    "רופאה בכירה במרכז הרפואי שיבא, תל השומר": ["Senior physician at Sheba Medical Center, Tel Hashomer", "طبيبة في مركز شيبا الطبي، تل هشومير"],
    "מבט מקצועי ומעמיק": ["A professional, in-depth look", "نظرة مهنية ومعمّقة"],
    "אולטרסאונד מיילדותי": ["Obstetric Ultrasound", "الأولتراساوند التوليدي"],
    "מעקב הריון ובדיקות מקיפות": ["Pregnancy monitoring & comprehensive scans", "متابعة الحمل وفحوصات شاملة"],
    "הערכה מדויקת ואישית": ["Precise, personal assessment", "تقييم دقيق وشخصي"],
    "נוירולוגיה עוברית מתקדמת": ["Advanced fetal neurology", "طب أعصاب جنيني متقدّم"],
    "ד״ר עביר מסארוה היא רופאה בכירה ביחידת האולטרסאונד המיילדותי והגינקולוגי ובמרפאה לנוירולוגיה של העובר במרכז הרפואי שיבא, תל השומר.": ["Dr. Abeer Masarwa is a senior physician in the Obstetric & Gynecologic Ultrasound Unit and the Fetal Neurology Clinic at Sheba Medical Center, Tel Hashomer.", "د. عبير مصاروة طبيبة كبيرة في وحدة الأولتراساوند التوليدي والنسائي وفي عيادة طب أعصاب الجنين في مركز شيبا الطبي، تل هشومير."],
    "ד״ר מסארוה בעלת דיפלומה בנוירולוגיה של העובר מטעם Fetal Medicine Barcelona, וביצעה השתלמות ייעודית ב־MRI מוח עוברי באורגון, ארה״ב.": ["Dr. Masarwa holds a diploma in Fetal Neurology from Fetal Medicine Barcelona and completed dedicated training in fetal brain MRI in Oregon, USA.", "تحمل د. مصاروة دبلوماً في طب أعصاب الجنين من Fetal Medicine Barcelona، وأتمت تدريباً مخصصاً في التصوير بالرنين المغناطيسي لدماغ الجنين في أوريغون، الولايات المتحدة."],
    "לקריאה נוספת": ["Read more", "للمزيد"],
    "חינוך ומידע": ["Education & Information", "توعية ومعلومات"],
    "סרטון מידע": ["Informational video", "فيديو توضيحي"],
    "בקרוב": ["Coming soon", "قريباً"],
    "חוות דעת": ["Testimonials", "آراء المتعالجات"],
    "מה מטופלות מספרות": ["What patients say", "ماذا تقول المتعالجات"],
    "רפואה מדויקת, רגישה ומקצועית לאורך הדרך — בליווי אישי בכל שלבי החיים.": ["Precise, sensitive and professional care throughout — with personal guidance at every stage of life.", "طب دقيق وحسّاس ومهني على طول الطريق — بمرافقة شخصية في جميع مراحل الحياة."],
    "ניווט מהיר": ["Quick links", "روابط سريعة"],
    "שירותים": ["Services", "الخدمات"],
    "פרטי התקשרות": ["Contact details", "بيانات التواصل"],
    "תל אביב, ישראל": ["Tel Aviv, Israel", "تل أبيب، إسرائيل"],
    "© כל הזכויות שמורות לד״ר עביר מסארוה": ["© All rights reserved to Dr. Abeer Masarwa", "© جميع الحقوق محفوظة للدكتورة عبير مصاروة"],
    "מעקב הריון · לפי שלבים": ["Pregnancy care · by stage", "متابعة الحمل · حسب المراحل"],
    "אולטרסאונד": ["Ultrasound", "أولتراساوند"],
    "בהריון": ["in Pregnancy", "في الحمل"],
    "בדיקות אולטרסאונד המלוות את ההריון בכל שלביו. הבדיקות מסודרות לפי שלבי ההריון — לחצו על כל בדיקה לפרטים נוספים.": ["Ultrasound scans accompanying every stage of pregnancy. The scans are organized by trimester — click any scan for details.", "فحوصات أولتراساوند ترافق الحمل في جميع مراحله. الفحوصات مرتّبة حسب مراحل الحمل — انقروا على أي فحص لمزيد من التفاصيل."],
    "שליש ראשון": ["First trimester", "الثلث الأول"],
    "שליש שני": ["Second trimester", "الثلث الثاني"],
    "שליש שלישי": ["Third trimester", "الثلث الثالث"],
    "השבועות הראשונים להריון": ["The first weeks of pregnancy", "الأسابيع الأولى من الحمل"],
    "בדיקת אולטרסאונד ראשונית להערכת תקינות ההריון, מיקומו, גיל ההריון ודופק עוברי כאשר ניתן.": ["An initial ultrasound to assess the viability of the pregnancy, its location, gestational age and fetal heartbeat when possible.", "فحص أولتراساوند أولي لتقييم سلامة الحمل وموقعه وعمر الحمل ونبض الجنين عند الإمكان."],
    "שבועות 11–13 ושישה ימים": ["Weeks 11–13+6", "الأسابيع 11–13 وستة أيام"],
    "בדיקה מוקדמת בהריון, המתבצעת לרוב בין שבוע 11 לשבוע 13 ושישה ימים, כחלק מהערכת הסיכון לתסמונות כרומוזומליות ומעקב התפתחותי ראשוני. במסגרת בדיקה פרטית ניתן לבצע הערכה מורחבת לאיתור מוקדם של מומים משמעותיים": ["An early pregnancy scan, usually performed between week 11 and week 13+6, as part of assessing the risk of chromosomal syndromes and early developmental follow-up. As a private scan, an extended assessment can be performed for early detection of significant anomalies", "فحص مبكر في الحمل، يُجرى غالباً بين الأسبوع 11 والأسبوع 13 وستة أيام، كجزء من تقييم خطر المتلازمات الكروموسومية والمتابعة التطورية الأولية. في إطار الفحص الخاص يمكن إجراء تقييم موسّع للكشف المبكر عن تشوّهات جوهرية"],
    "שבועות 14–16": ["Weeks 14–16", "الأسابيع 14–16"],
    "בדיקה להערכת מבנה מערכות העובר בשלבים מוקדמים של ההריון, לרוב בשבועות 14–16, תוך בחינה מדויקת של איברים ומדדים מרכזיים. במסגרת הסקירה ניתן לרוב לזהות גם את מין העובר ברמת ודאות גבוהה.": ["A scan assessing the structure of the fetal systems early in pregnancy, usually at weeks 14–16, with precise examination of key organs and measurements. The fetal sex can usually also be identified with high certainty.", "فحص لتقييم بنية أجهزة الجنين في مراحل مبكرة من الحمل، غالباً في الأسابيع 14–16، مع فحص دقيق للأعضاء والمقاييس الرئيسية. خلال المسح يمكن غالباً تحديد جنس الجنين بدرجة عالية من اليقين."],
    "שבועות 20–24": ["Weeks 20–24", "الأسابيع 20–24"],
    "סקירה מקיפה המתבצעת לרוב בשבועות 20–24, ומאפשרת הערכה מדויקת של התפתחות מערכות העובר, מבנה האיברים ומדדים מרכזיים בשלב מתקדם יותר של ההריון.": ["A comprehensive scan usually performed at weeks 20–24, allowing precise assessment of fetal system development, organ structure and key measurements at a more advanced stage of pregnancy.", "مسح شامل يُجرى غالباً في الأسابيع 20–24، ويتيح تقييماً دقيقاً لتطوّر أجهزة الجنين وبنية الأعضاء والمقاييس الرئيسية في مرحلة أكثر تقدماً من الحمل."],
    "שבועות 30–32": ["Weeks 30–32", "الأسابيع 30–32"],
    "בדיקה בשליש השלישי של ההריון, לרוב בשבועות 30–32, להערכת גדילת העובר, מבנה איברים מרכזיים, בעיקר המוח והשלד, ולגילוי ממצאים שעשויים להתפתח או להתגלות רק בשלב מאוחר יותר של ההריון.": ["A third-trimester scan, usually at weeks 30–32, assessing fetal growth and the structure of key organs — mainly the brain and skeleton — and detecting findings that may develop or appear only later in pregnancy.", "فحص في الثلث الثالث من الحمل، غالباً في الأسابيع 30–32، لتقييم نمو الجنين وبنية الأعضاء الرئيسية، وخاصة الدماغ والهيكل العظمي، وللكشف عن نتائج قد تتطوّر أو تظهر فقط في مرحلة متأخرة من الحمل."],
    "בדיקות ממוקדות": ["Targeted scans", "فحوصات موجّهة"],
    "לפי צורך רפואי": ["By medical need", "حسب الحاجة الطبية"],
    "שבועות 18–24": ["Weeks 18–24", "الأسابيع 18–24"],
    "בדיקה ייעודית ומעמיקה להערכת מבנה מוח העובר, כחלק מתחום נוירולוגיית העובר והדמיית מוח העובר.": ["A dedicated, in-depth scan assessing the structure of the fetal brain, as part of fetal neurology and fetal brain imaging.", "فحص مخصّص ومعمّق لتقييم بنية دماغ الجنين، كجزء من مجال طب أعصاب الجنين وتصوير دماغ الجنين."],
    "בהתאם להפניה רפואית": ["By medical referral", "بحسب التحويل الطبي"],
    "בדיקה ממוקדת להערכת ממצא מסוים או חשד למום עוברי, בהתאם לצורך הרפואי ולמערכת הנבדקת.": ["A focused scan assessing a specific finding or suspected fetal anomaly, according to medical need and the system examined.", "فحص موجّه لتقييم نتيجة معيّنة أو اشتباه بتشوّه جنيني، وفقاً للحاجة الطبية والجهاز الذي يتم فحصه."],
    "מעקב התפתחות שוטף": ["Ongoing growth monitoring", "متابعة نمو مستمرة"],
    "בדיקה להערכת גדילת העובר ומדדי זרימה בכלי הדם של העובר והשליה, כחלק ממעקב אחר התפתחות ההריון.": ["A scan assessing fetal growth and blood-flow indices in the vessels of the fetus and placenta, as part of pregnancy monitoring.", "فحص لتقييم نمو الجنين ومؤشرات التدفق في الأوعية الدموية للجنين والمشيمة، كجزء من متابعة تطوّر الحمل."],
    "מעקב מותאם לאורך כל ההריון": ["Tailored monitoring throughout pregnancy", "متابعة مخصّصة طوال الحمل"],
    "מעקב אולטרסאונד בהריון עם יותר מעובר אחד, תוך התייחסות לגדילה, מבנה, מיקום ומעקב מותאם להריון מרובה עוברים.": ["Ultrasound monitoring for pregnancies with more than one fetus, addressing growth, structure and position, with follow-up tailored to multiple pregnancy.", "متابعة أولتراساوند في حمل بأكثر من جنين واحد، مع الاهتمام بالنمو والبنية والموقع ومتابعة مخصّصة للحمل المتعدد الأجنّة."],
    "מעוניינת בפרטים נוספים?": ["Want more details?", "هل ترغبين بمزيد من التفاصيل؟"],
    "ניתן ליצור קשר לקבלת מידע נוסף או לתיאום פנייה.": ["Contact us for more information or to arrange an appointment.", "يمكن التواصل معنا للحصول على مزيد من المعلومات أو لتنسيق موعد."],
    "נוירולוגיית העובר · בדיקה ממוקדת": ["Fetal neurology · targeted scan", "طب أعصاب الجنين · فحص موجّه"],
    "סקירה מכוונת": ["A Targeted Scan", "فحص موجّه"],
    "למוח העובר": ["of the Fetal Brain", "لدماغ الجنين"],
    "בדיקת אולטרסאונד ממוקדת, הבוחנת לעומק את מבנה המוח ומערכת העצבים של העובר.": ["A focused ultrasound examining the structure of the fetal brain and nervous system in depth.", "فحص أولتراساوند موجّه يفحص بعمق بنية الدماغ والجهاز العصبي لدى الجنين."],
    "מהי הבדיקה": ["What is the scan", "ما هو الفحص"],
    "מתי מבצעים": ["When it's done", "متى يُجرى"],
    "מה בודקים": ["What is examined", "ماذا نفحص"],
    "שאלות נפוצות": ["FAQ", "أسئلة شائعة"],
    "סקירה עמוקה של מוח העובר בשלב מסוים של ההריון, בחינת כל מבנה ומערכת בנפרד כדי": ["A deep survey of the fetal brain at a specific stage of pregnancy, examining each structure and system separately to", "مسح معمّق لدماغ الجنين في مرحلة معيّنة من الحمل، وفحص كل بنية وجهاز على حدة من أجل"],
    "לזהות": ["identify", "رصد"],
    "ממצאים עדינים.": ["subtle findings.", "نتائج دقيقة."],
    "סקירה כללית": ["General scan", "مسح عام"],
    "מערכות מרובות. זמן קצר.": ["Many systems. Limited time.", "أجهزة متعددة. وقت قصير."],
    "מוח העובר בפרטונים. עומק מלא.": ["The fetal brain in fine detail. Full depth.", "دماغ الجنين بالتفصيل. عمق كامل."],
    "4 מצבים עיקריים": ["4 main situations", "4 حالات رئيسية"],
    "הבדיקה אינה חלק ממעקב ההריון השגרתי, ומבוצעת כאשר יש סיבה ממוקדת.": ["The scan is not part of routine pregnancy care and is performed when there is a specific reason.", "الفحص ليس جزءاً من متابعة الحمل الروتينية، ويُجرى عند وجود سبب محدد."],
    "ממצא בסקירת מערכות שדורש בירור נוסף": ["A finding on an anatomy scan that needs further evaluation", "نتيجة في مسح الأعضاء تستدعي توضيحاً إضافياً"],
    "צורך בהערכה ממוקדת יותר של מוח העובר": ["A need for a more focused assessment of the fetal brain", "الحاجة إلى تقييم أكثر تركيزاً لدماغ الجنين"],
    "מעקב לאורך זמן אחר מבנה מוח העובר": ["Follow-up of fetal brain structure over time", "متابعة بنية دماغ الجنين مع مرور الوقت"],
    "המלצה או הפניה מרופא/ה מטפל/ת": ["A recommendation or referral from your physician", "توصية أو تحويل من الطبيب المعالج"],
    "4 אזורים במוח": ["4 brain regions", "4 مناطق في الدماغ"],
    "חדרי המוח": ["Brain ventricles", "بطينات الدماغ"],
    "מבנה וגודל ביחס לגיל ההריון.": ["Structure and size relative to gestational age.", "البنية والحجم نسبةً إلى عمر الحمل."],
    "מבני קו האמצע": ["Midline structures", "بنى الخط الأوسط"],
    "המבנים במרכז המוח, כסימן להתפתחות.": ["The structures at the center of the brain, as a marker of development.", "البنى في مركز الدماغ، كمؤشر على التطوّر."],
    "קליפת המוח": ["Cerebral cortex", "قشرة الدماغ"],
    "התפתחות הקליפה ודפוס המחילות.": ["Development of the cortex and its folding pattern.", "تطوّر القشرة ونمط التلافيف."],
    "המוח הקטן וגזע המוח": ["Cerebellum & brainstem", "المخيخ وجذع الدماغ"],
    "אזור הגומה האחורית והמבנים שבו.": ["The posterior fossa and its structures.", "الحفرة الخلفية والبنى الموجودة فيها."],
    "האם הבדיקה מחליפה סקירת מערכות?": ["Does the scan replace an anatomy scan?", "هل يحلّ هذا الفحص محلّ مسح الأعضاء؟"],
    "לא. היא משלימה את סקירת המערכות ומעמיקה בתחום אחד — מבנה המוח ומערכת העצבים.": ["No. It complements the anatomy scan and goes deeper in one area — the structure of the brain and nervous system.", "لا. إنه يكمّل مسح الأعضاء ويتعمّق في مجال واحد — بنية الدماغ والجهاز العصبي."],
    "האם צריך הפניה?": ["Is a referral required?", "هل يلزم تحويل طبي؟"],
    "מומלץ להגיע עם הפניה, אך ניתן לברר התאמה לבדיקה גם באופן ישיר.": ["A referral is recommended, but suitability can also be checked directly.", "يُنصح بالحضور مع تحويل طبي، لكن يمكن أيضاً الاستفسار عن ملاءمة الفحص مباشرة."],
    "כמה זמן נמשכת הבדיקה?": ["How long does the scan take?", "كم يستغرق الفحص؟"],
    "משך הבדיקה משתנה בהתאם לממצאים ולשלב ההריון, ולרוב היא ארוכה מסקירה רגילה.": ["The duration varies with the findings and stage of pregnancy; it is usually longer than a routine scan.", "تختلف مدة الفحص بحسب النتائج ومرحلة الحمل، وغالباً ما يكون أطول من المسح العادي."],
    "האם הבדיקה כרוכה בסיכון?": ["Is the scan risky?", "هل ينطوي الفحص على خطر؟"],
    "מדובר בבדיקת אולטרסאונד רגילה, ללא קרינה, שאינה כרוכה בסיכון.": ["It is a standard ultrasound scan — no radiation and no risk.", "إنه فحص أولتراساوند عادي، بدون إشعاع، ولا ينطوي على أي خطر."],
    "נשארו שאלות?": ["Still have questions?", "بقيت لديكم أسئلة؟"],
    "ניתן ליצור קשר לקבלת מידע נוסף או לבירור התאמה לבדיקה.": ["Contact us for more information or to check whether the scan is right for you.", "يمكن التواصل معنا لمزيد من المعلومات أو للاستفسار عن ملاءمة الفحص."],
    "מבט עמוק.": ["A deep look.", "نظرة عميقة."],
    "מוח קטן.": ["A tiny brain.", "دماغ صغير."],
    "שקט גדול.": ["Great peace of mind.", "طمأنينة كبيرة."],
    "סקירה מכוונת למוח העובר — כמו סקירת מערכות, אבל רק למוח ובהרבה יותר עומק.": ["A targeted fetal brain scan — like an anatomy scan, but focused on the brain and far more in-depth.", "فحص موجّه لدماغ الجنين — مثل مسح الأعضاء، لكن للدماغ فقط وبعمق أكبر بكثير."],
    "לתיאום שיחה": ["Book a call", "لتنسيق مكالمة"],
    "בלי קרינה": ["No radiation", "بدون إشعاع"],
    "בלי סיכון": ["No risk", "بدون خطر"],
    "בעדינות": ["Gentle", "بلطف"],
    "ליווי אישי": ["Personal care", "مرافقة شخصية"],
    "מומחיות בנוירולוגיית העובר": ["Expertise in fetal neurology", "خبرة في طب أعصاب الجنين"],
    "מתי עושים אותה?": ["When is it done?", "متى يُجرى؟"],
    "לא חלק מהשגרה.": ["Not part of routine care.", "ليس جزءاً من الروتين."],
    "רק כשיש סיבה:": ["Only when there's a reason:", "فقط عند وجود سبب:"],
    "ממצא בסקירה שצריך לבדוק שוב": ["A finding that needs a second look", "نتيجة في المسح تحتاج إلى فحص إضافي"],
    "רוצים מבט מעמיק יותר על המוח": ["You want a deeper look at the brain", "تريدون نظرة أعمق على الدماغ"],
    "מעקב אחרי משהו שכבר ידוע": ["Follow-up on something already known", "متابعة أمر معروف مسبقاً"],
    "הרופא/ה שלכם המליצו": ["Your doctor recommended it", "طبيبكم أوصى بذلك"],
    "מה בודקים?": ["What is examined?", "ماذا نفحص؟"],
    "ארבעה אזורים במוח": ["Four brain regions", "أربع مناطق في الدماغ"],
    "זה מחליף סקירת מערכות?": ["Does it replace an anatomy scan?", "هل يحلّ محلّ مسح الأعضاء؟"],
    "לא. זו בדיקה משלימה שמעמיקה רק במוח.": ["No. It's a complementary scan that goes deep on the brain only.", "لا. إنه فحص مكمّل يتعمّق في الدماغ فقط."],
    "צריך הפניה?": ["Need a referral?", "هل يلزم تحويل؟"],
    "עדיף עם הפניה, אבל אפשר לברר גם בלי.": ["A referral is preferred, but you can inquire without one.", "يُفضّل مع تحويل طبي، لكن يمكن الاستفسار بدونه أيضاً."],
    "כמה זמן זה לוקח?": ["How long does it take?", "كم يستغرق؟"],
    "יותר מסקירה רגילה — תלוי בממצאים ובשלב ההריון.": ["Longer than a routine scan — depending on findings and stage of pregnancy.", "أطول من المسح العادي — حسب النتائج ومرحلة الحمل."],
    "זה מסוכן?": ["Is it risky?", "هل هو خطير؟"],
    "לא. אולטרסאונד רגיל, בלי קרינה.": ["No. A standard ultrasound, no radiation.", "لا. أولتراساوند عادي، بدون إشعاع."],
    "נשמח לעזור ולבדוק יחד אם הבדיקה מתאימה לכם.": ["We're happy to help and check together whether the scan is right for you.", "يسعدنا المساعدة والتحقق معاً مما إذا كان الفحص مناسباً لكم."],
    "בריאות האישה · אבחון ומעקב": ["Women's health · diagnosis & follow-up", "صحة المرأة · تشخيص ومتابعة"],
    "גינקולוגי": ["for Gynecology", "نسائي"],
    "בדיקות אולטרסאונד לאיברי האגן לנשים — לאבחון, למעקב ולשקט הנפשי, בכל שלבי החיים.": ["Pelvic ultrasound scans for women — for diagnosis, follow-up and peace of mind, at every stage of life.", "فحوصات أولتراساوند لأعضاء الحوض للنساء — للتشخيص والمتابعة وراحة البال، في جميع مراحل الحياة."],
    "מתי פונים לבדיקה": ["When to get checked", "متى تُجرى الفحوصات"],
    "מה נבדק": ["What is examined", "ماذا يُفحص"],
    "הבדיקה מתאימה הן למעקב שגרתי והן לבירור ממוקד, בהתאם לצורך.": ["The scan suits both routine follow-up and focused evaluation, as needed.", "الفحص مناسب للمتابعة الروتينية وللتقييم الموجّه، حسب الحاجة."],
    "בדיקה שגרתית כחלק ממעקב תקופתי": ["A routine check as part of periodic follow-up", "فحص روتيني ضمن المتابعة الدورية"],
    "בירור תלונות — כאב, דימום לא סדיר או אי־נוחות": ["Evaluating complaints — pain, irregular bleeding or discomfort", "توضيح شكاوى — ألم أو نزيف غير منتظم أو انزعاج"],
    "מעקב אחר ממצא ידוע לאורך זמן": ["Monitoring a known finding over time", "متابعة نتيجة معروفة مع مرور الوقت"],
    "איברי האגן": ["Pelvic organs", "أعضاء الحوض"],
    "הרחם": ["Uterus", "الرحم"],
    "מבנה, גודל ומיקום, וזיהוי ממצאים כגון שרירנים.": ["Structure, size and position, and identifying findings such as fibroids.", "البنية والحجم والموقع، ورصد نتائج مثل الأورام الليفية."],
    "רירית הרחם": ["Endometrium", "بطانة الرحم"],
    "עובי ומראה הרירית, בהתאם לשלב במחזור.": ["Thickness and appearance of the lining, according to the cycle stage.", "سماكة البطانة ومظهرها، بحسب مرحلة الدورة."],
    "השחלות": ["Ovaries", "المبيضان"],
    "מבנה, גודל וזיהוי ציסטות או ממצאים אחרים.": ["Structure, size and detection of cysts or other findings.", "البنية والحجم ورصد الأكياس أو نتائج أخرى."],
    "אזור האגן": ["Pelvic area", "منطقة الحوض"],
    "הסביבה סביב הרחם והשחלות, כולל נוזל חופשי.": ["The area around the uterus and ovaries, including free fluid.", "المنطقة المحيطة بالرحم والمبيضين، بما في ذلك السائل الحر."],
    "כיצד מתבצעת הבדיקה?": ["How is the scan performed?", "كيف يُجرى الفحص؟"],
    "הבדיקה מתבצעת דרך הבטן או באופן וגינלי, בהתאם לצורך הרפואי ולנוחות הנבדקת. שתי הדרכים בטוחות ומקובלות.": ["The scan is performed abdominally or vaginally, depending on medical need and your comfort. Both approaches are safe and standard.", "يُجرى الفحص عبر البطن أو مهبلياً، بحسب الحاجة الطبية وراحة المفحوصة. كلتا الطريقتين آمنتان ومعتمدتان."],
    "האם נדרשת הכנה מיוחדת?": ["Is special preparation needed?", "هل يلزم تحضير خاص؟"],
    "ברוב המקרים אין צורך בהכנה מיוחדת. במקרים מסוימים תתבקשי להגיע עם שלפוחית מלאה — הנחיות מדויקות יינתנו בעת קביעת התור.": ["In most cases no special preparation is needed. Sometimes you may be asked to arrive with a full bladder — exact instructions are given when booking.", "في معظم الحالات لا حاجة لتحضير خاص. في حالات معيّنة قد يُطلب منكِ الحضور بمثانة ممتلئة — تُعطى التعليمات الدقيقة عند تحديد الموعد."],
    "בדיקה שגרתית נמשכת לרוב דקות ספורות עד רבע שעה, בהתאם לממצאים ולמטרת הבדיקה.": ["A routine scan usually takes a few minutes up to a quarter of an hour, depending on the findings and the purpose of the scan.", "يستغرق الفحص الروتيني عادةً بضع دقائق حتى ربع ساعة، بحسب النتائج والغرض من الفحص."],
    "ניתן ליצור קשר לקבלת מידע נוסף או לתיאום בדיקה.": ["Contact us for more information or to book a scan.", "يمكن التواصل معنا لمزيد من المعلومات أو لتنسيق فحص."],
    "שירותי אולטרסאונד מתקדמים": ["Advanced ultrasound services", "خدمات أولتراساوند متقدمة"],
    "רפואיים": ["& Care", "طبية"],
    "מגוון שירותי אולטרסאונד מתקדמים במיילדות וגינקולוגיה,": ["A range of advanced ultrasound services in obstetrics and gynecology,", "مجموعة من خدمات الأولتراساوند المتقدمة في التوليد وأمراض النساء،"],
    "בסטנדרטים הגבוהים ביותר וביחס אישי ומקצועי.": ["to the highest standards, with personal and professional care.", "بأعلى المعايير وبمعاملة شخصية ومهنية."],
    "ליווי אולטרסאונד מקצועי לאורך ההריון, מהבדיקות הראשונות ועד להערכה מתקדמת של התפתחות העובר.": ["Professional ultrasound care throughout pregnancy, from the first scans to advanced assessment of fetal development.", "مرافقة أولتراساوند مهنية طوال الحمل، من الفحوصات الأولى وحتى التقييم المتقدم لتطوّر الجنين."],
    "בדיקות אולטרסאונד להערכת הרחם, השחלות והאגן, לצורך אבחון ומעקב מדויק.": ["Ultrasound scans assessing the uterus, ovaries and pelvis, for accurate diagnosis and follow-up.", "فحوصات أولتراساوند لتقييم الرحم والمبيضين والحوض، لأغراض التشخيص والمتابعة الدقيقة."],
    "הערכה ממוקדת ומעמיקה של מוח העובר, מתוך מומחיות ייחודית ודיוק אבחוני.": ["A focused, in-depth assessment of the fetal brain, with unique expertise and diagnostic precision.", "تقييم موجّه ومعمّق لدماغ الجنين، بخبرة فريدة ودقة تشخيصية."],
    "שילוב של טכנולוגיה מתקדמת, ניסיון קליני וראייה אישית — למען בריאותך ורווחתך.": ["Advanced technology, clinical experience and a personal approach — for your health and wellbeing.", "مزيج من التكنولوجيا المتقدمة والخبرة السريرية والنظرة الشخصية — من أجل صحتكِ ورفاهيتكِ."],
    "ד״ר עביר": ["Dr. Abeer", "د. عبير"],
    "מסארוה": ["Masarwa", "مصاروة"],
    "ד״ר עביר מסארוה היא רופאה בכירה ביחידת האולטרסאונד המיילדותי והגינקולוגי ובמרפאה לנוירולוגיה של העובר במרכז הרפואי שיבא, תל השומר, ואחראית על שירות האולטרסאונד הגינקולוגי של קופת חולים מכבי בעיר טייבה.": ["Dr. Abeer Masarwa is a senior physician in the Obstetric & Gynecologic Ultrasound Unit and the Fetal Neurology Clinic at Sheba Medical Center, Tel Hashomer, and is responsible for the gynecologic ultrasound service of Maccabi Health Services in Tayibe.", "د. عبير مصاروة طبيبة كبيرة في وحدة الأولتراساوند التوليدي والنسائي وفي عيادة طب أعصاب الجنين في مركز شيبا الطبي، تل هشومير، ومسؤولة عن خدمة الأولتراساوند النسائي لصندوق المرضى مكابي في مدينة الطيبة."],
    "הכשרתה כוללת דיפלומה בנוירולוגיה של העובר מטעם Fetal Medicine Barcelona והשתלמות ייעודית ב־MRI מוח עוברי ב־Oregon Health & Science University שבארצות הברית. ההכשרה הבין־לאומית והרקע המחקרי מאפשרים לה להביא אל כל בדיקה דיוק אבחנתי לצד קשב אישי. במסגרת עבודתה היא משלבת ניסיון קליני מתקדם לצד עשייה מחקרית בתחום הדמיית מוח העובר.": ["Her training includes a diploma in Fetal Neurology from Fetal Medicine Barcelona and dedicated training in fetal brain MRI at Oregon Health & Science University in the USA. Her international training and research background let her bring diagnostic precision and personal attention to every scan. Her work combines advanced clinical experience with research in fetal brain imaging.", "يشمل تأهيلها دبلوماً في طب أعصاب الجنين من Fetal Medicine Barcelona وتدريباً مخصصاً في التصوير بالرنين المغناطيسي لدماغ الجنين في جامعة Oregon Health & Science University في الولايات المتحدة. يتيح لها التأهيل الدولي والخلفية البحثية أن تجمع في كل فحص بين الدقة التشخيصية والاهتمام الشخصي. وتجمع في عملها بين الخبرة السريرية المتقدمة والعمل البحثي في مجال تصوير دماغ الجنين."],
    "מסלול מקצועי והכשרה": ["Professional path & training", "المسار المهني والتأهيل"],
    "השכלה": ["Education", "التعليم"],
    "לימודי רפואה": ["Medical studies", "دراسة الطب"],
    "האוניברסיטה העברית בירושלים": ["The Hebrew University of Jerusalem", "الجامعة العبرية في القدس"],
    "התמחות": ["Residency", "الاختصاص"],
    "התמחות במיילדות וגינקולוגיה": ["Residency in obstetrics & gynecology", "اختصاص في التوليد وأمراض النساء"],
    "המרכז הרפואי רבין": ["Rabin Medical Center", "مركز رابين الطبي"],
    "דיפלומה": ["Diploma", "دبلوم"],
    "דיפלומה בנוירולוגיה של העובר": ["Diploma in fetal neurology", "دبلوم في طب أعصاب الجنين"],
    "השתלמות": ["Fellowship", "تدريب متقدّم"],
    "השתלמות ב־MRI מוח עוברי": ["Training in fetal brain MRI", "تدريب في الرنين المغناطيسي لدماغ الجنين"],
    "מחקר": ["Research", "بحث علمي"],
    "מחקר בתחום הדמיית מוח העובר": ["Research in fetal brain imaging", "بحث في مجال تصوير دماغ الجنين"],
    "נוירולוגיה והדמיית מוח העובר": ["Fetal neurology & brain imaging", "طب أعصاب الجنين وتصوير دماغه"],
    "לוגו": ["Logo", "شعار"],
    "ד״ר עביר מסארוה היא רופאה בכירה ביחידת האולטרסאונד המיילדותי והגינקולוגי ובמרפאה לנוירולוגיה של העובר במרכז הרפואי שיבא, תל השומר, ואחראית על שירות האולטרסאונד הגינקולוגי של קופת חולים מכבי בעיר טייבה. בעבודתה היא משלבת ניסיון קליני מתקדם לצד עשייה מחקרית בתחום הדמיית מוח העובר.": ["Dr. Abeer Masarwa is a senior physician in the Obstetric & Gynecologic Ultrasound Unit and the Fetal Neurology Clinic at Sheba Medical Center, Tel Hashomer, and is responsible for the gynecologic ultrasound service of Maccabi Health Services in Tayibe. Her work combines advanced clinical experience with research in fetal brain imaging.", "د. عبير مصاروة طبيبة كبيرة في وحدة الأولتراساوند التوليدي والنسائي وفي عيادة طب أعصاب الجنين في مركز شيبا الطبي، تل هشومير، ومسؤولة عن خدمة الأولتراساوند النسائي لصندوق المرضى مكابي في مدينة الطيبة. وتجمع في عملها بين الخبرة السريرية المتقدمة والعمل البحثي في مجال تصوير دماغ الجنين."],
    "הכשרתה כוללת דיפלומה בנוירולוגיה של העובר מטעם Fetal Medicine Barcelona והשתלמות ייעודית ב־MRI מוח עוברי ב־Oregon Health & Science University שבארצות הברית. הניסיון שלה במרפאה הנוירולוגית של העובר והרקע המחקרי, מאפשרים לה להביא אל כל בדיקה דיוק אבחנתי לצד קשב אישי, ולהעניק למטופלותיה ליווי רגוע, מדויק ואנושי.": ["Her training includes a diploma in Fetal Neurology from Fetal Medicine Barcelona and dedicated training in fetal brain MRI at Oregon Health & Science University in the USA. Her experience in the fetal neurology clinic, together with her research background, lets her bring diagnostic precision and personal attention to every scan — giving her patients calm, precise and humane care.", "يشمل تأهيلها دبلوماً في طب أعصاب الجنين من Fetal Medicine Barcelona وتدريباً مخصصاً في التصوير بالرنين المغناطيسي لدماغ الجنين في جامعة Oregon Health & Science University في الولايات المتحدة. تتيح لها خبرتها في عيادة طب أعصاب الجنين وخلفيتها البحثية أن تجمع في كل فحص بين الدقة التشخيصية والاهتمام الشخصي، وأن تمنح متعالجاتها مرافقة هادئة ودقيقة وإنسانية."],
    "לימודים אקדמיים": ["Academic studies", "الدراسة الأكاديمية"],
    "ביה\"ס לרפואה הדסה עין כרם, האוניברסיטה העברית בירושלים": ["Hadassah Ein Kerem School of Medicine, The Hebrew University of Jerusalem", "كلية الطب هداسا عين كارم، الجامعة العبرية في القدس"],
    "בית החולים בילינסון": ["Beilinson Hospital", "مستشفى بيلينسون"],
    "לימודי המשך באולטרסאונד במיילדות וגינקולוגיה": ["Continuing studies in obstetric & gynecologic ultrasound", "دراسات متقدمة في الأولتراساوند التوليدي والنسائي"],
    "אוניברסיטת תל אביב": ["Tel Aviv University", "جامعة تل أبيب"],
    "תואר שני במחקר קליני": ["Master's degree in clinical research", "ماجستير في البحث السريري"],
    "Oregon Health & Science University בארצות הברית": ["Oregon Health & Science University, USA", "جامعة Oregon Health & Science في الولايات المتحدة"],
    "אוניברסיטת ברצלונה - Fetal Medicine Barcelona בספרד": ["University of Barcelona — Fetal Medicine Barcelona, Spain", "جامعة برشلونة — Fetal Medicine Barcelona في إسبانيا"],
    "בדיקה להערכת מבנה מערכות העובר בשלבים מוקדמים של ההריון, לרוב בשבועות 14–16, תוך בחינה של איברים ומדדים מרכזיים. במסגרת הסקירה ניתן לזהות גם את מין העובר.": ["A scan assessing the structure of the fetal systems early in pregnancy, usually at weeks 14–16, examining key organs and measurements. The fetal sex can also be identified during the scan.", "فحص لتقييم بنية أجهزة الجنين في مراحل مبكرة من الحمل، غالباً في الأسابيع 14–16، مع فحص الأعضاء والمقاييس الرئيسية. خلال المسح يمكن أيضاً تحديد جنس الجنين."],
    "סקירה מקיפה המתבצעת לרוב בשבועות 20–24, ומאפשרת הערכה של התפתחות מערכות העובר, מבנה האיברים ומדדים מרכזיים בשלב מתקדם יותר של ההריון.": ["A comprehensive scan usually performed at weeks 20–24, allowing assessment of fetal system development, organ structure and key measurements at a more advanced stage of pregnancy.", "مسح شامل يُجرى غالباً في الأسابيع 20–24، ويتيح تقييم تطوّر أجهزة الجنين وبنية الأعضاء والمقاييس الرئيسية في مرحلة أكثر تقدماً من الحمل."],
    "בדיקה בשליש השלישי של ההריון, לרוב בשבועות 30–32, להערכת גדילת העובר, מבנה איברים מרכזיים, בעיקר המוח והשלד, ולגילוי ממצאים שעלולים להתפתח או להתגלות רק בשלב מאוחר יותר של ההריון.": ["A third-trimester scan, usually at weeks 30–32, assessing fetal growth and the structure of key organs — mainly the brain and skeleton — and detecting findings that may develop or appear only later in pregnancy.", "فحص في الثلث الثالث من الحمل، غالباً في الأسابيع 30–32، لتقييم نمو الجنين وبنية الأعضاء الرئيسية، وخاصة الدماغ والهيكل العظمي، وللكشف عن نتائج قد تتطوّر أو تظهر فقط في مرحلة متأخرة من الحمل."],
    "בדיקה ייעודית ומעמיקה להערכת מבנה מוח העובר, בעקבות ממצא חריג או אינדיקציה אחרת, כגון זיהום אימהי או מחלת רקע אימהית, המצריכה הדמיה נוספת של מוח העובר.": ["A dedicated, in-depth scan assessing the structure of the fetal brain, following an abnormal finding or another indication — such as maternal infection or a maternal underlying condition — requiring further imaging of the fetal brain.", "فحص مخصّص ومعمّق لتقييم بنية دماغ الجنين، في أعقاب نتيجة غير طبيعية أو دلالة أخرى، مثل عدوى لدى الأم أو مرض خلفي لديها، تستدعي تصويراً إضافياً لدماغ الجنين."],
    "בדיקה להערכת גדילת העובר ומדדי זרימה בכלי הדם של העובר והשליה, במיוחד במקרים של האטה בגדילה התוך-רחמית.": ["A scan assessing fetal growth and blood-flow indices in the vessels of the fetus and placenta, especially in cases of intrauterine growth restriction.", "فحص لتقييم نمو الجنين ومؤشرات التدفق في الأوعية الدموية للجنين والمشيمة، خصوصاً في حالات تباطؤ النمو داخل الرحم."],
    "בדיקת אולטרהסאונד גינקולוגי מאפשרת הערכה מקצועית של איברי האגן, כולל שימוש בדופלר לבחינת זרימת הדם והדגמה תלת־ממדית של חלל הרחם, לצורך אבחון מותאם אישית.": ["A gynecologic ultrasound provides a professional assessment of the pelvic organs, including Doppler evaluation of blood flow and 3D imaging of the uterine cavity, for personalized diagnosis.", "يتيح فحص الأولتراساوند النسائي تقييماً مهنياً لأعضاء الحوض، بما في ذلك استخدام الدوبلر لفحص تدفق الدم والتصوير ثلاثي الأبعاد لتجويف الرحم، من أجل تشخيص شخصي مخصّص."],
    "הבדיקה מתבצעת בגישה משולבת בטנית נרתיקית במידה ומתאפשר, בהתאם לצורך הרפואי.": ["The scan is performed using a combined abdominal-vaginal approach when possible, according to medical need.", "يُجرى الفحص بنهج مشترك عبر البطن والمهبل عند الإمكان، بحسب الحاجة الطبية."],
    "ברוב המקרים אין צורך בהכנה מיוחדת. במקרים מסוימים תתבקשי להגיע עם שלפוחית מלאה או בשלב מסויים במחזור החודשי — הנחיות מדויקות יינתנו בעת קביעת התור.": ["In most cases no special preparation is needed. Sometimes you may be asked to arrive with a full bladder or at a specific stage of the menstrual cycle — exact instructions are given when booking.", "في معظم الحالات لا حاجة لتحضير خاص. في حالات معيّنة قد يُطلب منكِ الحضور بمثانة ممتلئة أو في مرحلة معيّنة من الدورة الشهرية — تُعطى التعليمات الدقيقة عند تحديد الموعد."],
    "הבדיקה שגרתית נמשכת לרוב חצי דעה, בהתאם לממצאים ומטרת הבידק.": ["A routine scan usually takes about half an hour, depending on the findings and the purpose of the scan.", "يستغرق الفحص الروتيني عادةً نحو نصف ساعة، بحسب النتائج والغرض من الفحص."],
    "בדיקת אולטרסאונד ייעודית ומעמיקה, המאפשרת הערכה מפורטת של מבנה מוח העובר, התפתחותו ותפקודו האנטומי.": ["A dedicated, in-depth ultrasound allowing a detailed assessment of the fetal brain's structure, development and anatomical function.", "فحص أولتراساوند مخصّص ومعمّق يتيح تقييماً مفصّلاً لبنية دماغ الجنين وتطوّره ووظيفته التشريحية."],
    "כיצד מתבצעת": ["How it's performed", "كيف يُجرى"],
    "מתי מומלץ לשקול": ["When to consider it", "متى يُنصح بالتفكير فيه"],
    "מה ניתן ללמוד": ["What can be learned", "ماذا يمكن أن نتعلّم"],
    "כאשר בסקירת המערכות עולה חשד לממצא חריג, או כאשר קיימים גורמי סיכון מסוימים, ניתן לבצע סקירה מכוונת למוח העובר, בדיקת אולטרסאונד ייעודית ומעמיקה המאפשרת": ["When an anatomy scan raises suspicion of an abnormal finding, or when certain risk factors exist, a targeted fetal brain scan can be performed — a dedicated, in-depth ultrasound allowing", "عندما يُثير مسح الأعضاء اشتباهاً بنتيجة غير طبيعية، أو عند وجود عوامل خطر معيّنة، يمكن إجراء فحص موجّه لدماغ الجنين — فحص أولتراساوند مخصّص ومعمّق يتيح"],
    "הערכה מפורטת": ["a detailed assessment", "تقييماً مفصّلاً"],
    "של מבנה המוח, התפתחותו ותפקודו האנטומי.": ["of the brain's structure, development and anatomical function.", "لبنية الدماغ وتطوّره ووظيفته التشريحية."],
    "מטרת הבדיקה": ["Purpose of the scan", "هدف الفحص"],
    "הסקירה נועדה לספק תמונה רחבה ומדויקת של התפתחות המוח, ולאפשר זיהוי מוקדם ככל האפשר של חריגות מבניות או סימנים העלולים להעיד על הפרעה בהתפתחות הנוירולוגית. במקרים רבים היא מספקת מידע מרגיע ומאשרת התפתחות מוחית תקינה, ובמקרים אחרים מסייעת בקבלת החלטות רפואיות מושכלות ובהמשך בירור מתאים.": ["The scan is designed to provide a broad, precise picture of brain development, enabling the earliest possible identification of structural anomalies or signs that may indicate a neurodevelopmental disorder. In many cases it provides reassuring information and confirms normal brain development; in others it supports informed medical decisions and appropriate further evaluation.", "يهدف المسح إلى تقديم صورة واسعة ودقيقة لتطوّر الدماغ، وإتاحة الكشف المبكر قدر الإمكان عن تشوّهات بنيوية أو علامات قد تدل على اضطراب في التطوّر العصبي. في حالات كثيرة يقدّم معلومات مطمئنة ويؤكد تطوّراً دماغياً سليماً، وفي حالات أخرى يساعد في اتخاذ قرارات طبية مدروسة وفي مواصلة التقييم المناسب."],
    "חשיבות הבדיקה": ["Why the scan matters", "أهمية الفحص"],
    "הבדיקה מספקת הערכה מעמיקה של מוח העובר, מסייעת בזיהוי מוקדם של מצבים הדורשים התייחסות רפואית, ובמקרים רבים מעניקה שקט נפשי ואישור להתפתחות תקינה. כאשר קיימת המלצה רפואית לביצוע הבדיקה, מומלץ לפנות לגניקולוג מומחה בעל ניסיון ייעודי בתחום, על מנת לקבל את ההערכה המקצועית והמדויקת ביותר.": ["The scan provides an in-depth assessment of the fetal brain, helps identify conditions requiring medical attention early, and in many cases offers peace of mind and confirmation of normal development. When the scan is medically recommended, it is best to see a specialist gynecologist with dedicated experience in the field, to receive the most professional and accurate assessment.", "يقدّم الفحص تقييماً معمّقاً لدماغ الجنين، ويساعد في الكشف المبكر عن حالات تستدعي اهتماماً طبياً، وفي حالات كثيرة يمنح راحة البال وتأكيداً على تطوّر سليم. عند وجود توصية طبية بإجراء الفحص، يُنصح بالتوجه إلى طبيب نسائي مختص ذي خبرة مخصصة في المجال، للحصول على التقييم الأكثر مهنية ودقة."],
    "העיתוי מותאם אישית": ["Timing is personalized", "التوقيت مخصّص لكل حالة"],
    "מועד הביצוע נקבע בהתאם לסיבה להפניה ולממצאים שהתגלו במהלך המעקב ההריוני, שכן יכולות ההדמיה משתנות בהתאם לשבוע ההיריון.": ["The timing is set according to the reason for referral and the findings during pregnancy follow-up, as imaging capabilities vary with gestational age.", "يُحدَّد موعد الفحص وفقاً لسبب التحويل والنتائج التي ظهرت خلال متابعة الحمل، إذ تتغيّر قدرات التصوير بحسب أسبوع الحمل."],
    "שליש שלישי, סביב שבועות": ["Third trimester, around weeks", "الثلث الثالث، حوالي الأسابيع"],
    "ברוב המקרים, לצורך הערכה מיטבית של מבני מוח העובר, מומלץ לבצע את הסקירה בשליש השלישי, כאשר התפתחות המוח מתקדמת יותר ומאפשרת הדמיה מפורטת ומדויקת יותר.": ["In most cases, for optimal assessment of fetal brain structures, the scan is best performed in the third trimester, when brain development is more advanced and allows more detailed, precise imaging.", "في معظم الحالات، وللحصول على أفضل تقييم لبنى دماغ الجنين، يُنصح بإجراء المسح في الثلث الثالث، حين يكون تطوّر الدماغ أكثر تقدماً ويتيح تصويراً أكثر تفصيلاً ودقة."],
    "בכל שלב של ההיריון, כאשר עולה חשד לממצא חריג": ["At any stage of pregnancy, when an abnormal finding is suspected", "في أي مرحلة من الحمل، عند الاشتباه بنتيجة غير طبيعية"],
    "במקרים בהם עולה חשד לממצא חריג, ניתן לבצע את הסקירה בכל שלב של ההיריון, תוך התחשבות בכך שיכולות ההדמיה והממצאים הניתנים להערכה משתנים בהתאם לשבוע ההיריון.": ["When an abnormal finding is suspected, the scan can be performed at any stage of pregnancy, bearing in mind that imaging capabilities and the findings that can be assessed vary with gestational age.", "عند الاشتباه بنتيجة غير طبيعية، يمكن إجراء المسح في أي مرحلة من الحمل، مع مراعاة أن قدرات التصوير والنتائج القابلة للتقييم تتغيّر بحسب أسبوع الحمل."],
    "שלבים מוקדמים יותר, כשקיימת אינדיקציה רפואית ברורה": ["Earlier stages, when there is a clear medical indication", "مراحل أبكر، عند وجود دلالة طبية واضحة"],
    "כאשר קיימת אינדיקציה רפואית ברורה, ניתן לבצע את הסקירה גם בשלבים מוקדמים יותר. עיתוי הבדיקה מותאם אישית בהתאם לסיבה להפניה, לשבוע ההיריון ולממצאים קודמים שעלו בבדיקות אחרות.": ["When there is a clear medical indication, the scan can also be performed at earlier stages. Its timing is personalized according to the reason for referral, gestational age and previous findings from other tests.", "عند وجود دلالة طبية واضحة، يمكن إجراء المسح أيضاً في مراحل أبكر. يُخصَّص توقيت الفحص وفقاً لسبب التحويل وأسبوع الحمل والنتائج السابقة التي ظهرت في فحوصات أخرى."],
    "על ידי גניקולוג מומחה": ["By a specialist gynecologist", "على يد طبيب نسائي مختص"],
    "הבדיקה מתבצעת על ידי גניקולוג מומחה בעל ניסיון ייעודי בתחום, ברוב המקרים בשילוב בין גישה בטנית לגישה נרתיקית.": ["The scan is performed by a specialist gynecologist with dedicated experience in the field, in most cases combining abdominal and vaginal approaches.", "يُجري الفحص طبيب نسائي مختص ذو خبرة مخصصة في المجال، وفي معظم الحالات بدمج بين النهج البطني والنهج المهبلي."],
    "גישה משולבת": ["Combined approach", "نهج مشترك"],
    "המתמר הנרתיקי מאפשר רזולוציה גבוהה יותר, במיוחד כאשר העובר במצג ראש.": ["The vaginal transducer allows higher resolution, especially when the fetus is head-down.", "يتيح المسبار المهبلي دقة أعلى، خصوصاً عندما يكون الجنين في وضعية رأسية."],
    "טכנולוגיות תלת-ממד": ["3D technologies", "تقنيات ثلاثية الأبعاد"],
    "במידת הצורך, זוויות הדמיה נוספות והערכה מדויקת של מבנים.": ["When needed, additional imaging angles and precise assessment of structures.", "عند الحاجة، زوايا تصوير إضافية وتقييم دقيق للبنى."],
    "בחינה שיטתית": ["Systematic examination", "فحص منهجي"],
    "חדרי המוח, הקורפוס קלוסום, המוחון, גזע המוח, קליפת המוח ומבני קו האמצע.": ["The brain ventricles, corpus callosum, cerebellum, brainstem, cerebral cortex and midline structures.", "بطينات الدماغ، الجسم الثفني، المخيخ، جذع الدماغ، قشرة الدماغ وبنى الخط الأوسط."],
    "זרימת דם ומדדים": ["Blood flow & measurements", "تدفق الدم والمقاييس"],
    "הערכת זרימת הדם המוחית ומדדים נוספים המעידים על התפתחות מוחית תקינה.": ["Assessment of cerebral blood flow and additional measurements indicating normal brain development.", "تقييم تدفق الدم الدماغي ومقاييس إضافية تدل على تطوّر دماغي سليم."],
    "חמש קבוצות של מצבים": ["Five groups of situations", "خمس مجموعات من الحالات"],
    "ישנם מספר מצבים רפואיים בהם מומלץ לבצע הערכה מעמיקה וממוקדת יותר של מוח העובר, במטרה לבחון את מבנה המוח, לזהות ממצאים חריגים ולהעריך את משמעותם הקלינית.": ["There are several medical situations in which a deeper, more focused assessment of the fetal brain is recommended, in order to examine brain structure, identify abnormal findings and assess their clinical significance.", "هناك عدة حالات طبية يُنصح فيها بإجراء تقييم أعمق وأكثر تركيزاً لدماغ الجنين، بهدف فحص بنية الدماغ ورصد نتائج غير طبيعية وتقييم دلالتها السريرية."],
    "ממצאים בסקירת מערכות שגרתית": ["Findings on a routine anatomy scan", "نتائج في مسح الأعضاء الروتيني"],
    "הרחבה של חדרי המוח": ["Enlarged brain ventricles", "توسّع بطينات الدماغ"],
    "הרחבה של חדרי המוח עלולה להעיד על הצטברות מוגברת של נוזל מוחי או על שינוי בהתפתחות מבני המוח. במקרים רבים מדובר בממצא קל ללא משמעות קלינית, אך לעיתים הוא מחייב בירור נוסף ומעקב הדוק. סקירה מכוונת מאפשרת להעריך את חומרת ההרחבה ולבדוק האם קיימים ממצאים נוספים הנלווים אליה.": ["Enlarged ventricles may indicate increased accumulation of cerebral fluid or a change in the development of brain structures. In many cases this is a mild finding of no clinical significance, but sometimes it requires further evaluation and close follow-up. A targeted scan makes it possible to assess the severity of the enlargement and check for accompanying findings.", "قد يدل توسّع البطينات على تراكم متزايد للسائل الدماغي أو على تغيّر في تطوّر بنى الدماغ. في حالات كثيرة يكون ذلك نتيجة خفيفة بلا دلالة سريرية، لكنه يستدعي أحياناً توضيحاً إضافياً ومتابعة دقيقة. يتيح الفحص الموجّه تقييم شدة التوسّع والتحقق من وجود نتائج إضافية مرافقة له."],
    "אסימטריה במבני המוח": ["Asymmetry of brain structures", "عدم تناظر في بنى الدماغ"],
    "כאשר קיים הבדל בגודל או במבנה בין שני צדי המוח, יש צורך בהערכה מפורטת יותר של האנטומיה המוחית. לעיתים מדובר בווריאציה תקינה של ההתפתחות, אך במקרים מסוימים האסימטריה עשויה להצביע על הפרעה התפתחותית או על פגיעה שהתרחשה במהלך ההיריון.": ["When there is a difference in size or structure between the two sides of the brain, a more detailed assessment of brain anatomy is needed. Sometimes this is a normal developmental variation, but in certain cases the asymmetry may point to a developmental disorder or an injury that occurred during pregnancy.", "عند وجود اختلاف في الحجم أو البنية بين جانبي الدماغ، يلزم تقييم أكثر تفصيلاً لتشريح الدماغ. أحياناً يكون ذلك تنوّعاً طبيعياً في التطوّر، لكن في حالات معيّنة قد يشير عدم التناظر إلى اضطراب تطوّري أو إلى إصابة حدثت خلال الحمل."],
    "ציסטות תוך-מוחיות": ["Intracranial cysts", "أكياس داخل الدماغ"],
    "ציסטות בתוך מוח העובר עשויות להופיע כחלק מתהליך התפתחות תקין או להיות קשורות למצבים רפואיים שונים. סקירה מכוונת מאפשרת להעריך את מיקומן, גודלן ומאפייניהן. במקרים רבים מדובר בממצא חולף הנעלם בהמשך ההיריון.": ["Cysts within the fetal brain may appear as part of normal development or be related to various medical conditions. A targeted scan makes it possible to assess their location, size and characteristics. In many cases this is a transient finding that disappears later in pregnancy.", "قد تظهر الأكياس داخل دماغ الجنين كجزء من تطوّر طبيعي أو تكون مرتبطة بحالات طبية مختلفة. يتيح الفحص الموجّه تقييم موقعها وحجمها وخصائصها. في حالات كثيرة تكون نتيجة عابرة تختفي لاحقاً خلال الحمل."],
    "חשד למומים במוחון או במבני קו האמצע": ["Suspected anomalies of the cerebellum or midline structures", "اشتباه بتشوّهات في المخيخ أو بنى الخط الأوسط"],
    "המוחון ומבני קו האמצע ממלאים תפקיד מרכזי בהתפתחות התקינה של מערכת העצבים. כאשר עולה חשד לחריגה באחד ממבנים אלו, יש חשיבות רבה להערכה מפורטת של שלמות המבנים, גודלם והקשרים האנטומיים ביניהם.": ["The cerebellum and midline structures play a central role in the normal development of the nervous system. When an anomaly is suspected in one of these structures, a detailed assessment of their integrity, size and anatomical relationships is very important.", "يؤدي المخيخ وبنى الخط الأوسط دوراً مركزياً في التطوّر السليم للجهاز العصبي. عند الاشتباه بخلل في أحد هذه البنى، من المهم جداً إجراء تقييم مفصّل لسلامة البنى وحجمها والعلاقات التشريحية بينها."],
    "מדדי ראש שאינם תואמים את גיל ההיריון": ["Head measurements inconsistent with gestational age", "مقاييس رأس لا تتوافق مع عمر الحمل"],
    "היקף ראש קטן מהמצופה": ["Smaller-than-expected head circumference", "محيط رأس أصغر من المتوقع"],
    "היקף ראש קטן מהטווח הצפוי לשבוע ההיריון עשוי להיות קשור למגוון גורמים, החל משונות התפתחותית תקינה ועד למצבים המשפיעים על התפתחות המוח. סקירה מכוונת מאפשרת לבחון האם מבני המוח עצמם מתפתחים באופן תקין.": ["A head circumference below the expected range for gestational age may relate to a range of factors, from normal developmental variation to conditions affecting brain development. A targeted scan examines whether the brain structures themselves are developing normally.", "قد يرتبط محيط الرأس الأصغر من النطاق المتوقع لأسبوع الحمل بعوامل متنوعة، من تنوّع تطوّري طبيعي إلى حالات تؤثر على تطوّر الدماغ. يتيح الفحص الموجّه معرفة ما إذا كانت بنى الدماغ نفسها تتطوّر بشكل سليم."],
    "היקף ראש גדול מהמצופה": ["Larger-than-expected head circumference", "محيط رأس أكبر من المتوقع"],
    "כאשר היקף הראש גדול מהצפוי, חשוב לבדוק האם מדובר במאפיין משפחתי תקין או בממצא הקשור לשינויים במבנה המוח או בכמות הנוזלים המוחיים. הבדיקה מספקת מידע מפורט על האנטומיה המוחית.": ["When head circumference is larger than expected, it is important to check whether this is a normal familial trait or a finding related to changes in brain structure or the amount of cerebral fluid. The scan provides detailed information on brain anatomy.", "عندما يكون محيط الرأس أكبر من المتوقع، من المهم التحقق مما إذا كان ذلك سمة عائلية طبيعية أو نتيجة مرتبطة بتغيّرات في بنية الدماغ أو كمية السوائل الدماغية. يقدّم الفحص معلومات مفصّلة عن تشريح الدماغ."],
    "שינוי בקצב גדילת הראש": ["A change in head-growth rate", "تغيّر في وتيرة نمو الرأس"],
    "לא רק גודל הראש חשוב, אלא גם קצב הגדילה שלו לאורך הזמן. שינוי משמעותי בקצב הגדילה עשוי להעיד על תהליך התפתחותי הדורש בירור נוסף. סקירה מכוונת מאפשרת להשוות בין מדידות קודמות.": ["Not only head size matters, but also its growth rate over time. A significant change in growth rate may indicate a developmental process requiring further evaluation. A targeted scan allows comparison with previous measurements.", "ليس حجم الرأس وحده المهم، بل أيضاً وتيرة نموه مع مرور الوقت. قد يدل تغيّر ملحوظ في وتيرة النمو على عملية تطوّرية تستدعي توضيحاً إضافياً. يتيح الفحص الموجّه المقارنة مع قياسات سابقة."],
    "חשד לזיהום תוך-רחמי": ["Suspected intrauterine infection", "اشتباه بعدوى داخل الرحم"],
    "זיהום בנגיף CMV במהלך ההיריון עלול במקרים מסוימים להשפיע על התפתחות מערכת העצבים המרכזית. סקירה מכוונת למוח מסייעת לזהות סימנים אפשריים לפגיעה מוחית ולבחון האם קיימים שינויים מבניים הקשורים לזיהום.": ["CMV infection during pregnancy can, in certain cases, affect the development of the central nervous system. A targeted brain scan helps identify possible signs of brain injury and check for structural changes related to the infection.", "قد تؤثر عدوى فيروس CMV خلال الحمل في حالات معيّنة على تطوّر الجهاز العصبي المركزي. يساعد الفحص الموجّه للدماغ في رصد علامات محتملة لإصابة دماغية ومعرفة ما إذا كانت هناك تغيّرات بنيوية مرتبطة بالعدوى."],
    "טוקסופלזמה": ["Toxoplasmosis", "داء المقوّسات"],
    "טוקסופלזמה היא מחלה זיהומית העלולה לעבור מהאם לעובר ולפגוע במערכת העצבים המרכזית. כאשר עולה חשד לחשיפה או להדבקה, מומלץ לבצע הערכה מפורטת של מוח העובר לאיתור ממצאים אופייניים.": ["Toxoplasmosis is an infectious disease that can pass from mother to fetus and harm the central nervous system. When exposure or infection is suspected, a detailed assessment of the fetal brain is recommended to look for characteristic findings.", "داء المقوّسات مرض معدٍ قد ينتقل من الأم إلى الجنين ويضر بالجهاز العصبي المركزي. عند الاشتباه بالتعرض أو العدوى، يُنصح بإجراء تقييم مفصّل لدماغ الجنين لرصد نتائج مميزة."],
    "זיקה": ["Zika", "زيكا"],
    "נגיף הזיקה ידוע כגורם העלול להשפיע על התפתחות מוח העובר, במיוחד כאשר החשיפה מתרחשת במהלך ההיריון. סקירה מכוונת מאפשרת לבדוק את מבנה המוח ואת מדדי הגדילה של הראש, ולזהות סימנים לפגיעה בהתפתחות.": ["The Zika virus is known to potentially affect fetal brain development, especially when exposure occurs during pregnancy. A targeted scan checks brain structure and head-growth measurements, and identifies signs of impaired development.", "يُعرف فيروس زيكا بأنه قد يؤثر على تطوّر دماغ الجنين، خصوصاً عندما يحدث التعرض خلال الحمل. يتيح الفحص الموجّه فحص بنية الدماغ ومقاييس نمو الرأس ورصد علامات على خلل في التطوّر."],
    "זיהומים נוספים": ["Other infections", "عدوى أخرى"],
    "קיימים זיהומים נוספים העלולים להשפיע על התפתחות מוח העובר בדרגות שונות. במקרים אלו, סקירה ייעודית מספקת מידע חשוב על מצב המוח ומאפשרת להחליט האם נדרש בירור משלים או מעקב ייעודי.": ["Other infections can affect fetal brain development to varying degrees. In these cases, a dedicated scan provides important information about the brain and helps decide whether complementary evaluation or dedicated follow-up is needed.", "هناك أنواع عدوى أخرى قد تؤثر على تطوّر دماغ الجنين بدرجات متفاوتة. في هذه الحالات، يقدّم الفحص المخصّص معلومات مهمة عن حالة الدماغ ويساعد في تقرير ما إذا كان يلزم توضيح مكمّل أو متابعة مخصصة."],
    "רקע רפואי או משפחתי משמעותי": ["Significant medical or family history", "خلفية طبية أو عائلية مهمة"],
    "היסטוריה משפחתית של מומים מוחיים": ["Family history of brain anomalies", "تاريخ عائلي لتشوّهات دماغية"],
    "כאשר קיימים במשפחה מקרים של מומים מולדים במוח או במערכת העצבים, עשויה להיות הצדקה להערכה מעמיקה יותר של מוח העובר. הבדיקה מסייעת לזהות ממצאים מוקדמים ולהעניק להורים מידע מדויק יותר.": ["When there are cases of congenital brain or nervous-system anomalies in the family, a deeper assessment of the fetal brain may be warranted. The scan helps identify early findings and give parents more accurate information.", "عند وجود حالات في العائلة لتشوّهات خلقية في الدماغ أو الجهاز العصبي، قد يكون هناك مبرر لتقييم أعمق لدماغ الجنين. يساعد الفحص في رصد نتائج مبكرة ومنح الوالدين معلومات أكثر دقة."],
    "מחלות גנטיות המשפיעות על מערכת העצבים": ["Genetic diseases affecting the nervous system", "أمراض وراثية تؤثر على الجهاز العصبي"],
    "ישנן מחלות גנטיות העלולות להשפיע על מבנה המוח או על תהליך התפתחותו. במצבים אלו סקירה מכוונת מהווה חלק חשוב מהבירור ומאפשרת לאתר ממצאים אנטומיים העלולים להיות קשורים לרקע הגנטי.": ["Some genetic diseases can affect brain structure or its development. In these situations a targeted scan is an important part of the workup, identifying anatomical findings that may relate to the genetic background.", "هناك أمراض وراثية قد تؤثر على بنية الدماغ أو على عملية تطوّره. في هذه الحالات يشكّل الفحص الموجّه جزءاً مهماً من التقييم ويتيح رصد نتائج تشريحية قد تكون مرتبطة بالخلفية الوراثية."],
    "עיכוב התפתחותי או נוירולוגי במשפחה": ["Developmental or neurological delay in the family", "تأخّر تطوّري أو عصبي في العائلة"],
    "כאשר קיים סיפור משפחתי של הפרעות נוירולוגיות או עיכובים התפתחותיים, לעיתים מומלץ להרחיב את הבירור. סקירה מכוונת מאפשרת לבחון את מבני המוח המרכזיים ולוודא כי ההתפתחות מתקדמת כמצופה.": ["When there is a family history of neurological disorders or developmental delays, extending the workup is sometimes recommended. A targeted scan examines the key brain structures and verifies that development is progressing as expected.", "عند وجود تاريخ عائلي لاضطرابات عصبية أو تأخّرات تطوّرية، يُنصح أحياناً بتوسيع التقييم. يتيح الفحص الموجّه فحص بنى الدماغ الرئيسية والتأكد من أن التطوّر يتقدّم كما هو متوقع."],
    "מצבים הקשורים להריון עצמו": ["Conditions related to the pregnancy itself", "حالات مرتبطة بالحمل نفسه"],
    "האטה בגדילה התוך-רחמית": ["Intrauterine growth restriction", "تباطؤ النمو داخل الرحم"],
    "עוברים הסובלים מהאטה בגדילה עלולים להיות בסיכון מוגבר למצבים המשפיעים גם על התפתחות המוח. בדיקה ממוקדת מאפשרת להעריך את מבני המוח ואת זרימת הדם המוחית, כחלק מהערכת מצב העובר הכוללת.": ["Fetuses with growth restriction may be at increased risk of conditions that also affect brain development. A focused scan assesses brain structures and cerebral blood flow, as part of the overall assessment of the fetus.", "قد يكون الأجنّة الذين يعانون من تباطؤ في النمو معرّضين بدرجة أكبر لحالات تؤثر أيضاً على تطوّر الدماغ. يتيح الفحص الموجّه تقييم بنى الدماغ وتدفق الدم الدماغي، كجزء من التقييم الشامل لحالة الجنين."],
    "מומים בעמוד השדרה": ["Spinal anomalies", "تشوّهات في العمود الفقري"],
    "מומים מסוימים בעמוד השדרה עשויים להיות מלווים גם בשינויים במבנה המוח. לכן, כאשר מאובחן מום בעמוד השדרה, מקובל לבצע הערכה מפורטת של מערכת העצבים המרכזית כולה.": ["Certain spinal anomalies may be accompanied by changes in brain structure. Therefore, when a spinal anomaly is diagnosed, a detailed assessment of the entire central nervous system is standard practice.", "قد تترافق تشوّهات معيّنة في العمود الفقري مع تغيّرات في بنية الدماغ أيضاً. لذلك، عند تشخيص تشوّه في العمود الفقري، من المعتاد إجراء تقييم مفصّل للجهاز العصبي المركزي بأكمله."],
    "חשיפה לתרופות מסוימות": ["Exposure to certain medications", "التعرض لأدوية معيّنة"],
    "במקרים בהם הייתה חשיפה לתרופות בעלות פוטנציאל להשפיע על התפתחות העובר, ייתכן שיומלץ על סקירה מכוונת למוח. מטרת הבדיקה היא לוודא כי מבני המוח מתפתחים באופן תקין ולשלול ממצאים חריגים.": ["When there has been exposure to medications with potential to affect fetal development, a targeted brain scan may be recommended. Its purpose is to verify that brain structures are developing normally and to rule out abnormal findings.", "في الحالات التي حدث فيها تعرض لأدوية قد تؤثر على تطوّر الجنين، قد يُنصح بإجراء فحص موجّه للدماغ. هدف الفحص هو التأكد من أن بنى الدماغ تتطوّر بشكل سليم واستبعاد نتائج غير طبيعية."],
    "ממצאים חריגים בבדיקות גנטיות או ב-MRI עוברי": ["Abnormal findings on genetic tests or fetal MRI", "نتائج غير طبيعية في الفحوصات الوراثية أو الرنين المغناطيسي الجنيني"],
    "כאשר בדיקות גנטיות או בדיקות הדמיה אחרות מעלות ממצא המחייב בירור נוסף, סקירה מכוונת למוח מהווה כלי משלים חשוב. היא מאפשרת לבחון את האנטומיה המוחית בזמן אמת ולשלב את כלל הנתונים.": ["When genetic tests or other imaging raise a finding requiring further evaluation, a targeted brain scan is an important complementary tool. It examines brain anatomy in real time and integrates all the data.", "عندما تكشف الفحوصات الوراثية أو فحوصات التصوير الأخرى عن نتيجة تستدعي توضيحاً إضافياً، يشكّل الفحص الموجّه للدماغ أداة مكمّلة مهمة. فهو يتيح فحص تشريح الدماغ في الوقت الفعلي ودمج جميع المعطيات."],
    "4 תובנות מהבדיקה": ["4 insights from the scan", "4 نتائج من الفحص"],
    "סקירה מכוונת למוח העובר מספקת מידע מפורט על מבנה המוח והתפתחותו, ומסייעת בקבלת החלטות רפואיות ובהתאמת המשך המעקב ההריוני.": ["A targeted fetal brain scan provides detailed information on brain structure and development, supporting medical decisions and tailoring further pregnancy follow-up.", "يقدّم الفحص الموجّه لدماغ الجنين معلومات مفصّلة عن بنية الدماغ وتطوّره، ويساعد في اتخاذ القرارات الطبية وتكييف متابعة الحمل اللاحقة."],
    "התאמה לשבוע ההיריון": ["Consistency with gestational age", "التوافق مع أسبوع الحمل"],
    "הבדיקה מאפשרת להשוות את התפתחות מבני המוח לשלב ההיריון, ולוודא כי ההתפתחות תואמת את הצפוי.": ["The scan compares the development of brain structures with the stage of pregnancy, verifying that development matches expectations.", "يتيح الفحص مقارنة تطوّر بنى الدماغ بمرحلة الحمل، والتأكد من أن التطوّر يتوافق مع المتوقع."],
    "סימנים להפרעה בהתפתחות": ["Signs of a developmental disorder", "علامات على اضطراب في التطوّر"],
    "בחינת כלל מבני המוח וחיפוש סימנים העלולים להעיד על חריגה, לתכנון נכון של המשך הבירור.": ["Examining all brain structures and looking for signs that may indicate an anomaly, to properly plan further evaluation.", "فحص جميع بنى الدماغ والبحث عن علامات قد تدل على خلل، من أجل التخطيط السليم لمواصلة التقييم."],
    "צורך בבירור משלים": ["Need for complementary workup", "الحاجة إلى تقييم مكمّل"],
    "במקרים בהם מתגלה ממצא הדורש מידע נוסף, התוצאות מסייעות להחליט על בדיקות משלימות כגון MRI עוברי או ייעוץ גנטי.": ["When a finding requiring more information is detected, the results help decide on complementary tests such as fetal MRI or genetic counseling.", "عند اكتشاف نتيجة تتطلب مزيداً من المعلومات، تساعد النتائج في اتخاذ قرار بشأن فحوصات مكمّلة مثل الرنين المغناطيسي الجنيني أو الاستشارة الوراثية."],
    "משמעות קלינית אפשרית": ["Possible clinical significance", "الدلالة السريرية المحتملة"],
    "מעבר לזיהוי הממצא, הבדיקה מסייעת בהבנת המשמעות הרפואית האפשרית ובהערכת ההשלכות העתידיות.": ["Beyond identifying the finding, the scan helps understand its possible medical significance and assess future implications.", "إلى جانب رصد النتيجة، يساعد الفحص في فهم دلالتها الطبية المحتملة وتقييم تبعاتها المستقبلية."],
    "מדוע חשוב שהבדיקה תתבצע על ידי גניקולוג מומחה בתחום?": ["Why should the scan be performed by a specialist gynecologist?", "لماذا من المهم أن يُجري الفحص طبيب نسائي مختص في المجال؟"],
    "הערכת מוח העובר דורשת מיומנות גבוהה, ניסיון רב והיכרות מעמיקה עם שלבי ההתפתחות התקינים של מערכת העצבים לאורך ההיריון. מדובר בתחום ייחודי המשלב ידע מתקדם באולטרסאונד מיילדותי, נוירולוגיה עוברית והדמיה עוברית. פענוח מדויק של הממצאים מאפשר להבדיל בין וריאציות תקינות לבין סימנים המחייבים בירור נוסף, ולהעניק להורים מידע אמין ומבוסס לצורך קבלת החלטות.": ["Assessing the fetal brain requires great skill, extensive experience and deep familiarity with the normal developmental stages of the nervous system throughout pregnancy. It is a unique field combining advanced knowledge in obstetric ultrasound, fetal neurology and fetal imaging. Accurate interpretation of the findings makes it possible to distinguish normal variations from signs requiring further evaluation, and to give parents reliable, well-founded information for decision-making.", "يتطلب تقييم دماغ الجنين مهارة عالية وخبرة واسعة ومعرفة معمّقة بمراحل التطوّر الطبيعية للجهاز العصبي على مدار الحمل. إنه مجال فريد يجمع بين معرفة متقدمة في الأولتراساوند التوليدي وطب أعصاب الجنين والتصوير الجنيني. يتيح التفسير الدقيق للنتائج التمييز بين التنوّعات الطبيعية والعلامات التي تستدعي توضيحاً إضافياً، ومنح الوالدين معلومات موثوقة ومدروسة لاتخاذ القرارات."]
  };

  var LANG_KEY = 'site-lang';
  var lang = 'he';
  try { lang = localStorage.getItem(LANG_KEY) || 'he'; } catch (e) {}
  if (['he', 'en', 'ar'].indexOf(lang) < 0) lang = 'he';

  function norm(s) { return (s || '').replace(/\u00A0/g, ' ').replace(/\s+/g, ' ').trim(); }
  function tr(src) {
    if (lang === 'he') return src;
    var e = DICT[src];
    if (!e) return src;
    return lang === 'en' ? e[0] : e[1];
  }

  var applying = false;
  var ATTRS = ['alt', 'placeholder', 'aria-label', 'title'];

  function apply() {
    if (!document.body) return;
    applying = true;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = walker.nextNode())) {
      var src = n.__heSrc;
      if (src == null) {
        var cur = norm(n.nodeValue);
        if (!cur || !DICT[cur]) continue;
        n.__heSrc = cur;
        src = cur;
      }
      var want = tr(src);
      var m = (n.nodeValue || '').match(/^(\s*)[\s\S]*?(\s*)$/);
      var next = (m ? m[1] : '') + want + (m ? m[2] : '');
      if (n.nodeValue !== next) n.nodeValue = next;
    }
    ATTRS.forEach(function (a) {
      var els = document.body.querySelectorAll('[' + a + ']');
      for (var i = 0; i < els.length; i++) {
        var el = els[i], key = '__heSrc_' + a, src2 = el[key];
        if (src2 == null) {
          var cur2 = norm(el.getAttribute(a));
          if (!cur2 || !DICT[cur2]) continue;
          el[key] = cur2;
          src2 = cur2;
        }
        var want2 = tr(src2);
        if (el.getAttribute(a) !== want2) el.setAttribute(a, want2);
      }
    });
    // direction
    var isLtr = lang === 'en';
    document.documentElement.lang = lang;
    var dirEls = document.body.querySelectorAll('[dir]');
    for (var j = 0; j < dirEls.length; j++) {
      var d = dirEls[j];
      if (d.closest('#i18n-switcher')) continue;
      if (d.__heDir == null) d.__heDir = d.getAttribute('dir') || 'rtl';
      var wantDir = isLtr ? 'ltr' : d.__heDir;
      if (d.getAttribute('dir') !== wantDir) d.setAttribute('dir', wantDir);
    }
    // flip explicit inline text-align in LTR mode (dir doesn't flip those)
    var alignEls = document.body.querySelectorAll('[style*="text-align"]');
    for (var k = 0; k < alignEls.length; k++) {
      var ae = alignEls[k];
      if (ae.closest && ae.closest('#i18n-switcher')) continue;
      if (ae.__heAlign == null) ae.__heAlign = ae.style.textAlign || '';
      var orig = ae.__heAlign;
      if (orig !== 'right' && orig !== 'left') continue;
      var wantAlign = isLtr ? (orig === 'right' ? 'left' : 'right') : orig;
      if (ae.style.textAlign !== wantAlign) ae.style.textAlign = wantAlign;
    }
    document.body.classList.toggle('i18n-ar', lang === 'ar');
    updateSwitcher();
    requestAnimationFrame(function () { applying = false; });
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; apply(); });
  }

  function setLang(l) {
    if (l === lang) return;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    // In-place re-translation fights the page's renderer and glitches;
    // a clean reload applies the language consistently from the start.
    location.reload();
  }

  // ---- Arabic font support ----
  function injectAssets() {
    if (document.getElementById('i18n-style')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    var st = document.createElement('style');
    st.id = 'i18n-style';
    st.textContent =
      'html[lang="en"] svg:has(> path[d="M15 6l-6 6 6 6"]), html[lang="en"] svg:has(> path[d="M9 6l6 6-6 6"]) { transform:scaleX(-1); }' +
      'html[lang="en"] header img[src*="logo"] { transform:scaleX(-1); }' +
      'body.i18n-ar [style*="font-family"], body.i18n-ar { font-family:"Rubik","Assistant",sans-serif !important; }' +
      'body.i18n-ar * { letter-spacing:0 !important; }' +
      '#i18n-switcher > button:hover { background:#F1EAE1 !important; border-color:#D9CCBB !important; }' +
      '#i18n-switcher > button:hover svg { color:#866e59; }' +
      '#i18n-switcher [data-menu] { opacity:0; visibility:hidden; transform:translateY(-6px) scale(0.98); transition:opacity .22s cubic-bezier(.22,.61,.36,1), transform .22s cubic-bezier(.22,.61,.36,1), visibility .22s; transform-origin:top left; }' +
      '#i18n-switcher.is-open [data-menu] { opacity:1; visibility:visible; transform:translateY(0) scale(1); }' +
      '#i18n-switcher.is-open > button { background:#F1EAE1 !important; }' +
      '#i18n-switcher.is-open > button [data-chev] { transform:rotate(180deg); }' +
      '#i18n-switcher > button [data-chev] { transition:transform .22s ease; }' +
      '#i18n-switcher [data-menu] button:hover { background:#F7F1E8; }' +
      '#i18n-switcher [data-menu] button:hover [data-code] { color:#866e59; }';
    document.head.appendChild(st);
  }

  // ---- switcher UI: globe icon button + dropdown list ----
  var LANGS = [['he', 'עברית'], ['en', 'English'], ['ar', 'العربية']];
  var GLOBE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
  function buildSwitcher() {
    var ex = document.getElementById('i18n-switcher');
    if (ex) {
      if (ex.isConnected) return;
      if (ex.parentNode) ex.parentNode.removeChild(ex); // stale node from a wiped mount
    }
    var host = document.querySelector('header > div') || document.querySelector('header');
    var wrap = document.createElement('div');
    wrap.id = 'i18n-switcher';
    wrap.setAttribute('dir', 'ltr');
    wrap.style.cssText = 'position:relative;flex:0 0 auto;justify-self:end;';

    var cur = LANGS.filter(function (p) { return p[0] === lang; })[0] || LANGS[0];
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Change language');
    btn.style.cssText = 'appearance:none;display:flex;align-items:center;gap:7px;background:#F8F4EE;border:1px solid #E7DDD1;border-radius:999px;padding:8px 14px;cursor:pointer;font-family:inherit;font-size:12.5px;font-weight:600;line-height:1;color:#4A463F;transition:background .2s, border-color .2s;';
    btn.innerHTML = GLOBE + '<span>' + cur[1] + '</span><svg data-chev width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>';

    var menu = document.createElement('div');
    menu.setAttribute('data-menu', '');
    menu.style.cssText = 'position:absolute;top:calc(100% + 10px);left:0;min-width:190px;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);border:1px solid #EFE8DE;border-radius:16px;box-shadow:0 24px 60px -24px rgba(80,62,44,0.35), 0 4px 16px -8px rgba(80,62,44,0.12);padding:6px;display:flex;flex-direction:column;gap:2px;z-index:1000;';
    var CODES = { he: 'HE', en: 'EN', ar: 'AR' };
    LANGS.forEach(function (pair) {
      var it = document.createElement('button');
      it.type = 'button';
      it.dataset.lang = pair[0];
      var active = pair[0] === lang;
      it.style.cssText = 'appearance:none;border:none;display:flex;align-items:center;gap:12px;width:100%;text-align:start;background:' + (active ? '#F8F4EE' : 'transparent') + ';cursor:pointer;font-family:inherit;font-size:13.5px;font-weight:' + (active ? '700' : '500') + ';line-height:1;padding:11px 12px;border-radius:11px;color:#241E18;transition:background .15s;';
      it.innerHTML =
        '<span data-code style="flex:none;width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;background:' + (active ? '#866e59' : '#F3EDE4') + ';color:' + (active ? '#FFFFFF' : '#8A7A68') + ';font-size:10.5px;font-weight:700;letter-spacing:0.5px;transition:color .15s;">' + CODES[pair[0]] + '</span>' +
        '<span style="flex:1;">' + pair[1] + '</span>' +
        (active ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#866e59" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex:none;"><path d="M20 6L9 17l-5-5"></path></svg>' : '');
      it.addEventListener('click', function () { setLang(pair[0]); });
      menu.appendChild(it);
    });

    function toggle(open) {
      var show = open != null ? open : !wrap.classList.contains('is-open');
      wrap.classList.toggle('is-open', show);
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    document.addEventListener('click', function () { toggle(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

    // keep the menu on-screen: if anchoring left overflows the viewport, flip to right
    requestAnimationFrame(function () {
      var r = wrap.getBoundingClientRect();
      if (r.left + 190 > window.innerWidth - 12) { menu.style.left = 'auto'; menu.style.right = '0'; menu.style.transformOrigin = 'top right'; }
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    if (host) {
      host.appendChild(wrap);
    } else {
      wrap.style.position = 'fixed';
      wrap.style.top = '14px';
      if (lang === 'en') {
        // LTR: logo sits on the left, so anchor the switcher to the right,
        // vertically centered on the header line and aligned with its content edge
        wrap.style.right = '14px';
        menu.style.left = 'auto';
        menu.style.right = '0';
        menu.style.transformOrigin = 'top right';
        var alignEn = function () {
          var hd = document.querySelector('header > div');
          var h = document.querySelector('header');
          if (!hd || !h) return false;
          var r = hd.getBoundingClientRect();
          if (!r.height) return false;
          var pad = parseFloat(getComputedStyle(hd).paddingRight) || 0;
          var hr = h.getBoundingClientRect();
          wrap.style.top = window.innerWidth <= 720 ? (hr.top + 10) + 'px' : Math.max(8, hr.top + (hr.height - wrap.offsetHeight) / 2) + 'px';
          wrap.style.right = Math.max(14, window.innerWidth - r.right + pad) + 'px';
          return true;
        };
        var atries = 0;
        (function alignLoop() {
          if (alignEn()) return;
          if (++atries > 300) return;
          requestAnimationFrame(alignLoop);
        })();
        window.addEventListener('resize', alignEn);
      } else {
        wrap.style.insetInlineStart = '14px';
      }
      wrap.style.zIndex = '999';
      document.body.appendChild(wrap);
    }
  }
  function updateSwitcher() {}

  function init() {
    injectAssets();
    // Wait for the DC runtime to mount the page before touching the DOM —
    // anything appended earlier gets wiped by the mount.
    var tries = 0;
    (function boot() {
      var mounted = document.querySelector('header') || document.querySelector('#dc-root > *');
      if (!mounted && ++tries < 600) { requestAnimationFrame(boot); return; }
      buildSwitcher();
      apply();
      var mo = new MutationObserver(function (muts) {
        if (applying) return;
        // ignore mutations inside the switcher
        for (var i = 0; i < muts.length; i++) {
          var t = muts[i].target;
          if (t && t.nodeType === 1 && t.closest && t.closest('#i18n-switcher')) continue;
          schedule();
          return;
        }
      });
      mo.observe(document.body, { childList: true, subtree: true, characterData: true });
      // watchdog: a re-mount can still wipe the switcher — rebuild it if it disappears
      setInterval(function () {
        var el = document.getElementById('i18n-switcher');
        if (!el || !el.isConnected) { buildSwitcher(); schedule(); }
      }, 1000);
    })();
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
