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