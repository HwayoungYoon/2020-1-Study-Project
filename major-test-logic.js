/* 
질문 및 답변 형식 1
: 기존의 형식과 같음
*/
const qnaList = [
    {
        q: '1.어떤 방식이 더 공부가 잘되나요?',
        a: [
            {answer: '노트북', score: 3},/* 2,6,7번에 + */
            {answer: '손필기', score: 3},/* 1,5,8번에 + */
            {answer: '태블릿필기', score: 3},/* 3,4,9번에 + */
            {answer: '필기 따윈 하지 않는다', score: 3}/* 10,11,12번에 + */
        ]
    },
    {
        q: '2.한가지 항목으로만 평가받을 수 있다면?',
        a: [
            {answer: '과제', score: 3},/* 5,7,11,12번에 + */
            {answer: '시험', score: 3},/* 2,3,6,8,9,10번에 + */
            {answer: '토론', score: 3}/* 1,4번에 + */
        ]
    },
    {
        q: '12.다음 중 가장 끌리는 색깔을 골라주세요.',
        a: [
            {answer: '빨강색', score: 30},
            {answer: '주황색', score: 10},
            {answer: '노랑색', score: 20},
            {answer: '파랑색', score: 60},
            {answer: '흰색', score: 50},
            {answer: '보라색', score: 70},
            {answer: '초록색', score: 40}
        ]
    }
]

/* 
질문 및 답변 형식 1인 경우의 점수 계산
: [0]번부터 [10]번 질문에 대한 답변의 배열을 아래와 같이 새로 만들어서 이를 이용하여 각 12개 분류의 점수를 계산한 뒤
최대값을 찾아서 대략적인 점수를 부여하고 마지막 [11]번 질문을 이용하여 세부 점수를 부여하여 point 값 완성
 */
const select = [];
const qnaArray = [
    ['노트북','손필기','태블릿필기','필기 따윈 하지 않는다','','',''],
    ['과제','시험','토론','','','',''],
    ['같이 한다','혼자 한다','','','','',''],
    ['너무 친해서 새벽에 카톡해도 이상하지 않은 교수님','복도에서 마주치면 눈피하는 교수님','','','','',''],
    ['신춘문예','디자인 공모전','해커톤','마케팅 공모전','봉사','',''],
    ['사회문제','복지','과학기술','외교','경제','예술',''],
    ['배우는 내용은 없지만 A+ 주는 수업','배우는 내용이 알차지만 B+ 주는 수업','','','','',''],
    ['친구를 걱정한다','컵을 걱정한다','','','','',''],
    ['중요하다','아니다','','','','',''],
    ['독립영화','사극','로맨스','스릴러','SF','공포','코미디'],
    ['세종대왕','스티브잡스','부처님','피카소','지금의 내가 좋다','','']
]
const calcMax = () => {
    let point_1 = 0;
    let point_2 = 0;
    let point_3 = 0;
    let point_4 = 0;
    let point_5 = 0;
    let point_6 = 0;
    let point_7 = 0;
    let point_8 = 0;
    let point_9 = 0;
    let point_10 = 0;
    let point_11 = 0;
    let point_12 = 0;
    if (qnaArray[0]) {
        m = 0;
        for(let i = 0; i<6; i++) {
            if(qnaArray[0][0]) {
                point_2 += 1;
                point_6 += 1;
                point_7 += 1;
            }
        }
    }
    return point_1, point_2, point_3, point_4, point_5, point_6, point_7, point_8, point_9, point_10, point_11, point_12;
}
const calcScore = () => {
    let point = 0;
    if(point_1 > point_2){
        point = 100;
    } else if (point_2 > point3){
        point = 200;
    } else if (point_3 > point4){
        point = 300;
    } else if (point_4 > point5){
        point = 400;
    } else if (point_5 > point6){
        point = 500;
    } else if (point_6 > point7){
        point = 600;
    } else if (point_7 > point8){
        point = 700;
    } else if (point_8 > point9){
        point = 800;
    } else if (point_9 > point10){
        point = 900;
    } else if (point_10 > point11){
        point = 1000;
    } else if (point_11 > point12){
        point = 1100;
    } else {
        point = 1200;
    }
    for (let i = 0; i < 6; i++) {
        point += qnaList[11].a[select[i]].score;
    }
    return point;
}



/* 
질문 및 답변 형식 2
: id 배열을 추가해서 선택한 답변의 배열을 모두 합쳐서 가장 빈도가 높은 배열의 원소를 찾아서 출력
*/
const qnaList = [
    {
        q: '1.어떤 방식이 더 공부가 잘되나요?',
        a: [
            {answer: '노트북', score: 3, id: ["point_2","point_6","point_7"]},
            {answer: '손필기', score: 3, id: ["point_1","point_5","point_8"]},
            {answer: '태블릿필기', score: 3, id: ["point_3","point_4","point_9"]},
            {answer: '필기 따윈 하지 않는다', score: 3, id: ["point_10","point_11","point_12"]}
        ]
    },
    {
        q: '2.한가지 항목으로만 평가받을 수 있다면?',
        a: [
            {answer: '과제', score: 3, id: ["point_5","point_7","point_11","point_12"]},
            {answer: '시험', score: 3, id: ["point_2","point_3","point_6","point_8","point_9","point_10"]},
            {answer: '토론', score: 3, id: ["point_1","point_4"]}
        ]
    },
    {
        q: '12.다음 중 가장 끌리는 색깔을 골라주세요.',
        a: [
            {answer: '빨강색', score: 30},
            {answer: '주황색', score: 10},
            {answer: '노랑색', score: 20},
            {answer: '파랑색', score: 60},
            {answer: '흰색', score: 50},
            {answer: '보라색', score: 70},
            {answer: '초록색', score: 40}
        ]
    }
]

/* 
질문 및 답변 형식 2인 경우에 각 답변에 해당하는 id를 배열의 형태로 만들어서 선택된 답변의 배열들을 concat으로 합친 배열을 만들고 
새로 만들어진 배열에서 원소들의 빈도가 가장 높은 값을 찾아서 반환하고 
반환된 값이 point_5이면 point에 500점을, point_11이면 point에 1100점을 부과도록 함
선택된 답변들의 id들을 합친 새로운 배열 pointArray를 만드는 코드
*/
const calcMax = () => {
    let pointArray = [];
    for (let i = 0; i < ENDPOINT; i++) {
        pointArray += pointArray.concat(qnaList[i].a[select[i]].id);
    }
    return pointArray;
}
