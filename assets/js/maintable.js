import tablecsv from "./tablecsv.js"; 
var csv = require('./jquery.csv.js');

const tableRoot = document.querySelector("#csv_table");
const tableCsv = new tablecsv(tableRoot);

var data = $.csv.toObjects("./data/events_organised.csv");

tableCsv.update(data,
["Date", "Description", "Role"]
)
