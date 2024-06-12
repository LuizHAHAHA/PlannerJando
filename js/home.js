function menuFunction() {
    document.getElementById("meuMen").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menBtt')) {
      var dropdowns = document.getElementsByClassName("menCont");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}