function isFieldEmpty() {
    const field = document.querySelector('#info');
    if (!field.value) {
        insertHTML();
    } else {
        return false;
    }
}

// const fieldTest = isFieldEmpty();

// if (fieldTest === true) {
//     alert("please provide your informaton");
// }

function insertHTML() {
    const updateHTML = document.getElementById("info").value = "Mike Rocks";
    return updateHTML;
}

isFieldEmpty();