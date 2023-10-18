function getDataFromUser() {
    var name = document.getElementById("name").value;
    var designation = document.getElementById("designation").value;
    var number = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;

    console.log(number);
  
    // Create an object to store the form data
    var formData = {
      name: name,
      designation: designation,
      phoneNumber: number,
      email: email,
    };
  
    return formData;
}

function getDataFromLocalStorage(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    return peopleList;
}

  

function validateForm(){
    var data  = getDataFromUser();
    console.log(data);

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const numberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    
    if(data.name == ""){
        alert("Name is required");
        return false;
    }

    if(data.phoneNumber == ""){
        alert("Number is required");
        return false;
    }
    else if(!numberPattern.test(data.phoneNumber)){
        alert("invalid Phone number");
        return false;
    }

    if(data.designation == ""){
        alert("designation is required");
        return false;
    }
    

    if(data.email == ""){
        alert("email is required");
        return false;
    }else if(emailPattern.test(email)){
        alert("Invalid email Address");
        return false;
    }

    return true;
}



function AddData(){
    if(validateForm()){
        var data = getData();
        var peopleList = getDataFromLocalStorage();

        peopleList.push(data);

        localStorage.setItem("peopleList",JSON.stringify(peopleList));
        showData();
        setEmpty();
    }
}
function showData(){
    var peopleList = getDataFromLocalStorage();
    var html = "";
    peopleList.forEach(function (element , index){
        html += `<tr>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.designation}</td>
                    <td>${element.number}</td>
                    <td>
                        <button onclick="deleteData(${index}) class="btn btn-danger">Delete</button>
                        <button onclick="updateData(${index}) class="btn btn-warning m-2">Update</button> 
                    </td>
                </tr>`;
        document.querySelector("#crudTable tbody").innerHTML = html;

    });

}

// loads data when page reloads;
document.onload = showData();

function setEmpty(){
    document.getElementById("name").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
  
}

// function to delete Data from the localStorage

function deleteData(index){
    var peopleList;

}
