export const p = 1;

export const removeLi = (ul) => {
    console.log(ul)
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
  };


 export const getDate = (data, month) => {
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