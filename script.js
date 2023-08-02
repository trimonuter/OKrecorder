const sidebar = document.getElementById('sidebar');
const addTopic = document.getElementById('add-topic');
const topicsSection = document.getElementById('topics-section');

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
    }
})

// Submit topic name
const button = document.getElementById("submitTopicName");
button.addEventListener("click", function(){
    appendTopic();
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        appendTopic();
    }
})

// Helper functions
function appendTopic(){
    const inputName = document.getElementById("inputTopicName").value;
    topicsSection.append(cloneTopic(inputName));
    
    popup.style.display = "none";
    refreshCards();
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