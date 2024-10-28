let q = document.getElementById("adv");
let qid = document.getElementById("id");
getAdvice()
document.getElementById("gen").addEventListener("click", () => getAdvice());

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        let slip = json.slip;
        qid.textContent = `${slip.id}`;
        q.textContent = `${slip.advice}`;
        console.log(slip);
    } catch (error) {
        console.error(error.message);
    }
}
