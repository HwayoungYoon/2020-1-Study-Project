const calcScore = () => {
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
    if (qnaList[0].a == select[0]) { /* 2번[0] 질문 */
        point_2 += qnaList[0].a[select[0]].score;
        point_6 += qnaList[0].a[select[0]].score;
        point_7 += qnaList[0].a[select[0]].score;
    } else if (qnaList[0].a == select[1]) {
        point_1 += qnaList[0].a[select[1]].score;
        point_5 += qnaList[0].a[select[1]].score;
        point_8 += qnaList[0].a[select[1]].score;
    } else if (qnaList[0].a == select[2]) {
        point_3 += qnaList[0].a[select[2]].score;
        point_4 += qnaList[0].a[select[2]].score;
        point_9 += qnaList[0].a[select[2]].score;
    } else if (qnaList[0].a == select[3]) {
        point_10 += qnaList[0].a[select[3]].score;
        point_11 += qnaList[0].a[select[3]].score;
        point_12 += qnaList[0].a[select[3]].score;
    } else if (qnaList[1].a == select[0]) { /* 3번[1] 질문 */
        point_5 += qnaList[1].a[select[0]].score;
        point_7 += qnaList[1].a[select[0]].score;
        point_11 += qnaList[1].a[select[0]].score;
        point_12 += qnaList[1].a[select[0]].score;
    } else if (qnaList[1].a == select[1]) {
        point_2 += qnaList[1].a[select[1]].score;
        point_3 += qnaList[1].a[select[1]].score;
        point_6 += qnaList[1].a[select[1]].score;
        point_8 += qnaList[1].a[select[1]].score;
        point_9 += qnaList[1].a[select[1]].score;
        point_10 += qnaList[1].a[select[1]].score;
    } else if (qnaList[1].a == select[2]) {
        point_1 += qnaList[1].a[select[2]].score;
        point_4 += qnaList[1].a[select[2]].score;
    } else if (qnaList[2].a == select[0]) { /* 4번[2] 질문 */
        point_3 += qnaList[2].a[select[0]].score;
        point_4 += qnaList[2].a[select[0]].score;
        point_5 += qnaList[2].a[select[0]].score;
        point_10 += qnaList[2].a[select[0]].score;
        point_11 += qnaList[2].a[select[0]].score;
        point_12 += qnaList[2].a[select[0]].score;
    } else if (qnaList[2].a == select[1]) {
        point_1 += qnaList[2].a[select[1]].score;
        point_2 += qnaList[2].a[select[1]].score;
        point_6 += qnaList[2].a[select[1]].score;
        point_7 += qnaList[2].a[select[1]].score;
        point_8 += qnaList[2].a[select[1]].score;
        point_9 += qnaList[2].a[select[1]].score;
    } else if (qnaList[3].a == select[0]) { /* 5번[3] 질문 */
        point_1 += qnaList[3].a[select[0]].score;
        point_2 += qnaList[3].a[select[0]].score;
        point_3 += qnaList[3].a[select[0]].score;
        point_4 += qnaList[3].a[select[0]].score;
        point_10 += qnaList[3].a[select[0]].score;
    } else if (qnaList[3].a == select[1]) {
        point_5 += qnaList[3].a[select[1]].score;
        point_6 += qnaList[3].a[select[1]].score;
        point_7 += qnaList[3].a[select[1]].score;
        point_8 += qnaList[3].a[select[1]].score;
        point_9 += qnaList[3].a[select[1]].score;
        point_11 += qnaList[3].a[select[1]].score;
        point_12 += qnaList[3].a[select[1]].score;
    } else if (qnaList[4].a == select[0]) { /* 6번[4] 질문 */
        point_1 += qnaList[4].a[select[0]].score;
        point_2 += qnaList[4].a[select[0]].score;
    } else if (qnaList[4].a == select[1]) {
        point_11 += qnaList[4].a[select[1]].score;
        point_12 += qnaList[4].a[select[1]].score;
    } else if (qnaList[4].a == select[2]) {
        point_7 += qnaList[4].a[select[2]].score;
        point_8 += qnaList[4].a[select[2]].score;
        point_9 += qnaList[4].a[select[2]].score;
    } else if (qnaList[4].a == select[3]) {
        point_3 += qnaList[4].a[select[3]].score;
        point_4 += qnaList[4].a[select[3]].score;
        point_6 += qnaList[4].a[select[3]].score;
        point_10 += qnaList[4].a[select[3]].score;
    } else if (qnaList[4].a == select[4]) {
        point_5 += qnaList[4].a[select[4]].score;
    } else if (qnaList[5].a == select[0]) { /* 7번[5] 질문 */
        point_4 += qnaList[5].a[select[0]].score;
        point_6 += qnaList[5].a[select[0]].score;
    } else if (qnaList[5].a == select[1]) {
        point_5 += qnaList[5].a[select[1]].score;
    } else if (qnaList[5].a == select[2]) {
        point_7 += qnaList[5].a[select[2]].score;
        point_8 += qnaList[5].a[select[2]].score;
        point_9 += qnaList[5].a[select[2]].score;
    } else if (qnaList[5].a == select[3]) {
        point_1 += qnaList[5].a[select[3]].score;
        point_2 += qnaList[5].a[select[3]].score;
        point_4 += qnaList[5].a[select[3]].score;
    } else if (qnaList[5].a == select[4]) {
        point_3 += qnaList[5].a[select[4]].score;
    } else if (qnaList[5].a == select[5]) {
        point_10 += qnaList[5].a[select[5]].score;
        point_11 += qnaList[5].a[select[5]].score;
        point_12 += qnaList[5].a[select[5]].score;
    } else if (qnaList[6].a == select[0]) { /* 8번[6] 질문 */
        point_1 += qnaList[6].a[select[0]].score;
        point_2 += qnaList[6].a[select[0]].score;
        point_6 += qnaList[6].a[select[0]].score;
        point_7 += qnaList[6].a[select[0]].score;
        point_8 += qnaList[6].a[select[0]].score;
        point_9 += qnaList[6].a[select[0]].score;
        point_10 += qnaList[6].a[select[0]].score;
        point_11 += qnaList[6].a[select[0]].score;
        point_12 += qnaList[6].a[select[0]].score;
    } else if (qnaList[6].a == select[1]) {
        point_3 += qnaList[6].a[select[1]].score;
        point_4 += qnaList[6].a[select[1]].score;
        point_5 += qnaList[6].a[select[1]].score;
    } else if (qnaList[7].a == select[0]) { /* 9번[7] 질문 */
        point_1 += qnaList[7].a[select[0]].score;
        point_2 += qnaList[7].a[select[0]].score;
        point_3 += qnaList[7].a[select[0]].score;
        point_4 += qnaList[7].a[select[0]].score;
        point_5 += qnaList[7].a[select[0]].score;
        point_6 += qnaList[7].a[select[0]].score;
    } else if (qnaList[7].a == select[1]) {
        point_6 += qnaList[7].a[select[1]].score;
        point_7 += qnaList[7].a[select[1]].score;
        point_8 += qnaList[7].a[select[1]].score;
        point_9 += qnaList[7].a[select[1]].score;
        point_10 += qnaList[7].a[select[1]].score;
        point_11 += qnaList[7].a[select[1]].score;
        point_12 += qnaList[7].a[select[1]].score;
    } else if (qnaList[8].a == select[0]) { /* 10번[8] 질문 */
        point_3 += qnaList[8].a[select[0]].score;
        point_5 += qnaList[8].a[select[0]].score;
        point_6 += qnaList[8].a[select[0]].score;
        point_7 += qnaList[8].a[select[0]].score;
        point_9 += qnaList[8].a[select[0]].score;
        point_12 += qnaList[8].a[select[0]].score;
    } else if (qnaList[8].a == select[1]) {
        point_1 += qnaList[8].a[select[1]].score;
        point_2 += qnaList[8].a[select[1]].score;
        point_4 += qnaList[8].a[select[1]].score;
        point_8 += qnaList[8].a[select[1]].score;
        point_10 += qnaList[8].a[select[1]].score;
        point_11 += qnaList[8].a[select[1]].score;
    } else if (qnaList[9].a == select[0]) { /* 11번[9] 질문 */
        point_4 += qnaList[9].a[select[0]].score;
        point_11 += qnaList[9].a[select[0]].score;
        point_12 += qnaList[9].a[select[0]].score;
    } else if (qnaList[9].a == select[1]) {
        point_2 += qnaList[9].a[select[1]].score;
    } else if (qnaList[9].a == select[4]) {
        point_7 += qnaList[9].a[select[4]].score;
        point_8 += qnaList[9].a[select[4]].score;
        point_9 += qnaList[9].a[select[4]].score;
    } else if (qnaList[9].a == select[2] || qnaList[9].a == select[3] || qnaList[9].a == select[5] || qnaList[9].a == select[6]) {
        point_1 += qnaList[9].a[select[2]].score;
        point_3 += qnaList[9].a[select[2]].score;
        point_5 += qnaList[9].a[select[2]].score;
        point_6 += qnaList[9].a[select[2]].score;
        point_10 += qnaList[9].a[select[2]].score;
    } else if (qnaList[10].a == select[0]) { /* 12번[10] 질문 */
        point_1 += qnaList[10].a[select[0]].score;
        point_2 += qnaList[10].a[select[0]].score;
    } else if (qnaList[10].a == select[1]) {
        point_3 += qnaList[10].a[select[1]].score;
        point_7 += qnaList[10].a[select[1]].score;
        point_9 += qnaList[10].a[select[1]].score;
        point_12 += qnaList[10].a[select[1]].score;
    } else if (qnaList[10].a == select[2]) {
        point_4 += qnaList[10].a[select[2]].score;
        point_5 += qnaList[10].a[select[2]].score;
    } else if (qnaList[10].a == select[3]) {
        point_11 += qnaList[10].a[select[3]].score;
        point_12 += qnaList[10].a[select[3]].score;
    } else { /* if (qnaList[10].a == select[4]) */
        point_6 += qnaList[10].a[select[4]].score;
        point_8 += qnaList[10].a[select[4]].score;
        point_10 += qnaList[10].a[select[4]].score;
    }
    return point_1, point_2, point_3, point_4, point_5, point_6, point_7, point_8, point_9, point_10, point_11, point_12;
}

const point = [point_1, point_2, point_3, point_4, point_5, point_6, point_7, point_8, point_9, point_10, point_11, point_12];

const calcMax = () => {
    let max = 0;
    for(let i = 0; i < point.length; i++){
        if(data[i] > max){
            max = data[i];
        }
    }
}




/* if (qnaList[0].a == [0]) {
    point_0 += qnaList[i].a[select[i]].score;
} else if (condition1 || condition2 && condition3 || condition4) {
    point_1 += qnaList[i].a[select[i]].score;
} else if (point < 143) {
    point_2 += qnaList[i].a[select[i]].score;
} else {
    point_4 += qnaList[i].a[select[i]].score;
}
return num; */

const calcScore = () => {
    let point_1 = 0;
    for (let i = 0; i < ENDPOINT; i++) {
        if (qnaList[0].a == select[0]) {
            point_2 += qnaList[0].a[select[0]].score;
            point_6 += qnaList[0].a[select[0]].score;
            point_7 += qnaList[0].a[select[0]].score;
        } else if (qnaList[0].a == select[1]) {
            point_1 += qnaList[i].a[select[i]].score;
            point_2 += qnaList[0].a[select[0]].score;
            point_2 += qnaList[0].a[select[0]].score;
        } else if (point < 143) {
            point_2 += qnaList[i].a[select[i]].score;
        } else {
            point_4 += qnaList[i].a[select[i]].score;
        }
    }
    return point_0, point_1;
}

/* const sortResult = (point) => {
    let num = 0;
    if (point < 115) {
        num = 0;
    } else if (point < 129) {
        num = 1;
    } else if (point < 143) {
        num = 2;
    } else {
        num = 37;
    }
    return num;
} */