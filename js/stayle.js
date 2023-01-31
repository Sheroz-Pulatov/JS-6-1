let arr = ['Muhammad', 'Azamat', 'Azim', 'Malika', 'Sheroz', 'Shavkat','Nigina','Malika'];
let name = prompt('Write the persons name !').trim();
let user_name = arr.indexOf(name);

if (user_name === -1) {
    alert("You entered incorrectly or the name is not in the list!")
} else {
    arr.splice(user_name, 1);
    alert(arr);
};