/* Buscando passagens de acordo com ponto de embarque e desembarque e data de ida */
/* 1 - Buscar todas os voos - OK */
/* 2 - Adicionar filtro de ponto de embarque na consulta buscando por cidade - OK */
/* 3 - Adicionar filtro de ponto de desembarque na consulta buscando por cidade - OK */
/* 4 - Adicionar filtro de data de ida - OK */

SELECT 
    data_hora_partida,
    data_hora_chegada,
    aeroportos_origem_id,
    aeroportos_destino_id,
    aeroporto_origem.cidade AS cidade_origem,
    aeroporto_destino.cidade AS cidade_destino,
    aeroporto_origem.sigla AS sigla_origem,
    aeroporto_destino.sigla AS sigla_destino
FROM
    voos
        INNER JOIN
    aeroportos AS aeroporto_origem ON voos.aeroportos_origem_id = aeroporto_origem.id
        INNER JOIN
    aeroportos AS aeroporto_destino ON voos.aeroportos_destino_id = aeroporto_destino.id
WHERE
    aeroporto_origem.cidade = 'Belo Horizonte'
        AND aeroporto_destino.cidade = 'Rio de Janeiro'
        AND voos.data_hora_partida = '2022-11-07 08:00:00';

        /* Buscando passagens de acordo com ponto de embarque e desembarque e data de ida e data de volta */
/* 1 - Buscar todas os voos - OK */
/* 2 - Adicionar filtro de ponto de embarque na consulta buscando por cidade - OK */
/* 3 - Adicionar filtro de ponto de desembarque na consulta buscando por cidade - OK */
/* 4 - Adicionar filtro de data de ida - OK */
/* 5 - Adicionar filtro de data de volta - OK */

SELECT 
    data_hora_partida,
    data_hora_chegada,
    aeroportos_origem_id,
    aeroportos_destino_id,
    aeroporto_origem.cidade AS cidade_origem,
    aeroporto_destino.cidade AS cidade_destino,
    aeroporto_origem.sigla AS sigla_origem,
    aeroporto_destino.sigla AS sigla_destino
FROM
    voos
        INNER JOIN
    aeroportos AS aeroporto_origem ON voos.aeroportos_origem_id = aeroporto_origem.id
        INNER JOIN
    aeroportos AS aeroporto_destino ON voos.aeroportos_destino_id = aeroporto_destino.id
WHERE
    aeroporto_origem.cidade = 'Belo Horizonte'
        AND aeroporto_destino.cidade = 'Rio de Janeiro'
        AND voos.data_hora_partida = '2022-11-07 08:00:00' 
UNION ALL SELECT 
    data_hora_partida,
    data_hora_chegada,
    aeroportos_origem_id,
    aeroportos_destino_id,
    aeroporto_origem.cidade AS cidade_origem,
    aeroporto_destino.cidade AS cidade_destino,
    aeroporto_origem.sigla AS sigla_origem,
    aeroporto_destino.sigla AS sigla_destino
FROM
    voos
        INNER JOIN
    aeroportos AS aeroporto_origem ON voos.aeroportos_origem_id = aeroporto_origem.id
        INNER JOIN
    aeroportos AS aeroporto_destino ON voos.aeroportos_destino_id = aeroporto_destino.id
WHERE
    aeroporto_origem.cidade = 'Rio de Janeiro'
        AND aeroporto_destino.cidade = 'Guarulhos'
        AND voos.data_hora_partida = '2022-11-07 22:00:00';