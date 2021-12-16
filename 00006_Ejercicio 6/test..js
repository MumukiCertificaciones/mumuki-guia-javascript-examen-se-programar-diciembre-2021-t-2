function transform(texto) {
  let  textoSinTildes = texto.toString().toLowerCase(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return textoSinTildes.replace('ano', 'año');
}

describe("", function() {
  let unEnvio = {
    direccion: "Calle Falsa 123",
    pedidos: ["Muzzarella", "Empanadas de verdura", "Papas fritas"],
    ultimoPedido: "15/11/2021"
  }

  let otroEnvio = {
    direccion: "Wallaby 42",
    pedidos: ["Ravioles con fileto", "10 piezas de sushi"],
    ultimoPedido: "16/12/2021"
  }
  
  it("el resumen de un envío nos provee su información", function() {
    assert.equal(transform($FUNCION(unEnvio)), transform("calle falsa 123 $STRING_ULTIMO_PEDIDO 15/11/2021 $STRING_PEDIDOS 3 pedidos"))
  })
  
  it("el resumen de otro envío nos provee su información", function() {
    assert.equal(transform($FUNCION(otroEnvio)), transform("wallaby 42 $STRING_ULTIMO_PEDIDO 16/12/2021 $STRING_PEDIDOS 2 pedidos"))
  })
})