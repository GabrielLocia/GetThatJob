const submitSingInRecreuiter = () => {
    const d = document;
  
    d.addEventListener('submit', (event) => {
      event.preventDefault();
      const $form = d.querySelector('.signUpProfessional'),
        $inputs = $form.querySelectorAll('input');
  
      console.log($inputs);
  
      fetch('http://127.0.0.1:5000/signUp/professional', {
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
          if (json.error) {
            for (elemnt of json.error) {
              alert(elemnt.text);
            }
          } else{
            alert("Successful registration")
            location.href = '../views/Login.html';
          };
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  
  submitSingInRecreuiter();
  