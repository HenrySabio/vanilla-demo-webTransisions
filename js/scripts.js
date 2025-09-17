const headers = document.querySelectorAll('h2, h3');
const imageWrappers = document.querySelectorAll('div.image');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.1) {
            console.log('in view', entry.target);
            entry.target.classList.add('in-view')
        } else {
            console.log('out of view', entry.target);
            entry.target.classList.remove('in-view')
        }
    });
}, {
    threshold: [0, 0.1, 1]
});

headers.forEach(header => {
    observer.observe(header);
});

imageWrappers.forEach(wrapper => {
    observer.observe(wrapper);
});