const { app, BrowserWindow } = require('electron'); //import library to create electron
const fs = require('fs') //current window to create text file to store data
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files') //create textfile.txt tu dekat folder Files 

btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button //button tu function
  let file = path.join(pathName, fileName.value) //(first box)baca user data dlm id file name
  let contents = fileContents.value //(second box) capture content n simpan dlm variable content
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err) //print error kalau ada
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was created") //to show dialogue box   
    console.log("The file was created") // @ elements
    fileName.value = ""
    fileContents.value = ""
  
  })
  
})

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
 
  fs.readFile(file, function(err, data){ //passing nama nak create
    if(err){
      return console.log(err)
    }
    fileContents.value = data
    console.log("The file was read!")
  })
  
})

btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
 
  fs.unlink(file, function(err){ //method utk delete
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = "" //clearkan txtfile
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was deleted")
    console.log("The file was deleted!")
  })
  
})

btnUpdate.addEventListener('click', function(){  //creating text file when user click CREATE button //button tu function
    let file = path.join(pathName, fileName.value) //(first box)baca user data dlm id file name
    let contents = fileContents.value //(second box) capture content n simpan dlm variable content
    fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
      if(err){
        return console.log(err) //print error kalau ada
      }
      var txtfile = document.getElementById("fileName").value
      alert(txtfile + " text file was updated") //to show dialogue box   
      console.log("The file was updated") // @ elements
    
    })   
})
function changepage1(){
  window.location.href = "api_page.html"
}
