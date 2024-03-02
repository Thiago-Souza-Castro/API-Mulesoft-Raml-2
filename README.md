Uma API simples, oferecendo informações sobre alimentos ricos em Vitamina C. Disponibiliza endpoints para listar alimentos, buscar por nome e realizar um health check.

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
