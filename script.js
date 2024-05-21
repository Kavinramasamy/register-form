var selectTag = document.getElementById("country-state");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var address1 = document.getElementById("email");
var address2 = document.getElementById("address1");
var pin = document.getElementById("pin");
var gender = document.getElementById("gender");
var food = document.getElementById("food");
var state = document.getElementById("state");
var country = document.getElementById("country");


function tablecontent(fname, lname,email, address, pincode, gender, food, state, country) {
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = email;
    td4.innerHTML = address;
    td5.innerHTML = pincode;
    td6.innerHTML = gender;
    td7.innerHTML = food;
    td8.innerHTML = state;
    td9.innerHTML = country;
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8,td9);
    tbody.append(tr);
}


var submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    var address = [];
    address.push(address1.value);

    var gender = document.getElementsByName("gender");
    var gender1;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender1 = gender[i].value;
        }
    }

    var food = document.getElementsByName("food");
    var foodList = [];
    var Count = 0;
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodList.push(food[i].value);
            Count++;
        }
    }
    if (foodList.length <= 2) {
        value = foodList.join(", ");
    } else {
        value = alert("Choose atleast 2 options out of 5 in food");
    }

    tablecontent(fname.value, lname.value,email.value, address.join(", "), pin.value, gender1.value, state.value, country.value)
    fname.value = "";
    lname.value = "";
    email.value = "";
    address2.value = "";
    pin.value = "";
    gender.value = "";
    foodList = [];
    state.value = "";
    country.value = "";
})
