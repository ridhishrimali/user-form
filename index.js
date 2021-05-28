const signleFileElement = document.getElementById("singleFile");
const signleFileNameElement = document.getElementById("singleFileName");

// for sigle file selection
signleFileElement.addEventListener("change", (event) => {
  const fileList = event.target.files;
  console.log(fileList);
  signleFileNameElement.innerText = fileList[0].name;
});

const multiFileElement = document.getElementById("multiFile");
const multiFileNameElement = document.getElementById("multiFileName");

// for multi file selection
multiFileElement.addEventListener("change", (event) => {
  const fileList = event.target.files;
  console.log(fileList);
  for (let i = 0; i < fileList.length; i++) {
    let p = document.createElement("p");
    const fileList = event.target.files;
    p.innerText = fileList[i].name;
    multiFileNameElement.appendChild(p);
  }
});
