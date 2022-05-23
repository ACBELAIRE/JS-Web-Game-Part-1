// Create a function caled newImage to include items that don't change with parameters of the function being the items that do change
//change: url,left and bottom... no change: everything else

//this information came from the greenCharacter information and pineTree information that was originally given and created.. it was
//then changed to make the code more simple with the funcation newImage...
function newImage( url, left, bottom){
    let x = document.createElement('img')
    x.src = url
    x.style.position = 'fixed'
    x.style.left = left +'px'
    x.style.bottom = bottom + 'px'
    document.body.append(x)
    return x
}

//create another function called newItem that will include all the info from newImage function 
// but will now include an additional addEventListener... connect the two functions together
function newItem(url,left,bottom){
    //Connect the newImage function here
   let x = newImage(url,left,bottom)
//addEventListener to this part of the function
//start of with 'click' and then move on to try 'dblclick'
   x.addEventListener('dblclick', function() {
       x.remove()
   })

}
//invoke the newImage functions here newImage(url,left, bottom)
newImage('assets/green-character.gif',100, 100)
newImage('assets/pine-tree.png',450 ,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png ',500,425)

// invoke the newItem functions here newItem(url,left,bottom)
newItem('assets/sword.png',500,405)
newItem('assets/sheild.png',165,185)
newItem('assets/staff.png',600,100)



