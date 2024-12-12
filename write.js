let postArray = [];
// let arr = postArray.split(",");

// [2] 등록함수 , 실행조건 : [등록]버튼 클릭시
function postWriteFunc(){   //console.log('등록함수 실행')    // 키워드명 겹칠때 오류 조심(변수명 이름 바꿔보기)
    
    // 1. 입력/저장 , document.querySelector('선택자').value
    let title = document.querySelector('.postTitle').value;
    let content = document.querySelector('.postContent').value;
    let password = document.querySelector('.postPassword').value;
    let view = 0 ;  // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작
    // console.log(view);
    // 오류 : Cannot red properties of nul (reading 'value')
            // ---> HTML과 JS에 입력한 선택자가 일치하지 않을 경우 , value속성이 없는 마크업 , 
   
    // 2. 처리 , 입력받은값들과 날짜/조회수 하나의 문자열(CSV)rntjd -> 배열 저장
        // (1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    // 원하는 날짜 또는 시간 구성하기
        // - 현재 날짜/시간 제공한는 객체/변수
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth()+1;
    let nowDay = nowDate.getDate() 
    let date = `${nowYear}-${nowMonth}-${nowDay}` ;  // 작성일 , 일반적으로 게시물 등록시 현재 시스템 날짜를 사용.
    // console.log(date);
        // (2) 5개의 변수들을 하나의(CSV형식)문자열 로 구성
    let board = `${title},${content},${password},${date},${view}`; //`백틱 문자열 템플렛
    console.log(postArray);
    // 3. 출력 , 출력함수 실행
    postArray.push( board );
} // f end