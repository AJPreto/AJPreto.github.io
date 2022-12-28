export default class{
	/**
	 * @param {HTMLTableElement} root The table element which will display the csv data
	 */
	constructor(root) {
		this.root = root;
		console.log("I am constructed!")
	}

	/**
	 * Sets the table header
	 * 
	 * @param {string[]} headerColumns
	 */
	setHeader(headerColumns) {
		this.root.insertAdjacentHTML("afterbegin", `
		<thead>
			${ headerColumns.map(text => `<th>${text}</th>`).join("") }
		</thead>
		`)
	}
}