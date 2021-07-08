Feature: Realizar automação no site
    Story User: Realizar Cadastrono site
    Como futuro usuário Final
    Quero realizar meu cadastro
    De modo que possa usufruir após meus acessos

    Scenario: Realizar Cadastro com sucesso no site
        Given que acesso o site Automation Demo
        And   preencho todos os campos de Cadastro
        When  clico no botão submit
        Then  valido se o cadastro foi realizado com sucesso

    Scenario: Limpar dados informados
        Given que acesso o site Automation Demo
        And   preencho alguns dados
        When  clico no botão Refresh
        Then  valido se os dados nos campos preenchidos são apagados

    Scenario: Validar Seleção de País
        Given que acesso o site Automation Demo
        When  seleciono um país
        Then  valido se o país selecionado fica salvo no campo

    Scenario: Validar Seleção de Skills
        Given que acesso o site Automation Demo
        When  seleciono a skill Java
        Then  valido se a skill fica salva no campo
