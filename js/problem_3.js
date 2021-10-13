const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here


function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}


let count = 0;

clickCountButton.addEventListener('click', () => {
	count++;
	clickCountButton.textContent = "You clicked the button " + count  + " time" + addS(count);
});