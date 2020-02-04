$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };


    if (newDevouredState.devoured) {

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed eat to", newDevoured);
    
        location.reload();
      }
    );
  }

  else {
    $.ajax("/api/burgersTwo/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed eat to", newDevoured);
    
        location.reload();
      }
    );
  }
});

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };

    $.ajax("/api/burgers/bulk", {
      type: "POST",
      data: newBurger,
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("error01");
        console.log("Failed to Save DB - Saving Locally");
        saveRecord(newBurger);
    }})
      .then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
