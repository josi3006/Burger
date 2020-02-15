
// Event listener

$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        console.log('newState in burgers.js is: ', newState);

        var newDevouredState = {
            devoured: newState
        };

        console.log('newDevouredState is: ', newDevouredState);
        // Changes the 'devoured' state

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured state to", newState);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
        };

        console.log('here is the new burger: ', newBurger)

        // Creates a new burger

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});