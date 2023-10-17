 //jquery-validation
 
 $(".form-elements").validate({
    rules: {
      fullname: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      email: {
        required: true,
        email: true,
      },
      subject:{
        required:true,
        minlength:3,
        maxlength:10,
      },
      number: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      comment: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
    },
    messages: {
      fullname: {
        required: "Please Specify Your Name",
        minlength: "at least 3 characters long",
        maxlength: "less than 30 characters long",
      },
      email: {
        required: "Please Enter Your Email ID",
        email: "Your email address must be in the format",
      },
      subject:{
        required:"enter the subject",
        minlength:"it should be min 3 char",
        maxlength:"it should be max 10 char",
      },
      number: {
        required: "Please enter your number",
        minlength: "Please enter 10 numbers",
        maxlength: "Please enter 10 numbers",
      },
      comment: {
        required: "Please enter comments",
        minlength: "at least 3 characters",
        maxlength: "less than 30 characters",
      },
    },
errorPlacement: function (error, element) {
    error.appendTo(element.closest('.input-container')).addClass("error-text");
},

  });
  

  $(".hamburger").on("click", function () {
    $(".m-menu").animate({
      right: "0%",
    });
  });
  $(".close-btn").on("click", function () {
    $(".m-menu").animate({
      right: "-55%",
    });
  });