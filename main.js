window.addEventListener('scroll',animacion);



function animacion(e){
    let DanzaArabe = document.querySelector('.presentaciones');
    let DanzaArabeObj = document.querySelectorAll('.pres-imagen');
    let header = document.querySelector('.header');


    let posicionObj = DanzaArabe.getBoundingClientRect().top;
    console.log(posicionObj);
    let pantalla = window.innerHeight-1;
    const tamanioheader = window.innerHeight/8.8;

   

    if(posicionObj<tamanioheader){
        header.style.transform = 'translateY(-100px)';
        header.classList.add('hola');
    }
    if(header.classList.contains('hola')&&posicionObj>tamanioheader)
    header.style.transform = 'translateY(0px)';
    
    // if(posicionObj<pantalla){
    //     for (let i = 0; i < DanzaArabeObj.length; i++) {
    //         DanzaArabeObj[i].style.animation = '2s avanecer ease-out';
    //     }
    // }
    
}
