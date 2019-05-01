var player = new Jugador();



document.getElementById('dado').addEventListener('click', function () {
    var tira = new Dado();
    player.avanzar(tira);

    document.getElementById('imprime').innerHTML = player.checarCasilla()
})


