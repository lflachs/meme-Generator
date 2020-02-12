function handleInput(event, destination) {
    const userInput = event.target.value;
    const paragraph = document.querySelector(destination);
    paragraph.innerHTML = userInput;

}
function handleUpload(event) {
    const input = event.target.files[0];
    const output = document.querySelector('.meme-image');
    output.src = URL.createObjectURL(input)
};

function handleSave() {
    const meme = document.querySelector('.meme');
    const options = {
        allowTaint: true
    };

    html2canvas(meme, options).then(function (canvas) {
        console.log(canvas);
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'somefilename.jpg';
        a.click();
    });
}
// function saveAs(url, filename) {

//     var link = document.createElement('a');

//     if (typeof link.download === 'string') {

//         link.href = url;
//         link.download = filename;

//         //Firefox requires the link to be in the body
//         document.body.appendChild(link);

//         //simulate click
//         link.click();

//         //remove the link when done
//         document.body.removeChild(link);

//     } else {

//         window.open(url);

//     }
// }
