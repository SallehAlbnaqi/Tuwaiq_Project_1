const mainContainer = $("#mainContainer");
const inputImg = $("#img");
const tPrice = $("#price");
const theSize = $("#Size");
// an array of students with some data
const onlineStore = JSON.parse(localStorage.getItem("clothis")) || [
  { urlImge: "https://img.3ain.net/Slider1/491201708260536283628.jpg", thePrice: 50, theSize: "mid" },
  { urlImge: "", thePrice: 60, theSize: "max" },
  { urlImge: "", thePrice: 35, theSize: "larg" },
  { urlImge: "https://upload.3dlat.com/uploads/3dlat.com_139759420113.jpg", thePrice: 25, theSize: "small" },
];
console.log(onlineStore,"onlineStore")
function renderArr(array) {
    for (let i = 0; i < array.length; i++) {
      const div = $(`<div class="secondryContainer">
       <img src ="${array[i].urlImge}">
          <h1>${array[i].thePrice}</h1>
          <h1>${array[i].theSize}</h1>
          <button id="butn" onclick="remove(${i})">delete</button>

      </div>`);
      mainContainer.append(div);
    }
    localStorage.setItem("clothis",JSON.stringify(onlineStore))
  }
  renderArr(onlineStore);

  function addTisshrt(){
  const newTishrt = {
    urlImge : inputImg.val(),
    thePrice: tPrice.val(),
    theSize: theSize.val(),
  };
  onlineStore.push(newTishrt);
  renderArr([newTishrt]);

}

function hideHandler() {
    mainContainer.hide();

}
function showHandler() {
    // we use .show() to show a html element
    mainContainer.show();
}
    // we use .hide() to hide a html element
    // mainContainer.hide();

function remove(i) {
    onlineStore.splice(i,1)
    console.log(i)
    mainContainer.html("");
    renderArr(onlineStore);

}