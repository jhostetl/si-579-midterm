const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here


// Write your code here

showRhymesButton.addEventListener('click', () => {
	rhymesOutput.textContent = "";
	getRhymes(wordInput.value, (result) => {
		if (result != ""){
	        for(const key in result) {
	            const word = result[key]["word"];
	            const listItem = document.createElement('li');
	            listItem.textContent = word;
	            listItem.classList.add('list-group-item');
	            rhymesOutput.append(listItem);
	        }
	    }else{
	    	rhymesOutput.textContent = "There are no rhymes :( ";
	    }    
	});

});


clearButton.addEventListener('click', () => {
	rhymesOutput.textContent = "";
	wordInput.value = "";

});