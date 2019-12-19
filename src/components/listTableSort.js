import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortingList extends Component { 
	render() {
		return (
			<div>
				<ul id={this.props.id}>
					{this.props.dataList.map((data) => {
						return (
							<li>{data.id + ". "}{data.name}</li>
						);
					})}
				</ul> 
			</div>
		);
	}
}

SortingList.propTypes = {
	id: PropTypes.string.isRequired,
	dataList: PropTypes.array.isRequired
}

// ########################

class SortingTable extends Component { 
	sortTable(n) {
		var table, 
		rows, 
		switchChange, 
		i, 
		firstRow, 
		nextRow, 
		shouldSwitch, 
		direction, 
		switchcount = 0;

		table = document.getElementById(this.props.id);

		switchChange = true;
		direction = "asc"; 

		while (switchChange) {

			switchChange = false;

			rows = table.rows;

			for (i = 1; i < (rows.length - 1); i++) {

				shouldSwitch = false;

				firstRow = rows[i].getElementsByTagName("TD")[n];
					nextRow = rows[i + 1].getElementsByTagName("TD")[n];

				if (direction == "asc") {

					if (firstRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {

						shouldSwitch= true;
						break;

					}

				} else if (direction == "desc") {

					if (firstRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {

						shouldSwitch = true;
						break;

					}

				}

			}
			if (shouldSwitch) {

				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switchChange = true;
				switchcount ++; 

			} else {

				if (switchcount == 0 && direction == "asc") {

					direction = "desc";
					switchChange = true;

				}

			}

		}

	}

	render() {
		return (
			<div>
				<table id={this.props.id}>
					<tr> 
						{this.props.dataTableHeader.map((dataHeader) => {
							return (
								<th onClick={() => this.sortTable(dataHeader.id - 1)}>{dataHeader.name}</th>
							);
						})}
					</tr>
					{this.props.dataTable.map((data) => {
						return (
							<tr>
								<td>{data.element}</td>
								<td>{data.elementNext}</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
}

SortingTable.propTypes = {
	id: PropTypes.string.isRequired,
	dataListHeader: PropTypes.array.isRequired,
	dataList: PropTypes.array.isRequired
}

// ########################

export {
	SortingList,
	SortingTable
}
