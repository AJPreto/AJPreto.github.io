import tablecsv from "./tablecsv.js";

const tableRoot = document.querySelector("#csv_table");
const tableCsv = new tablecsv(tableRoot);

const organized_events_data = [
	["December 2021", "VIII <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Coimbra, December 20th", "Co-organiser"],
	["May 2020", "Webinars cycle during the COVID-19 pandemic, 'Para além da pandemia', organised by ANBIOQ", "Co-organiser"],
	["December 2019", "VII <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Lisbon, December 20th", "Co-organiser"],
	["December 2018", "VI <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Oporto, December 21st", "Co-organiser"],
	["April 2018", "R workshop by JEST - Coimbra, April 23th-26th", "Co-organiser"],
	["December 2017", "V <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Coimbra, December 22nd", "Co-organiser"],
	["November 2017", "MYD - Mind Your Data - first edition, by JEST. Data science centered conference with the participation of Feedzai, Critical Software, Fraunhofer among others - Coimbra, November 25th", "Lead organiser"],
	["May 2017", "IX Biochemistry Student’s Meeting", "Lead organiser"],
	["March 2017", "Bioempreende o teu Futuro - Coimbra, by NEBIOQ/AAC, March 10th-12th", "Lead organiser"],
	["May 2016", "Bioempreende o teu Futuro - Coimbra, by NEBIOQ/AAC, May 20th-22nd", "Co-organiser"]]

const participated_events_data = [
	["March 2015", "Bioempreende o teu Futuro - Coimbra, by NEBIOQ/AAC, March 6th-8th", "Contestant"]]

tableCsv.update(organized_events_data,
)

