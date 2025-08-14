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
function showDialogpp(){
    const precio = document.getElementById("finalPricep").innerText;
    document.getElementById("finalPriceDialogp").innerText = precio;
    document.getElementById("payModalp").style.display= "block";
}
function closeDialogpp(){
    document.getElementById("payModalp").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}
function showDialogpl(){
    const precio = document.getElementById("finalPricel").innerText;
    document.getElementById("finalPriceDialogl").innerText = precio;
    document.getElementById("payModall").style.display= "block";
}
function closeDialogpl(){
    document.getElementById("payModall").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}
function showDialogpt(){
    const precio = document.getElementById("finalPricet").innerText;
    document.getElementById("finalPriceDialogt").innerText = precio;
    document.getElementById("payModalt").style.display= "block";
}
function closeDialogpt(){
    document.getElementById("payModalt").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}
function showDialogpf(){
    const precio = document.getElementById("finalPricef").innerText;
    document.getElementById("finalPriceDialogf").innerText = precio;
    document.getElementById("payModalf").style.display= "block";
}
function closeDialogpf(){
    document.getElementById("payModalf").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}
function showDialogpta(){
    const precio = document.getElementById("finalPriceta").innerText;
    document.getElementById("finalPriceDialogta").innerText = precio;
    document.getElementById("payModalta").style.display= "block";
}
function closeDialogpta(){
    document.getElementById("payModalta").style.display= "none";
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


function calculateValuec(){
    let count=0;
    count += Number(cafesv.checkboxc.value);
    count += Number(cafesv.checkboxc2.value);
    count += Number(cafesv.checkboxc3.value);
    count += Number(cafesv.checkboxc4.value);
    count += Number(cafesv.checkboxc5.value);
    count += Number(cafesv.checkboxc6.value);
    count += Number(cafesv.checkboxc7.value);
    document.getElementById("finalPricec").innerText=count*2100;
}

function showDialogpc(){
    const precio = document.getElementById("finalPricec").innerText;
    document.getElementById("finalPriceDialogc").innerText = precio;
    document.getElementById("payModalc").style.display= "block";
}
function closeDialogpc(){
    document.getElementById("payModalc").style.display= "none";
    document.getElementById("fin").innerText ="Tu pedido fue enviado" + "!!!"
}

function calculateValuet(){
    let count=0;
    count += Number(tostadosv.checkboxt.value);
    count += Number(tostadosv.checkboxt3.value);
    count += Number(tostadosv.checkboxt4.value);
    document.getElementById("finalPricet").innerText=count*4200;
}

function calculateValuef(){
    let count=0;
    count += Number(facturasv.checkboxf.value);
    count += Number(facturasv.checkboxf2.value);
    count += Number(facturasv.checkboxf3.value);
    count += Number(facturasv.checkboxf4.value);
    count += Number(facturasv.checkboxf5.value);
    document.getElementById("finalPricef").innerText=count*700;
}

function calculateValueta(){
    let count=0;
    count += Number(tortasv.porcioncar.value);
    count += Number(tortasv.porcione.value);
    count += Number(tortasv.porcionf.value);
    count += Number(tortasv.porcionho.value);
    count += Number(tortasv.porcionc.value);
    count += Number(tortasv.porcion4.value);
    count += Number(tortasv.porcionh.value);
    document.getElementById("finalPriceta").innerText=count*1420;
}