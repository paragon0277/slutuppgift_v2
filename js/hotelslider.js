var imageCounter=1;function changeImage(e){showDiv(imageCounter+=e)}function showDiv(e){var n,i=document.getElementsByClassName("mySlides");for(e>i.length&&(imageCounter=1),e<1&&(imageCounter=i.length),n=0;n<i.length;n++)i[n].style.display="none";i[imageCounter-1].style.display="block"}for(showDiv(imageCounter),n>x.length&&(imageCounter=1),n<1&&(imageCounter=x.length),i=0;i<imageArray.length;i++)imageArray[i].style.display="none";
