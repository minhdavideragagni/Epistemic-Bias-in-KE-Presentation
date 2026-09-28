(function () {
  const dot = document.getElementById('bias-dot');

  function moveBiasDot(slide) {
    if (!slide || !dot) return;
    const x = slide.dataset.dotX || 88;
    const y = slide.dataset.dotY || 82;
    const scale = slide.dataset.dotScale || 1;
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    dot.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  if (typeof Reveal === 'undefined') {
    document.body.classList.add('reveal-missing');
    return;
  }

  Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: false,
    transition: 'fade',
    backgroundTransition: 'fade',
    transitionSpeed: 'default',
    autoAnimateDuration: 0.65,
    autoAnimateEasing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    width: 1280,
    height: 720,
    margin: 0,
    minScale: 0.2,
    maxScale: 2.0,
    plugins: [ RevealNotes ]
  });

  Reveal.on('ready', event => moveBiasDot(event.currentSlide));
  Reveal.on('slidechanged', event => moveBiasDot(event.currentSlide));
})();
