const board = document.querySelector('#board');
        let tblBody = document.createElement("tbody");
        let cases = createNum();

        function createNum(num) {

        }

        for (var j = 0; j < 5 ; j++) {

            var row = document.createElement("tr");

            for (var i = 1; i <= 10; i++) {
                
                if(j%2 == 0) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(i+j*10);
                }
                else {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(11-i+j*10);
                }

                cell.appendChild(cellText);
                row.appendChild(cell);
            }

        tblBody.appendChild(row);
        board.appendChild(tblBody);
            }

        createBoard(5, 50);