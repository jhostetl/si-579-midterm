const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

messageInput.addEventListener('input', () => {
	let messageLength = messageInput.value.length;
	if (messageLength <= MAX_CHARACTERS){

	    if(messageInput.classList.contains('is-invalid')) {
	        messageInput.classList.remove('is-invalid');
	        messageInput.classList.add('is-valid');
	    }

	    if(messageFeedback.classList.contains('invalid-feedback')) {
	        messageFeedback.classList.remove('invalid-feedback');
	        messageFeedback.classList.add('valid-feedback');
	    }

        messageFeedback.textContent = MAX_CHARACTERS - messageLength + " character" + addS(MAX_CHARACTERS - messageLength) + " left";
	}else {
	    if(messageInput.classList.contains('is-valid')) {
	        messageInput.classList.remove('is-valid');
	        messageInput.classList.add('is-invalid');
	    }

	    if(messageFeedback.classList.contains('valid-feedback')) {
	        messageFeedback.classList.remove('valid-feedback');
	        messageFeedback.classList.add('invalid-feedback');
	    }

		messageFeedback.textContent = messageLength - MAX_CHARACTERS + " character" + addS(messageLength - MAX_CHARACTERS) + " too long";
	}

});