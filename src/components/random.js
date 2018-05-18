import React, { component } from 'react'
  
const getRandomId = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  let result = Math.floor(Math.random() * (max - min +1)) + min
  console.log(result)
  return result
}

export default getRandomId