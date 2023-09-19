export class Resultado{
    nombreDeGanador:string;
    tiempoDeBatalla:number;
    energia:number;

    constructor(nombreDeGanador:string, tiempoDeBatalla:number, energia:number){
        this.nombreDeGanador = nombreDeGanador;
        this.tiempoDeBatalla = tiempoDeBatalla;
        this.energia = energia;
    }
}