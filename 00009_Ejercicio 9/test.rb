una_atraccion_interesante_del_lugar = $INTERESANTE_1.new($ANTIGUEDAD_CORTE + 1)
una_atraccion_no_interesante_del_lugar = $INTERESANTE_1.new($ANTIGUEDAD_CORTE - 1)
un_museo = Museo.new
un_puente = Puente.new
lugar = $CLASE.new([una_atraccion_interesante_del_lugar, una_atraccion_no_interesante_del_lugar, un_museo, un_puente])

it "Una instancia de $CLASE nos puede decir cuales son sus atracciones interesantes" do
  expect(lugar.$METODO_INTERESANTE).to eq [una_atraccion_interesante_del_lugar, un_museo]
end

it "Los $INTERESANTE_1s son interesantes si tienen más de $ANTIGUEDAD_CORTE años" do
  expect(una_atraccion_interesante_del_lugar.interesante?).to eq true
end

it "Los $INTERESANTE_1s no son interesantes si tienen menos de $ANTIGUEDAD_CORTE años" do
  expect(una_atraccion_no_interesante_del_lugar.interesante?).to eq false
end

it "Los Museos son siempre interesantes" do
  expect(un_museo.interesante?).to eq true
end

it "Los Puentes no son interesantes" do
  expect(un_puente.interesante?).to eq false
end