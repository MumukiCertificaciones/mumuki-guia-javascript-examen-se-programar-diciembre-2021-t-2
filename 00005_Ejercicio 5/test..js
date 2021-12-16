describe("", function() {
  it("La cantidad de $ELEMENTOs en ['jarra', '$ELEMENTO', 'taza', '$ELEMENTO', '$ELEMENTO', 'bowl'] es 3", function() {
    assert.deepEqual($FUNCION(['jarra', '$ELEMENTO', 'taza', '$ELEMENTO', '$ELEMENTO', 'bowl']), 3)
  })
  
  it("La cantidad de $ELEMENTOs en ['$ELEMENTO', '$ELEMENTO', 'bowl', 'bowl'] es 2", function() {
    assert.deepEqual($FUNCION(['$ELEMENTO', '$ELEMENTO', 'bowl', 'bowl']), 2)
  })

  it("La cantidad de $ELEMENTOs en ['taza', 'bowl', 'bowl', 'jarra'] es 0", function() {
    assert.deepEqual($FUNCION(['taza', 'bowl', 'bowl', 'jarra']), 0)
  })

  it("La cantidad de $ELEMENTOs en ['$ELEMENTO', 'taza', 'taza', 'bowl'] es 1", function() {
    assert.deepEqual($FUNCION(['$ELEMENTO', 'taza', 'taza', 'bowl']), 1)
  })
})