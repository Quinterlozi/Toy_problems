//STEP 1 take input
alert('Your are going to be asked for some Inputs ,please input the values as Numbers')
let benefits=parseInt(prompt('Enter your Benefits'))
let salary=parseInt(prompt('Enter total annual Salary'))
let nssf=parseInt(prompt('Enter your nssf deductions'))

//NSSF World 
console.log('Your grossSalary is: ',benefits+salary)
//the assumption is the grossSalary includes all benefits

//STEP 2
//define the formular to get grossSalary
let grossSalary=benefits+salary
console.log('Your benefits are: ',benefits)
console.log('Your Salary is: ',salary)
// console.log('Your NSSF deductions are: ',nssdeductions)

//STEP create a function to calculate grossSalary
//
function calculateGrossSalary(salary,benefits){
    let grossSalary=0;
    return grossSalary=salary+benefits;
}
function calcuteTaxRate(grossSalary){
let taxRate=0;
if(grossSalary>0&&grossSalary<=288000){
    return taxRate=0.01
}else if(grossSalary>288000&&grossSalary<= 388000){
 return taxRate=0.25;
}else {
    return taxRate=0.30
}
}

function calculateNSSF(salary){
    let nssf=salary*0.06
    if(nssf>0&&nssf<=72000){
        return `Your  deductions are ${nssf} and Your are in Tire I`
    }
   return nssf
}

console.log(calcuteTaxRate(400000))
let Rate=(calcuteTaxRate(60000))

//STEP 5
//DEFINE the expressions to calculate PAYE usingour PAYE(Pay as you Earn)
let PAYE=grossSalary*Rate
let netIncome=grossSalary-PAYE-nssf

//nssf
/*
The employer and employee each contribute 6% of pensionable pay to NSSF, subject to the following montly limits:

Tier	Pensionable Pay=basic salary
I	Up to 6,000
II	6,001 - 18,000
*/

// calculateNSSF(salary)
// console.log('Your nssf is:',calculateNSSF(salary))
//nhif
console.log('Your net Income is',netIncome)
console.log('Your PAYE IS',PAYE)
console.log('Your nssf is',nssf)