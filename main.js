// Email (assembled in JS to avoid scraping)
(function () {
	var u = 'arimadyasantosa';
	var d = 'gmail.com';
	var full = u + '@' + d;
	var el = document.getElementById('email-value');
	var link = document.getElementById('email-link');
	if (el) el.textContent = full;
	if (link) link.href = 'mailto:' + full;
})();

// Theme toggle
(function () {
	var toggle = document.getElementById('themeToggle');
	var html = document.documentElement;
	var saved = null;
	try {
		saved = localStorage.getItem('theme');
	} catch (e) {}
	if (saved) {
		html.setAttribute('data-theme', saved);
	} else if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: light)').matches
	) {
		html.setAttribute('data-theme', 'light');
	}
	toggle.addEventListener('click', function () {
		var current = html.getAttribute('data-theme');
		var next = current === 'dark' ? 'light' : 'dark';
		html.setAttribute('data-theme', next);
		try {
			localStorage.setItem('theme', next);
		} catch (e) {}
	});
})();

// Scroll reveal
var reveals = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry, i) {
			if (entry.isIntersecting) {
				setTimeout(function () {
					entry.target.classList.add('visible');
				}, i * 100);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
);
reveals.forEach(function (el) {
	observer.observe(el);
});

// Cursor glow
var glow = document.getElementById('cursorGlow');
var mouseX = 0,
	mouseY = 0,
	glowX = 0,
	glowY = 0;
document.addEventListener('mousemove', function (e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
});
function animateGlow() {
	glowX += (mouseX - glowX) * 0.08;
	glowY += (mouseY - glowY) * 0.08;
	glow.style.left = glowX + 'px';
	glow.style.top = glowY + 'px';
	requestAnimationFrame(animateGlow);
}
animateGlow();

// Nav scroll
window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.style.borderBottomColor =
		window.scrollY > 50 ? 'rgba(200,255,0,0.1)' : 'var(--border)';
});

// Code fade in
var codeBody = document.querySelector('.code-body');
if (codeBody) {
	codeBody.style.opacity = '0';
	setTimeout(function () {
		codeBody.style.transition = 'opacity 0.5s';
		codeBody.style.opacity = '1';
	}, 800);
}
