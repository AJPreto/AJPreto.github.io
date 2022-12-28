import tablecsv from "./tablecsv.js";

const participated_events_table_root = document.querySelector("#csv_table");
const participated_events_table = new tablecsv(participated_events_table_root);

const participated_events_data = [
	["March 2015", "<a href='https://www.facebook.com/Bioempreendeoteufuturo/' target='_blank'><b>Bioempreende o teu Futuro</b></a> - Coimbra, by <a href='https://www.nebioq.com/' target='_blank'><b>NEBIOQ/AAC</b></a>, March 6th-8th", "Contestant"]]

participated_events_table.update(participated_events_data,
)