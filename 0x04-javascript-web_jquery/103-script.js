$(document).ready(function () {
    function translateHello() {
        const langCode = $('#language_code').val().trim();
        if (langCode !== '') {
            const apiUrl = 'https://www.fourtonfish.com/hellosalut/?lang=' + langCode;
            $.get(apiUrl, function (data) {
                $('#hello').text(data.hello);
            });
        }
    }

    // When button is clicked
    $('#btn_translate').click(function () {
        translateHello();
    });

    // When Enter is pressed while focused on the input field
    $('#language_code').keypress(function (event) {
        if (event.which === 13) { // 13 is the Enter key
            translateHello();
        }
    });
});
