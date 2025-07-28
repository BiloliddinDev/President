import StoryImage1 from '@/public/images/b2b-image3.png'
import StoryImage2 from '@/public/images/about-detail2.png'
import StoryImage3 from '@/public/images/Journal.jpg'
import StoryImage4 from '@/public/images/Story-image4.jpg'

export const storiesData = [

    {
        id: 1,
        name: {
            uz: "Sovg'ada sizning logotipingiz",
            ru: "Ваш логотип на подарке",
            en: "Your logo on the gift"
        },
        link: "/discover/b2b-service",
        image: StoryImage1
    },
    {
        id: 2,
        name: {
            uz: "Ishlab chiqarish",
            ru: "Производство",
            en: "Production"
        },
        link: "/discover/fine-watchmaking",
        image: StoryImage2
    },
    {
        id: 3,
        name: {
            uz: "Jurnal",
            ru: "Каталог",
            en: "Journal"
        },
        link: "/discover/journal",
        image: StoryImage3,
    },
    {
        id: 4,
        name: {
            uz: "Mahsulotni ishlatish va xizmat ko'rsatish",
            ru: "Уход за изделиями и сервис",
            en: "Product care and service"
        },
        link: "/discover/care-services",
        image: StoryImage4
    },
];
