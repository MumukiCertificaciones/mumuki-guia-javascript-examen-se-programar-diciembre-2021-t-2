¡Dejemos atrás a JavaScript para pasar a Ruby! :tada:

En esta ocasión queremos desarrollar parte de un juego, para ello vamos a modelar a su personaje principal: `$OBJETO`. Este personaje va a recolectar monedas y sabemos que:

* inicialmente tiene $MONEDAS_INICIALES monedas;
* puede duplicar sus monedas;
* si tiene más de $MONEDAS_CORTE monedas diremos que es `$METODO_LEYENDA`. 

> Definí en Ruby, el objeto `$OBJETO` que tenga un atributo `@monedas` con su getter. El objeto entiende los mensajes `$METODO_DUPLICAR` (que multiplica por 2 su cantidad de monedas) y `$METODO_LEYENDA`. No te olvides de inicializar el atributo `@monedas` con el valor correspondiente.