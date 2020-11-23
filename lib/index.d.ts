interface Preloader_Params {
    after_delay?: Number;
    background_color?: String;
    duration?: Number;
}
interface TextPreloaderBox {
    color?: String;
    text?: String;
}
interface PreloaderBox {
    background_color?: String;
    text?: TextPreloaderBox;
    shadow?: String;
}
export declare class Preloader {
    ActivatePreloader(params: Preloader_Params, box_params: PreloaderBox): String;
    StopPreloader(): String;
}
export {};
//# sourceMappingURL=index.d.ts.map