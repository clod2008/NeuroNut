const contUCDM1 = {
    imagenURL: 'images/3d-silhouette-man-with-arms-raised-against-sunset-ocean-landscape.jpg',
    url: 'cursoUCDM1.html',
    claim: 'Septiembre 2021',
    title: 'UN CURSO DE MILAGROS <br> NIVEL 1',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'UCDM1',
    buttonId: 'linkPago-UCDM1',
    ariaDisabled: false,
    buttonDisable: '',
    bifurcadorPagos: 'cursoUCDM1.html#formaDePago',

    // PESOS forma de pago 1
    pago1: 'mensuales',
    precio1: '$ 3.000',
    formaDePago1: 'pago por mes',
    linkDePago1: 'https://clod2008.github.io/NeuroNut/linkDePagoUCDM1.html',
    // PESOS forma de pago 2
    pago2: null,
    precio2: '$ 40.000',
    formaDePago2: 'pago anual',
    linkDePago2: '',
    // U$S forma de pago 1
    pago1_USD:  'mensual',
    precio1_USD: 'U$S 30',
    formaDePago1_USD: 'pago por mes',
    linkDePago1_USD: '',
    // U$S forma de pago 2
    pago2_USD:  null,
    precio2_USD: 'U$S 90',
    formaDePago2_USD: 'pago anual',
    linkDePago2_USD: '',
}

const contUCDM2 = {
    imagenURL: 'images/Blanco-y-negro.jpg',
    url: 'cursoUCDM2.html',
    claim: 'Superá tus límites',
    title: 'Un Curso de Milagros<br>Estudiantes avanzados',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'UCDM2',
    ariaDisabled: false,
    buttonDisable: '',
    bifurcadorPagos: 'cursoUCDM2.html#formaDePago',

    // PESOS forma de pago 1
    pago1: 'por cada clase',
    precio1: '$ 1.500',
    formaDePago1: 'pago por cada clase',
    linkDePago1: 'https://clod2008.github.io/NeuroNut/linkDePagoUCDM2.html',
    // PESOS forma de pago 2
    pago2: null,
    precio2: '$ 9.000',
    formaDePago2: 'pago anual',
    linkDePago2: '',
    // U$S forma de pago 1
    pago1_USD:  'por mes',
    precio1_USD: 'U$S 15',
    formaDePago1_USD: 'pago por cada clase',
    linkDePago1_USD: '',
    // U$S forma de pago 2
    pago2_USD:  null,
    precio2_USD: 'U$S 90',
    formaDePago2_USD: 'pago anual',
    linkDePago2_USD: '',
}

const contNeuro = {
    imagenURL: 'images/2728.jpg',
    url: 'cursoNeuroNut.html',
    claim: 'Nutrición y Espiritualidad',
    title: 'Creando un Nuevo Sendero 1<br><br> ',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'NeuroNut',
    ariaDisabled: false,
    buttonDisable: '',
    bifurcadorPagos: 'cursoNeuroNut.html#formaDePago',

    // PESOS forma de pago 1
    pago1: 'por cada cuota',
    precio1: '$ 6.500',
    formaDePago1: 'pago por cuota',
    linkDePago1: 'https://clod2008.github.io/NeuroNut/linkDePagoNeuroNut.html',
    // PESOS forma de pago 2
    pago2: 'total',
    precio2: '$ 18.000',
    formaDePago2: 'pago total (3 cuotas)',
    linkDePago2: '',
    // U$S forma de pago 1
    pago1_USD:  'por cada cuota',
    precio1_USD: 'U$S 40',
    formaDePago1_USD: 'pago por cuota',
    linkDePago1_USD: '',
    // U$S forma de pago 1
    pago2_USD:  'total',
    precio2_USD: 'U$S 100',
    formaDePago2_USD: 'pago total (3 cuotas)',
    linkDePago2_USD: '',
}

const contNeuroL2 = {
    imagenURL: 'images/NeuroNut2.jpg',
    url: 'cursoNeuroNutL2.html',
    claim: 'Nutrición y Espiritualidad',
    title: 'Creando un Nuevo Sendero 2<br><br> ',
    instructor: 'LIC. ROSA DE ALMEIDA',
    id: 'NeuroNutL2',
    ariaDisabled: false,
    buttonDisable: '',
    bifurcadorPagos: 'cursoNeuroNutL2.html#formaDePago',

    // PESOS forma de pago 1
    pago1: 'mensuales',
    precio1: '$ 5000',
    formaDePago1: 'pago por mes',
    linkDePago1: 'https://clod2008.github.io/NeuroNut/linkDePagoNeuroNut.html',
    // PESOS forma de pago 2
    pago2: 'anual',
    precio2: '$ 28.000',
    formaDePago2: 'pago anual',
    linkDePago2: '',
    // U$S forma de pago 1
    pago1_USD:  'mensuales',
    precio1_USD: 'U$S 28',
    formaDePago1_USD: 'pago por mes',
    linkDePago1_USD: '',
    // U$S forma de pago 1
    pago2_USD:  'anual',
    precio2_USD: 'U$S 160',
    formaDePago2_USD: 'pago anual',
    linkDePago2_USD: '',
  
}

// HTML Rerf
const   cursosVihgentes = document.getElementById('cursosVihgentes');
const   opcionPagoML = document.getElementById('opcionPagoML');
const   opcionPagoPP = document.getElementById('opcionPagoPP');






const crearCursoDestacado = (curso)=> {
    
    const place = document.getElementById(curso.id);

    
    place.innerHTML=(`
        <div class="project-wrap">
            <a href="${curso.url}" class="img" style="background-image: url(${curso.imagenURL});">
            <span class="price">${curso.claim}</span>
            </a>
            <div class="text p-4">
                    <h3><a href="${curso.url}">${curso.title}</a></h3>
                    <p class="advisor">Maestra de Dios<br>y Psicoterapeuta del Espíritu<br><span class="">${curso.instructor}</span></p>
                    <ul class="d-flex justify-content-between">
                        <li>Code: ${curso.id}</li>
                        <li class="price">${curso.precio1}</li>
                    </ul>
                    <div>
                        <ul class="d-flex justify-content-between">
                            <li></li>
                            <li class="price">${curso.pago1}</li>
                        </ul>
                    </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                    <a href="${curso.bifurcadorPagos}" class="btn btn-primary ${curso.buttonDisable}" tabindex="-1" role="button" aria-disabled="${curso.ariaDisabled}">Comprá este curso</a>   
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <img class="mercadoPagoImg img-fluid col-4 mt-3 mb-3" src="./images/SVG/mercadoPagoCjaH.svg" alt="">
                <img class="mercadoPagoImg img-fluid col-4 mt-3 mb-3" src="./images/SVG/paypal-logo.svg" alt="">
            </div> 
        </div>
        `);

    };
    
      
    const cusrsosDisponibles = (curso, col)=> {
        const   cursoItem = document.createElement('div');
        cursoItem.classList.add( `col-md-${col}`);
        cursoItem.innerHTML = (`<div class="project-wrap">
                                    <a href="${curso.url}" class="img" style="background-image: url(${curso.imagenURL});">
                                        <span class="price">${curso.claim}</span>
                                    </a>
                                    <div class="text p-4">
                                        <h3><a href="${curso.url}">${curso.title}</a></h3>
                                        <p class="advisor">Maestra de Dios<br>y Psicoterapeuta del Espíritu<br><span class="">${curso.instructor}</span></p>
                                        <ul class="d-flex justify-content-between">
                                            <li>Code: ${curso.id}</li>
                                            <li class="price">${curso.precio1}</li>
                                        </ul>
                                        <div>
                                            <ul class="d-flex justify-content-between">
                                                <li></li>
                                                <li class="price">${curso.pago1}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <a href="${curso.bifurcadorPagos}" class="btn btn-primary ${curso.buttonDisable}" tabindex="-1" role="button" aria-disabled="${curso.ariaDisabled}">Comprá este curso</a>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <img class="mercadoPagoImg img-fluid col-4 mt-3 mb-3" src="./images/SVG/mercadoPagoCjaH.svg" alt="">
                                        <img class="mercadoPagoImg img-fluid col-4 mt-3 mb-3" src="./images/SVG/paypal-logo.svg" alt="">
                                    </div>                       
                                </div>
                                `);
        cursosVihgentes.append(cursoItem)

    }

// Opciones de pago
/*
    <div class="mt-3">
        <ul class="d-flex justify-content-between mt-2">
            <li>Pago único</li>
            <li class="price">$ 3500</li>
        </ul>
        <div class="d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary mb-3 mt-2" tabindex="-1" role="button" aria-disabled="" target="_blank">Realizar Pago único</a>   
        </div>
    </div>

    <button><a href="./cursoNeuroNutL2.html#formaDePago">pagar</a></button>

*/


const crearPreciosML = (curso)=> {
    if(curso.pago1 == null ){
        console.warn(`${curso.id} ${curso.formaDePago1}: Forma de pago no disponible`)
    }else {
        const itemPrecio1 = document.createElement('div');
        opcionPagoML.append(itemPrecio1)
        itemPrecio1.innerHTML = (`
            <div class="mt-3">
                <ul class="d-flex justify-content-between mt-2">
                    <li>${curso.formaDePago1}</li>
                    <li class="price">${curso.precio1}</li>
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                    <a href="${curso.linkDePago1}" class="btn btn-primary mb-3 mt-2" tabindex="-1" role="button" aria-disabled="" target="_blank">Realizar ${curso.formaDePago1}</a>   
                </div>
            </div
        `);
        }
    if(curso.pago2 == null){
        console.warn(`${curso.id} ${curso.formaDePago2}: Forma de pago no disponible`)
    } else {
        const itemPrecio2 = document.createElement('div');
        opcionPagoML.append(itemPrecio2)
        itemPrecio2.innerHTML = (`
            <div class="mt-3">
                <ul class="d-flex justify-content-between mt-2">
                    <li>${curso.formaDePago2}</li>
                    <li class="price">${curso.precio2}</li>
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                    <a href="#" class="btn btn-primary mb-3 mt-2" tabindex="-1" role="button" aria-disabled="" target="_blank">Realizar ${curso.formaDePago2}</a>   
                </div>
            </div
        `);
        }

}

const crearPreciosPP = (curso)=> {
    if(curso.pago1_USD == null ){
        console.warn(`${curso.id} ${curso.formaDePago1_USD} en U$S: Forma de pago no disponible`)
    }else {
        const itemPrecio1 = document.createElement('div');
        opcionPagoPP.append(itemPrecio1)
        itemPrecio1.innerHTML = (`
            <div class="mt-3">
                <ul class="d-flex justify-content-between mt-2">
                    <li>${curso.formaDePago1_USD}</li>
                    <li class="price">${curso.precio1_USD}</li>
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                    <a href="${curso.linkDePago1_USD}" class="btn btn-primary mb-3 mt-2" tabindex="-1" role="button" aria-disabled="" target="_blank">Realizar ${curso.formaDePago1_USD}</a>   
                </div>
            </div
        `);
        }
    if(curso.pago2_USD == null){
        console.warn(`${curso.id} ${curso.formaDePago2_USD} en U$S: Forma de pago no disponible`)
    } else {
        const itemPrecio2 = document.createElement('div');
        opcionPagoPP.append(itemPrecio2)
        itemPrecio2.innerHTML = (`
            <div class="mt-3">
                <ul class="d-flex justify-content-between mt-2">
                    <li>${curso.formaDePago2_USD}</li>
                    <li class="price">${curso.precio2_USD}</li>
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                    <a href="#" class="btn btn-primary mb-3 mt-2" tabindex="-1" role="button" aria-disabled="" target="_blank">Realizar ${curso.formaDePago2_USD}</a>   
                </div>
            </div
        `);
        }

}


    
