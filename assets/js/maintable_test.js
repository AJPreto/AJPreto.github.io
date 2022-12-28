

/**
 * 
 * import tablecsv from "./tablecsv.js";
 * const tableRoot = document.querySelector("#csv_table");
 * const tableCsv = new tablecsv(tableRoot);
 * var data = $.csv.toObjects("./data/events_organised.csv");
 */

var data = $.ajax({
    url: "./data/events_organised.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});


console.log(data)

