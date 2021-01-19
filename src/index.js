const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//   name: 'Danilo Gomes',
//   gender: "male",
// }).name)

// console.log(new EntityBase({
//   name: 'Franciele',
//   gender: "female",
// }).name)

const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
  male: 'male',
  female: 'female'
}


{
  const employee = new Employee({
    name: 'XuxaDaSilva',
    gender: GENDER.female
  })

  console.log('e', employee.birthDay)
}

