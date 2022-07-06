const addnow=document.getElementById('addnow')
const outputdiv=document.getElementById('outputdiv')
const img=document.querySelector('#img')


// get all products 



const getAllProducts=()=>{

    // get all lsdata



  const data =readLSData('product')

   // validate
   if(!data){
      outputdiv.innerHTML = `
      <div>
      <h4>No name</h4>
      <h4>No number</h4>
   </div>
      `
   }
   if(data){
     let list='' 


     data.map((item,index)=>{

    list +=`
    <div>
    <h4>${item.name}</h4>
    <h4>${item.number}</h4>
 </div>
    
    `
  outputdiv.innerHTML=list

     })



   }



}
getAllProducts()


addnow.onsubmit=(e)=>{
   
   e.preventDefault()
   let  formdata = new FormData(e.target)
   let alldata = Object.fromEntries(formdata.entries());
   let {number,name} = Object.fromEntries(formdata.entries());
   
   
 createLSData('product',alldata)


 e.target.reset()


 
 setTimeout(() => {
    location.reload()
    
   },400);


   

}