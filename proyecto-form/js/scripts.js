function formulari (){
const form = document.getElementById('registrationForm');
//nombre requerido
if(form.nombre.value==''){
    alert('nombre requerido');
}else{
    alert(form.nombre.value);
} 
//email con @

const email=form.email.value;

if(email.includes('@')){
    return alert('email correcto');
}else{
    return alert('email incorrecto')
}
 
const telefono=form.telefono.value;
if(telefono.length=9){
    alert('numero incorrecto');
}else{
    alert('numero correcto');
} 

const contraseña=form.contrasena.value;
const confirmarContraseña=form.confirmar_contrasena.value;
if(/\d/.test(contraseña)&&contraseña.length>=8&&contraseña===confirmarContraseña){
    alert('contraseña correcta')
}else{
    alert('contraseña incorrecta (debe incluir almenos 8 números) o las contraseñas no coinciden');
}

}
