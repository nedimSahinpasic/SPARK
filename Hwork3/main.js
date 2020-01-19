const dropContainer = document.getElementById("dropContainer");

dropContainer.addEventListener("dragenter", function (event) {
  event.preventDefault();
  event.stopPropagation();
  dropContainer.style.border = "solid";
  dropContainer.innerHTML = "Leave file here";
}
);

dropContainer.addEventListener("dragleave", function (event) {
  event.preventDefault();
  event.stopPropagation();
  dropContainer.style.border = "dotted";
  dropContainer.innerHTML = "Drop here";
});

dropContainer.addEventListener("dragover", function (event) {
  event.preventDefault();
  event.stopPropagation();
});

dropContainer.addEventListener("drop", function (event) {
  event.preventDefault();
  event.stopPropagation();
  dropContainer.innerHTML = "Thank You!";
  console.log("File is dropped!");
  const fileList = event.dataTransfer.files;
  for (let i = 0; i < fileList.length; i++) {
    console.log(fileList[i].name + " date of last modification is: " + fileList[i].lastModifiedDate);
  }
});