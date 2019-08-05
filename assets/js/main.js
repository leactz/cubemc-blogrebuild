// SETS Blog Content Links to open in new tab

const blogContentLinks = document.querySelectorAll('.single-post-content a');
blogContentLinks.forEach((link) => {
  link.setAttribute('target', '_blank');
});

// REPLACES ALL INSTANCES OF THE WORD CUBE IN TAGS WITH ALL CAPS

const tags = document.querySelectorAll('.blog-tag');

tags.forEach((tag) => {
  let text = tag.innerText;
  if (text.includes('Cube')) {
    console.log(text);
    let newText = text.replace("Cube", "CUBE");
    console.log(newText);
    tag.innerText = newText;
  }
});

