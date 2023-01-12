interface P {x:number; y:number}
interface P2D {x:number; y:number}
interface P3D {x:number; y:number; z:number}

let A1: P
let A2: P2D = {x:1,y:2}
let A3: P3D = {x:1, y:2, z:3}

A1 = A2
A2 = A1
A1 = A3
// A3 = A1
class Pt3D {x:number; y:number; z:number}
let P3: P2D = new Pt3D()