(function() {

  
  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/
  var leadInfoBtn = document.querySelectorAll('.card_actions');
  leadInfoBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      this.parentNode.closest('.lead').classList.toggle('show');
      if (this.classList.contains('ico-minus')) {
        this.classList.remove('ico-minus');
        this.classList.add('ico-plus');
      } else {
        this.classList.remove('ico-plus');
        this.classList.add('ico-minus');
      }
    });
  });

})();