 $(document).ready(function() {
  const $openModalBtns = $(".open-modal-btn");
   const $modals = $(".modal");
   const $closeBtns = $(".close");
   const $body = $("body");

   $openModalBtns.on("click", function() {
     const modalTarget = $(this).data("modal-target");
     const $modal = $("#" + modalTarget);
     const $modalContent = $(".modal-content", $modal);

     $modal.css("display", "block");
     $body.css("overflow", "hidden");
     $modalContent.removeClass("hide").addClass("show");
   });

   $closeBtns.on("click", function() {
    const modalTarget = $(this).data("modal-target");
     const $modal = $("#" + modalTarget);
     const $modalContent = $(".modal-content", $modal);
     $body.css("overflow", "auto");

     $modalContent.removeClass("show").addClass("hide");
     setTimeout(function() {
       $modal.css("display", "none");
     }, 400);
   });

   $modals.on("click", function(event) {
     if (event.target === this) {
       const $modalContent = $(".modal-content", $(this));

      $modalContent.removeClass("show").addClass("hide");
       setTimeout(function() {
         $(this).css("display", "none");
       }.bind(this), 400);
     }
   });
 });


