/**Manejo de Links Internos */

((d) => {
  const $flagRecreuiter = d.getElementById("flagRecreuiter"),
    $flagProfessional = d.getElementById("flagProfessional"),
    $loginRole = d.getElementById("login-role");

  $flagRecreuiter.addEventListener("click", (event) => {
    $loginRole.innerText = "As Recruiter";
  });

  $flagProfessional.addEventListener("mousedown", (event) => {
    $loginRole.innerText = "As Professional";
  });
})(document);

/**Manejo de links externs */

((d) => {
  const $flagRecreuiter = d.getElementById("login-role");
  let remplaza = "/+/gi",
    url = window.location.href,
    var_pos;

  url = unescape(url);
  url = url.replace(remplaza, " ");
  url = url.toUpperCase();

  var_pos = url.indexOf("TYPE");

  console.log(url);

  if (var_pos != -1) {
    let pos_separator = url.indexOf("&", var_pos);

    if (pos_separator != -1) {
      console.log("esto", url.substring(var_pos + 1, pos_separator));
    } else {
      console.log("esto otro", url.substring(var_pos, url.length));
      if (url.substring(var_pos, url.length) == "TYPE=RECRUITER")
        $flagRecreuiter.innerText = "As Recruiter";
    }
  } else {
    return "NO_ENCONTRADO";
  }
})(document);

/**validando inicio de sesion ****/
((d) => {
  const $submitButton = d.getElementById("loginButton"),
    $emailInput = d.getElementById("form-login-email"),
    $passwordInput = d.getElementById("form-login-password"),
    $loginRole = d.getElementById("login-role"),
    $loader = d.getElementById("loader"),
    $loginAlert = d.getElementById("loginAlert"),
    $loginAlertContent = d.getElementById("loginAlertContent");

  $submitButton.addEventListener("click", (event) => {
    console.log(event);
    event.preventDefault();
    console.log($loginRole.innerText);
    $loader.classList.remove("none");
    $loader.classList.add("d-flex");
    $loader.classList.add("justify-content-center");
    if ($loginRole.innerText === "As Recruiter") {
      console.log("recruiter");
      fetch(
        "https://get-that-job-backend.herokuapp.com/api/auth/recruiters/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: $emailInput.value,
            password: $passwordInput.value,
            role: $loginRole.innerText,
          }),
        }
      )
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          $loader.classList.remove("none");
          $loader.classList.add("d-flex");
          $loader.classList.add("justify-content-center");

          setTimeout(() => {
            console.log("loaderoff");
            $loader.classList.add("none");
            $loader.classList.remove("d-flex");
            $loader.classList.remove("justify-content-center");

            if (json.message === "Authenticated sucessfully") {
              console.log(json);
              localStorage.setItem(
                "tokenRecruiter",
                JSON.stringify(json.token)
              );
              console.log($loginRole.innerText);
              location.href = "../views/Recruiter.html";
            } else alert(json.message);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          $loginAlert.innerText = "Unauthorized";
          $loginAlert.classList.remove("none");
          $loginAlert.classList.add("d-flex");

          setTimeout(() => {
            $loginAlert.classList.add("none");
            $loginAlert.classList.remove("d-flex");
          }, 2000);
        });
      } else {
      fetch("https://get-that-job-backend.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: $emailInput.value,
          password: $passwordInput.value,
          role: $loginRole.innerText,
        }),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          $loader.classList.remove("none");
          $loader.classList.add("d-flex");
          $loader.classList.add("justify-content-center");
          setTimeout(() => {
            $loader.classList.add("none");
            $loader.classList.remove("d-flex");
            $loader.classList.remove("justify-content-center");

            if (json.message === "Authenticated sucessfully") {
              console.log(json);
              localStorage.setItem("token", JSON.stringify(json.token));
              console.log($loginRole.innerText);
              location.href = "../views/JobList.html";
            } else alert(json.message);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          $loginAlertContent.innerText = "Unauthorized";
          $loginAlert.classList.remove("none");
          $loginAlert.classList.add("d-flex");

          setTimeout(() => {
            $loginAlert.classList.add("none");
            $loginAlert.classList.remove("d-flex");
          }, 3000);
        });
    }
  });
})(document);
/**validando inicio de sesion ****/
