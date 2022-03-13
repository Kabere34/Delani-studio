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
  $(".hover-cnt1").mouseover(function () {
    $(".disp1").show(1200);
    $(".hover-cnt1").mouseleave(function () {
      $(".disp1").hide(1200);
    });
  });
});
$(document).ready(function () {
  $(".hover-cnt2").mouseover(function () {
    $(".disp2").show(1200);
    $(".hover-cnt2").mouseleave(function () {
      $(".disp2").hide(1200);
    });
  });
});

$(document).ready(function () {
  $(".hover-cnt3").mouseover(function () {
    $(".disp3").show(1200);
    $(".hover-cnt3").mouseleave(function () {
      $(".disp3").hide(1200);
    });
  });
});
$(document).ready(function () {
  $(".hover-cnt4").mouseover(function () {
    $(".disp4").show(1200);
    $(".hover-cnt4").mouseleave(function () {
      $(".disp4").hide(1200);
    });
  });
});
$(document).ready(function () {
  $(".hover-cnt5").mouseover(function () {
    $(".disp5").show(1200);
    $(".hover-cnt5").mouseleave(function () {
      $(".disp5").hide(1200);
    });
  });
});
$(document).ready(function () {
  $(".hover-cnt6").mouseover(function () {
    $(".disp6").show(1200);
    $(".hover-cnt6").mouseleave(function () {
      $(".disp6").hide(1200);
    });
  });
});
$(document).ready(function () {
  $(".hover-cnt7").mouseover(function () {
    $(".disp7").show(1200);
    $(".hover-cnt7").mouseleave(function () {
      $(".disp7").hide(1200);
    });
  });
});
$(document).ready(function () {
  $(".hover-cnt8").mouseover(function () {
    $(".disp8").show(1200);
    $(".hover-cnt8").mouseleave(function () {
      $(".disp8").hide(1200);
    });
  });
});
$(document).ready(function () {
  $("form").submit(function () {
    alert("Submitted");
  });
});

function submitForm() {
  let userName = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let input = document.getElementById("message").value;

  if (userName !== "" && (email !== "") & (input !== "")) {
    alert(
      "Hello" +
        userName +
        ", Thank you for conatcting us. We will get back to you soon."
    );
    var userName = "";
    var email = "";
    var input = "";
  } else {
    alert("Please make sure all fields have correct inputs.");

    reset();
  }
}
