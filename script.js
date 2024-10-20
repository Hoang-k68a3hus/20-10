


       





function randomText() {
    return '♥'; // Trả về ký tự trái tim
}

function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 300);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function() {
        cloud.removeChild(e);
    }, 2000);
}

setInterval(function() {
    rain();
}, 20);

"   vui vẻ chạy dl mượt chúc em luôn xinh đẹp, và có 1 sức khỏe tốt và iu anh nhìu hơn nữa :))"


// Cấu trúc lời bài hát và thời gian
const lyrics = [
    { time: 0, text: "Gửi tặng đến người thương của H" },
    { time: 4000, text: "hello hiền iu dấu :))" },
    { time: 13000, text: "anh muốn nói với hiền là" },
    { time: 16000, text: "Có tham lam lắm không" },
    { time: 18000, text: "khi anh chỉ muốn mình em trong đầu" },
    { time: 23000, text: "Với từng chiếc áo phông " },
    { time: 26000, text: " mang hương em mỗi đêm cho ta quên sầu" },
    { time: 30000, text: "Loay hoay quay cuồng," },
    { time: 32000, text: "tại sao con tim ôm mãi một bông hoa không rời" },
    { time: 36000, text: "Sự thật là bộ nhớ đầy quá," },
    { time: 38000, text: "dữ liệu đẹp anh khó thể xóa" },
    { time: 41000, text: "từng bóng hình em" },
    { time: 45000, text: "Hóa ra chuyện mình thật tình" },
    { time: 49000, text: "tựa cuốn film từ đài truyền hình" },
    { time: 53000, text: "Nên anh lưu giữ file để khó phai good vibe" },
    { time: 57000, text: "good vibe" },
    { time: 59000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },
    { time: 63000, text: "Cho anh cảm giác không sao quên được" },
    { time: 67000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },
    { time: 70000, text: "Nhưng anh mong có cảm giác này mãi" },
    { time: 74000, text: "chúc ngiu của anh" },
    { time: 76000, text: "luôn luôn xinh đẹp" },
    { time: 79000, text: "luôn có 1 tinh thần lạc quan và 1 sức khỏe  tốt" },
    { time: 82000, text: "chúc em gặp được nhiều niềm vui trong cuộc sông, công việc và học tập" },
    { time: 86000, text: "và đặc biệt là iu anh nhìu hơn nữa" },
    { time: 90000, text: "Yêu thương sao cho vừa" },
    { time: 92000, text: "hay anh đang lo thừa" },
    { time: 94000, text: "Cho anh mong như cơm bữa," },
    { time: 96000, text: " em đừng xinh như thế nữa" },
    { time: 98000, text: "Loạn nhịp cả tim lên rồi," },
    { time: 100000, text: "đầu này toàn là em mà thôi" },
    { time: 104000, text: "Nỗi nhớ em cầu kỳ " },
    { time: 106000, text: "nên chẳng biết lý do là gì" },
    { time: 108000, text: "Hao tốn hơn nhiều G " },
    { time: 109000, text: "nên cần dùng thêm USB" },
    { time: 112000, text: "Nỗi nhớ em cầu kỳ " },
    { time: 113000, text: "nên chẳng biết lý do là gì" },
    { time: 115000, text: "Hao tốn hơn nhiều G " },
    { time: 117000, text: "nên cần dùng thêm D O M I C" },
    { time: 119000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },
    { time: 123000, text: "Cho anh cảm giác không sao quên được" },
    { time: 126000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },

    { time: 130000, text: "Hiền à" },
    { time: 132000, text: "anh thật buồn khi dạo này không có nhiều thời gian quan tâm đến đến em" },
    { time: 136000, text: "20-10 này anh chưa chuẩn bị gì để tặng cho em" },
    { time: 140000, text: "đừng giận anh nhé :((" },
    { time: 144000, text: "nhưng anh vẫn yêu em nhiều lắm" },
    { time: 150000, text: "lúc nào anh cũm nhớ em nhìu lắm" },
    { time: 164000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },
    { time: 168000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },
    { time: 171000, text: "Tràn ngập bộ nhớ nhớ nhớ nhớ em" },
    { time: 175000, text: "Tràn ngập bộ nhớ em" },
    { time: 187000, text: "Bộ nhớ ấy bao nhiêu điều thật quý" },
    { time: 191000, text: "Chỉ muốn giữ trong lòng chớ bay đi" },
    { time: 195000, text: "Cạnh bên nhau xua đi nhiều cơn đau" },
    { time: 199000, text: "Thành tâm với nốt nhạc cứu thân này." }
 ];

 const audioPlayer = document.getElementById('audioPlayer');
 const timeDisplay = document.querySelector('.time-display');
 let currentLyricIndex = 0;
 
 // Cập nhật lời bài hát theo thời gian
 function updateLyrics() {
     const currentTime = audioPlayer.currentTime * 1000; // Chuyển đổi sang milliseconds
     const h2 = document.querySelector('.cloud h2');
     
     // Tìm lời bài hát hiện tại
     while (currentLyricIndex < lyrics.length - 1 && 
            lyrics[currentLyricIndex + 1].time <= currentTime) {
         currentLyricIndex++;
     }
 
     // Hiển thị lời bài hát
     if (currentLyricIndex < lyrics.length) {
         const currentLyric = lyrics[currentLyricIndex];
         if (h2.textContent !== currentLyric.text) {
             h2.textContent = currentLyric.text;
             // Hiệu ứng scale khi thay đổi lời
             h2.style.transform = 'translateX(-50%) scale(1.1)';
             setTimeout(() => {
                 h2.style.transform = 'translateX(-50%) scale(1)';
             }, 200);
         }
     }
 
     // Cập nhật thời gian hiển thị
     const minutes = Math.floor(currentTime / 60000);
     const seconds = Math.floor((currentTime % 60000) / 1000);
     timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
 
     // Tiếp tục cập nhật
     requestAnimationFrame(updateLyrics);
 }
 
 // Xử lý sự kiện audio
 audioPlayer.addEventListener('play', () => {
     currentLyricIndex = 0;
     updateLyrics();
 });
 
 audioPlayer.addEventListener('seeked', () => {
     // Reset index khi tua
     currentLyricIndex = 0;
     // Tìm vị trí lời bài hát hiện tại
     const currentTime = audioPlayer.currentTime * 1000;
     while (currentLyricIndex < lyrics.length - 1 && 
            lyrics[currentLyricIndex + 1].time <= currentTime) {
         currentLyricIndex++;
     }
 });
 
 // Thêm hiệu ứng màu
 function animateColor() {
     const hue = (Date.now() / 50) % 360;
     const elements = document.querySelectorAll('.cloud h2, .cloud h2::before, .cloud h2::after');
     elements.forEach(el => {
         if (el) {
             el.style.filter = `hue-rotate(${hue}deg)`;
         }
     });
     requestAnimationFrame(animateColor);
 }
 
 animateColor();
 
 window.onload = function() {
     document.getElementById('audioPlayer').play();
 }