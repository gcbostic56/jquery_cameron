$(document).ready(function() {
    $("#submit").on("click", function() {
        let nameInput = $("#name");
        let emailInput = $("#email");
        let phoneInput = $("#phone");
        let messageInput = $("#message");
        console.log(nameInput, emailInput, phoneInput, messageInput);
        
        const required = [nameInput, emailInput, phoneInput]
        
        for (let i = 0; i < required.length; i++) { 
            if (required[i].val() === "") {
               $("p").html("Please Fill Out Required Fields")
               $("p").addClass('warning');
               required[i].prev().addClass('warning')
            }
            required[i].on("input", function () {
                if (!required[i].val() == "") {
                    required[i].prev().removeClass('warning');
                }
            })
            }
        if (!$("label").hasClass('warning')) {
                $("form").remove();
                $("h2").html("Thanks for your feedback!")
          }
        }
    )})

    