$(".tt").each(function(i){
  $(this).find(".ii").click(()=>{
    $(this).next().slideToggle();
  });
});

let s=document.createElement("script");
s.type="text/javascript";
s.src="http://code.jquery.com/jquery-1.11.0.min.js";
document.body.appendChild(s);
