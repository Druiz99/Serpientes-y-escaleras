class Dado {
    lanzar(){

        return  Math.floor(Math.random * 6);

    }
}

class Jugador {
    constructor(nombre, position){
        this.position = null
    }
    get Position(){return this.position}

    avanzar(d){
        this.position += d.lanzar()
    }
}

class Tablero{
    constructor(){
        this.tablero[100]
        for (let   i = 1; i<100; i++) {
            tablero[i] = i
        }

    }
    get Tablero() { return this.tablero }



    checarCasilla(c){
        /*regresa nada, escalera o salto
        if o switch  */

        //escaleras
        if (c.tablero == 3) {     
            this.tablero = 60
        }
        else if (c.tablero == 6) {
            this.tablero = 47
        }
        else if (c.tablero == 32) {
            this.tablero = 53
        }
        else if (c.tablero == 45) {
            this.tablero = 86
        }
        else if (c.tablero == 51) {
            this.tablero = 94
        }
        else if (c.tablero == 61) {
            this.tablero = 83
        }


        //serpientes
        if (c.tablero == 50) {
            this.tablero = 13
        }
        else if (c.tablero == 68) {
            this.tablero = 55
        }
        else if (c.tablero == 81) {
            this.tablero = 16
        }
        else if (c.tablero == 93) {
            this.tablero = 43
        }
        else if (c.tablero == 98) {
            this.tablero = 36
        }
    }
}