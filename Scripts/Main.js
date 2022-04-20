import { series } from "./data.js";
var seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);
function mostrarDatosSeries(series1) {
    var seriesTBody = document.createElement("tBody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("id", serie.id.toString());
        trElement.onclick = function (event) {
            var serieId = event.path[1].id;
            var serieClick = series1[Number(serieId) - 1];
            var carta = document.getElementById("carta");
            var imagenSerie = document.getElementById("imagenSerie");
            imagenSerie.setAttribute("src", serieClick.imagen);
            var linkSerie = document.getElementById("linkSerie");
            linkSerie.setAttribute("href", serieClick.link);
            var descripcionSerie = document.getElementById("descripcionSerie");
            descripcionSerie.innerHTML = "".concat(serie.descripcion);
            var tituloSerie = document.getElementById("tituloSerie");
            tituloSerie.innerHTML = "".concat(serie.nombre);
            carta.style["display"] = "unset";
        };
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td class = \"nombre\">").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTBody.appendChild(trElement);
    };
    for (var _i = 0, series1_1 = series1; _i < series1_1.length; _i++) {
        var serie = series1_1[_i];
        _loop_1(serie);
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
    trElement.innerHTML = "<td class= \"promedio\">Promedio de temporadas: ".concat(promedio, "</td>");
    seriesTBody.appendChild(trElement);
    seriesTable.appendChild(seriesTBody);
}