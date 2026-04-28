import { schedulesDay } from "../schedules/load"

//Selecionando o input de data
const selectedDate = document.getElementById("date")

//Recarregando os horários pra quando o input de data mudar. 
selectedDate.onchange = () => schedulesDay()