(function() {
  var hasClass = function(element, className) {
     if (element.classList) {
         return element.classList.contains(className);
     }
     
     return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  };

  var toggleClass = function(element, className) {
     var currentName = element.className;
     if (hasClass(element, className)) {
         element.className = currentName.replace(className, "").replace(" " + className, "");
         return false;
     } else {
         element.className = currentName + " " + className;
         return true;
     }
  };

  var _get_elements = function(element) {
    var elements = element.getElementsByClassName("row");
    var container = elements[0];
    elements = container.getElementsByTagName("ul");
    var child = elements[0];
    return [ container, child ];
  };

  var set_height = function(element) {
    var elements = _get_elements(element);
    console.log(e, elements);

    elements[0].style.height = elements[1].clientHeight + "px";
  };

  var clear_height = function(element) {
     var elements = _get_elements(element);
     elements[0].style.height = 0;
  }

  var toggle_section = function(evt) {
     var e = evt.target;
     
     if (toggleClass(e, "visible")) {
         set_height(e);
     } else {
         clear_height(e);
     }
     evt.stopPropagation();
  };

  var elements = document.getElementsByClassName("section");
  console.log(elements);
  for(var i=0; i < elements.length; i++) {
    var e = elements[i];
    e.addEventListener("mouseenter", toggle_section, false);
    e.addEventListener("mouseleave", toggle_section, false);
  };
})();
