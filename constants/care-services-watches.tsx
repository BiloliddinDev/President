import { tabsType } from "./care-services-items";


export const writingInstruments: tabsType[] = [
  {
    id: 1,
    value: "item-1",
    accordionTrigger: {
      uz: "Parvarish bo‘yicha tavsiyalar",
      ru: "Рекомендации по уходу",
      en: "Care Recommendations",
      tj: "Тавсияҳо оид ба нигоҳдорӣ",
      az: "Baxım Tövsiyələri",
    },
    accordionContent: {
      uz: `<ul>
        <li>Soatni yumshoq mato va iliq sovunli suv bilan tozalang (agar bilaguzugi charm bo‘lmasa).</li>
        <li>Shor suv bilan aloqa qilganidan so‘ng, toza suv bilan yuving va yaxshilab quriting.</li>
        <li>Mexanizmini har 3–4 yilda bir marta sertifikatlangan xizmat markazida tekshirib turing.</li>
      </ul>
      <p style="font-weight: bold; margin-top: 16px;">Quyidagilardan saqlaning:</p>
      <ul>
        <li>Keskin harorat o‘zgarishlari va haddan tashqari issiq/sovuq (0°C dan past / 60°C dan yuqori).</li>
        <li>Kuchli magnit maydonlar (telefonlar, muzlatgichlar va boshqalar).</li>
        <li>Kuchli zarbalar va urilishlar.</li>
        <li>Kosmetika, atir, erituvchilar — ular korpus yoki bilaguzukka zarar yetkazishi mumkin.</li>
      </ul>`,

      ru: `<ul>
        <li>Очищайте часы мягкой тканью и тёплой мыльной водой (если ремешок не кожаный).</li>
        <li>После контакта с солёной водой промойте пресной водой и тщательно высушите.</li>
        <li>Проверяйте механизм раз в 3–4 года в авторизованном сервисном центре.</li>
      </ul>
      <p style="font-weight: bold; margin-top: 16px;">Избегайте:</p>
      <ul>
        <li>Резких температурных перепадов и экстремальных температур (ниже 0°C / выше 60°C).</li>
        <li>Воздействия сильных магнитных полей (телефоны, холодильники и т.д.).</li>
        <li>Сильных механических ударов.</li>
        <li>Косметики, духов, растворителей — они могут повредить корпус или ремешок.</li>
      </ul>`,

      en: `<ul>
        <li>Clean your watch with a soft cloth and warm soapy water (if the strap is not leather).</li>
        <li>After contact with salt water, rinse with fresh water and dry thoroughly.</li>
        <li>Have the mechanism checked every 3–4 years at an authorized service center.</li>
      </ul>
      <p style="font-weight: bold; margin-top: 16px;">Avoid:</p>
      <ul>
        <li>Sudden temperature changes and extreme temperatures (below 0°C / above 60°C).</li>
        <li>Exposure to strong magnetic fields (phones, refrigerators, etc.).</li>
        <li>Strong mechanical shocks.</li>
        <li>Cosmetics, perfumes, solvents — these can damage the case or strap.</li>
      </ul>`,

      tj: `<ul>
        <li>Соатро бо матои нарм ва оби гарм бо собун тоза намоед (агар банди он чармӣ набошад).</li>
        <li>Пас аз тамос бо оби шӯр, бо оби тоза шӯста, хушк намоед.</li>
        <li>Механизмро ҳар 3–4 сол дар маркази хизматрасонии иҷозатдошта санҷиш кунед.</li>
      </ul>
      <p style="font-weight: bold; margin-top: 16px;">Аз инҳо худдорӣ намоед:</p>
      <ul>
        <li>Тағйироти ногаҳонии ҳарорат ва ҳарорати шадид (аз 0°C паст / аз 60°C баланд).</li>
        <li>Майдонҳои магнитии қавӣ (телефонҳо, яхдонҳо ва ғайра).</li>
        <li>Зарбахои сахт.</li>
        <li>Косметика, атрҳо, ҳалкунандаҳо — метавонанд ба корпус ё банд осеб расонанд.</li>
      </ul>`,

      az: `<ul>
        <li>Saatı yumşaq parça və ilıq sabunlu su ilə təmizləyin (əgər qayışı dəridən deyilsə).</li>
        <li>Duzlu su ilə təmasdan sonra təmiz su ilə yuyun və yaxşıca qurulayın.</li>
        <li>Mexanizmi hər 3–4 ildən bir səlahiyyətli servis mərkəzində yoxladın.</li>
      </ul>
      <p style="font-weight: bold; margin-top: 16px;">Aşağıdakılardan çəkinin:</p>
      <ul>
        <li>Kəskin temperatur dəyişiklikləri və ekstremal istiliklər (0°C-dən aşağı / 60°C-dən yuxarı).</li>
        <li>Güclü maqnit sahələri (telefonlar, soyuducular və s.).</li>
        <li>Sərt fiziki zərbələr.</li>
        <li>Kosmetika, ətir, həlledicilər — bunlar korpusa və ya qayışa zərər verə bilər.</li>
      </ul>`,
    }
  }
];


export const services: tabsType[] = [
  {
    id: 1,
    value: "item-1",
    accordionTrigger: {
      uz: "Ta'mirlash xizmatlari",
      ru: "Ремонтные услуги",
      en: "Repair Services",
      tj: "Хизматрасонии таъмир",
      az: "Təmir xidmətləri",
    },
    accordionContent: {
      uz: "Agar soatingiz shikastlangan bo‘lsa va ta'mirlashga muhtoj bo‘lsa, sizga yordam berishdan mamnunmiz. Soatni ta'mirlash uchun iltimos, uni Montblanc butikiga yoki siz tanlagan rasmiy dilerga olib boring. Shundan so‘ng, soatingiz bizning servis markazimizga yuboriladi va u yerda ta’mirlanadi va xizmat ko‘rsatiladi.",
      ru: "Мы будем рады помочь вам, если ваши часы были повреждены и нуждаются в ремонте. Чтобы сдать часы в сервисный центр, пожалуйста, принесите их в бутик Montblanc или к авторизованному дилеру по вашему выбору. После этого ваши часы будут отправлены в наш сервисный центр для ремонта и обслуживания.",
      en: "We will be happy to assist you if your watch has been damaged and needs repair. To submit your watch for service, please bring it to a Montblanc boutique or an authorized dealer of your choice. After that, your watch will be sent to our service center for repair and maintenance.",
      tj: "Агар соати шумо вайрон шуда бошад ва ба таъмир ниёз дошта бошад, мо бо камоли мамнуният кӯмак мерасонем. Барои супоридани соат ба маркази хидматрасонӣ, лутфан онро ба бутики Montblanc ё фурӯшандаи ваколатдор биёред. Баъд аз он, соати шумо ба маркази хизматрасонии мо барои таъмир ва нигоҳдорӣ фиристода мешавад.",
      az: "Əgər saatınız zədələnibsə və təmirə ehtiyacı varsa, sizə kömək etməkdən məmnun olarıq. Saatınızı təmir üçün Montblanc butiklərinə və ya seçdiyiniz rəsmi dilerə gətirin. Daha sonra saatınız təmir və xidmət üçün servis mərkəzimizə göndəriləcək.",
    },
  },
];