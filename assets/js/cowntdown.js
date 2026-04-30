// 挙式の日付
const ceremonyDate = new Date("2026-07-04T15:00:00");

// 披露宴の日付
const partyDate = new Date("2026-07-04T16:00:00");

function updateCountdown() {
    const now = new Date();

    // ▼ 挙式カウントダウン（HTML に要素がある場合のみ実行）
    const daysC = document.getElementById("countdown-days-c");
    const hmsC = document.getElementById("countdown-hms-c");

    if (daysC && hmsC) {
        const diffC = ceremonyDate - now;

        if (diffC <= 0) {
            daysC.innerHTML = "本日";
            hmsC.innerHTML = "挙式です";
        } else {
            const d = Math.floor(diffC / (1000 * 60 * 60 * 24));
            const h = Math.floor((diffC / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diffC / (1000 * 60)) % 60);
            const s = Math.floor((diffC / 1000) % 60);

            daysC.innerHTML = `${d}日`;
            hmsC.innerHTML = `${h}時間 ${m}分 ${s}秒`;
        }
    }

    // ▼ 披露宴カウントダウン（HTML に要素がある場合のみ実行）
    const daysP = document.getElementById("countdown-days-p");
    const hmsP = document.getElementById("countdown-hms-p");

    if (daysP && hmsP) {
        const diffP = partyDate - now;

        if (diffP <= 0) {
            daysP.innerHTML = "本日";
            hmsP.innerHTML = "披露宴です";
        } else {
            const d = Math.floor(diffP / (1000 * 60 * 60 * 24));
            const h = Math.floor((diffP / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diffP / (1000 * 60)) % 60);
            const s = Math.floor((diffP / 1000) % 60);

            daysP.innerHTML = `${d}日`;
            hmsP.innerHTML = `${h}時間 ${m}分 ${s}秒`;
        }
    }
}

// 初回実行
updateCountdown();

// 1秒ごとに更新
setInterval(updateCountdown, 1000);