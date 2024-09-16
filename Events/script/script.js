let btn = document.querySelector("#btn1");
let bulb =document.querySelector(".bulb");
let currmode = "light";

btn.addEventListener("click",function(){
     if(currmode == "light")
        {
            currmode = "dark";
           btn.innerHTML = "Dark";
           document.querySelector("body").style.backgroundColor = "black";
           bulb.style.backgroundColor = "yellow";
           
            
        }else{
            currmode = "light";
             btn.innerHTML = "light";
             document.querySelector("body").style.backgroundColor = "white";
           bulb.style.backgroundColor = "white";

            
        }    
});
