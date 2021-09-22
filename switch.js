const fruit = 'pineapple'

switch(fruit) {
  case 'lime':
  case 'kiwi':
    console.log(`${fruit} is green`) // template literal
    break
  case 'orange':
  case 'mango':
    console.log(fruit, 'is orange')
    break
  case 'lemon':
  case 'pineapple':
  case 'banana':
    console.log(fruit, 'is yellow')
    break
  case 'apple':
  case 'strawberry':
    console.log(fruit, 'is red')
    break
  default:
    console.log('I have no idea what that fruit looks like')
}