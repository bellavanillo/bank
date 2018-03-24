function Account(name, balance) {
  this.name = name;
  this.balance = balance;
};

Account.prototype.Adjust = function(){
  return this.balance += (this.newDeposit) - (this.newWithdrawl);
};

function resetFields() {
  $("#Deposit").val("");
  $("#withdrawl").val("");
};

$(document).ready(function(){
  $("form#money").submit(function(event){
    event.preventDefault();
    debugger;
    var inputtedFirstName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initialDeposit").val());
    initialDeposit = initialDeposit || 0;
    var newAccount = new Account (inputtedFirstName, inputtedInitialDeposit);
    $("#new-client").hide();
    $("#manage").show()
    //needs change
    //alert(newAccount);
    $("form#transaction").submit(function(){
      event.preventDefault();
      var deposit = $("input#Deposit").val();
      var withdrawl = $("input#withdrawl").val();
      deposit = deposit || 0;
      withdrawl = withdrawl || 0;
      newAccount.newDeposit = deposit;
      newAccount.newWithdrawl = withdrawl;

      newAccount.Adjust();

      $("#account-balance").text(newAccount.balance);

      resetFields();
    });

      $("#account-name").text(newAccount.name);
      $("#account-balance").text(newAccount.balance);

    });
  });
