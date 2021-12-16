Una extravagante repostería :cake: nos pidió ayuda para decorar su famosa torta cuadrada de chocolate:

<gs-board>
  GBB/1.0
  size 3 3
  cell 0 0 Negro 1
  cell 0 1 Negro 1
  cell 0 2 Negro 1
  cell 1 0 Negro 1
  cell 1 1 Negro 1
  cell 1 2 Negro 1
  cell 2 0 Negro 1
  cell 2 1 Negro 1
  cell 2 2 Negro 1
  head 0 0
</gs-board>

La decoración consta de un confite de un mismo color en cada extremo de la torta. El color puede ser `Azul`, `Rojo`, `Verde` o `Negro`, ¡eso depende del gusto de quien encargue la torta! Si por ejemplo, alguien pide una torta con confites de color `$COLOR_EJEMPLO`, la torta decorada debería verse así:

<gs-board>
  GBB/1.0
  size 3 3
  cell 0 0 Negro 1 $COLOR_EJEMPLO 1
  cell 0 1 Negro 1
  cell 0 2 Negro 1 $COLOR_EJEMPLO 1
  cell 1 0 Negro 1
  cell 1 1 Negro 1
  cell 1 2 Negro 1
  cell 2 0 Negro 1 $COLOR_EJEMPLO 1
  cell 2 1 Negro 1
  cell 2 2 Negro 1 $COLOR_EJEMPLO 1
  head 0 0
</gs-board>

> Definí el procedimiento `$PROCEDIMIENTO` que recibe un `color` como argumento y decora la torta con confites de ese color comenzando en el extremo Sur Oeste. No importa dónde termina el cabezal.