// const $modalAppInputCv = document.getElementById('modal-app-input-cv');

import { redirectToLogin } from "./links_header.js";

// const $modalAppLabelCv = document.getElementById('modal-app-label-cv')

// $modalAppInputCv.addEventListener("input", event=>{
//     console.log(event.target.files[0].name);
//     $modalAppLabelCv.innerText=event.target.files[0].name
// });
let isRecreuiter = false;

/******Landin Links Header ****** */

redirectToLogin('flagRecreuiter');

// ((d) => {
//   const $flagRecreuiter = d.getElementById('flagRecreuiter'),
//     $flagProfessional = d.getElementById('flagProfessional'),
//     $roleLogin = d.getElementById('role-login');

//   $flagRecreuiter.addEventListener('mousedown', (event) => {
//     console.log(event.target.href);
//     isRecreuiter = true;
//         // fetch(event.target.href)
//         //   .then((response) => response.text())
//         //   .then((data) => {
//         //      console.log("login",data.match("id=role-login"));
//         //     console.log("data:",data );
//         //     //document.getElementById('job-for-you').innerHTML = data;
//         //   });
//     //$roleLogin.innerText = "As Recruiter";
//   });
// })(document);
/******Landin Links Header ****** */

/******Job Buttons ****** */
// ((d) => {
//   const $jobButton = d.getElementById('job-button-result'),
//     $windosJobForYou = d.getElementById("job-for-you"),
//     $jobModal = d.getElementById("modal-job-details"),
//     $buttonJobForYou = d.getElementById('jobsForYou-button'),
//     $buttonYourApplication = d.getElementById('yourApplications-button'),
//     $buttonYourProfile = d.getElementById("yourProfile-button"),
//     $buttonModalReturn = d.getElementById('modal-button-return');

// //   $jobButton.addEventListener('mousedown', function (event) {
// //     $aux.innerHTML = document.getElementById('job-for-you');

// //     fetch('Modal-Job-Details.html')
// //       .then((response) => response.text())
// //       .then((data) => {
// //         console.log("data: " );
// //         document.getElementById('job-for-you').innerHTML = data;
// //       });

//  // });
//   $jobButton.addEventListener("click",event=>{
//     $jobModal.classList.toggle("none");
//     $windosJobForYou.classList.add("none");
//   });

//   $buttonYourApplication.addEventListener("click",event=>{

//       if(!$buttonJobForYou.classList.contains('none'))
//           $jobModal.classList.add("none");
//   });

//   $buttonModalReturn.addEventListener("click",event=>{
//     $windosJobForYou.classList.toggle("none");
//     if(!$buttonJobForYou.classList.contains('none')){
//       $jobModal.classList.add("none");

//     }

// });

// $buttonYourProfile.addEventListener("click",event=>{
//     if(!$buttonJobForYou.classList.contains('none'))
//         $jobModal.classList.add("none");
// });

// })(document);
/******Job Buttons ****** */
