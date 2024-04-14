var prouductNameInput=document.getElementById('prouductName')
var prouductCategoryInput=document.getElementById('prouductCategory')
var prouductPriceInput=document.getElementById('prouductPrice')
var prouductDescriptionInput=document.getElementById('Description')



var prouductContainer = []
var currentindex=0
var addProuductBtn=document.getElementById("addProuductBtn")
var updateProuductBtn=document.getElementById("updateProuductBtn")




if(localStorage.getItem('prouducts')!=null){
    prouductContainer=JSON.parse(localStorage.getItem('prouducts'))
}



function addprouduct(){

var prouductObj= {
Name:prouductNameInput.value,
Category:prouductCategoryInput.value,
Price:prouductPriceInput.value,
Description:prouductDescriptionInput.value

}
prouductContainer.push(prouductObj)
localStorage.setItem('prouducts',JSON.stringify(prouductContainer))
displayProuducts()
clearInput()

}

function displayProuducts(){
    var boxes=``
    for(var i =0;i<prouductContainer.length;i++){
    
        boxes+=`
    
    <tr>
    <td>${i+1}</td>
    <td>${prouductContainer[i].Name}</td>
    <td>${prouductContainer[i].Category}</td>
    <td>${prouductContainer[i].Price}</td>
    <td>${prouductContainer[i].Description}</td>
    <td><button onclick=" deleteProuduct(${i})"class="btn btn-danger btn-sm">Delete</button></td>
    <td><button onclick="updateProuduct(${i})"class="btn btn-warning btn-sm">Update</button></td>
    

    </tr>
    
    `
    }
    document.getElementById('tbody').innerHTML=boxes
    
}
displayProuducts()

function clearInput(){
    prouductNameInput.value="";
    prouductCategoryInput.value="";
    prouductPriceInput.value="";
    prouductDescriptionInput.value="";
}
 

function deleteProuduct(Index){
    prouductContainer.splice(Index,1)
    localStorage.setItem('prouducts',JSON.stringify(prouductContainer))
    displayProuducts()

}
function updateProuduct(index){
    currentindex=index
    addProuductBtn.classList.add("d-none")
    updateProuductBtn.classList.replace('d-none',"d-block")
    prouductNameInput.value=prouductContainer[index].Name
    prouductCategoryInput.value=prouductContainer[index].Category
    prouductPriceInput.value=prouductContainer[index].Price
    prouductDescriptionInput.value=prouductContainer[index].Description  
   
}
function updateProuducts(){

    addProuductBtn.classList.replace('d-none',"d-block")
    updateProuductBtn.classList.add("d-none")
    prouductContainer[currentindex].Name=prouductNameInput.value
    prouductContainer[currentindex].Category=prouductCategoryInput.value
    prouductContainer[currentindex].Price=prouductPriceInput.value
    prouductContainer[currentindex].Description=prouductDescriptionInput.value
    displayProuducts()
    clearInput()
}

function search(){

   var searchInput= document.getElementById('searchInput').value
   var box2=``
for(var i=0;i<prouductContainer.length;i++){
if(prouductContainer[i].Name.toLowerCase().includes(searchInput.toLowerCase())){

box2+=`

<tr>
<td>${i+1}</td>
<td>${prouductContainer[i].Name}</td>
<td>${prouductContainer[i].Category}</td>
<td>${prouductContainer[i].Price}</td>
<td>${prouductContainer[i].Description}</td>
<td><button onclick=" deleteProuduct(${i})"class="btn btn-danger btn-sm">Delete</button></td>
<td><button onclick="updateProuduct(${i})"class="btn btn-warning btn-sm">Update</button></td>
</tr>
`
}
}

document.getElementById('tbody').innerHTML=box2



}
