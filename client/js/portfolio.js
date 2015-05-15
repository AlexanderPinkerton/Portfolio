Template.carousel.helpers({

});


Template.carousel.events({

'click .carouselItem' : function (e) {
		console.log(e.currentTarget.id)
		$(".infoItem").css("display","none");
        $("#InfoPane").css("visibility","visible");
		switch(e.currentTarget.id) {
    	case "item1":
        	$("#app1").css("display","inline-block");
        break;
    	case "item2":
        	$("#app2").css("display","inline-block");
        break;
        case "item3":
        	$("#app3").css("display","inline-block");
        break;
		}

    }

});




