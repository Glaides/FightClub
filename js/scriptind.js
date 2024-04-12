let arrow = document.querySelectorAll(".bi-caret-down");

for (var i = 0; i < arrow.length; i++){
    arrow[i].addEventListener('click', (e)=>{
        let tagLi = e.target.closest('li');
        tagLi.classList.toggle('showMenu');
    });
}

let sidebar = document.querySelector('.sidebar');
let icoMenu = document.querySelector('.bi-list');
icoMenu.addEventListener('click', ()=> {
    sidebar.classList.toggle('close');
});

