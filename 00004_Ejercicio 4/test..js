describe("", function() {
  it("Si la dirección es $UNA_DIRECCION y las opciones son 'Potrero' y 'Iguazú' nos recomedará que vayamos a 'Potrero'", function() {
    assert.equal($FUNCION("$UNA_DIRECCION", "Potrero", "Iguazú"), "Vamos a Potrero");
  });
  
  it("Si la dirección es $UNA_DIRECCION y las opciones son 'Calafate' y 'Cafayate' nos recomedará que vayamos a 'Calafate'", function() {
    assert.equal($FUNCION("$UNA_DIRECCION", "Calafate", "Cafayate"), "Vamos a Calafate");
  });

  it("Si la dirección es $OTRA_DIRECCION y las opciones son 'Potrero' y 'Iguazú' nos recomedará que vayamos a 'Iguazú'", function() {
    assert.equal($FUNCION("$OTRA_DIRECCION", "Potrero", "Iguazú"), "Vamos a Iguazú");
  });

  it("Si la dirección es $OTRA_DIRECCION y las opciones son 'Calafate' y 'Cafayate' nos recomedará que vayamos a 'Cafayate'", function() {
    assert.equal($FUNCION("$OTRA_DIRECCION", "Calafate", "Cafayate"), "Vamos a Cafayate");
  });
})