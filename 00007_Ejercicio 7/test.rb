it "$OBJETO tiene inicialmente $MONEDAS_INICIALES monedas" do
  expect($OBJETO.monedas).to be $MONEDAS_INICIALES
end

it "$OBJETO duplica su cantidad de monedas al enviarle el mensaje $METODO_DUPLICAR" do
  $OBJETO.monedas = 5
  $OBJETO.$METODO_DUPLICAR
  expect($OBJETO.monedas).to be 10
end

it "$OBJETO cuadriplica su cantidad de monedas al enviarle el mensaje $METODO_DUPLICAR dos veces" do
  $OBJETO.monedas = 4
  $OBJETO.$METODO_DUPLICAR
  $OBJETO.$METODO_DUPLICAR
  expect($OBJETO.monedas).to be 16
end

it "$OBJETO.$METODO_LEYENDA es falso si tiene menos de $MONEDAS_CORTE monedas" do
  $OBJETO.monedas = ($MONEDAS_CORTE - 1)
  expect($OBJETO.$METODO_LEYENDA).to be false
end

it "$OBJETO.$METODO_LEYENDA es falso si tiene $MONEDAS_CORTE monedas" do
  $OBJETO.monedas = $MONEDAS_CORTE
  expect($OBJETO.$METODO_LEYENDA).to be false
end

it "$OBJETO.$METODO_LEYENDA es verdadero si tiene más de $MONEDAS_CORTE monedas" do
  $OBJETO.monedas = $MONEDAS_CORTE + 1
  expect($OBJETO.$METODO_LEYENDA).to be true
end