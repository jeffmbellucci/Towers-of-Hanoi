var Hanoi = {
  tower1: [1,2,3],
  tower2: [],
  tower3: [],
	startLength: 3,

  won: function() {
    if (this.tower2.length === this.startLength || this.tower3.length === this.startLength) {
      return true;
    } else {
      return false;
    }
  },

  move_valid: function(start_tower, end_tower) {
    if (start_tower.length === 0) {
      return false;
    } else if (end_tower.length === 0 ||
      start_tower[start_tower.length-1] < end_tower[end_tower.length - 1]) {
      return true;
    } else {
      return false;
    }
  },

  move: function(start_tower, end_tower) {
    end_tower.unshift(start_tower.shift());
  }
};



$(function(){
	function gameLoop () {
		render();

		$('div div').on("click", function() {

			if ($('.tower-selected').length) {
				if ($('.tower-selected')[0] === this) {
					$('div div').attr("class"," ")
				} else {
					startTower = Hanoi[ $('.tower-selected')[0].id ]
					endTower = Hanoi[ $(this)[0].id ]
					if(Hanoi.move_valid(startTower, endTower)){
						Hanoi.move(startTower, endTower);
						$('div div').attr("class", "none");
						render();
						if(Hanoi.won()){
							alert('VICTORY')
						}
					} else {
						alert('INVALID, asshole')
					}

				}
			} else {
				$(this).attr("class", "tower-selected");
			}

	   });

	};

	function render(){
		// $("#tower1").text(Hanoi.tower1);
	// 	$("#tower2").text(Hanoi.tower2);
	// 	$("#tower3").text(Hanoi.tower3);

		for (var i = 1; i <= 3; i++) {
			var currentTower = Hanoi['tower' + i];
			var $currentTower = $("#tower" + i)
			$currentTower.empty();
			for (j = 0; j < currentTower.length; j++) {
				// console.log($currentTower)
				var ring = $("<div style = 'border: 3px solid blue; position: absolute;	bottom:" + ( - 25 * j + 50) + "px; left:"+ ( 140 - (50 * currentTower[j])/2 ) + " ; width:" +  (50 * currentTower[j]) + "px; height: 20px;'></div>")
				console.log(ring)
			 	ring.appendTo($currentTower)
				}


			}
		}
	gameLoop();
})