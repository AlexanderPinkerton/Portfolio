
Template.carousel.events({

'click .carouselItem' : function (e) {        
        //Set all of the infoItems to invsible before making clicked visible.
        //Jquery Method
        //$(".infoItem").css("display","none");
        //$("#InfoPane").css("visibility","visible");
        
        //Pure Javascript Method
        var items = document.getElementsByClassName("infoItem");
        
        for(var i=0;i<items.length;i++){
            items[i].style.display = "none";
        }
        
        document.getElementById("InfoPane").style.visibility = "visible";
    
        
		switch(e.currentTarget.id) {
    	case "item1":
            document.getElementById("app1").style.display = "inline-block";
        break;
    	case "item2":
            document.getElementById("app2").style.display = "inline-block";
        break;
        case "item3":
            document.getElementById("app3").style.display = "inline-block";
        break;
		}
    
        document.getElementById("InfoPane").scrollIntoView(true);    
    
    }
});

/*
Template.InfoPane.events({
   
'click .picture' : function (e) {
  
    document.getElementById("blurzone").setAttribute("style", "-webkit-filter: blur(20px);-moz-filter: blur(15px);-o-filter: blur(15px);-ms-filter: blur(15px);filter: blur(15px);opacity: 0.95;");
    
    var newDiv = document.createElement("div");
    newDiv.className = "pictureLargeView";
    newDiv.style.backgroundImage = "url(" + e.currentTarget.src + ")";
    document.querySelector(".NavBar").appendChild(newDiv);
    setTimeout(function(){window.bigPicture = true},500);
}
    
    
});

*/

Template.outer.events({
   
'click' : function (e) {
 
    if(window.bigPicture){
        var view = document.querySelector(".pictureLargeView");
        view.parentElement.removeChild(view);
        
        document.getElementById("blurzone").setAttribute("style", "-webkit-filter: none;-moz-filter: none;-o-filter: none;-ms-filter: none;filter: none;opacity: 1;");  
        
        window.bigPicture = false;
    }
    
},
    
'click .picture' : function (e) {
  
    document.getElementById("blurzone").setAttribute("style", "-webkit-filter: blur(20px);-moz-filter: blur(15px);-o-filter: blur(15px);-ms-filter: blur(15px);filter: blur(15px);opacity: 0.95;");
    
    var newDiv = document.createElement("div");
    newDiv.className = "pictureLargeView";
    newDiv.style.backgroundImage = "url(" + e.currentTarget.src + ")";
    document.querySelector(".NavBar").appendChild(newDiv);
    window.bigPicture = true;
}
    
    
    
});


