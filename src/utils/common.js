import Common from "./common.js"; //common 재귀

export default {
  nullify : (target) => {
    //let localKey = Object.keys(target);
    //let Object.values(target) = Object.values(target);

    for(var i in Object.values(target)){
      // if(typeof(Object.values(target)[i]) == 'object'){
      //   console.log(Object.values(target)[i])
      // }
      if(Array.isArray(Object.values(target)[i])){
        //console.log(Object.values(target)[i])
      } else if(typeof(Object.values(target)[i]) == 'object'){
        // console.log(localKey[i])
        // console.log(Object.values(target)[i])
        //Common.nullify(Object.values(target)[i])
      } else if(typeof(Object.values(target)[i]) == 'string'){
        localKey[i] = '';
      } else if(typeof(Object.values(target)[i] == 'blooean')){
        
      } else if(typeof(Object.values(target)[i] == 'number')){
        console.log(localKey)
      }
    }
    console.log(target)
  }}