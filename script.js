const sidebar = document.getElementById('sidebar');
const addTopic = document.getElementById('add-topic');
const topicsSection = document.getElementById('topics-section');
const writeNoteBG = document.getElementById('writeNoteBackground');

function cloneTopic(title) {
    const clone = document.querySelector('#topic-template').content.cloneNode(true);
    clone.querySelector(".topic-title").innerHTML = title;
    return clone;
}

// Add topic button pressed
const popup = document.getElementById("topicNameContainer");
const inputTopicBox = document.getElementById('inputTopicName');
addTopic.addEventListener('click', () => {
    popup.style.display = "flex";
    inputTopicBox.focus();

})

// Cancel popup functions
const cancelPopup = document.getElementById("cancel-popup");
cancelPopup.addEventListener('click', () => {
    popup.style.display = "none";
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        popup.style.display = "none";
        writeNoteBG.style.display = 'none';
    }
})

// Submit topic name
const button = document.getElementById("submitTopicName");
button.addEventListener("click", function(){
    appendTopic();
})

document.addEventListener('keydown', (event) => {
    if ((event.keyCode === 13) && (popup.style.display === "flex")) {
        appendTopic();
        document.getElementById("inputTopicName").value = "";
    }
})

// Write a note
const writeNoteButton = document.getElementById('createNote');
writeNoteButton.addEventListener('click', () => {
    writeNoteBG.style.display = 'flex';
}) 

// Cancel writing note
const cancelNote = document.getElementById('cancelWrite');
cancelNote.addEventListener('click', () => {
    writeNoteBG.style.display = 'none';
})

// Tab button add indentation when writing a note
const writeNote = document.getElementById('writeNote');
writeNote.addEventListener('keydown', (event) => {
    if (event.keyCode === 9) {
        event.preventDefault();
        const start = writeNote.selectionStart;
        const end = writeNote.selectionEnd;

        writeNote.setRangeText('\t', start, end, 'end');
    }
})

// Submit note
const main = document.getElementById('main');
const submitWrite = document.getElementById('submitWrite');
submitWrite.addEventListener('click', () => {
    appendNote();
})

// Helper Functions
function appendTopic(){
    const inputName = document.getElementById("inputTopicName").value;
    topicsSection.append(cloneTopic(inputName));
    
    popup.style.display = "none";
    refreshCards();
}

function appendNote() {
    const clone = document.getElementById("post").content.cloneNode(true);
    main.append(clone)
}

function refreshCards() {
    const cardList = document.querySelectorAll(".topic-card")
    cardList.forEach(card => {
            card.addEventListener("click", () => {
                    cardList.forEach(x => {
                            x.classList.remove("card-clicked");
                            const sibling = x.previousElementSibling;
                
                            sibling.style.color = "grey";
                        });
                        card.classList.add("card-clicked");
                        card.previousElementSibling.style.color = "white";
                    })
                })
}