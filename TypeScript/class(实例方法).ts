class Point {
  x = 1
  y = 1 
  scale(n:number) {
    this.x *= n
    this.y *= n
  }
}
const p1 = new Point()

p1.scale(10)

console.log(p1.x,p1.y);
