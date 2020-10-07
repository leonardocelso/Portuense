const dateFormat = require('dateformat');
const connection = require('../database/connection');
const localPrioridadeController = require('../controllers/localPrioridadeController');
const getDate = require('../utils/getDate');

module.exports = async function getFinalDate(localId, prioridadeId) {

        const local = localId;
        const prioridade = prioridadeId;

        const localPrioridade = await localPrioridadeController.getPrioridade({
            params : {
                localId : local,
                prioridadeId : prioridade,
            }            
        })

        var prioridadeDias = localPrioridade.prioridadeDias;
        var prioridadeHoras = localPrioridade.prioridadeHoras;
        var prioridadeMinutos = localPrioridade.prioridadeMinutos;

        const today = new Date(); 
        const todayHour = today.getUTCHours() - 6;
        const todayMinutes = today.getMinutes();
        
        if ((todayMinutes + prioridadeMinutos) > 60) {
            prioridadeHoras = prioridadeHoras + 1;
            prioridadeMinutos = prioridadeMinutos - 60;
        }

        if ((todayHour + prioridadeHoras) > 24) {
            prioridadeDias = prioridadeDias + 1;
            prioridadeHoras = prioridadeHoras - 24;
        }

        const newTime = ((today.getUTCHours() - 6) + prioridadeHoras) + ":" + (today.getMinutes() + prioridadeMinutos);
        const newDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + prioridadeDias);            
        const finalDate = newDate + ' ' + newTime;
        return finalDate;
}