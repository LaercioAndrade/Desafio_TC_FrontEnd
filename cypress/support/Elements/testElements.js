class testElements{

FirstName       = () => {return '.form-group:nth-child(1)'}
LastName        = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}
Address         = () => {return '.col-md-8 > .form-control'}
Email           = () => {return '#eid'}
Phone           = () => {return ':nth-child(4) > .col-md-4 > .form-control'}
GenderMale      = () => {return ':nth-child(1) > .ng-pristine'}
Hobbies1        = () => {return '#checkbox1'}
Hobbies2        = () => {return '#checkbox2'}
Hobbies3        = () => {return '#checkbox3'}
ClickLanguage   = () => {return '#msdd'}
SelectLanguage  = () => {return ':nth-child(29) > .ui-corner-all'}
Skills          = () => {return '#Skills'}
FecharMenu      = () => {return '#basicBootstrapForm'}
Country         = () => {return '#countries'}
ClickCountry    = () => {return '.select2-selection__arrow'}
SelectCountry   = () => {return '#select2-country-results > :nth-child(11)'}
Year            = () => {return '#yearbox'}
Month           = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
Day             = () => {return '#daybox'}
Password        = () => {return '#firstpassword'}
ConfirmPassword = () => {return '#secondpassword'}
Buttonsubmit    = () => {return '#submitbtn'}

//CT02
Buttonrefresh   = () => {return '#Button'} 
}
export default testElements;