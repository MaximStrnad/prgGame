import Texture from "./texture";

class IWindow {
        p: any;
        position: any;
        size: any;
        borderWidth: any;
        borderColor: any; 
        background: any; 
        backgroundColor: any; 
        backgroundTexture: any; 
        fullscreen: any; 
        items: any; 
        animation: any; 
        title: any; 
        titleText: any; 
        titleColor: any; 
        titleSize: any; 
        titlePosition: any; 
    constructor(
        p: any = 'd',
        position: any = ' d',
        size: any = ' d',
        borderWidth: any = ' d',
        borderColor: any = ' ',
        background: any = ' ',
        backgroundColor: any = ' ',
        backgroundTexture: any = ' ',
        fullscreen: any = ' ',
        items: any = ' ',
        animation: any = ' ',
        title: any = ' ',
        titleText: any = ' ',
        titleColor: any = ' ',
        titleSize: any = ' ',
        titlePosition: any = ' ',
    ) {
        this.p = p;
        this.position = position;
        this.size = size;
        this.borderWidth = borderWidth;
        this.borderColor = borderColor;
        this.background = background;
        this.backgroundColor = backgroundColor;
        this.backgroundTexture = backgroundTexture;
        this.fullscreen = fullscreen;
        this.items = items;
        this.animation = animation;
        this.title = title;
        this.titleText = titleText;
        this.titleColor = titleColor;
        this.titleSize = titleSize;
        this.titlePosition = titlePosition;
    }
}
export default class Window {
    p: p5;
    position: p5.Vector;
    size: p5.Vector;
    borderWidth: number;
    borderColor: p5.Vector;
    background: boolean;
    backgroundColor: p5.Vector;
    backgroundTexture: Texture;
    fullscreen: boolean;
    items: any[];
    animation: () => void;
    title: boolean;
    titleText: string;
    titleColor: p5.Vector;
    titleSize: number;
    titlePosition: p5.Vector;
    interface: string[];

    constructor(p: p5, position: p5.Vector) {
        this.p = p;
        this.position = position;
        this.titleText = 'red';
        this.interface = Object.keys(new IWindow());
    }
    public set(obj: any) {
        for (let key in obj) {
            if(this.interface.indexOf(key)){
                this[key] = obj[key]; 
            } else {
                return false;
            }
        }
    }
    public render() {
        this.p.rect(304, 304, 32, 32);
        this.p.fill(32, 43, 134);
    }
}