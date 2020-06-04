// $(document).ready(function () {
//   $("buttonplaceholderpleasereplacethis").click(function () {
//     $("bodyisusedasanexample").removeclass("removed-class, alsothis");
//     $("h2isusedasanexample").addclass("iwanttoaddthis, andthis");
//   });
// });

// $(document).ready(function () {
//   $("#cat-hidden").click(function () {
//     $(".cat-showing").slideToggle();
//     $("#cat-hidden").slideToggle();
//   });
//   $("#testid2").click(function () {
//     $("#cat-hidden").slideToggle();
//     $(".cat-showing").slideToggle();
//   });
// });

$(document).ready(function () {
  $("button#catBtn").click(function () {
    $("#cat").slideToggle();
    document.getElementById("#giraffe").style.display = "none";
    document.getElementById("#flying-fox").style.display = "none";
    // $(".card-body").slideToggle();
  });
});

$(document).ready(function () {
  $("button#giraffeBtn").click(function () {
    $("#giraffe").slideToggle();
    // $(".card-body").slideToggle();
  });
});

$(document).ready(function () {
  $("button#flyFoxBtn").click(function () {
    $("#flying-fox").slideToggle();
    // $(".card-body").slideToggle();
  });
});

// THIS BUTTON HAS TAKEN ITS HOLD ON ME
