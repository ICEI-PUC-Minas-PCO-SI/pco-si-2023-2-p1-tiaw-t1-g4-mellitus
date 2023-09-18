# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.


## Personas

#1: Giovanna tem 19 anos , trabalha como técnica de farmácia e cursa fisioterapia. Portadora de diabetes tipo 1 (insulinódependant) desde 8 anos de idade. Busca melhorar seus hábitos de vida, aprendendo melhor quanto de insulina reguladora aplicar antes de comer. E precisa de uma plataforma para isto.

#2: Isabelle, de 19 anos, é atendente de supermercado e filha única. Ela possui casos de diabetes tipo 2 na família, tanto por parte do pai quanto por parte da mãe, e eles não a têm. Isabelle se preocupa e tem dúvidas se está predisposta a ter diabetes e quais cuidados deve tomar para não adquiri-la. Ela faz o que pode para contribuir com a renda em casa, evita ao máximo ficar doente para não trazer muitos gastos e, como ficou sabendo do caso na família, está em busca de auxílio.

#3: Ana, 38 anos, Profissão: Nutricionista, portadora de Diabetes Tipo 2, é uma pessoa ativa. Ela trabalha em um consultório de nutrição, gosta de cozinhar refeições saudáveis em casa e pratica pilates regularmente. Procura gerenciar sua ingestão de carboidratos de forma eficaz para manter níveis estáveis de glicose no sangue e melhorar sua saúde a longo prazo.

#4: Augusto, 23 anos, estudante de engenharia e irmão do Lucas, uma criança de 12 anos que sofre com sobrepeso e diabetes tipo 2. Augusto é o responsável pelo irmão em grande parte do tempo e está sempre em busca de auxiliar a mãe no máximo possível cuidando do pequeno. Se preocupa em levar o irmão ao médico uma vez por mês, preparar suas refeições e monitorar as atividades físicas do irmão, Augusto está sempre atrás de dicas e artigos para executar corretamente o controle glicemico e hormonal do irmão, além de zelar pela nutrição e perda de peso, já que se tratado corretamente, o caso de Lucas pode regredir bastante.

#5: Rafael, 25 anos, estudante de medicina da USP, buscava um tema relevante para seu trabalho final da faculdade. Tendo sempre muito interesse na área de endocrinologia e suas complexidades, deu ênfase ao estudo da diabetes. 

#6: Luciano 50 anos tem dificuldades de relacionar apesar da rotina com a diabete tem no caso e de variação de glicemia constantes Luciano precisa se organizar para criar uma rotina de cuidados com a diabete, na sua alimentação e na aplicação da insulina.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

#1: Como diabética, quero manter minha glicemia em uma faixa mais saudável e estável. Para ter uma qualidade de vida maior e uma maior longevidade. Por estudar e trabalhar tenho dificuldade para parar no meu dia a dia e fazer esse cálculo por mim mesma e acabo aplicando quantidades erradas e muitas vezes nem aplicando pela dificuldade. Preciso de uma plataforma que me ajude com ferramentas de  cálculo  tanto para quanto insulina aplicar ao comer tanto para o calculo do Bolus de correção. (Giovanna, 19 anos).

#2: Em busca de informações sobre diabetes, uma amiga recomendou o site "Mellitus" para orientá-la. Ao se cadastrar, o aplicativo solicitou algumas informações sobre seu histórico médico e estilo de vida. Ela inseriu os dados sobre a diabetes na família, seus hábitos alimentares e sua rotina de exercícios. O aplicativo forneceu algumas dicas simples sobre como manter um estilo de vida mais saudável, sugerindo pequenas mudanças em sua dieta, como incluir mais frutas e vegetais, e também a orientou a praticar atividades físicas ao ar livre, como caminhar. (Isabelle, 19 anos).

#3: Como Nutricionista e portadora de diabetes, sempre procuro a melhor maneira de ajudar meus pacientes com diabetes e e eu mesma. Sempre procurei por uma plataforma que eu pudesse indicar para meus pacientes para facilitar suas vidas. Com  gama de informações úteis sobre a comorbidade e talvez disponibilizasse como melhorar minha glicemia de modo geral , com vídeos guias , algo que fosse fácil de repassar para os pacientes e uso simples pela minha parte. 

#4: Costumo rodar a internet toda buscando informações para controle glicêmico e bem-estar do meu irmão. Como meu tempo é muito curto, preciso de uma plataforma simples, centralizada e de fácil uso para que eu e ele possamos estudar sobre a condição de forma otimizada no meu tempo livre, levando em consideração a dieta do Lucas para nossa mãe preparar as comidas da semana, atividade física e as doses de insulina corretas após cada refeição. Além desta demanda seria bom ter uma plataforma para que eu pudesse estudar tudo sobre a doença. (Augusto, 23 anos)

#5: Durante suas buscas na internet, Rafael encontrou o "Mellitus", um site dedicado a fornecer informações confiáveis sobre diabetes. Encontrou um vasto conteúdo sobre o tema, com informações bem aprofundadas, além de auxílio para o controle dessa condição, como estilo de vida, nutrição, atividade física, entre outros aspectos. 
A partir das informações encontradas no "Mellitus", Rafael pôde terminar seu trabalho e percebeu a importância da disseminação de informação de qualidade e acessível ao público, compreendendo não só o aspecto da doença, mas também o impacto social de tal condição(Rafael, 25 anos).

#6: Meu nome é Luciano tenho 52  anos e com a correria da vida não tenho muito tempo para cuidar da minha saúde, com isso meu filho mais novo me apresentou a aplicação mellitus   que me ajudou na organização de uma rotina saudável além de me proporcionar um jeito rápido e fácil de calcular o quanto de insulina eu devo aplicar para cada refeição. (Luciano 52).

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário se cadastre no site | ALTA |  |
|RF-002| Permitir que o usuário faça login na plataforma   | ALTA | |
|RF-003| Os usuários podem registrar suas refeições, incluindo alimentos consumidos, quantidade e horário   | ALTA | |
|RF-004| Alterar, Adicionar e Remover alimentos de sua refeição | ALTA | |
|RF-005| Cálculo de bolus alimentar e bolus de correção e sua somatória | ALTA | |
|RF-006| A aplicação fornece dicas personalizadas com base nas informações do usuário | MÉDIA | |
|RF-007| Pesquisar alimentos do site/app | ALTA | |
|RF-008| Interação entre os usuários do site | ALTA | |
|RF-009| Avaliação entre os usuários do site | ALTA | |
|RF-010| Opiniões entre os usuários do site | ALTA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A Aplicação vai rodar o tempo todo | ALTA |
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA |
|RNF-003| Vai armazenar os dados do usuário | ALTA |
|RNF-004| Exibir os conteúdos a partir dos dados do usuário | ALTA |
|RNF-005| Carregar tela de aplicação no menor tempo possível | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
