import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clienteName = document.getElementById("client")
const selectedDate = document.querySelector("#date")

//Data atual para o input
const inputDate = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual no campo de data
selectedDate.value = inputDate

//Define a daata minima como a data atual
selectedDate.min = inputDate

form.onsubmit = async (event) => {
    //Previne o comportamento padrão do formulário de recarregar a página
  event.preventDefault()

  try {
    //Recuperando o nome do cliente. 
    const name = clienteName.value.trim()
    if(!name){
      return alert("informe o nome do cliente")
    }
    //Recuperando o horario selecionado.
    const hourSelected = document.querySelector(".hour-selected")

    //Recuperando o horário selecionado. 
    if(!hourSelected){
      return alert("Informe o horário desejado.")
    }

    //Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(":")

    //inserir a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gera um id 
    const id = new Date().getTime()
    await scheduleNew({
      id,
      name,
      when
    })

  } catch (error) {
    alert("Não foi possivel realizar o agendamento.")
    console.log(error)
  }
}