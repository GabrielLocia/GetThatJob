import { getDate, removeLi } from "./export.js";
const token = JSON.parse(localStorage.getItem("tokenRecruiter"));
//let dataJob;
console.log(token);

//Globls
let $fragmentB = document.createDocumentFragment();
/***Eventos botones principales*** */
((d) => {
  const $job = d.getElementById("jobsbutton"),
    $windosJobs = d.getElementById("jobs"),
    $windowCandidates = d.getElementById("your-applications"),
    $modalJobCandidates = d.getElementById("modal-job-canditates"),
    $modalPostJob = d.getElementById("modalPosNewJob")  

  // $jobsCanditaesButtons.addEventListener("mousedown", (event) => {
  //   $windosJobs.classList.add("none");
  //   $modalJobCandidates.classList.remove("none");
  //   $modalJobCandidates.classList.toggle("show");
  //   $modalJobCandidates.classList.toggle("active");
  // });

  $job.addEventListener("mousedown", (event) => {
    // if (!$windosJobs.classList.contains("none")) {
    //   $modalJobCandidates.classList.add("none");
    // }
    // // if (!$windosJobs.classList.contains("none")) {
    // //   $windosJobs.classList.add("none");
    // // }
    // $windosJobs.classList.toggle("none");
    $modalJobCandidates.classList.remove("show");
    $modalJobCandidates.classList.remove("active");
    $modalJobCandidates.classList.add("none");

    $windosJobs.classList.add("show");
    $windosJobs.classList.add("active");

    $windowCandidates.classList.remove("show");
    $windowCandidates.classList.remove("active");

    $modalPostJob.classList.add("none")
    $windosJobs.classList.remove("none")
    $windosJobs.classList.remove("none")

  });

  $windowCandidates.addEventListener("mousedown", (event) => {});
})(document);

/***Eventos botones principales*** */

/***Botones en la lista Jobs*** */
const addRequest = () => {
  const $templateButtonRequest = document.getElementById(
      "templateButtonRequest"
    ).content,
    $modalRequestsCandidates = document.getElementById("modal-job-canditates"),
    $ulRequests = document.getElementById("listButtonRequest"),
    objetRequest = {},
    $fragmentButtons = document.createDocumentFragment(),
    $fragmentCandidates = document.createDocumentFragment();

  fetch(
    "https://get-that-job-backend.herokuapp.com/api/requests/application/",
    {
      headers: {
        Authorization: token,
      },
    }
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((requests) => {
      requests.data.forEach((request) => {
        console.log(request);
        console.log(request.job.title);
        // console.log("Objeto",objetRequest[request.job.title].jobTitle)
        if (objetRequest.hasOwnProperty(request.job.title)) {
          objetRequest[request.job.title].cont++;
        } else {
          objetRequest[request.job.title] = {
            data: request,
            cont: 1,
          };
        }
      });
      const arRequests = Object.values(objetRequest);
      arRequests.forEach((re) => {
        console.log(re);

        const buttonRequest = document.createElement("button"),
          $windosJobs = document.getElementById("jobs");

        buttonRequest.setAttribute(
          "class",
          "style-importan nav-link sidebar-button-user list-group-item list-group-item-action button-selection d-flex  position-relative"
        );
        console.log(re.data.id);
        buttonRequest.setAttribute("id", re.data.job.id);
        buttonRequest.setAttribute("data-bs-toggle", "pill");
        buttonRequest.setAttribute("data-bs-target", "#modal-job-canditates");
        buttonRequest.setAttribute("type", "button");
        buttonRequest.setAttribute("role", "tab");
        buttonRequest.setAttribute("aria-controls", "modal-job-canditates");
        buttonRequest.setAttribute("aria-selected", "false");

        $templateButtonRequest.getElementById(
          "buttonRequestJobTitle"
        ).innerText = re.data.job.title;
        $templateButtonRequest.getElementById(
          "buttonRequestLocation"
        ).innerText = re.data.job.location;
        $templateButtonRequest.getElementById("buttonRequestNumber").innerText =
          re.cont + " applicants";

        //Eventos de ButtonRequests
        buttonRequest.addEventListener("mousedown", (event) => {
          $modalRequestsCandidates.classList.remove("none");
          $modalRequestsCandidates.classList.add("show");
          $modalRequestsCandidates.classList.add("active");

          if ($windosJobs.classList.contains("active")) {
            $windosJobs.classList.remove("show");
            $windosJobs.classList.remove("active");
          }

          location.href = "#v-pills-tab";
          const modalJobsCandidates = document.getElementsByClassName(
            "modalJobsCandidates"
          );

          modalJobsCandidates[0].innerText = re.data.job.title;
          modalJobsCandidates[1].innerText = "Posted: " + getDate(re.data.job);

          removeLi(modalJobsCandidates[2]);

          fetch(
            `https://get-that-job-backend.herokuapp.com/api/requests/application/${re.data.job.id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          )
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((candidates) => {
              console.log(candidates);
              candidates.data.forEach((candidate) => {
                const tableElement = document.createElement("tr");
                tableElement.classList.add("row-application-job");

                tableElement.innerHTML = `
              
                        <td class="selectable">
                          ${candidate.candidate.fullname}
                          <button
                            id= ${candidate.candidateId}
                            type="button"
                            class="btn btn-primary application-button-table buttonCandidate"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-applicationDetails"
                          >
                            Launch static backdrop modal
                          </button>
                        </td>
                        <td>${candidate.candidate.professional.email}</td>
                        <td>${candidate.candidate.phone}</td>
                        <td>${candidate.candidate.description}</td>
                        
                   
              `;
                $fragmentCandidates.appendChild(tableElement);
              });

              modalJobsCandidates[2].appendChild($fragmentCandidates);

              const buttonCandidate =
                document.getElementsByClassName("buttonCandidate");
              console.log(buttonCandidate);
            })

            .catch((error) => {
              console.log(error);
            });
        });

        let $clone = document.importNode($templateButtonRequest, true);
        $fragmentB.appendChild($clone);
        buttonRequest.appendChild($fragmentB);
        $fragmentButtons.appendChild(buttonRequest);
      });

      $ulRequests.appendChild($fragmentButtons);
    });
};

addRequest();

//actualizar lista de solicitudes desde professionals
window.addEventListener("storage", (event) => {
  const update = JSON.parse(localStorage.getItem("updateRequest")),
    $listButtonRequest = document.getElementById("listButtonRequest"),
    $templateButtonRequest = document.getElementById("templateButtonRequest");
  if (update) {
    console.log("update: ", update);

    removeLi($listButtonRequest);
    console.log($templateButtonRequest);

    $templateButtonRequest.innerHTML = `
          <div
          class="
            job-company
            d-flex
            flex-column
            justify-content-start
            align-items-start
          "
          style="margin-left: 20px"
        >
         
          <p
            id="buttonRequestJobTitle"
            class="job-title"
            data-search="search-title"
          >
            
          </p>
          <span class="d-flex">
            <p id="buttonRequestLocation"></p>
            <img class="sizeFlag mb-1" src="https://flagcdn.com/mx.svg" alt="flag" />
          </span>
      
        </div>
        <p
          class="number-applications w-auto align-self-center"
          id="buttonRequestNumber"
        >
        
        </p>
        <div
          class="
            job-grup2 job-grup2R
            marg-ride
            d-flex
            align-items-center
          "
        >
          <p class="job-grade c" id="status">Open</p>
          <p class="date" id="publication-date">Posted Today</p>
        </div>
    `;
    $listButtonRequest.appendChild($templateButtonRequest);
    console.log($templateButtonRequest);
    addRequest();
    localStorage.setItem("updateRequest", false);
  }

  //waddJob();
});

//Eventos en sidebar

//*** Button Jobs */
const btnJobs = () => {
  const $btnJobs = document.getElementById("yourApplications-button"),
    $tabJobs = document.getElementById("jobs"),
    $listButtonRequest = document.getElementById("listButtonRequest"),
    $templateButtonRequest = document.getElementById("templateButtonRequest");

  $btnJobs.addEventListener("mousedown", (event) => {
    
   
      console.log("entra")
      removeLi($listButtonRequest);
      $templateButtonRequest.innerHTML = `
            <div
            class="
              job-company
              d-flex
              flex-column
              justify-content-start
              align-items-start
            "
            style="margin-left: 20px"
          >
           
            <p
              id="buttonRequestJobTitle"
              class="job-title"
              data-search="search-title"
            >
              
            </p>
            <span class="d-flex">
              <p id="buttonRequestLocation"></p>
              <img class="sizeFlag mb-1" src="https://flagcdn.com/mx.svg" alt="flag" />
            </span>
        
          </div>
          <p
            class="number-applications w-auto align-self-center"
            id="buttonRequestNumber"
          >
          
          </p>
          <div
            class="
              job-grup2 job-grup2R
              marg-ride
              d-flex
              align-items-center
            "
          >
            <p class="job-grade c" id="status">Open</p>
            <p class="date" id="publication-date">Posted Today</p>
          </div>
      `;
      $listButtonRequest.appendChild($templateButtonRequest); 
      addRequest();
    
  });
} 

btnJobs();

/***Modal Pos New Job** */
((d) => {
  const $form = d.querySelector("#form-post-new-job"),
    $divType = d.querySelector("#modalNewJobType"),
    $divSeniority = d.querySelector("#modalNewJobSeniority"),
    $tabJobs = d.getElementById("jobs"),
    $modalNewJob = d.getElementById("modalPosNewJob"),
    $selectorType = $divType.querySelectorAll("input.btn-check"),
    $selectorSeniority = $divSeniority.querySelectorAll("input.btn-check"),
    $buttonNewJob = d.getElementById("button-new-jobs"),
    $modalSelector = d.getElementById("form-select"),
    $newPostAlert = d.getElementById("loginAlert"),
    $newPostAlertContent = d.getElementById("loginAlertContent");

  let typej = "";
  let senirity = "";

  //Button new jobs in tab Jobs
  $buttonNewJob.addEventListener("click", (event) => {
    console.log("modalNewJob");
    $modalNewJob.classList.remove("none");
    $tabJobs.classList.add("none");
    const frame = document.createDocumentFragment();
    fetch("../mx.json")
      .then((resp) => resp.json())
      .then((cities) => {
        console.log("from cities file", cities);
        for (let states of cities) {
          //console.log(states);
          const option = d.createElement("option");
          option.setAttribute("value", states.city);
          option.innerText = states.city;
          frame.appendChild(option);
        }
        $modalSelector.appendChild(frame);
      });
  });

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    $selectorType.forEach((element) => {
      if (element.checked) typej = element.value;
    });

    $selectorSeniority.forEach((element) => {
      if (element.checked) senirity = element.value;
    });


    fetch("https://get-that-job-backend.herokuapp.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        title: $form[0].value,
        type: typej,
        seniority: senirity,
        salary: $form[9].value,
        location: $form[10].value,
        introduccion: $form[11].value,
        expected: $form[12].value,
        lokkin: $form[13].value,
        requirements: $form[14].value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((updateListJob) => {
        $newPostAlertContent.innerText = "Your account was created successfully";
        $newPostAlert.classList.remove("none");
        $newPostAlert.classList.add("d-flex");
        localStorage.setItem("update", JSON.stringify(updateListJob.update));
        console.log(updateListJob.data);
        console.log(updateListJob.update);

      })
      .catch((error) => {
        console.log(error);
      });

    console.log(typej);
    console.log(senirity);
    console.log($form);
  });
  // console.log($inputs);
  // console.log($selectors);
  // console.log($cheks);
})(document);
