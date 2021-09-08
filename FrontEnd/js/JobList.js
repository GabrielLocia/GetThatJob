import { p } from './export.js';
console.log(p);
const token = JSON.parse(localStorage.getItem('token'));
console.log(token);
/*** Link JobList*** */
((d) => {
  const $linkEdit = d.getElementById('linkYourProfile'),
    $windowYourProfile = d.getElementById('yourProfile'),
    $windowJobsForYou = d.getElementById('job-for-you');

  $linkEdit.addEventListener('mousedown', (event) => {
    $windowYourProfile.classList.add('active', 'show', 'edit-absolut');
    $windowYourProfile.setAttribute('aria-selected', 'true');

    $windowJobsForYou.classList.remove('show', 'active');
    $windowJobsForYou.setAttribute('aria-selected', 'false');
  });
})(document);

/*****Busqueda ************/
((d) => {
  const $inputSearch = d.getElementById('jobSearch'),
    $container = d.getElementsByClassName('button-selection');

  $inputSearch.addEventListener('keyup', (event) => {
    Array.prototype.forEach.call($container, (p, i) => {
      //obteniendo nombre del trabajo
      let aux = p.getAttribute('data-search');

      aux.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        ? p.classList.remove('filter')
        : p.classList.add('filter');
    });
  });
})(document);

/*****Busqueda ************/

/**********Funcion id aleatorios */
let random = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (1 + max - min) + min);
};
/**********Funcion id aleatorios */

/**********Funcion para configurar atributos de los elementos html */
const configAtribute = (
  $button,
  $divJobCompany,
  $imgLogoCompany,
  $spansearchTitle,
  $pJobTitle,
  $spanCompanyAndCity,
  $imgjobNationFlag,
  $divJobGrup2,
  $divhov,
  $imgVector$,
  $divpay,
  $psalaryRange,
  $divarow,
  $pJobTime,
  $pJobSeniority,
  $pData,
  id,
  $pCompanyAndCity,
  job
) => {
  $button.setAttribute('id', id);
  $button.setAttribute('type', 'button');
  $button.setAttribute(
    'class',
    'list-group-item list-group-item-action button-selection filter jobButtonResult'
  );

  $button.setAttribute('aria-current', id);
  $button.setAttribute('data-search', job.title);

  $divJobCompany.setAttribute('class', 'job-company d-flex');
  $imgLogoCompany.setAttribute('class', 'log-company');

  $imgLogoCompany.setAttribute('class', 'logo-company');
  id = 'joblogoCompany' + random(1, 100);
  $imgLogoCompany.setAttribute('id', id);
  $imgLogoCompany.setAttribute('src', '../assets/Able.png');
  $imgLogoCompany.setAttribute('alt', 'logoCompany');

  $spansearchTitle.setAttribute('id', 'searchTitle');
  $spansearchTitle.setAttribute('class', 'd-flex flex-column searchTitle');

  $pJobTitle.setAttribute('class', 'job-title');
  $pJobTitle.setAttribute('id', 'job-title w-auto');
  $pJobTitle.innerText = job.title;
  $spanCompanyAndCity.setAttribute('class', 'd-flex');
  $pCompanyAndCity.setAttribute('id', 'companyAndCity');
  $pCompanyAndCity.innerText = job.company + '-' + job.location;

  $imgjobNationFlag.setAttribute('i', 'log-company');
  id = 'jobNationFlag' + random(1, 100);
  $imgjobNationFlag.setAttribute('id', id);
  $imgjobNationFlag.setAttribute('src', '../assets/image 2.png');
  $imgjobNationFlag.setAttribute('alt', 'flag');

  $divJobGrup2.setAttribute('class', 'job-grup2 d-flex align-items-center');
  $divhov.setAttribute('class', 'hov');
  $imgVector$.setAttribute('src', '../assets/Vector$.svg');
  $imgVector$.setAttribute('alt', '$');
  $divpay.setAttribute('class', 'pay');

  $psalaryRange.setAttribute('style', 'magin-bottoM:0');
  $psalaryRange.innerText = job.salary;
  $divarow.setAttribute('class', 'arow');
  $pJobTime.setAttribute('class', 'job-time c');
  $pJobTime.innerText = job.type;
  $pJobSeniority.setAttribute('class', 'job-grade c');
  $pJobSeniority.innerText = job.seniority;
  $pData.setAttribute('class', 'date ');
  $pData.innerText = 'Today';
};
/**********Funcion para configurar atributos de los elementos html */

/**********Funcion para crear estructura html */
const htmlStructure = (
  $button,
  $divJobCompany,
  $imgLogoCompany,
  $spansearchTitle,
  $pJobTitle,
  $spanCompanyAndCity,
  $imgjobNationFlag,
  $divJobGrup2,
  $divhov,
  $imgVector$,
  $divpay,
  $psalaryRange,
  $divarow,
  $pJobTime,
  $pJobSeniority,
  $pData,
  id,
  $pCompanyAndCity,
  $listJobResult
) => {
  $button.appendChild($divJobCompany);
  $divJobCompany.appendChild($imgLogoCompany);
  $divJobCompany.appendChild($spansearchTitle);
  $spansearchTitle.appendChild($pJobTitle);
  $spansearchTitle.appendChild($spanCompanyAndCity);
  $spanCompanyAndCity.appendChild($pCompanyAndCity);
  $spanCompanyAndCity.appendChild($imgjobNationFlag);

  $button.appendChild($divJobGrup2);
  $divJobGrup2.appendChild($divhov);
  $divhov.appendChild($imgVector$);
  $divhov.appendChild($divpay);
  $divpay.appendChild($psalaryRange);

  $divJobGrup2.appendChild($pJobTime);
  $divJobGrup2.appendChild($pJobSeniority);
  $divJobGrup2.appendChild($pData);

  $listJobResult.appendChild($button);
};

/**********Funcion para agregar elementos li */
const addLi = (ul, data) => {
  data.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = element;
    console.log(li);
    ul.appendChild(li);
  });
};

/**********Funcion para eliminar elementos li */
const removeLi = (ul) => {
  const $delateLi = ul.querySelectorAll('li');
  if ($delateLi)
    $delateLi.forEach((element) => {
      ul.removeChild(element);
    });
};

/**********Funcion Creadora de Botones  */
const createButtonResult = (
  $listJobResult,
  $windowJobsForYou,
  $jobModal,
  $elementsGrup1,
  id,
  job,
  jobs
) => {
  const $button = document.createElement('button'),
    $divJobCompany = document.createElement('div'),
    $imgLogoCompany = document.createElement('img'),
    $spansearchTitle = document.createElement('span'),
    $pJobTitle = document.createElement('p'),
    $spanCompanyAndCity = document.createElement('span'),
    $pCompanyAndCity = document.createElement('p'),
    $imgjobNationFlag = document.createElement('img'),
    $divJobGrup2 = document.createElement('div'),
    $divhov = document.createElement('div'),
    $imgVector$ = document.createElement('img'),
    $divpay = document.createElement('div'),
    $psalaryRange = document.createElement('p'),
    $divarow = document.createElement('div'),
    $pJobTime = document.createElement('p'),
    $pJobSeniority = document.createElement('p'),
    $pData = document.createElement('p');

  //Configurando atributos
  configAtribute(
    $button,
    $divJobCompany,
    $imgLogoCompany,
    $spansearchTitle,
    $pJobTitle,
    $spanCompanyAndCity,
    $imgjobNationFlag,
    $divJobGrup2,
    $divhov,
    $imgVector$,
    $divpay,
    $psalaryRange,
    $divarow,
    $pJobTime,
    $pJobSeniority,
    $pData,
    id,
    $pCompanyAndCity,
    job
  );
  //Configurando atributos

  //Agregando eventos a cada boton de la lista
  $button.addEventListener('click', (event) => {
    $windowJobsForYou.classList.add('none');
    $jobModal.classList.toggle('none');
    // console.log(event);
    // console.log($button.dataset.search);
    const data = jobs.find((data) => data.title == $button.dataset.search);
    console.log($elementsGrup1);
    $elementsGrup1[1].innerText = data.title;
    $elementsGrup1[2].innerText = data.type;
    $elementsGrup1[3].innerText = data.seniority;
    $elementsGrup1[4].innerText = data.jobIntroducction;

    removeLi($elementsGrup1[5]);
    addLi($elementsGrup1[5], data.expected);

    removeLi($elementsGrup1[6]);
    addLi($elementsGrup1[6], data.looking);

    removeLi($elementsGrup1[7]);
    addLi($elementsGrup1[7], data.requirements);

    $elementsGrup1[8].innerText = data.company;

    console.log(data.description);
    $elementsGrup1[9].innerText = data.description;
  });
  //Agregando eventos a cada boton de la lista

  /******Extructura html**** */
  htmlStructure(
    $button,
    $divJobCompany,
    $imgLogoCompany,
    $spansearchTitle,
    $pJobTitle,
    $spanCompanyAndCity,
    $imgjobNationFlag,
    $divJobGrup2,
    $divhov,
    $imgVector$,
    $divpay,
    $psalaryRange,
    $divarow,
    $pJobTime,
    $pJobSeniority,
    $pData,
    id,
    $pCompanyAndCity,
    $listJobResult
  );
  /******Extructura html**** */
};

/*****Agregar elementos a al lista jobs for you************/
((d) => {
  const $listJobResult = d.getElementById('jobListResult'),
    //$windowYourProfile = d.getElementById('yourProfile'),
    $windowJobsForYou = d.getElementById('job-for-you'),
    $jobModal = d.getElementById('modal-job-details'),
    $elementsGrup1 = document.getElementsByClassName('dat-modalElement');

  //consulta al banckend en esta caso consulta a un archivo de pruebas
  fetch('../Jobs.json')
    .then((resp) => resp.json())
    .then((jobs) => {
      console.log('from Jobs file', jobs);
      for (let job of jobs) {
        console.log(job);

        let ran = random(1, 50);
        let id = 'jobButton' + ran;

        createButtonResult(
          $listJobResult,
          $windowJobsForYou,
          $jobModal,
          $elementsGrup1,
          id,
          job,
          jobs
        );
      }
    });
})(document);
/*****Agregar elementos a al lista jobs for you************/

/******Job ButtonsResult ****** */
((d) => {
  const $jobButton = d.getElementById('jobButtonResult'),
    $windowJobForYou = d.getElementById('job-for-you'),
    $jobModal = d.getElementById('modal-job-details'),
    $buttonJobForYou = d.getElementById('jobsForYou-button'),
    $buttonYourApplication = d.getElementById('yourApplications-button'),
    $buttonYourProfile = d.getElementById('yourProfile-button'),
    $buttonModalReturn = d.getElementById('modal-button-return');

  $buttonYourApplication.addEventListener('click', (event) => {
    if (!$buttonJobForYou.classList.contains('none'))
      $jobModal.classList.add('none');
  });

  $buttonModalReturn.addEventListener('click', (event) => {
    $windowJobForYou.classList.toggle('none');
    if (!$buttonJobForYou.classList.contains('none')) {
      $jobModal.classList.add('none');
    }
  });

  $buttonYourProfile.addEventListener('click', (event) => {
    if (!$buttonJobForYou.classList.contains('none'))
      $jobModal.classList.add('none');
  });
})(document);
/******Job ButtonsResul ****** */

/**obteener email del candidato */
const email = () => {
  const $yourProfileButton = document.getElementById('yourProfile-button'),
        $email = document.getElementById("form-your-profile-email");

  

  $yourProfileButton.addEventListener('click', (event) => {
    console.log("En evento: ",token)
 
    fetch('http://127.0.0.1:3000/api/candidates/professional/', {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $email.value = json.data.email;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

email();


const candidate = () => {
  const $yourProfileButton = document.getElementById('yourProfile-button'),
        $email = document.getElementById("form-your-profile-email");

  

  $yourProfileButton.addEventListener('click', (event) => {
    console.log("En evento: ",token)
 
    fetch('http://127.0.0.1:3000/api/candidates/professional/', {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $email.value = json.data.email;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

candidate();
