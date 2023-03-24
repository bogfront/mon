function initToggler () {
    const toggler = document.getElementById('toggle-theme');
    const body = document.querySelector('body');
    const lightClass = 'light';

    toggler.addEventListener('click', () => {
        if (body.classList.contains(lightClass)) {
            body.classList.remove(lightClass);
        } else {
            body.classList.add(lightClass);
        }
    })
}

function initDropdowns () {
    const activators = document.querySelectorAll('.header__dropdown');

    for (let activator of activators) {
        activator.addEventListener('click', (e) => {
            if (activator.classList.contains('header__dropdown_open')) {
                activator.classList.remove('header__dropdown_open');
            } else {
                activator.classList.add('header__dropdown_open');
            }
        })
    }
}

initToggler();
initDropdowns();
