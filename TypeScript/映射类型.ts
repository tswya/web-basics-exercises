type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number; y: number; z: number}

type Type2 = {[key in PropKeys]:number}
