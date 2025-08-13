export const careServicesItems = [
        {
          id: 1,
          serviceType: "Writing Instrument",
          name: {
            ru: "Ручки",
            en: "Pens",
            uz: "Ruchkalar",
            tj: "Қаламҳо",
            az: "Qələmlər",
          },
          iconName: "pen",
        },
        {
          id: 2,
          serviceType: "Watches",
          name: {
            ru: "Часы",
            en: "Watches",
            uz: "Soatlar",
            tj: "Соатҳо",
            az: "Saatlar",
          },
          iconName: "watch",
        },
        {
          id: 3,
          serviceType: "Leather",
          name: {
            ru: "Кожаные изделия",
            en: "Leather goods",
            uz: "Charm mahsulotlar",
            tj: "Маҳсулоти чармӣ",
            az: "Dəri məhsulları",
          },
          iconName: "leather",
        },
];


export interface tabsType {
    id: number;
    value: string;
    accordionTrigger: {
        uz:string
        ru:string
        en:string
        tj:string
        az:string
    };
    accordionContent: {
        uz:string
        ru:string
        en:string
        tj:string
        az:string
    };
}

export const writingInstruments: tabsType[] = [
    {
      id: 1,
      value: "item-1",
      accordionTrigger: {
        uz: "Qalam uchini muntazam tozalash",
        ru: "Регулярная очистка пера",
        en: "Regular nib cleaning",
        tj: "Тозакунии мунтазами нӯги қалам",
        az: "Qələm ucunun müntəzəm təmizlənməsi"
      },
      accordionContent: {
        uz: "Qalam uchini qurib qolgan siyohlardan muntazam tozalang. Ayniqsa uzoq vaqt ishlatilmagan bo‘lsa, uni sovunsiz iliq suvda chaying.",
        ru: "Регулярно очищайте перо от засохших чернил. Промывайте его в тёплой воде без мыла, особенно если долго не использовали ручку.",
        en: "Regularly clean the nib from dried ink. Rinse it in warm water without soap, especially if you haven't used the pen for a long time.",
        tj: "Нӯги қаламро мунтазам аз рангҳои хушкшуда тоза намоед. Агар қаламро дер истифода накарда бошед, онро бо оби гарм бе собун шӯед.",
        az: "Qələm ucunu qurumuş mürəkkəbdən müntəzəm olaraq təmizləyin. Uzun müddət istifadə etməmisinizsə, onu sabunsuz ilıq suda yuyun."
      }
    },
    {
      id: 2,
      value: "item-2",
      accordionTrigger: {
        uz: "Sifatli siyohlar",
        ru: "Качественные чернила",
        en: "High-quality ink",
        tj: "Рангҳои босифат",
        az: "Yüksək keyfiyyətli mürəkkəb"
      },
      accordionContent: {
        uz: "Faqat sifatli siyohlardan foydalaning. Noto‘g‘ri siyohlar mexanizmga zarar yetkazishi mumkin.",
        ru: "Заправляйте только качественными чернилами. Использование неподходящих чернил может повредить механизм подачи.",
        en: "Use only high-quality ink. Using unsuitable ink can damage the feed mechanism.",
        tj: "Танҳо аз рангҳои босифат истифода баред. Истифодаи рангҳои номаълум метавонад ба механизми дохилии қалам зарар расонад.",
        az: "Yalnız yüksək keyfiyyətli mürəkkəbdən istifadə edin. Uyğun olmayan mürəkkəb istifadə etmək qidalandırıcı mexanizmə zərər verə bilər."
      }
    },
    {
      id: 3,
      value: "item-3",
      accordionTrigger: {
        uz: "Qopqoqdan foydalanish",
        ru: "Использование колпачка",
        en: "Using the cap",
        tj: "Истифодаи сарпӯш",
        az: "Qapaqdan istifadə"
      },
      accordionContent: {
        uz: "Qalamni qopqoqsiz qoldirmang — bu siyohning qurib qolishi va ifloslanishining oldini oladi.",
        ru: "Не оставляйте ручку без колпачка — это предотвращает высыхание пера и загрязнение.",
        en: "Do not leave the pen without a cap — it prevents the nib from drying and contamination.",
        tj: "Қаламро бе сарпӯш нагузоред — ин аз хушкшавии нӯг ва ифлосшавӣ ҷилавгирӣ мекунад.",
        az: "Qələmi qapaqsız qoymayın — bu, ucun qurumasının və çirklənməsinin qarşısını alır."
      }
    },
    {
      id: 4,
      value: "item-4",
      accordionTrigger: {
        uz: "Qalamni saqlash",
        ru: "Хранение ручки",
        en: "Pen storage",
        tj: "Нигоҳдории қалам",
        az: "Qələmin saxlanması"
      },
      accordionContent: {
        uz: "Qalamni gorizontal holatda saqlang — bu siyoh oqishini oldini oladi.",
        ru: "Храните ручку в горизонтальном положении — это помогает избежать подтекания чернил.",
        en: "Store the pen horizontally — it helps prevent ink leakage.",
        tj: "Қаламро дар ҳолати уфуқӣ нигоҳ доред — ин аз резиши ранг ҷилавгирӣ мекунад.",
        az: "Qələmi üfüqi vəziyyətdə saxlayın — bu mürəkkəbin axmasının qarşısını alır."
      }
    },
    {
      id: 5,
      value: "item-5",
      accordionTrigger: {
        uz: "Shikastlanishlardan saqlaning",
        ru: "Избегайте повреждений",
        en: "Avoid damage",
        tj: "Аз осеб дидан ҷилавгирӣ намоед",
        az: "Zədələrdən çəkinin"
      },
      accordionContent: {
        uz: "Qalamni tushirib yubormang, haddan tashqari qizdirmang va erituvchilar bilan aloqa qildirmang.",
        ru: "Избегайте падений, перегрева и контакта с растворителями.",
        en: "Avoid drops, overheating, and contact with solvents.",
        tj: "Аз афтодан, гармкунии аз ҳад зиёд ва тамос бо ҳалкунандаҳо худдорӣ намоед.",
        az: "Qələmin yerə düşməsindən, həddindən artıq qızmasından və həlledicilərlə təmasından çəkinin."
      }
    }
  ];
  

export const repair: tabsType[] =  [
    {
      id: 1,
      value: "item-1",
      accordionTrigger: {
        ru: "Ремонтные услуги",
        uz: "Ta'mirlash xizmatlari",
        en: "Repair Services",
        tj: "Хизматрасонии таъмир",
        az: "Təmir xidmətləri",
      },
      accordionContent: {
        ru: "Мы будем рады помочь вам, если вашему творению Montblanc потребуется сервисное обслуживание. Чтобы подать заявку на сервисное обслуживание, принесите его в бутик President business gifts или к ближайшему авторизованному дилеру. После этого ваше изделие будет отправлено в наш сервисный центр.",
        uz: "Agar sizning Montblanc mahsulotingizga texnik xizmat kerak bo‘lsa, biz mamnuniyat bilan yordam beramiz. Xizmatga ariza berish uchun uni President business gifts butikiga yoki eng yaqin ruxsat etilgan dilerga olib boring. Shundan so‘ng, mahsulotingiz bizning servis markazimizga yuboriladi.",
        en: "We will be happy to assist you if your Montblanc creation requires servicing. To request service, bring it to the President Business Gifts boutique or the nearest authorized dealer. Your item will then be sent to our service center.",
        tj: "Мо бо хурсандӣ ба шумо кӯмак мерасонем, агар ба махлуқи Montblanc-и шумо хизматрасонӣ лозим бошад. Барои дархости хизматрасонӣ, онро ба бутики President business gifts ё ба фурӯшандаи ваколатдори наздиктарин биёред. Пас аз он, маҳсулоти шумо ба маркази хидматрасонии мо фиристода мешавад.",
        az: "Əgər Montblanc məhsulunuza texniki xidmət lazımdırsa, sizə məmnuniyyətlə kömək edərik. Xidmət üçün müraciət etmək üçün onu President business gifts butikinə və ya ən yaxın səlahiyyətli dilerə aparın. Bundan sonra məhsulunuz servis mərkəzimizə göndəriləcək.",
      },
    },
    {
      id: 2,
      value: "item-2",
      accordionTrigger: {
        ru: "Расходы на ремонт",
        uz: "Ta’mirlash xarajatlari",
        en: "Repair Costs",
        tj: "Хароҷоти таъмир",
        az: "Təmir xərcləri",
      },
      accordionContent: {
        ru: "President business gifts предлагает широкий спектр услуг по ремонту и обслуживанию. Если вашему творению President business gifts требуется ремонт, мы будем рады вам помочь. Вы можете отнести его в бутик или к авторизованному дилеру, который, как правило, сможет оценить приблизительную стоимость ремонта.",
        uz: "President business gifts turli xil ta’mirlash va texnik xizmatlarni taklif etadi. Agar sizning mahsulotingizga ta’mir kerak bo‘lsa, biz yordam berishga tayyormiz. Uni butik yoki ruxsat etilgan dilerga olib borishingiz mumkin, ular odatda ta’mir qiymatini taxminan baholaydi.",
        en: "President Business Gifts offers a wide range of repair and maintenance services. If your product needs repair, we’re happy to help. You can take it to a boutique or an authorized dealer, who will usually be able to estimate the approximate repair cost.",
        tj: "President business gifts доираи васеи хизматрасониҳои таъмиру нигоҳдориро пешниҳод мекунад. Агар маҳсулоти шумо таъмирталаб бошад, мо бо хурсандӣ кӯмак мерасонем. Шумо метавонед онро ба бутик ё намояндаи ваколатдор бубаред, ки одатан арзиши тахминии таъмирро мегӯяд.",
        az: "President business gifts geniş çeşiddə təmir və texniki xidmətlər təqdim edir. Əgər məhsulunuza təmir lazımdırsa, sizə kömək etməkdən məmnun olarıq. Onu butikə və ya səlahiyyətli dilerə apara bilərsiniz, o da təmirin təxmini qiymətini deyə bilər.",
      },
    },
    {
      id: 3,
      value: "item-3",
      accordionTrigger: {
        ru: "Гарантия на обслуживание",
        uz: "Xizmat kafolati",
        en: "Service Warranty",
        tj: "Кафолати хидматрасонӣ",
        az: "Xidmət zəmanəti",
      },
      accordionContent: {
        ru: "<ul><li>Мы предоставляем гарантию на изделия от 2 до 5 лет в зависимости от типа товара.</li><li>Гарантия покрывает заводские дефекты и не распространяется на механические повреждения, вызванные небрежным использованием.</li><li>Обслуживание и ремонт производятся только в авторизованных сервисных центрах President Business Gifts.</li><li>При обращении по гарантии необходимо предъявить гарантийный талон и товарный чек.</li></ul>",
        uz: "<ul><li>Mahsulot turiga qarab 2 yildan 5 yilgacha kafolat beriladi.</li><li>Kafolat faqat ishlab chiqarish nuqsonlariga tegishli bo‘lib, beparvolik tufayli kelib chiqqan mexanik shikastlarga taalluqli emas.</li><li>Ta’mirlash faqat ruxsat etilgan President Business Gifts servis markazlarida amalga oshiriladi.</li><li>Kafolat xizmatidan foydalanish uchun kafolat varaqasi va chek talab etiladi.</li></ul>",
        en: "<ul><li>We provide a warranty of 2 to 5 years depending on the product type.</li><li>The warranty covers manufacturing defects and does not cover mechanical damage caused by negligent use.</li><li>Service and repairs are carried out only at authorized President Business Gifts service centers.</li><li>A warranty card and receipt are required for warranty service.</li></ul>",
        tj: "<ul><li>Кафолат вобаста ба намуди маҳсулот аз 2 то 5 сол дода мешавад.</li><li>Кафолат танҳо нуқсонҳои истеҳсолиро фаро мегирад ва ба осебҳои механикӣ, ки аз истифодаи нодуруст ба вуҷуд омадаанд, дахл надорад.</li><li>Хизматрасонӣ ва таъмир танҳо дар марказҳои хизматрасонии ваколатдори President Business Gifts анҷом дода мешаванд.</li><li>Барои истифодаи кафолат, пешниҳоди корти кафолат ва чек зарур аст.</li></ul>",
        az: "<ul><li>Məhsul növündən asılı olaraq 2 ildən 5 ilə qədər zəmanət veririk.</li><li>Zəmanət yalnız istehsal qüsurlarını əhatə edir və səhlənkarlıq nəticəsində yaranan mexaniki zədələri əhatə etmir.</li><li>Xidmət və təmir yalnız səlahiyyətli President Business Gifts servis mərkəzlərində aparılır.</li><li>Zəmanət xidməti üçün zəmanət vərəqəsi və qəbz təqdim edilməlidir.</li></ul>",
      },
    },
  ];
  