        // Write your JavaScript code here!
        function myExit(){
          document.getElementById("exit").innerHTML =`Good bye !`;
      }
     
      function myCheckNumber() {
        // Get the value of the input field with id="numb"
        let x = document.getElementById("checkNum").value;
        // If x is Not a Number or less than one or greater than 10
        let text;
        if (isNaN(x) || x < 1 || x > 10) {
          text = "Input not valid";
        } else {
          text = "Input OK";
        }
        document.getElementById("demo").innerHTML =`${text } 
         &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
      }
      

      let shopItems = ['orangeJuice','Spinach','tomatoSauce'];
      let myList = []; let itemArray = []; let numberArray = [];
      let honeyDo=[];let noteArray=[];
        function eachItemCheck(strItem){
                   let y =document.getElementById("shopItem");//input.question(`Enter a number for quantity of  ${strItem}: `);
                   let text;
                  if (isNaN(y) || y < 0 || y > 10) { text = " Input not valid";           
                  } else { text = " Input OK";
                    itemArray.push(strItem);
                    numberArray.push(y);
                    let note = document.getElementById("note");//input.question('Enter additional notes: ');
                          console.log(" ");
                    noteArray.push(note);
                    }
        }
      function itemDoneObj(item,itemNum){
          this.item = item;
          this.itemNum = itemNum;
      }
      itemDoneObj.prototype.getItem = function(){ return this.item};
      itemDoneObj.prototype.getItemNum= function(){return this.getItemNum};
     // function itemCheckNumber() {
       function startList(){
          for (let i=0;i<shopItems.length; i++){
            document.getElementById("currentItem") =` Enter quantity of ${shopItems[i]}`;
            eachItemCheck(shopItems[i]);
            let itemObj = new itemDoneObj(itemArray[i],numberArray[i]);
            itemObj["note"] = 'Additional info';
            itemObj.note = noteArray[i];
            myList.push(itemObj);
            honeyDo.push(Number(itemObj.itemNum)); 
            honeyDo.push(itemObj.item);
               }   return myList;
      }//console.log("now calling the function itemCheckNumber");
      document.getElementById("honeyDoList").innerHTML = (itemCheckNumber());
      //console.log('honeyDo');console.log(honeyDo);

function itemCheckNumber() {
          // Get the value of the input field with id="milkItem"
          let x = document.getElementById("shopItem").value;
          // If x is Not a Number or less than one or greater than 10
          let text;
          if (isNaN(x) || x < 1 || x > 10) {
            text = "item Input not valid";
          } else {
            text = "item Input OK";
          }
          document.getElementById("item").innerHTML =`${text } 
           &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
        }

//for(let i=0; i<shopItems.length; i++){
  // shopItems[i] <input id="checkItem" >
  //  <button type="button" onclick="itemCheckNumber">Submit</button>
  //   <p id="milk"></p> 
  //  }//<!--end of for shopItems-->
  // function milkCheckNumber() {
  //     for(let i=0;i<shopItems.length;i++){
  //     // Get the value of the input field with id="numb"
  //     let x = document.getElementById("milkItem").value;
  //     // If x is Not a Number or less than one or greater than 10
  //     let text;
  //     if (isNaN(x) || x < 1 || x > 10) {
  //       text = "Input not valid";
  //     } else {
  //       text = "Input OK";
  //     }
  //     document.getElementById("milk").innerHTML =`${text } 
  //      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
  // }//end of for shopItem
  //  }

// function myCheckItem() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("checkItem").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML =`${text } 
//      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
//   }


window.addEventListener("load", function() {
  window.alert("All fields are required");
  event.preventDefault();
 
  // let listedPlanets;
  // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse;
  // listedPlanetsResponse.then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  // }).then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  //     window.alert("All fields are required");
  //     event.preventDefault();
  // })
  

});
