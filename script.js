var firstNameArray = new Array();
var secondNameArray = new Array();
var mainNdx = 0;

function readData() {
    console.log("readData called");
    // Does this browser support local storage?
    if (typeof (Storage) !== "undefined") {
        // Read data from local storage
        firstNameStr = localStorage.cej_FirstName;
        secondNameStr = localStorage.cej_SecondName;
        ndxStr = localStorage.cej_Ndx;

        console.log("firstNamesStr is .. " + firstNamesStr);
        console.log("secondNameStr is .. " + secondNameStr);
        console.log("ndxStr is .. " + ndxStr);

        if (typeof (firstNamesStr) !== "undefined") {
            // Convert data string into array
            firstNameArray = firstNamesStr.split(",");
            secondNameArray = secondNameStr.split(",");
            // Convert Ndx string into integer
            mainNdx = parseInt(ndxStr);
            // Display data screen
            firstName.value = firstNameArray[mainNdx];
            secondName.value = secondNameArray[mainNdx];
            ndx_result.value = mainNdx;
        } else {
            // Initize data if it is empty/invalid
            firstName.value = "";
            secondName.value = 0;
            mainNdx = 0;
        }
    } else {
        // Sorry! No Web Storage support..
        alert('This browser does NOT support local storage');
    }
}

function writeData() {
    console.log("writeData called");
    if (typeof (Storage) !== "undefined") {
        // Add data to array
        firstNameArray.push(firstName.value);
        secondNameArray.push(secondName.value);
        // Increment array index number
        mainNdx = firstNameArray.length - 1;
        // Convert arrays into data strings
        firstNamesStr = firstNameArray.join();
        secondNameStr = secondNameArray.join();
        // save data strings to local storage
        localStorage.cej_FirstName = firstNamesStr;
        localStorage.cej_SecondName = secondNameStr;
        localStorage.cej_Ndx = mainNdx;
        //
        ndx_result.value = mainNdx;
        //        alert('Record ADDED.')
    } else {
        // Sorry! No Web Storage support..
        alert('This browser does NOT support local storage');
    }
}

function displayNextRec() {
    if (mainNdx < (firstNameArray.length - 1)) {
        // Increment array index number
        mainNdx++;
        // Update form fields with new values
        firstName.value = firstNameArray[mainNdx];
        secondName.value = secondNameArray[mainNdx];
        ndx_result.value = mainNdx;
        // Save current index to local storage
        localStorage.cej_Ndx = mainNdx;
    }
}

function displayPrevRec() {
    if (mainNdx > 0) {
        // Decrement array index number
        mainNdx--;
        // Update web form fields with new values
        firstName.value = firstNameArray[mainNdx];
        secondName.value = secondNameArray[mainNdx];
        ndx_result.value = mainNdx;
        window.localStorage.getItem('firstName');
        // Save current index to local storage
        localStorage.cej_Ndx = mainNdx;
    }
}

function removeData() {
    console.log("removeData called");
    if (typeof (Storage) !== "undefined") {
        if (confirm('Are you sure you want to remove ALL records?')) {
            localStorage.removeItem("cej_FirstName");
            localStorage.removeItem("cej_secondName");
            localStorage.removeItem("cej_Ndx");
            // Initize data if it is empty/invalid
            firstName.value = "";
            secondName.value = 0;
            ndx_result.value = 0;
            // Clear arrays
            firstNameArray = [];
            secondNameArray = [];
            mainNdx = 0;
        }
    } else {
        // Sorry! No Web Storage support..
        alert('This browser does NOT support local storage');
    }
}

function editCurrentRec() {
    // Incomplete, Edit current array item and then update local storage
    //
}


function rollDice() {
    var name1 = document.querySelector(".body .row-2 .player-1 > input").value;
    var name2 = document.querySelector(".body .row-2 .player-2 > input").value;
    if (name1 == "" || name2 == "") {
        document.querySelector(".result").innerHTML = "Fill in names of players";
    } else {
        var value1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        var value2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        switch (value1) {
            case 1: {
                document.querySelector(".player-1 img").src = "images/face-1.png";
                break;
            }
            case 2: {
                document.querySelector(".player-1 img").src = "images/face-2.png";
                break;
            }
            case 3: {
                document.querySelector(".player-1 img").src = "images/face-3.png";
                break;
            }
            case 4: {
                document.querySelector(".player-1 img").src = "images/face-4.png";
                break;
            }
            case 5: {
                document.querySelector(".player-1 img").src = "images/face-5.png";
                break;
            }
            case 6: {
                document.querySelector(".player-1 img").src = "images/face-6.png";
                break;
            }
        }
        switch (value2) {
            case 1: {
                document.querySelector(".player-2 img").src = "images/face-1.png";
                break;
            }
            case 2: {
                document.querySelector(".player-2 img").src = "images/face-2.png";
                break;
            }
            case 3: {
                document.querySelector(".player-2 img").src = "images/face-3.png";
                break;
            }
            case 4: {
                document.querySelector(".player-2 img").src = "images/face-4.png";
                break;
            }
            case 5: {
                document.querySelector(".player-2 img").src = "images/face-5.png";
                break;
            }
            case 6: {
                document.querySelector(".player-2 img").src = "images/face-6.png";
                break;
            }
        }

        if (value1 > value2)
            document.querySelector(".result").innerHTML = "Congrats " + name1 + ", You Won!";
        else if (value2 > value1)
            document.querySelector(".result").innerHTML = "Congrats " + name2 + ", You Won!";
        else
            document.querySelector(".result").innerHTML = "It's a Tie! Roll Again";
    }
}
