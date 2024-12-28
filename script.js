function calculate() {
  const vo = parseFloat(document.getElementById("vo").value) || 0;
  const da = parseFloat(document.getElementById("da").value) || 0;
  const vi = parseFloat(document.getElementById("vi").value) || 0;
  const fans = parseFloat(document.getElementById("fans").value) || 0;

  // 評価値の計算
  const score = vo + da + vi + fans * 0.01;
  document.getElementById("score").innerText = score.toFixed(1);

  // ランクの判定
  let rank = "";
  if (score >= 18000) rank = "SS+";
  else if (score >= 16000) rank = "SS";
  else if (score >= 14500) rank = "S+";
  else if (score >= 13000) rank = "S";
  else if (score >= 11500) rank = "A+";
  else if (score >= 10000) rank = "A";
  else if (score >= 8000) rank = "B+";
  else if (score >= 6000) rank = "B";
  else if (score >= 4500) rank = "C+";
  else if (score >= 3000) rank = "C";
  else rank = "ランク外";

  document.getElementById("rank").innerText = rank;
}
