const obj = {
  name: "Raphel",

  bark: function (){
    console.log(`Arf ${this.name}`)
  }
}

const obj1 = {
  name: "Marco",

  bark: () => {
    console.log(`Arf ${this.name}`)
  }
}

obj.bark()
obj1.bark()