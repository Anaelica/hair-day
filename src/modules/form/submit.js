import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

//Data atual para o input
const inputDate = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual no campo de data
selectedDate.value = inputDate

//Define a daata minima como a data atual
selectedDate.min = inputDate

form.onsubmit = (event) => {
    //Previne o comportamento padrão do formulário de recarregar a página
  event.preventDefault()
}