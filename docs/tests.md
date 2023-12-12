# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Fluxo de usuario**
 :--------------: | ------------
**Procedimento**  | 1) O usuario ao clicar nos "botões" de texto tem que ser levado as paginas indexadas.
**Requisitos associados** | RF-003
**Resultado esperado** | Prosseguir para a proxima pagina.
**Dados de entrada** | ...
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Tabela de alimentos pre-definidos com pesquisa**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome do alimento a ser pesquisado e recebe os valores nutricionais 
**Requisitos associados** | RF-007
**Resultado esperado** | info do alimento pesquisado.
**Dados de entrada** | Inserção do nome do alimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Cauculadolara de carboidratos**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa o valor calorico do alimento a ser consumido a cauculadora retorna o qunto de insulina a ser colocada
**Requisitos associados** | RF-005
**Resultado esperado** | Valor da insulina a ser aplicada
**Dados de entrada** | Numeros de caboridratos
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Efetuar loguin/cadastro**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, senha e email
**Requisitos associados** | RF-001
**Resultado esperado** | Armazenamento de valores
**Dados de entrada** | Nome senha email.
**Resultado obtido** | Sucesso.
## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Fluxo de usuario*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 




![IMG-20231211-WA0040](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g4-mellitus/assets/126624707/36179b2a-5f35-46a7-9661-186b8bcd9b7b)

|*Caso de Teste*               |*TC-02 - Tabela de alimentos pre-definidos com pesquisa*                                         |
|---|---|
|Requisito Associado | RF-004 - pesquisa de alimentos.|
|Link do vídeo do teste realizado: | 
 

![IMG-20231211-WA0040](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g4-mellitus/assets/126624707/4fbf6bd1-65aa-44a0-af72-654bbcec97aa)|

|*Caso de Teste*                                 |*TC-03 - Cauculadolara de carboidratos*                      |
|---|---|
|Requisito Associado | RF-004 - cauculadora de insulina.|
|Link:file:///home/chronos/u-01fa509e705463f987cb5abdc046ba82dbceda7e/MyFiles/Downloads/IMG-20231211-WA0040.jpg


![IMG-20231211-WA0040](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g4-mellitus/assets/126624707/ff99acaa-8f76-4ea6-904c-0816c0df9587)


|*Caso de Teste*                                 |*TC-04 - Efetuar Login (usuário autenticado)*                                         
|---|---|
|Requisito Associado | RF-004 - Cadastro de dados do usuario.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 



## Avaliação dos Testes de Software

Os primeiros testes foram de grande valor para o projeto ao descobrir falhas simples, princialmente de user flow, auxiliando na identificação e na respostas a essas falhas que foram devidamente corrigidas, quanto a quesitos como calculadora de insulina os resultados foram bons para um requisito tao complexo no todo resultados inesperados mas de tudo foram feitas as devidas correçoes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que tem diabetes que precisa organizar seu tratamento da doença. |




## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que precisa de um cauculo raoido de carboidratos de sua refeiçao para aplicar a devida dose de insulina.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 3                    | 25.87 segundos                  |
| 2       | SIM             | 4                    | 21.11 segundos                  |
| 3       | SIM             | 4                    | 28.07 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 22.69 segundos |


    Comentários dos usuários: Deu pra caucular mas acho que pode ser mais rapido, no geral muito bom!




Cenário 2: Você é uma pessoa que possui um pai idoso(diabetico) e precisa se informar sobre uma dieta balanciada para cuidar dele .

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 28.94 segundos                          |
| 2       | SIM             | 5                    | 27.42 segundos                          |
| 3       | SIM             | 3                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15.00 segundos |


    Comentários dos usuários: achei muito informativo acho que ate pessoas nao diabeticas deveriam montar dietas no mellitus.



## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



