const id = document.getElementById('id');
const quote = document.getElementById('quote');
async function quotes() {
    try {
        const request = await fetch('https://api.adviceslip.com/advice');
    const response = await request.json();
     id.textContent = response.slip.id;
     quote.textContent = response.slip.advice;
    console.log(response);
    } catch (error) {
        console.log("error message is", error);};
};
quotes();
function roll(){   
quotes();
}