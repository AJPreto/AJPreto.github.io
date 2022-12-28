import tablecsv from "./tablecsv.js";

const tableRoot = document.querySelector("#csv_table");
const tableCsv = new tablecsv(tableRoot);

const organized_events_data = [
	["2020/05/01 - 2020/05/23", "Webinars cycle during the COVID-19 pandemic, 'Para além da pandemia', organised by the National Biochemists' Associaton (ANBIOQ)", "Co-organiser"],
	["2018", "Encontro de Jovens Investigadores de Biologia Computacional Estrutural", "Co-organiser"],
	["2017", "MYD - Mind Your Data - first edition. Data science centered conference with the participation of Feedzai, Critical Software, Fraunhofer among others", "Lead organiser"],
	["2015", "IX Biochemistry Student’s Meeting", "Lead organiser"]]

tableCsv.update(organized_events_data,
["Date", "Description", "Role"]
)

