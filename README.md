Uma API simples, desenvolvida utilizando MuleSoft para o design da API e Anypoint para configurar os fluxos. Utiliza MySQL como banco de dados para armazenar informações sobre alimentos ricos em Vitamina C. O front-end da API foi construído com React, proporcionando uma interface visual amigável.
Endpoints

/vitaminaC
GET:
Retorna uma lista de alimentos ricos em Vitamina C.
Exemplo de resposta: Lista detalhada de alimentos.

/buscar
GET:
Busca um alimento por nome.
Parâmetro: nome (obrigatório, tipo: string).
Respostas:
200: Informações detalhadas sobre o alimento.
404: {"error": "Alimento não encontrado."}

/healthcheck
GET:
Verifica o status da API e do banco de dados.
Exemplo de resposta: {"apiStatus": "OK", "databaseStatus": "OK"}
Explore esta API para descobrir alimentos ricos em Vitamina C.
