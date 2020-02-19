
// Event listener

$(function () {
    $(".change-devoured").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var state = $(this).data("newstate");


        // Changes the 'devoured' state

        if (state === false) {
            var newState = 0;
        } else {
            var newState = 1;
        };

        console.log('newState is: ' + state);


        var newDevouredState = {
            devoured: newState,
        };

        // console.log('nDS is: ', newDevouredState);
        // console.log('id is: ', id);
        // console.log('route is: /api/burgers/' + id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                location.reload();
            }
        );
    });




    // This code creates a new burger

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

});