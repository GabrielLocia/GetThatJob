const submitSingInProfessional = () => {
    const d = document;
  
    d.addEventListener('submit', (event) => {
      event.preventDefault();
      const $form = d.querySelector('.signUpProfessional'),
        $inputs = $form.querySelectorAll('input');
  
      console.log($inputs);
  
      fetch('http://127.0.0.1:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: $inputs[0].value,
          password: $inputs[1].value,
          confirmPassword: $inputs[2].value,
        }),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json)
          location.href = '../views/Login.html';
        })
        .catch((err) => {
          console.log
          console.log(err);
        });
    });
  };
  
  submitSingInProfessional();
  