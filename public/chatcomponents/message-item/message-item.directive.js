angular.module('app').directive('messageItem', function(MessageService) {
  return {
    restrict: "E",
    templateUrl: "chatcomponents/message-item/message-item.html",
    scope: {
      senderUuid: "@",
      content: "@",
      date: "@"
    }
  };
});