let postArray = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
                "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
                "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];

    function postTitleInput( i ){ // i : 매개변수 , 상세 출력할 배열의
        console.log('상세출력함수 실행'); console.log( i );
        // 1. 어디에 , document.querySelector()
        // 2. 무엇을 , 배열 정보를 HTML 로 구성 , 선택한 게시물 인덱스의 정보를 , index
        let board = postArray[i]
        let info = board.split(',');
        let view = Number(info[4]);
        view++;
        postArray[i]= `${info[0]},${info[1]},${info[2]},${info[3]},${view}`
        console.log( view );
        console.log( postArray );
        // 3. 출력 , innerHTML
        document.querySelector('.tilteBox').innerHTML = info[0];
        document.querySelector('.contentBox').innerHTML = info[1];
        document.querySelector('.dayBox').innerHTML = info[3];
        document.querySelector('.viewBox').innerHTML = view;
        document.querySelector('.btnBox').innerHTML = 
                `<button type="button" onclick="postDeleteFunc(${i})">삭제</button>
                <button type="button" onclick="postEditFunc(${i})">수정</button>`
        postListFunc();
    }
    
    // [4] 삭제함수 , 실행조건 : [삭제]버튼 클릭시
    function postDeleteFunc( i ){   
        console.log('삭제함수 실행')
        // 1. 배열내 특정한 인덱스 의 요소 제거 , 배열변수명.splice( 삭제할 인덱스 , 개수 )
        let board = postArray[i];
        let info = board.split(',');
        let input = prompt('비밀번호 입력');
        if( input == info[2]){ postArray.splice( i , 1 ) };
        // 2. 화면 새로고침 / 다시 출력 / 다시ㅣ 함수 호출
        postListFunc();
        postTitleInput( i );
    } // f end
    
    // [5] 수정함수 , 실행조건 : [수정]버튼 클릭시
    function postEditFunc( i ){ console.log('등록함수 실행')
        console.log('수정함수 실행')
        // 1. 배열내 특정한 인덱스 의 요소 제거 , 배열변수명.splice( 삭제할 인덱스 , 개수 )
        let board = postArray[i];
        let info = board.split(',');
        let input = prompt('비밀번호 입력');
        if( input == info[2]){ 
            info[0] = prompt('수정할 제목 입력');
            info[1] = prompt('수정할 내용 입력');
            postArray[i]=`${info[0]}, ${info[1]}, ${info[2]}, ${info[3]}, ${info[4]} `
        }
        // 2. 화면 새로고침 / 다시 출력 / 다시ㅣ 함수 호출
        postListFunc();
        postTitleInput( i );
    } // f end ,