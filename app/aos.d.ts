declare module 'aos' {
    export interface AOSOptions {
        duration?: number;
        once?: boolean;
        distance?: string;
        offset?: number;
        delay?: number;
        easing?: string;
        mirror?: boolean;
        anchorPlacement?: string;

        [key: string]: unknown;
    }

    const AOS: {
        init: (options?: AOSOptions) => void;
        refresh: () => void;
        refreshHard: () => void;
    };

    export default AOS;
}
