
// using the current page's URL
const myUrl = new URL(window.location.toLocaleString());
var puzzleNum = myUrl.searchParams.get("url")

if (puzzleNum!=null){
    console.log("Found puzzle number: ", puzzleNum, "| in: ", myUrl);
}
else{
    console.log("No puzzle found: ", myUrl);
}

var url = puzzleNum.toString();

const puzzleImage = document.getElementById("puzzle-window");

puzzleImage.src = url;
