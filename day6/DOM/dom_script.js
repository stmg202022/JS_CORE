document.addEventListener("DOMContentLoaded", function () {
  const dom_intro = document.getElementById("dom_intro");
  const showHide = document.getElementById("showHide");
  const forms = document.getElementsByClassName("loginForms")[0];
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  showHide.addEventListener("click", function (e) {
    if (dom_intro.className.includes("show")) {
      //   alert("hide me");
      dom_intro.className = "hide";
    } else {
      dom_intro.className = "show";
    }
  });

  //=========================== //forms Dom
  let emailVal;
  email.addEventListener("change", function () {
    // console.log("email:", email.value);
    emailVal = email.value;
  });

  let passwordVal;
  password.addEventListener("change", function () {
    // console.log("password:", password.value);
    passwordVal = password.value;
  });

  let data = {};
  forms.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form submmited");

    data.email = emailVal;
    data.password = passwordVal;
    console.log("user data are: ", data);
  });
});
