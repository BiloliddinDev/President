export type ResponsiveValue = {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};

export function getResponsiveValue(values: ResponsiveValue | undefined, width: number | undefined): number | undefined {
    if (!values || !width) return values?.base;

    if (width >= 1280 && values.xl !== undefined) return values.xl;
    if (width >= 1024 && values.lg !== undefined) return values.lg;
    if (width >= 768 && values.md !== undefined) return values.md;
    if (width >= 640 && values.sm !== undefined) return values.sm;

    return values.base;
}
