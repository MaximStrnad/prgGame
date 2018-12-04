import Texture from "./texture";

export default class Cell {
    public color: p5.Vector;
    public texture: Texture;
    public position: p5.Vector;
    public size: p5.Vector;
    public p: p5;
    constructor(p: p5, position: p5.Vector,size: p5.Vector, texture: Texture, color: p5.Vector) {
        this.p = p;
        this.texture = texture ? texture : null;
        this.color = color ? color : null;
        this.position = position;
        this.size = size;
        
    }; 

    /**
     * render
     */
    public render() {
        this.p.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        if(this.texture) {
            this.texture.apply();
        } else if (this.color) {
            this.p.fill(this.color.x,this.color.y,this.color.z);
        }
    }
}