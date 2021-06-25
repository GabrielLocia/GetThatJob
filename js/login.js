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

function GetUser(){
   

  
}

/**validando inicio de sesion ****/
((d) => {
  const $submitButton = d.getElementById('loginButton'),
    $emailInput = d.getElementById('form-login-email'),
    $passwordInput = d.getElementById('form-login-password'),
    $loginRole = d.getElementById('login-role');

  $submitButton.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();

    fetch('../Pruebas.json')
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user);
        for (user of user) {
          console.log(user);
          if (
            $emailInput.value == user['email'] &&
            $passwordInput.value == user['password']
          ) {
            console.log('entrar');
            console.log($loginRole.innerText);
            if($loginRole.innerText==="As Recreuiter")
                location.href = "../views/Recreuiter.html";
            else
                location.href = "../views/JobList.html";
          } else console.log('Correo o contreaseña incorrecta');
        }

        //   user.forEach(user=>{
        //     console.log("Email: ",$emailInput.value);
        //     console.log(user['email']);
        //     if($emailInput.value == user['email'] & $passwordInput.value==user['password']){
        //         console.log("entrar");
        //         break;
        //     }
        //     else
        //         console.log("Correo o contreaseña incorrecta");
        //   })
      });
  });
})(document);