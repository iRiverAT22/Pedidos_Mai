function showDialog(){
    document.getElementById("loginModal").style.display = "block";
}
function closeDialog(){
    const nombre= document.getElementById("user").value;
    document.getElementById("bienve").innerText = nombre + " bienvenido" + "!!!"
    document.getElementById("loginModal").style.display = "none";
}