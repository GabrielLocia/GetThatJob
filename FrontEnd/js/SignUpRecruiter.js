const submitSingInRecreuiter = () => {
  const d = document;
  const $form = d.getElementById("formRecruiter"),
  $loader = d.getElementById("loader"),
  $alert = d.getElementById("signUpAlert"),
  $alertContent = d.getElementById("signUpAlertContent"),
  $signAlertIcon = d.getElementById("signAlertIcon");

  // $inputs = $form.querySelectorAll('input'),
  // $textArea = $form.querySelectorAll('textarea');

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formdata = new FormData($form);
    console.log(formdata.getAll("email"));
    $loader.classList.remove("none");
    $loader.classList.add("d-flex");
    $loader.classList.add("justify-content-center")
    
    fetch(
      "https://get-that-job-backend.herokuapp.com/api/auth/recruiters/signup",
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setTimeout(() => {
          $loader.classList.add("none");
          $loader.classList.remove("d-flex");
          console.log("loaderoff");
          $alertContent.innerText = json.message;
          $alert.classList.remove("none");
          $alert.classList.add("d-flex");

          setTimeout(() => {
            $alert.classList.add("none");
            $alert.classList.remove("d-flex");
            location.href = "../views/Login.html?type=recruiter";
          }, 3000);
        }, 3000);

      })
      .catch((err) => {
        console.log(err);
        $alertContent.innerText = "this email is already registered";
        $alert.classList.remove("none");
        $alert.classList.add("d-flex");
        $alert.classList.remove("alert-success");
        $alert.classList.add("alert-danger");
        $signAlertIcon.setAttribute("aria-label", "Danger:");
        $loader.classList.add("none");
        $loader.classList.remove("d-flex");
        setTimeout(() => {
          $alert.classList.add("none");
          $alert.classList.remove("d-flex");
        }, 3000);
      });
  });
};

submitSingInRecreuiter();
