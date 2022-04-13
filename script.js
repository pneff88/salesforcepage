const dropdownitems = document.querySelectorAll('.dropdown');
const main1 = document.getElementById("main1");
const ukrainebar = document.getElementById('ukrainebar');
const sf = document.getElementById('sf');

function goDark() {
    main1.classList.add('dark');
    ukrainebar.classList.add('dark')
}
function brighten() {
    main1.classList.remove('dark');
    ukrainebar.classList.remove('dark');
}

dropdownitems.forEach(
    function(currentValue) {
        currentValue.addEventListener('mouseover', function () {
            goDark();
        });
        currentValue.addEventListener('mouseleave', function () {
            brighten();
        })
    }
)
