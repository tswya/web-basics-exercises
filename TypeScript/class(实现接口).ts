interface Singale {
  sing():void
  name: string
}

class Person1 implements Singale {
  name:string
  sing() {
    console.log('aa');
  }
}