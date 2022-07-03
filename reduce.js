  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0)

console.log(sum)

// Summing an array of numbers:


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(totalExperience)

// Grouping by a property, and totaling it too

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience
  }
  return acc
},{})
console.log(experienceByProfession)



const euros = [5, 10, 15];

const sum1 = euros.reduce((total, amount) => total + amount)
console.log(sum1)

// calcualte average

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if(index === array.length -1) {
    return total / array.length;
  } else {
    return total
  }
})
console.log(average)


const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2)
  return total
}, []);
console.log(doubled)

const above10 = euros.reduce((total, amount) => {
  if (amount > 10){
    total.push(amount)
  }
  return total;
},[])
console.log(above10)