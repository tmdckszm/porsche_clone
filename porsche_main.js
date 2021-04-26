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
var redbutton1 =document.querySelector("#redbutton1");
var redbutton2 =document.querySelector("#redbutton2");
var redbutton3 =document.querySelector("#redbutton3");
var redbutton4 =document.querySelector("#redbutton4");
var num = 0;
var num2 = 0;

var normalSlide= document.querySelector(".normal_slide");
var normalButton1= document.querySelector("#normal_button1");
var normalButton2= document.querySelector("#normal_button2");
var redButton5 = document.querySelector("#redbutton5");
var redButton6 = document.querySelector("#redbutton6");
var redButton7 = document.querySelector("#redbutton7");
var redButton8 = document.querySelector("#redbutton8");

var page = document.querySelector("#page");
var pageHidden = document.querySelector("#page_hidden")

function normalsleft(b){
    normalSlide.style.left = b * -520+'px';
}

function slidechange(a){
    slide1.style.left = a * -1675+'px';
}

function redright(r){
    r.style.backgroundColor = "red";
}
function whiteright(w){
    w.style.backgroundColor = "white";
}

function grayright(g){
    g.style.backgroundColor ="gray";
}

button2.addEventListener("click",function(){
    num++;
    if(num<4){
        if(num==0){
            slidechange(num);
            redright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton3);
            whiteright(redbutton4);
        }
        else if(num==1){
            slidechange(num);
            redright(redbutton2);
            whiteright(redbutton1);
            whiteright(redbutton3);
            whiteright(redbutton4);
        }
        else if(num==2){
            slidechange(num);
            redright(redbutton3);
            whiteright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton4);
        }
        else if(num==3){
            slidechange(num);
            redright(redbutton4);
            whiteright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton3);
        }
    }
    else if(num==4){
        slidechange(0);
        redright(redbutton1);
        whiteright(redbutton2);
        whiteright(redbutton3);
        whiteright(redbutton4);
        num =0;
    }
    console.log(num);
});

button1.addEventListener("click",function(){
    num--;
    if(num>=0){
        if(num==0){
            slidechange(num);
            redright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton3);
            whiteright(redbutton4);
        }
        else if(num==1){
            slidechange(num);
            redright(redbutton2);
            whiteright(redbutton1);
            whiteright(redbutton3);
            whiteright(redbutton4);
        }
        else if(num==2){
            slidechange(num);
            redright(redbutton3);
            whiteright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton4);
        }
        else if(num==3){
            slidechange(num);
            redright(redbutton4);
            whiteright(redbutton1);
            whiteright(redbutton2);
            whiteright(redbutton3);
        }
    }
    else{
        slidechange(3);
        redright(redbutton4);
        whiteright(redbutton1);
        whiteright(redbutton2);
        whiteright(redbutton3);
        num =3;
    }
    console.log(num);
});

redbutton1.addEventListener("click", function(){
    slidechange(0);
    redright(redbutton1);
    whiteright(redbutton2);
    whiteright(redbutton3);
    whiteright(redbutton4);
});

redbutton2.addEventListener("click", function(){
    slidechange(1);
    redright(redbutton2);
    whiteright(redbutton1);
    whiteright(redbutton3);
    whiteright(redbutton4);
});

redbutton3.addEventListener("click", function(){
    slidechange(2);
    redright(redbutton3);
    whiteright(redbutton1);
    whiteright(redbutton2);
    whiteright(redbutton4);
})

redbutton4.addEventListener("click", function(){
    slidechange(3);
    redright(redbutton4);
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


normalButton2.addEventListener("click", function(){
    num2++;
    if(num2<4){
        if(num2==0){
            normalsleft(num2);
            redright(redButton5);
            grayright(redButton6);
            grayright(redButton7);
            grayright(redButton8);
        }
        else if(num2==1){
            normalsleft(num2);
            redright(redButton6);
            grayright(redButton5);
            grayright(redButton7);
            grayright(redButton8);

        }
        else if(num2==2){
            normalsleft(num2);
            redright(redButton7);
            grayright(redButton5);
            grayright(redButton6);
            grayright(redButton8);

        }
        else if(num2==3){
            normalsleft(num2);
            redright(redButton8);
            grayright(redButton5);
            grayright(redButton6);
            grayright(redButton7);

        }
    }
})

normalButton1.addEventListener("click",function(){
    num2--;
    if(num2>=0){
        if(num2==0){
            normalsleft(num2);
            redright(redButton5);
            grayright(redButton6);
            grayright(redButton7);
            grayright(redButton8);

        }
        else if(num2==1){
            normalsleft(num2);
            redright(redButton6);
            grayright(redButton5);
            grayright(redButton7);
            grayright(redButton8);

        }
        else if(num2==2){
            normalsleft(num2);
            redright(redButton7);
            grayright(redButton5);
            grayright(redButton6);
            grayright(redButton8);

        }
        else if(num2==3){
            normalsleft(num2);
            redright(redButton8);
            grayright(redButton5);
            grayright(redButton6);
            grayright(redButton7);
        }
    }
   
});

page.addEventListener("mouseover", function(){
    pageHidden.style.display = "block"
});

page.addEventListener("mouseout", function(){
    pageHidden.style.display = "none"
});
