/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {
    console.time("t");
    getData().then(
        res => {console.log(res); console.timeEnd("t");},
        rej => console.error(rej)
    )

});

async function getData() {
    try {
        let articles = await window.lib.getPosts();
        for (let i=0; i<articles.length; i++){
            articles[i].comments = await window.lib.getComments(articles[i].id);
        }
        return articles;
    } catch (err) {
        return err;
    }
}