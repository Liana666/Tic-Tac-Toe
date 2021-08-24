const td = document.querySelectorAll('td');
const btnModal = document.querySelector('.modal__wrapper__btn');
const modalBackground = document.querySelector('.modal__background');
let modalTitle = document.querySelector('.modal__wrapper__title');
let tdArr = Array.from(td);
let newArr2 = [];
let count = 0;
let b = [];


for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', () => {

        if (td[i].innerHTML == "") {

            td[i].style.background = 'rgba(235, 229, 229, 0.5)';
            td[i].innerHTML = "<img src ='img/close 1.png'>";
            let a = tdArr.splice(i, 1, 1);



            for (index in tdArr) {
                if (typeof tdArr[index] !== 'number')
                    newArr2.push(index);
            }


            let AIStepIndex = Math.floor(Math.random() * newArr2.length);
            let AIStep = newArr2[AIStepIndex];
            let b = tdArr.splice(AIStep, 1, 0);

            td[AIStep].innerHTML = "<img src ='img/Ellipse.png'>";
            newArr2 = [];
        }
        isGameOver(tdArr);
    });
};




function isGameOver(a1) {
    if (a1[0] == 1 && a1[1] == 1 && a1[2] == 1 ||
        a1[3] == 1 && a1[4] == 1 && a1[5] == 1 ||
        a1[6] == 1 && a1[7] == 1 && a1[8] == 1 ||
        a1[0] == 1 && a1[3] == 1 && a1[6] == 1 ||
        a1[1] == 1 && a1[4] == 1 && a1[7] == 1 ||
        a1[2] == 1 && a1[5] == 1 && a1[8] == 1 ||
        a1[0] == 1 && a1[4] == 1 && a1[8] == 1 ||
        a1[2] == 1 && a1[4] == 1 && a1[6] == 1) {
        setTimeout(getModal, 400);
        modalTitle.innerHTML = "You winner!";

    }

    else if
        (a1[0] == 0 && a1[1] == 0 && a1[2] == 0 ||
        a1[3] == 0 && a1[4] == 0 && a1[5] == 0 ||
        a1[6] == 0 && a1[7] == 0 && a1[8] == 0 ||
        a1[0] == 0 && a1[3] == 0 && a1[6] == 0 ||
        a1[1] == 0 && a1[4] == 0 && a1[7] == 0 ||
        a1[2] == 0 && a1[5] == 0 && a1[8] == 0 ||
        a1[0] == 0 && a1[4] == 0 && a1[8] == 0 ||
        a1[2] == 0 && a1[4] == 0 && a1[6] == 0) {
        setTimeout(getModal, 400);
        modalTitle.innerHTML = "You lose!";
    }
}


function getModal() {
    modalBackground.style.display = "block";
    btnModal.onclick = () => {
        window.location.reload();
    }
}

