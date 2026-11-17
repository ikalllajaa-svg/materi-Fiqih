const materi = {
  thaharah: {
    title: "Thaharah (Bersuci)",
    content: `
      <p>Thaharah adalah bersuci dari hadas dan najis
      sesuai ketentuan syariat Islam.</p>

      <h3>Macam-macam Thaharah</h3>
      <ul>
        <li>Wudhu: bersuci untuk menghilangkan hadas kecil.</li>
        <li>Mandi wajib: bersuci untuk menghilangkan hadas besar.</li>
        <li>Tayamum: bersuci menggunakan debu yang suci
        dengan ketentuan tertentu.</li>
        <li>Menghilangkan najis dari badan, pakaian,
        dan tempat.</li>
      </ul>

      <h3>Tujuan Thaharah</h3>
      <p>Menjaga kebersihan dan memenuhi syarat
      untuk melaksanakan ibadah tertentu.</p>
    `
  },

  shalat: {
    title: "Shalat",
    content: `
      <p>Shalat adalah ibadah yang diawali dengan
      takbiratul ihram dan diakhiri dengan salam.</p>

      <h3>Syarat Sah Shalat</h3>
      <ul>
        <li>Suci dari hadas dan najis.</li>
        <li>Menutup aurat.</li>
        <li>Masuk waktu shalat.</li>
        <li>Menghadap kiblat.</li>
      </ul>

      <h3>Rukun Shalat</h3>
      <ul>
        <li>Niat.</li>
        <li>Berdiri bagi yang mampu.</li>
        <li>Takbiratul ihram.</li>
        <li>Membaca Al-Fatihah.</li>
        <li>Rukuk dan tuma'ninah.</li>
        <li>I'tidal dan tuma'ninah.</li>
        <li>Sujud dan tuma'ninah.</li>
        <li>Duduk di antara dua sujud.</li>
        <li>Duduk tasyahud akhir.</li>
        <li>Membaca tasyahud akhir.</li>
        <li>Membaca shalawat Nabi.</li>
        <li>Salam pertama.</li>
        <li>Tertib.</li>
      </ul>
    `
  },

  puasa: {
    title: "Puasa",
    content: `
      <p>Puasa adalah menahan diri dari hal-hal
      yang membatalkan puasa sejak terbit fajar
      hingga terbenam matahari disertai niat.</p>

      <h3>Syarat Wajib Puasa</h3>
      <ul>
        <li>Islam.</li>
        <li>Baligh.</li>
        <li>Berakal.</li>
        <li>Mampu berpuasa.</li>
      </ul>

      <h3>Hal yang Membatalkan Puasa</h3>
      <ul>
        <li>Makan dan minum dengan sengaja.</li>
        <li>Muntah dengan sengaja.</li>
        <li>Haid dan nifas.</li>
      </ul>
    `
  },

  zakat: {
    title: "Zakat",
    content: `
      <p>Zakat adalah mengeluarkan sebagian harta
      tertentu untuk diberikan kepada golongan
      yang berhak menerimanya.</p>

      <h3>Jenis Zakat</h3>
      <ul>
        <li>Zakat fitrah.</li>
        <li>Zakat mal (harta).</li>
      </ul>

      <h3>Delapan Golongan Penerima Zakat</h3>
      <ul>
        <li>Fakir.</li>
        <li>Miskin.</li>
        <li>Amil.</li>
        <li>Mualaf.</li>
        <li>Riqab.</li>
        <li>Gharim.</li>
        <li>Fisabilillah.</li>
        <li>Ibnu sabil.</li>
      </ul>
    `
  },

  haji: {
    title: "Haji dan Umrah",
    content: `
      <p>Haji adalah ibadah ke Baitullah pada waktu
      tertentu dengan memenuhi ketentuan tertentu.</p>

      <h3>Rukun Haji</h3>
      <ul>
        <li>Ihram.</li>
        <li>Wukuf di Arafah.</li>
        <li>Tawaf ifadah.</li>
        <li>Sa'i.</li>
        <li>Tahallul.</li>
        <li>Tertib.</li>
      </ul>

      <h3>Umrah</h3>
      <p>Umrah adalah berkunjung ke Baitullah
      untuk melaksanakan ibadah dengan ketentuan
      dan tata cara tertentu.</p>
    `
  },

  muamalah: {
    title: "Muamalah",
    content: `
      <p>Muamalah adalah aturan Islam yang mengatur
      hubungan antarmanusia dalam urusan kehidupan,
      termasuk kegiatan ekonomi.</p>

      <h3>Contoh Muamalah</h3>
      <ul>
        <li>Jual beli.</li>
        <li>Sewa menyewa.</li>
        <li>Utang piutang.</li>
        <li>Kerja sama usaha.</li>
      </ul>

      <h3>Prinsip Muamalah</h3>
      <p>Transaksi harus dilakukan dengan kerelaan,
      kejujuran, keadilan, dan menghindari riba
      serta penipuan.</p>
    `
  }
};

// PENCARIAN MATERI

const search = document.getElementById("search");
const cards = document.querySelectorAll(".materi-card");
const emptySearch = document.getElementById("emptySearch");

search.addEventListener("input", function () {
  const keyword = search.value.toLowerCase();
  let found = 0;

  cards.forEach(function(card) {
    const content = card.textContent.toLowerCase();
    const match = content.includes(keyword);

    card.style.display = match ? "block" : "none";

    if (match) found++;
  });

  emptySearch.hidden = found !== 0;
});

// DETAIL MATERI

const detailSection =
  document.getElementById("detailSection");

const detailTitle =
  document.getElementById("detailTitle");

const detailText =
  document.getElementById("detailText");

cards.forEach(function(card) {
  card.querySelector(".detail-btn")
    .addEventListener("click", function() {
      const id = card.dataset.id;
      const selected = materi[id];

      detailTitle.textContent = selected.title;
      detailText.innerHTML = selected.content;

      detailSection.hidden = false;
      detailSection.scrollIntoView({
        behavior: "smooth"
      });
    });
});

document.getElementById("closeDetail")
  .addEventListener("click", function() {
    detailSection.hidden = true;
  });

// QUIZ

const quizData = [
  {
    question: "Apa pengertian Thaharah?",
    answers: [
      "Bersuci",
      "Berpuasa",
      "Bersedekah",
      "Berzakat"
    ],
    correct: 0
  },
  {
    question: "Apa yang digunakan untuk wudhu?",
    answers: [
      "Minyak",
      "Air suci dan menyucikan",
      "Air kopi",
      "Air berwarna"
    ],
    correct: 1
  },
  {
    question: "Berapa jumlah shalat wajib dalam sehari?",
    answers: ["3", "4", "5", "6"],
    correct: 2
  },
  {
    question: "Kapan waktu berbuka puasa?",
    answers: [
      "Saat terbit fajar",
      "Saat tengah hari",
      "Saat matahari terbenam",
      "Saat tengah malam"
    ],
    correct: 2
  },
  {
    question: "Siapa yang berhak menerima zakat?",
    answers: [
      "Orang kaya saja",
      "Delapan golongan penerima zakat",
      "Semua pedagang",
      "Hanya keluarga"
    ],
    correct: 1
  }
];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const numberEl = document.getElementById("questionNumber");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  answered = false;

  const q = quizData[current];

  questionEl.textContent = q.question;

  numberEl.textContent =
    `Soal ${current + 1} dari ${quizData.length}`;

  answersEl.innerHTML = "";
  feedback.textContent = "";
  nextBtn.hidden = true;

  q.answers.forEach(function(answer, index) {
    const button = document.createElement("button");

    button.textContent = answer;
    button.className = "answer-btn";

    button.addEventListener("click", function() {
      checkAnswer(index);
    });

    answersEl.appendChild(button);
  });
}

function checkAnswer(index) {
  if (answered) return;

  answered = true;

  const q = quizData[current];
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.disabled = true;
  });

  if (index === q.correct) {
    score++;
    feedback.textContent = "Benar! Jawaban kamu tepat.";
    feedback.style.color = "green";
  } else {
    feedback.textContent =
      "Kurang tepat. Jawaban: " + q.answers[q.correct];

    feedback.style.color = "#b8323c";
  }

  nextBtn.hidden = false;

  nextBtn.textContent =
    current === quizData.length - 1
      ? "Lihat Hasil"
      : "Soal Berikutnya";
}

function showResult() {
  questionEl.textContent = "Quiz Selesai!";
  answersEl.innerHTML = "";

  feedback.textContent =
    `Nilai kamu: ${score} dari ${quizData.length}`;

  feedback.style.color = "#174c3b";

  numberEl.textContent = "Terima kasih sudah belajar!";

  nextBtn.hidden = false;
  nextBtn.textContent = "Ulangi Quiz";
  nextBtn.onclick = restartQuiz;
}

function restartQuiz() {
  current = 0;
  score = 0;
  nextBtn.onclick = null;
  showQuestion();
}

nextBtn.addEventListener("click", function() {
  if (current < quizData.length - 1) {
    current++;
    showQuestion();
  } else if (answered) {
    showResult();
  }
});

showQuestion();
