const table = document.getElementById("table");
const createContactForm = document.getElementById('createContactForm');
const firstNameValue = document.getElementById('firstName');
const lastNameValue = document.getElementById('lastName');
const phoneValue = document.getElementById('phone');
const loginEmail = document.getElementById('login_email');
const loginPassword = document.getElementById('login_password');
const loginButton = document.getElementById('login_btn');


// Edit this with your details and run SignUp Once to Register
// const SignUpData = {
//   email : "sam99kupo@gmail.com",
//   first_name : "Samuel",
//   last_name: "Olamide",
//   username : "Goldin",
//   password : "goldin"
// }


// const SignUp = async (url = 'http://b22ad469.ngrok.io/api/register/', data = SignUpData ) => {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   console.log(response.json());
//   return await response.json();
// }
// SignUp();

const LoginData = {
  email : loginEmail.value,
  password : loginPassword.value,
}

const Login = async (url = 'http://b22ad469.ngrok.io/api/login/', data = LoginData ) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
     mode: 'cors',
    body: JSON.stringify(data)
  });
    const resp = await response.json();
    const {token} = response.data;
    // Redirect to dashboard.html;
}

loginButton.addEventListener('click', function(e){
  e.preventDefault();
  Login();
});





// IGNORE BELOW THIS LINE,




// createContactForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   let phone = phoneValue.value;
//   let firstName = firstNameValue.value;
//   let lastName = lastNameValue.value;
//   let contactDetails = {
//     firstName, lastName, phone,
//   }
//   console.log(contactDetails)
//   contacts.push(contactDetails);
//   // console.log(e.target)
//   // console.log(contacts)
//
// })







// let renderContacts = () => {
//   for(i of contacts){
//     const tr = document.createElement("tr");
//     // const _id = indexOf(i) + 1;
//
//     tr.innerHTML = `
//     <td> ${contacts.indexOf(i) + 1}</td>
//     <td> ${i.firstName}  </td>
//     <td> ${i.lastName}  </td>
//     <td> ${i.phone}  </td>
//     <td> <img src="images/pencil.png" alt=""> || <img src="images/cross.png" alt=""></td>
//     `;
//     table.appendChild(tr);
//
//     // console.log(i);
//   }
// }
// renderContacts();
