/* 이미지 추가 이벤트 */
const addImage = document.querySelector('#addImage');

addImage.addEventListener('click', addToImg);

function addToImg(){
    const container = document.querySelector('.add-div');
    const imgUrl = `https://source.unsplash.com/random/?cat=`;
    let number = Math.floor(Math.random() * 1000000); // 중복 제거 로직 추가 해야할 것.

    for(let i=1; i < 3; i++){
        let newDiv = document.createElement('div'); // div 요소 생성
        newDiv.classList.add('middle-main-div'); // 클래스명 추가
        for(let j=1; j < 4; j++){
            newDiv.innerHTML += `<img src="${imgUrl+number}" class="middle-main-cat-img">`;
            number++;
        }
        container.before(newDiv);
    }
}

/* 맨 위로 버튼 이벤트 */
const scrollTopButton = document.querySelector('.btn-scroll');

// 버튼 클릭시 이벤트
scrollTopButton.addEventListener('click', function(){
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   });
});

/* 모달창 */
// modal open
const modalBtn = document.querySelector('#subscribeModal');

// modal close
const closeBtn = document.querySelector('#modalCloseBtn');

// modal
const modal = document.querySelector('#modal');

// input
const input = document.querySelector('#modalInput');

//버튼 클릭 시 모달창 열기
modalBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

//버튼 클릭 시 모달창 닫기
closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
    input.value = null;
});

// 모달 창 밖 클릭 시 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};