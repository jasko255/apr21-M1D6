// EX7.: Write a function to change the h1 text -->
// <!-- EX8.: Write a function to change the page background color -->
// <!-- EX9.: Write a function to change the footer address with a fake one -->
// <!-- EX10.: Write a function to add a CSS class to every Amazon link -->
// <!-- EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image -->
// <!-- EX12: Write a function to color the price of each product in a different one every time it's invoked -->

let myH1 = document.getElementById('header')

let changeIt = function(){
    myH1.innerHTML = 'Shop is failed'
    return myH1
}

changeIt()

let myBody = document.querySelector('body')
let colorMyBody = function(){
    myBody.style.backgroundColor = 'red'
    return myBody

}

colorMyBody()