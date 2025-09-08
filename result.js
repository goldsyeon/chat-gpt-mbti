// result.js

document.addEventListener("DOMContentLoaded", function () {
  const resultElement = document.getElementById("result");
  const restartButton = document.getElementById("restart-button");

  // 로컬스토리지에서 mbti_result 값 가져오기
  const mbtiResult = localStorage.getItem("mbti_result");

  if (mbtiResult) {
    // 값이 있으면 결과 표시
    resultElement.textContent = `${mbtiResult}입니다!`;
  } else {
    // 값이 없으면 안내 문구 표시
    resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
    restartButton.textContent = "테스트 하러 가기";
  }
});
