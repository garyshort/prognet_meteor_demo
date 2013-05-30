if(Meteor.isClient) {
  Meteor.subscribe('purchasesByUserId');
  Meteor.subscribe('summary');
  Meteor.subscribe('supermarkets');
  
  Template.form.supermarkets = function () {
    return Supermarkets.find();
  };
  
  Template.form.purchases = function () {
    return Purchases.find();
  };
  
  Template.summary.summary = function () {
    return Summary.find();
  };
  
  Template.form.events({
    'click input.submit' : function () {
      saveFormData();
    }
  });
}

function saveFormData() {
  var doc = buildDoc();
  insertDoc(doc);
}

function buildDoc() {
  var supermarket = $('#supermarket').val();
  var numItems = $('#numItems').val();
  var totCost = $('#totCost').val();
  var postcode = $('#postcode').val();  
  var doc = {
    supermarket:supermarket,
    numItems:numItems,
    totCost:totCost,
    postcode:postcode,
    userId:Meteor.userId()
  };
  
  return doc;
}

function insertDoc(doc) {
  Purchases.insert(doc, function(error, result){
    if(error) {
      alert(error.message);
    } else {
      alert("Information saved.\nThanks for helping!");
      clearForm();
    }
  });
} 

function clearForm() {
  $('#supermarket').val('$("#supermarket option:first").val()');
  $('#numItems').val('');
  $('#totCost').val('');
  $('#postcode').val('');
}


