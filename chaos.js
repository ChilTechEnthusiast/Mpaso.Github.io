// Chaos button movements
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 80);
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  });
  btn.addEventListener('click', () => {
    // Drop animation then disappear
    btn.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    btn.style.transform = "translateY(300px) rotate(20deg)";
    btn.style.opacity = 0;
    setTimeout(() => btn.remove(), 700);
  });
});
