const submitSingInProfessional = () => {
  const d = document;

  d.addEventListener("submit", (event) => {
    event.preventDefault();
    const $form = d.querySelector(".signUpProfessional"),
      $inputs = $form.querySelectorAll("input"),
      $loader = d.getElementById("loader"),
      $alert = d.getElementById("signUpAlert"),
      $alertContent = d.getElementById("signUpAlertContent"),
      $signAlertIcon = d.getElementById("signAlertIcon");

    console.log($inputs);
    $loader.classList.remove("none");
    $loader.classList.add("d-flex");
    $loader.classList.add("justify-content-center")

    fetch("https://get-that-job-backend.herokuapp.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: $inputs[0].value,
        password: $inputs[1].value,
        confirmPassword: $inputs[2].value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
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
            location.href = "../views/Login.html";
          }, 3000);
        }, 3000);

        // location.href = '../views/Login.html';
      })
      .catch((err) => {
        console.log("error:", err);
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

submitSingInProfessional();
