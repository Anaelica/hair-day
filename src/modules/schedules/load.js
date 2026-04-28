import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //Obtem a data selecionada
    const date = selectedDate.value
    
    //buscar na api os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    //Exibe os agendamentos 
    schedulesShow({ dailySchedules })

    hoursLoad({date, dailySchedules})
}