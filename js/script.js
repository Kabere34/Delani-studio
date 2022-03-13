$(document).ready(function () {
  $("#design").click(function () {
    $("#design").hide(0, function () {
      $(".design-text").show(0);
    });
  });
});
$(document).ready(function () {
  $(".design-text").click(function () {
    $(".design-text").hide(0, function () {
      $("#design").show(0);
    });
  });
});
$(document).ready(function () {
  $("#development").click(function () {
    $("#development").hide(0, function () {
      $(".development-text").show(0);
    });
  });
});
$(document).ready(function () {
  $(".development-text").click(function () {
    $(".development-text").hide(0, function () {
      $("#development").show(0);
    });
  });
});
$(document).ready(function () {
  $("#product").click(function () {
    $("#product").hide(0, function () {
      $(".product-text").show(0);
    });
  });
});
$(document).ready(function () {
  $(".product-text").click(function () {
    $(".product-text").hide(0, function () {
      $("#product").show(0);
    });
  });
});

$(document).ready(function () {
  $(".hover-cnt").mouseover(function () {
    $(".disp1").show(1200);
    $(".hover-cnt").mouseleave(function () {
      $(".disp1").hide(1200);
    });
  });
});
