import dayjs from "dayjs"

import {openingHours} from "../../utils/opening-hours.js"

export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {
        //Recupera somente a hora
        const [schedulerHour] = hour.split(":")

        //Adiciona a hora na date e verifica se está no passado
        const isHourPast = dayjs(date).add(schedulerHour, "hour").isAfter(dayjs())

       return {
               hour,
               available: !isHourPast,
           }
        })
}