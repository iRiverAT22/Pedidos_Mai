function showDialog(){
    document.getElementById("loginModal").style.display = "block";
}
function closeDialog(){
    const nombre= document.getElementById("user").value;
    document.getElementById("bienve").innerText = nombre + " bienvenido" + "!!!"
    document.getElementById("loginModal").style.display = "none";
}

function showDialogpe(){
    const precio = document.getElementById("finalPrice").innerText;
    document.getElementById("finalPriceDialog").innerText = precio;
    document.getElementById("payModale").style.display= "block";
}
function closeDialogpe(){
    document.getElementById("payModale").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}

function showDialogph(){
    const precio = document.getElementById("finalPriceh").innerText;
    document.getElementById("finalPriceDialogh").innerText = precio;
    document.getElementById("payModalh").style.display= "block";
}
function closeDialogph(){
    document.getElementById("payModalh").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}

function calculateValue(){
    let count=0;
    count += Number(empanadasv.docenascar.value);
    count += Number(empanadasv.docenase.value);
    count += Number(empanadasv.docenasf.value);
    count += Number(empanadasv.docenasho.value);
    count += Number(empanadasv.docenasc.value);
    count += Number(empanadasv.docenas4.value);
    count += Number(empanadasv.docenash.value);
    document.getElementById("finalPrice").innerText=count*120;
}

function calculateValuep(){
    let count=0;
    count += Number(pizzasv.checkboxp.value);
    count += Number(pizzasv.checkboxp2.value);
    count += Number(pizzasv.checkboxp3.value);
    count += Number(pizzasv.checkboxp4.value);
    count += Number(pizzasv.checkboxp5.value);
    count += Number(pizzasv.checkboxp6.value);
    count += Number(pizzasv.checkboxp7.value);
    document.getElementById("finalPricep").innerText=count*11000;
}

function calculateValueh(){
    let price=12360;
    if(!hamburgesasv.cheddar.checked){
     price -= 700;
    }

    if(!hamburgesasv.bacon.checked){
         price -= 800; 
    }

    if(!hamburgesasv.mayonesa.checked){ 
        price -= 120; 

    }

    if(!hamburgesasv.lechuga.checked){
         price -= 160; 

    }

    if(!hamburgesasv.tomate.checked){
         price -= 100; 

    }

    if(!hamburgesasv.cebolla.checked){
         price -= 340; 

    }

    if(!hamburgesasv.huevo.checked){
         price -= 220; 

    }

    const type= document.getElementById("size").value;
    if(type=="doble"){ price += 600; }
    if(type=="triple"){ price += 1000; }    
    document.getElementById("finalPriceh").innerText=price;
}

function calculateValuel(){
    let price=14360;
    if(!lomosv.checkbox.checked){
         price -= 700;
    }

    if(!lomosv.checkbox2.checked){
         price -= 800;
    }

    if(!lomosv.checkbox3.checked){
         price -= 120; 
    }

    if(!lomosv.checkbox4.checked){
         price -= 160; 
    }

    if(!lomosv.checkbox5.checked){ 
        price -= 100;
     }

    if(!lomosv.checkbox6.checked){ 
        price -= 340;
    }

    if(!lomosv.checkbox7.checked){
         price -= 220; 
    }

    const type= document.getElementById("sizel").value;
    if(type=="doble"){
         price += 600; 
    }

    if(type=="triple"){
         price += 1000; 
    }  
     
    document.getElementById("finalPricel").innerText=price;
}
