import tablecsv from "./tablecsv.js"; 

const tableRoot = document.querySelector("#csv_table")
const tableCsv = new tablecsv(tableRoot)

tableCsv.setHeader(["Date", "Description", "Role"])