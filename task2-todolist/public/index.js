$(".delete").on("click",(event)=>{

   var clsname=event.target.classList[0];
   console.log(clsname);
   $("#"+clsname+"container").toggleClass("deleted");
  })

