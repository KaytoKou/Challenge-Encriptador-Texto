function encriptar(){
    var texto = document.getElementById('input-text').value.toLowerCase();
    //i es para que afecte tanto mayusculas como minisculas
    //g es para toda la oracion
    //m es para que afecte a multiples parrafos
  
    var txtcifrado = texto.replace(/e/igm,'enter');
    var txtcifrado = txtcifrado.replace(/o/igm,'ober');
    var txtcifrado = txtcifrado.replace(/i/igm,'imes');
    var txtcifrado = txtcifrado.replace(/a/igm,'ai');
    var txtcifrado = txtcifrado.replace(/u/igm,'ufat');
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById('text').style.display = "none";
    document.getElementById('texto2').innerHTML = txtcifrado;
    document.getElementById('texto2').style.height = '50%';
    document.getElementById('copiar').style.display = "show";
    document.getElementById('copiar').style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById('input-text').value.toLowerCase();
    //i es para que afecte tanto mayusculas como minisculas
    //g es para toda la oracion
    //m es para que afecte a multiples parrafos
    var txtcifrado = texto.replace(/enter/igm,'e');
    var txtcifrado = txtcifrado.replace(/ober/igm,'o');
    var txtcifrado = txtcifrado.replace(/imes/igm,'i');
    var txtcifrado = txtcifrado.replace(/ai/igm,'a');
    var txtcifrado = txtcifrado.replace(/ufat/igm,'u');
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById('text').style.display = "none";
    document.getElementById('texto2').innerHTML = txtcifrado;
    document.getElementById('texto2').style.height = '50%';
    document.getElementById('copiar').style.display = "show";
    document.getElementById('copiar').style.display = "inherit";
}

function copy(){
    var contenido = document.querySelector('#texto2').value; // Usamos .value para obtener el contenido de un textarea
    if (!navigator.clipboard) {
        // Clipboard API no disponible
        fallbackCopyTextToClipboard(contenido);
    } else {
        navigator.clipboard.writeText(contenido).then(function() {
            alert("Se copió!");
        }, function(err) {
            console.error('No se pudo copiar: ', err);
        });
    }
}
