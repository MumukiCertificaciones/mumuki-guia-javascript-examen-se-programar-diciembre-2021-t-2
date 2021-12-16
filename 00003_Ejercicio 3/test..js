describe("", function() {
  it((Number($COTA_INFERIOR) + 1) + " es un volumen en el rango recomendable", function() {
    assert($FUNCION(Number($COTA_INFERIOR) + 1));
  });
  
  it((Number($COTA_SUPERIOR) - 1) + " es un volumen en el rango recomendable", function() {
    assert($FUNCION(Number($COTA_SUPERIOR) - 1));
  });
  
  it((Number($COTA_SUPERIOR) + 1) + " no es un volumen en el rango recomendable", function() {
    assert(!$FUNCION(Number($COTA_SUPERIOR) + 1));
  });
  
  it((Number($COTA_INFERIOR) - 1) + " no es un volumen en el rango recomendable", function() {
    assert(!$FUNCION(Number($COTA_INFERIOR) - 1));
  });
})