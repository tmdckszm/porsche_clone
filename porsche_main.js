var a718 =document.querySelector("#a718");
var a911 =document.querySelector("#a911");
var taycan =document.querySelector("#taycan");
var panamera =document.querySelector("#panamera");
var macan =document.querySelector("#macan");
var cayenne =document.querySelector("#cayenne");
var shopdetail = document.querySelector("#shop_detail");
var shopadd = document.querySelector("#shop_add");

var info1= document.querySelector(".info_menu_1");
var info2= document.querySelector(".info_menu_2");
var info3= document.querySelector(".info_menu_3");
var info4= document.querySelector(".info_menu_4");
var info5= document.querySelector(".info_menu_5");
var info6= document.querySelector(".info_menu_6");
var shopmenu = document.querySelector(".shop_menu");
var shopmd = document.querySelector(".shop_menu_detail");

var main1 = document.querySelector("#main_1");
var button1 = document.querySelector("#button_1");
var button2 = document.querySelector("#button_2");
var slide1 = document.querySelector("#slide");
var rebutton1 =document.querySelector("#redbutton1");
var rebutton2 =document.querySelector("#redbutton2");
var rebutton3 =document.querySelector("#redbutton3");
var rebutton4 =document.querySelector("#redbutton4");
var num = 0;

function slidechange(num){
    slide1.style.left = num * -1675+'px';
}

function redright(r){
    r.style.backgroundColor = "red";
}
function whiteright(w){
    w.style.backgroundColor = "white";
}

button2.addEventListener("click",function(){
    if(num<3){
        num++;
        console.log(num);
        slidechange(num);
        if(num ==1)
        {
            redright(redbutton2);
            whiteright(redbutton1);
            whiteright(redbutton3);
            whiteright(redbutton4);
        }
        if(num ==2)
        {
            redright(redbutton3);
            whiteright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton4);
        }
    }
    else if(num==3){
        slidechange(0);
        num =0;
    }
})

button1.addEventListener("click",function(){
    if(num>0){
        num--;
        slidechange(num);
    }
    else if(num==0){
        slidechange(3);
        num =3;
    }
})

rebutton1.addEventListener("click", function(){
    slidechange(0);
    redright(rebutton1);
    whiteright(redbutton2);
    whiteright(redbutton3);
    whiteright(redbutton4);
})

rebutton2.addEventListener("click", function(){
    slidechange(1);
    redright(rebutton2);
    whiteright(redbutton1);
    whiteright(redbutton3);
    whiteright(redbutton4);
})

rebutton3.addEventListener("click", function(){
    slidechange(2);
    redright(rebutton3);
    whiteright(redbutton1);
    whiteright(redbutton2);
    whiteright(redbutton4);
})

rebutton4.addEventListener("click", function(){
    slidechange(3);
    redright(rebutton4);
    whiteright(redbutton1);
    whiteright(redbutton2);
    whiteright(redbutton3);
})


a718.addEventListener("mouseover", function(){
    info1.style.display = "block";
    info1.style.top = "0";
    
})

a718.addEventListener("mouseout", function(){
    info1.style.display = "none"
    info1.style.top = "-500px";

});

info1.addEventListener("mouseover", function(){
    info1.style.display = "block";
    info1.style.top = "0";
    
})

info1.addEventListener("mouseout", function(){
    info1.style.display = "none";
    info1.style.top = "-500px";

});

a911.addEventListener("mouseover", function(){
    info2.style.display = "block";
    info2.style.top = "0";
    
})

a911.addEventListener("mouseout", function(){
    info2.style.display = "none";
    info2.style.top = "-500px";

});

info2.addEventListener("mouseover", function(){
    info2.style.display = "block";
    info2.style.top = "0";
    
})

info2.addEventListener("mouseout", function(){
    info2.style.display = "none";
    info2.style.top = "-500px";

});

taycan.addEventListener("mouseover", function(){
    info3.style.display = "block";
    info3.style.top = "0";
    
})

taycan.addEventListener("mouseout", function(){
    info3.style.display = "none";
    info3.style.top = "-500px";

});

info3.addEventListener("mouseover", function(){
    info3.style.display = "block";
    info3.style.top = "0";
    
})

info3.addEventListener("mouseout", function(){
    info3.style.display = "none";
    info3.style.top = "-500px";

});

panamera.addEventListener("mouseover", function(){
    info4.style.display = "block";
    info4.style.top = "0";
    
})

panamera.addEventListener("mouseout", function(){
    info4.style.display = "none";
    info4.style.top = "-500px";

});

info4.addEventListener("mouseover", function(){
    info4.style.display = "block";
    info4.style.top = "0";
    
})

info4.addEventListener("mouseout", function(){
    info4.style.display = "none";
    info4.style.top = "-500px";

});

macan.addEventListener("mouseover", function(){
    info5.style.display = "block";
    info5.style.top = "0";
    
})

macan.addEventListener("mouseout", function(){
    info5.style.display = "none";
    info5.style.top = "-500px";

});

info5.addEventListener("mouseover", function(){
    info5.style.display = "block";
    info5.style.top = "0";
    
})

info5.addEventListener("mouseout", function(){
    info5.style.display = "none";
    info5.style.top = "-500px";

});

cayenne.addEventListener("mouseover", function(){
    info6.style.display = "block";
    info6.style.top = "0";
    
})

cayenne.addEventListener("mouseout", function(){
    info6.style.display = "none";
    info6.style.top = "-500px";

});

info6.addEventListener("mouseover", function(){
    info6.style.display = "block";
    info6.style.top = "0";
    
})

info6.addEventListener("mouseout", function(){
    info6.style.display = "none";
    info6.style.top = "-500px";

});

shopdetail.addEventListener("mouseover", function(){
    shopmenu.style.display = "block";
    shopmenu.style.top = "0";
    
})

shopdetail.addEventListener("mouseout", function(){
    shopmenu.style.display = "none";
    shopmenu.style.top = "-500px";

});

shopmenu.addEventListener("mouseover", function(){
    shopmenu.style.display = "block";
    shopmenu.style.top = "0";
    
})

shopmenu.addEventListener("mouseout", function(){
    shopmenu.style.display = "none";
    shopmenu.style.top = "-500px";

});

shopadd.addEventListener("mouseover", function(){
    shopmd.style.display = "block";
    
})

shopadd.addEventListener("mouseout", function(){
    shopmd.style.display = "none";

});

shopmd.addEventListener("mouseover", function(){
    shopmd.style.display = "block";
    
})

shopmd.addEventListener("mouseout", function(){
    shopmd.style.display = "none";

});

main1.addEventListener("mouseover", function(){
    button1.style.display = "block";
    button2.style.display = "block";
});

main1.addEventListener("mouseout", function(){
    button1.style.display = "none";
    button2.style.display = "none";
});

