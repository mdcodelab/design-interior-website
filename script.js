//showing container after 4000ms

const container = document.querySelector(".container");

setTimeout(() => {
  container.style.display="block";
}, 4000);



//moving sidebar

const hamb=document.querySelector(".hamburger-menu");

hamb.addEventListener("click", () => {
    container.classList.toggle("change");
    hamb.classList.toggle("change")
});


//scroll-btn

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    //remove the property from the html element after 1 second
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });


  //circles
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display")
    }, 4000)
  })

  window.addEventListener("load", ()=> {
    let bod = document.querySelector("body");
    let width=bod.getBoundingClientRect().width;
    console.log(width);
  })




  
  



