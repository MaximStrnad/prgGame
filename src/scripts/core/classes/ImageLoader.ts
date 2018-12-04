import 'p5'
export default class ImageLoader {
    static load = function (p: p5, path) {
        p.loadImage(path);
    }
}

