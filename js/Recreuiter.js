/***Eventos botones principales*** */
((d) => {
  const $job = d.getElementById('jobsbutton'),
    $windosJobs = d.getElementById('jobs'),
    $jobsCanditaesButtons = d.getElementById('jobsCanditaes-button'),
    $modalJobCandidates = d.getElementById('modal-job-canditates');

  $jobsCanditaesButtons.addEventListener('mousedown', (event) => {
    $windosJobs.classList.add('none');
    $modalJobCandidates.classList.remove('none');
    $modalJobCandidates.classList.toggle('show');
    $modalJobCandidates.classList.toggle('active');
  });

  $job.addEventListener('mousedown', (event) => {
    if (!$windosJobs.classList.contains('none')) {
      $modalJobCandidates.classList.add('none');
    }
    if (!$windosJobs.classList.contains('none')) {
      $windosJobs.classList.add('none');
    }
    $windosJobs.classList.toggle('none');
    $modalJobCandidates.classList.toggle('show');
    $modalJobCandidates.classList.toggle('active');
  });
})(document);

/***Eventos botones principales*** */

/***Modal Pos New Job** */
((d) => {
  const $form = d.querySelector('#form-post-new-job'),
    $inputs = $form.querySelectorAll('input.form-control, textarea.form-control'),
    $selectors = d.getElementById("form-select"),
    $cheks = $form.querySelectorAll('input.btn-check'),
    $button = d.getElementById("new-job-button-post"),
    job = {};
    
    $button.addEventListener("click", event=>{
        console.log(event)
        $inputs.forEach(Element=>{
            console.log(Element.value);
            if(Element.getAttribute('id') == "form-your-profile-name"){
                console.log(Element.value);
                job['name'] =  Element.value;
            }
            if(Element.getAttribute('id') =="form-salary"){
                console.log(Element.value);
                job['salary'] = Element.value;
            }
            if(Element.getAttribute('id') == "form-expected"){
                console.log(Element.value);
                job['expected']= Element.value;
            }
            if(Element.getAttribute('id')=="form-looking" ){
                console.log(Element.value);
                job['looking'] =  Element.value;
            }
            if(Element.getAttribute('id')=="form-requeriments" ){
                console.log(Element.value);
                job['requeriments'] =  Element.value;
            }

        })

        $cheks.forEach(Element=>{
            console.log(Element.checked);
            if(Element.getAttribute('value')=="Full Time" && Element.checked ){
                job["type"] =  Element.value
            }
            if(Element.getAttribute('value')=="Part Time" && Element.checked ){
                job["type"] =  Element.value;
            }
            if(Element.getAttribute('value')=="Intership" && Element.checked ){
                job["type"] =  Element.value;
            }
            if(Element.getAttribute('value')=="Junior" && Element.checked ){
                job["type"] =  Element.value;
            }
            if(Element.getAttribute('value')=="Semi Senior" && Element.checked ){
                job["type"] =  Element.value;
            }
            if(Element.getAttribute('value')=="Senior" && Element.checked ){
                job["type"] =  Element.value;
            }
            if(Element.getAttribute('value')=="Expert" && Element.checked ){
                job["type"] =  Element.value;
            }
            if(Element.getAttribute('value')=="Frelance" && Element.checked ){
                job["type"] =  Element.value;
            }

        })
        job["city"] =  $selectors.value;
        console.log($selectors.value)
        console.log(job)
    });
    // console.log($inputs);
    // console.log($selectors);
    // console.log($cheks);



})(document);
