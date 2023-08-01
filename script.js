const sidebar = document.getElementById('sidebar');
const addTopic = document.getElementById('add-topic');
const topicsSection = document.getElementById('topics-section');

function cloneTopic(title) {
    const clone = document.querySelector('#topic-template').content.cloneNode(true);
    clone.querySelector(".topic-title").innerHTML = title;
    return clone;
}

const popup = document.getElementById("topicNameContainer");
addTopic.addEventListener('click', () => {
    popup.style.display = "flex";
})

const button = document.getElementById("submitTopicName");
button.addEventListener("click", function(){
    const inputName = document.getElementById("inputTopicName").value;
    topicsSection.append(cloneTopic(inputName));
    
    popup.style.display = "none";
    refreshCards();
})

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