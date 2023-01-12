interface Person7 { name: string; sing():number }
interface Contact { phone: string }
type PersonDetail = Person7 & Contact
let obj7: PersonDetail = {
  name: 'zz',
  phone: '123...',
  sing(){return 1}
}