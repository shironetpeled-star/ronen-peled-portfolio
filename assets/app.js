// Resolve every header language link to the equivalent page.
window.__portfolioLanguagePairs={"index.html":"index-en.html","personal.html":"personal-en.html","employment.html":"employment-en.html","skills.html":"skills-en.html","experience.html":"history-en.html","projects.html":"role-magic-en.html","education.html":"role-customer-en.html","military.html":"service-page-en.html","work-environments.html":"work-environments-en.html","advantages.html":"advantages-en.html","product.html":"product-en.html","project.html":"project-en.html","system.html":"system-en.html","magic.html":"en-05.html","customer.html":"en-06.html","contact.html":"contact-en.html","thanks.html":"thanks-en.html"};
window.__portfolioLanguageTarget=function(){const page=location.pathname.split('/').pop()||'index.html';const pairs=window.__portfolioLanguagePairs;return pairs[page]||Object.keys(pairs).find(key=>pairs[key]===page)||(page==='service.html'?'service-page-en.html':document.documentElement.lang==='en'?'index.html':'index-en.html');};

window.__portfolioHebrewSpeechDiction=value=>String(value||'')
 .replace(/(?:MAGIC|מג[׳'’״"]?יק|מגי[׳'’״"]?ק)/gi,"מֶגִ׳יק")
 .replace(/(^|[^\u0590-\u05ff])מתכנת(?=$|[^\u0590-\u05ff])/g,'$1מְתַכְנֵת')
 .replace(/(^|[^\u0590-\u05ff])מנתח(?=$|[^\u0590-\u05ff])/g,'$1מְנַתֵּחַ')
 .replace(/(^|[^\u0590-\u05ff])מנהל(?=$|[^\u0590-\u05ff])/g,'$1מְנַהֵל')
 .replace(/(^|[^\u0590-\u05ff])מוצר(?=$|[^\u0590-\u05ff])/g,'$1מוּצָר')
 .replace(/(^|[^\u0590-\u05ff])([ובכלמהש]{0,3})אפיון(?=$|[^\u0590-\u05ff])/g,'$1$2אִפְיוּן')
 .replace(/(^|[^\u0590-\u05ff])הטמעה(?=$|[^\u0590-\u05ff])/g,'$1הַטְמָעָה')
 .replace(/(^|[^\u0590-\u05ff])הסבה(?=$|[^\u0590-\u05ff])/g,'$1הֲסָבָה')
 .replace(/(^|[^\u0590-\u05ff])סייבר(?=$|[^\u0590-\u05ff])/g,'$1סַייבֶּר')
 .replace(/\.{2,}/g,'.');

window.__portfolioEnglishProfessionalPronunciation=value=>{
 const glossary={"SDLC":"ess dee ell see","UAT":"you ay tee","FRS":"eff are ess","PRD":"pee are dee","QA":"cue ay","UX":"you ex","UED":"you ee dee","UI":"you eye","KPIs":"kay pee eyes","KPI":"kay pee eye","API":"ay pee eye","AI":"ay eye","CRM":"see are em","ERP":"ee are pee","BI":"bee eye","MVP":"em vee pee","MLP":"em ell pee","WBS":"double you bee ess","HTML":"aitch tee em ell","CSS":"see ess ess","SQL":"ess cue ell","BDO":"bee dee oh","ISC2":"eye ess see two","HR":"aitch are","IT":"eye tee","EI":"ee eye","SMS":"ess em ess","MS-SQL":"em ess ess cue ell","SaaS":"sass","B2B":"bee to bee","B2C":"bee to see","SAP":"ess ay pee","LLM":"ell ell em","ML":"em ell","GTM":"jee tee em","ETL":"ee tee ell","ELT":"ee ell tee","CSV":"see ess vee","AWS":"ay double you ess","GCP":"jee see pee","NLP":"en ell pee","GPT":"jee pee tee","SLA":"ess ell ay","OKR":"oh kay are","EQ":"ee cue","JSON":"jay son"};
 // Owner-confirmed product and company sounds, also for English narration.
 Object.assign(glossary,{"Secuitech":"skyoo tech","SMARTi":"smart ee","uniPaaS":"you nee pass","UNIPASS":"you nee pass","Btrieve":"bee treev"});
 const escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const names=Object.keys(glossary).sort((a,b)=>b.length-a.length);
 const pattern=new RegExp('(^|[^A-Za-z0-9])('+names.map(escape).join('|')+')(?=$|[^A-Za-z0-9])','gi');
 const lookup=Object.fromEntries(Object.entries(glossary).map(([k,v])=>[k.toLowerCase(),v]));
 return String(value||'').replace(/\(?ISC\)?\s*(?:2|²)/gi,'ISC2').replace(pattern,(_,prefix,name)=>prefix+lookup[name.toLowerCase()]);
};

window.__portfolioProfessionalPronunciation=(value)=>{
 value=String(value||'').replace(/[\u2010-\u2015\u2212]/g,'-').replace(/\(?ISC\)?\s*(?:2|²)/gi,'ISC2');
 const glossary={"Product Lifecycle":"פרודקט לייף סייקל","Business Strategy":"ביזנס סטרטג׳י","Strategy":"סטרטג׳י","Discovery":"דיסקאברי","Requirements":"ריקוויירמנטס","Prototype Management":"פרוטוטייפ מנג׳מנט","Roadmap":"רוד מאפ","Prioritization":"פריוריטיזיישן","Validation":"ולידיישן","User Acceptance Testing (UAT)":"יוזר אקספטנס טסטינג. יו איי טי","Feature Adoption Measurement":"פיצ׳ר אדופשן מז׳רמנט","Adoption":"אדופשן","End-to-End Thinking":"אנד טו אנד ת׳ינקינג","Business & Functional Analysis":"ביזנס אנד פונקציונל אנליסיס","Functional Requirements Specification (FRS) / Functional Specifications":"פונקציונל ריקוויירמנטס ספציפיקיישן. אף אר אס. פונקציונל ספציפיקיישנס","System Constraints":"סיסטם קונסטריינטס","System & Operational Requirements":"סיסטם אנד אופריישנל ריקוויירמנטס","Architecture":"ארכיטקטורה","Information Architecture":"אינפורמיישן ארכיטקטורה","Data Structures":"דאטה סטרקצ׳רס","UX / UED":"יו אקס. יו אי די","User Interface Design":"יוזר אינטרפייס דיזיין","Reporting":"ריפורטינג","Process Automation":"פרוסס אוטומיישן","Workflow Optimization":"וורקפלו אופטימיזיישן","HR/Payroll":"אֵייץ׳ אָר. פיירול","POS/Retail":"פי או אס. ריטייל","Claims & Service Systems":"קליימס אנד סרוויס סיסטמס","Program Management":"פרוגרם מנג׳מנט","Stakeholders":"סטייקהולדרס","Scope":"סקופ","Planning":"פלאנינג","Dependencies":"דיפנדנסיז","Risk":"ריסק","Multi-Project Prioritization":"מולטי פרוג׳קט פריוריטיזיישן","MS Project":"אם אס פרוג׳קט","Implementation":"אימפלמנטיישן","Acceptance Testing":"אקספטנס טסטינג","Rollout":"רול אאוט","Delivery":"דליברי","Event Planning":"איוונט פלאנינג","MAGIC":"מג׳יק","C/C++":"סי. סי פלוס פלוס",".NET":"דוט נט","Oracle":"אורקל","MS-SQL":"אֶם. אֶס. אֶס. קְיוּ. אֶל","Btrieve":"בי טריב","Azure":"אזור","Enterprise Systems":"אנטרפרייז סיסטמס","Software Development Life Cycle (SDLC)":"סופטוור דבלופמנט לייף סייקל. אס די אל סי","Quality Assurance (QA)":"קוואליטי אשורנס. קיו איי","ERP/SAP Integrations":"אי אר פי. סאפ אינטגריישנס","Debugging":"דיבאגינג","Optimization":"אופטימיזיישן","Data Migration":"דאטה מייגריישן","System Conversion":"סיסטם קונוורז׳ן","Version Upgrades":"ורס׳ן אפגריידס","Live-System Re-engineering":"לייב סיסטם רי אינג׳ינירינג","Cyber / Cybersecurity":"סייבר. סייבר סקיוריטי","Network Security":"נטוורק סקיוריטי","Privacy Laws":"פרייבסי לוז","Microsoft Excel":"מייקרוסופט אקסל","Microsoft PowerPoint":"מייקרוסופט פאוור פוינט","Cell Culture":"סל קלצ׳ר","Aviation":"אייביאיישן","Enterprise Customers":"אנטרפרייז קאסטומרס","User Needs":"יוזר נידס","User Stories":"יוזר סטוריז","Customer Engagement":"קאסטומר אנגייג׳מנט","Customer Trust & Partnership":"קאסטומר טראסט אנד פרטנרשיפ","Guidance":"גיידנס","Support":"סופורט","Remote Access":"רימוט אקסס","Remote User Support":"רימוט יוזר סופורט","Remote Troubleshooting":"רימוט טראבל שוטינג","Escalations":"אסקליישנס","Critical Incidents":"קריטיקל אינסידנטס","Customer Retention":"קאסטומר ריטנשן","Business Intelligence (BI)":"ביזנס אינטליג׳נס. בי איי","Metrics":"מטריקס","Dashboards":"דאשבורדס","Performance Tracking":"פרפורמנס טראקינג","A/B Testing":"איי בי טסטינג","Feedback Analysis":"פידבק אנליסיס","Data-Driven Decisions":"דאטה דריבן דיסיז׳נס","Regulation":"רגולציה","Ownership":"אונרשיפ","Stakeholder Management":"סטייקהולדר מנג׳מנט","Leadership Without Authority":"לידרשיפ וידאוט אותוריטי","Matrix Management":"מטריקס מנג׳מנט","Cross-Functional Collaboration":"קרוס פונקציונל קולבוריישן","Teamwork":"טים וורק","Oral Communication":"אורל קומיוניקיישן","Emotional Intelligence (EI)":"אימושנל אינטליג׳נס. אי איי","Human Resource Development":"היומן ריסורס דבלופמנט","Remote End-to-End Delivery":"רימוט אנד טו אנד דליברי","Vendor Sourcing & Negotiation":"ונדור סורסינג אנד נגושיאיישן","Vendor & Service Portfolio Management":"ונדור אנד סרוויס פורטפוליו מנג׳מנט","Supply Management":"סופליי מנג׳מנט","Open Mind":"אופן מיינד","Rapid Learning":"ראפיד לרנינג","System-Wide Thinking":"סיסטם ווייד ת׳ינקינג","Critical Problem Solving":"קריטיקל פרובלם סולבינג","Root Cause":"רוט קוז","Creativity":"קריאייטיביטי","Alternative Solutions":"אלטרנטיב סולושנס","Digital Marketing":"דיגיטל מרקטינג","Social Media":"סושיאל מדיה","Content Adaptation":"קונטנט אדפטיישן","Facebook":"פייסבוק","Instagram":"אינסטגרם","TikTok":"טיקטוק","WhatsApp":"וואטסאפ","Audience Engagement":"אודיאנס אנגייג׳מנט","Customer Communication":"קאסטומר קומיוניקיישן","Knowledge Sources":"נולג׳ סורסז","AI Integration":"איי איי אינטגריישן","Connectors":"קונקטורס","Make":"מייק","AI-Assisted Development":"איי איי אסיסטד דבלופמנט","AI Bots":"איי איי בוטס","Natural Language Queries":"נטורל לנגוויג׳ קוויריז","Voice Interaction":"וויס אינטראקשן","Contextual Navigation":"קונטקסטואל נאוויגיישן","AI Writing":"איי איי רייטינג","AI Story Generation":"איי איי סטורי ג׳נריישן","AI Presentations":"איי איי פרזנטיישנס","AI Voice Generation":"איי איי וויס ג׳נריישן","SWOT":"סְווֹט","RICE":"רַייס","PRD":"פִּי אָר דִי","MVP":"אֶם וִי פִּי","MLP":"אֶם אֶל פִּי","GTM":"ג׳י. טי. אם","B2B":"בי טו בי","B2C":"בי טו סי","SaaS":"סַאס","WBS":"דַבֶּל יוּ בִּי אֶס","HTML":"אייץ׳. טי. אם. אל","CRM":"סִי אָר אֶם","KPIs":"קיי. פי. אַייז","LLM":"אֶל אֶל אֶם","API":"אֵיי פִּי אַיי","AI":"אֵיי אַיי","SQL":"אֶס קְיוּ אֶל","QA":"קְיוּ אֵיי","UX":"יוּ אֶקְס","UI":"יוּ אַיי","Leadership":"לידרשיפ","Problem Solving":"פרובלם סולבינג","Data & Analytics":"דאטה אנד אנליטיקס","Product Management":"פרודקט מנג׳מנט","Project Management":"פרוג׳קט מנג׳מנט","System Analysis":"סיסטם אנליסיס","Customer Success":"קאסטומר סקסס","Technical Product":"טקניקל פרודקט","Product Manager":"פרודקט מנג׳ר","Project Manager":"פרוג׳קט מנג׳ר","System Analyst":"סיסטם אנליסט","End-to-End":"אנד טו אנד","HANDS ON":"הנדס און","Start to Finish":"סטארט טו פיניש","Start to End":"סטארט טו אנד","Feature-by-Feature":"פיצ׳ר ביי פיצ׳ר","Business Value":"ביזנס ואליו","Business Needs":"ביזנס נידס","Pain Points":"פיין פוינטס","Task Matrix":"טאסק מטריקס","End-to-End System View":"אנד טו אנד סיסטם ויו","Process Analysis":"פרוסס אנליסיס","UI Characterization":"יו איי קראקטריזיישן","Functional & Technical Analysis":"פונקציונל אנד טקניקל אנליסיס","Business & Functional Requirements":"ביזנס אנד פונקציונל ריקוויירמנטס","Cross-Functional Leadership":"קרוס פונקציונל לידרשיפ","Cross-Functional Work":"קרוס פונקציונל וורק","Customer Facing":"קאסטומר פייסינג","Product Translation":"פרודקט טרנסליישן","Product & Feature Adoption":"פרודקט אנד פיצ׳ר אדופשן","Go-to-Market":"גו טו מרקט","Go To Market":"גו טו מרקט","Help Desk":"הלפ דסק","High-Tech Environments":"היי טק אינוויירונמנטס","Information Systems Analyst Certification Course":"אינפורמיישן סיסטמס אנליסט סרטיפיקיישן קורס","MAGIC Fundamentals":"מג׳יק פנדמנטלס","Magic Software Industries":"מג׳יק סופטוור אינדסטריז","IAF College of Technology":"איי איי אף קולג׳ אוף טכנולוג׳י","AI Mastermind":"איי איי מאסטרמיינד","Back Office":"באק אופיס","Payroll Validation":"פיירול ולידיישן","HTML Reporting":"אייץ׳ טי אם אל ריפורטינג","Visual Vehicle Lot":"ויז׳ואל ויהיקל לוט","Live System Re-Engineering":"לייב סיסטם רי אינג׳ינירינג","Additional Services Portfolio":"אדישנל סרוויסז פורטפוליו","Large-Company Experience":"לארג׳ קומפני אקספיריינס","SMARTi":"סמארטי","Shlomo SIXT":"שלמה סיקסט","SIXT":"סיקסט","Verifone":"וריפון","Beta Soft":"בטא סופט","Sysnet":"סיסנת","Secuitech":"סקיוטק","Seculife":"סקיולייף","John Bryce":"ג׳ון ברייס","uniPaaS":"יוניפאס","UNIPASS":"יוניפאס","BDO":"בִּי דִי אוֹ","ISC2":"איי אס סי טו","ERP":"אִי אָר פִּי","SAP":"סאפ","IT":"אַיי טִי","HR":"אֵייץ׳ אָר","EI":"אי. איי","UAT":"יו. איי. טי","FRS":"אף. אר. אס","SDLC":"אס. די. אל. סי","SMS":"אס. אם. אס","Billing":"בילינג","Legacy":"לגאסי","Databases":"דאטה בייסז","Development":"דבלופמנט","Maintenance":"מיינטננס","Features":"פיצ׳רס","Integrations":"אינטגריישנס","Bottlenecks":"בוטלנקס","Execution":"אקסקיושן","Improvement":"אימפרובמנט","Communication":"קומיוניקיישן","Feedback":"פידבק","Enterprise":"אנטרפרייז","Customer":"קאסטומר","Business":"ביזנס","Product":"פרודקט","Technology":"טכנולוג׳י","Technical":"טקניקל","Functional":"פונקציונל","Prototype":"פרוטוטייפ","Growth":"גרות׳","Modules":"מודיולס","Tasks":"טאסקס","Cyber":"סייבר","Data":"דאטה"};
 // Pronunciation entries supplied by the site owner; speech output only.
 Object.assign(glossary,{"Discovery":"דִיסְקַאבֶרִי","Milestone":"מַיילְסְטוֹן","Roadmap":"רוֹדְמֶאפּ","Machine Learning":"מַאשִׁין לֶרְנִינְג","Prototype":"פְּרוֹטוֹטַייפּ","LLM":"אֶל-אֶל-אֶם","Kickoff":"קִיקְאוֹף","Mockup":"מוֹקַאפּ","Computer Vision":"קוֹמְפְּיוּטֶר וִיזֶ'ן","Deadline":"דֶדְלַיין","BigQuery":"בִּיג-קְווֵרִי","UX":"יוּ-אֶקְס","Negotiation":"נֶגוֹשִׁיאֵיישֶׁן","Looker":"לוּקֶר","Mentorship":"מֶנְטוֹרְשִׁיפּ","Bias":"בַּאיַאס","Monday":"מַאנְדֵיי","Streaming":"סְטְרִימִינְג","Training":"טְרֵיינִינְג","Scope":"סְקוֹפּ","ETL":"אִי-טִי-אֶל","Vector Database":"וֶקְטוֹר דֵייטָה-בֵּייס","Prioritization":"פְּרַאיוֹרִיטִיזֵיישֶׁן","Waterfall":"ווֹטֶרְפוֹל","Neural Network":"נְיוּרַל נֶטְווֹרְק","MVP":"אֶם-וִי-פִּי","Critical Thinking":"קְרִיטִיקַל תִ'ינְקִינְג","AI Agent":"אֵיי-אַיי אֵייגֶ'נְט","Cross-functional":"קְרוֹס-פַאנְקְשֶׁנַל","SLA":"אֶס-אֶל-אֵיי","AWS":"אֵיי-דַאבְּלְיוּ-אֶס","User Journey":"יוּזֶר גֶ'רְנִי","Execution":"אֶקְסֶקְיוּשֶׁן","Consensus":"קוֹנְסֶנְזוּס","Sprint Planning":"סְפְּרִינְט פְּלֶנִינְג","Buy-in":"בַּאי-אִין","Product Manager":"פְּרוֹדַאקְט מֶנֶגֶ'ר","B2B":"בִּי-טוּ-בִּי","Context Window":"קוֹנְטֶקְסְט וִינְדוֹ","Workflow":"ווֹרְקְפְלוֹאוּ","Query":"קְווֵרִי","Use Case":"יוּז קֵייס","Data Lake":"דֵייטָה לֵייק","SQL":"אֶס-קְיוּ-אֶל","Transparency":"טְרַאנְסְפַּרֶנְסִי","Metric":"מֶטְרִיק","Storytelling":"סְטוֹרִיטֶלִינְג","Sprint Review":"סְפְּרִינְט רִיבְיוּ","Deliverable":"דֶלִיבֶרַאבֶּל","Trello":"טְרֶלוֹ","Epic":"אֶפִּיק","Metadata":"מֶטָה-דֵייטָה","EQ":"אִי-קְיוּ","Data Governance":"דֵייטָה גַאבֶרְנֶנְס","Database":"דֵייטָה-בֵּייס","Churn":"צֶ'רְן","Token":"טוֹקֶן","Kanban":"קַאנְבַּאן","NoSQL":"נוֹ-אֶס-קְיוּ-אֶל","Sprint":"סְפְּרִינְט","Confluence":"קוֹנְפְלוּאֶנְס","Asana":"אַסַאנָה","Benchmark":"בֶּנְצְ'מַארְק","Batch":"בֶּאטְץ'","Scrum Master":"סְקְרַאם מַאסְטֶר","Problem Solving":"פְּרוֹבְּלֶם סוֹלְבִינְג","Soft Skills":"סוֹפְט סְקִילְז","Emotional Intelligence":"אִימוֹשֶׁנַל אִינְטֶלִיגֶ'נְס","ELT":"אִי-אֶל-טִי","Resilience":"רִיזִילְיֶנְס","Decision Making":"דִיסִיזֶ'ן מֵייקִינְג","User Story":"יוּזֶר סְטוֹרִי","Databricks":"דֵייטָה-בְּרִיקְס","Few-shot":"פְיוּ-שׁוֹט","Conversion":"קוֹנְבֶרְזֶ'ן","Brainstorming":"בְּרֵיינְסְטוֹרְמִינְג","Scrum":"סְקְרַאם","Project Manager":"פְּרוֹגֶ'קְט מֶנֶגֶ'ר","Launch":"לוֹנְץ'","Jira":"גִ'ירָה","A/B Testing":"אֵיי-בִּי טֶסְטִינְג","Fine-tuning":"פַיין-טְיוּנִינְג","Data Scientist":"דֵייטָה סַיינְטִיסְט","Attention to Detail":"אַטֶנְשֶׁן טוּ דִיטֵייל","Automation":"אוֹטוֹמֵיישֶׁן","Delivery":"דֶלִיבֶרִי","Beta":"בֵּטָא","Notion":"נוֹשֶׁן","Risk Management":"רִיסְק מֶנֶגְ'מֶנְט","Trust":"טְרַאסְט","Dataset":"דֵייטָה-סֶט","Follow-up":"פוֹלוֹאוּ-אַפּ","Inference":"אִינְפֶרֶנְס","Scope Creep":"סְקוֹפּ קְרִיפּ","Hallucination":"הַאלוּסִינֵיישֶׁן","Onboarding":"אוֹנְבּוֹרְדִינְג","Context":"קוֹנְטֶקְסְט","GCP":"גִ'י-סִי-פִּי","Product Owner":"פְּרוֹדַאקְט אוֹנֶר","Dashboard":"דֶשְׁבּוֹרְד","OKR":"אוֹ-קֵיי-אַאר","Stakeholder Management":"סְטֵייקְהוֹלְדֶר מֶנֶגְ'מֶנְט","Delegation":"דֶלֶגֵיישֶׁן","Zero-shot":"זִירוֹ-שׁוֹט","Data Engineer":"דֵייטָה אֶנְגִ'ינִיר","Velocity":"וֶלוֹסִיטִי","Alignment":"אַלַיינְמֶנְט","Daily Standup":"דֵיילִי סְטֶנְדַאפּ","Work-Life Balance":"ווֹרְק-לַייף בַּאלַאנְס","Snowflake":"סְנוֹפְלֵייק","GenAI":"גֶ'ן-אֵיי-אַיי","Guardrails":"גַארְדְרֵיילְז","Growth Mindset":"גְרוֹת' מַיינְדְסֶט","JSON":"גֵ'ייסוֹן","Communication":"קוֹמְיוּנִיקֵיישֶׁן","Real-time":"רִיל-טַיים","NLP":"אֶן-אֶל-פִּי","Ownership":"אוֹנֶרְשִׁיפּ","Accountability":"אַקַאוּנְטַאבִּילִיטִי","Constructive Feedback":"קוֹנְסְטְרַקְטִיב פִידְבֶּק","UAT":"יוּ-אֵיי-טִי","Value Proposition":"וַואלְיוּ פְּרוֹפּוֹזִישֶׁן","Funnel":"פַאנֶל","Embedding":"אֶמְבֶּדִינְג","Prompt Engineering":"פְּרוֹמְפְּט אֶנְגִ'ינִירִינְג","Resource Allocation":"רִיסוֹרְס אַלוֹקֵיישֶׁן","Anomaly":"אַנוֹמַלִי","CSV":"סִי-אֶס-וִי","Azure":"אַז'וּר","Segmentation":"סֶגְמֶנְטֵיישֶׁן","Schema":"סְקִימָה","Temperature":"טֶמְפְּרַצֶ'ר","Proactivity":"פְּרוֹאַקְטִיבִיטִי","ML":"אֶם-אֶל","Data Cleaning":"דֵייטָה קְלִינִינְג","Sync":"סִינְק","Feedback":"פִידְבֶּק","Prompt":"פְּרוֹמְפְּט","B2C":"בִּי-טוּ-סִי","BI":"בִּי-אַיי","Pitch":"פִּיטְץ'","AI":"אֵיי-אַיי","Feature":"פִּיצֶ'ר","Mindset":"מַיינְדְסֶט","Conflict Resolution":"קוֹנְפְלִיקְט רֶזוֹלוּשֶׁן","Escalation":"אֶסְקַלֵיישֶׁן","Feature Request":"פִּיצֶ'ר רִיקְווֶסְט","Agile":"אֶגַ'ייל","Time to Market":"טַיים טוּ מַארְקֶט","Gantt Chart":"גַאנְט צַ'ארְט","Empathy":"אֶמְפַּתְיָה","KPI":"קֵיי-פִּי-אַיי","Data Analyst":"דֵייטָה אַנַלִיסְט","Edge Case":"אֶדְג' קֵייס","Backlog":"בֶּקְלוֹג","Multitasking":"מַלְטִיטַאסְקִינְג","Capacity":"קַפַּאסִיטִי","GTM":"גִ'י-טִי-אֶם","Retrospective":"רֶטְרוֹסְפֶּקְטִיב","QA":"קְיוּ-אֵיי","Pain Point":"פֵּיין פּוֹינְט","Time Management":"טַיים מֶנֶגְ'מֶנְט","SaaS":"סַאס","Regression":"רֶגְרֶסְיָה","Leadership":"לִידֶרְשִׁיפּ","Retention":"רִיטֶנְשֶׁן","Data":"דֵייטָה","Open Source":"אוֹפֶּן סוֹרְס","Dependency":"דִיפֶּנְדֶנְסִי","UI":"יוּ-אַיי","Go-to-Market":"גוֹ-טוּ-מַארְקֶט","Copilot":"קוֹפַּיילוֹט","Claude":"קְלוֹד","Cloud":"קְלַאוּד","Persona":"פֶּרְסוֹנָה","Adaptability":"אַדַפְּטַאבִּילִיטִי","Pipeline":"פַּייפְּלַיין","Transformer":"טְרַאנְסְפוֹרְמֶר","Project":"פְּרוֹגֶ'קְט","Burnout":"בֶּרְנַאוּט","Post-Mortem":"פּוֹסְט-מוֹרְטֶם","Bug":"בַּאג","Model":"מוֹדֶל","Bottleneck":"בּוֹטֶלְנֶק","Big Data":"בִּיג דֵייטָה","Data Warehouse":"דֵייטָה וֵורהַאוּס","Timeline":"טַיימְלַיין","North Star Metric":"נוֹרְת' סְטַאר מֶטְרִיק","Hard Skills":"הַארְד סְקִילְז","Product":"פְּרוֹדַאקְט","Correlation":"קוֹרֶלֵיישֶׁן","Agent":"אֵייגֶ'נְט","Tableau":"טַאבְּלוֹ","Data Integrity":"דֵייטָה אִינְטֶגְרִיטִי","Empowerment":"אֶמְפַּאוּאֶרְמֶנְט","Generative AI":"גֶ'נֶרַטִיב אֵיי-אַיי","One-on-One":"וַואן-אוֹן-וַואן","Coaching":"קוֹאצִ'ינְג","RAG":"רַאג","Stakeholder":"סְטֵייקְהוֹלְדֶר","Wireframe":"וַויֶירְפְרֵיים","Gemini":"גֶ'מִינַיי","GPT":"גִ'י-פִּי-טִי","Collaboration":"קוֹלַאבּוֹרֵיישֶׁן","Power BI":"פַּאוּאֶר בִּי-אַיי","Deep Learning":"דִיפּ לֶרְנִינְג","Release":"רִילִיז","API":"אֵיי-פִּי-אַיי","Throughput":"תְ'רוּפּוּט","Ticket":"טִיקֶט","Latency":"לֵייטֶנְסִי","Culture":"קַאלְצֶ'ר","Forecast":"פוֹרְקַאסְט","Cohort":"קוֹהוֹרְט","Mitigation":"מִיטִיגֵיישֶׁן","Customer Feedback":"קַאסְטוֹמֶר פִידְבֶּק"});
 // Reviewed technical terms; preserve the owner's dictionary for other terms.
 Object.assign(glossary,{"Cyber":"סַייבֶּר","Cybersecurity":"סַייבֶּר סִיקְיוּרִיטִי","Cyber / Cybersecurity":"סַייבֶּר. סַייבֶּר סִיקְיוּרִיטִי","ISC2":"אַיי אֶס סִי טוּ","IT":"אַיי טִי","MS-SQL":"אֶם אֶס אֶס קְיוּ אֶל","CRM":"סִי אָר אֶם","ERP":"אִי אָר פִּי","API":"אֵיי פִּי אַיי","BI":"בִּי אַיי","BDO":"בִּי דִי אוֹ","PRD":"פִּי אָר דִי","SDLC":"אֶס דִי אֶל סִי","UAT":"יוּ אֵיי טִי","FRS":"אֶף אָר אֶס","LLM":"אֶל אֶל אֶם","Team Leader":"טִים לִידֶר","Working at large-scale companies":"ווֹרְקִינְג אֶט לָארְג׳ סְקֵייל קַמְפָּנִיז","User Stories":"יוּזֶר סְטוֹרִיז","HANDS ON":"הֶנְדְז אוֹן","Network Security":"נֶטְווֹרְק סִיקְיוּרִיטִי"});
 // Additional phonetic review of legacy professional terminology.
 Object.assign(glossary,{"Product Lifecycle":"פְּרוֹדַקְט לַייף סַייקֵל","Business Strategy":"בִּיזְנֶס סְטְרָטֶג׳י","Strategy":"סְטְרָטֶג׳י","Requirements":"רִיקְוַויַירְמֶנְטְס","Prototype Management":"פְּרוֹטוֹטַייפ מֶנֶג׳מֶנְט","Validation":"וַלִידֵייְשֶׁן","User Acceptance Testing (UAT)":"יוּזֶר אַקְסֶפְּטַנְס טֶסְטִינְג יוּ אַיי טִי","Feature Adoption Measurement":"פִּיצֶ׳ר אֲדוֹפְּשֶׁן מֶז׳רְמֶנְט","Adoption":"אֲדוֹפְּשֶׁן","End-to-End Thinking":"אֶנְד טוּ אֶנְד ת׳ינְקִינְג","Business & Functional Analysis":"בִּיזְנֶס אֶנְד פַּנְקְשְׁנַל אֲנַלִיסִיס","Functional Requirements Specification (FRS) / Functional Specifications":"פַּנְקְשְׁנַל רִיקְוַויַירְמֶנְטְס סְפֶּסִיפִיקֵייְשֶׁן אֵף אֵר אֶס פַּנְקְשְׁנַל סְפֶּסִיפִיקֵייְשֶׁנְס","System Constraints":"סִיסְטֶם קוֹנְסְטְרֵייְנְטְס","System & Operational Requirements":"סִיסְטֶם אֶנְד אוֹפְּרֵייְשְׁנַל רִיקְוַויַירְמֶנְטְס","Architecture":"אַרְקִיטֶקְצֶ׳ר","Information Architecture":"אִינְפוֹרְמֵיישֶׁן אַרְקִיטֶקְצֶ׳ר","Data Structures":"דֵייטָה סְטְרַקְצ׳ֶרְס","UX / UED":"יוּ אֶקְס יוּ אִי דִי","User Interface Design":"יוּזֶר אִינְטֶרְפֵייס דִיזַיין","Reporting":"רִיפּוֹרְטִינְג","Process Automation":"פְּרוֹסֶס אוֹטוֹמֵייְשֶׁן","Workflow Optimization":"וּוֹרְקְפְלוֹ אוֹפְּטִימִיזֵייְשֶׁן","POS/Retail":"פִּי אוֹ אֶס רִיטֵייל","Claims & Service Systems":"קְלֵיימְס אֶנְד סֶרְוִויס סִיסְטֶמְס","Program Management":"פְּרוֹגְרַם מֶנֶג׳מֶנְט","Stakeholders":"סְטֵייקְהוֹלְדֶרְס","Planning":"פְּלֶנִינְג","Dependencies":"דִּיפֶּנְדֶנְסִיז","Risk":"רִיסְק","Multi-Project Prioritization":"מוּלְטִי פְּרוֹג׳קְט פְּרַיוֹרִיטִיזֵייְשֶׁן","MS Project":"אֶם אֶס פְּרוֹג׳קְט","Implementation":"אִימְפְּלֶמֶנְטֵייְשֶׁן","Acceptance Testing":"אַקְסֶפְּטַנְס טֶסְטִינְג","Rollout":"רוֹל אַאוּט","Event Planning":"אִיוֶונְט פְּלֶנִינְג","MAGIC":"מֶגִ׳יק","C/C++":"סִי סִי פְּלַס פְּלַס",".NET":"דוֹט נֶט","Oracle":"אוֹרַקֶל","Btrieve":"בִּי טְרִיב","Enterprise Systems":"אֶנְטֶרְפְּרַייז סִיסְטֶמְס","Software Development Life Cycle (SDLC)":"סוֹפְטְוֵוֵר דֶוֶלוֹפְּמֶנְט לַייף סַייקֵל אֶס דִּי אֶל סִי","Quality Assurance (QA)":"קְוָואלִיטִי אַשּׁוּרֶנְס קִיו אַיי","ERP/SAP Integrations":"אִי אַר פִּי סַאפּ אִינְטֶגְרֵייְשֶׁנְס","Debugging":"דִּיבַּאגִינְג","Optimization":"אוֹפְּטִימִיזֵייְשֶׁן","Data Migration":"דֵייטָה מַייגְרֵייְשֶׁן","System Conversion":"סִיסְטֶם קוֹנְוֶורְז׳ֶן","Version Upgrades":"וֶרְס׳ֶן אַפְּגְרֵידְס","Live-System Re-engineering":"לַייב סִיסְטֶם רִי אֶנְג׳ִינִירִינְג","Privacy Laws":"פְּרַייבֵסִי לוֹז","Microsoft Excel":"מַייקְרוֹסוֹפְט אֶקְסֶל","Microsoft PowerPoint":"מַייקְרוֹסוֹפְט פַּאוֶור פּוֹינְט","Cell Culture":"סֶל קַלְצ׳ֶר","Aviation":"אֵיְוִיאֵיישֶׁן","Enterprise Customers":"אֶנְטֶרְפְּרַייז קַאסְטוֹמֶרְס","User Needs":"יוּזֶר נִידְס","Customer Engagement":"קַאסְטוֹמֶר אֶנְגֵייג׳מֶנְט","Customer Trust & Partnership":"קַאסְטוֹמֶר טְרַאסְט אֶנְד פַּרְטְנֶרְשִׁיפּ","Guidance":"גַּיְדַנְס","Support":"סַפּוֹרְט","Remote Access":"רִימוֹט אַקְסֶס","Remote User Support":"רִימוֹט יוּזֶר סַפּוֹרְט","Remote Troubleshooting":"רִימוֹט טְרַאבֵּל שׁוּטִינְג","Escalations":"אֶסְקָלֵייְשֶׁנְס","Critical Incidents":"קְרִיטִיקַל אִינְסִידֶנְטְס","Customer Retention":"קַאסְטוֹמֶר רִיטֶנְשֶׁן","Business Intelligence (BI)":"בִּיזְנֶס אִינְטֶלִיג׳נְס בִּי אַיי","Metrics":"מֶטְרִיקְס","Dashboards":"דֶשְׁבּוֹרְדְס","Performance Tracking":"פֶּרְפוֹרְמַנְס טְרֵאקִינְג","Feedback Analysis":"פִּידְבֶּק אֲנַלִיסִיס","Data-Driven Decisions":"דֵייטָה דְרִיבֶּן דִּיסִיז׳נְס","Regulation":"רֶגְיוּלֵיישֶׁן","Leadership Without Authority":"לִידֶרְשִׁיפּ וִוִיתָאוּט אוֹתוֹרִיטִי","Matrix Management":"מֵייטְרִיקְס מֶנֶג׳מֶנְט","Cross-Functional Collaboration":"קְרוֹס פַּנְקְשְׁנַל קוֹלָבּוֹרֵייְשֶׁן","Teamwork":"טִים וֶורְק","Oral Communication":"אוֹרַל קוֹמְיוּנִיקֵייְשֶׁן","Emotional Intelligence (EI)":"אִימוֹשְׁנַל אִינְטֶלִיג׳נְס אִי אַיי","Human Resource Development":"הְיוּמַן רִיסוֹרְס דֶוֶלוֹפְּמֶנְט","Remote End-to-End Delivery":"רִימוֹט אֶנְד טוּ אֶנְד דִּלִיוֶרִי","Vendor Sourcing & Negotiation":"וֶנְדוֹר סוֹרְסִינְג אֶנְד נֶגוֹשִׁיאֵייְשֶׁן","Vendor & Service Portfolio Management":"וֶנְדוֹר אֶנְד סֶרְוִויס פּוֹרְטְפוֹלְיוֹ מֶנֶג׳מֶנְט","Supply Management":"סַפְּלַיי מֶנֶג׳מֶנְט","Open Mind":"אוֹפֶּן מַיינְד","Rapid Learning":"רֵאפִּיד לֶרְנִינְג","System-Wide Thinking":"סִיסְטֶם וַויְד ת׳ינְקִינְג","Critical Problem Solving":"קְרִיטִיקַל פְּרוֹבְלֶם סוֹלְבִינְג","Root Cause":"רוּט קוֹז","Creativity":"קְרֵייאֵייטִיבִיטִי","Alternative Solutions":"אוֹלְטֶרְנָטִיב סוֹלוּשְׁנְס","Digital Marketing":"דִּיגִיטַל מַארְקֶטִינְג","Social Media":"סוֹשְׁיַאל מֶדְיָה","Content Adaptation":"קוֹנְטֶנְט אַדַפְּטֵייְשֶׁן","Facebook":"פֵייסְבּוּק","Instagram":"אִינְסְטָגְרַם","TikTok":"טִיקטוֹק","WhatsApp":"וָואטְסאַפּ","Audience Engagement":"אוֹדִיאַנְס אֶנְגֵייג׳מֶנְט","Customer Communication":"קַאסְטוֹמֶר קוֹמְיוּנִיקֵייְשֶׁן","Knowledge Sources":"נוֹלֶג׳ סוֹרְסֶז","AI Integration":"אֵיי אַיי אִינְטֶגְרֵייְשֶׁן","Connectors":"קוֹנֶקְטוֹרְס","Make":"מֵייק","AI-Assisted Development":"אֵיי אַיי אֲסִיסְטֶד דֶוֶלוֹפְּמֶנְט","AI Bots":"אֵיי אַיי בּוֹטְס","Natural Language Queries":"נַצ׳וּרַל לַנְגְוִויג׳ קְוִויְרִיז","Voice Interaction":"ווֹיְס אִינְטֶרַאקְשֶׁן","Contextual Navigation":"קוֹנְטֶקְסְטוּאַל נֶאוִויגֵייְשֶׁן","AI Writing":"אֵיי אַיי רֵייטִינְג","AI Story Generation":"אֵיי אַיי סְטוֹרִי גֶ׳נֶרֵייְשֶׁן","AI Presentations":"אֵיי אַיי פְּרֶזֶנְטֵייְשֶׁנְס","AI Voice Generation":"אֵיי אַיי ווֹיְס גֶ׳נֶרֵייְשֶׁן","HTML":"אֵייץ׳ טִי אֶם אֶל","Data & Analytics":"דֵייטָה אֶנְד אֲנָלִיטִיקְס","Product Management":"פְּרוֹדַקְט מֶנֶג׳מֶנְט","Project Management":"פְּרוֹג׳קְט מֶנֶג׳מֶנְט","System Analysis":"סִיסְטֶם אֲנַלִיסִיס","Customer Success":"קַאסְטוֹמֶר סַקְסֶס","Technical Product":"טֶקְנִיקַל פְּרוֹדַקְט","System Analyst":"סִיסְטֶם אֲנַלִיסְט","End-to-End":"אֶנְד טוּ אֶנְד","Start to Finish":"סְטַארְט טוּ פִיניש","Start to End":"סְטַארְט טוּ אֶנְד","Feature-by-Feature":"פִּיצֶ׳ר בַּיי פִּיצֶ׳ר","Business Value":"בִּיזְנֶס וַואלְיוּ","Business Needs":"בִּיזְנֶס נִידְס","Pain Points":"פֵּיין פּוֹיְנְטְס","Task Matrix":"טַאסְק מֵייטְרִיקְס","End-to-End System View":"אֶנְד טוּ אֶנְד סִיסְטֶם וִויו","Process Analysis":"פְּרוֹסֶס אֲנַלִיסִיס","UI Characterization":"יוּ אַיי קֶרֶקְטֶרִיזֵייְשֶׁן","Functional & Technical Analysis":"פַּנְקְשְׁנַל אֶנְד טֶקְנִיקַל אֲנַלִיסִיס","Business & Functional Requirements":"בִּיזְנֶס אֶנְד פַּנְקְשְׁנַל רִיקְוַויַירְמֶנְטְס","Cross-Functional Leadership":"קְרוֹס פַּנְקְשְׁנַל לִידֶרְשִׁיפּ","Cross-Functional Work":"קְרוֹס פַּנְקְשְׁנַל וֶורְק","Customer Facing":"קַאסְטוֹמֶר פֵייסִינְג","Product Translation":"פְּרוֹדַקְט טְרַנְסְלֵייְשֶׁן","Product & Feature Adoption":"פְּרוֹדַקְט אֶנְד פִּיצֶ׳ר אֲדוֹפְּשֶׁן","Go To Market":"גוֹ טוּ מַארְקֶט","Help Desk":"הֶלְפּ דֶסְק","High-Tech Environments":"הַיי טֶק אִינְוַויְרוֹנְמֶנְטְס","Information Systems Analyst Certification Course":"אִינְפוֹרְמֵייְשֶׁן סִיסְטֶמְס אֲנָלִיסְט סֶרְטִיפִיקֵייְשֶׁן קוּרְס","MAGIC Fundamentals":"מֶגִ׳יק פַּנְדַמֶנְטָלְס","Magic Software Industries":"מֶגִ׳יק סוֹפְטְוֵוֵר אִינְדַסְטְרִיז","IAF College of Technology":"אַיי אַיי אֶף קוֹלֶג׳ אוֹף טֶקְנוֹלוֹג׳י","AI Mastermind":"אֵיי אַיי מַאסְטֶרְמַיְנְד","Back Office":"בַּאק אוֹפִיס","Payroll Validation":"פֵּיירוֹל וַלִידֵייְשֶׁן","HTML Reporting":"אֵייץ׳ טִי אֶם אֶל רִיפּוֹרְטִינְג","Visual Vehicle Lot":"וִיזוּאַל וִויהִיקְל לוֹט","Live System Re-Engineering":"לַייב סִיסְטֶם רִי אֶנְג׳ִינִירִינְג","Additional Services Portfolio":"אֲדִישְׁנַל סֶרְוִויסִיז פּוֹרְטְפוֹלְיוֹ","Large-Company Experience":"לַארְג׳ קוֹמְפַּנִי אֶקְסְפִּירִיֶינְס","SMARTi":"סְמַארְטִי","Shlomo SIXT":"שְׁלֹמֹה סִיקְסְט","SIXT":"סִיקְסְט","Verifone":"וֶריפוֹן","Beta Soft":"בֵּטָא סוֹפְט","Sysnet":"סִיסְנֶט","Secuitech":"סְקְיוּטֶק","Seculife":"סֶקְיוּלַייף","John Bryce":"ג׳וֹן בְּרַייס","uniPaaS":"יוּנִיפָאס","UNIPASS":"יוּנִיפָאס","SAP":"סַאפּ","EI":"אִי אַיי","SMS":"אֶס אֶם אֶס","Billing":"בִּילִינְג","Legacy":"לֶגָאסִי","Databases":"דֵייטָה בֵּייסִז","Development":"דֶוֶלוֹפְּמֶנְט","Maintenance":"מֵיינְטֶננְס","Features":"פִּיצֶ׳רְס","Integrations":"אִינְטֶגְרֵייְשֶׁנְס","Bottlenecks":"בּוֹטְלְנֶקְס","Improvement":"אִימְפְּרוּבְמֶנְט","Enterprise":"אֶנְטֶרְפְּרַייז","Customer":"קַאסְטוֹמֶר","Business":"בִּיזְנֶס","Technology":"טֶקְנוֹלוֹג׳י","Technical":"טֶקְנִיקַל","Functional":"פַּנְקְשְׁנַל","Growth":"גְרוֹת׳","Modules":"מוֹדְיוּלְס","Tasks":"טַאסְקְס"});
 // SAP's own pronunciation guide specifies individual letter names.
 // https://news.sap.com/what-is-sap/
 Object.assign(glossary,{"SAP":"אֶס אֵיי פִּי","ERP/SAP Integrations":"אִי אָר פִּי אֶס אֵיי פִּי אִינְטֶגְרֵיישֶׁנְס","KPIs":"קֵיי פִּי אַייז","CSS":"סִי אֶס אֶס","GTM":"גִ׳י טִי אֶם"});
 // Keep spoken letter names together instead of splitting them into sentences.
 for(const name of ['KPIs','HR','IT','SQL','MS-SQL','CRM','ERP','API','BI','BDO','PRD','SDLC','UAT','FRS','LLM','ISC2','HTML','GTM','EI','SMS'])if(glossary[name])glossary[name]=glossary[name].replace(/\.\s*/g,' ');
 // Company and product pronunciations confirmed by the site owner.
 Object.assign(glossary,{"Secuitech":"סְקְיוּטֶק","SMARTi":"סְמַארְטִי","uniPaaS":"יוּנִיפַאס","UNIPASS":"יוּנִיפַאס","Btrieve":"בִּיטְרִיב","סקיוטק":"סְקְיוּטֶק","סמארטי":"סְמַארְטִי","יוניפאס":"יוּנִיפַאס","ביטריב":"בִּיטְרִיב"});
 // Terms found in the complete 32-page narration audit.
 Object.assign(glossary,{"On-line":"אוֹן לַיין","Mainframe":"מֵיין פְרֵיים","Work":"ווֹרְק","Base44":"בֵּייס פוֹרְטִי פוֹר","Kolbo":"כָּל בּוֹ","GitHub":"גִיט הַאבּ","Supabase":"סוּפָּה בֵּייס","Lovable":"לַאבַבֶּל","ChatGPT":"צֶ׳אט גִ׳י פִּי טִי","Pixability":"פִּיקְסַבִּילִיטִי","NotebookLM":"נוֹטְבּוּק אֶל אֶם","ElevenLabs":"אִילֶבֶן לַאבְּס","PowerPoint":"פַּאוֶור פּוֹינְט","CO-WORK":"קוֹ ווֹרְק","CO WORK":"קוֹ ווֹרְק","CO":"קוֹ","Pixabay":"פִּיקְסַבֵּיי","Vercel":"וֶרְסֶל","No-Code":"נוֹ קוֹד","No Code":"נוֹ קוֹד","Low-Code":"לוֹ קוֹד","Low Code":"לוֹ קוֹד","Fine Tuning":"פַיין טְיוּנִינְג","Go to Market":"גוֹ טוּ מַארְקֶט","Web":"וֶובּ","AIDA":"אֵיי אַיי דִי אֵיי","Canva":"קַנְבָה","Analysis":"אֲנַלִיסִיס","Alternatives":"אוֹלְטֶרְנָטִיבְס","Constraints":"קוֹנְסְטְרֵיינְטְס","Process":"פְּרוֹסֶס","Background":"בַּקְגְרַאוּנְד","Systems":"סִיסְטֶמְס","MY":"מַיי","Versions":"וֶרְזֶ׳נְס","Problems":"פְּרוֹבְּלֶמְס","Solutions":"סוֹלוּשֶׁנְס","Engagement":"אֶנְגֵייג׳מֶנְט","Needs":"נִידְס"});
 Object.assign(glossary,{"Hybrid-Casual":"הַייבְּרִיד קַז׳וּאַל","Gardenscapes":"גַארְדֶן סְקֵייפְּס","Township":"טַאוּנְשִׁיפּ","Fishdom":"פִישְׁדוֹם","FarmVille":"פַארְמְוִיל"});
 const escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const names=Object.keys(glossary).sort((a,b)=>b.length-a.length);
 const pattern=new RegExp('(^|[^A-Za-z0-9])('+names.map(escape).join('|')+')(?=$|[^A-Za-z0-9])','gi');
 const lookup=Object.fromEntries(Object.entries(glossary).map(([k,v])=>[k.toLowerCase(),v]));
 return String(value||'').replace(pattern,(_,prefix,name)=>prefix+lookup[name.toLowerCase()]).replace(/(^|[^\\u0590-\\u05ff])מ[״\"']?ק[״\"']?ט(?=$|[^\\u0590-\\u05ff])/g,'$1מַקָּט');
};
// Short opening audio and a bounded cache reduce narration startup time.
window.__portfolioNarrationState=state=>window.dispatchEvent(new CustomEvent('portfolioNarrationState',{detail:state}));
window.__portfolioTtsCache=new Map();
window.__portfolioFetchNarration=async(text,language)=>{
 if(language==='he')text=window.__portfolioHebrewSpeechDiction(text);
 let unavailableUntil=0;try{unavailableUntil=Number(sessionStorage.getItem('portfolioTtsUnavailableUntil')||0);}catch{}
 if(Date.now()<unavailableUntil)throw Object.assign(new Error('Voice permission missing'),{code:'tts_permission_missing'});
 const key=language+':'+text,cache=window.__portfolioTtsCache;if(cache.has(key))return cache.get(key);
 const request=fetch('/api/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,language}),signal:AbortSignal.timeout(text.length<=260?15000:30000)}).then(async response=>{if(!response.ok){let data;try{data=await response.json();}catch{}if(data?.code==='tts_permission_missing')try{sessionStorage.setItem('portfolioTtsUnavailableUntil',String(Date.now()+60000));}catch{}throw Object.assign(new Error('TTS unavailable'),{code:data?.code});}return response.blob();}).catch(error=>{cache.delete(key);throw error;});
 cache.set(key,request);while(cache.size>20)cache.delete(cache.keys().next().value);return request;
};
window.__portfolioShortOpening=(groups,key)=>{
 if(!groups.length)return groups;const opening=[],remaining=[...groups[0]];let available=240;
 while(remaining.length&&available>0){const item=remaining.shift();if(available<60&&opening.length){remaining.unshift(item);break;}const text=item[key];if(text.length<=available){opening.push(item);available-=text.length+2;continue;}let cut=text.lastIndexOf(' ',available);if(cut<40)cut=available;opening.push({...item,[key]:text.slice(0,cut),original:item.original||item});remaining.unshift({...item,[key]:text.slice(cut).trimStart(),original:item.original||item});break;}
 if(remaining.length)groups.splice(0,1,opening,remaining);return groups;
};
// Track only the site's spoken text so recognition can ignore playback echoes.
window.__portfolioSetNarrationOutput=text=>{const previous=window.__portfolioNarrationOutput,now=Date.now();const history=(window.__portfolioNarrationHistory||[]).filter(item=>now-item.at<10000);if(text&&history.at(-1)?.text!==text)history.push({text,at:now});window.__portfolioNarrationHistory=history.slice(-8);window.__portfolioNarrationOutput={text:text||previous?.text||'',playing:Boolean(text),endedAt:text?0:now};};
// Keep narration anchored to the reader's selected text or current view.
window.__portfolioReadPosition=(()=>{
  let clicked=null;
  document.addEventListener('pointerup',event=>{
    if(!event.target.closest('main')||event.target.closest('button,a,input,select,textarea,summary'))return;
    const caret=document.caretPositionFromPoint?.(event.clientX,event.clientY);
    const range=!caret&&document.caretRangeFromPoint?.(event.clientX,event.clientY);
    const node=caret?.offsetNode||range?.startContainer;
    const offset=caret?.offset??range?.startOffset;
    if(node&&document.querySelector('main')?.contains(node))clicked={node,offset,scrollY:window.scrollY};
  });
  const mapSources=(root,clone)=>{
    const originals=[root,...root.querySelectorAll('*')];
    const copies=[clone,...clone.querySelectorAll('*')];
    return new Map(copies.map((element,index)=>[element,originals[index]]));
  };
  const start=(items,key,normalize)=>{
    const selection=window.getSelection();
    const selected=selection?.rangeCount?selection.getRangeAt(0):null;
    let point=selected&&!selection.isCollapsed&&document.querySelector('main')?.contains(selected.startContainer)?{node:selected.startContainer,offset:selected.startOffset}:null;
    if(!point&&clicked&&Math.abs(clicked.scrollY-window.scrollY)<2)point=clicked;
    if(point){
      const element=point.node.nodeType===1?point.node:point.node.parentElement;
      const index=items.findIndex(item=>item.source&&(item.source===element||item.source.contains(element)));
      if(index>=0){
        const source=items[index].source;
        const range=document.createRange();range.selectNodeContents(source);
        range.setEnd(point.node,point.offset);
        const prefix=normalize(range.toString());
        const full=normalize(source.innerText||source.textContent||'');
        let searchFrom=0,chosen=index,cut=0;
        for(let i=index;i<items.length&&items[i].source===source;i++){
          const at=full.indexOf(items[i][key],searchFrom);
          if(at<0)continue;
          chosen=i;cut=Math.max(0,prefix.length-at);
          searchFrom=at+items[i][key].length;
          if(prefix.length<searchFrom)break;
        }
        const result=items.slice(chosen);
        if(cut>0&&cut<result[0][key].length)result[0]={...result[0],[key]:result[0][key].slice(cut).trimStart(),original:result[0]};
        return {items:result,index:chosen};
      }
    }
    const top=[...document.querySelectorAll('.top,#pageReadTopicControls')].reduce((bottom,element)=>getComputedStyle(element).position==='fixed'?Math.max(bottom,element.getBoundingClientRect().bottom):bottom,0);
    const index=items.findIndex(item=>{
      if(!item.source||!item[key]||!item.source.checkVisibility())return false;
      const rect=item.source.getBoundingClientRect();
      return rect.bottom>top&&rect.top<innerHeight;
    });
    return {items:items.slice(Math.max(0,index)),index:Math.max(0,index)};
  };
  return {mapSources,start,reset(){clicked=null;window.getSelection()?.removeAllRanges();}};
})();


(function(){
  const current=()=>location.pathname.split('/').pop()||'index.html';
  const unifiedHeNav=[['personal.html','פרטים אישיים'],['employment.html','העדפות תעסוקה'],['index.html','בית'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html',"מתכנת מג'יק"],['customer.html','Customer Success'],['experience.html','ניסיון'],['projects.html','עבודות ופרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה'],['military.html','שירות צבאי'],['skills.html','יכולות'],['advantages.html','היתרונות שלי'],['contact.html','צור איתי קשר'],['index-en.html','EN']];
  function normalizeHebrewTopbar(){
    if(document.documentElement.lang!=='he')return;
    if(current()==='advantages.html')document.body.classList.add('advantages-page');
    let header=document.querySelector('header.top');if(!header)return;const wasMenuOpen=!!header.querySelector('nav.open');
    header.innerHTML='<div class="navwrap"><div class="brandBlock"><a class="brand" href="index.html"><b>רונן פלד</b><small>Product • Systems • Projects • MAGIC • Customer Success</small></a><span class="brandPhone">054-6546288</span></div><button class="menu" aria-label="תפריט">☰</button><nav></nav></div>';
    const nav=header.querySelector('nav');if(wasMenuOpen)nav.classList.add('open');
    if(innerWidth>950)nav.style.setProperty('grid-template-columns','repeat(140,minmax(0,1fr))','important');
    unifiedHeNav.forEach(([href,label])=>{const a=document.createElement('a');a.href=label==='EN'?window.__portfolioLanguageTarget():href;if(label==='EN')a.dataset.languageSwitch='en';a.textContent=label;if(current()===href||(current()==='service.html'&&href==='military.html'))a.classList.add('active');nav.appendChild(a)});
    const menu=header.querySelector('.menu');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
    if(!document.getElementById('exactSkillsTopbarStyle')){const s=document.createElement('style');s.id='exactSkillsTopbarStyle';s.textContent=`
      .top .brandBlock .brand b{font-size:24px!important;line-height:1.15!important;font-weight:900!important}
      .top .brandBlock .brand small::after{content:"מנהל מוצר • מנהל פרויקט • מנתח מערכות\\Aמתכנת מג'יק • Customer Success"!important;white-space:pre-line!important;font-size:15px!important;line-height:1.3!important;font-weight:700!important;color:#4f6073!important}
      .top .brandBlock .brandPhone{font-size:13px!important;font-weight:800!important}
      .top .brandBlock{min-width:260px!important}
      html[lang="he"] .top nav a,html[lang="he"] .top nav a.active{background:#74e8dd!important;color:#1f5fbf!important;border:1px solid #4c7fc8!important;box-shadow:0 2px 7px rgba(0,0,0,.18)!important;font-weight:900!important}
      html[lang="he"] .top nav a:hover{background:#8cece3!important;color:#174f9f!important}
      html[lang="he"] .top .brand b,html[lang="he"] .top .brandPhone{color:#fff!important}
      html[lang="he"] .top nav a[href="magic.html"]{font-size:13px!important}
      html[lang="he"] .top nav a[href="magic.html"]::after{content:none!important}
      @media(min-width:951px){
        html[lang="he"] .top{background:#0d2946!important;border-bottom-color:#143c64!important}
        html[lang="he"] .top .navwrap{min-height:112px!important}
        html[lang="he"] .top nav{grid-template-columns:repeat(45,1fr)!important;grid-template-rows:35px 35px!important;row-gap:20px!important;column-gap:0!important;padding-left:48px!important}
        html[lang="he"] body .top nav>a{position:static!important;transform:none!important;width:max-content!important;max-width:none!important;min-width:0!important;min-height:34px!important;box-sizing:border-box!important;justify-self:center!important;padding:7px 11px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}
        html[lang="he"] .top nav>a:nth-child(1){grid-row:1!important;grid-column:1/span 5!important}
        html[lang="he"] .top nav>a:nth-child(2){grid-row:1!important;grid-column:6/span 5!important}
        html[lang="he"] .top nav>a:nth-child(8){grid-row:1!important;grid-column:11/span 5!important}
        html[lang="he"] .top nav>a:nth-child(9){grid-row:1!important;grid-column:16/span 5!important}
        html[lang="he"] .top nav>a:nth-child(10){grid-row:1!important;grid-column:21/span 5!important}
        html[lang="he"] .top nav>a:nth-child(11){grid-row:1!important;grid-column:26/span 5!important}
        html[lang="he"] .top nav>a:nth-child(12){grid-row:1!important;grid-column:31/span 5!important}
        html[lang="he"] .top nav>a:nth-child(13){grid-row:1!important;grid-column:36/span 5!important}
        html[lang="he"] .top nav>a:nth-child(14){grid-row:1!important;grid-column:41/span 5!important}
        html[lang="he"] .top nav>a:nth-child(3){grid-row:2!important;grid-column:1/span 9!important}
        html[lang="he"] .top nav>a:nth-child(4){grid-row:2!important;grid-column:10/span 9!important}
        html[lang="he"] .top nav>a:nth-child(5){grid-row:2!important;grid-column:19/span 9!important}
        html[lang="he"] .top nav>a:nth-child(6){grid-row:2!important;grid-column:28/span 9!important}
        html[lang="he"] .top nav>a:nth-child(7){grid-row:2!important;grid-column:37/span 9!important}
        html[lang="he"] body .top nav>a:nth-child(n+2):nth-child(-n+6){width:100%!important;min-width:0!important;box-sizing:border-box!important;justify-self:stretch!important;padding-left:12px!important;padding-right:12px!important}
        html[lang="he"] .top .navwrap{grid-template-columns:260px minmax(0,900px)!important;gap:24px!important}
        html[lang="he"] .top nav{grid-template-columns:repeat(54,minmax(0,1fr))!important;padding-left:0!important;padding-right:0!important}
        html[lang="he"] body .top nav>a{width:calc(100% - 8px)!important;padding-left:6px!important;padding-right:6px!important;font-size:12.5px!important;justify-self:center!important}
        html[lang="he"] .top nav>a:nth-child(1){grid-row:1!important;grid-column:1/span 6!important;justify-self:start!important}
        html[lang="he"] .top nav>a:nth-child(2){grid-row:1!important;grid-column:7/span 6!important}
        html[lang="he"] .top nav>a:nth-child(8){grid-row:1!important;grid-column:13/span 6!important}
        html[lang="he"] .top nav>a:nth-child(9){grid-row:1!important;grid-column:19/span 6!important}
        html[lang="he"] .top nav>a:nth-child(10){grid-row:1!important;grid-column:25/span 6!important}
        html[lang="he"] .top nav>a:nth-child(11){grid-row:1!important;grid-column:31/span 6!important}
        html[lang="he"] .top nav>a:nth-child(12){grid-row:1!important;grid-column:37/span 6!important}
        html[lang="he"] .top nav>a:nth-child(13){grid-row:1!important;grid-column:43/span 6!important}
        html[lang="he"] .top nav>a:nth-child(14){grid-row:1!important;grid-column:49/span 6!important;justify-self:end!important}
        html[lang="he"] .top nav>a:nth-child(2){grid-row:2!important;grid-column:1/span 9!important;justify-self:start!important}
        html[lang="he"] .top nav>a:nth-child(4){grid-row:2!important;grid-column:10/span 9!important}
        html[lang="he"] .top nav>a:nth-child(5){grid-row:2!important;grid-column:19/span 9!important}
        html[lang="he"] .top nav>a:nth-child(6){grid-row:2!important;grid-column:28/span 9!important}
        html[lang="he"] .top nav>a:nth-child(7){grid-row:2!important;grid-column:37/span 9!important}
        html[lang="he"] .top nav>a:nth-child(15){grid-row:2!important;grid-column:46/span 9!important;justify-self:end!important}
        html[lang="he"] .top nav>a[href="index.html"]{grid-row:1!important;grid-column:1/span 6!important;justify-self:start!important}
        html[lang="he"] body:not(.home-redesign) .top nav>a[href="experience.html"]{grid-row:1!important;grid-column:7/span 6!important}
        html[lang="he"] body .top nav>a[href="projects.html"]{grid-row:1!important;grid-column:13/span 6!important;font-size:clamp(8px,.8vw,11px)!important;padding-left:3px!important;padding-right:3px!important;white-space:nowrap!important}
        html[lang="he"] .top nav>a[href="work-environments.html"]{grid-row:1!important;grid-column:19/span 6!important}
        html[lang="he"] .top nav>a[href="education.html"]{grid-row:1!important;grid-column:25/span 6!important}
        html[lang="he"] .top nav>a[href="military.html"]{grid-row:1!important;grid-column:31/span 6!important}
        html[lang="he"] .top nav>a[href="skills.html"]{grid-row:1!important;grid-column:37/span 6!important}
        html[lang="he"] .top nav>a[href="advantages.html"]{grid-row:1!important;grid-column:43/span 6!important}
        html[lang="he"] .top nav>a[href="contact.html"]{grid-row:1!important;grid-column:49/span 6!important;justify-self:end!important}
        html[lang="he"] body:not(.home-redesign) .top nav>a[href="product.html"]{grid-row:2!important;grid-column:1/span 9!important;justify-self:start!important}
        html[lang="he"] body:not(.home-redesign) .top nav>a[href="project.html"]{grid-row:2!important;grid-column:10/span 9!important}
        html[lang="he"] body:not(.home-redesign) .top nav>a[href="system.html"]{grid-row:2!important;grid-column:19/span 9!important}
        html[lang="he"] body:not(.home-redesign) .top nav>a[href="magic.html"]{grid-row:2!important;grid-column:28/span 9!important}
        html[lang="he"] body:not(.home-redesign) .top nav>a[href="customer.html"]{grid-row:2!important;grid-column:37/span 9!important}
        html[lang="he"] .top nav>a[data-language-switch]{grid-row:2!important;grid-column:46/span 9!important;justify-self:end!important}
      }
      @media(min-width:951px){html[lang="he"] body header.top nav>a[href="product.html"]:nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:1/span 9!important;width:calc(100% - 8.333333px)!important;max-width:none!important;justify-self:start!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;inset-inline-start:0px!important;transform:none!important;margin:0!important}html[lang="he"] body header.top nav>a[href="project.html"]:nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:10/span 9!important;width:calc(100% - 8.333333px)!important;max-width:none!important;justify-self:start!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;inset-inline-start:1.6666666666666667px!important;transform:none!important;margin:0!important}html[lang="he"] body header.top nav>a[href="system.html"]:nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:19/span 9!important;width:calc(100% - 8.333333px)!important;max-width:none!important;justify-self:start!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;inset-inline-start:3.3333333333333335px!important;transform:none!important;margin:0!important}html[lang="he"] body header.top nav>a[href="magic.html"]:nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:28/span 9!important;width:calc(100% - 8.333333px)!important;max-width:none!important;justify-self:start!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;inset-inline-start:5px!important;transform:none!important;margin:0!important}html[lang="he"] body header.top nav>a[href="customer.html"]:nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:37/span 9!important;width:calc(100% - 8.333333px)!important;max-width:none!important;justify-self:start!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;inset-inline-start:6.666666666666667px!important;transform:none!important;margin:0!important}html[lang="he"] body header.top nav>a[data-language-switch]:nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:46/span 9!important;width:calc(100% - 8.333333px)!important;max-width:none!important;justify-self:start!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;inset-inline-start:8.333333333333334px!important;transform:none!important;margin:0!important}}
      @media(max-width:950px){
        html[lang="he"] .top nav{background:#0d2946!important;border-color:#143c64!important}
        .menu{color:#fff!important}
        html[lang="he"] .top nav.open a[href="index.html"]{order:1}
        html[lang="he"] .top nav.open a[href="skills.html"]{order:12}
        html[lang="he"] .top nav.open a[href="product.html"]{order:2}
        html[lang="he"] .top nav.open a[href="project.html"]{order:3}
        html[lang="he"] .top nav.open a[href="system.html"]{order:4}
        html[lang="he"] .top nav.open a[href="magic.html"]{order:5}
        html[lang="he"] .top nav.open a[href="customer.html"]{order:6}
        html[lang="he"] .top nav.open a[href="experience.html"]{order:7}
        html[lang="he"] .top nav.open a[href="projects.html"]{order:8}
        html[lang="he"] .top nav.open a[href="work-environments.html"]{order:9}
        html[lang="he"] .top nav.open a[href="education.html"]{order:10}
        html[lang="he"] .top nav.open a[href="military.html"]{order:11}
        html[lang="he"] .top nav.open a[href="advantages.html"]{order:13}
        html[lang="he"] .top nav.open a[href="contact.html"]{order:14}
        html[lang="he"] .top nav.open a[data-language-switch]{order:15}
      }
      @media(min-width:951px){html[lang="he"] body.home-page .top .navwrap,html[lang="he"] body.advantages-page .top .navwrap{width:min(1240px,calc(100% - 28px))!important;margin-left:auto!important;margin-right:auto!important}}
    `;document.head.appendChild(s)}
  }
  function addPageReadButton(){
    const page=current();
    if(document.documentElement.lang!=='he')return;
    const roleNames={'product.html':'מנהל מוצר','project.html':'מנהל פרויקט','system.html':'מנתח מערכות','magic.html':"מתכנת מג'יק",'customer.html':'Customer Success'};
    const isRole=Object.prototype.hasOwnProperty.call(roleNames,page);
    const isHome=page==='index.html';
    const isAdvantages=page==='advantages.html';
    const isSkills=page==='skills.html';
    if(document.getElementById('pageReadButton'))return;
    const main=document.querySelector('main');if(!main)return;
    const hero=isHome?main.querySelector('.rdHero'):main.querySelector('.innerHero,.hero,.roleHero,section');
    if(!hero)return;
    const anchor=isHome?(hero.querySelector('.rdHeroCopy')||hero):(hero.querySelector('.page')||hero);
    if(getComputedStyle(anchor).position==='static')anchor.style.position='relative';
    let btn=document.createElement('button');
    btn.id='pageReadButton';btn.type='button';btn.textContent='🔊 הקרא את הדף';
    btn.setAttribute('aria-label',isRole?'הקרא את דף '+roleNames[page]:(isAdvantages?'הקרא את דף היתרונות שלי':(isSkills?'הקרא את דף היכולות':'הקרא את התוכן המרכזי של דף הבית')));
    btn.style.cssText='position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:9px 15px;border-radius:11px;background:#edf3ff;border:1px solid #195ed8;color:#195ed8;font:900 14px inherit;cursor:pointer;box-shadow:0 4px 12px rgba(13,34,54,.10)';
    anchor.appendChild(btn);
    const stop=()=>{if(window.speechSynthesis)window.speechSynthesis.cancel();btn.textContent='🔊 הקרא את הדף';btn.dataset.reading='0'};
    const cleanText=el=>{
      if(!el)return '';
      const clone=el.cloneNode(true);
      clone.querySelectorAll('button,script,style,nav,footer,.rdActions,.rdTags,.homeExperienceBox,.rdValueAdvantages,.rdCTA>a,.rdRoles b,.skillsHeaderButton,.allAdvantagesLink,.enAllAdvantages,.sbnContact,.esbContact,.orgLink,.projectLinksRow,.projectLinks,.enQuickRow,.courseHighlights>summary,.workDetails>summary,.moreJobs>summary,a.btn,a.button,a[role="button"],input,select,textarea,#sharedBottomNavigation,.sharedBottomNavigation,#englishSharedBottom,#centralMilitaryQuickNav,.milBottom,.professionBottomNav,.professionBottomNavRow,.enRoleNavigation,#roleProfessionNavigation,.sbnTitle,.sbnRow,.esbTitle,.esbRow,.milQuickTitle,.milGroups,.cqnGroups,#pageReadButton').forEach(x=>x.remove());
      return (clone.innerText||clone.textContent||'').replace(/\s+/g,' ').trim();
    };
    const findSmallestSection=needle=>{
      const candidates=[...main.querySelectorAll('section,article')].filter(el=>(el.innerText||'').includes(needle));
      return candidates.sort((a,b)=>(a.innerText||'').length-(b.innerText||'').length)[0]||null;
    };
    window.readPortfolioPage=clicked=>{
      btn=clicked;
      if(!('speechSynthesis' in window)){alert('הדפדפן אינו תומך בהקראת טקסט.');return}
      if(btn.dataset.reading==='1'){stop();return}
      window.speechSynthesis.cancel();
      let text='';
      if(!isHome){
        const clone=(document.querySelector('main')||main).cloneNode(true);
        if(isSkills)clone.querySelectorAll('.skillAbility').forEach(button=>button.replaceWith(document.createTextNode(button.textContent+' ')));
        clone.querySelectorAll('button,script,style,nav,footer,.rdActions,.rdTags,.homeExperienceBox,.rdValueAdvantages,.rdCTA>a,.rdRoles b,.skillsHeaderButton,.allAdvantagesLink,.enAllAdvantages,.sbnContact,.esbContact,.orgLink,.projectLinksRow,.projectLinks,.enQuickRow,.courseHighlights>summary,.workDetails>summary,.moreJobs>summary,a.btn,a.button,a[role="button"],input,select,textarea,#sharedBottomNavigation,.sharedBottomNavigation,#englishSharedBottom,#centralMilitaryQuickNav,.milBottom,.professionBottomNav,.professionBottomNavRow,.enRoleNavigation,#roleProfessionNavigation,.sbnTitle,.sbnRow,.esbTitle,.esbRow,.milQuickTitle,.milGroups,.cqnGroups,.nextStep,.sharedBottomNavigation,#sharedBottomNavigation,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton').forEach(el=>el.remove());
        text=(clone.innerText||clone.textContent||'').replace(/\s+/g,' ').trim();
      }else{
        const blocks=[
          main.querySelector('.rdHeroCopy'),
          main.querySelector('.rdStats'),
          main.querySelector('.lifecycleSection'),
          findSmallestSection('חמישה עולמות מקצועיים שמתחברים לתמונה אחת'),
          findSmallestSection('הערך שאני מביא לארגון')
        ].filter(Boolean);
        const seen=new Set();
        text=blocks.map(cleanText).filter(t=>t&&!seen.has(t)&&(seen.add(t),true)).join('. ');
      }
      if(!text)return;
      const u=new SpeechSynthesisUtterance((isRole?roleNames[page]+'. ':'')+text);
      u.lang='he-IL';u.rate=.95;u.onend=stop;u.onerror=stop;
      btn.dataset.reading='1';btn.textContent='⏹ עצור הקראה';window.speechSynthesis.speak(u);
    };
    btn.setAttribute('onclick','window.readPortfolioPage(this)');
    if(!document.getElementById('pageReadStyle')){
      const st=document.createElement('style');st.id='pageReadStyle';
      st.textContent='body.home-page #pageReadButton{position:fixed!important;top:124px!important;right:20px!important;bottom:auto!important;left:auto!important;z-index:99998!important;display:flex!important;width:fit-content!important;max-width:calc(100vw - 40px);margin:0!important}@media(min-width:1600px){body.home-page #pageReadButton{top:29px!important}}@media(min-width:601px) and (max-width:1599px){body.home-page .rdHeroCopy{padding-top:52px!important}}@media(max-width:600px){body.home-page #pageReadButton{top:auto!important;right:12px!important;bottom:12px!important;padding:8px 10px!important;font-size:12px!important}}';
      document.head.appendChild(st);
    }
  }
  const roles=['product.html','project.html','system.html','magic.html','customer.html'];
  const quick=[['experience.html','פירוט ניסיון'],['projects.html','רשימת פרויקטים'],['work-environments.html','סוגי מערכות'],['education.html','השכלה']];
  const professions=[['index.html','עמוד בית - ראייה 360°'],['product.html','מנהל מוצר'],['project.html','מנהל פרויקט'],['system.html','מנתח מערכות'],['magic.html','MAGIC'],['customer.html','Customer Success'],['employment.html','העדפות תעסוקה']];
  const buttonStyle='display:inline-flex;align-items:center;justify-content:center;min-height:44px;box-sizing:border-box;padding:10px 16px;border-radius:11px;background:#edf3ff;border:1px solid #c9d9f5;color:#0f4fbf;text-decoration:none;font-weight:950;font-size:13px;line-height:1.2;font-family:inherit;transition:.15s ease;white-space:nowrap';
  function makeRow(items,id){const row=document.createElement('div');row.id=id;row.style.cssText='display:flex;gap:8px;flex-wrap:nowrap;align-items:center;direction:rtl;width:100%';items.forEach(function(item){const a=document.createElement('a');a.href=item[0];a.textContent=item[1];a.style.cssText=buttonStyle+';flex:1 1 auto';row.appendChild(a)});return row}
  function findExperienceRow(){let row=document.getElementById('experienceQuickButtons');if(row)return row;const more=document.querySelector('details.moreJobs');if(more&&more.parentElement&&more.parentElement.querySelectorAll){const candidates=[...more.parentElement.children].filter(el=>el!==more&&el.querySelectorAll&&el.querySelectorAll('a').length>=2);row=candidates.find(el=>[...el.querySelectorAll('a')].some(a=>/projects\.html/.test(a.getAttribute('href')||''))&&[...el.querySelectorAll('a')].some(a=>/education\.html/.test(a.getAttribute('href')||'')));if(row){row.id='experienceQuickButtons';return row}}return null}
  function ensureExperienceSkills(){if(current()!=='experience.html')return;const more=document.querySelector('details.moreJobs');let row=findExperienceRow();if(!row&&more){row=makeRow([['projects.html','רשימת עבודות ופרויקטים'],['work-environments.html','סוגי פרויקטים'],['education.html','השכלה']],'experienceQuickButtons');more.parentNode.insertBefore(row,more);row.insertBefore(more,row.firstChild)}if(!row)return;let skills=[...row.querySelectorAll('a')].find(a=>/skills\.html(?:$|[?#])/.test(a.getAttribute('href')||'')||a.textContent.trim()==='יכולות');if(!skills){skills=document.createElement('a');skills.href='skills.html';skills.textContent='יכולות';row.appendChild(skills)}row.style.cssText='display:flex;gap:8px;flex-wrap:nowrap;align-items:center;direction:rtl;width:100%;margin:30px 0 24px;box-sizing:border-box;justify-content:space-between';row.querySelectorAll(':scope > a').forEach(a=>{a.style.cssText=buttonStyle+';flex:1 1 0;min-width:0;padding-left:20px;padding-right:20px'});if(more&&more.parentElement===row){more.style.cssText+=';margin-top:0;flex:1 1 0;min-width:0';const summary=more.querySelector(':scope > summary');if(summary)summary.style.cssText=buttonStyle+';cursor:pointer;width:100%;min-height:44px;padding-left:20px;padding-right:20px'}}
  function addRoleNavigation(){if(!roles.includes(current()))return;const main=document.querySelector('main');if(!main)return;const old=document.getElementById('roleExperienceQuickButtons');if(old)old.remove();const exp=main.querySelector('.highlight');if(exp&&!exp.querySelector('.expQuick')){const row=makeRow(quick,'roleExperienceQuickButtons');row.className='expQuick';row.style.margin='18px 0 4px';exp.appendChild(row)}if(!document.getElementById('roleProfessionNavigation')){const next=main.querySelector('.nextStep')||[...main.querySelectorAll('section')].find(s=>/NEXT STEP/i.test(s.textContent||''));const nav=document.createElement('section');nav.id='roleProfessionNavigation';nav.className='page';nav.style.cssText='padding:0 0 54px';const title=document.createElement('div');title.textContent='עבור למקצועות אחרים';title.style.cssText='font-size:14px;font-weight:900;color:#405469;margin:0 0 12px';nav.appendChild(title);const filtered=professions.filter(x=>x[0]!==current());const row=makeRow(filtered,'roleProfessionButtons');row.style.flexWrap='wrap';row.querySelectorAll('a').forEach(a=>a.style.flex='0 1 auto');nav.appendChild(row);if(next&&next.nextSibling)next.parentNode.insertBefore(nav,next.nextSibling);else main.appendChild(nav)}}
  function normalizeRoleExperienceButtons(){if(!roles.includes(current()))return;const exp=document.querySelector('.roleExperience,.highlight');if(!exp)return;exp.querySelectorAll('.roleQuickLinks').forEach(row=>row.remove());let row=exp.querySelector('.expQuick');if(!row){row=makeRow(quick,'roleExperienceQuickButtons');row.className='expQuick';exp.appendChild(row)}else{row.innerHTML='';const fresh=makeRow(quick,'roleExperienceQuickButtonsFresh');while(fresh.firstChild)row.appendChild(fresh.firstChild)}row.id='roleExperienceQuickButtons';row.className='expQuick';row.style.margin='18px 0 4px'}
  function standardizeRoleOverview(){
    const page=current();if(!roles.includes(page))return;
    if(!document.getElementById('roleOverviewStandardStyles')){
      const style=document.createElement('style');style.id='roleOverviewStandardStyles';style.textContent=`
        .roleOverview{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:28px!important;align-items:stretch!important;padding-top:26px!important}
        .roleOverview>.roleBringCard,.roleOverview>.roleExperience{box-sizing:border-box;min-width:0;height:100%!important;margin:0!important}
        .roleBringCard{display:flex;flex-direction:column;justify-content:flex-start}
        .roleBringCard>.sectionTitle{margin-bottom:14px}
        .roleBringCard>.bigtext{margin-top:0}
        .roleBringCard .roleTrainingInline{margin-top:34px!important}
        .roleExperience{display:flex!important;flex-direction:column!important;height:470px!important;min-height:470px!important;padding:28px 30px!important;border-radius:20px!important;box-shadow:0 14px 34px rgba(13,34,54,.14)!important;overflow:visible!important}
        .roleExperience>span:first-child{display:block;margin-bottom:8px}
        .roleExperience .expQuick{margin-top:auto!important;padding-top:16px!important;display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:6px!important;width:100%!important;flex-wrap:nowrap!important}
        .roleExperience .expQuick a{width:100%!important;min-width:0!important;white-space:nowrap!important;text-align:center!important;font-size:13px!important;font-weight:1000!important;color:#0b3f9c!important;background:#ffffff!important;border:2px solid #b8cff3!important;padding:9px 5px!important;line-height:1.15!important;box-shadow:0 4px 10px rgba(13,34,54,.12)!important}
        .roleExperience .expQuick a:hover{background:#195ed8!important;color:#fff!important;border-color:#195ed8!important;transform:translateY(-1px)}
        .roleEducation{padding-top:0!important}
        .roleEducation .educationBlock{margin-top:0!important;max-width:calc(50% - 14px)}
        .magicOverview.magicTrainingOnly{grid-template-columns:1fr!important;padding-top:0!important}
        .magicOverview.magicTrainingOnly .trainingPanel{height:auto!important}
        .experienceMore{display:none!important}
        @media(max-width:900px){.roleOverview{grid-template-columns:1fr!important}.roleEducation .educationBlock{max-width:none}.roleExperience{height:auto!important;min-height:470px!important}.roleBringCard .roleTrainingInline{margin-top:28px!important}}
        @media(max-width:520px){.roleExperience{padding:24px 18px!important}.roleExperience .expQuick{gap:4px!important}.roleExperience .expQuick a{font-size:11px!important;padding:8px 3px!important}}
      `;document.head.appendChild(style)
    }
    const main=document.querySelector('main');if(!main)return;
    let overview=main.querySelector('.roleOverview');
    if(page==='magic.html'){
      const intro=main.querySelector('.magicIntro');const magicOverview=main.querySelector('.magicOverview');const exp=magicOverview&&magicOverview.querySelector('.highlight');
      if(!overview&&intro&&magicOverview&&exp){
        overview=document.createElement('section');overview.className='page section two roleOverview';
        const bring=document.createElement('div');bring.className='roleBringCard';
        while(intro.firstChild)bring.appendChild(intro.firstChild);
        exp.classList.add('roleExperience');overview.appendChild(bring);overview.appendChild(exp);
        intro.parentNode.insertBefore(overview,intro);intro.remove();magicOverview.classList.add('magicTrainingOnly');
      }
    }else{
      overview=main.querySelector('.page.section.two');
      if(overview){
        overview.classList.add('roleOverview');
        const bring=overview.children[0];const exp=overview.querySelector('.highlight');
        if(bring)bring.classList.add('roleBringCard');if(exp)exp.classList.add('roleExperience');
        const education=bring&&bring.querySelector('.educationBlock');
        if(education){
          if(page==='product.html'||page==='system.html'){
            education.classList.add('roleTrainingInline');
          }else if(!education.closest('.roleEducation')){
            const wrap=document.createElement('section');wrap.className='page section roleEducation';wrap.appendChild(education);overview.parentNode.insertBefore(wrap,overview.nextSibling);
          }
        }
      }
    }
    const exp=main.querySelector('.roleExperience,.highlight');
    if(exp){const more=exp.querySelector('.experienceMore');if(more)more.remove();}
  }
  function bottomMarkup(page){const educationGroups=page==='education.html';return '<style>#sharedBottomNavigation{max-width:1240px;margin-left:auto;margin-right:auto;padding:0 24px 54px}.sbnNext{background:linear-gradient(135deg,#0e2945,#195ed8);color:#fff;border-radius:20px;padding:28px 30px;box-shadow:0 14px 34px rgba(13,34,54,.14);border-right:5px solid #21c7b7;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.sbnNext span{display:block;color:#8ee8df;font-size:12px;letter-spacing:1.5px;font-weight:900;margin-bottom:5px}.sbnNext h2{margin:0 0 5px;font-size:clamp(1.5rem,3vw,2.15rem)}.sbnNext p{margin:0;color:#dce9f7}.sbnContact{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:11px;background:#fff;color:#195ed8!important;font-weight:900;text-decoration:none!important;white-space:nowrap}.sbnTitle{font-size:14px;font-weight:900;color:#405469;margin:22px 0 8px}.sbnRow{display:grid;grid-template-columns:minmax(310px,.72fr) minmax(0,1.28fr);gap:14px;direction:rtl;align-items:stretch}.sbnGroup{min-width:0;background:#fff;border:1px solid #dce6f2;border-radius:16px;padding:13px 14px;box-shadow:0 8px 20px rgba(13,34,54,.05)}.sbnGroupTitle{font-size:15px;font-weight:950;color:#10284a;margin:0 0 9px;padding:7px 10px;border-radius:9px;background:#eef5ff}.sbnLinks{display:flex;gap:7px;flex-wrap:wrap}.sbnLinks a{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:8px 11px;border-radius:10px;background:#edf3ff;border:1px solid #c9d9f5;color:#195ed8!important;text-decoration:none!important;font-weight:900;font-size:12.5px;white-space:nowrap}.sbnLinks a:hover{background:#195ed8;color:#fff!important}.sbnProfessional .sbnLinks{flex-wrap:nowrap;gap:6px}.sbnProfessional .sbnLinks a{flex:1 1 0;min-width:0;padding-left:7px;padding-right:7px;font-size:12px}@media(max-width:900px){.sbnRow{grid-template-columns:1fr}.sbnProfessional .sbnLinks{flex-wrap:wrap}.sbnProfessional .sbnLinks a{flex:1 1 calc(33.333% - 8px)}}@media(max-width:720px){.sbnLinks a,.sbnProfessional .sbnLinks a{flex:1 1 calc(50% - 8px)}}</style><div class="sbnNext"><div><span>NEXT STEP</span><h2>בואו נדבר על התפקיד הבא</h2><p>אשמח לשיחה קצרה על התפקיד, האתגרים והערך שאני יכול להביא.</p></div><a class="sbnContact" href="contact.html">צור איתי קשר ←</a></div><div class="sbnTitle">מעבר מהיר</div>'+(educationGroups?'<div class="sbnRow"><div class="sbnGroup"><div class="sbnGroupTitle">ניסיון</div><div class="sbnLinks"><a href="experience.html">ניסיון</a><a href="projects.html">עבודות ופרויקטים</a><a href="work-environments.html">סוגי מערכות</a><a href="military.html">צבא</a><a href="skills.html">יכולות</a></div></div><div class="sbnGroup sbnProfessional"><div class="sbnGroupTitle">יכולות מקצועיות</div><div class="sbnLinks"><a href="index.html">עמוד בית - ראייה 360°</a><a href="product.html">מנהל מוצר</a><a href="project.html">מנהל פרויקט</a><a href="system.html">מנתח מערכות</a><a href="magic.html">MAGIC</a><a href="customer.html">Customer Success</a></div></div></div>':'<div class="sbnRow"><div class="sbnGroup"><div class="sbnGroupTitle">ניסיון</div><div class="sbnLinks"><a href="experience.html">ניסיון</a><a href="projects.html">עבודות ופרויקטים</a><a href="work-environments.html">סוגי מערכות</a><a href="education.html">השכלה</a></div></div><div class="sbnGroup sbnProfessional"><div class="sbnGroupTitle">יכולות מקצועיות</div><div class="sbnLinks"><a href="index.html">עמוד בית - ראייה 360°</a><a href="product.html">מנהל מוצר</a><a href="project.html">מנהל פרויקט</a><a href="system.html">מנתח מערכות</a><a href="magic.html">MAGIC</a><a href="customer.html">Customer Success</a></div></div></div>')}
  function addBottomNavigation(){const page=current();if(!['education.html','work-environments.html','advantages.html','military.html','skills.html','service.html','contact.html'].includes(page))return;const main=document.querySelector('main');if(!main)return;let section=document.getElementById('sharedBottomNavigation');if(!section){section=document.createElement('section');section.id='sharedBottomNavigation';main.appendChild(section)}section.innerHTML=bottomMarkup(page==='contact.html'?'education.html':page);if(page==='contact.html'){const next=section.querySelector('.sbnNext');if(next)next.remove()}const experienceLinks=section.querySelector('.sbnGroup .sbnLinks');if(experienceLinks&&!experienceLinks.querySelector('a[href="advantages.html"]')){const advantages=document.createElement('a');advantages.href='advantages.html';advantages.textContent='היתרונות שלי';const systems=experienceLinks.querySelector('a[href="work-environments.html"]');if(systems)systems.insertAdjacentElement('afterend',advantages);else experienceLinks.appendChild(advantages)}if(['work-environments.html','advantages.html','military.html','skills.html','service.html'].includes(page)){const links=section.querySelector('.sbnGroup .sbnLinks');if(links&&!links.querySelector('a[href="skills.html"]')){const skills=document.createElement('a');skills.href='skills.html';skills.textContent='יכולות';links.appendChild(skills)}}if(experienceLinks){
 if(page==='work-environments.html'){const systems=experienceLinks.querySelector('a[href="work-environments.html"]');if(systems){systems.href='military.html';systems.textContent='צבא';}}
 if(page==='skills.html'&&!experienceLinks.querySelector('a[href="military.html"]')){const army=document.createElement('a');army.href='military.html';army.textContent='צבא';const education=experienceLinks.querySelector('a[href="education.html"]');if(education)education.insertAdjacentElement('afterend',army);else experienceLinks.appendChild(army);}
 if(page==='contact.html'&&!experienceLinks.querySelector('a[href="education.html"]')){const education=document.createElement('a');education.href='education.html';education.textContent='השכלה';const army=experienceLinks.querySelector('a[href="military.html"]');if(army)army.insertAdjacentElement('beforebegin',education);else experienceLinks.appendChild(education);}
 if(page==='work-environments.html'){const education=experienceLinks.querySelector('a[href="education.html"]'),army=experienceLinks.querySelector('a[href="military.html"]');if(education&&army){const placeholder=document.createTextNode('');education.replaceWith(placeholder);army.replaceWith(education);placeholder.replaceWith(army);}}
 if(page==='work-environments.html'){const advantages=experienceLinks.querySelector('a[href="advantages.html"]');if(advantages)experienceLinks.appendChild(advantages);}
 if(page==='skills.html'){const systems=experienceLinks.querySelector('a[href="work-environments.html"]');let previous=systems;['education.html','military.html','skills.html','advantages.html'].forEach(href=>{const link=experienceLinks.querySelector('a[href="'+href+'"]');if(link&&previous){previous.insertAdjacentElement('afterend',link);previous=link;}});}
 if(page==='advantages.html'&&!experienceLinks.querySelector('a[href="military.html"]')){const army=document.createElement('a');army.href='military.html';army.textContent='צבא';const education=experienceLinks.querySelector('a[href="education.html"]');if(education)education.insertAdjacentElement('afterend',army);else experienceLinks.appendChild(army);}
 if(page==='advantages.html'){const self=experienceLinks.querySelector('a[href="advantages.html"]');if(self)self.remove();}
 if(['work-environments.html','skills.html','advantages.html'].includes(page)){experienceLinks.querySelectorAll('a').forEach(a=>{a.style.setProperty('order','0','important');a.style.setProperty('margin-right','0','important')});}
 }
 if(['work-environments.html','education.html','advantages.html','contact.html'].includes(page)){const rowStyle=document.createElement('style');rowStyle.textContent="#sharedBottomNavigation .sbnRow{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:14px!important;align-items:stretch!important}#sharedBottomNavigation .sbnGroup{min-width:0;box-sizing:border-box}#sharedBottomNavigation .sbnLinks{display:grid!important;grid-template-columns:repeat(6,minmax(86px,1fr))!important;grid-template-rows:auto!important;gap:5px!important;overflow-x:auto;align-items:stretch;min-width:0;width:100%;flex-wrap:nowrap!important}#sharedBottomNavigation .sbnLinks a{min-width:0!important;width:auto!important;white-space:normal!important;padding:8px 4px!important;font-size:11px!important;line-height:1.2!important;min-height:44px!important;box-sizing:border-box;text-align:center}";section.appendChild(rowStyle);if(['advantages.html','contact.html'].includes(page)){section.querySelectorAll('.sbnLinks').forEach(links=>links.style.setProperty('--nav-count',links.querySelectorAll('a').length));const advantageLayout=document.createElement('style');advantageLayout.textContent='#sharedBottomNavigation .sbnLinks{grid-template-columns:repeat(var(--nav-count,6),minmax(0,1fr))!important}@media(max-width:900px){#sharedBottomNavigation .sbnLinks{grid-template-columns:repeat(var(--nav-count,6),minmax(86px,1fr))!important}}';section.appendChild(advantageLayout);}}
 section.style.marginTop=['work-environments.html','advantages.html'].includes(page)?'42px':'';if(page==='military.html'){const direct=document.querySelector('.milBottom');if(direct&&direct!==section)direct.style.display='none'}}
  function addExperienceBottomNavigation(){if(current()!=='experience.html')return;const main=document.querySelector('main');if(!main)return;let section=document.getElementById('sharedBottomNavigation');if(!section){section=document.createElement('section');section.id='sharedBottomNavigation';main.appendChild(section)}section.innerHTML=bottomMarkup('experience.html');section.style.marginTop='42px';document.querySelectorAll('main>.nextStep,main>.professionBottomNav,.experienceMoreJobsRow,#experienceQuickButtons').forEach(el=>{if(el!==section)el.style.display='none'});const links=section.querySelector('.sbnGroup .sbnLinks');if(!links)return;const self=links.querySelector('a[href="experience.html"]');if(self)self.remove();const advantages=links.querySelector('a[href="advantages.html"]');if(advantages)advantages.remove();const projects=links.querySelector('a[href="projects.html"]');if(projects)projects.textContent='רשימת עבודות ופרויקטים';if(!links.querySelector('a[href="skills.html"]')){const skills=document.createElement('a');skills.href='skills.html';skills.textContent='יכולות';links.appendChild(skills)}const army=document.createElement('a');army.href='military.html';army.textContent='צבא';const capability=links.querySelector('a[href="skills.html"]');if(capability)links.insertBefore(army,capability);else links.appendChild(army);
const advantageLink=document.createElement('a');advantageLink.href='advantages.html';advantageLink.textContent='היתרונות שלי';links.appendChild(advantageLink);
links.querySelectorAll('a').forEach(a=>{a.style.setProperty('order','0','important');a.style.setProperty('margin-right','0','important')});
const layout=document.createElement('style');layout.textContent='#sharedBottomNavigation .sbnGroup:first-child .sbnLinks a{white-space:normal!important}@media(min-width:901px){#sharedBottomNavigation .sbnGroup:first-child .sbnLinks{gap:5px!important}#sharedBottomNavigation .sbnGroup:first-child .sbnLinks a{padding:7px 6px!important;font-size:11px!important}}';section.appendChild(layout);
}
  if(current()==='experience.html')ensureExperienceSkills=function(){};
  function repairAll(){normalizeHebrewTopbar();ensureExperienceSkills();addRoleNavigation();standardizeRoleOverview();normalizeRoleExperienceButtons();addBottomNavigation();addExperienceBottomNavigation();addPageReadButton()}
  const run=()=>{repairAll();setTimeout(repairAll,150);setTimeout(repairAll,700)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
  if(current()!=='index.html'){const core=document.createElement('script');core.src='assets/app-core.js?v=20260901-profession-skills-header-1';core.onload=run;core.onerror=run;document.head.appendChild(core)}
  if(current()==='experience.html'){const obs=new MutationObserver(()=>ensureExperienceSkills());obs.observe(document.documentElement,{subtree:true,childList:true});setTimeout(()=>obs.disconnect(),5000)}
})();

// Recruiter assistant: the localized Hebrew/English launcher links to the smart bot.
(function(){
  if(document.getElementById('ronen-bot-launcher'))return;
  var isEnglish=document.documentElement.lang.toLowerCase().startsWith('en');
  var style=document.createElement('style');
  style.textContent='#ronen-bot-launcher{position:fixed;left:20px;top:29px;bottom:auto;z-index:99998;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:999px;background:#0d2946;color:#fff;border:2px solid #74e8dd;cursor:pointer;font-family:inherit;font-weight:900;font-size:15px;box-shadow:0 10px 28px rgba(0,0,0,.28);direction:rtl;transition:transform .2s ease,box-shadow .2s ease}#ronen-bot-launcher:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(0,0,0,.34)}#ronen-bot-launcher:focus-visible{outline:3px solid #195ed8;outline-offset:3px}.ronenBotIcon{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#74e8dd;color:#0d2946;font-size:20px}@media(max-width:1599px) and (min-width:601px){#ronen-bot-launcher{top:124px}}@media(max-width:600px){#ronen-bot-launcher{left:12px;top:auto;bottom:12px;padding:10px 12px;font-size:14px}.ronenBotIcon{width:32px;height:32px}}';
  document.head.appendChild(style);

  var launcher=document.createElement('a');
  launcher.href='https://natural-hire-smart-link.base44.app/';
  launcher.id='ronen-bot-launcher';
  launcher.style.textDecoration='none';
  launcher.setAttribute('aria-label',isEnglish?'Open the smart recruiter bot':'פתיחת הבוט החכם למגייסים');
  launcher.innerHTML='<span>'+(isEnglish?'Ask the Smart Bot':'שאל והבוט החכם יענה')+'</span><span class="ronenBotIcon" aria-hidden="true">🤖</span>';
  document.body.appendChild(launcher);
  style.textContent+='#ronen-bot-panel{position:fixed;inset:0 auto 0 0;width:min(460px,100vw);height:100dvh;z-index:100000;background:white;box-shadow:8px 0 35px #0005;display:flex;flex-direction:column}#ronen-bot-panel[hidden]{display:none}#ronen-bot-panel header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:#0d2946;color:white;font:700 16px Arial;direction:rtl}#ronen-bot-panel button{background:transparent;color:white;border:0;font-size:28px;cursor:pointer}#ronen-bot-iframe{width:100%;flex:1;border:0;min-height:0}';
  var panel=document.createElement('aside');
  panel.id='ronen-bot-panel';
  panel.hidden=true;
  panel.setAttribute('aria-label',isEnglish?'Smart Bot':'בוט חכם');
  var bar=document.createElement('header');
  var title=document.createElement('span');
  title.textContent=isEnglish?'Smart Bot':'בוט חכם';
  var close=document.createElement('button');
  close.type='button';close.textContent='×';
  close.setAttribute('aria-label',isEnglish?'Close bot':'סגירת הבוט');
  bar.append(title,close);panel.appendChild(bar);
  var external=document.createElement('a');
  external.href=launcher.href;external.target='_blank';external.rel='noopener noreferrer';
  external.textContent=isEnglish?'Open bot in a separate window':'פתיחת הבוט בחלון נפרד';
  external.style.cssText='display:block;padding:10px 16px;text-align:center;background:#edf3ff;color:#195ed8;font:700 14px Arial';
  panel.appendChild(external);
  var frame=document.createElement('iframe');
  frame.id='ronen-bot-iframe';
  frame.title=isEnglish?'Smart recruiter bot':'הבוט החכם למגייסים';
  frame.setAttribute('allow','microphone; autoplay');
  panel.appendChild(frame);document.body.appendChild(panel);
  launcher.setAttribute('aria-controls',panel.id);
  launcher.setAttribute('aria-expanded','false');
  function toggleBot(open){panel.hidden=!open;launcher.setAttribute('aria-expanded',String(open));if(open){if(!frame.src)frame.src=launcher.href;close.focus()}else launcher.focus()}
  launcher.addEventListener('click',function(event){event.preventDefault();toggleBot(panel.hidden)});
  close.addEventListener('click',function(){toggleBot(false)});
  document.addEventListener('keydown',function(event){if(event.key==='Escape'&&!panel.hidden)toggleBot(false)});

})();

// Enhanced read-aloud pacing and pronunciation.
(function(){
  if(window.__ronenReadEnhanced)return;window.__ronenReadEnhanced=true;
  const acronymLetters={"A":"איי","B":"בי","C":"סי","D":"די","E":"אי","F":"אף","G":"ג׳י","H":"אייץ׳","I":"איי","J":"ג׳יי","K":"קיי","L":"אל","M":"אם","N":"אן","O":"או","P":"פי","Q":"קיו","R":"אר","S":"אס","T":"טי","U":"יו","V":"וי","W":"דבליו","X":"אקס","Y":"וואי","Z":"זי"};
  const mapBase=t=>window.__portfolioProfessionalPronunciation((t||'').replace(/\s+/g,' ').trim()).replace(/\b[A-Z]{3}\b/g,word=>[...word].map(letter=>acronymLetters[letter]).join('. '))
    .replace(/\s*[|•·]\s*/g,'. ')
    .replace(/\s*&\s*/g,' וגם ')
    .replace(/\bWHAT I BRING\b/gi,'מה אני מביא')
    .replace(/\bMY ADVANTAGE\b/gi,'היתרונות שלי')
    .replace(/\bEXPERIENCE\b/gi,'ניסיון מקצועי')
    .replace(/\bPROFESSIONAL (?:SKILLS|CAPABILITIES)\b/gi,'יכולות מקצועיות')
    .replace(/\bPERSONAL (?:SKILLS|CAPABILITIES)\b/gi,'יכולות אישיות')
    .replace(/\bNEXT STEP\b/gi,'השלב הבא')
    .replace(/\b360°?\b/gi,'שלוש מאות ושישים מעלות')
    .replace(/\bEnd[\s-]?to[\s-]?End\b/gi,'אנד טו אנד')
    .replace(/\bHands?[\s-]?On\b/gi,'הנדס און')
    .replace(/\bCustomer Success\b/gi,'קאסטומר סקסס')
    .replace(/\bProduct Manager\b/gi,'פרודקט מנג׳ר')
    .replace(/\bProject Manager\b/gi,'פרוג׳קט מנג׳ר')
    .replace(/\bProduct Management\b/gi,'פרודקט מנג׳מנט')
    .replace(/\bProject Management\b/gi,'פרוג׳קט מנג׳מנט')
    .replace(/\bSystem Analysis\b/gi,'סיסטם אנליסיס')
    .replace(/\bSystem Analyst\b/gi,'סיסטם אנליסט')
    .replace(/\bMAGIC Development\b/gi,'מג׳יק דבלופמנט')
    .replace(/\bMAGIC\b/gi,'מג׳יק')
    .replace(/\bPRD\b/gi,'פיארדי')
    .replace(/\bQA\b/gi,'קיו. איי')
    .replace(/\bUX\b/gi,'יו. אקס')
    .replace(/\bUI\b/gi,'יו. איי')
    .replace(/\bA\/B(?:\s+Testing)?\b/gi,'איי בי טסטינג')
    .replace(/\bMVP\b/gi,'אםויפי')
    .replace(/\bMLP\b/gi,'אםאלפי')
    .replace(/\bKPI(?:s)?\b/gi,'קייפיאיי')
    .replace(/\bAPI(?:s)?\b/gi,'אייפיאיי')
    .replace(/\bAI\b/gi,'איי. איי')
    .replace(/\bCRM\b/gi,'סיאראם')
    .replace(/\bERP\b/gi,'איארפי')
    .replace(/\bHTML\b/gi,'אייץ׳. טי. אם. אל')
    .replace(/\bSQL\b/gi,'אֶס. קְיוּ. אֶל')
    .replace(/\bPrototype Management\b/gi,'פרוטוטייפ מנג׳מנט')
    .replace(/\bPrototype\b/gi,'פרוטוטייפ')
    .replace(/\bStakeholders\b/gi,'סטייקהולדרס')
    .replace(/\bPrioritization\b/gi,'פריוריטיזיישן')
    .replace(/\bIntegrations?\b/gi,'אינטגרציות')
    .replace(/\bArchitecture\b/gi,'ארכיטקטורה')
    .replace(/\bEnterprise\b/gi,'אנטרפרייז')
    .replace(/\bRollout\b/gi,'רול אאוט')
    .replace(/\bDelivery\b/gi,'דליברי')
    .replace(/\bFeedback\b/gi,'פידבק')
    .replace(/\bData\b/gi,'דאטה')
    .replace(/\bSoftware\b/gi,'סופטוור')
    .replace(/\bBusiness\b/gi,'ביזנס')
    .replace(/\bTechnical\b/gi,'טכני')
    .replace(/\bFunctional\b/gi,'פונקציונלי')
    .replace(/\bSMARTi\b/gi,'סמארטי')
    .replace(/\bVerifone\b/gi,'וריפון')
    .replace(/\bSIXT\b/gi,'סיקסט')
    .replace(/\bOracle\b/gi,'אורקל')
    .replace(/\bGo To Market\b/gi,'גו טו מרקט')
    .replace(/\bHelp Desk\b/gi,'הלפ דסק')
    .replace(/\bImplementation\b/gi,'אימפלמנטיישן')
    .replace(/\bAdoption\b/gi,'אדופשן')
    .replace(/\bDiscovery\b/gi,'דיסקאברי')
    .replace(/\bRequirements\b/gi,'ריקוויירמנטס')
    .replace(/\bDevelopment\b/gi,'דבלופמנט')
    .replace(/\bTesting\b/gi,'טסטינג')
    .replace(/\bValidation\b/gi,'ולידיישן')
    .replace(/\bExperimentation\b/gi,'אקספרימנטיישן')
    .replace(/\bLaunch\b/gi,'לאנץ׳')
    .replace(/\bTraining\b/gi,'טריינינג')
    .replace(/\bTechnical Support\b/gi,'טקניקל ספורט')
    .replace(/\bCustomer Service\b/gi,'קאסטומר סרוויס');
  const map=t=>window.__portfolioHebrewSpeechDiction(mapBase(t));
  const voice=()=>{
    const he=speechSynthesis.getVoices().filter(v=>/^he(?:-|_)/i.test(v.lang));
    return he.find(v=>/Natural|Online|Google|Microsoft/i.test(v.name))||he[0]||null;
  };
  const split=t=>{
    const parts=t.split(/(?<=[.!?;:])\s+/).filter(Boolean),out=[];
    parts.forEach(part=>{if(part.length<=230)out.push(part);else{const words=part.split(' ');let line='';words.forEach(word=>{if((line+' '+word).trim().length>210){out.push(line.trim());line=word}else line=(line+' '+word).trim()});if(line)out.push(line)}});
    return out;
  };
  let run=0;
  let topicList=[],topicStarts=[],topicIndex=0;
  const rememberTopics=list=>{topicList=list;const seen=new Set();topicStarts=list.map((item,i)=>{const key=(item.t||'').replace(/[.\s]+$/g,'');if(!item.t||item.p<900||seen.has(key))return -1;seen.add(key);return i}).filter(i=>i>=0);if(!topicStarts.length||topicStarts[0]!==0)topicStarts.unshift(0);topicIndex=0;};
  window.addEventListener('portfolioReadSkip',event=>{
    if(document.documentElement.lang!=='he')return;
    const btn=document.getElementById('pageReadButton');if(!btn)return;
    if(!topicList.length)rememberTopics(build());
    topicIndex=Math.max(0,Math.min(topicStarts.length-1,topicIndex+event.detail));
    const list=topicList.slice(topicStarts[topicIndex]);stop(btn);
    const context=primeAudio();speakWithEleven(btn,list,context).catch(()=>{if(btn.dataset.reading==='1')speak(btn,list)});
  });
  const chunks=root=>{
    const c=root.cloneNode(true),sources=window.__portfolioReadPosition.mapSources(root,c);c.querySelectorAll('.skillAbility').forEach(button=>{const text=document.createElement('span');text.className='readCapability';text.textContent=button.textContent;sources.set(text,sources.get(button));button.replaceWith(text)});c.querySelectorAll('button,script,style,nav,footer,.rdActions,.rdTags,.homeExperienceBox,.rdValueAdvantages,.rdCTA>a,.rdRoles b,.skillsHeaderButton,.allAdvantagesLink,.enAllAdvantages,.sbnContact,.esbContact,.orgLink,.projectLinksRow,.projectLinks,.enQuickRow,.courseHighlights>summary,.workDetails>summary,.moreJobs>summary,a.btn,a.button,a[role="button"],input,select,textarea,#sharedBottomNavigation,.sharedBottomNavigation,#englishSharedBottom,#centralMilitaryQuickNav,.milBottom,.professionBottomNav,.professionBottomNavRow,.enRoleNavigation,#roleProfessionNavigation,.sbnTitle,.sbnRow,.esbTitle,.esbRow,.milQuickTitle,.milGroups,.cqnGroups,.nextStep,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton').forEach(x=>x.remove());
    const a=[],seen=new Set(),selected=new Set(c.querySelectorAll('h1,h2,h3,h4,.highlight>span:first-child,.roleExperience>span:first-child,.skillsHeaderTitle,p,li,.readCapability,.rdTags a,.rdActions a,article strong,article span'));
    c.querySelectorAll('h1,h2,h3,h4,.highlight>span:first-child,.roleExperience>span:first-child,.skillsHeaderTitle,p,li,.readCapability,.rdTags a,.rdActions a,article strong,article span').forEach(el=>{
      if([...selected].some(parent=>parent!==el&&parent.contains(el)))return;
      const t=(el.innerText||el.textContent||'').replace(/\s+/g,' ').trim();if(!t||seen.has(t))return;seen.add(t);
      split(map(t)).forEach((part,index)=>a.push({t:part,p:/^H[1-4]$/.test(el.tagName)?1000:(index?500:420),source:sources.get(el)}));
    });
    return a;
  };
  const small=(main,s)=>[...main.querySelectorAll('section,article')].filter(x=>(x.innerText||'').includes(s)).sort((a,b)=>a.innerText.length-b.innerText.length)[0];
  const build=()=>{
    const main=document.querySelector('main'),page=location.pathname.split('/').pop()||'index.html';if(!main)return[];
    const role={'product.html':'מנהל מוצר','project.html':'מנהל פרויקט','system.html':'מנתח מערכות','magic.html':"מתכנת מג'יק",'customer.html':'קאסטומר סקסס'};
    if(page==='skills.html'){
      const out=[],seen=new Set();
      main.querySelectorAll('.skillGrid .skill').forEach(card=>{
        const heading=card.querySelector('h3');if(!heading)return;
        const title=(heading.innerText||heading.textContent||'').replace(/^[^\p{L}\p{N}]+/u,'').trim();
        if(!title||seen.has(title))return;seen.add(title);
        if(out.length)out.push({pause:1800});
        out.push({t:map(title),p:900,source:heading});
        const labels=[...new Set([...card.querySelectorAll('.skillAbility')].map(button=>button.textContent.trim()).filter(Boolean))];
        labels.forEach(label=>split(map(label)).forEach(part=>out.push({t:part,p:420,source:[...card.querySelectorAll('.skillAbility')].find(button=>button.textContent.trim()===label)})));
      });return out;
    }
    if(role[page])return chunks(main);
    if(page!=='index.html')return chunks(main);
    const blocks=[main.querySelector('.rdHeroCopy'),main.querySelector('.rdStats'),main.querySelector('.lifecycleSection'),small(main,'חמישה עולמות מקצועיים שמתחברים לתמונה אחת'),small(main,'הערך שאני מביא לארגון')].filter(Boolean);
    const out=[],seen=new Set();blocks.forEach(b=>{const k=b.innerText.trim();if(!k||seen.has(k))return;seen.add(k);if(out.length)out.push({pause:1300});out.push(...chunks(b))});return out;
  };
  const stopAudio=()=>{window.__portfolioSetNarrationOutput('');const source=window.__ronenPageSource;if(source){try{source.onended=null;source.stop()}catch{}window.__ronenPageSource=null}const audio=window.__ronenPageAudio;if(audio){audio.pause();if(audio.dataset&&audio.dataset.url)URL.revokeObjectURL(audio.dataset.url);window.__ronenPageAudio=null}};
  const primeAudio=()=>{const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return null;const context=window.__ronenAudioContext||new AudioContext();window.__ronenAudioContext=context;context.resume();return context};
  const stop=btn=>{run++;stopAudio();speechSynthesis.cancel();if(btn){btn.dataset.reading='0';btn.textContent='🔊 הקרא את הדף'}};
  const speak=(btn,list)=>{
    const id=++run;btn.dataset.reading='1';btn.textContent='⏹ עצור הקראה';let i=0,spoken=0;
    const next=()=>{if(id!==run)return;if(i>=list.length){stop(btn);return}const x=list[i++];const position=topicList.indexOf(x.original||x);if(position>=0)topicIndex=Math.max(0,topicStarts.filter(start=>start<=position).length-1);if(x.pause){setTimeout(next,Math.min(x.pause,250));return}
      window.__portfolioSetNarrationOutput(x.t);const u=new SpeechSynthesisUtterance((spoken++===0?'... ':'')+x.t);u.lang='he-IL';u.rate=.78;u.pitch=1;const v=voice();if(v)u.voice=v;u.onstart=()=>window.__portfolioNarrationState('playing');u.onend=()=>{window.__portfolioSetNarrationOutput('');if(id===run)setTimeout(next,Math.min(x.p||150,250))};u.onerror=event=>{window.__portfolioSetNarrationOutput('');if(event.error==='not-allowed'){stop(btn);window.__portfolioNarrationState('blocked');return;}if(id===run)setTimeout(next,Math.min(x.p||150,250))};speechSynthesis.speak(u)};
    setTimeout(next,120);
  };
  const packForAudio=(values,max)=>{const parts=[];let part='';values.forEach(value=>{if(!value)return;const next=part?part+'. '+value:value;if(next.length>max&&part){parts.push(part);part=value}else part=next});if(part)parts.push(part);return parts};
  const fetchAudioPart=window.__portfolioFetchNarration;
  const speakWithEleven=async(btn,list,context)=>{
    const requestId=++run;
    const categoryAudio=location.pathname.split('/').pop()==='skills.html';
    const groups=[];let group=[];list.forEach(item=>{if(item.pause||(item.t&&item.p>=900&&group.length)){if(group.length)groups.push(group);group=[]}if(item.t)group.push(item)});if(group.length)groups.push(group);
    window.__portfolioShortOpening(groups,'t');const parts=groups.map(values=>values.map(x=>x.t).join('. '));
    if(!parts.length)throw new Error('No text');
    btn.dataset.reading='1';btn.textContent='⏳ מכין הקראה…';window.__portfolioNarrationState('preparing');
    const first=await fetchAudioPart(parts[0],'he');
    if(requestId!==run)return;
    if(!context)throw new Error('Web Audio unavailable');
    const playPart=async(index,blob)=>{if(requestId!==run)return;const position=topicList.indexOf(groups[index][0].original||groups[index][0]);if(position>=0)topicIndex=Math.max(0,topicStarts.filter(start=>start<=position).length-1);const next=index+1<parts.length?fetchAudioPart(parts[index+1],'he'):null;next?.catch(()=>{});const buffer=await context.decodeAudioData(await blob.arrayBuffer());if(requestId!==run)return;const source=context.createBufferSource();source.buffer=buffer;source.connect(context.destination);window.__ronenPageSource=source;btn.textContent='⏹ עצור הקראה';
      source.onended=async()=>{window.__portfolioSetNarrationOutput('');if(window.__ronenPageSource===source)window.__ronenPageSource=null;if(requestId!==run)return;if(!next){stop(btn);return}btn.textContent='⏳ מכין את ההמשך…';try{if(categoryAudio)await new Promise(resolve=>setTimeout(resolve,250));if(requestId!==run)return;await playPart(index+1,await next)}catch{if(requestId===run)speak(btn,groups.slice(index+1).flat())}};
      await Promise.race([context.resume(),new Promise(resolve=>setTimeout(resolve,350))]);if(context.state&&context.state!=='running'){window.__portfolioNarrationState('blocked');throw Error('Playback blocked');}window.__portfolioSetNarrationOutput(parts[index]);source.start(0);window.__portfolioNarrationState('playing')};
    await playPart(0,first);
  };
  document.addEventListener('click',e=>{
    const btn=e.target.closest&&e.target.closest('#pageReadButton');if(!btn)return;
    e.preventDefault();e.stopImmediatePropagation();
    if(!('speechSynthesis' in window))return alert('הדפדפן אינו תומך בהקראת טקסט.');
    if(btn.dataset.reading==='1'){stop(btn);return}
    stopAudio();speechSynthesis.cancel();const all=build();rememberTopics(all);const start=window.__portfolioReadPosition.start(all,'t',map);topicIndex=Math.max(0,topicStarts.filter(index=>index<=start.index).length-1);const list=start.items;if(list.length){const context=primeAudio();speakWithEleven(btn,list,context).catch(()=>{if(btn.dataset.reading==='1'){stopAudio();btn.textContent='⏹ עצור הקראה';window.__portfolioNarrationState('fallback');speak(btn,list)}})};
  },true);
})();


// English read-aloud with native pronunciation.
(function(){
  if(window.__ronenEnglishReadAloud)return;
  window.__ronenEnglishReadAloud=true;

  const page=()=>location.pathname.split('/').pop()||'index-en.html';
  const roles={
    'product-en.html':'Product Manager',
    'project-en.html':'Project Manager',
    'system-en.html':'System Analyst',
    'en-05.html':'MAGIC Developer',
    'en-06.html':'Customer Success'
  };
  const currentPage=page();
  const isHome=currentPage==='index-en.html';
  const isRole=Object.prototype.hasOwnProperty.call(roles,currentPage);
  if(document.documentElement.lang!=='en' && !isHome && !isRole)return;

  const normalize=t=>window.__portfolioEnglishProfessionalPronunciation((t||'').replace(/\s+/g,' ').trim())
    .replace(/\bPRD\b/g,'PRD')
    .replace(/\bQA\b/g,'Q A')
    .replace(/\bUX\b/g,'U X')
    .replace(/\bUI\b/g,'U I')
    .replace(/\bKPI(?:s)?\b/g,'KPI')
    .replace(/\bAPI(?:s)?\b/g,'API')
    .replace(/\bAI\b/g,'A I')
    .replace(/\bCRM\b/g,'CRM')
    .replace(/\bERP\b/g,'ERP')
    .replace(/\bBI\b/g,'B I')
    .replace(/\bB2B\b/g,'B to B')
    .replace(/\bB2C\b/g,'B to C')
    .replace(/\bMVP\b/g,'MVP')
    .replace(/\bMLP\b/g,'MLP')
    .replace(/\bWBS\b/g,'WBS')
    .replace(/\bHTML\b/g,'H T M L')
    .replace(/\bCSS\b/g,'CSS')
    .replace(/\bSQL\b/g,'SQL')
    .replace(/\bNoSQL\b/gi,'No S Q L')
    .replace(/\bJSON\b/g,'J S O N')
    .replace(/\bREST\b/g,'rest')
    .replace(/\bSaaS\b/g,'sass')
    .replace(/\bDevOps\b/gi,'Dev Ops')
    .replace(/\.NET\b/gi,'dot net')
    .replace(/\bC#/g,'C sharp')
    .replace(/\bC\+\+/g,'C plus plus')
    .replace(/\bMS[- ]SQL\b/gi,'Microsoft S Q L')
    .replace(/\bA\/B\b/g,'A B')
    .replace(/360°?/g,'three hundred and sixty degrees')
    .replace(/\bEnd[\s-]?to[\s-]?End\b/gi,'end to end')
    .replace(/\bMAGIC\b/g,'Magic')
    .replace(/\bGitHub\b/g,'Git Hub')
    .replace(/\bLinkedIn\b/g,'Linked In');

  const pickVoice=()=>{
    const voices=speechSynthesis.getVoices();
    return voices.find(v=>/^en-US$/i.test(v.lang)&&/Natural|Online|Google|Microsoft/i.test(v.name)) ||
           voices.find(v=>/^en-GB$/i.test(v.lang)&&/Natural|Online|Google|Microsoft/i.test(v.name)) ||
           voices.find(v=>/^en-US$/i.test(v.lang)) ||
           voices.find(v=>/^en-GB$/i.test(v.lang)) ||
           voices.find(v=>/^en/i.test(v.lang)) || null;
  };

  let runId=0;
  let englishTopics=[],englishStarts=[],englishTopicIndex=0;
  window.addEventListener('portfolioReadSkip',event=>{if(document.documentElement.lang!=='en')return;const btn=document.getElementById('englishPageReadButton');if(!btn)return;if(!englishTopics.length){englishTopics=isHome?homeChunks(document.querySelector('main')):extract(document.querySelector('main'));englishStarts=englishTopics.map((item,i)=>item.text&&item.pause>=1000?i:-1).filter(i=>i>=0);if(!englishStarts.length||englishStarts[0]!==0)englishStarts.unshift(0);}englishTopicIndex=Math.max(0,Math.min(englishStarts.length-1,englishTopicIndex+event.detail));const items=englishTopics.slice(englishStarts[englishTopicIndex]);stop(btn);const context=primeEnglishAudio();speakEnglishWithEleven(items,btn,context).catch(()=>{if(btn.dataset.reading==='1')speakQueue(items,btn)});});
  const stopEnglishAudio=()=>{window.__portfolioSetNarrationOutput('');const source=window.__ronenPageSource;if(source){try{source.onended=null;source.stop()}catch{}window.__ronenPageSource=null}const audio=window.__ronenPageAudio;if(audio){audio.pause();if(audio.dataset&&audio.dataset.url)URL.revokeObjectURL(audio.dataset.url);window.__ronenPageAudio=null}};
  const primeEnglishAudio=()=>{const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return null;const context=window.__ronenAudioContext||new AudioContext();window.__ronenAudioContext=context;context.resume();return context};
  const stop=btn=>{
    runId++;
    stopEnglishAudio();
    speechSynthesis.cancel();
    if(btn){btn.dataset.reading='0';btn.textContent='🔊 Read this page';}
  };

  const extract=root=>{
    const clone=root.cloneNode(true),sources=window.__portfolioReadPosition.mapSources(root,clone);
    clone.querySelectorAll('button,script,style,nav,footer,.rdActions,.rdTags,.homeExperienceBox,.rdValueAdvantages,.rdCTA>a,.rdRoles b,.skillsHeaderButton,.allAdvantagesLink,.enAllAdvantages,.sbnContact,.esbContact,.orgLink,.projectLinksRow,.projectLinks,.enQuickRow,.courseHighlights>summary,.workDetails>summary,.moreJobs>summary,a.btn,a.button,a[role="button"],input,select,textarea,#sharedBottomNavigation,.sharedBottomNavigation,#englishSharedBottom,#centralMilitaryQuickNav,.milBottom,.professionBottomNav,.professionBottomNavRow,.enRoleNavigation,#roleProfessionNavigation,.sbnTitle,.sbnRow,.esbTitle,.esbRow,.milQuickTitle,.milGroups,.cqnGroups,.nextStep,#roleProfessionNavigation,.expQuick,.roleQuickLinks,#pageReadButton,#englishPageReadButton').forEach(x=>x.remove());
    const out=[];
    const seen=new Set(),selected=new Set(clone.querySelectorAll('h1,h2,h3,h4,.highlight>span:first-child,.roleExperience>span:first-child,.skillsHeaderTitle,p,li,article strong,article span,.rdTags a,.rdActions a'));
    clone.querySelectorAll('h1,h2,h3,h4,.highlight>span:first-child,.roleExperience>span:first-child,.skillsHeaderTitle,p,li,article strong,article span,.rdTags a,.rdActions a').forEach(el=>{
      if([...selected].some(parent=>parent!==el&&parent.contains(el)))return;
      const raw=(el.innerText||el.textContent||'').replace(/\s+/g,' ').trim();
      if(!raw||seen.has(raw))return;
      seen.add(raw);
      const isHeading=/^H[1-4]$/.test(el.tagName);
      out.push({text:normalize(raw),pause:isHeading?1050:(el.tagName==='LI'?420:320),source:sources.get(el)});
    });
    return out;
  };

  const findSmallest=(main,needle)=>[...main.querySelectorAll('section,article')]
    .filter(x=>(x.innerText||'').toLowerCase().includes(needle.toLowerCase()))
    .sort((a,b)=>(a.innerText||'').length-(b.innerText||'').length)[0]||null;

  const homeChunks=main=>{
    const blocks=[
      main.querySelector('.rdHeroCopy'),
      main.querySelector('.rdStats'),
      main.querySelector('.lifecycleSection'),
      findSmallest(main,'five professional'),
      findSmallest(main,'value I bring')
    ].filter(Boolean);
    const out=[];
    const seen=new Set();
    blocks.forEach(block=>{
      const key=(block.innerText||'').trim();
      if(!key||seen.has(key))return;
      seen.add(key);
      if(out.length)out.push({pause:1400});
      out.push(...extract(block));
    });
    return out;
  };

  const speakQueue=(items,btn)=>{
    const my=++runId;
    let i=0,spoken=0;
    btn.dataset.reading='1';
    btn.textContent='⏹ Stop reading';
    speechSynthesis.cancel();
    const next=()=>{
      if(my!==runId)return;
      if(i>=items.length){
        btn.dataset.reading='0';
        btn.textContent='🔊 Read this page';
        return;
      }
      const item=items[i++];const position=englishTopics.indexOf(item.original||item);if(position>=0)englishTopicIndex=Math.max(0,englishStarts.filter(start=>start<=position).length-1);
      if(item.pause&&!item.text){setTimeout(next,Math.min(item.pause,250));return;}
      if(!item.text){next();return;}
      window.__portfolioSetNarrationOutput(item.text);const u=new SpeechSynthesisUtterance((spoken++===0?'... ':'')+item.text);
      u.onstart=()=>window.__portfolioNarrationState('playing');u.lang='en-US';
      u.rate=0.84;
      u.pitch=1;
      const v=pickVoice();
      if(v)u.voice=v;
      u.onend=()=>{window.__portfolioSetNarrationOutput('');setTimeout(next,Math.min(item.pause||150,250));};
      u.onerror=event=>{window.__portfolioSetNarrationOutput('');if(event.error==='not-allowed'){stop(btn);window.__portfolioNarrationState('blocked');return;}setTimeout(next,250);};
      speechSynthesis.speak(u);
    };
    setTimeout(next,120);
  };
  const packEnglishAudio=(values,max)=>{const parts=[];let part='';values.forEach(value=>{if(!value)return;const next=part?part+'. '+value:value;if(next.length>max&&part){parts.push(part);part=value}else part=next});if(part)parts.push(part);return parts};
  const fetchEnglishAudio=text=>window.__portfolioFetchNarration(text,'en');
  const speakEnglishWithEleven=async(items,btn,context)=>{
    const requestId=++runId;
    const groups=[];let group=[];items.forEach(item=>{if((item.pause&&!item.text)||(item.text&&item.pause>=1000&&group.length)){if(group.length)groups.push(group);group=[]}if(item.text)group.push(item)});if(group.length)groups.push(group);window.__portfolioShortOpening(groups,'text');const parts=groups.map(values=>values.map(x=>x.text).join('. '));
    if(!parts.length)throw new Error('No text');
    btn.dataset.reading='1';btn.textContent='⏳ Preparing audio…';window.__portfolioNarrationState('preparing');
    const first=await fetchEnglishAudio(parts[0]);
    if(requestId!==runId)return;
    if(!context)throw new Error('Web Audio unavailable');
    const playPart=async(index,blob)=>{if(requestId!==runId)return;const position=englishTopics.indexOf(groups[index][0].original||groups[index][0]);if(position>=0)englishTopicIndex=Math.max(0,englishStarts.filter(start=>start<=position).length-1);const next=index+1<parts.length?fetchEnglishAudio(parts[index+1]):null;next?.catch(()=>{});const buffer=await context.decodeAudioData(await blob.arrayBuffer());if(requestId!==runId)return;const source=context.createBufferSource();source.buffer=buffer;source.connect(context.destination);window.__ronenPageSource=source;btn.textContent='⏹ Stop reading';
      source.onended=async()=>{window.__portfolioSetNarrationOutput('');if(window.__ronenPageSource===source)window.__ronenPageSource=null;if(requestId!==runId)return;if(!next){stop(btn);return}btn.textContent='⏳ Preparing the next part…';try{await playPart(index+1,await next)}catch{if(requestId===runId)speakQueue(groups.slice(index+1).flat(),btn)}};
      await Promise.race([context.resume(),new Promise(resolve=>setTimeout(resolve,350))]);if(context.state&&context.state!=='running'){window.__portfolioNarrationState('blocked');throw Error('Playback blocked');}window.__portfolioSetNarrationOutput(parts[index]);source.start(0);window.__portfolioNarrationState('playing')};
    await playPart(0,first);
  };

  const add=()=>{
    if(document.getElementById('englishPageReadButton')||document.getElementById('pageReadButton'))return;
    const main=document.querySelector('main');
    if(!main)return;
    const hero=isHome?main.querySelector('.rdHero'):main.querySelector('.innerHero,.hero,.roleHero,section');
    if(!hero)return;
    const anchor=isHome?(hero.querySelector('.rdHeroCopy')||hero):(hero.querySelector('.page')||hero);
    if(getComputedStyle(anchor).position==='static')anchor.style.position='relative';

    const btn=document.createElement('button');
    btn.id='englishPageReadButton';
    btn.type='button';
    btn.textContent='🔊 Read this page';
    btn.setAttribute('aria-label',isRole?'Read '+roles[currentPage]+' page aloud':'Read the main content of the home page aloud');
    btn.style.cssText='position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:9px 15px;border-radius:11px;background:#edf3ff;border:1px solid #195ed8;color:#195ed8;font:900 14px inherit;cursor:pointer;box-shadow:0 4px 12px rgba(13,34,54,.10)';
    btn.addEventListener('click',()=>{
      if(!('speechSynthesis' in window)){alert('Your browser does not support text-to-speech.');return;}
      if(btn.dataset.reading==='1'){stop(btn);return;}
      const all=isHome?homeChunks(main):extract(document.querySelector('main')||main);
      englishTopics=all;englishStarts=all.map((item,i)=>item.text&&item.pause>=1000?i:-1).filter(i=>i>=0);if(!englishStarts.length||englishStarts[0]!==0)englishStarts.unshift(0);const start=window.__portfolioReadPosition.start(all,'text',normalize);englishTopicIndex=Math.max(0,englishStarts.filter(index=>index<=start.index).length-1);const items=start.items;
      if(items.length){stopEnglishAudio();speechSynthesis.cancel();const context=primeEnglishAudio();speakEnglishWithEleven(items,btn,context).catch(()=>{if(btn.dataset.reading==='1'){stopEnglishAudio();btn.textContent='⏹ Stop reading';window.__portfolioNarrationState('fallback');speakQueue(items,btn)}});}
    });
    anchor.appendChild(btn);

    if(!document.getElementById('englishPageReadStyle')){
      const st=document.createElement('style');
      st.id='englishPageReadStyle';
      st.textContent='@media(max-width:720px){#englishPageReadButton{position:static!important;margin:14px 0 0!important}}';
      document.head.appendChild(st);
    }
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(add,0),{once:true});
  else setTimeout(add,0);
})();


/* Shared footer contact link on Hebrew and English pages. */
(function(){
  function updateFooter(){
    const footer=document.querySelector('footer');
    const contact=footer&&footer.querySelector('div');
    if(!contact)return;
    const copyright=footer.querySelector('.siteCopyright');
    if(copyright&&document.documentElement.lang==='he')copyright.textContent='© כל זכויות שמורות על בנית האתר ועיצובו לרונן פלד בלבד';
    else if(copyright&&!copyright.textContent.trim().startsWith('©'))copyright.prepend(document.createTextNode('© '));
    const name=contact.querySelector('b');
    if(name&&document.documentElement.lang==='he')name.textContent='רונן פלד';
    const isHebrew=document.documentElement.lang==='he';
    const homeLink=footer.querySelector(':scope > a');
    if(homeLink)homeLink.textContent=isHebrew?'חזרה לעמוד הבית':'Back to home page';
    if(homeLink&&!footer.querySelector('.footerPageLinks')){
      const navigation=document.createElement('nav');
      navigation.className='footerPageLinks';
      navigation.setAttribute('aria-label',isHebrew?'ניווט תחתון':'Footer navigation');
      const topLink=document.createElement('a');
      topLink.href='#';
      topLink.textContent=isHebrew?'חזרה לתחילת העמוד':'Back to top';
      topLink.addEventListener('click',function(event){
        event.preventDefault();
        window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
      });
      homeLink.replaceWith(navigation);
      navigation.append(topLink,homeLink);
      const voiceButton=document.createElement('button');
      voiceButton.type='button';
      voiceButton.id='site_voice_nevegation';
      voiceButton.name='site_voice_nevegation';
      voiceButton.dataset.webhookName='site_voice_nevegation';
      voiceButton.textContent=isHebrew?'ניווט קולי':'Voice navigation';
      voiceButton.style.cssText='position:fixed;top:auto;bottom:36px;left:12px;transform:none;z-index:99998;display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 14px;margin:0;border:1px solid #4c7fc8;border-radius:10px;background:#74e8dd;color:#1f5fbf;font:inherit;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 3px 12px rgba(13,41,70,.18)';
      const voiceReady=new Promise(function(resolve,reject){
        if(window.PortfolioVoiceNavigation){resolve();return;}
        const script=document.createElement('script');
        script.src='/assets/voice-navigation.js?v=20261112-reading-controls-11';
        script.onload=resolve;script.onerror=reject;
        document.head.appendChild(script);
      });
      voiceReady.catch(function(){});
      voiceButton.addEventListener('click',function(){
        function toggleVoiceNavigation(){const voice=window.PortfolioVoiceNavigation;if(voice.isActive())voice.close();else voice.open();}
        if(window.PortfolioVoiceNavigation){toggleVoiceNavigation();return;}
        voiceReady.then(toggleVoiceNavigation).catch(function(){window.alert('לא ניתן לפתוח את הניווט כרגע. נסו לרענן את העמוד.');});
      });
      voiceButton.setAttribute('aria-pressed','false');
      footer.appendChild(voiceButton);
      function alignVoiceButton(){
        const rect=footer.getBoundingClientRect(),height=voiceButton.offsetHeight;
        const center=rect.top<window.innerHeight&&rect.bottom>0?rect.top+rect.height/2:window.innerHeight-Math.min(rect.height,160)/2;
        let bottom=Math.max(16,window.innerHeight-center-height/2);
        const bot=document.getElementById('ronen-bot-launcher');
        if(bot){const box=bot.getBoundingClientRect();if(box.top>window.innerHeight/2&&box.left<voiceButton.offsetWidth+24)bottom=Math.max(bottom,window.innerHeight-box.top+12);}
        voiceButton.style.left='12px';
        voiceButton.style.bottom=bottom+'px';
      }
      let alignmentFrame;
      function scheduleVoiceAlignment(){cancelAnimationFrame(alignmentFrame);alignmentFrame=requestAnimationFrame(alignVoiceButton);}
      window.addEventListener('resize',scheduleVoiceAlignment);
      window.addEventListener('load',scheduleVoiceAlignment);
      window.addEventListener('scroll',scheduleVoiceAlignment,{passive:true});
      if(window.ResizeObserver)new ResizeObserver(scheduleVoiceAlignment).observe(footer);
      scheduleVoiceAlignment();
      navigation.dir=isHebrew?'rtl':'ltr';
      [[topLink,'M12 19V5M5 12l7-7 7 7'],[homeLink,'m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8']].forEach(function(entry){
        const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');
        icon.setAttribute('viewBox','0 0 24 24');
        icon.setAttribute('fill','none');
        icon.setAttribute('stroke','currentColor');
        icon.setAttribute('stroke-width','2');
        icon.setAttribute('stroke-linecap','round');
        icon.setAttribute('stroke-linejoin','round');
        icon.setAttribute('aria-hidden','true');
        icon.setAttribute('focusable','false');
        const path=document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d',entry[1]);
        icon.appendChild(path);
        entry[0].prepend(icon);
      });
    }
    function contactIcon(pathData){
      const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');
      icon.setAttribute('viewBox','0 0 24 24');
      icon.setAttribute('fill','none');
      icon.setAttribute('stroke','currentColor');
      icon.setAttribute('stroke-width','2');
      icon.setAttribute('stroke-linecap','round');
      icon.setAttribute('stroke-linejoin','round');
      icon.setAttribute('aria-hidden','true');
      icon.setAttribute('focusable','false');
      icon.classList.add('footerContactIcon');
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',pathData);
      icon.appendChild(path);
      return icon;
    }
    const details=contact.querySelector('span');
    if(details&&!details.querySelector('a')){
      const phone=document.createElement('a');
      phone.href='tel:+972546546288';
      const phoneValue=document.createElement('bdi');
      phoneValue.textContent='054-6546288';
      phone.replaceChildren(document.createTextNode(isHebrew?'טלפון: ':'Phone: '),phoneValue);
      const email=document.createElement('a');
      email.href='mailto:shironetpeled@gmail.com';
      const emailValue=document.createElement('bdi');
      emailValue.textContent='shironetpeled@gmail.com';
      email.replaceChildren(document.createTextNode(isHebrew?'מייל: ':'Email: '),emailValue);
      phone.prepend(contactIcon('M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L8.6 10.5a16 16 0 0 0 4.9 4.9l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.7 2Z'));
      email.prepend(contactIcon('M3 5h18v14H3zM3 6l9 7 9-7'));
      details.replaceChildren(phone,document.createTextNode(' · '),email);
    }
    if(contact.querySelector('.footerLinkedIn'))return;
    const link=document.createElement('a');
    link.className='footerLinkedIn';
    link.href='https://www.linkedin.com/in/ronenpeled/';
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.textContent='LinkedIn: '+decodeURI(link.href);
    link.prepend(contactIcon('M3 3h18v18H3zM7 10v7M7 7v.1M11 17v-7M11 13a3 3 0 0 1 6 0v4'));
    contact.appendChild(link);
    const style=document.createElement('style');
    style.textContent='footer:has(.footerLinkedIn){min-height:116px}footer .footerLinkedIn{display:block;align-self:flex-start;margin-top:6px;color:#9cafc1;font-size:13px;line-height:1.7;direction:ltr;max-width:100%;overflow-wrap:anywhere;text-decoration:underline}footer:has(.footerLinkedIn)>div{min-width:0;max-width:100%}footer:has(.footerLinkedIn)>div>span{overflow-wrap:anywhere}footer:has(.footerLinkedIn)>div>span a{display:inline-block;max-width:100%}footer .footerContactIcon{display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:5px}footer .footerPageLinks{display:flex;flex-direction:column;align-items:center;justify-content:center;align-self:center;gap:4px;text-align:center}footer .footerPageLinks a{display:inline-flex;align-items:center;justify-content:center;gap:6px}footer .footerPageLinks svg{width:16px;height:16px;flex:0 0 16px}@media(max-width:620px){footer:has(.footerPageLinks){padding-bottom:100px}}footer .footerLinkedIn:hover,footer .footerLinkedIn:focus-visible{text-decoration:underline}';
    document.head.appendChild(style);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updateFooter,{once:true});
  else updateFooter();
})();

(()=>{
 let savedRead=null,row=null,queued=false;
 function maintain(){
  let read=document.querySelector('#pageReadButton,#englishPageReadButton')||savedRead;
  if(!read)return;savedRead=read;const en=document.documentElement.lang==='en';
  if(!row){row=document.createElement('div');row.id='pageReadTopicControls';row.setAttribute('aria-label',en?'Page narration controls':'כפתורי הקראת הדף');
   [[-1,en?'◀ Previous topic':'חלק קודם ▶'],[1,en?'Next topic ▶':'◀ חלק הבא']].forEach(([step,label])=>{const b=document.createElement('button');b.type='button';b.dataset.readStep=String(step);b.textContent=label;b.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('portfolioReadSkip',{detail:step})));row.appendChild(b)});
  }
  if(!row.isConnected)document.body.appendChild(row);
  if(read.parentElement!==row)row.insertBefore(read,row.querySelector('[data-read-step="1"]')||row.lastElementChild);
  const style='position:static!important;display:inline-flex!important;visibility:visible!important;opacity:1!important;margin:0!important;inset:auto!important;transform:none!important;align-items:center!important;justify-content:center!important;gap:5px!important;min-height:42px!important;padding:9px 10px!important;border-radius:11px!important;border:1px solid #195ed8!important;background:#edf3ff!important;color:#195ed8!important;font-size:13px!important;font-weight:900!important;min-width:0!important;max-width:none!important;white-space:nowrap!important;cursor:pointer!important';
  row.querySelectorAll('button').forEach(b=>{const order=b.dataset.readStep==='-1'?0:b===read?1:b.id==='pageReadPauseButton'?2:3;const buttonStyle=style+';order:'+order+'!important';if(b.style.cssText!==buttonStyle)b.style.cssText=buttonStyle;b.hidden=false});
 }
 const css=document.createElement('style');css.textContent='#pageReadTopicControls{direction:rtl!important;position:fixed!important;top:126px!important;right:20px!important;left:auto!important;z-index:99999!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;width:max-content!important;max-width:calc(100vw - 24px)!important;padding:6px!important;margin:0!important;border-radius:14px;background:#fff;box-shadow:0 4px 16px rgba(13,34,54,.18)}@media(max-width:950px){#pageReadTopicControls{top:90px!important;right:12px!important}#pageReadTopicControls button{font-size:11px!important;padding:8px 7px!important}}';document.head.appendChild(css);
 const observer=new MutationObserver(()=>{if(queued)return;queued=true;setTimeout(()=>{queued=false;maintain()},100)});observer.observe(document.body,{childList:true,subtree:true});
 maintain();setTimeout(maintain,1200);setTimeout(maintain,5000);
})();

/* Pause uses the existing narration player and keeps command listening active. */
(function(){
  window.__portfolioNarrationPaused=false;
  function pauseNarration(paused){
    const reader=document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]');
    paused=!!paused&&!!reader;window.__portfolioNarrationPaused=paused;
    const context=window.__ronenAudioContext;
    if(paused){context?.suspend?.().catch(()=>{});window.__ronenPageAudio?.pause();window.speechSynthesis?.pause?.();}
    else{context?.resume?.().catch(()=>{});if(reader)window.__ronenPageAudio?.play()?.catch(()=>{});window.speechSynthesis?.resume?.();}
    const button=document.getElementById('pageReadPauseButton');if(button){button.textContent=paused?(document.documentElement.lang==='en'?'Resume':'המשך הקראה'):(document.documentElement.lang==='en'?'Pause':'השהה');button.setAttribute('aria-pressed',String(paused));}
  }
  window.addEventListener('portfolioReadPause',event=>pauseNarration(event.detail===undefined?!window.__portfolioNarrationPaused:event.detail));
  window.addEventListener('portfolioReadSkip',()=>pauseNarration(false));
  function maintainPause(){
    const row=document.getElementById('pageReadTopicControls');if(!row)return;
    if(!document.getElementById('pageReadPauseButton')){const button=document.createElement('button');button.id='pageReadPauseButton';button.type='button';button.textContent=document.documentElement.lang==='en'?'Pause':'השהה';button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>pauseNarration(!window.__portfolioNarrationPaused));row.appendChild(button);}
    if(window.__portfolioNarrationPaused&&!document.querySelector('#pageReadButton[data-reading="1"],#englishPageReadButton[data-reading="1"]'))pauseNarration(false);
  }
  new MutationObserver(maintainPause).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-reading']});maintainPause();
})();
/* Label narration controls and reserve room before page content. */
(()=>{
 let queued=false;
 const style=document.createElement('style');
 style.textContent='#pageReadTopicControls{flex-wrap:wrap!important;max-width:calc(100vw - 24px)!important;row-gap:7px!important}#pageReadTopicControls .pageReadLabel{flex:0 0 100%;order:-1!important;font-size:14px;font-weight:900;color:#195ed8;line-height:1.3;text-align:center;margin:0 0 2px}';
 document.head.appendChild(style);
 function update(){
  queued=false;
  const row=document.getElementById('pageReadTopicControls'),main=document.querySelector('main'),header=document.querySelector('header.top');
  if(!row||!main)return;
  let label=row.querySelector('.pageReadLabel');
  if(!label){label=document.createElement('span');label.className='pageReadLabel';row.prepend(label)}
  const value=document.documentElement.lang==='en'?'Read this page':'הקרא עמוד';if(label.textContent!==value)label.textContent=value;
  const top=Math.max(0,header?.getBoundingClientRect().bottom||0)+8;
  row.style.setProperty('top',Math.ceil(top)+'px','important');
  let space=document.getElementById('pageReadReservedSpace');
  if(!space){space=document.createElement('div');space.id='pageReadReservedSpace';space.setAttribute('aria-hidden','true');main.before(space)}
  space.style.height=Math.ceil(row.getBoundingClientRect().height+24)+'px';
 }
 function schedule(){if(queued)return;queued=true;requestAnimationFrame(update)}
 new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
 window.addEventListener('resize',schedule);window.addEventListener('load',schedule);
 schedule();
})();

/* Place the narration title across the frame's upper border. */
(()=>{
 const style=document.createElement('style');
 style.textContent='#pageReadTopicControls{border:2px solid #195ed8!important;padding:18px 8px 8px!important;margin-top:13px!important;overflow:visible!important}#pageReadTopicControls .pageReadLabel{position:absolute!important;top:0!important;left:50%!important;transform:translate(-50%,-55%)!important;display:block!important;width:max-content!important;max-width:calc(100% - 24px)!important;flex:none!important;background:#fff!important;padding:0 10px!important;margin:0!important;font-size:20px!important;font-weight:900!important;line-height:1.3!important;white-space:nowrap!important;border-radius:5px}';
 document.head.appendChild(style);
})();

/* Align the Hebrew bot with the narration buttons, below the legend. */
(()=>{
 if(document.documentElement.lang!=='he')return;
 const style=document.createElement('style');
 style.textContent='html[lang="he"] #ronen-bot-launcher{top:var(--hebrew-bot-top,145px)!important;bottom:auto!important}';
 document.head.appendChild(style);
 let pending=false;
 function position(){
  pending=false;
  const bot=document.getElementById('ronen-bot-launcher'),row=document.getElementById('pageReadTopicControls'),header=document.querySelector('header.top');
  if(!bot||!row)return;
  const rect=row.getBoundingClientRect(),box=bot.getBoundingClientRect();
  const buttons=[...row.querySelectorAll('button')].filter(b=>b.getBoundingClientRect().height);
  let top=buttons.length?buttons[0].getBoundingClientRect().top:rect.top+18;
  if(rect.left<box.right&&rect.right>box.left)top=rect.bottom+12;
  top=Math.max(top,(header?.getBoundingClientRect().bottom||0)+16);
  document.documentElement.style.setProperty('--hebrew-bot-top',Math.ceil(top)+'px');
 }
 function schedule(){if(!pending){pending=true;requestAnimationFrame(position)}}
 new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
 window.addEventListener('resize',schedule);window.addEventListener('load',schedule);
 schedule();
})();

// Shared personal and job-search navigation layout.
(function(){var s=document.createElement('style');s.id='personal-job-top-navigation';s.textContent="@media(min-width:951px){html body header.top .navwrap nav{grid-template-columns:repeat(140,minmax(0,1fr))!important;column-gap:0!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"personal.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:1/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"employment.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:1/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"index.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:15/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"experience.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:29/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"projects.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:43/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"work-environments.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:57/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"education.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:71/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"military.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:85/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"skills.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:99/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"advantages.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:113/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"contact.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:127/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"product.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:15/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"project.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:36/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"system.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:57/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"magic.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:78/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"customer.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:99/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"he\"] body header.top .navwrap nav>a[data-language-switch]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:120/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:11px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:1/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"employment-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:1/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:15/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"skills-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:29/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"history-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:43/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-magic-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:57/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"work-environments-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:71/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-customer-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:85/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"service-page-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:99/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"advantages-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:113/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"contact-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:127/span 14!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"product-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:15/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"project-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:36/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"system-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:57/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"en-05.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:78/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"en-06.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:99/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:120/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}}@media(max-width:950px){html body header.top nav>a[href^=\"personal\"]{order:-2!important}html body header.top nav>a[href^=\"employment\"]{order:-1!important}}[id=\"personal-details\"],[id=\"job-search\"]{scroll-margin-top:240px}";document.head.appendChild(s)})();

(function(){var s=document.createElement('style');s.textContent="@media(min-width:951px){html[lang=\"en\"] body header.top .navwrap nav>a:last-child:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:120/span 21!important;width:calc(100% - 6px)!important;min-width:0!important;max-width:none!important;justify-self:start!important;position:relative!important;inset:auto!important;inset-inline-start:0!important;transform:none!important;margin:0!important;padding-left:3px!important;padding-right:3px!important;font-size:10px!important;box-sizing:border-box!important}}";document.head.appendChild(s)})();

(function(){function resize(){var n=document.querySelector('header.top nav');if(!n)return;if(innerWidth>950)n.style.setProperty('grid-template-columns',document.documentElement.lang==='en'?'repeat(504,minmax(0,1fr))':'repeat(140,minmax(0,1fr))','important');else n.style.removeProperty('grid-template-columns')}window.addEventListener('resize',resize);if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',resize);else resize()})();

(function(){var s=document.createElement('style');s.textContent='@media(max-width:950px){html body header.top:has(nav.open){z-index:2147483646!important}}';document.head.appendChild(s)})();

// Swap Home and Personal Details positions in the shared header.
(function(){var s=document.createElement('style');s.id='home-personal-position-swap';s.textContent="@media(min-width:951px){html[lang=\"he\"] body header.top .navwrap nav>a[href=\"index.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:1/span 14!important}html[lang=\"he\"] body header.top .navwrap nav>a[href=\"personal.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:15/span 14!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:1/span 14!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:15/span 14!important}}@media(max-width:950px){html[lang=\"he\"] body header.top nav>a[href=\"index.html\"],html[lang=\"en\"] body header.top nav>a[data-language-switch]{order:-2!important}html body header.top nav>a[href^=\"personal\"]{order:1!important}}";document.head.appendChild(s)})();

// Give long English navigation labels comfortable space while aligning both rows.
(function(){var s=document.createElement('style');s.id='english-comfortable-nav-buttons';s.textContent="@media(min-width:951px){html[lang=\"en\"] body header.top .navwrap nav{grid-template-rows:44px 44px!important;row-gap:12px!important}html[lang=\"en\"] body header.top .navwrap{min-height:124px!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:1/span 42!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:43/span 42!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"skills-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:85/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"history-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:106/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-magic-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:127/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"work-environments-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:148/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-customer-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:169/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"service-page-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:190/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"advantages-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:211/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"contact-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:232/span 21!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"employment-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:1/span 42!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"product-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:43/span 35!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"project-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:78/span 35!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"system-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:113/span 35!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"en-05.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:148/span 35!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"en-06.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:183/span 35!important;min-height:44px!important;height:44px!important;white-space:normal!important;text-align:center!important;line-height:1.2!important}html[lang=\"en\"] body header.top .navwrap nav>a:last-child:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:218/span 35!important;height:44px!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){padding:8px 10px!important;font-size:11.5px!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"employment-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){padding:8px 10px!important;font-size:11.5px!important}}";document.head.appendChild(s)})();

(function(){var s=document.createElement('style');s.id='english-single-line-navigation';s.textContent="@media(min-width:951px){html[lang=\"en\"] body header.top .navwrap{width:calc(100% - 28px)!important;max-width:1600px!important;grid-template-columns:220px minmax(0,1fr)!important;gap:16px!important;margin-inline:auto!important}html[lang=\"en\"] body header.top .navwrap .brandBlock{min-width:220px!important}html[lang=\"en\"] body header.top .navwrap nav{max-width:none!important;width:100%!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:1/span 28!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:29/span 84!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"skills-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:113/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"history-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:162/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-magic-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:211/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"work-environments-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:260/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-customer-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:309/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"service-page-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:358/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"advantages-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:407/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"contact-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:1!important;grid-column:456/span 49!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"employment-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:1/span 84!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"product-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:85/span 70!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"project-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:155/span 70!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"system-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:225/span 70!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"en-05.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:295/span 70!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"en-06.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-row:2!important;grid-column:365/span 70!important;white-space:nowrap!important}html[lang=\"en\"] body header.top .navwrap nav>a:last-child:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:435/span 70!important;white-space:nowrap!important}}";document.head.appendChild(s)})();

(function(){var s=document.createElement('style');s.id='english-compact-nowrap';s.textContent="@media(min-width:951px) and (max-width:1150px){html[lang=\"en\"] body header.top .navwrap nav>a:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){font-size:9px!important}html[lang=\"en\"] body header.top .navwrap nav>a:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n)[href=\"personal-en.html\"],html[lang=\"en\"] body header.top .navwrap nav>a:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n)[href=\"employment-en.html\"]{font-size:10.5px!important}}";document.head.appendChild(s)})();

(function(){var s=document.createElement('style');s.id='english-compact-wider-nav';s.textContent="@media(min-width:951px) and (max-width:1150px){html[lang=\"en\"] body header.top .navwrap{grid-template-columns:170px minmax(0,1fr)!important;gap:12px!important}html[lang=\"en\"] body header.top .navwrap .brandBlock{min-width:170px!important}html[lang=\"en\"] body header.top .brand b{font-size:21px!important}html[lang=\"en\"] body header.top .brand small{font-size:10px!important}}";document.head.appendChild(s)})();

(function(){var s=document.createElement('style');s.id='english-text-proportional-columns';s.textContent="@media(min-width:951px){html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:1/span 20!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:21/span 74!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"skills-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:95/span 35!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"history-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:130/span 49!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-magic-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:179/span 58!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"work-environments-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:237/span 49!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-customer-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:286/span 42!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"service-page-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:328/span 58!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"advantages-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:386/span 58!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"contact-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:444/span 61!important}}";document.head.appendChild(s)})();

(function(){var s=document.createElement('style');s.id='english-final-aligned-columns';s.textContent="@media(min-width:951px){html[lang=\"en\"] body header.top .navwrap nav>a[href=\"index-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:1/span 26!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"personal-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:27/span 74!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"skills-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:101/span 35!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"history-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:136/span 49!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-magic-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:185/span 58!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"work-environments-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:243/span 49!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"role-customer-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:292/span 42!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"service-page-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:334/span 58!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"advantages-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:392/span 58!important}html[lang=\"en\"] body header.top .navwrap nav>a[href=\"contact-en.html\"]:nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n):nth-child(n){grid-column:450/span 55!important}}";document.head.appendChild(s)})();

// Use the standard Hebrew header container on the personal and employment pages.
(function(){if(document.documentElement.lang!=='he'||!['personal.html','employment.html'].includes(location.pathname.split('/').pop()))return;var s=document.createElement('style');s.id='profile-standard-topbar-container';s.textContent='@media(min-width:951px){html[lang="he"] body header.top .navwrap{width:min(1240px,calc(100% - 28px))!important;margin-left:auto!important;margin-right:auto!important}}';document.head.appendChild(s)})();

// Reapply after shared header rebuilds, without changing other navigation links.
(function(){function apply(){document.querySelectorAll('header.top nav>a').forEach(a=>{const label=a.textContent.trim();if(label!=='EN'&&label!=='HE')return;const target=window.__portfolioLanguageTarget();a.dataset.languageSwitch=label==='EN'?'en':'he';if(a.getAttribute('href')!==target)a.setAttribute('href',target);a.setAttribute('hreflang',label.toLowerCase());});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true});})();

// Load independent written site search on every page.
(function(){if(document.querySelector('script[data-portfolio-site-search]'))return;const script=document.createElement('script');script.src='/assets/site-search.js?v=20261113-search-3';script.dataset.portfolioSiteSearch='true';document.head.appendChild(script);})();

// Spread the brand name, role headings and phone over the complete desktop navigation area.
(function(){const style=document.createElement('style');style.id='brand-full-height-spacing';style.textContent="\nhtml body header.top .navwrap .brandBlock{gap:8px!important}\nhtml body header.top .navwrap .brandBlock .brand{display:flex!important;flex-direction:column!important;gap:10px!important}\nhtml body header.top .navwrap .brandBlock .brand b{font-size:30px!important;line-height:1.15!important;letter-spacing:0!important}\nhtml body header.top .navwrap .brandBlock .brandPhone{font-size:17px!important;line-height:1.3!important}\nhtml[lang=\"en\"] body header.top .navwrap .brandBlock .brand small{font-size:16px!important;line-height:1.45!important;white-space:normal!important}\nhtml[lang=\"he\"] body header.top .navwrap .brandBlock .brand small::after{font-size:17px!important;line-height:1.45!important}\n@media(min-width:951px){\n html body header.top .navwrap{grid-template-rows:auto auto!important;row-gap:12px!important;align-items:stretch!important;padding-top:12px!important;padding-bottom:12px!important;min-height:0!important}\n html body header.top .navwrap>.brandBlock{grid-column:1!important;grid-row:1/span 2!important;align-self:stretch!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;min-height:154px!important}\n html body header.top .navwrap .brandBlock>.brand{flex:1!important;justify-content:space-between!important;padding-bottom:10px!important}\n html body header.top .navwrap>nav{grid-column:2!important;grid-row:1!important;align-self:center!important}\n html body header.top .navwrap>#siteSearchBar{grid-column:2!important;grid-row:2!important;align-self:end!important;width:100%!important;margin:0!important;padding:0!important}\n}\n@media(min-width:951px) and (max-width:1150px){\n html[lang=\"en\"] body header.top .navwrap{grid-template-columns:220px minmax(0,1fr)!important}\n html[lang=\"en\"] body header.top .navwrap>.brandBlock{min-width:220px!important}\n html[lang=\"en\"] body header.top .navwrap .brandBlock .brand b{font-size:28px!important}\n}\n@media(max-width:950px){\n html body header.top .navwrap{padding-top:10px!important;padding-bottom:10px!important}\n html body header.top .navwrap>.brandBlock{flex:1 1 auto!important;min-width:0!important;gap:6px!important}\n html body header.top .navwrap .brandBlock .brand{gap:6px!important}\n html body header.top .navwrap .brandBlock .brand b{font-size:26px!important;line-height:1.2!important}\n html body header.top .navwrap .brandBlock .brandPhone{font-size:16px!important;line-height:1.3!important}\n html[lang=\"en\"] body header.top .navwrap .brandBlock .brand small{font-size:14.5px!important;line-height:1.45!important}\n html[lang=\"he\"] body header.top .navwrap .brandBlock .brand small::after{font-size:15.5px!important;line-height:1.45!important}\n}\n@media(min-width:1151px){\n html[lang=\"he\"] body header.top .navwrap{grid-template-columns:300px minmax(0,900px)!important}\n html[lang=\"en\"] body header.top .navwrap .brandBlock .brand b{font-size:27px!important;white-space:nowrap!important}\n}\n@media(min-width:951px) and (max-width:1150px){\n html[lang=\"he\"] body header.top .navwrap .brandBlock .brand small::after{font-size:16px!important}\n html[lang=\"en\"] body header.top .navwrap .brandBlock .brand b{font-size:27px!important;white-space:nowrap!important}\n}\n\n@media(min-width:951px){\n html body header.top .navwrap>.brandBlock{width:100%!important;max-width:none!important}\n html[lang=\"he\"] body header.top .navwrap .brandBlock .brand small{font-size:17px!important;line-height:1.45!important}\n}\nhtml body header.top .navwrap .brandBlock .brand small .brandRoleTitle{white-space:nowrap!important}\nhtml[lang=\"he\"] body header.top .navwrap .brandBlock .brand small::after{content:none!important;display:none!important}\n@media(min-width:951px) and (max-width:1150px){html[lang=\"he\"] body header.top .navwrap .brandBlock .brand small{font-size:16px!important}}\n@media(max-width:950px){html[lang=\"he\"] body header.top .navwrap .brandBlock .brand small{font-size:15.5px!important;line-height:1.45!important}}\n\nhtml body header.top .navwrap .brandBlock .brand small{color:#dce9f7!important}\n\nhtml body header.top .navwrap .brandBlock .brand small{white-space:normal!important;overflow-wrap:normal!important}\n";document.head.appendChild(style);})();

(function(){function format(){const small=document.querySelector('header.top .brand small');if(!small||small.dataset.brandRoleLabels)return;small.dataset.brandRoleLabels='true';const roles=document.documentElement.lang==='en'?['Product Manager','Project Manager','System Analyst','MAGIC Developer','Customer Success']:['מנהל מוצר','מנהל פרויקט','מנתח מערכות',"מתכנת מג'יק",'Customer Success'];small.replaceChildren();roles.forEach((title,i)=>{if(i)small.appendChild(document.createTextNode(' • '));const span=document.createElement('span');span.className='brandRoleTitle';span.textContent=title;small.appendChild(span);});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',format,{once:true});else format();new MutationObserver(format).observe(document.documentElement,{childList:true,subtree:true});})();

// Frame the navigation buttons separately from the search row.
(function(){const style=document.createElement('style');style.id='navigation-buttons-frame';style.textContent="\nhtml body header.top .navwrap>nav{outline:2px solid #74e8dd!important;outline-offset:7px!important;border-radius:12px!important}\n@media(min-width:951px){html body header.top .navwrap{row-gap:24px!important}}\n@media(max-width:950px){\n html body header.top .navwrap{flex-wrap:wrap!important}\n html body header.top .navwrap>nav.open{position:static!important;inset:auto!important;transform:none!important;flex:0 0 100%!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:none!important;grid-auto-rows:minmax(42px,auto)!important;gap:8px!important;margin:10px 0 8px!important;padding:4px!important;max-height:min(360px,45dvh)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain}\n html body header.top .navwrap>nav.open>a{grid-column:auto!important;grid-row:auto!important;position:static!important;inset:auto!important;transform:none!important;width:100%!important;max-width:none!important;min-width:0!important;box-sizing:border-box!important;min-height:42px!important;font-size:12px!important;white-space:normal!important;line-height:1.3!important;padding:8px!important}\n}\n\n@media(max-width:950px){html body header.top .navwrap{column-gap:20px!important;row-gap:12px!important}html body header.top .navwrap>.brandBlock{flex:1 1 calc(100% - 64px)!important;max-width:calc(100% - 64px)!important}html body header.top .navwrap>.menu{flex:0 0 38px!important;width:38px!important;box-sizing:border-box!important}}\n";document.head.appendChild(style);})();

(function(){
 const style=document.createElement('style');style.id='navigation-frame-title-style';style.textContent="html body header.top .navwrap{position:relative!important}#navigationFrameTitle{position:absolute;z-index:3;box-sizing:border-box;padding:0 10px;font-family:inherit;font-size:15px;font-weight:800;line-height:22px;white-space:nowrap;pointer-events:none;border-radius:3px}#navigationFrameTitle[hidden]{display:none!important}@media(min-width:951px){html body header.top .navwrap{padding-top:26px!important}}";document.head.appendChild(style);
 let label,queued=false;
 function apply(){
  queued=false;const header=document.querySelector('header.top'),wrap=header?.querySelector('.navwrap'),nav=wrap?.querySelector('nav');if(!nav)return;
  if(!label){label=document.createElement('span');label.id='navigationFrameTitle';}
  if(label.parentElement!==wrap)wrap.appendChild(label);
  const en=document.documentElement.lang==='en',text=en?'Navigation buttons':'כפתורי ניווט';if(label.textContent!==text)label.textContent=text;
  nav.setAttribute('aria-labelledby','navigationFrameTitle');
  if(!nav.getClientRects().length){label.hidden=true;return;}
  label.hidden=false;const r=nav.getBoundingClientRect(),w=wrap.getBoundingClientRect();
  label.style.top=(r.top-w.top-20)+'px';label.style.left=en?Math.max(0,r.left-w.left+16)+'px':'auto';label.style.right=en?'auto':Math.max(0,w.right-r.right+16)+'px';
  const bg=getComputedStyle(header).backgroundColor;label.style.backgroundColor=bg==='rgba(0, 0, 0, 0)'?'#0d2946':bg;label.style.color=getComputedStyle(header.querySelector('.brand b')||header).color;
 }
 function schedule(){if(queued)return;queued=true;requestAnimationFrame(apply);}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
 new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
 addEventListener('resize',schedule);addEventListener('load',schedule);setTimeout(schedule,900);
})();

// Move spacing from between navigation rows to the frame's inner margins.
(function(){const style=document.createElement('style');style.id='navigation-frame-inner-spacing';style.textContent="\n@media(min-width:951px){\n html[lang] body header.top .navwrap>nav:nth-child(n):nth-child(n):nth-child(n){row-gap:10px!important;padding:8px 10px!important;box-sizing:border-box!important;height:auto!important}\n}\n@media(max-width:950px){\n html[lang] body header.top .navwrap>nav.open:nth-child(n):nth-child(n):nth-child(n){row-gap:6px!important;padding:10px!important}\n}\n";document.head.appendChild(style);})();
