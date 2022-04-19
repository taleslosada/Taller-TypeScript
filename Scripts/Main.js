import { series } from "./Data.js";
var seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);
function mostrarDatosSeries(series1) {
    var seriesTBody = document.createElement("tBody");
    for (var _i = 0, series1_1 = series1; _i < series1_1.length; _i++) {
        var serie = series1_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}
function mostrarPromedioTemporadas(series) {
    var seriesTBody = document.createElement("tBody");
    var total_temporadas = 0;
    var tamano = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var temporadas = serie.temporadas;
        total_temporadas = total_temporadas + temporadas;
        tamano = tamano + 1;
    }
    var promedio = total_temporadas / tamano;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Promedio de temporadas: ".concat(promedio, "</td>");
    seriesTBody.appendChild(trElement);
    seriesTable.appendChild(seriesTBody);
}