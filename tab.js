const mainContent = document.querySelector("main");
const tabs = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

mainContent.onclick = (e) => {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    tabs.forEach((tab) => tab.classList.remove("active"));
  }
  e.target.classList.add("active");
  content.forEach((cont) => cont.classList.remove("active"));
  const activeTab = document.getElementById(id);
  console.log(activeTab);
  activeTab.classList.add("active");
};
