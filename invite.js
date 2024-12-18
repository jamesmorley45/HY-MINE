let copytext = document.querySelector('.invite-copy');
copytext.querySelector(("button")).addEventListener('click',function() {
    let input = copytext.querySelector("input.text");
    document.querySelector("button").onclick = function () {
        navigator.clipboard.writeText(document.querySelector("input").value);
      };     
    copytext.classList.add("active");
    window.getSelection().removeAllRanges();
 setTimeout(function(){
    copytext.classList.remove("active")
 },2500);
});

