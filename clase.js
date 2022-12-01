class Nota{
    constructor(nombre,categoria,hora){
    this.nombre = nombre;
    this.categoria = categoria;
    this.hora = hora;
    }
    
    
set setNombre(nombre){
this.nombre = nombre;
}

get getNombre(){
return this.nombre;
}

set setCategoria(categoria){
    this.categoria = categoria;
    }
    
    get getCategoria(){
    return this.categoria;
    }
    set setHora(hora){
        this.hora = hora;
        }
        
        get getHora(){
        return this.hora;
        }
    }

    