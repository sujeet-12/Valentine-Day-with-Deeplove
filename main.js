 window.onload = function() {
        document.querySelector('.page2').style.display = 'none'; 
        document.querySelector('.page3').style.display = 'none'; 
        document.querySelector('.page4').style.display = 'none'; 
        document.querySelector('.sidebar').style.display = 'none'; 
        document.querySelector('.quotes').style.display = 'none'; 
        document.querySelector('#container').style.display = 'none';  
       document.querySelector('.toast').style.display = 'none';  
    };


function next(){
    $(".page").hide();
    $(".page2").show();
    $(".page3").hide();
    $(".page4").hide();
    $(".sidebar").hide();
    $("#container").hide();
}

function sec(){
    $(".page").hide();
    $(".page2").hide();
    $(".page3").show();
    $(".page4").hide();
    $(".sidebar").hide();
    $("#container").hide();
}

function trd(){
    $(".page").hide();
    $(".page2").hide();
    $(".page3").hide();
    $(".page4").show();
    $(".sidebar").hide();
    $("#container").hide();
}

function side(){
     $(".sidebar").toggle();
     $(".quotes").hide();
}

function quote(){
    $(".quotes").toggle();
    $(".sidebar").hide();
}

function back(){
    $(".sidebar").hide();
    $(".quotes").hide();
    $("#container").hide();
}

function cdlove(){
     $("#container").toggle();
     $(".sidebar").hide();
     $(".quotes").hide();
}


document.addEventListener("DOMContentLoaded", function() {
  // Create  Love cursor element inspired by Codepen 
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor); 

  let isDragging = false;

 
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) {
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    }
  });

  
  document.addEventListener('mousedown', () => {
    isDragging = true;
    cursor.classList.add('dragging'); 
  });

  
  document.addEventListener('mouseup', () => {
    isDragging = false;
    cursor.classList.remove('dragging'); 
  });

  
  document.addEventListener('touchmove', (e) => {
    let cursorX = e.touches[0].clientX;
    let cursorY = e.touches[0].clientY;
    cursor.style.left = `${cursorX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${cursorY - cursor.offsetHeight / 2}px`;
  });

  document.addEventListener('touchstart', () => {
    isDragging = true;
    cursor.classList.add('dragging');
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    cursor.classList.remove('dragging');
  });
});


      
