$(document).ready(function () {
    function fetchData() {
        $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd", function (data) {
            console.log(data);

            const btcPrice = data.bitcoin.usd;
            $('#btc-price').html(`$${btcPrice}`);

            if (btcPrice > 50) {
                $('#btc-price-message').html('Bitcoin is doing well!');
            } else {
                $('#btc-price-message').html('Bitcoin is below $50.');
            }

            $('#eth-price').html(`$${data.ethereum.usd}`);
            $('#sol-price').html(`$${data.solana.usd}`);
        });
    }

    fetchData();

    $('#refreshButton').on('click', function () {
        fetchData();
    });
});
