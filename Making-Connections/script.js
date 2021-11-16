var conReq = parseInt(document.querySelector('#conrequests').innerText);
var yourCon = parseInt(document.querySelector('#concount').innerText);

function removeUser1() {

    document.querySelector('.con1').remove();
    document.querySelector('#conrequests').innerText = conReq - 1;
    document.querySelector('#concount').innerText = yourCon + 1;
}

function removeUser2() {
    conReq -= 1;
    yourCon += 1;
    document.querySelector('.con2').remove();
    document.querySelector('#conrequests').innerText = conReq - 1;
    document.querySelector('#concount').innerText = yourCon + 1;
}

function editProfile() {
    document.querySelector('#profilename').innerText = "Jane Doe";
}