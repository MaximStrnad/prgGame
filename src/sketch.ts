import 'p5'
require('p5/lib/addons/p5.sound')
//require('p5/lib/addons/p5.dom')
import  Grid  from "./scripts/core/classes/Grid"

const defaultCellSize = 30;
var sketch = function (p: p5) {

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = function () {
    var grid = new Grid(p,p.windowWidth, p.windowHeight, 40);
    grid.render();
    grid.cells.forEach(cell => {
      cell.render();
      console.log("pls render");
    });
  }
}

new p5(sketch)
