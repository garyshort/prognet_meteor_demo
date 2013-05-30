Supermarkets = new Meteor.Collection('supermarkets');
Purchases = new Meteor.Collection('purchases');
Summary = new Meteor.Collection('summary');
Purchases.allow(
  {
    insert:function(userId, doc) {
      return userId !== null;
    }
  }
);