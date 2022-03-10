const board = document.querySelector('#board');
let tblBody = document.createElement("tbody");

    for (var j = 0; j < 5 ; j++) {

        var row = document.createElement("tr");

        for (var i = 1; i <= 10; i++) {

            var cell = document.createElement("td");

            if(j%2 == 0) {
                var cellText = document.createTextNode(i+j*10);
            }
            else {
                var cellText = document.createTextNode(11-i+j*10);
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
            }

        tblBody.appendChild(row);
        board.appendChild(tblBody);
    }


// Function use to dynamically create the board with numbers from 1 to 100 or 50 according to the given parameters.
function createBoard2(table_id, total_num, max_on_line, direction) {

    var max_on_line_new = max_on_line;

    var elem_table = document.createElement('table');
    elem_table.setAttribute('class', 'board-container');

    var elem_tr = document.createElement('tr');

    for (x = 1; x <= total_num; x++) {

        // Creating <td> element.
        var elem_td = document.createElement('td');
        elem_td.innerHTML = x;

        // Appending the <td> to <tr> according to the selected directions
        if (direction == 'right') {
            elem_tr.appendChild(elem_td);
        }
        else {
            elem_tr.insertBefore(elem_td, elem_tr.children[0]);
        }

        // If the numbers per line reache to the end, then we recreate the <tr> and update the "direction" variable.
        if (x == max_on_line_new && max_on_line_new < total_num) {

            elem_tr = document.createElement('tr');
            max_on_line_new += max_on_line;

            elem_table.insertBefore(elem_tr, elem_table.children[0]);

            // Updating the "direction" variable.
            if (direction == 'right') {
                direction = 'left';
            }
            else {
                direction = 'right';
            }

        }

        elem_table.insertBefore(elem_tr, elem_table.children[0]);

    }

    document.getElementById(table_id).appendChild(elem_table);

}

createBoard2('snake-table', 50, 10, 'right');

// Function used to randomly generate number from 1-6
function userAction(e) {
    e.preventDefault();
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screen').innerHTML = Math.floor((Math.random() * 6) + 1);
}