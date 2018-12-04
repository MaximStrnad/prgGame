import 'p5'
export default class Texture {
    public readonly file: string;
    static numberOfTextures: number;
    public isMultidirectional: boolean;
    private id: number;
    public img: any;
    constructor (file: string, isMultidirectional: boolean) {
        this.file = file;
        Texture.numberOfTextures++;
        this.id = Texture.numberOfTextures;
        this.isMultidirectional = isMultidirectional;
        this.img = new p5( (p: p5, path:any) => {p.loadImage(path)});
    }

    /**
     * load
     */
    public apply() {
        
    }
}