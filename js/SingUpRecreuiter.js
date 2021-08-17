const submitSingInRecreuiter = () => {
  const d = document;

  d.addEventListener('submit', (event) => {
    event.preventDefault();
    const $form = d.querySelector('.signUpRecreuiter'),
      $inputs = $form.querySelectorAll('input'),
      $textArea = $form.querySelectorAll('textarea');

    console.log($inputs);

    fetch('http://127.0.0.1:5000/signUp/recreuiter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: $inputs[0].value,
        logo: $inputs[1].value,
        website: $inputs[2].value,
        email: $inputs[3].value,
        description: $textArea[0].value,
        password: $inputs[4].value,
        confirmPassword: $inputs[5].value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        if (json.error) {
          for (elemnt of json.error) {
            alert(elemnt.text);
          }
        } else {
           alert('Successful registration');
           location.href = '../views/Login.html?type=recreuiter';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

submitSingInRecreuiter();
