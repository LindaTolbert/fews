(function(window) {
    
    angular
        .module('app', [])
        .controller('AppController', function($scope, $http) {
            
            var costPerBottle = 500;
            $scope.count = 1;
            
            var handler = StripeCheckout.configure({
                key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
                token: function(token) {
                    $scope.payment = token;
                }
            });

            $scope.cost = function() {
                return (costPerBottle * $scope.count) / 100;
            };
            
            $scope.openPayment = function(e) {
                handler.open({
                  name: "Sally's Lemonade Pickup",
                  description: '2 Bottles of Lemonades',
                  amount: costPerBottle * $scope.count
                });
            }
            
            $scope.subscribe = function() {
                $http.get("https://us6.api.mailchimp.com/2.0/lists/subscribe.json", {
                    "apikey": "97989931e54219349e9323efcec1b352-us6",
                    "id": "207133",
                    "email": {
                        "email": "deric@cremalab.com"
                    }
                })
            };
            
        });
    
})(window);
