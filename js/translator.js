//#######################_Translator_#######################################################

document.addEventListener("DOMContentLoaded", function () {
  var translateButtons = document.querySelectorAll(".translate");

  translateButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.id;

      document.querySelectorAll(".lang").forEach(function (element) {
        element.textContent = arrLang[lang][element.getAttribute("key")];
      });
    });
  });
});

var arrLang = {
  // --------------_EN_-------------------------------------------------------------------
  en: {
    main_title: "you legal solutions provider",
    about: "about us",
    services: "services",
    team: "team",
    publications: "publications",
    contact: "contact",
    section_right_title: "We turn the idea of legal services    ",
    section_right_text:
      "Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine.",
    Consistent: "Consistent",
    Customer: "Customer oriented",
    Innovative: "Innovative",
    Business: "Business oriented",
    services__title: "What can we do better than others?",
    services__text: "Services >",
    services_card_title_1: "IT and e-commerce",
    services_card_title_2: "Comprehensive daily legal support",
    services_card_title_3: "Structuring corporate relationships",
    services_card_title_4: "Building contractual relations",
    services_card_title_5: "Protection of business, intellectual property",
    services_card_title_6: "Judicial representation",
    services_card_text_1:
      "An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer.",
    services_card_text_2:
      "In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
    services_card_text_3:
      "Instead of just providing legal services, we will hire a lawyer or a whole team that will fit into the daily life of your company.",
    services_card_text_4:
      "Once a week, or week after month, you have your own lawyer by your side. Anyone in the company can catch it at the coffee maker and just talk about current affairs instead of waiting for update status.",
    services_card_text_5:
      "And all the other time he will work on new diverse projects, so he will definitely not stop in professional development. One way or another, all Axon Partners will work for you instead of a corporate lawyer.",
    services_card_text_6:
      "Is it a small, medium-sized company or a market leader? Local business or multinational company? Do you have your own legal department or not?",
    team_title: "team >",
    team_text:
      " We are used to taking responsibility and always we guarantee honest, timely assistance, even in situations when the majority is powerless.",
    team_text_name: "Oleksandr Oleksandrovskyi",
    team_text_name_2: "Managing partner",
    team_text_2:
      " Do you want to paint something useful? First, tear out a piece of paper from your notebook. And in silence on a piece...",
    team_text_name_2: "Oksana Kobzar",
    team_text_name_2_2: " Equity partner, Attorney-at-law",
    team_text_3:
      "  A beetle and a crayfish met at the river Speak small words. Find out who is stronger Who has the longest mustache?",
    team_text_name_3: "Vladislav Melnik",
    team_text_name_2_3: " Associate",
    They_already_trust_us: "They already trust us",
    publications__title: "Publications >",
    publications_h2: "We have something to tell",
    publications__title_2_1: "Equity associate",
    publications__data_1: "April 22",
    publications__text_1:
      "I'm a jun on projects. I am a co-owner of a law firm. How it happened. Before entering my parents told me that if I…",
    publications__title_2_2:
      " Penalty for the Good Corporation: what will happen to Google and others for violating the GDPR",
    publications__data_2: "September 29",
    publications__text_2:
      "And why the recovery of 50 million euros could be a fateful precedent According to Mind.ua January 21 National Commission for Data Protection.",
    publications__title_2_3: "Millennial Testament",
    publications__data_3: "August 19",
    publications__text_3:
      "What and how modern vloggers, opinion leaders and crypto-millionaires will inherit A typical legacy of the Ukrainian generation X looks like this: an apartment in…",
    publications__title_2_4: "Language Law: How to Make Your Website Relevant",
    publications__data_4: " August 19",
    publications__text_4:
      " Natalia Kyryk, head of content studio Word factory.ua First, it's beautiful! This is the number one argument in favor of the Ukrainian-language site.Secondly, it is effective. IN…",
    publications__title_2_5:
      "Reimbursement of the child's tuition fees in kindergarten and school",
    publications__data_5: "February 5, 2018",
    publications__text_5:
      "What we are talking about In June this year, the Verkhovna Rada amended the Tax Code of Ukraine. From now on, parents who receive an official…",
    publications__title_2_6:
      "Currency control is dead, long live currency control!",
    publications__data_6: "June 14, 2018",
    publications__text_6:
      "Experts hold conferences, round tables and other events on 'liberalization of currency legislation.'Lawyers-experts-novelists rub their fingers about 'ctrl + c / ctrl + v'.",
    section_1__title: "We turn over the idea of legal services",
    section_1__text:
      " Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve the adoption of a number of decisions that are important for the industry. Many people form the practice of applying the law of the sea in Ukraine. HLEGAL is a reliable business partner, confirmed by stable cooperation with international law firms, the trust of large Ukrainian and international companies, and the recognition of professional ratings.",
    flag_text: "years of relevant experience",
    case_text:
      "active clients who entrust us with their orders on a monthly basis",
    star_text: "hours of pro bono work annually",
    team_title: "TEAM",
    section__text:
      "The historically unchanged legal profession has begun to reformat in recent years. Clients are feeling this, but law firms are still resisting evolution. Clients need convenience, simplicity, transparent payment. Google, IBM WatsOn, Symantec Clearwell prove that the technological revolution in legal services has begun and is imminent Quality is what we care about the most. It's simple. If you are unhappy with our work, we will refund your money. We trust our clients. And we want our clients to trust us too.",
    section__title: "Quality is what we care about the most.",
    achievements: "achievements",
    map: "ON MAP",
    publications__button: "More publications",
    section_2__title: "We would like to help you",
    section_2__title_2: "How to answer you?",
    main__button: "Send message",
    team__main__title:
      " We are used to taking responsibility and always guarantee honest,timely assistance, even in situations where most are powerless.",
    employee_profile__title_name_1: " Alexander Alexandrovsky",
    employee_profile__text_name_1: "Managing partner",
    employee_profile__title_name_2: " Evgeniy Patrikov",
    employee_profile__text_name_2: "Equity partner, Attorney-at-law",
    employee_profile__title_name_3: "Vladislav Melnik",
    employee_profile__text_name_3: "Associate",
    employee_profile__title_name_4: "Sergey Binn",
    employee_profile__text_name_4: "Associate",
    employee_profile__title_name_5: " Oksana Kobzar",
    employee_profile__text_name_5: "Equity partner, Attorney-at-law",
    employee_profile__title_name_6: "Julia Wolk",
    employee_profile__text_name_6: "  Associate, Attorney-at-law",
    oksana_kobzar__title: "Oksana Kobzar",
    oksana_kobzar__text_1:
      "Oksana heads the practice of international trade and shipping. He specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.",
    oksana_kobzar__text_2:
      "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.",
    oksana_kobzar__text_3:
      "National University 'Odessa Law Academy', Master of Law.",
    oksana_kobzar__text_4:
      "Her professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Danilo also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine",
    oksana_kobzar__title_2_1: "EDUCATION",
    oksana_kobzar__title_2_2: "EXPERIENCE",
    gdrp__title:
      " Penalty for the Good Corporation: what will happen to Google and others for violating the GDPR",
    gdrp__data: "September 29",
    gdrp__text_1:
      "On January 21, the French National Data Protection Commission (CNIL) announced on its website that it had fined Google for violating the EU's General Data Protection Regulation (GDPR). It took six months for the EU countries to make a quality level-up in the amount of fines for non-compliance with this standard. Prior to that, the fine was mainly € 20,000-30,000, with the largest fine amounting to € 400,000 and related to a hospital in Portugal. But this precedent is interesting not so much the amount of the fine as the rigidity of the regulator's approaches. Denis Beregovyi, Axon Partners, explains why, especially for Mind.",
    gdrp__text_2:
      " For what? The group complaints against Google arrived at CNIL on the same day that the GDPR came into force. The complainants reported that Google processed users' personal data without due cause, in particular to create personalized advertising offers.",
    gdrp__text_3:
      "1. Transparency and awareness of users about the processing of personal data.",
    gdrp__text_4:
      "2. Lack of proper user consent for the processing of personal data for the purpose of personalizing advertising.",
    gdrp__text_5:
      " In the case of personalization of advertising, Google was sure to obtain the consent of users, because, firstly, when creating Google accounts, the user agrees to the Privacy Policy, and secondly, Google has a section 'Ads personalization', where you can disable this feature.",
    gdrp__text_6:
      " This is what the ad personalization settings window in your Google Account looks like",
    gdrp__text_7:
      " However, CNIL does not think so, because the information about the personalization of advertising is not clear enough to users. As an example, the Commission claims that the relevant 'Personalization' window does not contain information on the full range of Google services that collect and process personal data for this purpose (YouTube, Google search, Play Store, Google pictures, Gmail, etc.), and therefore, the user cannot realize to what extent the data is used and how exactly they can be combined.",
    gdrp__text_8:
      "Why France and not Ireland. Google operates in Europe through a legal entity in Ireland. But the case was not initiated by the Irish, but by the French regulator. This is why it happened.",
    gdrp__text_9:
      "  If data processing decisions are taken anywhere outside the EU, there is a one-stop mechanism - where the complaint is received, the body considers it. Because Google's data processing center is located in the United States and the complaint was first received in France, CNIL considered it.",
    gdrp__title:
      " Penalty for the Good Corporation: what will happen to Google and others for violating the GDPR",
    gdrp__title_2:
      "To the attention of Ukrainian security officers: the inspection was conducted online, without searches, without seizure of servers or other visible interference for business. And so it was possible.",
    gdrp__title_3:
      "According to the results of CNIL inspections revealed violations of two requirements of the GDPR:",
    gdrp__title_4: " So, let's walk through the text of the CNIL decision",
    it_and_e_commerce__title: " IT and e-commerce",
    it_and_e_commerce__text_1:
      " An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer.",
    it_and_e_commerce__text_2:
      "In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.",
    it_and_e_commerce__button: "Free consultation",
    services_in_area__text_1:
      "support of investment projects for the development of port infrastructure;",
    services_in_area__text_2:
      "certification of GTS, entering information about them in mandatory databases and registers;",
    services_in_area__text_3:
      "registration of permits for the construction of port terminals;",
    services_in_area__text_4:
      "registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.);",
    services_in_area__text_5:
      "support of procedures related to the lease of state property in the port;",
    services_in_area__text_6:
      "support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line;",
    services_in_area__text_7:
      "support of procedures related to the inclusion of the company within the port;",
    services_in_area__text_8:
      "appeals against actions related to the illegal imposition of services in the port by monopoly companies.",
    form__title: "We would like to help you",
  },
  // --------------_RU_---------------------------------------------------------------------
  ru: {
    main_title: "вы, поставщик юридических решений",
    about: "о нас",
    services: "услуги",
    team: "команда",
    publications: "публикации",
    contact: "контакт",
    section_right_title: "Переворачиваем идею юридических услуг",
    section_right_text:
      "Объединив многолетний опыт и практику, компания Юристы компании сопровождают сложные проекты и добиваются ряд важных решений для отрасли. Многие из них сформировать практику применения морского права в Украине.",
    Consistent: "Последовательный",
    Customer: "Ориентированной на клиента",
    Innovative: "Инновационный",
    Business: "Бизнес-ориентированный",
    services__title: "Что мы можем сделать лучше, чем другие?",
    services__text: "Услуги >",
    services_card_title_1: "ИТ и электронная коммерция",
    services_card_title_2: "Комплексная ежедневная юридическая поддержка",
    services_card_title_3: "Структурирование корпоративных отношений",
    services_card_title_4: "Построение договорных отношений",
    services_card_title_5: "Защита бизнеса, интеллектуальной собственности",
    services_card_title_6: "Судебное представительство",
    services_card_text_1:
      "Бесконечный поток договоров, вопросы налогообложения, трудовые отношения, корпоративные бумаги – юридическая работа отвлекает от ведения бизнеса. Но чтобы нанять штатного юриста, не так уж и много работы.",
    services_card_text_2:
      "К тому же, со временем работа станет однотипной и неинтересной для штатного юриста. И мы прекрасно знаем, как сложно найти в Украине хорошего кандидата с опытом работы в сфере информационных технологий.",
    services_card_text_3:
      "Вместо того, чтобы просто оказывать юридические услуги, мы наймем юриста или целую команду, которая впишется в повседневную жизнь вашей компании.",
    services_card_text_4:
      "Раз в неделю или неделю за месяцем рядом с вами находится собственный адвокат. Любой в компании может поймать его у кофеварки и просто поговорить о текущих делах, вместо того, чтобы ждать обновления статуса.",
    services_card_text_5:
      "А все остальное время он будет работать над новыми разноплановыми проектами, поэтому в профессиональном развитии точно не остановится. Так или иначе, все Axon Partners будут работать на вас вместо корпоративного юриста.",
    services_card_text_6:
      "Это малая, средняя компания или лидер рынка? Местный бизнес или транснациональная компания? Есть ли у вас свой юридический отдел или нет?",
    team_title: "команда >",
    team_text:
      "Мы привыкли брать на себя ответственность и всегда гарантируем честную, своевременную помощь...",
    team_text_name: "Александр Александровский",
    team_text_name_2: "Управляющий партнер",
    team_text_2:
      "Хочешь покрасить полезное что-то? Вырви сначала листок из блокнота И в тишине на листке из блокнота ты не спеша нарисуй бегемота.",
    team_text_name_2: "Оксана Кобзарь",
    team_text_name_2_2: "Долевой партнер, Адвокат",
    team_text_3:
      "Жук и рак сошлись у речки. Разговаривать словечки. Выясняли, кто сильней, У кого усы длинней.",
    team_text_name_3: "Владислав Мельник",
    team_text_name_2_3: "Партнер",
    They_already_trust_us: "Нам уже доверяют",
    publications__title: "Публикации >",
    publications_h2: "Нам есть что рассказать",
    publications__title_2_1: "Партнер по акциям",
    publications__data_1: "22 апреля",
    publications__text_1:
      "Я специалист по проектам. Я совладелец юридической фирмы. Как это произошло. Перед входом мои родители сказали мне, что если я…",
    publications__title_2_2:
      "Штраф для хорошей корпорации: что будет с Google и другими за нарушение GDPR",
    publications__data_2: "29 сентября",
    publications__text_2:
      "И почему взыскание 50 миллионов евро может стать судьбоносным прецедентом», - сообщает Mind.ua от 21 января Национальной комиссии по защите данных.",
    publications__title_2_3: "Тысячелетний Завет",
    publications__data_3: "19 августа",
    publications__text_3:
      "Что и как унаследуют современные видеоблогеры, лидеры мнений и криптомиллионеры. Типичное наследие украинского поколения X выглядит так: квартира в…",
    publications__title_2_4: "Языковое право: как сделать ваш сайт релевантным",
    publications__data_4: "19 августа",
    publications__text_4:
      "Наталия Кирик, руководитель контент-студии Word Factory.ua Во-первых, это красиво! Это аргумент номер один в пользу украиноязычного сайта. Во-вторых, это эффективно. В…",
    publications__title_2_5:
      "Компенсация платы за обучение ребенка в детском саду и школе",
    publications__data_5: "5 февраля 2018 г.",
    publications__text_5:
      "О чем мы говорим В июне этого года Верховная Рада внесла изменения в Налоговый кодекс Украины. Отныне родители, которые получают должностное…",
    publications__title_2_6:
      "Валютный контроль мертв, да здравствует валютный контроль!",
    publications__data_6: "14 июня 2018 г",
    publications__text_6:
      "Эксперты проводят конференции, круглые столы и другие мероприятия по «либерализации валютного законодательства». Юристы-эксперты-романисты потирают пальцы о «ctrl+c/ctrl+v».",
    section_1__title: "Переворачиваем представление о юридических услугах",
    section_1__text:
      "Объединяя многолетний опыт и практику, юристы компании сопровождают сложные проекты и добиваются принятия ряда важных для отрасли решений. В Украине формируется практика применения морского права у многих. HLEGAL – надежный деловой партнер, подтвержденный стабильным сотрудничеством с международными юридическими фирмами, доверием крупных украинских и международных компаний, признанием профессиональных рейтингов.",
    flag_text: "лет соответствующего опыта",
    case_text: "активных клиентов, которые ежемесячно доверяют нам свои заказы",
    star_text: "часов бесплатной работы ежегодно",
    team_title: "КОМАНДА",
    section__text:
      "Исторически неизменная адвокатура в последние годы начала переформатироваться. Клиенты это чувствуют, но юридические фирмы все еще сопротивляются эволюции. Клиентам нужно удобство, простота, прозрачная оплата. Google, IBM WatsOn, Symantec Clearwell доказывают, что технологическая революция в сфере юридических услуг началась и неминуема. Качество – это то, о чем мы заботимся больше всего. Все просто. Если вы недовольны нашей работой, мы вернем вам деньги. Мы доверяем нашим клиентам. И мы хотим, чтобы наши клиенты тоже доверяли нам.",
    section__title: "Качество – это то, о чем мы заботимся больше всего.",
    achievements: "достижения",
    map: "НА КАРТУ",
    publications__button: "Больше публикаций",
    section_2__title: "Мы хотели бы помочь вам",
    section_2__title_2: "Как вам ответить?",
    main__button: "Отправить сообщение",
    team__main__title:
      "Мы привыкли брать на себя ответственность и всегда гарантируем честную, своевременную помощь, даже в ситуациях, когда большинство бессильны.",
    employee_profile__title_name_1: "Александр Александровский",
    employee_profile__text_name_1: "Управляющий партнер",
    employee_profile__title_name_2: "Евгений Патриков",
    employee_profile__text_name_2: "Долевой партнер, адвокат",
    employee_profile__title_name_3: "Владислав Мельник",
    employee_profile__text_name_3: "Сотрудник",
    employee_profile__title_name_4: "Сергей Бинн",
    employee_profile__text_name_4: "Сотрудник",
    employee_profile__title_name_5: "Оксана Кобзарь",
    employee_profile__text_name_5: "Долевой партнер, адвокат",
    employee_profile__title_name_6: "Джулия Волк",
    employee_profile__text_name_6: "Младший юрист, адвокат",
    oksana_kobzar__title: "Оксана Кобзарь",
    oksana_kobzar__text_1:
      "Оксана возглавляет практику международной торговли и судоходства. Специализируется на разрешении споров, связанных с куплей-продажей сырья и транспортировкой грузов морским транспортом.",
    oksana_kobzar__text_2:
      "Десис представляет интересы судовладельцев, экспедиторов, грузовладельцев, экспедиторов, контейнерных линий, а также международных банков и клубов ",
    oksana_kobzar__text_3:
      "Национальный университет «Одесская юридическая академия», магистр права.",
    oksana_kobzar__text_4:
      "Ее профессиональный опыт включает разрешение споров по английскому праву и представление интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Данило также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАЦ при ТПП Украины.",
    oksana_kobzar__title_2_1: "ОБРАЗОВАНИЕ",
    oksana_kobzar__title_2_2: "ОПЫТ",
    gdrp__title:
      "Штраф для хорошей корпорации: что будет с Google и другими за нарушение GDPR",
    gdrp__data: "29 сентября",
    gdrp__text_1:
      "21 января Национальная комиссия по защите данных Франции (CNIL) объявила на своем сайте, что оштрафовала Google за нарушение Общего регламента ЕС по защите данных (GDPR). Странам ЕС потребовалось шесть месяцев, чтобы повысить уровень качества. в размере штрафов за несоблюдение этого стандарта.До этого штраф составлял в основном €20 000-30 000, причем самый крупный штраф составлял €400 000 и касался больницы в Португалии.Но этот прецедент интересен не столько размер штрафа как жесткость подходов регулятора. Денис Береговой, Axon Partners, объясняет почему, особенно для Mind.",
    gdrp__text_2:
      "За что? Групповые жалобы на Google поступили в CNIL в тот же день, когда вступил в силу GDPR. Истцы сообщили, что Google обрабатывала персональные данные пользователей без уважительной причины, в частности, для создания персонализированных рекламных предложений.",
    gdrp__text_3:
      "1. Прозрачность и осведомленность пользователей об обработке персональных данных.",
    gdrp__text_4:
      "2. Отсутствие надлежащего согласия пользователя на обработку персональных данных в целях персонализации рекламы.",
    gdrp__text_5:
      "В случае персонализации рекламы компания Google обязательно получала согласие пользователей, поскольку, во-первых, при создании аккаунтов Google пользователь соглашается с Политикой конфиденциальности, а во-вторых, у Google есть раздел «Персонализация рекламы», где вы можете можете отключить эту функцию.",
    gdrp__text_6:
      "Вот так выглядит окно настроек персонализации рекламы в вашем аккаунте Google",
    gdrp__text_7:
      "Однако в CNIL так не считают, поскольку информация о персонализации рекламы недостаточно понятна пользователям. В качестве примера Комиссия утверждает, что соответствующее окно «Персонализация» не содержит информации о полном спектре сервисов Google, которые собирать и обрабатывать для этой цели персональные данные (YouTube, поиск Google, Play Store, картинки Google, Gmail и т. д.), в связи с чем пользователь не может осознавать, в какой степени данные используются и как именно их можно объединить.",
    gdrp__text_8:
      "Почему Франция, а не Ирландия. Google работает в Европе через юридическое лицо в Ирландии. Но дело было инициировано не ирландским, а французским регулятором. Вот почему так и произошло.",
    gdrp__text_9:
      "Если решения об обработке данных принимаются где-либо за пределами ЕС, существует единый механизм — там, где жалоба получена, орган ее рассматривает. Потому что центр обработки данных Google находится в США, а жалоба впервые была получена во Франции. CNIL рассмотрел это.",
    gdrp__title:
      "Штраф для хорошей корпорации: что будет с Google и другими за нарушение GDPR",
    gdrp__title_2:
      "Вниманию украинских силовиков: проверка проводилась онлайн, без обысков, без захвата серверов и иного видимого вмешательства в бизнес. И так было возможно",
    gdrp__title_3:
      "По результатам проверок CNIL выявлены нарушения двух требований GDPR:",
    gdrp__title_4: "Итак, давайте пройдемся по тексту решения CNIL",
    it_and_e_commerce__title: "ИТ и электронная коммерция",
    it_and_e_commerce__text_1:
      "Бесконечный поток договоров, вопросы налогообложения, трудовые отношения, корпоративные бумаги – юридическая работа отвлекает от ведения бизнеса. Но чтобы нанять штатного юриста, не так уж и много работы.",
    it_and_e_commerce__text_2:
      "К тому же, со временем работа станет однотипной и неинтересной для штатного юриста. И мы прекрасно знаем, как сложно найти в Украине хорошего кандидата с опытом работы в сфере информационных технологий.",
    gt: "Бесплатная консультация",
    it_and_e_commerce__button: "Бесплатная консультация",
    services_in_area__text_1:
      "поддержка инвестиционных проектов по развитию портовой инфраструктуры;",
    services_in_area__text_2:
      "сертификация ГТС, внесение сведений о них в обязательные базы данных и реестры;",
    services_in_area__text_3:
      "оформление разрешений на строительство портовых терминалов;",
    services_in_area__text_4:
      "оформление разрешительной и другой обязательной документации, необходимой для осуществления деятельности в порту (разрешение на выбросы, заключение ОВОС, РТК и т.д.);",
    services_in_area__text_5:
      "сопровождение процедур, связанных с арендой государственного имущества в порту;",
    services_in_area__text_6:
      "сопровождение процедур, связанных с подтверждением статуса портового оператора, морского агента, иностранной парусной линии;",
    services_in_area__text_7:
      "сопровождение процедур, связанных с включением компании в состав порта;",
    services_in_area__text_8:
      "обжалование действий, связанных с незаконным навязыванием услуг в порту компаниями-монополистами.",
    form__title: "Мы хотели бы помочь вам",
  },
  // --------------_UA_---------------------------------------------------------------------
  ua: {
    main_title: "ви, постачальник юридичних рішень",
    about: "о нас",
    services: "послуги",
    team: "команда",
    publications: "публікації",
    contact: "контакт",
    section_right_title: "Перевертаємо ідею юридичних послуг",
    section_right_text:
      "Об'єднавши багаторічний досвід та практику, компанія Юристи компанії супроводжують складні проекти та домагаються низку важливих рішень для галузі. Багато хто з них сформуватиме практику застосування морського права в Україні.",
    Consistent: "Послідовний",
    Customer: "Орієнтована на клієнта",
    Innovative: "Інноваційний",
    Business: "Бізнес-орієнтованийs",
    services__title: "Що ми можемо робити краще за інших?",
    services__text: "Послуги",
    services_card_title_1: "ІТ та електронна комерція",
    services_card_title_2: "Комплексний щоденний юридичний супровід",
    services_card_title_3: "Структурування корпоративних відносин",
    services_card_title_4: "Побудова договірних відносин",
    services_card_title_5: "Захист бізнесу, інтелектуальної власності",
    services_card_title_6: "Judicial representation",
    services_card_text_1:
      "Нескінченний потік договорів, податкові питання, трудові відносини, корпоративні документи - юридична робота відволікає від ведення бізнесу. Але тут не так вже й багато роботи, щоб найняти штатного юриста.",
    services_card_text_2:
      "Крім того, з часом робота стане однотипною і нецікавою для штатного юриста. І ми добре знаємо, як важко в Україні знайти хорошого кандидата з досвідом роботи у сфері інформаційних технологій.",
    services_card_text_3:
      "Замість того, щоб просто надавати юридичні послуги, ми наймемо юриста або цілу команду, яка впишеться в повсякденне життя вашої компанії.",
    services_card_text_4:
      "Раз на тиждень або тиждень за місяцем у вас є власний адвокат. Будь-хто в компанії може зловити це за кавоваркою і просто поговорити про поточні справи, а не чекати оновлення статусу.",
    services_card_text_5:
      "А весь інший час працюватиме над новими різноплановими проектами, тому точно не зупиниться у професійному розвитку. Так чи інакше, всі Axon Partners працюватимуть на вас замість корпоративного юриста.",
    services_card_text_6:
      "Is it a small, medium-sized company or a market leader? Local business or multinational company? Do you have your own legal department or not?",
    team_title: "команда >",
    team_text:
      "Ми звикли брати на себе відповідальність та завжди гарантуємо чесну, вчасну допомогу...",
    team_text_name: "Олександр Олександровський",
    team_text_name_2: "Керуючий партнер",
    team_text_2:
      "Хочеш пофарбувати щось корисне? Вирви спочатку листок з блокнота І в тиші на листку з блокнота ти не поспішаючи намалюй бегемота.",
    team_text_name_2: "Оксана Кобзар",
    team_text_name_2_2: "Пайовий партнер, Адвокат",
    team_text_3:
      "Жук і рак зійшлися біля річки. Розмовляти слівця. З'ясовували, хто сильніший, У кого вуса довші.",
    team_text_name_3: "Владислав Мельник",
    team_text_name_2_3: "Партнер",
    They_already_trust_us: "Нам вже довіряють",
    publications__title: "Публікації >",
    publications_h2: "Нам є що розповісти",
    publications__title_2_1: "Партнер з акцій",
    publications__data_1: "22 квітня",
    publications__text_1:
      "Я фахівець із проектів. Я співвласник юридичної фірми. Як це відбулося. Перед входом мої батьки сказали мені, що коли я…",
    publications__title_2_2:
      "Штраф для доброї корпорації: що буде з Google та іншими за порушення GDPR",
    publications__data_2: "29 вересня",
    publications__text_2:
      "І чому стягнення 50 мільйонів євро може стати доленосним прецедентом. Mind.ua 21 січня НКРЕКП.",
    publications__title_2_3: "Тисячолітній заповіт",
    publications__data_3: "19 серпня",
    publications__text_3:
      "Що і як успадкують сучасні відеоблогери, лідери думок і криптомільйонери. Типовий спадок українського покоління Х виглядає так: квартира в…",
    publications__title_2_4: "Закон про мову: як зробити свій сайт актуальним",
    publications__data_4: "19 серпня",
    publications__text_4:
      "Наталія Кирик, керівник контент-студії Word factory.ua По-перше, це красиво! Це аргумент номер один на користь україномовного сайту. По-друге, це ефективно. В…",
    publications__title_2_5:
      "Відшкодування плати за навчання дитини в дитячому садку та школі",
    publications__data_5: "5 лютого 2018",
    publications__text_5:
      "Про що ми говоримо У червні цього року Верховна Рада внесла зміни до Податкового кодексу України. Відтепер батьки, які отримують офіційну…",
    publications__title_2_6:
      "Валютний контроль мертвий, хай живе валютний контроль!",
    publications__data_6: "14 червня 2018",
    publications__text_6:
      "Експерти проводять конференції, круглі столи та інші заходи на тему «лібералізації валютного законодавства». Юристи-експерти-романисти потирають пальці про «ctrl + c / ctrl + v».",
    section_1__title: "Перевертаємо уявлення про юридичні послуги",
    section_1__text:
      "Поєднуючи багаторічний досвід та практику, юристи компанії супроводжують складні проекти та домагаються прийняття низки важливих для галузі рішень. В Україні формується практика застосування морського права у багатьох. HLEGAL – надійний діловий партнер, підтверджений стабільною співпрацею з міжнародними юридичними фірмами, довірою великих українських та міжнародних компаній, визнанням професійних рейтингів.",
    flag_text: "років відповідного досвіду",
    case_text: "активних клієнтів, які щомісяця довіряють нам свої замовлення",
    star_text: "годин безкоштовної роботи щорічно",
    team_title: "КОМАНДА",
    section__text:
      "Історично незмінна адвокатура останніми роками почала переформатуватися. Клієнти це відчувають, але юридичні фірми досі опираються еволюції. Клієнтам потрібна зручність, простота, прозора оплата. Google, IBM WatsOn, Symantec Clearwell доводять, що технологічна революція у сфері юридичних послуг розпочалася і неминуча. Якість – це те, що ми піклуємося найбільше. Все просто. Якщо ви незадоволені нашою роботою, ми повернемо гроші. Ми довіряємо нашим клієнтам. І ми хочемо, щоб наші клієнти також довіряли нам.",
    section__title: "Якість – це те, що ми піклуємося найбільше.",
    achievements: "досягнення",
    map: "НА КАРТУ",
    publications__button: "Більше публікацій",
    section_2__title: "Ми хотіли б допомогти вам",
    section_2__title_2: "Як вам відповісти?",
    main__button: "Надіслати повідомлення",
    team__main__title:
      "Ми звикли брати на себе відповідальність і завжди гарантуємо чесну, своєчасну допомогу навіть у ситуаціях, коли більшість безсилі.",
    employee_profile__title_name_1: "Олександр Олександрівський",
    employee_profile__text_name_1: "Керуючий партнер",
    employee_profile__title_name_2: "Євген Патріков",
    employee_profile__text_name_2: "Пайовий партнер, адвокат",
    employee_profile__title_name_3: "Владислав Мельник",
    employee_profile__text_name_3: "Співробітник",
    employee_profile__title_name_4: "Сергій Бін",
    employee_profile__text_name_4: "Співробітник",
    employee_profile__title_name_5: "Оксана Кобзар",
    employee_profile__text_name_5: "Пайовий партнер, адвокат",
    employee_profile__title_name_6: "Джулія Вовк",
    employee_profile__text_name_6: "Молодший юрист, адвокат",
    oksana_kobzar__title: "Оксана Кобзар",
    oksana_kobzar__text_1:
      "Оксана очолює практику міжнародної торгівлі та судноплавства. Спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та транспортуванням вантажів морським транспортом.",
    oksana_kobzar__text_2:
      "Десис представляє інтереси судновласників, експедиторів, вантажовласників, експедиторів, контейнерних ліній, а також міжнародних банків та клубів",
    oksana_kobzar__text_3:
      "Національний університет 'Одеська юридична академія', магістр права.",
    oksana_kobzar__text_4:
      "Її професійний досвід включає вирішення спорів з англійського права та представлення інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Данило також представляє інтереси клієнтів у державних судах України з аналогічних спорів, а також у МКАС та МАЦ при ТПП України.",
    oksana_kobzar__title_2_1: "ОСВІТА",
    oksana_kobzar__title_2_2: "ДОСВІД",
    gdrp__title:
      "Штраф для хорошої корпорації: що буде з Google та іншими за порушення GDPR",
    gdrp__data: "29 вересня",
    gdrp__text_1:
      "21 січня Національна комісія із захисту даних Франції (CNIL) оголосила на своєму сайті, що оштрафувала Google за порушення Загального регламенту ЄС із захисту даних (GDPR). Країнам ЄС знадобилося шість місяців, щоб підвищити рівень якості. у розмірі штрафів за недотримання цього стандарту .До цього штраф становив в основному €20 000-30 000, причому найбільший штраф становив €400 000 і стосувався лікарні в Португалії.Але цей прецедент цікавий не так розмір штрафу як жорсткість підходів регулятора. особливо для Mind.",
    gdrp__text_2:
      "За що? Групові скарги на Google надійшли до CNIL того ж дня, коли набрав чинності GDPR. Позивачі повідомили, що Google обробляла персональні дані користувачів без поважної причини, зокрема для створення персоналізованих рекламних пропозицій.",
    gdrp__text_3:
      "1. Прозорість та обізнаність користувачів щодо обробки персональних даних.",
    gdrp__text_4:
      "2. Відсутність належної згоди користувача на обробку персональних даних з метою персоналізації реклами.",
    gdrp__text_5:
      "У випадку персоналізації реклами компанія Google обов'язково отримувала згоду користувачів, оскільки, по-перше, при створенні облікових записів Google користувач погоджується з Політикою конфіденційності, а по-друге, Google має розділ 'Персоналізація реклами', де ви можете відключити цю функцію. ",
    gdrp__text_6:
      "Ось так виглядає вікно налаштувань персоналізації реклами у вашому обліковому записі Google",
    gdrp__text_7:
      "Проте в CNIL так не вважають, оскільки інформація про персоналізацію реклами недостатньо зрозуміла користувачам. Як приклад Комісія стверджує, що відповідне вікно 'Персоналізація' не містить інформації про повний спектр сервісів Google, які збирати та обробляти для цієї мети персональні дані (YouTube, пошук Google, Play Store, картинки Google, Gmail і т.д.), у зв'язку з чим користувач не може усвідомлювати, якою мірою дані використовуються і як саме їх можна об'єднати.",
    gdrp__text_8:
      "Чому Франція, а не Ірландія. Google працює в Європі через юридичну особу в Ірландії. Але справа була ініційована не ірландським, а французьким регулятором. Ось чому так і сталося.",
    gdrp__text_9:
      "Якщо рішення про обробку даних приймаються десь за межами ЄС, існує єдиний механізм - там, де скаргу отримано, орган її розглядає. Тому що центр обробки даних Google знаходиться в США, а скарга вперше була отримана у Франції. CNIL розглянув це. ",
    gdrp__title:
      "Штраф для хорошої корпорації: що буде з Google та іншими за порушення GDPR",
    gdrp__title_2:
      "До уваги українських силовиків: перевірка проводилася онлайн, без обшуків, без захоплення серверів та іншого видимого втручання у бізнес. І так було можливо",
    gdrp__title_3:
      "За результатами перевірок CNIL виявлено порушення двох вимог GDPR:",
    gdrp__title_4: "Отже, давайте пройдемося за текстом рішення CNIL",
    it_and_e_commerce__title: "ІТ та електронна комерція",
    it_and_e_commerce__text_1:
      "Нескінченний потік договорів, питання оподаткування, трудові відносини, корпоративні папери – юридична робота відволікає від бізнесу. Але щоб найняти штатного юриста, не так багато роботи.",
    it_and_e_commerce__text_2:
      "До того ж, згодом робота стане однотипною та нецікавою для штатного юриста. І ми чудово знаємо, як складно знайти в Україні хорошого кандидата з досвідом роботи у сфері інформаційних технологій.",
    it_and_e_commerce__button: "Безкоштовна консультація",
    services_in_area__text_1:
      "підтримка інвестиційних проектів щодо розвитку портової інфраструктури;",
    services_in_area__text_2:
      "сертифікація ГТС, внесення відомостей про них до обов'язкових баз даних та реєстру;",
    services_in_area__text_3:
      "оформлення дозволів на будівництво портових терміналів;",
    services_in_area__text_4:
      "оформлення дозвільної та іншої обов'язкової документації, необхідної для здійснення діяльності в порту (дозвіл на викиди, укладання ОВНС, РТК тощо);",
    services_in_area__text_5:
      "супровід процедур, пов'язаних з орендою державного майна в порту;",
    services_in_area__text_6:
      "супровід процедур, пов'язаних із підтвердженням статусу портового оператора, морського агента, іноземної вітрильної лінії;",
    services_in_area__text_7:
      "супровід процедур, пов'язаних із включенням компанії до складу порту;",
    services_in_area__text_8:
      "оскарження дій, пов'язаних із незаконним нав'язуванням послуг у порту компаніями-монополістами.",
    form__title: "Ми хочемо допомогти вам",
  },
};
