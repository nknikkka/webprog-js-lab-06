const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName;
    },

    updatePlayTime(hours) {
        this.playTime += hours;
    },

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

function displayProfileInfo() {
    const outputDiv1 = document.getElementById('outputDiv1'); 

    outputDiv1.innerHTML += profile.getInfo() + "<br>";
    profile.changeUsername("Marco");
    outputDiv1.innerHTML += profile.getInfo() + "<br>";
    profile.updatePlayTime(20);
    outputDiv1.innerHTML += profile.getInfo() + "<br>";
}

displayProfileInfo();
