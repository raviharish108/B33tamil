let url="https://restcountries.com/v3.1/all";
 const countries=async()=>{
    let response=await fetch(url);
    let data=await response.json();
    for (let i=0;i<data.length;i++){
        console.log(data[i].region)
        console.log(data[i].subregion)
        let flag=data[i].flags.png;
        console.log(flag);
    }
}
countries();