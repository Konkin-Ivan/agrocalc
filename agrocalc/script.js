// Code goes here
    /*
    * let og = document.myForm.cultura('og').value;
    * let tomat = document.myForm.cultura('tomat').value;
    */
    let selectedElement = document.getElementById("selectCultura");
    selectedElement.options[0] = new Option("Томаты", "tomat");
    selectedElement.options[1] = new Option("Огурцы", "og");

      if (selectedElement.selectedIndex === 0){
        //alert(selectedElement.options[objSel.selectedIndex].value);
        alert(1+1);
      } else if (selectedElement.selectedIndex === 1) {
          //alert(selectedElement.options[objSel.selectedIndex].value);
          alert(1+2);
        }
