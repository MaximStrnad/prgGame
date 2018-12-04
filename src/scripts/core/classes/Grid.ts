
import Vector from "./Vector";
import  Cell  from "./Cell"
export default class Grid {
    cells: Cell[];
    cellsVeritacally: number;
    cellsHorizonataly: number;
    totalCells: number; 
    p: p5;
    size: number;
    constructor(p: p5, width: number, height:number, size: number) {
        this.p = p;
        this.cellsHorizonataly = Math.floor(width/size);
        this.cellsVeritacally = Math.floor(height/size);
        this.totalCells = this.cellsHorizonataly * this.cellsVeritacally;
        this.cells = [];
        this.size = size;
        console.log(this.totalCells);
        for(let i = 0; i <= this.totalCells; i++){
            const color: Vector = new Vector(32,234,232);
            let x = i % this.cellsHorizonataly === 0 ? this.size * this.cellsHorizonataly : i % this.cellsHorizonataly * this.size;
            let y = i % this.cellsVeritacally === 0 ? this.size * (i / this.cellsVeritacally) : i % this.cellsVeritacally * this.size;
            console.log(" i" + i + " ver "  + this.cellsVeritacally + "  hor " +  this.cellsHorizonataly);
            const pos: Vector = new Vector(x, y, null);

            this.cells.push(new Cell(this.p, pos, null, color, 40));
        }
        console.log(this.cells);
    }
    public render () {
        this.p.rect(304,304,32,32);
        this.p.fill(32,43,134);
    }
}