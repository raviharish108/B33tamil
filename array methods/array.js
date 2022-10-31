
const country=async()=>{
const response=await fetch("https://restcountries.com/v2/all");
const data= await response.json();
const restcountries=await data;


// 5.find the total pulation of all countrys
const population=restcountries.map(value=>value.population);
const initialValue = 0;
 const sum = population.reduce(
  (previous, current) => previous + current,
  initialValue
);
 console.log(sum);

// 1.filter method find all the countrys asia  region
const result = restcountries.filter(value => value.region==="Asia");
console.log(result);

//2.using filter method find the country less then population 2lakhs
const result1 = restcountries.filter(value => value.population<200000);
console.log(result1);

//3.using for each method for finding the capital, flag,name?
restcountries.forEach(element => {
    console.log({
        "name":element.name,
        "capital":element.capital,
        "flag":element.flag
    })
})
//4. using filter method for find currency us dollar
for (let i=0;i<restcountries.length;i++){
    if(restcountries[i].currencies[0].code==="USD"){
        console.log(restcountries[i].name)
    }
}

}
country();