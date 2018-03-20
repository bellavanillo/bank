function Contact(Name, Initial) {
  this.firstName = Name;
  this.initialDeposit = Initial;
  this.totalbalance = [];
}
function Deposit(depositamount, withdrawal) {
  this.depositamount = Deposit;
  this.initialDeposit = Withdraw;
}











$(document).ready(function(){
  $("form#money").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#name").val();
    var inputtedInitial = parseInt($("input#initial").val());
    var newContact = new Contact (inputtedFirstName, inputtedInitial);
    //needs change
    $(".result").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress)
    });
