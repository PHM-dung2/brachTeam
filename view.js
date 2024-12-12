let allArr = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
    "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
    "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];

// 상세 함수 (실행조건 : 전체 출력화면에서 특정한 제목을 클릭했을 때)
function pageFunc(index){   /* 제목 onclick함수에 인자값으로 설정된 ${index}가 
                               가지고 있는 값이 pageFunc의 매개변수 index로 대입됨 */ 
    console.log('pageFunc');
    console.log(index);

    let board = allArr[index];   // 선택한 인덱스의 게시물 호출
    let info = board.split(',');            // 게시물 문자열을 쉼표기준으로 분해

    document.querySelector('.detTitle').innerHTML = info[0];
    document.querySelector('.detContents').innerHTML = info[1];
    document.querySelector('.detDate').innerHTML = info[3];
    document.querySelector('.detView').innerHTML = info[4];

    // 삭제 시 게시물 index를 사용하기 위해 js에 작성
    document.querySelector('.btnBox').innerHTML =
                                `<button onclick="dltFunc(${index})" type="button">
                                    삭제
                                </button>
                                <button onclick="editFunc(${index})" type="button">
                                    수정
                                </button>`
};

// 삭제함수
function dltFunc(index){
    console.log('dltFunc');

    // 배열 내 특정한 인덱스의 원소 제거(배열변수명.splice(삭제할 인덱스, 개수))
    allArr.splice(index, 1);

    //화면 새로고침, 다시 출력, 다시 함수호출
    outFunc();
};