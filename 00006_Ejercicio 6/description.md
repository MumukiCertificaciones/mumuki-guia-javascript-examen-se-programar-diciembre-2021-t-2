En una casa de comidas guardan registro de los envíos que realizan a sus clientes :stuffed_flatbread:. Estos registros tienen la siguiente forma:

``` javascript
let envioCalleFalsa = {
  direccion: "Calle Falsa 123",
  pedidos: ["Muzzarella", "Empanadas de verdura", "Papas fritas"],
  ultimoPedido: "15/11/2021"
}

let envioWallaby = {
  direccion: "Wallaby 42",
  pedidos: ["Ravioles con fileto", "10 piezas de sushi"],
  ultimoPedido: "16/12/2021"
}
```

> Definí la función `$FUNCION` que permita obtener un resumen de la información registrada de esta manera: 
>
``` javascript
ム$FUNCION(envioCalleFalsa)
"Calle Falsa 123 $STRING_ULTIMO_PEDIDO 15/11/2021 $STRING_PEDIDOS 3 pedidos"
>
ム$FUNCION(envioWallaby)
"Wallaby 42 $STRING_ULTIMO_PEDIDO 15/11/2021 $STRING_PEDIDOS 2 pedidos"
```