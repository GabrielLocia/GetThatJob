/**Manejo de Links Internos */

((d) => {
  const $flagRecreuiter = d.getElementById('flagRecreuiter'),
    $flagProfessional = d.getElementById('flagProfessional'),
    $loginRole = d.getElementById('login-role');

  $flagRecreuiter.addEventListener('click', (event) => {
    $loginRole.innerText = 'As Recreuiter';
  });

  $flagProfessional.addEventListener('mousedown', (event) => {
    $loginRole.innerText = 'As Professional';
  });
})(document);

/**Manejo de links externs */

((d) => {
  const $flagRecreuiter = d.getElementById('login-role');
  let remplaza = '/+/gi',
    url = window.location.href,
    var_pos;

  url = unescape(url);
  url = url.replace(remplaza, ' ');
  url = url.toUpperCase();

  var_pos = url.indexOf('TYPE');

  console.log(url);

  if (var_pos != -1) {
    let pos_separator = url.indexOf('&', var_pos);

    if (pos_separator != -1) {
      console.log('esto', url.substring(var_pos + 1, pos_separator));
    } else {
      console.log('esto otro', url.substring(var_pos, url.length));
      if (url.substring(var_pos, url.length) == 'TYPE=RECREUITER')
        $flagRecreuiter.innerText = 'As Recreuiter';
    }
  } else {
    return 'NO_ENCONTRADO';
  }
})(document);

/**validando inicio de sesion ****/
((d) => {
  const $submitButton = d.getElementById('loginButton'),
    $emailInput = d.getElementById('form-login-email'),
    $passwordInput = d.getElementById('form-login-password'),
    $loginRole = d.getElementById('login-role');

  $submitButton.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();
    console.log($loginRole.innerText)

    fetch('http://127.0.0.1:5000/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: $emailInput.value,
        password: $passwordInput.value,
        role: $loginRole.innerText
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        if(json.message === "ok"){
          console.log($loginRole.innerText);
          if ($loginRole.innerText === 'As Recreuiter')
            location.href = '../views/Recreuiter.html';
          else location.href = '../views/JobList.html';
          
        }else
          alert(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
  });
})(document);
/**validando inicio de sesion ****/
