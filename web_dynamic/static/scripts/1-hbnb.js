$( document ).ready(function () {
	let amenityIds = [];
	$('li input[type="checkbox"]').change(function () {
		let amenityId = $(this).attr('data-id');
		if ($(this).is(':checked')) {
			amenityIds.push(amenityId);
		} else {
			amenityIds = amenityIds.filter(id => id !== amenityId);
		}
		let amenityList = amenityIds.sort().join(', ');
		$('.amenity h4').text(`${amenyList}`);
	});
});
