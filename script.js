let count = 0;

const controller = (v) => {
  count = count + v;
  slide(count);
};

const slide = (number) => {
  let images = document.getElementsByClassName("slide");
  if (number == images.length) {
    count = 0;
    number = 0;
  }
  if (number < 0) {
    count = images.length - 1;
    number = images.length - 1;
  }
  for (y of images) {
    y.style.display = "none";
  }
  images[number].style.display = "block";
};

slide(count);
