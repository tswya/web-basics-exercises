class Animal {
  move(){
    console.log('aa');
    
  }
}
class Dog extends Animal {
  bark() {
    console.log('bb');
    
  }
}
const d = new Dog()
