
  const object1={"name":"person 1","age":5};
  const object2={"age":5,"name":"person 1"}
  var flag="same";
  
  if(Object.keys(object1).length==Object.keys(object2).length){
      for(key in object1) { 
          if(object1[key] == object2[key]) {
              continue;
          }
          else {
              flag="different";
              break;
          }
      }
  }
  else {
      flag=false;
  }
  console.log("these two objects are "+flag);