import { removeLi } from "./export.js";
// console.log(p);

//Variables Globales
const token = JSON.parse(localStorage.getItem("token"));
let dataJob,
  noCandidate = "";

console.log(token);
/*** Link JobList*** */
((d) => {
  const $linkEdit = d.getElementById("linkYourProfile"),
    $windowYourProfile = d.getElementById("yourProfile"),
    $windowJobsForYou = d.getElementById("job-for-you");

  $linkEdit.addEventListener("mousedown", (event) => {
    $windowYourProfile.classList.add("active", "show", "edit-absolut");
    $windowYourProfile.setAttribute("aria-selected", "true");

    $windowJobsForYou.classList.remove("show", "active");
    $windowJobsForYou.setAttribute("aria-selected", "false");
  });
})(document);

/*****Busqueda ************/
((d) => {
  const $inputSearch = d.getElementById("jobSearch"),
    $container = d.getElementsByClassName("button-selection");

  $inputSearch.addEventListener("keyup", (event) => {
    Array.prototype.forEach.call($container, (p, i) => {
      //obteniendo nombre del trabajo
      let aux = p.getAttribute("data-search");

      aux.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        ? p.classList.remove("filter")
        : p.classList.add("filter");
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
  $pCompanyAndCity,
  job
) => {
  $button.setAttribute("id", job.id);
  $button.setAttribute("type", "button");
  $button.setAttribute(
    "class",
    "list-group-item list-group-item-action button-selection filter jobButtonResult"
  );

  $button.setAttribute("data-search", job.title);

  $divJobCompany.setAttribute("class", "job-company d-flex ms-3");
  $imgLogoCompany.setAttribute("class", "log-company align-self-end mb-1 me-3");

  // $imgLogoCompany.setAttribute("class", "logo-company");

  $imgLogoCompany.setAttribute("src", "../assets/Able.png");
  $imgLogoCompany.setAttribute("alt", "logoCompany");

  $spansearchTitle.setAttribute("id", "searchTitle");
  $spansearchTitle.setAttribute("class", "d-flex flex-column searchTitle");

  $pJobTitle.setAttribute("class", "job-title");
  $pJobTitle.setAttribute("id", "job-title w-auto");
  $pJobTitle.innerText = job.title;
  $spanCompanyAndCity.setAttribute("class", "d-flex");
  $pCompanyAndCity.setAttribute("id", "companyAndCity");
  $pCompanyAndCity.innerText = job.recruiter.company_name + "-" + job.location;

  $imgjobNationFlag.setAttribute("i", "log-company");

  $imgjobNationFlag.setAttribute("src", "https://flagcdn.com/mx.svg");
  $imgjobNationFlag.setAttribute("alt", "flag");
  $imgjobNationFlag.setAttribute("class", "sizeFlag mb-1");

  $divJobGrup2.setAttribute("class", "job-grup2 d-flex align-items-center");
  $divhov.setAttribute("class", "hov");
  $imgVector$.setAttribute("src", "../assets/Vector$.svg");
  $imgVector$.setAttribute("alt", "$");
  $divpay.setAttribute("class", "pay");

  $psalaryRange.setAttribute("style", "magin-bottoM:0");
  $psalaryRange.innerText = job.salary;
  $divarow.setAttribute("class", "arow");
  $pJobTime.setAttribute("class", "job-time c");
  $pJobTime.innerText = job.type;
  $pJobSeniority.setAttribute("class", "job-grade c");
  $pJobSeniority.innerText = job.seniority;
  $pData.setAttribute("class", "date ");
  $pData.innerText = "Today";
};
/**********Funcion para configurar atributos de los elementos html */

/**********Funcion para configurar fechas */
const getDate = (data, month) => {
  let date = data.createdAt.split(/[A-Z]/);
  console.log("fecha: ", date);
  const d = new Date(date[0]);
  date = date[0].split("-");

  console.log("dia", date[2]);
  let dateObjet = new Object();
  if (month) {
    dateObjet = {
      0: "Jan " + date[2],
      1: "Feb " + date[2],
      2: "Mar " + date[2],
      3: "Apr " + date[2],
      4: "May " + date[2],
      5: "Jun " + date[2],
      6: "Jul " + date[2],
      7: "Aug " + date[2],
      8: "Sep " + date[2],
      9: "Oct " + date[2],
      10: "Nov " + date[2],
      11: "Dec " + date[2],
    };
    month = false;
    return dateObjet[d.getMonth()];
  }
  dateObjet = {
    0: "Januariy " + date[2] + ", " + d.getFullYear(),
    1: "February " + date[2] + ", " + d.getFullYear(),
    2: "March " + date[2] + ", " + d.getFullYear(),
    3: "April " + date[2] + ", " + d.getFullYear(),
    4: "May " + date[2] + ", " + d.getFullYear(),
    5: "June " + date[2] + ", " + d.getFullYear(),
    6: "July " + date[2] + ", " + d.getFullYear(),
    7: "August " + date[2] + ", " + d.getFullYear(),
    8: "September " + date[2] + ", " + d.getFullYear(),
    9: "October " + date[2] + ", " + d.getFullYear(),
    10: "November " + date[2] + ", " + d.getFullYear(),
    11: "December " + date[2] + ", " + d.getFullYear(),
  };

  return dateObjet[d.getMonth()];
};

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
  let elementLi = data.split("\n");

  for (let element of elementLi) {
    let $elementLi = document.createElement("li");
    $elementLi.innerText = element;
    ul.appendChild($elementLi);
  }
};

/**********Funcion para eliminar elementos li */
// export const removeLi = (ul) => {
//   const $delateLi = ul.querySelectorAll("li");
//   if ($delateLi)
//     $delateLi.forEach((element) => {
//       ul.removeChild(element);
//     });
// };

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
  const $button = document.createElement("button"),
    $divJobCompany = document.createElement("div"),
    $imgLogoCompany = document.createElement("img"),
    $spansearchTitle = document.createElement("span"),
    $pJobTitle = document.createElement("p"),
    $spanCompanyAndCity = document.createElement("span"),
    $pCompanyAndCity = document.createElement("p"),
    $imgjobNationFlag = document.createElement("img"),
    $divJobGrup2 = document.createElement("div"),
    $divhov = document.createElement("div"),
    $imgVector$ = document.createElement("img"),
    $divpay = document.createElement("div"),
    $psalaryRange = document.createElement("p"),
    $divarow = document.createElement("div"),
    $pJobTime = document.createElement("p"),
    $pJobSeniority = document.createElement("p"),
    $pData = document.createElement("p");

  const $getJobButton = document.getElementById("modalButtonFinaly"),
    $modalJobRequests = document.getElementById("modal-get-this-job"),
    $applicationButton = document.getElementById("yourApplications-button"), // modal-getJob-button->Button jobRequests
    $jobsForYouButton = document.getElementById("jobsForYou-button"),
    $jobsForYou = document.getElementById("job-for-you");

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
    $pCompanyAndCity,
    job
  );
  //Configurando atributos

  //Agregando eventos a cada boton de la lista
  $button.addEventListener("click", (event) => {
    $windowJobsForYou.classList.add("none");
    $jobModal.classList.toggle("none");
    // console.log(event);
    console.log("dataaasett", $button.id);
    console.log(jobs.data.rows);
    const jobsn = jobs.data.rows.slice();
    console.log(jobsn);
    dataJob = jobsn.find((data) => data.id == $button.id);
    console.log("data", dataJob);

    $elementsGrup1[0].innerText = "Posted " + getDate(dataJob, true);

    $elementsGrup1[1].innerText = dataJob.title;
    $elementsGrup1[2].innerText = dataJob.type;
    $elementsGrup1[3].innerText = dataJob.seniority;
    $elementsGrup1[4].innerText = dataJob.introduccion;

    removeLi($elementsGrup1[5]);
    addLi($elementsGrup1[5], dataJob.expected);

    removeLi($elementsGrup1[6]);
    addLi($elementsGrup1[6], dataJob.lokkin);

    removeLi($elementsGrup1[7]);
    addLi($elementsGrup1[7], dataJob.requirements);

    $elementsGrup1[8].innerText = dataJob.recruiter.company_name;

    $elementsGrup1[9].innerText = dataJob.recruiter.description;

    console.log($elementsGrup1);
    console.log(dataJob);

    //eventos requests
    const requestsSend = document.getElementById("modalRequestsSend");
    console.log(dataJob.id);

    fetch(
      `https://get-that-job-backend.herokuapp.com/api/requests/exists/${dataJob.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        // body: JSON.stringify({
        //   job: data.id,
        // }),
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((exists) => {
        if (exists == "exists") {
          requestsSend.classList.remove("none");
          $getJobButton.setAttribute("disabled", "");
        } else {
          requestsSend.classList.add("none");
          $getJobButton.removeAttribute("disabled");
        }
        noCandidate = "";
      })
      .catch((error) => {
        const me = error.json();
        console.log("noExists: ", error.status);
        if (error.status === 404)
          noCandidate =
            "complete your information as candidate in tab your profile!";
      });
  });
  //Agregando eventos a cada boton de la lista

  //eventos del modal getThatJob
  let con = 0;
  $getJobButton.addEventListener("click", (event) => {
    const $cvLink = document.getElementById("linkCv"),
      $modalWarning = document.getElementById("modalWarning"),
      $modalWarningContent = document.getElementById("modalWarningContent"),
      $pTitleJob = document.getElementById("modal-getTj-title");
    con++;
    if (noCandidate) {
      console.log(noCandidate);
      $modalWarningContent.innerText = noCandidate;
      $modalWarning.classList.add("d-flex");
      $modalWarning.classList.remove("none");
      setTimeout(function () {
        $modalWarning.classList.remove("d-flex");
        $modalWarning.classList.add("none");
      }, 3000);
    } else {
      console.log("entraElse");
      $jobModal.classList.add("none");
      $modalJobRequests.classList.remove("none");
      $applicationButton.classList.add("active");
      $jobsForYouButton.classList.remove("active");
      $jobsForYouButton.ariaSelected = "false";
      $jobsForYou.classList.remove("active");
      $jobsForYou.classList.remove("none");
      $jobsForYou.classList.remove("show");
      $cvLink.classList.remove("d-flex");
      $cvLink.classList.add("none");

      let job = document.createTextNode(dataJob.title);
      $pTitleJob.replaceChild(job, $pTitleJob.lastChild);
      con = 0;
    }
  });

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
const addJob = () => {
  const d = document;

  const $listJobResult = d.getElementById("jobListResult"),
    //$windowYourProfile = d.getElementById('yourProfile'),
    $windowJobsForYou = d.getElementById("job-for-you"),
    $jobModal = d.getElementById("modal-job-details"),
    $elementsGrup1 = document.getElementsByClassName("dat-modalElement");

  //consulta al banckend en esta caso consulta a un archivo de pruebas
  fetch("https://get-that-job-backend.herokuapp.com/api/jobs", {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((jobs) => {
      console.log("from Jobs file", jobs);
      for (let job of jobs.data.rows) {
        console.log(job);

        let ran = random(1, 50);
        let id = "jobButton" + ran;

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
};
addJob();
/*****Agregar elementos a al lista jobs for you************/

/*****Actualizando lista al agregar nuevo empleo en recruiter************/

window.addEventListener("storage", (event) => {
  const update = JSON.parse(localStorage.getItem("update")),
    $listButtonJob = document.getElementById("jobListResult");
  console.log("update: ", update);
  if (update) {
    removeLi($listButtonJob);
    addJob();

    localStorage.setItem("update", false);
  }
});

/******Job ButtonsResult ****** */
((d) => {
  const $jobButton = d.getElementById("jobButtonResult"),
    $windowJobForYou = d.getElementById("job-for-you"),
    $jobModal = d.getElementById("modal-job-details"),
    $buttonJobForYou = d.getElementById("jobsForYou-button"),
    $buttonYourApplication = d.getElementById("yourApplications-button"),
    $buttonYourProfile = d.getElementById("yourProfile-button"),
    $buttonModalReturn = d.getElementById("modal-button-return"),
    $modalRequests = document.getElementById("modal-get-this-job");

  $buttonYourApplication.addEventListener("click", (event) => {
    if (!$windowJobForYou.classList.contains("none"))
      $jobModal.classList.add("none");

    if (!$jobModal.classList.contains("none"))
      $jobModal.classList.toggle("none");
  });

  $buttonModalReturn.addEventListener("click", (event) => {
    $windowJobForYou.classList.toggle("none");
    if (!$buttonJobForYou.classList.contains("none")) {
      $jobModal.classList.add("none");
    }
  });

  $buttonYourProfile.addEventListener("click", (event) => {
    if (!$jobModal.classList.contains("none"))
      $jobModal.classList.toggle("none");

    if (!$modalRequests.classList.contains("none")) {
      $modalRequests.classList.toggle("none");
    }

    if ($windowJobForYou.classList.contains("none")) {
      $windowJobForYou.classList.toggle("none");
    }
  });
  //control de los botones en el sidebar
  $buttonJobForYou.addEventListener("click", (event) => {
    if (!$modalRequests.classList.contains("none")) {
      $modalRequests.classList.toggle("none");
    }

    if ($windowJobForYou.classList.contains("none")) {
      $windowJobForYou.classList.toggle("none");
    }
  });
})(document);
/******Job ButtonsResul ****** */

//Datos del candidato
const candidate = () => {
  const $yourProfileButton = document.getElementById("yourProfile-button"),
    $inputs = document.getElementsByClassName("profileform-control"),
    $updateButton = document.getElementById("form-your-profile-button");

  //sidebar
  $yourProfileButton.addEventListener("click", (event) => {
    console.log("En evento: ", token);

    fetch("https://get-that-job-backend.herokuapp.com/api/candidates", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);

        if (json == null) {
          console.log("entra");
        }

        $inputs[0].value = json.data.fullname;
        $inputs[1].value = json.data.professional.email;
        $inputs[2].value = json.data.phone;
        $inputs[3].value = json.data.description;
        $inputs[4].value = json.data.experience;
        $inputs[5].value = json.data.linkdinurl;
        $inputs[6].value = json.data.githuburl;
      })
      .catch((err) => {
        fetch(
          "https://get-that-job-backend.herokuapp.com/api/candidates/professional",
          {
            headers: {
              Authorization: token,
            },
          }
        )
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((json) => {
            $inputs[1].value = json.data.email;
          })
          .catch((err) => {
            console.log(err);
          });
      });
  });

  //your profile
  $updateButton.addEventListener("click", (event) => {
    fetch("https://get-that-job-backend.herokuapp.com/api/candidates/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        fullname: $inputs[0].value,
        phone: $inputs[2].value,
        description: $inputs[3].value,
        experience: $inputs[4].value,
        linkdinurl: $inputs[5].value,
        githuburl: $inputs[6].value,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

candidate();

//Requests
const requests = () => {
  const formRequest = document.getElementById("formRequest"),
    $modalJobRequests = document.getElementById("modal-get-this-job"),
    $yourApplicationButton = document.getElementById("yourApplications-button"),
    $yourApplicationContent = document.getElementById("your-applications"),
    $tbodyTableRequests = document.getElementById("tableBodyApplication");

  let requestsJobs = new Object();
  let url = new Object();
  let dataRequestJob = new Object();

  //new requests
  formRequest.addEventListener("submit", (event) => {
    event.preventDefault();
    let formdata = new FormData(formRequest);
    $modalJobRequests.classList.add("none");
    formdata.append("job", dataJob.id);
    console.log("el jodido boton ");
    fetch("https://get-that-job-backend.herokuapp.com/api/requests/", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formdata,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((request) => {
        console.log("request: ", request.data.createdAt);
        console.log(formRequest);
        //cargando datos en tabla Your application}
        localStorage.setItem("updateRequest", true);
        const tableElement = document.createElement("tr");
        tableElement.classList.add("row-application-job");
        tableElement.innerHTML = `
        
                  <td class="selectable">
                    ${dataJob.title}
                    <button
                      id= ${request.data.id}
                      type="button"
                      class="btn btn-primary application-button-table"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Launch static backdrop modal
                    </button>
                  </td>
                  <td>${dataJob.type}</td>
                  <td>${dataJob.recruiter.company_name}</td>
                  <td>${dataJob.location}</td>
                  <td>${getDate(request.data)}</td>
             
        `;
        if ($tbodyTableRequests == null)
          $tbodyTableRequests.innerHTML = tableElement;
        else $tbodyTableRequests.appendChild(tableElement);

        formRequest[2].innerText = "";
        formRequest[3].innerText = "";
        $yourApplicationButton.ariaSelected = "true";
        $yourApplicationContent.classList.add("active", "show");
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("data", formdata);
  });

  //sidebar
  $yourApplicationButton.addEventListener("click", (event) => {
    if (!$yourApplicationContent.classList.contains("active")) {
      fetch("https://get-that-job-backend.herokuapp.com/api/requests/", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((request) => {
          console.log();
          const tbody = document.getElementById("tableBodyApplication");

          while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
          console.log(request.data);
          requestsJobs = request.data;
          url = request.url;
          for (let element of request.data) {
            document.getElementById("tableBodyApplication").innerHTML += `
        <tr class="row-application-job">
                  <td class="selectable">
                    ${element.job.title}
                    <button
                      id= ${element.id}
                      type="button"
                      class="btn btn-primary application-button-table buttonModalApplication"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Launch static backdrop modal
                    </button>
                  </td>
                  <td>${element.job.type}</td>
                  <td>${element.job.recruiter.company_name}</td>
                  <td>${element.job.location}</td>
                  <td>${getDate(element)}</td>
                </tr>
        `;
          }

          // Modal

          const $buttonModalApp = document.getElementsByClassName(
              "buttonModalApplication"
            ),
            $elementsModalApp =
              document.getElementsByClassName("modalApplication");

          for (let buttonApp of $buttonModalApp) {
            console.log(buttonApp);

            buttonApp.addEventListener("click", (event) => {
              console.log(event.target.id);
              console.log("dataRequestJobs: ", requestsJobs);
              dataRequestJob = requestsJobs.find(
                (data) => data.id == event.target.id
              );
              console.log(dataRequestJob);
              console.log("elementos:", $elementsModalApp);

              $elementsModalApp[0].innerText = dataRequestJob.job.title;
              $elementsModalApp[1].innerText =
                dataRequestJob.job.recruiter.company_name;

              //Modal tap application
              $elementsModalApp[2].innerText = dataRequestJob.experience;
              $elementsModalApp[3].innerText = dataRequestJob.interest;

              //Modal tap Job Details
              $elementsModalApp[4].innerText = dataRequestJob.job.introduccion;

              removeLi($elementsModalApp[5]);
              addLi($elementsModalApp[5], dataRequestJob.job.expected);

              removeLi($elementsModalApp[6]);
              addLi($elementsModalApp[6], dataRequestJob.job.lokkin);

              removeLi($elementsModalApp[7]);
              addLi($elementsModalApp[7], dataRequestJob.job.requirements);

              $elementsModalApp[8].innerText =
                dataRequestJob.job.recruiter.description;
            });
          }
        });
    }
  });

  //update requests in modal
  const $buttonEditApp = document.getElementById("v-pills-home-tab"),
    $modalRequests = document.getElementById("modal-get-this-job"),
    $spanEditApplication = document.getElementById("spanEdidApp"),
    $pTitleJob = document.getElementById("modal-getTj-title"),
    $linkCv = document.getElementById("linkCv"),
    $cvFilename = document.getElementById("cvFilename"),
    $aCvUrl = document.getElementById("cvURL"),
    $buttonUpdate = document.getElementById("modal-getJob-button"),
    $elementsTextArea = document.getElementsByClassName("modalTextArea");

  $buttonEditApp.addEventListener("click", (event) => {
    $modalRequests.classList.toggle("none");
    $linkCv.classList.remove("none");
    $linkCv.classList.add("d-flex");
    $spanEditApplication.innerText = "Edit your application: ";
    console.log($pTitleJob);
    let job = document.createTextNode(dataRequestJob.job.title);
    $pTitleJob.replaceChild(job, $pTitleJob.lastChild);

    let filename = dataRequestJob.cv.split("/");
    let cvUrl = url + "/static2/" + filename[1];
    let filenameAux = filename[1].replace(/\d/g, "").split(".");
    filenameAux = filenameAux[0] + "." + filenameAux[1];
    $cvFilename.innerText = filenameAux;
    console.log("cvfilname:", cvUrl);
    $aCvUrl.setAttribute("href", cvUrl);
    $aCvUrl.setAttribute("target", "_blank");
    $buttonUpdate.innerText = "Update!";

    $elementsTextArea[0].innerHTML = dataRequestJob.experience;
    $elementsTextArea[1].innerHTML = dataRequestJob.interest;
  });
};

requests();
