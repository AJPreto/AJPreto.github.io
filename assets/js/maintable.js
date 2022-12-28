import tablecsv from "./tablecsv.js"; 

const tableRoot = document.querySelector("#csv_table");
const tableCsv = new tablecsv(tableRoot);

tableCsv.update([
	["4/5/2017", "EJIBCE V", "co-organizer"],
	["4/5/2018", "EJIBCE VI", "co-organizer"],
	["4/5/2019", "EJIBCE VII", "co-organizer"],
	],
["Date", "Description", "Role"]
)
