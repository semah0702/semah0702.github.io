function openNote() {
  document.getElementById("note-modal").style.display = "block";
}

function closeNote() {
  document.getElementById("note-modal").style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("note-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
