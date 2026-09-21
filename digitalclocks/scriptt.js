
setInterval(()=>{
    let element=document.querySelector('.clock')
    let time=new Date();
    const options={
        timeZone:'Asia/Kolkata',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    }
    element.textContent=time.toLocaleTimeString('en-US',options)

    
    console.log(time.toLocaleTimeString('en-US',options))
},1000);