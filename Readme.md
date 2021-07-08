<h1>Automação FrontEnd</h1>

Status: Done

### Avaliação da TC para automação Web  utilizando Cypress JavaScript e Cucumber

Instalação:

Cypress e dependencia do cucumber 
+ npm install --save-dev cypress cypress-cucumber-preprocessor

Cypress 
+ npx cypress open

Relatório mochawesome
+ npm install --save-dev mochawesome

Configurações do Projeto:

### Support:

+ Elements
- Dentro da pasta Elements contém o arquivo testElements.js que contém todos os elementos mapeados 

+ PageObjects
- Dentro da pasta PageObjects contém o arquivo testPage.js 

+ Step
- Dentro da pasta Steps contém o arquivo testStep.js que contém todos os steps do Projeto

### Integration

+ test.Feature
= Arquivo que contém a escrita em BDD com Gherkin

### Para executar o Projeto:

+ npm run test:chrome
- executa o projeto no navegador Google Chrome

+ npm run test:firefox
- executa o projeto no navegador Google Chrome

+ npm run test
- executa o projeto em modo modo headless

### Cenários Automatizados

+ Cenário de Cadastro (Done)
- Preenche todos os campos e realiza o Cadastro

+ Cenário Limpar dado preenchidos  (Failed)
- Preenche alguns campos e limpa os dados

+ Cenário Validar seleção de País (Failed)
- Seleciona um país e verfica se no campo contém o país selecionado

+ Cenário Validar seleção de Skills (Done)
- Seleciona uma Skill e valida se no campo contém a skill selecionado