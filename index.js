
const aele=document.querySelectorAll('.pn');
const hello = function (e) {
  var sound=new Audio(`sounds/${this.id}.mp3`);

if(sound.paused)
{
  sound.play();
}
else
{
    sound.pause();
}


};

for(let i=0;i<aele.length;i++)
  aele[i].addEventListener('click',hello(aele));
