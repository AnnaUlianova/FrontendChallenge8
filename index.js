$(".accordion").click(function() {
  $(this).toggleClass("active");
  $(this).children().last().toggleClass("mark");
  let panel = $(this.nextElementSibling);
  if (panel.css("display") === "block") {
    panel.css("display", "none");
  } else {
    panel.css("display", "block");
  }
})
