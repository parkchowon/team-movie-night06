// 수정 버튼 클릭 시 :
// - 모달 창을 표시한다.
// - 비밀번호 입력 필드를 초기화한다.

// 확인 버튼 클릭 시 (비밀번호 확인 로직) :
// - 입력된 비밀번호를 가져온다.
// - 비밀번호를 검증한다.
//      - 올바른 경우 :
//          - 수정 버튼인지 확인한다.
//              - 수정 버튼인 경우 :
//                  - 현재 리뷰 텍스트를 input 창으로 변경한다.
//              - 삭제 버튼인 경우 :
//                  - 아무것도 하지 않는다.
//      - 올바르지 않은 경우 :
//          - 알림을 표시한다. -> "비밀번호가 일치하지 않습니다." alert창

// - 수정 후 확인 버튼 클릭 시 : 수정된 내용을 가져온다.
// - 수정된 내용을 LocalStorage에 저장한다.
// - 리뷰 텍스트를 수정된 내용으로 업데이트한다.
// - 모달을 닫는다.
