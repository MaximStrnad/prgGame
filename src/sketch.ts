import 'p5'
require('p5/lib/addons/p5.sound')
//require('p5/lib/addons/p5.dom')
import  Grid  from "./scripts/core/classes/Grid"
import  Window  from "./scripts/core/classes/window"
var sketch = function (p: p5) {

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = function () {
    var w = new Window(p,p.createVector(4,5));
    w.set({
      color: "red",
      position: 4,
      titleColor: 'blue',
      titleFontSize: "14",
    });
    var grid = new Grid(p,p.windowWidth, p.windowHeight, 40);
    grid.render();
    grid.cells.forEach(cell => {
      cell.render();
    });
  }
}

new p5(sketch)
