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
