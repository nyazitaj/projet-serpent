/* const board = document.querySelector('#board');
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
    } */


var gameTotalLevel = 50;
var gameTotalPerRow = 10;

// Function use to dynamically create the board with numbers from 1 to 100 or 50 according to the given parameters.
function createBoard2(table_id, total_num, max_on_line, direction) {

    var max_on_line_new = max_on_line;

    var elem_table = document.createElement('table');
    elem_table.setAttribute('class', 'board-container');

    var elem_tr = document.createElement('tr');

    for (x = 1; x <= total_num; x++) {

        // Creating <td> element.
        var elem_td = document.createElement('td');
        elem_td.setAttribute('id', x);
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

createBoard2('snake-table', gameTotalLevel, gameTotalPerRow, 'right');

// This callback is called after the user clicked the button-to-play in order to move the user postion on the board.
var user1Pos = 0;
var user2Pos = 0;

function playSnake(randVal, userTurn) {

    if( userTurn == 'humain') {

        if( gameTotalLevel - user1Pos <= 6 ) {

            if( randVal == gameTotalLevel - user1Pos ) {
                document.getElementById('turn-alert').innerHTML = 'Bravo!<br>Vous avez gagné.';
                document.getElementById('user-1').setAttribute('disabled', true);
                document.getElementById('user-1').classList.toggle('not-active');
            }
            else {
                return
            }
        }

        // Animating the user's motion.
        var user1PosTemp = user1Pos;
        user1Pos = user1Pos + randVal;

        var intTemp = setInterval(function() {
            document.getElementById(user1PosTemp).classList.remove("user-1-pos");

            user1PosTemp += 1;
            document.getElementById(user1PosTemp).classList.add("user-1-pos");

            if(user1PosTemp == user1Pos) {
                clearInterval(intTemp);
                document.getElementById(user1Pos).classList.add("user-1-pos");
            }
        }, 200);

    }
    else {

        if( gameTotalLevel - user2Pos <= 6 ) {

            if( randVal == gameTotalLevel - user2Pos ) {
                document.getElementById('turn-alert').innerHTML = 'Vous avez perdu !';
                document.getElementById('user-2').setAttribute('disabled', true);
                document.getElementById('user-2').classList.toggle('not-active');
            }
            else {
                return
            }

        }

        // Animating the user's motion.
        var user2PosTemp = user2Pos;
        user2Pos = user2Pos + randVal;

        var intTemp = setInterval(function() {
            document.getElementById(user2PosTemp).classList.remove("user-2-pos");

            user2PosTemp += 1;
            document.getElementById(user2PosTemp).classList.add("user-2-pos");

            if(user2PosTemp == user2Pos) {
                clearInterval(intTemp);
                document.getElementById(user2Pos).classList.add("user-2-pos");
            }
        }, 200);

        document.getElementById('user-1').removeAttribute('disabled');
        document.getElementById('user-1').classList.toggle('not-active');
        document.getElementById('user-1').classList.toggle('active');

        document.getElementById('turn-alert').innerHTML = 'Votre tour';

        document.getElementById('user-2').setAttribute('disabled', true);
        document.getElementById('user-2').classList.toggle('not-active');
        document.getElementById('user-2').classList.toggle('active');
    }
}

// This callback is called when the user or computer clicks the button to play the game.
function userAction(user_type) {

    var randVal = Math.floor((Math.random() * 6) + 1);
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screen').innerHTML = randVal;

    // Changing the user position after some internal
    setTimeout(function() {
        if(user_type == 'humain') {
            playSnake(randVal, user_type);
            document.getElementById('user-1').setAttribute('disabled', true);
            document.getElementById('user-1').classList.toggle('not-active');
            document.getElementById('user-1').classList.toggle('active');

            document.getElementById('turn-alert').innerHTML = 'Veuillez patienter';

            document.getElementById('user-2').setAttribute('disabled', true);
            document.getElementById('user-2').classList.toggle('not-active');
            document.getElementById('user-2').classList.toggle('active');

            setTimeout(function() {
                userAction('computer');
            }, 1000);
        }
        else {
            playSnake(randVal, user_type);
        }
        // myStopFunction();
    }, 1000);
}