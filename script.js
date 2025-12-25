const hero=document.querySelector(".hero-bio");

hero.addEventListener("mousemove",e=>{
    const x=e.clientX;
    const y=e.clientY;
    hero.style.background=`radial-gradient(circle at ${x}px ${y}px,rgba(30,215,96,0.15),transparent 40%)`;
});

