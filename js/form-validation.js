$(function () {
  let tbody = document.querySelector("tbody");
  let data = localStorage.getItem("user_data_list");
  let userDataList = data === null ? [] : JSON.parse(data);

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

  $(".form-elements").validate({
    rules: {
      fullName: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      },
      confirmPassword: {
        equalTo: "#password",
      },
      checkBox: {
        required: true,
      },
    },
    messages: {
      fullName: {
        required: "Please Specify Your Name",
        minlength: "Your name must be atleast more than 2 words",
      },
      email: {
        required: "Please Enter Your Email ID",
        email: "Your email address must be in the format of name@domain.com",
      },
      password: {
        required: "Please Create your password",
      },
      confirmPassword: {
        equalTo: "Please Enter the Same Value Again",
      },
      checkBox: {
        required: "Please check the check box",
      },
    },
    errorPlacement: function (error, input) {
      let _name = $(input).prop("name");
      if (_name === "checkBox") {
        error.insertAfter(".set-error");
      } else {
        error.insertAfter($(input));
      }
    },
  });

  $(".form-elements").on("submit", function (event) {
    event.preventDefault();
    if ($("#tc").is(":checked")) {
      $("#tc").attr("value", "Accepted");
    } else {
      $("#tc").attr("value", "Not Accepted");
    }
    let isValid = $(".form-elements").valid();
    if (isValid === false) {
      return false;
    }
    let userData = $(".form-elements").serializeArray();
    let userObj = {};
    userData.forEach((user) => {
      userObj[user.name] = user.value;
    });
    userDataList.push(userObj);
    localStorage.setItem("user_data_list", JSON.stringify(userDataList));
    printList(userDataList);
    $(".form-elements").trigger("reset");
    console.log(userDataList);
  });

  function printList(userDataList) {
    let userlist = userDataList.map((user, index) => {
      return `<tr>
      <td class="td">${index + 1}</td>
    <td class="td">${user.fullName}</td>
    <td class="td">${user.email}</td>
    <td class="td">${user.password}</td>
  </tr>`;
    });
    tbody.innerHTML = userlist.join("");
    console.log(userlist);
  }
  printList(userDataList);
});
