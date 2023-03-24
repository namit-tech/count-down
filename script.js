const endDate = "19 March 2023 10:53 PM"
const inputs = document.querySelectorAll("input")
document.getElementById("end-date").innerHTML = endDate;

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if (diff < 0) {
        return
    }
    // convert in days
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    // convert into hours
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    // convert in minutes
    inputs[2].value = (Math.floor(diff / 60) % 60);
    // convert in sec
    inputs[3].value = (Math.floor(diff % 60));
}
clock();
setInterval(() => {
    clock()
}, 1000);



// 1 day = 24 hours
// 1 hr = 60 min
// 60 min = 3600 sec