const addnow=document.getElementById('addnow')





addnow.onsubmit=(e)=>{

    e.preventDefault()
    let  formdata = new FormData(e.target)
    let alldata = Object.fromEntries(formdata.entries());
    let {nu,na} = Object.fromEntries(formdata.entries());
    
    console.log(alldata);




}