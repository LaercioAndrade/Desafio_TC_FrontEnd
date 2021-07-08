/// <reference types ="cypress"/>

import testElements from "../Elements/testElements";
const Elements = new testElements
const NavegadorURL = Cypress.config("baseUrl")


class TestPage{

abrirUrl(){
    cy.visit(NavegadorURL)
}

preenchercampoFirstName(){
    cy.get(Elements.FirstName()).type("Laércio");
}

preenchercampoLastName(){
    cy.get(Elements.LastName()).type("Andrade");
}

preenchercampoAddress(){
    cy.get(Elements.Address()).type("Alameda do Teste n500 - São Paulo - Brasil");
}

preenchercampoEmail(){
    cy.get(Elements.Email()).type("laercioqa@teste.com.br");
}

preenchercampoPhone(){
    cy.get(Elements.Phone()).type("9989542601");
}

selecionarGenderMale(){
    cy.get(Elements.GenderMale()).click();
}

selecionarHobbies(){
    cy.get(Elements.Hobbies1()).click();
    cy.get(Elements.Hobbies2()).click();
    cy.get(Elements.Hobbies3()).click();
}

selecionarLanguage(){
    cy.get(Elements.ClickLanguage()).click();
    cy.get(Elements.SelectLanguage()).click();
    cy.get(Elements.FecharMenu()).click();

}

selecionarSkills(){
    cy.get(Elements.Skills()).select('Java');
}

informarCountry(){
    cy.get(Elements.Country()).select('Brazil');
}

selecionarCountry(){
    cy.get(Elements.ClickCountry()).click();
    cy.get(Elements.SelectCountry()).click();
}

DateofBirth(){
    cy.get(Elements.Year()).select('1997');
    cy.get(Elements.Month()).select('June');
    cy.get(Elements.Day()).select('21');
}

Password(){
    cy.get(Elements.Password()).type('Teste@10');
}

ConfirmarPassword(){
    cy.get(Elements.ConfirmPassword()).type('Teste@10');
}

ClicarBotaoSubmit(){
    cy.get(Elements.Buttonsubmit()).click();
}

ClicarBotaoRefresh(){
    cy.get(Elements.Buttonrefresh()).click();
}

ValidarCountry(){
    cy.get(Elements.Country()).contains("Brasil");
}

validarSkill(){
    cy.get(Elements.Skills()).contains("Java");
    cy.screenshot();
}


}
export default TestPage;