var a718 = document.querySelector("#a718");
var a911 = document.querySelector("#a911");
var taycan = document.querySelector("#taycan");
var panamera = document.querySelector("#panamera");
var macan = document.querySelector("#macan");
var cayenne = document.querySelector("#cayenne");

var info = document.querySelector("#info");
var info_img_1 = document.querySelector("#info_img_1");
var info_display1 = document.querySelector("#info_display1");
var info_img_2 = document.querySelector("#info_img_2");
var info_display2 = document.querySelector("#info_display2");
var info_img_3 = document.querySelector("#info_img_3");
var info_display3 = document.querySelector("#info_display3");
var info_img_4 = document.querySelector("#info_img_4");
var info_display4 = document.querySelector("#info_display4");
var info_img_5 = document.querySelector("#info_img_5");
var info_display5 = document.querySelector("#info_display5");
var info_img_6 = document.querySelector("#info_img_6");
var info_display6 = document.querySelector("#info_display6");

var a718f = false;
var a911f = false;
var taycanf = false;
var panameraf = false;
var macanf = false;
var cayennef = false;

a718.addEventListener("mouseover", function(){
    info.style.top = "0";
    info_img_1.style.display = "block";
    info_display1.style.display = "inline-block";
});

a911.addEventListener("mouseover", function(){
    info.style.top = "0";
    info_img_2.style.display = "block";
    info_display2.style.display = "inline-block";

});

taycan.addEventListener("mouseover", function(){
    info.style.top = "0";
    info_img_3.style.display = "block";
    info_display3.style.display = "inline-block";
    

panamera.addEventListener("mouseover", function(){
    info.style.top = "0";
    info_img_4.style.display = "block";
    info_display4.style.display = "inline-block";

});

macan.addEventListener("mouseover", function(){
    info.style.top = "0";
    info_img_5.style.display = "block";
    info_display5.style.display = "inline-block";
   
});

cayenne.addEventListener("mouseover", function(){
    info.style.top = "0";
    info_img_6.style.display = "block";
    info_display6.style.display = "inline-block";
 
});


a718.addEventListener("mouseout", function(){
    info.style.top = "-600px";
    info_img_1.style.display = "none";
    info_display1.style.display = "none";
    
});

a911.addEventListener("mouseout", function(){
    info.style.top = "-600px";
    info_img_2.style.display = "none";
    info_display2.style.display = "none";
});

taycan.addEventListener("mouseout", function(){
    info.style.top = "-600px";
    info_img_3.style.display = "none";
    info_display3.style.display = "none";
});

panamera.addEventListener("mouseout", function(){
    info.style.top = "-600px";
    info_img_4.style.display = "none";
    info_display4.style.display = "none";
});

macan.addEventListener("mouseout", function(){
    info.style.top = "-600px";
    info_img_5.style.display = "none";
    info_display5.style.display = "none";
});

cayenne.addEventListener("mouseout", function(){
    info.style.top = "-600px";
    info_img_6.style.display = "none";
    info_display6.style.display = "none";
});


