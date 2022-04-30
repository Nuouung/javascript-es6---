// 2초 단위로 흘러가는 시계를 출력하시오.
setInterval(() => {
    let date = new Date();
    // 월 return : 0 ~ 11
    console.log(`현재 시각은 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초 입니다.`);
}, 2000);