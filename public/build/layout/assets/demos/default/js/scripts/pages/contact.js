// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
            lat: 5.118823,
            lng: 5.676084,
			scrollwheel: false,
		});


		mapbg.addMarker({
			lat: 5.118823,
			lng: 5.676084,
			title: 'Innove IT & Consulting',
			infoWindow: {
				content: '<h3>Innove It & Consulting .</h3><p>25, Lorem Lis Street, Orange C, Abidjan, Côte d\'ivoire</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
    $( window ).resize(function() {
		PageContact.init();
	});
});