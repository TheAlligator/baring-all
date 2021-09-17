$(document).ready(function() {

    // create controller
    var controller = new ScrollMagic.Controller();
  
    // pin headline scene
    var scene1 = new ScrollMagic.Scene({
        duration: 1300
    })
    .setPin('#headline')
    .addTo(controller)
    //.addIndicators({name: "1 (duration: 1300)"});

    // build reveal scenes for multiple picture
		var revealElements = document.getElementsByClassName("lounge");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							//.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
							.addTo(controller);
        }

     // build scene
		new ScrollMagic.Scene({
            triggerElement: "#reveal",
            triggerHook: 0.9,
            offset: 50, // move trigger to center of element
            reverse: false // only do once
        })
        .setClassToggle("#shoes", "visible") // add class toggle
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

  });