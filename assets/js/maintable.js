import tablecsv from "./tablecsv.js"; 

const tableRoot = document.querySelector("#csv_table")
const tablecsv = new tablecsv(tableRoot)

tablecsv.setHeader(["Date", "Description", "Role"])