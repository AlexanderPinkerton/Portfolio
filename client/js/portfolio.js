Template.carousel.helpers({

});


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
    }
});




