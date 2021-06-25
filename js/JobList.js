/*** Link JobList*** */
((d) => {
  const $linkEdit = d.getElementById('linkYourProfile'),
    $yourProfile = d.getElementById('yourProfile'),
    $jobsForYou = d.getElementById('job-for-you');

  $linkEdit.addEventListener('mousedown', (event) => {
    console.log(event);
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

  //   $jobButton.addEventListener('mousedown', function (event) {
  //     $aux.innerHTML = document.getElementById('job-for-you');

  //     fetch('Modal-Job-Details.html')
  //       .then((response) => response.text())
  //       .then((data) => {
  //         console.log("data: " );
  //         document.getElementById('job-for-you').innerHTML = data;
  //       });

  // });
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
    $container = d.getElementsByClassName('button-selection'),
    $element = d.getElementsByClassName('job-title');
  console.log($element);

  $inputSearch.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    Array.prototype.forEach.call($container, (p, i) => {
      console.log($container[i]);
      aux = p.getAttribute('data-search');
      console.log(aux);
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
 

  fetch('../Jobs.json')
    .then((resp) => resp.json())
    .then((jobs) => {
      console.log(jobs);
      for (jobs of jobs) {
        console.log(jobs);

        let ran = random(1, 50);
        let id = 'jobButton' + ran;


        const $listJobResult = d.getElementById('jobListResult'),
        $button = d.createElement('button'),
        $divJobCompani = d.createElement('div'),
        $imgLogoCompani = d.createElement('img'),
        $spansearchTitle = d.createElement('span'),
        $pJobTitle = d.createElement('p'),
        $spanCompanyAndCity = d.createElement('span'),
        $pCompanyAndCity = d.createElement('p'),
        $imgjobNationFlag = d.createElement('img'),
        $divJobGrup2 = d.createElement('div'),
        $divhov = d.createElement('div'),
        $imgVector$ = d.createElement('img'),
        $divpay = d.createElement('div'),
        $psalaryRange = d.createElement('p'),
        $divarow = d.createElement('div'),
        $pJobTime = d.createElement('p'),
        $pJobSeniority = d.createElement('p'),
        $pData = d.createElement('p');

        $button.setAttribute('id', id);
        $button.setAttribute('type', 'button');
        $button.setAttribute(
          'class',
          'list-group-item list-group-item-action button-selection filter'
        );

        $button.setAttribute('aria-current', id);
        $button.setAttribute('data-search', jobs.title);

        $divJobCompani.setAttribute('class', 'job-compani d-flex');
        $imgLogoCompani.setAttribute('class', 'log-compani');

        $imgLogoCompani.setAttribute('class', 'logo-compani');
        id = 'joblogoCompani' + random(1, 100);
        $imgLogoCompani.setAttribute('id', id);
        $imgLogoCompani.setAttribute('src', '../assets/Able.png');
        $imgLogoCompani.setAttribute('alt', 'logoCompani');

        $spansearchTitle.setAttribute('id', 'searchTitle');
        $spansearchTitle.setAttribute(
          'class',
          'd-flex flex-column searchTitle'
        );

        $pJobTitle.setAttribute('class', 'job-title');
        $pJobTitle.setAttribute('id', 'job-title');
        $pJobTitle.innerText = jobs.title;
        $spanCompanyAndCity.setAttribute('class', 'd-flex');
        $pCompanyAndCity.setAttribute('id', 'companyAndCity');
        $pCompanyAndCity.innerText = jobs.company + '-' + jobs.location;

        $imgjobNationFlag.setAttribute('i', 'log-compani');
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

        $button.appendChild($divJobCompani);
        $divJobCompani.appendChild($imgLogoCompani);
        $divJobCompani.appendChild($spansearchTitle);
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
