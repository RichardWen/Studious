angular.module('app').directive('typingIndicatorBox', function($rootScope, TypingIndicatorService) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'chatcomponents/typing-indicator-box/typing-indicator-box.html',

    controller: function($scope){

      $scope.usersTyping = TypingIndicatorService.getUsersTyping();
      console.log($scope.usersTyping);
    }
  };
});