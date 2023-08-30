let arr = [
  {
    dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },

  {
    dp: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    story:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1623475045058-520fcb9d6166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80",
    story:
      "https://images.unsplash.com/photo-1623475045058-520fcb9d6166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1522871848372-0037671de3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    story:
      "https://images.unsplash.com/photo-1522871848372-0037671de3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
  },
  {
    dp: "https://images.unsplash.com/flagged/photo-1557865797-fed840dee261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    story:
      "https://images.unsplash.com/flagged/photo-1557865797-fed840dee261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
  },
];
let story_all = document.querySelector(".story_all");
let full_screen = document.querySelector('.full-screen');
let close_icon = document.querySelector('#close-icon');

let clutter = "";
arr.forEach((e, id) => {
  clutter += `<div class="story">
    <img id="${id}" src="${e.dp}" alt="profile iamge">
</div>`;
}); // end forEach
story_all.innerHTML = clutter;
story_all.addEventListener("click", (events) => {
    let value  = arr[events.target.id].story;
    full_screen.style.display = 'block';
    full_screen.style.backgroundImage = `url(${value})`

    setTimeout(() => {
        full_screen.style.display = 'none';
        close_icon.style.display = 'none'
    },5000)

    close_icon.style.display = 'block'
    

}); // end addEventlisnter
close_icon.addEventListener('click', () => {
    full_screen.style.display = 'none'
    close_icon.style.display = 'none'
})