
export const getBreadcrumbDictionary = async (lang: string ) => {
    return import(`@/dictionaries/breadcrumb.json`).then((res) => res.default);
};
