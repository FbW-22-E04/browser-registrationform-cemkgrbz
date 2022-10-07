function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'resultDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';

      break;

    default:
      break;
  }
}

function nextDiv(element) {
  // alert("Clicked!");
  // let fatherDiv = element.parentNode.id;
  // alert(fatherDiv);

  let checkFirstName = document
    .getElementsByName("firstName")[0]
    .checkValidity();

  let checkLastName = document.getElementsByName("lastName")[0].checkValidity();

  let checkBirthDate = document
    .getElementsByName("birthDate")[0]
    .checkValidity();

  let checkNationality = document
    .getElementsByName("nationality")[0]
    .checkValidity();

  let checkAddress = document
    .getElementsByName("address")[0]
    .checkValidity();

  let checkHouseNumber = document
    .getElementsByName("houseNumber")[0]
    .checkValidity();

  let checkZipCode = document
    .getElementsByName("zipCode")[0]
    .checkValidity();
    
    let checkUsername = document
    .getElementsByName("username")[0]
    .checkValidity();

  let checkPassword = document
    .getElementsByName("password")[0]
    .checkValidity();

  let checkPasswordRepeat = document
    .getElementsByName("password-repeat")[0]
    .checkValidity();

  let checkImageFile = document
    .getElementsByName("imageFile")[0].value
    // .checkValidity();

  console.log(checkImageFile)
    

  let fatherDiv = element.parentNode.id;

  switch (fatherDiv) {
    case "personalDiv":
      if (
        checkFirstName &&
        checkLastName &&
        checkBirthDate &&
        checkNationality
      ) {
        element.parentNode.style.display = "none";
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("addressDiv").style.display = "block";
        document.getElementById("profileDiv").style.display = "none";
      } else {
        alert("You have invalid entries!!");
      }
      break;

    case "addressDiv":
        if (checkAddress&&
          checkHouseNumber&&
          checkZipCode) 
          {
        element.parentNode.style.display = "none";
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("profileDiv").style.display = "block";
        } else {
          alert("You have invalid entries!!");
        }
        break;

    case "profileDiv":
        if (checkUsername&&
          checkPassword&&
          checkPasswordRepeat&&
          checkImageFile) 
            {
        element.parentNode.style.display = "none";
        document.getElementById("resultDiv").style.display = "block";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("addressDiv").style.display = "none";

        showData()
        } else {
          alert("You have invalid entries!!");
        }
          break;
        // default:
  } 
}

function showData(){
  document.getElementById("nameLabel").innerHTML = `${document
        .getElementsByName("firstName")[0].value} ${document
          .getElementsByName("lastName")[0].value}`;
  
  document.getElementById("birthDateLabel").innerHTML = document
  .getElementsByName("birthDate")[0].value;

  document.getElementById("nationalityLabel").innerHTML = document
  .getElementsByName("nationality")[0].value;

  document.getElementById("addressLabel").innerHTML = `${document
    .getElementsByName("address")[0].value}, ${document
      .getElementsByName("houseNumber")[0].value}, ${document
        .getElementsByName("zipCode")[0].value}`;

  document.getElementById("usernameLabel").innerHTML = document.getElementsByName("username")[0].value;

  document.getElementById("passwordLabel").innerHTML = document.getElementsByName("password")[0].value;

  document.getElementById("photoLabel").src = document.getElementsByName("imageFile")[0].value.replace("C:\\fakepath\\", "./images/");

}

