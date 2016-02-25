document.addEventListener('DOMContentLoaded', function(){

	makeBoard();
	var i = 0;

	var board = document.getElementById('board');
	board.addEventListener('click', function(){
		if(event.target.classList.contains('box')){
			if(event.target.innerHTML === ''){
				makeMove();
				i++;
			}
    }

      var arrBoxes1 = Array.prototype.slice.call(document.querySelectorAll('.row1'));
      var arrBoxes2 = Array.prototype.slice.call(document.querySelectorAll('.row2'));
      var arrBoxes3 = Array.prototype.slice.call(document.querySelectorAll('.row3'));
      var arrBoxes4 = Array.prototype.slice.call(document.querySelectorAll('.col1'));
      var arrBoxes5 = Array.prototype.slice.call(document.querySelectorAll('.col2'));
      var arrBoxes6 = Array.prototype.slice.call(document.querySelectorAll('.col3'));
      var arrBoxes7 = Array.prototype.slice.call(document.querySelectorAll('.dia1'));
      var arrBoxes8 = Array.prototype.slice.call(document.querySelectorAll('.dia2'))


      var winner = [];

      winner.push(win1 = arrBoxes1.reduce(function(total, curr) {
        console.log(curr.dataset.value);
        return total + parseInt(curr.dataset.value);
      },0))
      winner.push(win2 = arrBoxes2.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))
      winner.push(win3 = arrBoxes3.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))
      winner.push(win4 = arrBoxes4.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))
      winner.push(win5 = arrBoxes5.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))
      winner.push(win6 = arrBoxes6.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))
      winner.push(win7 = arrBoxes7.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))
      winner.push(win8 = arrBoxes8.reduce(function(total, curr) {
       return total + parseInt(curr.dataset.value);
     },0))


      var turn = i%2;
      document.getElementById('turn').innerHTML = 'PLAYER '+(turn+1)+"'S Turn!"


      for(var a=0;a<winner.length;a++){
          if(Math.abs(winner[a]) === 3){
            document.getElementById('turn').innerHTML =`PLAYER ${(i+1)%2+1} IS THE WINNER!!!`;
          }
      }


      function makeMove(){
        if(i % 2 === 1) {
         event.target.innerHTML = 'O';
         event.target.dataset.value = -1;
       }
       else {
         event.target.innerHTML = 'X';
         event.target.dataset.value = 1;
       }
     }	


   });

	document.getElementById('reset').addEventListener('click', function(){
   location.reload();
 })






  function makeBoard(){
   var table = document.getElementById('board');
   var x = 1;
   for(i=0;i<3;i++){
    var row = document.createElement('tr');
    for(j = 0;j<3;j++){
     var box = document.createElement('td');
     box.classList.add('box', 'row'+(i+1), 'col'+(j+1));
     box.setAttribute('id', 'box'+j)
     box.dataset.value = 0;
     row.appendChild(box);
     if (i === j) box.classList.add('dia1');
     if (i+j === 2) box.classList.add('dia2');
     
     x++
   }
   table.appendChild(row)

 }
}
});






