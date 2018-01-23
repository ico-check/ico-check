$(document).ready(function() {
    $('.ui.dropdown').dropdown({
        action: function (text, value, element) {
            element.click()
        }
    });
});
