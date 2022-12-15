DELETE FROM passagens WHERE id>=0;
    
  INSERT INTO passagens
		(id, preco, assento, classe, voos_id, pedidos_id, passageiro_id)
	VALUES
		(1, 1000,'10b', 1, 1, null, null),
        (2, 1000,'15a', 1, 1, null, null),
        (3, 1000,'18c', 1, 1, null, null),
        (4, 1000,'2b', 1, 1, null, null),
        (5, 1000,'5a', 1, 1, null, null),

        (6, 1000,'10b', 1, 2, null, null),
        (7, 1000,'15a', 1, 2, null, null),
        (8, 1000,'18c', 1, 2, null, null),
        (9, 1000,'2b', 1, 2, null, null),
        (10, 1000,'5a', 1, 2, null, null),

        (11, 1000,'10b', 1, 3, null, null),
        (12, 1000,'15a', 1, 3, null, null),
        (13, 1000,'18c', 1, 3, null, null),
        (14, 1000,'2b', 1, 3, null, null),
        (15, 1000,'5a', 1, 3, null, null),

        (16, 1000,'10b', 1, 4, null, null),
        (17, 1000,'15a', 1, 4, null, null),
        (18, 1000,'18c', 1, 4, null, null),
        (19, 1000,'2b', 1, 4, null, null),
        (20, 1000,'5a', 1, 4, null, null),

        (21, 1000,'10b', 1, 5, null, null),
        (22, 1000,'15a', 1, 5, null, null),
        (23, 1000,'18c', 1, 5, null, null),
        (24, 1000,'2b', 1, 5, null, null),
        (25, 1000,'5a', 1, 5, null, null);
        