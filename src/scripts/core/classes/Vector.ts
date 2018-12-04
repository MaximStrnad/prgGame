

export default class Vector {
        public x: number;
        public y: number;
        public z: number;

        constructor(x: number, y: number, z: number) {
            this.x = x ? x : null;
            this.y = y ? y : null;
            this.z = z ? z : null;
        }; 

}