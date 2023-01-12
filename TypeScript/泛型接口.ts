interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}