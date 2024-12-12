let allArr = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
    "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
    "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];

// 출력함수(어디에(tbody) / 무엇을(allArr요소를 HTML로 구성해서) / 출력(.innerHTML))
outFunc();  // 페이지가 최초로 열렸을 때 1번 실행, 등록/삭제/수정 시 실행
function outFunc(){21
    console.log('outFunc');

    let tbody = document.querySelector('table > tbody');    //어디에
    let html = ``;                                          //무엇을
    for(let index = 0 ; index <= allArr.length -1; index++){
        // index는 0 부터 마지막 인덱스까지 1씩 증가

        let board = allArr[index];

        let info = board.split(','); 
        // 문자열.split => CSV형식으로 구성된 문자열을 쉼표기준으로 분해
        //                -> 분해된 결과를 배열 원소에 저장해 반환
        // info[0]=title, info[1]=contents, info[2]=password, info[3]=nowDate, info[4]=view
        html += `<tr>
                    <td>${info[3]}</td>
                    <td> <a href="#" onclick="pageFunc(${index})"> ${info[0]}</a> </td> 
                    <td>${info[4]}</td>
                 </tr>` // 클릭 시 상세페이지로 전환하기 위해 제목에 하이퍼링크 지정
    };
   
    tbody.innerHTML = html;                                 // 출력
};