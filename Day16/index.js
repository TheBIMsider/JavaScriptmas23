// #JavaScriptmas 2021 Day 16 Challenge

// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
const addUserBtn = document.getElementById("addUserBtn");

loadEventListeners();

function loadEventListeners() {
    btn.addEventListener("click", sort);
    addUserBtn.addEventListener("click", addUser);
}

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    },
    {
        name: "Hans Gruber",
        hasBeenGood: false
    },
    {
        name: "John McClane",
        hasBeenGood: true
    },
    {
        name: "The Grinch",
        hasBeenGood: false
    },
    {
        name: "Max",
        hasBeenGood: true
    }
];

function sort() {
    niceList.innerHTML = '';
    naughtyList.innerHTML = '';

    for (let i = 0; i < sorteesArr.length; i++) {
        const sortee = sorteesArr[i];

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("data-index", i);
        checkbox.checked = sortee.hasBeenGood;

        const listItem = createListItem(sortee.name, checkbox);

        // Check if the checkbox is checked, and move the user accordingly
        if (checkbox.checked) {
            if (sortee.hasBeenGood) {
                niceList.appendChild(listItem);
            } else {
                naughtyList.appendChild(listItem);
            }
        } else {
            // If checkbox is not checked, display the user in their original list
            if (sortee.hasBeenGood) {
                niceList.appendChild(listItem);
            } else {
                naughtyList.appendChild(listItem);
            }
        }
    }

    niceList.style.color = "red";
    niceList.style.fontWeight = "900";
    niceList.style.fontFamily = "Lobster Two";
    niceList.style.fontSize = "35px";

    naughtyList.style.color = "#32CD32";
    naughtyList.style.fontWeight = "900";
    naughtyList.style.fontFamily = "Mountains of Christmas";
    naughtyList.style.fontSize = "35px";
}

function createListItem(name, checkbox) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(name + " "));
    listItem.appendChild(checkbox);

    // Update the sorteesArr based on the current state of the checkbox
    checkbox.addEventListener("change", function () {
        const index = parseInt(checkbox.getAttribute("data-index"));
        sorteesArr[index].hasBeenGood = checkbox.checked;
    });

    checkbox.style.outline = "1px solid #00a6ed";

    return listItem;
}

function addUser() {
    const userNameInput = document.getElementById("userName");
    const hasBeenGoodCheckbox = document.getElementById("hasBeenGood");

    const userName = userNameInput.value.trim();
    const hasBeenGood = hasBeenGoodCheckbox.checked;

    if (userName !== '') {
        const existingUser = sorteesArr.find(user => user.name === userName);

        if (!existingUser) {
            sorteesArr.push({
                name: userName,
                hasBeenGood: hasBeenGood
            });

            userNameInput.value = '';
            hasBeenGoodCheckbox.checked = false;

            sort();
        } else {
            alert("User already exists in the list!");
        }
    } else {
        alert("Please enter a valid name!");
    }
}