# p5Js + Typescript + Fusebox PRG GAME
## Getting Started
* Clone this project
* Run `yarn sketch` (browser opens to sketch automatically)
* Modify `src/sketch.ts`, save it, watch sketch auto-reload in browser.
* Have fun!

## Random
* **tsc compile fails** - There are issues in p5.d.ts and p5.global-mode.d.ts that cause compile errors `Cannot find name 'COLOR_MODE'`... and `Class 'Noise' incorrectly extends base class 'Oscillator'`.  You can ignore these, I've submitted Issues to p5js and they should be addressed in their next release.  However if you want to fix them...
  * Open `p5.d.ts`
  * On line 10312, change the return type of `Noise:amp` from `void` to `AudioParam`
  * Add `///<reference path="p5.global-mode.d.ts" />` to the top of `p5.d.ts`
  * Save & `yarn compile`
* **Source Maps** are turned on by default which means you can set breakpoints in the browser or in Visual Studio Code (use Chrome Debugging extension).

