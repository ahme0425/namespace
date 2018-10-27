 var AHME0425 = {
    init: function () {
        let stepone = document.createElement("div");
        stepone.className = "box";
        stepone.textContent = "AhmE0425";
        document.getElementById("boxes").appendChild(stepone);

        stepone.addEventListener("click", function () {
            stepone.style.borderColor = "#325152";
            stepone.style.backgroundColor = "#900938";
        });
     
        stepone.addEventListener("mouseover", function () {
            stepone.classList.toggle("highlight");
        });

        stepone.addEventListener("mouseout", function () {
            stepone.classList.toggle("highlight");
            stepone.target.removeAttribute("style");
        });
    }
};
    
