const board = document.querySelector("#board");
        const boardValues = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ];

        console.dir(board);

        function createBoard() {
            var grid = "";

            for (var i = 0; i < boardValues.length; i++) {
                grid += "<tr>";

                for (var j = 0; j < boardValues[i].length; j++) {
                    grid += `<td>${boardValues[i]}</td>`;
                }

                grid += "</tr>";
            };
            console.log(grid)
            board.innerHTML = grid;
        }

        createBoard();