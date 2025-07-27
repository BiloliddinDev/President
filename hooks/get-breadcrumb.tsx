export function splitNameAndIdFromParam(encodedValue: string) {
    const decoded = decodeURIComponent(encodedValue);
    const match = decoded.match(/(.+?)id(\d+)/);

    if (!match) return {name: null, id: null};

    return {
        name: match[1],
        id: match[2],
    };
}