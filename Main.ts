import { series } from "./Data.js";
import { Serie } from "./serie.js"

let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);

function mostrarDatosSeries(series1: Serie[]) {
    let seriesTBody: HTMLElement = document.createElement("tBody");
    for (let serie of series1) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.setAttribute("id", serie.id.toString());
        trElement.onclick = (event) => {
            let serieId = (event as MouseEvent & { path: { id: string }[] }).path[1].id
            let serieClick: Serie = series1[Number(serieId) - 1]
            let carta: HTMLElement = document.getElementById("carta")!;
            let imagenSerie: HTMLElement = document.getElementById("imagenSerie")!;
            imagenSerie.setAttribute("src", serieClick.imagen)

            let linkSerie: HTMLElement = document.getElementById("linkSerie")!;
            linkSerie.setAttribute("href", serieClick.link);

            let descripcionSerie: HTMLElement = document.getElementById("descripcionSerie")!;
            descripcionSerie.innerHTML = `${serie.descripcion}`

            let tituloSerie: HTMLElement = document.getElementById("tituloSerie")!;
            tituloSerie.innerHTML = `${serie.nombre}`
            carta.style["display"] = "unset";
        }
        trElement.innerHTML = `<td>${serie.id}</td>
        <td class = "nombre">${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}

function mostrarPromedioTemporadas(series: Serie[]) {
    let seriesTBody: HTMLElement = document.createElement("tBody");
    let total_temporadas: number = 0;
    let tamano: number = 0;
    for (let serie of series) {
        let temporadas: number = serie.temporadas;
        total_temporadas = total_temporadas + temporadas;
        tamano = tamano + 1;
    }
    let promedio: number = total_temporadas / tamano;
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td class= "promedio">Promedio de temporadas: ${promedio}</td>`;
    seriesTBody.appendChild(trElement);
    seriesTable.appendChild(seriesTBody);
}