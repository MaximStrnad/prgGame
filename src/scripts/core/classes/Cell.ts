import p5 from 'p5';
import ImageLoader = require('react-imageloader');
import Texture from "./texture";

export default class Cell {
    public color: Vector;
    public texture: Texture;
    public position: Vector;
    public size: number;
    public p: p5;
    constructor(p: p5, position:Vector, texture: Texture, color: Vector, size: number) {
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
        this.p.rect(this.position.x, this.position.y, this.size, this.size);
        console.log("x , y, s" + this.position.x + "  " + this.position.y + "  " + this.position.size)
        if(this.texture) {
            this.texture.apply();
        } else if (this.color) {
            this.p.fill(this.color.x,this.color.y,this.color.z);
        }
    }
}