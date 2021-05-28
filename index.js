let selectedFileName = "";

const fileInputElement = document.getElementById("file");

fileInputElement.addEventListener("change", (event) => {
  const fileList = event.target.files;
  console.log(fileList);
  selectedFileName = fileList[0].name;
});

function submitHandler() {
  alert(`Selected file name is ${selectedFileName}`);
}
