/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function randomColor() {

    let colorType = "rgb("
    let color = "";
    for (let i = 0; i < 3; i++) {
        color += ((Math.random() * 256 | 0));
        if (i < 2) {
            color += ",";
        }
    }

    document.body.style.background = colorType + color + ")";
}

document.getElementById("run").addEventListener("click", randomColor);
