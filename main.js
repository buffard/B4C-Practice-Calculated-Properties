class Restaurant {
  constructor (props) {
      this.comboDiscount = props.discount
      this.menu = props.menu
  }

  get comboPrice () {
    let menuTotal = 0
    // Add logic here to calc and return combo price    
    for (let items in this.menu) {
    menuTotal += this.menu[items]
    }

    return (menuTotal*this.comboDiscount).toFixed(2)
  }
}

const bobsBurgers = new Restaurant({
  discount: 0.85,
  menu: {
      fries: 1.29,
      burger: 3.69
  }
})

const samsTacos = new Restaurant ({
  discount: .5,
  menu: {
    tacos: 2.24,
    burrito: 4.31
  }
})

console.log(bobsBurgers.comboPrice)

console.log(samsTacos.comboPrice)

