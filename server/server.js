if(Meteor.isServer) {
  Meteor.publish('purchasesByUserId', function(){
    return Purchases.find({'userId':this.userId});
  });
     
  Meteor.publish('summary', function(){
    return Summary.find();
  });
     
  Meteor.publish('supermarkets', function(){
    return Supermarkets.find();
  });
  
  Meteor.startup(function () {
    if (Supermarkets.find().count() === 0) {
      Supermarkets.insert({name: "ASDA"});
      Supermarkets.insert({name: "Tesco"});
      Supermarkets.insert({name: "Morrisons"});
      Supermarkets.insert({name: "Sainsburys"});
    };
    
    if(Summary.find().count() === 0) {
      //Simulate regular aggregation process on server
      Summary.insert({
        "Store":"ASDA", 
        "High":1.53, 
        "Low":0.75, 
        "Mean":1.05, 
        "Std":0.3
      });
           
      Summary.insert({
         "Store":"Tesco", 
         "High":1.46, 
         "Low":0.93, 
         "Mean":1.09, 
         "Std":0.4
       });
            
       Summary.insert({
          "Store":"Morrisons", 
          "High":1.68, 
          "Low":0.97, 
          "Mean":1.11, 
          "Std":0.35
        });
             
        Summary.insert({
           "Store":"Sainsbury's", 
           "High":1.51, 
           "Low":0.69, 
           "Mean":1.02, 
           "Std":0.27
         });
     }
  });
}