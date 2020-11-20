function Element(tag, top, bottom, left, right){
  this.id = tag;
  this.top = top;
  this.bottom = bottom;
  this.left = left;
  this.right = right;
}

let activeElement;
var allListedElements = [];
var allDivisionElements = [];
var currentScrollY = 0;

gatherElements()

function compOnClick(element){
  var splitElement = element.split("-grad")
  element = splitElement[0]
  var clickedElement = document.getElementById(element);
  console.log(clickedElement);
  currentScrollY = window.scrollY;
  console.log("currentScrollY " + currentScrollY);

  if(activeElement !=  undefined){
    //setTimeout(collapseDivsion, 500);
    collapseDivsion();
    activeElement = undefined;
    console.log(activeElement);
  }

  if(clickedElement.id != "jrsmith" || clickedElement.id != "acorn-engineering"){
    var clickedIndex = allListedElements.indexOf(clickedElement.id)
    if (clickedIndex % 2 == 1){
      var priorElement = document.getElementById(allListedElements[clickedIndex - 1]);
      priorElement.classList.remove("col-md-6")
    }
    clickedElement.classList.remove("col-md-6")
  }

  if (activeElement == undefined){
    console.log("new element clicked");
    document.getElementById(clickedElement.id).removeAttribute("onclick")
    clickedElement.classList.add("division-clicked");
    var clickedContentId = clickedElement.id + "-content"
    var clickedGradient  = document.getElementById(clickedElement.id + "-gradient");
    clickedGradient.classList.add("division-title-gradient-clicked");
    var clickedBackButton = document.getElementById(clickedElement.id + "-back-button");
    console.log(clickedBackButton);
    clickedBackButton.classList.remove("back-button-hidden");
    var divisionTitle = document.getElementById(clickedElement.id + "-title-row");
    divisionTitle.classList.remove("division-title-visible");
    divisionTitle.classList.add("division-title-hidden");
    document.getElementById(clickedContentId).classList.remove("division-content-hidden")
    console.log(document.getElementById(clickedContentId));
    var testEl =  allDivisionElements.forEach(item => {
      if (clickedElement == item.id){
        activeElement = item;
      }
    });
  //  console.log(activeElement);
    //activeElement = allDivisionElements[allDivisionElements.indexOf(clickedElement.id)]
  }
}



function  gatherElements(){
    allMajorElements = document.getElementsByClassName('major-division');
    allMinorElements = document.getElementsByClassName('minor-division');
    Array.prototype.forEach.call(allMajorElements, function(element){
      var divElement = new Element(element, element.getBoundingClientRect().top,
                                  element.getBoundingClientRect().bottom, element.getBoundingClientRect().left,
                                  element.getBoundingClientRect().right)
     allDivisionElements.push(divElement);
    });

    Array.prototype.forEach.call(allMinorElements, function(element) {
        allListedElements.push(element.id)

        var divElement = new Element(element, element.getBoundingClientRect().top,
                                    element.getBoundingClientRect().bottom, element.getBoundingClientRect().left,
                                    element.getBoundingClientRect().right)
        allDivisionElements.push(divElement);
    });
  }





function collapseDivsion(){
  if (activeElement.id.id != "jrsmith" && activeElement.id.id != "acorn-engineering"){
    console.log(activeElement.id.id);
    console.log("minor division");
    activeElement.id.classList.add("col-md-6")

    var clickedIndex = allListedElements.indexOf(activeElement.id.id)
    if (clickedIndex % 2 == 1){
      var priorElement = document.getElementById(allListedElements[clickedIndex - 1]);
      priorElement.classList.add("col-md-6")
    }
  }
  var activeElementId = activeElement.id.id
  document.getElementById(activeElement.id.id).classList.remove("division-clicked")
  var activeGradient  = document.getElementById(activeElement.id.id + "-gradient");
  activeGradient.classList.remove("division-title-gradient-clicked");

  var activeTitle = document.getElementById(activeElement.id.id + "-title-row")
  activeTitle.classList.add("division-title-visible");
  activeTitle.classList.remove("division-title-hidden");

  var activeContentId = activeElement.id.id + "-content"
  // document.getElementById(activeContentId).classList.add("division-content-hidden")

  console.log('collapseDivsion called');
  activeElement.id.classList.remove("division-clicked");
  document.getElementById(activeContentId).classList.add("division-content-hidden")
  document.getElementById(activeElement.id.id + "-back-button").classList.add("back-button-hidden")
  activeElement = undefined;
  document.getElementById(activeElementId+"-gradient").setAttribute("onclick", "compOnClick(this.id)")

}


window.addEventListener("scroll", function(){
console.log("scroll event");
//   if(activeElement != undefined){
//
//
// //basically when a link is clicked it causes the page to scroll. The compClick funciton deosn't have time to catch up so the wrong division is collapsed
//
//     if (window.scrollY > currentScrollY + 1300){
//       console.log("down");
//       console.log(window.scrollY);
//       collapseDivsion();
//     }
//
//     if (window.scrollY < currentScrollY - 1400){
//       console.log("up");
//       console.log(window.scrollY);
//       collapseDivsion();
//     }
//
//
//
// }
})


//classList.add(col-xl-6)
