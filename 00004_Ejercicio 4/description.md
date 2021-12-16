Vamos a desarrollar un GPS que nos recomiende un destino a partir de una dirección :arrow_upper_left:. Para ello definiremos una función que reciba una dirección y dos destinos y según el valor del primer argumento nos recomiende hacia donde ir. Las únicas direcciones posibles son `"$UNA_DIRECCION"` y `"$OTRA_DIRECCION"`. En caso que el primer argumento sea `"$UNA_DIRECCION"` nos dirá que vayamos al primer destino, si es `"$OTRA_DIRECCION"` nos recomendará que vayamos al segundo:

``` javascript
ム$FUNCION("$UNA_DIRECCION", "Gral. Las Heras", "Merlo")
"Vamos a Gral. Las Heras"

ム$FUNCION("$OTRA_DIRECCION", "Iguazú", "El Pato")
"Vamos a El Pato"
```

> Definí la función `$FUNCION`.