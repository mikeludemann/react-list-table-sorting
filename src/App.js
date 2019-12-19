import React from 'react';
import logo from './logo.svg';
import './App.css';

import {SortingList, SortingTable} from './components/listTableSort';

function sortingList(){
	var list, 
	i, 
	switchStatus, 
	element, 
	shouldSwitch, 
	direction, 
	switchcount = 0;

	list = document.getElementById("SortList");
	switchStatus = true;

	direction = "asc"; 

	while (switchStatus) {

		switchStatus = false;
		element = list.getElementsByTagName("LI");

		for (i = 0; i < (element.length - 1); i++) {

			shouldSwitch = false;

			if (direction == "asc") {

				if (element[i].innerHTML.toLowerCase() > element[i + 1].innerHTML.toLowerCase()) {

					shouldSwitch = true;
					break;

				}

			} else if (direction == "desc") {

				if (element[i].innerHTML.toLowerCase() < element[i + 1].innerHTML.toLowerCase()) {

					shouldSwitch= true;
					break;

					}

				}

			}

		if (shouldSwitch) {

			element[i].parentNode.insertBefore(element[i + 1], element[i]);
			switchStatus = true;
			switchcount ++;

		} else {

			if (switchcount == 0 && direction == "asc") {

				direction = "desc";
				switchStatus = true;

			}

		}

	}

}

window.onload = function(){
	document.getElementById("sorting").addEventListener("click", function(){
		sortingList("SortList");
	});
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<div id="sorting">Sort List</div>
				<SortingList 
					id="SortList"
					dataList={[
						{ id: 1, name: "John Doe" },
						{ id: 2, name: "Mary Watson" },
						{ id: 3, name: "Dave Beck" },
						{ id: 4, name: "Brooke Tyson" }
					]}
				></SortingList>
				<hr></hr>
				<SortingTable 
					id="SortTable"
					dataTableHeader={[
						{ id: 1, name: "Name" },
						{ id: 2, name: "Country" }
					]}
					dataTable={[
						{ id: 1, element: "John Doe", elementNext: "Great Britain" },
						{ id: 2, element: "Mary Watson", elementNext: "USA" },
						{ id: 3, element: "Dave Beck", elementNext: "Ireland" },
						{ id: 4, element: "Brooke Tyson", elementNext: "Italy" }
					]}
				></SortingTable>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
