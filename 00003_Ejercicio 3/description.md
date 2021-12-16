Sabemos que no es saludable para nuestros oídos escuchar música a volúmenes muy altos :hear_no_evil:. Sin embargo, si está muy bajita tampoco escucharemos. Lo ideal es escucharla a un nivel entre $COTA_INFERIOR y $COTA_SUPERIOR. Para ello tenemos la función `$FUNCION`:

``` javascript
ム$FUNCION(40)
true // Porque está entre $COTA_INFERIOR y $COTA_SUPERIOR

ム$FUNCION(19) 
false // Porque es menor que $COTA_INFERIOR

ム$FUNCION(80)
false // Porque es mayor que $COTA_SUPERIOR
```

> Definí la función `$FUNCION` que dado un volumen nos diga si está en el rango recomendable. 