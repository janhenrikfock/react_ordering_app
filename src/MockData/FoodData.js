const foodItems = [
  {
    name: 'Margherita',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 2.5,
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 4,
  },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 3.5,
  },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'Pizza',
    price: 3.5,
  },
  {
    name: 'Burger',
    img: '/img/burger.jpeg',
    section: 'Sandwich',
    price: 3,
  },
  {
    name: 'Sandwich',
    img: '/img/sandwich.jpeg',
    section: 'Sandwich',
    price: 2,
  },
  {
    name: 'Gyro',
    img: '/img/gyro.jpeg',
    section: 'Sandwich',
    price: 4.5,
  },
  {
    name: 'Fries',
    img: '/img/fries.jpeg',
    section: 'Sides',
    price: 1.5,
  },
]

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = []
  }
  res[food.section].push(food)
  return res
}, {})

export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  })
}
