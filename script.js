console.log("RadiantForge Loaded Successfully");

const communityBtn = document.getElementById("communityBtn");
const communityModal = document.getElementById("communityModal");
const closeCommunity = document.querySelector(".close-community");

if (communityBtn) {
communityBtn.addEventListener("click", function(e) {
e.preventDefault();
communityModal.style.display = "flex";
});
}

if (closeCommunity) {
closeCommunity.addEventListener("click", function() {
communityModal.style.display = "none";
});
}

window.addEventListener("click", function(e) {
if (e.target === communityModal) {
communityModal.style.display = "none";
}
});