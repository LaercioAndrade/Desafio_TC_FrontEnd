/* global Given, Then, When*/

import testPage from '../PageObjects/testPage'
const Cadastro = new testPage

//CT01
Given("que acesso o site Automation Demo", () => {
    Cadastro.abrirUrl();
}),

And("preencho todos os campos de Cadastro", () => {
    Cadastro.preenchercampoFirstName();
    Cadastro.preenchercampoLastName();
    Cadastro.preenchercampoAddress();
    Cadastro.preenchercampoEmail();
    Cadastro.preenchercampoPhone();
    Cadastro.selecionarGenderMale();
    Cadastro.selecionarHobbies();
    Cadastro.selecionarLanguage();
    Cadastro.selecionarSkills();
    Cadastro.informarCountry();
    Cadastro.selecionarCountry();
    Cadastro.DateofBirth();
    Cadastro.Password();
    Cadastro.ConfirmarPassword();
}),
        
When("clico no botão submit", () => {
    Cadastro.ClicarBotaoSubmit();

}),

Then("valido se o cadastro foi realizado com sucesso", () => {
    cy.screenshot();
}),

//CT02
And("preencho alguns dados", () => {
    Cadastro.preenchercampoFirstName();
    Cadastro.preenchercampoLastName();
    Cadastro.preenchercampoAddress();
}),

When("clico no botão Refresh", () => { 
    Cadastro.ClicarBotaoRefresh();
}),

Then("valido se os dados nos campos preenchidos são apagados", () => {
    cy.screenshot();
}),

//CT03
When("seleciono um país", () =>   {
    Cadastro.informarCountry();
}),

Then("valido se o país selecionado fica salvo no campo", () => {
    Cadastro.ValidarCountry();
}),

//CT04
When("seleciono a skill Java", () => {
    Cadastro.selecionarSkills();
}),

Then("valido se a skill fica salva no campo", () => {
    Cadastro.validarSkill();
})