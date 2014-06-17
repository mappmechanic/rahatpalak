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
      $scope.submitSuccess = false;
      $scope.loaderShow = false;

      $scope.submitInfo = function()
      {
          console.log("submitting info");

          var Info = Parse.Object.extend("Info");
            var info = new Info();
          if($scope.name != undefined || $scope.contact != undefined || $scope.noOfG != undefined)
          {
            info.set("name", $scope.name);
            info.set("contact", $scope.contact);
            info.set("arrivingBy", $scope.arrivingBy);
            info.set("noOfG", parseInt($scope.noOfG));
            info.set("ftInfo", $scope.ftInfo);
            info.set("date", $scope.date);
          
          
            $scope.loaderShow = true;
            info.save(null, {
              success: function(gameScore) {
                // Execute any logic that should take place after the object is saved.
                var Blessing = Parse.Object.extend("Blessings");
                var blessing = new Blessing();
                  
                blessing.set("name",$scope.name);
                blessing.set("text",$scope.blessingText);
                  console.log($scope.blessingText);
                  blessing.save(null, {
                      success:function(blessings)
                      {
                          console.log("Successful Submission");
                           $scope.$apply(function($scope) {
                               $scope.submitSuccess = true;
                               $scope.loaderShow = false;
                           });
                      },
                      error:function(blessings,error){
                     alert('The server is misbehaving right now. Please try again later or shoot an email with the info to rahat.khanna@yahoo.co.in');
                     console.log('Failed to create new object, with error code: ' + error.description);
                      }
                  
                  });
              },
              error: function(gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                alert('The server is misbehaving right now. Please try again later or shoot an email with the info to rahat.khanna@yahoo.co.in');
                console.log('Failed to create new object, with error code: ' + error.description);
              }
            });
              
        }else
              alert("Please fill in complete information.");
          
          
      }
  }])
  .controller('BlessingsCtrl', ['$scope', function($scope) {
      $scope.blessings = "test";
      $scope.loadShow = true;
      $scope.hide = true;
      $scope.loaderShow = false;
      var Blessings = Parse.Object.extend("Blessings");
        var query = new Parse.Query(Blessings);
        query.equalTo("approved",true);
        // Sorts the results in ascending order by the score field
        query.descending("createdAt");
        query.find( {
          success: function(results) {
            // The object was retrieved successfully.
             $scope.blessings = results;
             $scope.loadShow = false;
             $scope.$apply();
              console.log(results);
          },
          error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and description.
          }
        });
      
      
      $scope.submitBlessing = function() {
          $scope.loaderShow = true;
           // Execute any logic that should take place after the object is saved.
                var Blessing = Parse.Object.extend("Blessings");
                var blessing = new Blessing();
                  
                blessing.set("name",$scope.name);
                blessing.set("text",$scope.blessingText);
                  console.log($scope.blessingText);
                  blessing.save(null, {
                      success:function(blessings)
                      {
                          console.log("Successful Submission");
                          alert("Thanks for blessing us. I will personally read the blessing and put it on this wall.");
                           $scope.$apply(function($scope) {
                               $scope.hide = true;
                               $scope.loaderShow = false;
                           });
                      },
                      error:function(blessings,error){
                     alert('The server is misbehaving right now. Please try again later or shoot an email with the info to rahat.khanna@yahoo.co.in');
                     console.log('Failed to create new object, with error code: ' + error.description);
                      }
                  
                  });
          
      };
      
  }])
  .controller('EventsCtrl', ['$scope', function($scope) {

  }])
  .controller('StoryCtrl', ['$scope', function($scope) {

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
