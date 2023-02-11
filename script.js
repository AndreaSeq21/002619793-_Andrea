var form = document.getElementById("myForm");
	 form.addEventListener("submit", submitted);
     form.addEventListener("reset", resetFunc);


     
     function resetFunc() {
        form.reset();
        const errorArray = ["error_firstName", "error_lastName", "error_emailId","error_phoneNumber","error_zipcode","error_drink"];
        const errorArrayName = ["firstName", "lastName", "emailId","phoneNumber","zipcode","drink"];
        document.getElementById("spanTag").style.display = "none";
        document.getElementById("text_area").style.display = "none";
        document.getElementById("checkboxSelectValue").style.display = "none";
        for (let i = 0; i < errorArray.length; i++) {
           
            document.getElementById(errorArray[i]).style.display = "none";
          }

          for (let i = 0; i < errorArrayName.length; i++) {
           
            document.getElementById(errorArrayName[i]).style.borderStyle = "none";
          }
         
 
        
    }
            var validFirstName = false;
			var validLastName = false;
            var validEmail = false;
            var validContact = false;
			var validZipcode = false;
            var validDrinkDesc= false;
            var validdrinkComm = false;

            // regex checks variables
            var regName = /^[a-zA-Z]+$/;
            var regEmail =/([\w\.]+)@(northeastern+)\.(edu)/;
            var regPhone = /\d{3}-?\d{3}-\d{4}(?:-[0-9]{6})?$/;
			var regZipcode= /^[0-9]{5}(?:-[0-9]{4})?$/;
            var regDrinkDesc=/^[a-zA-Z]+$/;

            var firstName = document.getElementById("firstName");
            firstName.addEventListener("input", validate);

			var lastName = document.getElementById("lastName");
            lastName.addEventListener("input", validate);

            var emailId = document.getElementById("emailId");
            emailId.addEventListener("input", validate);

            var phoneNumber = document.getElementById("phoneNumber");
            phoneNumber.addEventListener("input", validate);

			var zipCode = document.getElementById("zipcode");
            zipCode.addEventListener("input", validate);

      		var checkboxSelect = document.getElementById("checkboxSelectValue");
      		checkboxSelect.addEventListener("change", addTextFieldToForm);


			function validate(e) {
                console.log("validate");
                var value = e.target.value;
                console.log(value);
                var type = this.id;
                console.log("this.id "+ type);
                var em = "error_" + type;

                switch (type) {
                    case "firstName":
                        if (!value.trim().match(regName)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validFirstName = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validFirstName = true;
                        }
                        break;

					case "lastName":
                        if (!value.trim().match(regName)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validLastName = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validLastName = true;
                        }
                        break;

                    case "emailId":
                        if (!value.trim().match(regEmail)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validEmail = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validEmail = true;
                        }
                        break;

                    case "phoneNumber":
                        if (!value.trim().match(regPhone)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validContact = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validContact = true;
                        }
                        break;

					case "zipcode":
                        if (!value.trim().match(regZipcode)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validZipcode = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validZipcode = true;
                        }
                        break;

                    case "drink":
                        if (!value.trim().match(regDrinkDesc)) {
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validDrinkDesc = false;
                        }
                        else {
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validDrinkDesc = true;
                        }
                        break;
                }
            }

            function submitted(e) {
                
                e.preventDefault();
                console.log("submitted");
                console.log(validFirstName + "|" + validLastName + "|" + validEmail + "|" + validContact + "|" + validZipcode );
                if(validFirstName && validLastName && validEmail && validContact && validZipcode) {
                    alert("Data Saved Successfully");
                    document.getElementById("table").style.display="block";
                
                    var table = document.getElementById("table");
                    var row = table.insertRow(-1);
                    var title = row.insertCell(0);
                    var firstName = row.insertCell(1);
                    var lastName = row.insertCell(2);
                    var emailId =row.insertCell(3);
                    var phoneNumber = row.insertCell(4);
                    var address1 =row.insertCell(5);
                    var address2 = row.insertCell(6);
                    var city = row.insertCell(7);
                    var state = row.insertCell(8);
                    var zipcode = row.insertCell(9);
                    var hear = row.insertCell(10);
                    var comments = row.insertCell(11);
                    var selectDrink = row.insertCell(12);

                    title.innerHTML = document.querySelector('input[name="title"]:checked').value;

                    firstName.innerHTML = document.getElementById("firstName").value;
                    lastName.innerHTML = document.getElementById("lastName").value;
                    emailId.innerHTML = document.getElementById("emailId").value;

                    phoneNumber.innerHTML = document.getElementById("phoneNumber").value;
                    address1.innerHTML = document.getElementById("streetAddress1").value;
                    address2.innerHTML = document.getElementById("streetAddress2").value;
                    

                    city.innerHTML = document.getElementById("city").value;
                    state.innerHTML = document.getElementById("state").value;
                    zipcode.innerHTML = document.getElementById("zipcode").value;
                    
                    var checks=$('input[name="link"]:checked').map(function(){
                        return $(this).val();
                    }).get()

                    console.log(checks);
                    hear.innerHTML = checks;
                    comments.innerHTML = document.getElementById("comments").value;
                    selectDrink.innerHTML = document.getElementById("xyz").value;

                }
                else {
                    alert("Please enter correct details");
                }
                form.reset();
            }
			
			
function addTextFieldToForm(e) {
        console.log(e);
        var selected = e.target.checked;
        var textarea = document.getElementById("text_area");

        if (selected) {
          textarea.style.display = "block";
        } else {
          textarea.style.display = "none";
        }
      }

      function myFunction() {
        var x = document.getElementById("mySelect").value;
        var y = document.getElementById("spanTag");
        var z = document.getElementById("checkBoxDiv");

        if (x === "Hot Black Tea") {
          z.style.display = "block";
          document.getElementById("spanTag").innerHTML =
            "Hot Black Tea - Large (1$ extra)";
        } else if (x === "Cold Coffee") {
          z.style.display = "block";
          document.getElementById("spanTag").innerHTML =
            "Cold Coffee - Large ($1 extra)";
        } else if (x === "Lemon Iced Tea") {
          z.style.display = "block";
          document.getElementById("spanTag").innerHTML =
            "Lemon Iced Tea - Large ($1 extra)";
        } else if (x === "Expresso") {
          z.style.display = "block";
          document.getElementById("spanTag").innerHTML =
            "Expresso - Large ($1 extra)";
        } else if (x === "Latte") {
          z.style.display = "block";
          document.getElementById("spanTag").innerHTML =
            "Latte - Large ($1 extra)";
        }
      }


