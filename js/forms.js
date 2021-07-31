const formReserva = $('#formReserva');
const formUCDM1 = $('#formUCDM1');
const formUCDM2 = $('#formUCDM2');
const forNeuroNut = $('#formNeuroNut');

const agregaFormReserva =() => {
    if(formReserva == null){
        console.warn('agregaForm(): no se encuentra ID')
        
        }else{
            formReserva.append(`
            <form action="./ejemploFormularioConAdjunto/enviarFormulario.php" 
                    method="post" 
                    id="formulario-portada" 
                    class="signup-form"
                    enctype="multipart/form-data">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="cursoElejido" id="UCDM-1" value="UCDM 1">
                    <label class="form-check-label" for="exampleRadios1">
                    UCDM Nivel 1
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="cursoElejido" id="UCDM-2" value="UCDM 2">
                    <label class="form-check-label" for="exampleRadios2">
                    UCDM Nivel 2
                    </label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="cursoElejido" id="BioNeuroNut" value="BioNeuroNut" disabled>
                    <label class="form-check-label" for="exampleRadios2">
                    Bio Neuro Nutrición <span class="text-primary mx-3">Proximamente</span>
                    </label>
                </div>
                <div class="form-group">
                    <label class="label" for="name">Nombre</label>
                    <input type="text" name="nombre" class="form-control" placeholder="Ingresá tu nombre"  required>
                </div>
                <!--
                <div class="form-group">
                    <label class="tel" for="tel">Teléfono </label>
                    <input type="text" name="Teléfono" class="form-control" placeholder="Ingresá tu teléfono">
                </div>
                -->
                <div class="form-group">
                    <label class="label" for="email">Email </label>
                    <input type="email" name="email" class="form-control" placeholder="Ingresá tu mail" required>
                </div>
                <div class="form-group d-flex justify-content-end mt-4">
                    <button type="submit"  id="enviar" class="btn btn-primary submit">
                    <span class="fa fa-paper-plane"></span></button>
                </div>
            </form>
        `);
    
    };
};

const agregaFormUCDM1 =() => {
    if(formUCDM1 == null){
        console.warn('agregaFormUCDM1(): no se encuentra ID')
        
        }else{
            formUCDM1.append(`
            <form action="./ejemploFormularioConAdjunto/enviarFormularioUCDM1.php" 
                    method="post" 
                    id="formulario-portada" 
                    class="signup-form"
                    enctype="multipart/form-data">
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="cursoElejido" id="UCDM-1" value="UCDM 1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                    UCDM Nivel 1
                    </label>
                </div>
      
                <div class="form-group">
                    <label class="label" for="name">Nombre</label>
                    <input type="text" name="nombre" class="form-control" placeholder="Ingresá tu nombre"  required>
                </div>
                <div class="form-group">
                    <label class="label" for="email">Email </label>
                    <input type="email" name="email" class="form-control" placeholder="Ingresá tu mail" required>
                </div>
                <!--
                <p>Si tenés un comprobante de pago, podés subirlo acá.</p>
                <div class="form-group">
                    <input type="file" name="adjuntarArchivo" id="adjuntarArchivo" class="btn btn-primary form-control-file btn-sm w-100">
                </div>
                -->
                <div class="form-group d-flex justify-content-end mt-4">
                    <button type="submit"  id="enviar" class="btn btn-primary submit">
                    <span class="fa fa-paper-plane"></span></button>
                </div>
            </form>
        `);
    
    };
};


const agregaFormUCDM2 =() => {
    if(formUCDM2 == null){
        console.warn('agregaFormUCDM2(): no se encuentra ID')
        
        }else{
            formUCDM2.append(`
            <form action="./ejemploFormularioConAdjunto/enviarFormularioUCDM2.php" 
                    method="post" 
                    id="formulario-portada" 
                    class="signup-form"
                    enctype="multipart/form-data">
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="cursoElejido" id="UCDM-2" value="UCDM 2" checked>
                    <label class="form-check-label" for="exampleRadios1">
                    UCDM Nivel 2
                    </label>
                </div>
      
                <div class="form-group">
                    <label class="label" for="name">Nombre</label>
                    <input type="text" name="nombre" class="form-control" placeholder="Ingresá tu nombre"  required>
                </div>
                <div class="form-group">
                    <label class="label" for="email">Email </label>
                    <input type="email" name="email" class="form-control" placeholder="Ingresá tu mail" required>
                </div>
                <!--
                <p>Si tenés un comprobante de pago, podés subirlo acá.</p>
                <div class="form-group">
                    <input type="file" name="adjuntarArchivo" id="adjuntarArchivo" class="btn btn-primary form-control-file btn-sm w-100">
                </div>
                -->
                <div class="form-group d-flex justify-content-end mt-4">
                    <button type="submit"  id="enviar" class="btn btn-primary submit">
                    <span class="fa fa-paper-plane"></span></button>
                </div>
            </form>
        `);
    
    };
};


const agregaNeuroNut =() => {
    if(forNeuroNut == null){
        console.warn('agregaFormNeuroNut(): no se encuentra ID')
        
        }else{
            forNeuroNut.append(`
            <form action="./ejemploFormularioConAdjunto/enviarFormularioNeuroNut.php" 
                    method="post" 
                    id="formulario-portada" 
                    class="signup-form"
                    enctype="multipart/form-data">
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="cursoElejido" id="BioNeuroNut" value="Bio Neuro Nutrición" checked>
                    <label class="form-check-label" for="exampleRadios1">
                    Bio Neuro Nutrición
                    </label>
                </div>
      
                <div class="form-group">
                    <label class="label" for="name">Nombre</label>
                    <input type="text" name="nombre" class="form-control" placeholder="Ingresá tu nombre"  required>
                </div>
                <div class="form-group">
                    <label class="label" for="email">Email </label>
                    <input type="email" name="email" class="form-control" placeholder="Ingresá tu mail" required>
                </div>
                <!--
                <p>Si tenés un comprobante de pago, podés subirlo acá.</p>
                <div class="form-group">
                    <input type="file" name="adjuntarArchivo" id="adjuntarArchivo" class="btn btn-primary form-control-file btn-sm w-100">
                </div>
                -->
                <div class="form-group d-flex justify-content-end mt-4">
                    <button type="submit"  id="enviar" class="btn btn-primary submit">
                    <span class="fa fa-paper-plane"></span></button>
                </div>
            </form>
        `);
    
    };
};


agregaFormReserva();
agregaFormUCDM1();
agregaFormUCDM2();
agregaNeuroNut();
