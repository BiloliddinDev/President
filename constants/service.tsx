export const serviceItems: {
  id: number;
  text: {
    uz: string;
    ru: string;
    en: string;
    tj: string;
    az: string;
  };
  iconName: string;
  link: string;
}[] = [
  {
    id: 1,
    text: {
      uz: "Yetkazib berish va jo‘natish",
      ru: "Доставка и отгрузка",
      en: "Shipping & Delivery",
      tj: "Расондан ва боркашӣ",
      az: "Çatdırılma və göndərmə",
    },
    iconName: "shipping",
    link: "shipping",
  },
  {
    id: 2,
    text: {
      uz: "Qaytarish va kompensatsiya",
      ru: "Возврат и компенсация",
      en: "Returns & Refunds",
      tj: "Бозгардон ва ҷуброн",
      az: "Qaytarma və kompensasiya",
    },
    iconName: "return",
    link: "returns",
  },
  {
    id: 3,
    text: {
      uz: "Tez-tez so‘raladigan savollar",
      ru: "Часто задаваемые вопросы",
      en: "FAQs",
      tj: "Саволҳои маъмул",
      az: "Tez-tez verilən suallar",
    },
    iconName: "faqs",
    link: "faqs",
  },
  {
    id: 4,
    text: {
      uz: "Uchrashuvga yozilish",
      ru: "Записаться на встречу",
      en: "Book an Appointment",
      tj: "Сабти ном барои мулоқот",
      az: "Görüş üçün qeydiyyat",
    },
    iconName: "appointment",
    link: "appointment",
  },
];
