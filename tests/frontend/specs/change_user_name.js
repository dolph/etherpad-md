describe("change username value", function(){
  //create a new pad before each test run
  beforeEach(function(cb){
    helper.newPad(cb);
    this.timeout(60000);
  });

  it("Remembers the user name after a refresh", function(done) {
    this.timeout(60000);
    var chrome$ = helper.padChrome$;

    //click on the settings button to make settings visible
    var $userButton = chrome$(".buttonicon-showusers");
    $userButton.click();
    
    var $usernameInput = chrome$("#myusernameedit");
    $usernameInput.click();

    $usernameInput.val('John McLear');
    $usernameInput.blur();

    setTimeout(function(){ //give it a second to save the username on the server side
      helper.newPad({ // get a new pad, but don't clear the cookies
        clearCookies: false
        , cb: function(){
          var chrome$ = helper.padChrome$;

          //click on the settings button to make settings visible
          var $userButton = chrome$(".buttonicon-showusers");
          $userButton.click();

          var $usernameInput = chrome$("#myusernameedit");
          expect($usernameInput.val()).to.be('John McLear')
          done();
        }
      });
    }, 1000);
  });
});
