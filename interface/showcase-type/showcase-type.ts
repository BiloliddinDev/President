export interface ShowcaseProps {
    showcase: React.ReactNode | undefined;
    dictionary: {
        showcase: {
            title: string;
            description: string;
            button: string;
        };
    },
    lang: "uz" | "ru" | "en" | "az" | "tj"
}


export interface ShowcaseDataFrom {
    'collections.newArrival': string
    'news.newArrival': string
    'showcase.title': string
    'news.title': string
    'product.videos.title': string
    'showcase.description': string
    'navbar.changeLocale': string
    'showcase.button': string
    'collections.title': string,
    'category.title': string,
    'navbar.changeLanguage': string
    'product.image1':any
    'product.image2':any
    'product.image3':any
}
