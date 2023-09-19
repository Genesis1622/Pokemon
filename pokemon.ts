import { Habilidad } from "./habilidad";
import { Tipo } from "./tipo";
export class Pokemon{
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _energia: number;
    public get energia(): number {
        return this._energia;
    }
    public set energia(value: number) {
        this._energia = value;
    }
    private _tipo: Tipo;
    public get tipo(): Tipo {
        return this._tipo;
    }
    public set tipo(value: Tipo) {
        this._tipo = value;
    }
    private _habilidades: Habilidad;
    public get habilidades(): Habilidad {
        return this._habilidades;
    }
    public set habilidades(value: Habilidad) {
        this._habilidades = value;
    }
    constructor(nombre:string, energia:number, tipo:Tipo, habilidades:Habilidad){
        this._nombre = nombre;
        this._energia = energia;
        this._tipo = tipo;
        this._habilidades = habilidades;
    }
}