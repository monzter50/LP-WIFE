// Fullscreen scroll

if (document.body.classList.contains("fullscreen")) {
  const sectionHTML = document.querySelectorAll("section");
  const content = document.querySelector(".main__content");
  let spin_value = 0;
  navigation = '';
  // document.body.insertAdjacentElement(`beforeEnd`,`<div class="navigation"></div>`);
  for(let i=0;i<sectionHTML.length;i++){
    navigation += `<div class="bullets ${i==0?'active':''}"><span>hi</span></div>`
  }
  document.querySelector('.navigation').innerHTML = navigation

  const bullets = document.querySelectorAll('.bullets')

bullets.forEach((bullet,index)=>{
  bullet.addEventListener('click',(e)=>{
    console.log(bullet)
    document.querySelector('.bullets.active').classList.remove('active')
    bullet.classList.add('active')
    spin_value = index
    scroll_value(spin_value)
  })
})
  window.addEventListener("wheel", e => {
    if (e.deltaY > 0) {
      if (spin_value < sectionHTML.length - 1) spin_value += 1;
    } else {
      if (spin_value > 0) spin_value -= 1;
    }
    scroll_value(spin_value);
  });
  const scroll_value = count => {
    content.setAttribute("style", `transform:translateY(-${count * 100}vh);`);
    document.querySelector('.bullets.active').classList.remove('active')
    bullets[count].classList.add('active')
  };
}
// Animates
const animateCSS = document.querySelectorAll(".animate");

const config = {
  rootMargin: "50px 20px 75px 30px",
  threshold: [0, 0.25, 0.75, 1]
};
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("fadeIn");
      console.log("in the view", entry.target);
    } else {
      entry.target.classList.remove("fadeIn");
      console.log("out of view", entry.target);
    }
  });
}, config);

animateCSS.forEach(el => {
  observer.observe(el);
});