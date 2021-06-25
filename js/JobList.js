/*** Link JobList*** */
((d) => {
  const $linkEdit = d.getElementById('linkYourProfile'),
    $yourProfile = d.getElementById('yourProfile'),
    $jobsForYou = d.getElementById('job-for-you');

  $linkEdit.addEventListener('mousedown', (event) => {
    
    $yourProfile.classList.add('active', 'show');

    $jobsForYou.classList.remove('show');
    $jobsForYou.setAttribute('aria-selected', 'false');
    $yourProfile.setAttribute('aria-selected', 'true');
  });
})(document);

/******Job Buttons ****** */
((d) => {
  const $jobButton = d.getElementById('jobButtonResult'),
    $windosJobForYou = d.getElementById('job-for-you'),
    $jobModal = d.getElementById('modal-job-details'),
    $buttonJobForYou = d.getElementById('jobsForYou-button'),
    $buttonYourApplication = d.getElementById('yourApplications-button'),
    $buttonYourProfile = d.getElementById('yourProfile-button'),
    $buttonModalReturn = d.getElementById('modal-button-return');

  $jobButton.addEventListener('click', (event) => {
    $jobModal.classList.toggle('none');
    $windosJobForYou.classList.add('none');
  });

  $buttonYourApplication.addEventListener('click', (event) => {
    if (!$buttonJobForYou.classList.contains('none'))
      $jobModal.classList.add('none');
  });

  $buttonModalReturn.addEventListener('click', (event) => {
    $windosJobForYou.classList.toggle('none');
    if (!$buttonJobForYou.classList.contains('none')) {
      $jobModal.classList.add('none');
    }
  });

  $buttonYourProfile.addEventListener('click', (event) => {
    if (!$buttonJobForYou.classList.contains('none'))
      $jobModal.classList.add('none');
  });
})(document);
/******Job Buttons ****** */

/*****Busqueda ************/
((d) => {
  const $inputSearch = d.getElementById('jobSearch'),
    $container = d.getElementsByClassName('button-selection');
 
  $inputSearch.addEventListener('keyup', (event) => {

    Array.prototype.forEach.call($container, (p, i) => {
      
      aux = p.getAttribute('data-search');
     
      aux.toLocaleLowerCase().includes(event.target.value)
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

/*****Agregar elementos a al lista jobs for you************/

((d) => {
  const $listJobResult = d.getElementById('jobListResult')



 //consulta a al banckend en esta caso consulta a un archivo de pruebas
  fetch('../Jobs.json') 
    .then((resp) => resp.json())
    .then((jobs) => {
      console.log(jobs);
      for (jobs of jobs) {
        console.log(jobs);

        let ran = random(1, 50);
        let id = 'jobButton' + ran;
        
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

        //Cargar Empleos a la lista ul 
       
        $button.setAttribute('id', id);
        $button.setAttribute('type', 'button');
        $button.setAttribute(
          'class',
          'list-group-item list-group-item-action button-selection filter'
        );

        $button.setAttribute('aria-current', id);
        $button.setAttribute('data-search', jobs.title);

        $divJobCompany.setAttribute('class', 'job-company d-flex');
        $imgLogoCompany.setAttribute('class', 'log-company');

        $imgLogoCompany.setAttribute('class', 'logo-company');
        id = 'joblogoCompany' + random(1, 100);
        $imgLogoCompany.setAttribute('id', id);
        $imgLogoCompany.setAttribute('src', '../assets/Able.png');
        $imgLogoCompany.setAttribute('alt', 'logoCompany');

        $spansearchTitle.setAttribute('id', 'searchTitle');
        $spansearchTitle.setAttribute(
          'class',
          'd-flex flex-column searchTitle'
        );

        $pJobTitle.setAttribute('class', 'job-title');
        $pJobTitle.setAttribute('id', 'job-title w-auto');
        $pJobTitle.innerText = jobs.title;
        $spanCompanyAndCity.setAttribute('class', 'd-flex');
        $pCompanyAndCity.setAttribute('id', 'companyAndCity');
        $pCompanyAndCity.innerText = jobs.company + '-' + jobs.location;

        $imgjobNationFlag.setAttribute('i', 'log-company');
        id = 'jobNationFlag' + random(1, 100);
        $imgjobNationFlag.setAttribute('id', id);
        $imgjobNationFlag.setAttribute('src', '../assets/image 2.png');
        $imgjobNationFlag.setAttribute('alt', 'flag');

        $divJobGrup2.setAttribute(
          'class',
          'job-grup2 d-flex align-items-center'
        );
        $divhov.setAttribute('class', 'hov');
        $imgVector$.setAttribute('src', '../assets/Vector$.svg');
        $imgVector$.setAttribute('alt', '$');
        $divpay.setAttribute('class', 'pay');

        $psalaryRange.setAttribute('style', 'magin-bottoM:0');
        $psalaryRange.innerText = jobs.salary;
        d = 'M0.5 12L0.500002 0L6.5 6L0.5 12Z';
        fill = 'white';
        $divarow.setAttribute('class', 'arow');
        $pJobTime.setAttribute('class', 'job-time c');
        $pJobTime.innerText = jobs.type;
        $pJobSeniority.setAttribute('class', 'job-grade c');
        $pJobSeniority.innerText = jobs.seniority;
        $pData.setAttribute('class', 'date ');
        $pData.innerText = 'Today';

        /******Extructura html**** */

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
        /******Extructura html**** */
      }
    });

  
})(document);
