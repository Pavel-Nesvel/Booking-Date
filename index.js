/**
 *
 * @param {Date()} date
 * @returns date
 */

const formatDate = (date) => {
  let newDate = new Date(date).toISOString().split("T")[0];
  return newDate;
};
/**
 *
 * @param {Date()} date
 * @returns date +1
 */
const tomorrowFormat = (date) => {
  let tomorrow = date.setDate(date.getDate() + 1);
  return formatDate(tomorrow);
};
const yesterdayFormat = (date) => {
  let yesterday = date.setDate(date.getDate() - 1);
  return formatDate(yesterday);
};

// on passe a linput start_date la date du jour
const toDAY = new Date();
start_date.value = formatDate(toDAY);
start_date.min = formatDate(toDAY);

// a linput end_date on lui passera la date du lendemain
// pour cela on prend la date d'aujourd'hui on lui ajoute + 1
let tomorrow = tomorrowFormat(toDAY);
end_date.value = tomorrow;
end_date.min = tomorrow;

/**
 * si la date de debut est plus grande que la date de fin
 * alors la date de fin prend la date de debut auquel on rajoute +1
 *
 */

start_date.addEventListener("change", (e) => {
  let dateNow = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    end_date.value = tomorrowFormat(dateNow);
  }
});

/**
 * lorsqu'on manipule la date de fin il ne faudrait pas aller
 * plus loin que la date de debut
 * si la date de debut cest le 12 mai 2023 et quon choisi une date
 * de debut le 13 mars 2023 ce n'est pas bon
 * dans ce cas on prend la date de fin choisie on le passe a la date 
 * de debut auqel on retranche - 1
 
 */
end_date.addEventListener("change", (e) => {
  let dateNow = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    start_date.value= yesterdayFormat(dateNow);
  }
});

const bookingCal=()=>{
    let diffTime=Math.abs(new Date(end_date.value) - new Date(start_date.value));
    let diffDays=Math.ceil(diffTime /(1000*60*60*24))
    total_reservation.textContent= diffDays *  nightPrice.textContent;
}
start_date.addEventListener("change",bookingCal);
end_date.addEventListener("change",bookingCal);

bookingCal();


