document.querySelector("#Submit-btn").addEventListener("click", function(){
    return validation();
});

function validation() {
    let email = document.getElementById("exampleInputEmail1").value;
    let contact = document.getElementById("mobileNumber").value;
    let username = document.getElementById("userName").value;
    let password = document.getElementById("exampleInputPassword1").value;

    let userCheck = /^[A-Za-z]{1}[A-Za-z. ]{2,}$/;
    let emailCheck=/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}.[A-Za-z.]{2,6}$/;
    let mobileCheck = /^[6789]{1}[0-9]{9}$/;
    let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A_Za-z0-9!@#$%^*]{8,16}$/;

    let flag=0;
    if (userCheck.test(username)){
        console.log(username);
    }
    else{
        alert("Invalid Username");
        flag=1;
    }
    if (emailCheck.test(email)){
        console.log(email);
    }
    else{
        alert("Invalid Email");
        flag=1;
    }
    if (mobileCheck.test(contact)){
        console.log(contact);
    }
    else{
        alert("Invalid Contact Number");
        flag=1;
    }
    if (passwordCheck.test(password)){
        console.log(password);
    }
    else{
        alert("Please enter a strong password");
        flag=1;
    }
    if (flag==1){
        return false;
    }
    return true;
}