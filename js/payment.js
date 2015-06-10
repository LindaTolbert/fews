
(function(window) {
    var responseElement = document.getElementById('paymentResponse');
    var paymentElement = document.getElementById('makePayment');
    
    var handler = StripeCheckout.configure({
        key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
        //image: '/img/documentation/checkout/marketplace.png',
        token: function(token) {
            responseElement.innerHTML = "Thanks for your payment " + token.email + "!";
            paymentElement.style.display = "none";
        }
    });
    
    document.getElementById("paymentButton").onclick = function(e) {
        handler.open({
          name: "Sally's Lemonade Pickup",
          description: '2 Bottles of Lemonades',
          amount: 2000
        });
        e.preventDefault();
    }
    
    window.onpopstate = function() {
        handler.close();
    };
})(window);
