import tablecsv from "./tablecsv.js"; 

const tableRoot = document.querySelector("#csv_table")
const tablecsv = new tablecsv(tableRoot)

tablecsv.setHeader(["Date", "Description", "Role"])
tablecsv.setBody([
	["4/5/2017", "EJIBCE V", "co-organizer"],
	["4/5/2018", "EJIBCE VI", "co-organizer"],
	["4/5/2019", "EJIBCE VII", "co-organizer"],
	])