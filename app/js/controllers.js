'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('FamilyFriendsCtrl', ['$scope','$http', function($scope,$http) {
      console.log("Entering FamilyFriends View");
    $scope.ffData = {};
    $http({method: 'GET', url: 'js/data/familyfriends.json'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
       $scope.ffData = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])
  .controller('RsvpCtrl', ['$scope', function($scope) {
      
  }])
  .controller('BlessingsCtrl', ['$scope', function($scope) {

  }])
  .controller('EventsCtrl', ['$scope', function($scope) {

  }])
  .controller('GalleryCtrl', ['$scope', function($scope) {
      	
     /* var gallery = $('.swiper-container').swiper({
		slidesPerView:'auto',
		watchActiveIndex: true,
		centeredSlides:   true,
		pagination:'.pagination',
		paginationClickable: true,
		resizeReInit: true,
		keyboardControl: true,
		grabCursor: true,
        calculateHeight: true,
		onImagesReady: function(){
			changeSize()
		}
	})
	function changeSize() {
		//Unset Width
		$('.swiper-slide').css('width','')
		//Get Size
		var imgWidth = $('.swiper-slide img').width();
		if (imgWidth+40>$(window).width()) imgWidth = $(window).width()-40;
		//Set Width
		$('.swiper-slide').css('width', imgWidth+40);
	}
	
	changeSize()

	//Smart resize
	$(window).resize(function(){
		changeSize()
		gallery.resizeFix(true)	
	})*/
    
      
    Galleria.run('.galleria');   
    
    Galleria.ready(function() {
    var gallery = this;
    this.addElement('fscr');
    this.appendChild('stage','fscr');
    var fscr = this.$('fscr')
        .click(function() {
            gallery.toggleFullscreen();
        });
    this.addIdleState(this.get('fscr'), { opacity:0 });
    });
      
  }]);
