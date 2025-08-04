export const getBreadcrumbDictionary = async (lang: string) => {
    console.log(lang);
    return import(`@/dictionaries/breadcrumb.json`).then((res) => res.default);
};
