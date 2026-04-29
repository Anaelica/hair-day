import { schedulesDay } from "./load.js" 
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    //Captura o evento de click na lista.
    period.addEventListener("click", async (event) => {

       if(event.target.classList.contains("cancel-icon")){
        //Obtém a li pai do elemento clicado  
        const item = event.target.closest("li")

        //Pega o id do agendamento pra remover.
        const { id } = item.dataset
        //Cnfirma que o id foi selecionado
        if(id){
            //Confirma se o usuario quer remover ou cancelar 
            const isConfirm = confirm(
                "Tem certeza que deseja cancelar esse agendamento ?"
            )

            if(isConfirm){
                //Faz a requisição na api 
                await scheduleCancel({ id })
                // recarrega os agendamentos
                schedulesDay()
            }
        }
       }
    })
})