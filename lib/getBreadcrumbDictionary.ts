export const getBreadcrumbDictionary = async () => {
    return import(`@/dictionaries/breadcrumb.json`).then((res) => res.default);
};
