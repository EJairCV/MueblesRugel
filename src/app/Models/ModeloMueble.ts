export class Mueble {
    id:string="";
    nombre:string="";
    tipoMueble:Array<string>=[];
    tipoMaterial:Array<string>=[];
    descripcion:string="";
    precioUnidad:number=99.99;
    precioMayor:number=99.99;
    link:string="";

    constructor(id:string,nombre:string,tipoMaterial:Array<string>,tipoMueble:Array<string>,descripcion:string,precioUnidad:number,precioMayor:number,link:string) {
        this.id=id;
        this.nombre =nombre;
        this.precioUnidad=precioUnidad;
        this.precioMayor=precioMayor;
        this.descripcion=descripcion;
        this.tipoMaterial=tipoMaterial;
        this.tipoMueble=tipoMueble;
        this.link=link;
    }
}