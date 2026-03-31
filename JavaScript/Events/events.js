let inp = document.querySelector("input");

inp.customName = "";
console.dir(inp)
inp.addEventListener("input", function (e) {
    if (e.data !== null) {
        this.customName += e.data;
    } else {
        this.customName = this.customName.slice(0, -1);
    }

    if (e.data === "'") {
        console.log(this.customName);
    }
});