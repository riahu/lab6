//signup.js 
// add your JavaScript code to this file

$(function() {
	var stateSelect = $('.us-states');
	var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
	    state = usStates[idx];
	    //code to create new option element, populate, and append
	    option = $(document.createElement('option'));
	    option.attr('value', state.abbreviation);
	    option.html(state.name);
	    stateSelect.append(option);
	}
});

$('.signup-form').submit(function(){
    //code to execute when the sign-up form is submitted
    //this is the raw DOM form element
    //wrap it in a jQuery object so we can use jQuery methods on it
    var signupForm = $(this);
	//select a descendant input element with the name "addr-1"
    var addr1Input = signupForm.find('input[name="addr-1"]');
    var addr1Value = addr1Input.val();
    if(addr1Value.length > 0) {
    	var zippy = signupForm.find('input[name="zip"]');
    	var zipzip = zippy.val();
    	if(zipzip.length == 0) {
    		alert("DEMON FORM DEMANDS YOUR ZIP CODE, MORTAL");
    		return false;
    	}
    }
});

$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    window.location = 'http://www.google.com';
}); //cancel-signup click

$('select[name="refer"]').change(function(){
    //get a ref to the refer select
    //add the refer-other input
    var referSelect = $(this);
    var otherInput = $('[name="refer-other"]');

    //if the refer select's value in lower case is equal to "other"...
    if ('other' === referSelect.val().toLowerCase()) {
        //remove the disabled attribute from the
        //refer-other input, show it, and set focus to it
        otherInput.removeAttr('disabled');
        otherInput.show();
        otherInput.focus()
    }
    else {
        //otherwise, make the refer-other input disabled
        //and hide it
        otherInput.attr('disabled', true);
        otherInput.hide();
    }
}); //refer change function