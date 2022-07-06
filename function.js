



/**
 * get all data
 * 
*/


  const readLSData=(key)=>{
    if(localStorage.getItem(key)){

      return JSON.parse(localStorage.getItem(key))

    }else{
      return false
    }


  }


/**
 * set value ls
*/


const createLSData =(key,value)=>{

  let data=[]
  if(localStorage.getItem(key)){
    data=JSON.parse(localStorage.getItem(key))
  }
  data.push(value)
  localStorage.setItem(key,JSON.stringify(data))



}