Template.carousel.helpers({

});


Template.carousel.events({

'click .carouselItem' : function (e) {
		console.log(e.currentTarget.id)
		$(".infoItem").css("visibility","hidden");
		switch(e.currentTarget.id) {
    	case "item1":
        	$("#app1").css("visibility","visible");
        break;
    	case "item2":
        	$("#app2").css("visibility","visible");
        break;
        case "item3":
        	$("#app3").css("visibility","visible");
        break;
		}

    }

});




