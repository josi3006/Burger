
// Event listener

$(function () {
    $(".change-devoured").on("click", function (event) {
        event.preventDefault();


        var id = $(this).data("id");
        var state = $(this).is("devoured");  

        console.log('state is: ' + state);

        if (state === false) {
            var newState = true;
        } else {
            var newState = false;
        };

        console.log('newState is: ' + newState);


        var newDevouredState = {
            devoured: newState,
        };

        console.log('nDS is: ', newDevouredState);
        // Changes the 'devoured' state

        console.log('id is: ', id);
        console.log('route is: /api/burgers/' + id);
        // console.log(/api/burgers/id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            // devoured: newState
            data: newDevouredState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
        };


        // Creates a new burger

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