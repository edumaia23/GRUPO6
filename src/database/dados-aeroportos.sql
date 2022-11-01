	DELETE FROM aeroportos WHERE id>=0;
    
  INSERT INTO aeroportos
		(id, cidade, sigla, nome)
	VALUES
		(1, 'Salvador', 'SSA', 'Luis Eduardo Magalhães'),
        (2, 'Belo Horizonte', 'CNF', 'Confins'),
        (3, 'Rio de Janeiro', 'GIG', 'Galeão'),
        (4, 'Guarulhos', 'GRU', 'Cumbica'),
        (5, 'São Paulo', 'CNH', 'Congonhas');