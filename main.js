// Shared mobile-nav behavior for the site header (partials/header.html).
// Loaded by every page via <script src="main.js"></script>.

function toggleMobileNav() {
    const panel = document.getElementById('mobile-nav-panel');
    const icon = document.getElementById('mobile-nav-icon');
    const opening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden');
    icon.textContent = opening ? 'close' : 'menu';
}

let activeMobileNavSection = null;
function toggleMobileSection(key) {
    const section = document.getElementById('mobile-section-' + key);
    const arrow = document.getElementById('mobile-arrow-' + key);

    if (activeMobileNavSection === key) {
        section.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
        activeMobileNavSection = null;
        return;
    }

    if (activeMobileNavSection) {
        document.getElementById('mobile-section-' + activeMobileNavSection).classList.add('hidden');
        document.getElementById('mobile-arrow-' + activeMobileNavSection).style.transform = 'rotate(0deg)';
    }

    section.classList.remove('hidden');
    arrow.style.transform = 'rotate(180deg)';
    activeMobileNavSection = key;
}

// Close the mobile nav panel whenever a link inside it is tapped. Needed
// because same-page anchor links (e.g. About Us's "Our Story") don't
// trigger a full navigation, so without this the panel would stay open
// on top of the page after it scrolls to the section underneath.
document.addEventListener('DOMContentLoaded', () => {
    const panel = document.getElementById('mobile-nav-panel');
    if (!panel) return;
    panel.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            panel.classList.add('hidden');
            const icon = document.getElementById('mobile-nav-icon');
            if (icon) icon.textContent = 'menu';
        }
    });
});

// Slow auto-scroll for horizontally-scrolling card carousels (.auto-scroll-x).
// Loops back to the start once it reaches the end. On breakpoints where a
// carousel becomes a static grid (no overflow), incrementing scrollLeft is
// simply a no-op, so this is safe to run unconditionally on every element.
//
// Two pause behaviors, picked per element:
//   - Default: pause only on an actual drag/scroll gesture (mousedown/touch/
//     wheel), then resume a couple seconds after it ends — merely hovering
//     the cursor over the carousel while reading the page shouldn't stop it.
//   - .auto-scroll-x-hover-pause: pause immediately on hover (mouse) or
//     touch, freely allow manual scrolling while paused, and resume the
//     instant the visitor stops hovering/touching it — for carousels like
//     Testimonials where you want to actually read/scroll one on purpose.
document.addEventListener('DOMContentLoaded', () => {
    const SPEED_PX_PER_FRAME = 0.6;
    const RESUME_DELAY_MS = 2500;

    document.querySelectorAll('.auto-scroll-x').forEach((el) => {
        let paused = false;
        let resumeTimer = null;
        const hoverPause = el.classList.contains('auto-scroll-x-hover-pause');

        const pause = () => {
            paused = true;
            if (resumeTimer) clearTimeout(resumeTimer);
        };
        const resumeNow = () => {
            if (resumeTimer) clearTimeout(resumeTimer);
            paused = false;
        };
        const resumeSoon = () => {
            if (resumeTimer) clearTimeout(resumeTimer);
            resumeTimer = setTimeout(() => { paused = false; }, RESUME_DELAY_MS);
        };

        if (hoverPause) {
            el.addEventListener('mouseenter', pause);
            el.addEventListener('mouseleave', resumeNow);
            el.addEventListener('touchstart', pause, { passive: true });
            el.addEventListener('touchend', resumeNow, { passive: true });
        } else {
            el.addEventListener('touchstart', pause, { passive: true });
            el.addEventListener('touchend', resumeSoon, { passive: true });
            el.addEventListener('mousedown', pause);
            el.addEventListener('mouseup', resumeSoon);
            el.addEventListener('wheel', () => { pause(); resumeSoon(); }, { passive: true });
        }

        function step() {
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (!paused && maxScroll > 0) {
                if (el.scrollLeft >= maxScroll - 1) {
                    el.scrollLeft = 0;
                } else {
                    el.scrollLeft += SPEED_PX_PER_FRAME;
                }
            }
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
});

// Shared "Our Leadership" founder cards. Single source of truth: edit this
// data/markup here and every page that calls renderFounderCards() updates.
const FOUNDER_CARDS = [
    { alt: 'Dev Piyush Rakhecha', img: 'Dev.png', name: 'Dev Piyush Rakhecha', role: 'Co-Founder, Head of Wealth Management', education: 'MBA, IIM Raipur' },
    { alt: 'Nidhhi', img: 'Nidhhi.png', name: 'Nidhhi Rakhecha', role: 'Co-Founder, Head of Investment Banking', education: 'MBA, IIM Calcutta' },
    { alt: 'Nitish', img: 'Nitish.png', name: 'Nitish Rakhecha', role: 'Wealth Management Specialist, Unlisted Shares &amp; HNI Advisory', education: 'MBA, NMIMS Mumbai' },
    { alt: 'Megha', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnuFZXYIY7-QqhRA7Ihuxw2pqCYca9Oqm6KtpqE9Mk1RQbysOuPSpSOc10HC5u7byXMrxFrZQ0penwMEFZf99F_Cuo7hsreMn3EqojDcBDcby-ZAGTNQjn4S2xWmJWVNU23kUDKhBnoWn5wjmaAdS7-V2s1u3tlFly6R4kYd-vCdV8WKLeCiK-s5Kf7LH_Juoo-gEHGNJoCB3320t4euzjqB9LJ-A9_cdysDuuDLHRKJwwYd938zIlyw', name: 'Megha Rakhecha', role: 'Head of Insurance', education: 'Lady Shriram College, Delhi' }
];

function founderCardHTML(f) {
    return `
<div class="group cursor-pointer rounded-2xl transition-all duration-300 md:hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10 relative shrink-0 w-[85vw] md:w-auto aspect-[4/5] overflow-hidden bg-surface-variant snap-center" onclick="window.location.href='Founder%20Detail%20Page.html'"><div class="relative w-full h-full">
<img alt="${f.alt}" class="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110" src="${f.img}">
<div class="absolute inset-x-0 bottom-0 px-3 pt-2 pb-1.5 group-hover:pb-3 transition-[padding] duration-500 bg-gradient-to-t from-[#1E63A0] from-0% via-[#1E63A0]/90 via-70% to-transparent to-100%">
<h4 class="font-headline-md font-semibold text-sm md:text-base text-white leading-snug truncate pr-10">${f.name}</h4>
<div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
<div class="overflow-hidden">
<p class="text-white/80 text-[10px] md:text-xs uppercase tracking-wide mt-1">${f.role}</p>
<p class="text-white/60 text-[10px] md:text-xs italic mt-1 pr-32">${f.education}</p>
</div>
</div>
</div>
<div class="absolute bottom-0 right-0 z-10 flex items-center gap-1.5 bg-primary group-hover:bg-white rounded-tl-2xl px-2 py-1.5 group-hover:px-4 group-hover:py-2 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap">
<span class="max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300 ease-in-out text-primary font-cta-text text-xs md:text-sm">Read More</span>
<span class="material-symbols-outlined text-white group-hover:text-primary text-sm md:text-base transition-colors duration-300">arrow_forward</span>
</div>
</div></div>`;
}

function renderFounderCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = FOUNDER_CARDS.map(founderCardHTML).join('');
}

// Shared "Our Mission" / "Our Vision" block. Single source of truth: edit
// this here and every page that calls renderMissionVision() updates.
function missionVisionHTML() {
    return `
<!-- Mission -->
<div class="flex flex-col md:flex-row items-center gap-16">
<div class="flex-1 space-y-6"><h2 class="font-headline-md text-headline-md uppercase tracking-widest text-primary mb-4">Our Mission</h2><p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">To simplify complex wealth management by delivering research-driven asset allocation, proactive portfolio adaptation, and transparent client education. We commit to maximizing risk-adjusted returns while fostering a resilient community of informed, financially independent investors.</p></div>
<div class="flex-1 w-full aspect-[1.5] relative rounded-2xl overflow-hidden shadow-xl">
<img alt="Premium financial district skyline at dusk representing the firm's vision and global perspective in wealth management." class="w-full h-full object-cover" src="Mission.jpg.avif">
</div>
</div>
<!-- Vision -->
<div class="flex flex-col md:flex-row-reverse items-center gap-16">
<div class="flex-1 space-y-6"><h2 class="font-headline-md text-headline-md uppercase tracking-widest text-primary mb-4">Our Vision</h2><p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">To be the most trusted and preferred financial growth partner, empowering families, entrepreneurs, and professionals to achieve lifelong financial security through data-backed, tailored wealth strategies.</p></div>
<div class="flex-1 w-full aspect-[1.5] relative rounded-2xl overflow-hidden shadow-xl">
<img alt="Close-up of a professional advisor in a high-touch consultation with a client in a bright, modern office." class="w-full h-full object-cover" src="Vision.jpg.avif">
</div>
</div>`;
}

function renderMissionVision(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = missionVisionHTML();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-founder-cards]').forEach(el => renderFounderCards(el.id));
    document.querySelectorAll('[data-mission-vision]').forEach(el => renderMissionVision(el.id));
});

// Arrow buttons for the (manually, not auto-) scrollable founder-card
// carousels on mobile. Each click scrolls by roughly one card width.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.founder-scroll-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.dataset.scrollTarget);
            if (!target) return;
            const dir = Number(btn.dataset.scrollDir) || 1;
            target.scrollBy({ left: dir * target.clientWidth * 0.85, behavior: 'smooth' });
        });
    });
});

// Reveal-on-scroll: any element with class "hero-card-anim" (see the
// Home Page "Our Businesses" cards) fades/slides in the first time it
// enters the viewport, rather than animating immediately on page load
// where it'd likely be missed if the element starts below the fold.
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.hero-card-anim');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    targets.forEach(el => observer.observe(el));
});
