
            // var name="Rakesh";
            // var age=23;
            // var message=name + " age is "+ age;
            // console.log(message);
        
            // var name="rakesh";
            // var age =25;
            // var dob="19-02-1998";
            // var motherName="Ramadevi";    
            // var family=" Hey "+ name+ " your age is "+ age+
            // " and you birth date is "+ dob+
            // " and your mothername is "+ motherName;
            // console.log(family)


// *****************************************************************
            // var accountBal=7000;
            // var laptopPurchase=9000;
            // var coupon=3000;

            // if(accountBal>=laptopPurchase)
            // {
            //     accountBal-=laptopPurchase;
            //    console.log("Order is placed successfully"+ " and avaiable bal is "+ accountBal);
             
            //  }
            //  else if(laptopPurchase-coupon<=accountBal){
            //     accountBal=accountBal-(laptopPurchase-coupon);
            //     console.log("laptop is purchase on the coupon "+  " and avaiable bal is "+ accountBal );

            //  }
            //  else{
            //     console.log("Transcation is declined due to insufficent bal");
            //  }

// *****************************************************************

    // function areavalues(length,width){
    //     return length*width;
    // }
    //       var array01=[]
    //       array01.push(areavalues(20,30));
    //       array01.push(areavalues(20,30));
    //       array01.push(areavalues(20,30));

          
    //       console.log(array01);

// *****************************************************************
    // var Bankbal=7000;
    // makeTransfer(400);
    // makeTransfer(500);
    // makeTransfer(6000);
    // makeTransfer(400);
    // function makeTransfer(transfer){
    //     if(Bankbal>transfer){
    //         Bankbal=Bankbal-transfer;
    //         console.log( transfer+ " amount transferred successfully");
    //         console.log("Avaible bal is "+ Bankbal);
    //     }
    //     else{
    //         console.log(transfer+ " amount is not transferred successfully");
    //     }
    // }

    // *****************************************************************
      
    // var personalDetailsOfRakesh=new Object();
    // personalDetailsOfRakesh.name="rakesh";
    // personalDetailsOfRakesh.address="Bangalore";
    // personalDetailsOfRakesh.phoneNo="9620369291";
    // personalDetailsOfRakesh.fatherName="Raju";
    // personalDetailsOfRakesh.motherName="Rama";

    // var creditDetailsOfRakesh=new Object();
    // creditDetailsOfRakesh.amount=2000;
    // creditDetailsOfRakesh.transfer=3000;
    // creditDetailsOfRakesh.bal=5000;

    // var loanDetailsofRakesh= new Object();
    // loanDetailsofRakesh.car="1,00,000";
    // loanDetailsofRakesh.home="2,50,000";
    // loanDetailsofRakesh.property="5,00,000";

    // var rakesh=[];
    // rakesh.push(personalDetailsOfRakesh);
    // rakesh.push(creditDetailsOfRakesh);
    // rakesh.push(loanDetailsofRakesh);
    
    // console.log(rakesh);

 // *****************************************************************
    var bankDetails=[];
    function personalDetails(name,address,phoneNo,Balance){
    this.name=name;
    this.address=address;
    this.phoneNo=phoneNo;
    this.Balance=Balance; 
     
    }
    bankDetails.push(new personalDetails("rakesh","bangalore","9620369291","25000"));
    bankDetails.push(new personalDetails("rashmi","bangalore","9620369291","25000"));
    console.log(bankDetails);



