import tablecsv from "./tablecsv.js";

const organized_events_table_root = document.querySelector("#csv_table");
const organized_events_table = new tablecsv(organized_events_table_root);

const organized_events_data = [
	["December 2021", "VIII <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Coimbra, December 20th", "Co-organiser"],
	["May 2020", "Webinars cycle during the COVID-19 pandemic, 'Para além da pandemia', organised by <a href='https://anbioq.pt/' target='_blank'><b>ANBIOQ</b></a>", "Co-organiser"],
	["December 2019", "VII <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Lisbon, December 20th", "Co-organiser"],
	["December 2018", "VI <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Oporto, December 21st", "Co-organiser"],
	["April 2018", "R workshop by <a href='https://www.jest.pt/' target='_blank'><b>JEST</b></a> - Coimbra, April 23th-26th", "Co-organiser"],
	["December 2017", "V <a href='http://ejibce.github.io/' target='_blank'><b>EJIBCE</b></a> - Coimbra, December 22nd", "Co-organiser"],
	["November 2017", "<a href='https://www.jest.pt/myd' target='_blank'><b>MYD</b></a> first edition, by <a href='https://www.jest.pt/' target='_blank'><b>JEST</b></a>. Data science centered conference with the participation of Feedzai, Critical Software, Fraunhofer among others - Coimbra, November 25th", "Lead organiser"],
	["May 2017", "<a href='https://www.facebook.com/enebioq/' target='_blank'><b>IX ENEBIOQ</b></a>", "Lead organiser"],
	["March 2017", "<a href='https://www.facebook.com/Bioempreendeoteufuturo/' target='_blank'><b>Bioempreende o teu Futuro</b></a> - Coimbra, by <a href='https://www.nebioq.com/' target='_blank'><b>NEBIOQ/AAC</b></a>, March 10th-12th", "Lead organiser"],
	["May 2016", "<a href='https://www.facebook.com/Bioempreendeoteufuturo/' target='_blank'><b>Bioempreende o teu Futuro</b></a> - Coimbra, by <a href='https://www.nebioq.com/' target='_blank'><b>NEBIOQ/AAC</b></a>, May 20th-22nd", "Co-organiser"]]

organized_events_table.update(organized_events_data,
)