function addStoredToPage() {
    lists.innerHTML = localStorage.getItem("data");

    [...lists.children].forEach(list => {
        list.addEventListener("click", (e) => {
            if (e.target.classList.contains("list")) {
                e.target.classList.toggle("achieved");
            }
            // storeData();
        });
    });

}
