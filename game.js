   const input = document.getElementById("input");
        const button = document.getElementById("button");
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        
        button.onclick = guessFeedback;
        input.onkeydown = (e) => {
            if (e.key == "Enter") {
                guessFeedback();
            }
        }

        function guessFeedback() {
            const list = document.getElementById("list");
            const listItem = document.createElement("li");

            if (input.value == randomNumber && input.value != "") {
                listItem.innerHTML = `Du gjettet ${input.value}, det er riktig 🎉`;
                list.prepend(listItem);
            } else if (input.value > randomNumber && input.value != "") {
                listItem.innerHTML = `Du gjettet ${input.value}, det er for høyt`;
                list.prepend(listItem);
            } else if (input.value < randomNumber && input.value != "") {
                listItem.innerHTML = `Du gjettet ${input.value}, det er for lavt`;
                list.prepend(listItem);
            }

            input.value = null;
        }
