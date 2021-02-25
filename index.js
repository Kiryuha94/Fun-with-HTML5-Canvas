document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas'),
    SIZE = {
      maxSize: 80,
      minSize: 5,
    },
    ctx = canvas.getContext('2d');
  let isMouseDown = false,
    colorPiker = 0,
    isMaxSize = false;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 10;

  const draw = (e) => {
    if (!isMouseDown) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${colorPiker}, 100%, 50%)`;
    ctx.moveTo(e.clientX, e.clientY);
    ctx.stroke();
    colorPiker++;
    if (ctx.lineWidth > SIZE.maxSize || ctx.lineWidth < SIZE.minSize) isMaxSize = !isMaxSize;
    isMaxSize ? ctx.lineWidth-- : ctx.lineWidth++;
  };

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', () => (isMouseDown = true));
  canvas.addEventListener('mouseup', () => {
    isMouseDown = false;
    ctx.beginPath();
  });
});
