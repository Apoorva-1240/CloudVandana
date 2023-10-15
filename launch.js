function SURVEYFORM(){
	var name =
		document.forms.SurveyForm.FirstName.value;
    var name =
		document.forms.SurveyForm.LastName.value;
	var email =
		document.forms.SurveyForm.email.value;
	var mobile =
		document.forms.RegForm.MobileNumber.value;
	//Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
	// Javascript reGex for Mobile Number validation.
	var regMobile=/^\d{10}$/;					 
	// Javascript reGex for Name validation
	var regName = /\d+$/g;						 

	if (name == "" || regName.test(name)) {
		window.alert("Please enter your first name properly.");
		name.focus();
		return false;
	}

	if (address == "") {
		window.alert("Please enter your last name properly.");
		name.focus();
		return false;
	}
	
	if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	
	if (mobile == "" || !regMobile.test(phone)) {
		alert("Please enter valid mobile number.");
		mobile.focus();
		return false;
	}
	}

	return true;
