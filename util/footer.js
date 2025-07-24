
// Footer dropdown section. {God did, I don't know how ths shit worked but it worked}
export function subHead() {const subHead = document.querySelectorAll('.sub-head');
subHead.forEach((sub) => {
  sub.addEventListener('click', function () {
    // const nav = document.querySelector('nav');
    //   if (nav.style.display === 'none') {
    //     nav.style.display = 'block';
    //   } else { nav.style.display = 'none'};
    // })
    const dropdown =  this.nextElementSibling;
    dropdown.classList.toggle('show');

    const downArr = this.querySelector('.dropdown');

    if (downArr.innerHTML === '▼') {
      downArr.innerHTML = '▲';
    } else {
      downArr.innerHTML = '▼';
    }

    })
  })
}