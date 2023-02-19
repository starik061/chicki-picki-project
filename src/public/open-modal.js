$(document).ready(function() {
  const $openModalBtns = $(".open-modal-btn");
  const $modals = $(".modal");
  const $closeBtns = $(".close");

  $openModalBtns.on("click", function() {
    const modalTarget = $(this).data("modal-target");
    const $modal = $("#" + modalTarget);
    const $modalContent = $(".modal-content", $modal);

    $modal.show();
    $modalContent.removeClass("hide").addClass("show");
  });

  $closeBtns.on("click", function() {
    const modalTarget = $(this).data("modal-target");
    const $modal = $("#" + modalTarget);
    const $modalContent = $(".modal-content", $modal);

    $modalContent.removeClass("show").addClass("hide");
    setTimeout(function() {
      $modal.hide();
    }, 400);
  });

  $modals.on("click", function(event) {
    if (event.target === this) {
      const $modalContent = $(".modal-content", $(this));

      $modalContent.removeClass("show").addClass("hide");
      setTimeout(function() {
        $(this).hide();
      }.bind(this), 400);
    }
  });
});