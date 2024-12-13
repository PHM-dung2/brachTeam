// let postArray = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
//                 "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
//                 "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];

// [3] 출력함수 , 실행조건 : js열렸을 때 최초 1번 실행 , 등록/삭제/수정 처리 성공시 실행
postListFunc();
function postListFunc(){  console.log('등록함수 실행')

    let postArray = retrunFunc();
    // (1) 어디에 , table > tbody , document.querySelector(선택자)
    let tbody = document.querySelector( 'table > tbody' )
    // (2) 무엇읏 , 배열 요소들의 정보를 html 구성해서
    html = '';
    for( i = 0 ; i < postArray.length ; i++){
        // index는 0부터 마지막인덱스까지 1씩 증가 반복
        let board = postArray[i]; // 하나의 게시물
        // 하나의 게시물을 csv 구성 했기 때문에 게시물 정보 분해 
        // 문자열.split('기준문자') : 문자열내 기준문자로 분해해서 분해
        let info = board.split(',') // csv 형식은 ,(쉼표)
        html += `<tr>
                    <td>${ info[3] }</td>
                    <td><a href="view.html" onclick="postTitleInput(${i})">${ info[0] }<a></td>
                    <td>${ info[4] }</td>
                </tr>`
        console.log( html )
    } // for end
    // (3) 출력 , .innerHTML
    tbody.innerHTML = html;
} // f end

function retrunFunc(){
    let postArray = localStorage.getItem('postArray')
    if( postArray == null ){
        postArray = [];
    }else{
        postArray = JSON.parse( postArray );
    }
    console.log(postArray);

    return postArray;
}