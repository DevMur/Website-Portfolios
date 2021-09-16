// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAKU2G9DSUrgBpQm4SG_1eYpd",
  authDomain: "titleblock-6be83.firebaseapp.com",
  databaseURL: "https://titleblock-6be83-default-rtdb.firebaseio.com",
  projectId: "titleblock-6be83",
  storageBucket: "537184019554",
  messagingSenderId: "1:537184019554:web:824fe6cbfbd760317b9d3b"
};
firebase.initializeApp(config);

// Reference messages collection
//var messagesRef = firebase.database().ref('property');
var property = firebase.database().ref('property');

// Listen for form submit
document.getElementById('submissionForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var owner_firstName = getInputVal('owner_firstName');
  var owner_lastName = getInputVal('owner_lastName');
  var address = getInputVal('address');
  var address_line2 = getInputVal('address_line2');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  //saveMessage(owner, address, email, address_line2, message);
  fileProperty(owner_firstName, owner_lastName, address, email, address_line2, message);


  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('submissionForm').reset();
}

// Function to get get form values
//this is highly redundent, long lines scaredy cat
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
// function saveMessage(owner, address, email, address_line2, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     owner: owner,
//     address:address,
//     email:email,
//     address_line2:address_line2,
//     message:message
//   });
// }
function fileProperty(owner_firstName, owner_lastName, address, email, address_line2, message){
  var newProperty = property.push();
  newProperty.set({
    owner_firstName: owner_firstName,
    owner_lastName: owner_lastName,
    address: address,
    email: email,
    address_line2: address_line2,
    message: message
  });
}
