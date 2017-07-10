// Code goes here
    /*
    * let og = document.myForm.cultura('og').value;
    * let tomat = document.myForm.cultura('tomat').value;

    let selectedElement = document.getElementById("selectCultura");
    selectedElement.options[0] = new Option("Томаты", "tomat");
    selectedElement.options[1] = new Option("Огурцы", "og");

      if (selectedElement.selectedIndex === 0){
        //alert(selectedElement.options[objSel.selectedIndex].value);
        alert(1+1);
      } else if (selectedElement.selectedIndex === 1) {
          //alert(selectedElement.options[objSel.selectedIndex].value);
          alert(1+2);
        }*/
// Code goes here
function getSelectValue() {
  let selectValue = document.getElementById('selectCultura').value;
console.log(selectValue);
}
function culturaTomat() {
  let Li = 1000;
  let N = Li*180;
  let P = Li*80;
  let K = Li*280;
  let Ca = Li*360;
  let Mg = Li*60;
  let resultTomat = "Томаты. Количество веществ для " + Li + " литров воды: " + "N - " + N + "мг., " + "P - " + P + "мг., " + "K - " + K + "мг., " + "Ca - " + Ca + "мг., " + "Mg - " + Mg + "мг.";
  return resultTomat;
}
console.log(culturaTomat());
