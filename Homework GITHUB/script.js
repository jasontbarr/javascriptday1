var Contact = function (name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
}

var addressBook = [];
var jason = new Contact('jason', '(213)448-0475', 'jasontbarr@gmail.com');
addressBook.push(jason);
addressBook.push(new Contact("jenny", "(213)867-5309", 'heyjenny@gmail.com'));
addressBook.push(new Contact('john', '(323)481-9726)', 'johnnyFromDaBlock@yahoo.com'));


var showContacts = function () {
    document.getElementById('displayAddressBook').innerHTML = '';
    for (var i = 0; i < addressBook.length; i++) {
        document.getElementById('displayAddressBook').innerHTML += "<h4>" + addressBook[i].name + '</h4> <h4>' + addressBook[i].number + '</h4> <h4>' + addressBook[i].email + '</h4><br /><button class="btn btn-default" onclick="deleteContact(' + i + ')">Delete</button>';
    }
}

showContacts();

var addNewContact = function () {
    var name = document.getElementById('inputName').value;
    var number = document.getElementById('inputNumber').value;
    var email = document.getElementById('inputEmail').value;
    var contact = new Contact(name, number, email)
    addressBook.push(contact);
    showContacts();
}

var deleteContact = function (i) {
    addressBook.splice(i, 1);
    showContacts();
}