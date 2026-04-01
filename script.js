document.addEventListener('DOMContentLoaded', () => {
    // Generate stars
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration and delay
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }

    // Handle card opening
    const openBtn = document.getElementById('openBtn');
    const card = document.getElementById('birthdayCard');
    const front = document.querySelector('.front');
    const inside = document.querySelector('.inside');

    openBtn.addEventListener('click', () => {
        // Add flip animation to card
        card.style.transform = 'scale(0.95) rotateY(10deg)';
        
        setTimeout(() => {
            front.classList.add('hidden');
            inside.classList.remove('hidden');
            
            // Allow display block to apply before changing opacity
            setTimeout(() => {
                inside.style.opacity = '1';
                card.style.transform = 'scale(1) rotateY(0deg)';
                createConfetti();
            }, 50);
            
        }, 300);
    });

    // Simple purple confetti effect
    function createConfetti() {
        const colors = ['#7b2cbf', '#9d4edd', '#e0aaff', '#ffffff'];
        for(let i = 0; i < 70; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.top = '-10px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.opacity = Math.random();
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.zIndex = '3';
            confetti.style.pointerEvents = 'none';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            
            document.body.appendChild(confetti);

            const animation = confetti.animate([
                { transform: `translate3d(0,0,0) rotate(0deg)`, opacity: 1 },
                { transform: `translate3d(${Math.random()*400 - 200}px, ${window.innerHeight}px, 0) rotate(${Math.random()*720}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 1500,
                easing: 'cubic-bezier(.37,0,.63,1)'
            });

            animation.onfinish = () => confetti.remove();
        }
    }
});
