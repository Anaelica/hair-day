import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
    //Obtem a data selecionada
    const date = selectedDate.value
    hoursLoad({date})
}