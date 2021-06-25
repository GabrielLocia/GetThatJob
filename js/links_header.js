export function redirectToLogin(link){

    const d = document,
    $lin = d.getElementById(link);
    
       $lin.addEventListener('mousedown', (event) => {
        console.log(event.target.href);
//     isRecreuiter = true;
//         // fetch(event.target.href)
//         //   .then((response) => response.text())
//         //   .then((data) => {
//         //      console.log("login",data.match("id=role-login"));
//         //     console.log("data:",data );
//         //     //document.getElementById('job-for-you').innerHTML = data;
//         //   });
//     //$roleLogin.innerText = "As Recruiter";

});

}