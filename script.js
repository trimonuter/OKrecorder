const sidebar = document.getElementById('sidebar');
const addTopic = document.getElementById('add-topic');

function cloneTopic() {
    const clone = document.querySelector('#topic-template').content.cloneNode(true);
    return clone;
}

addTopic.addEventListener('click', function() {
    sidebar.append(cloneTopic());
    const cardList = document.querySelectorAll(".topic-card")
    cardList.forEach(card => {
        card.addEventListener("click", () => {
            cardList.forEach(x => x.classList.remove("card-clicked"));
            card.classList.add("card-clicked");
        })
    })
})
