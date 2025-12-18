let selectedRoute = "";

function login(){
    const u=document.getElementById("username").value;
    const p=document.getElementById("password").value;
    if(u!=="" && p==="12345"){
        document.getElementById("loginPage").style.display="none";
        document.getElementById("dashboardPage").style.display="block";
    }else{
        document.getElementById("errorMsg").innerText="Nama diisi & password 12345";
    }
}

function logout(){
    document.getElementById("dashboardPage").style.display="none";
    document.getElementById("loginPage").style.display="flex";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}

function openInfo(id){
    if(id===1){
        selectedRoute="Via Sembalun";
        infoTitle.innerText="Via Sembalun";
        infoText.innerText="Estimasi pendakian: 3–4 hari\nHarga tiket: Rp150.000/orang";
    }else{
        selectedRoute="Via Torean";
        infoTitle.innerText="Via Torean";
        infoText.innerText="Estimasi pendakian: 2–3 hari\nHarga tiket: Rp150.000/orang";
    }
    infoPopup.style.display="flex";
}

function closePopup(){
    infoPopup.style.display="none";
}

function openBooking(){
    infoPopup.style.display="none";
    bookingPopup.style.display="flex";
}

function submitBooking(){
    bookingPopup.style.display="none";
    successPopup.style.display="flex";
}

function finish(){
    successPopup.style.display="none";
    dashboardPage.style.display="block";
}
