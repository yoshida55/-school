// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburger = document.getElementById("hamburger-btn");
const nav = document.querySelector(".nav_red");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

// <h3>オンライン対応</h3>
//   <p>全国どこでも受講可能です。
//    のカードが画面に入ったら
const cards = document.querySelectorAll(".reason_card");

// IntersectionObserverはブラウザに**「特定の要素が画面（ビューポート）
// に入ったかどうかを監視してね」
// entry.isIntersecting・・・・
// 監視している要素が、画面内に少しでも入るとこの条件が true になります・・・
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); // ★1回だけ
    }
  });
});

//cards.forEach の中で実行することで、2つのカードそれぞれに対して、
//個別に監視のスイッチを入れているのです。
// 【実行】 全部のカードに監視のスイッチを入れる！
cards.forEach((card) => observer.observe(card));

// 1周目：カード1に監視カメラを設置
//observer.observe(カード1); // 「このカード1を監視してね」

// 2周目：カード2に監視カメラを設置
// observer.observe(カード2); // 「このカード2を監視してね」
