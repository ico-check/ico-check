$(document).ready(function() {
    $('.ui.dropdown').dropdown({
        action: function (text, value, element) {
            element.click()
        }
    });

    $('#table-header').sticky({
      onStick: function() {
        const height = $('#table-header').height();
        $('#ico-table').find('> :nth-child(2)').css("margin-top", `${height}px`);
      },
      onUnstick: function () {
        $('#ico-table').find('> :nth-child(2)').css("margin-top", "0px");
      }
    });
});
