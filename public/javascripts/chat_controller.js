angular
.module('app', ['pubnub.angular.service'])

.controller('ChatCtrl', ['$scope', 'Pubnub', function($scope, Pubnub) {
    $scope.messages = [];
    $scope.channel = 'messages-channel';

    $scope.messageContent = '';
    // Generating a random uuid between 1 and 100 using utility function from lodash library.
    var min = Math.ceil(1);
    var max = Math.floor(101);
    $scope.uuid = Math.floor(Math.random() * (max - min) + min).toString();

    // Please signup to PubNub to use your own keys: https://admin.pubnub.com/
    Pubnub.init({
        publish_key: 'pub-c-9c137f5b-1757-47fc-9dc7-33fd883615af',
        subscribe_key: 'sub-c-a6a3c768-640c-11e6-962a-02ee2ddab7fe',
        ssl: true,
        uuid: $scope.uuid
    });

    // Fetching a uniq random avatar from the robohash.org service.
    $scope.avatarUrl = function(uuid) {
        return '//robohash.org/' + uuid + '?set=set2&bgset=bg2&size=70x70';
    };

    // Send the messages over PubNub Network
    $scope.sendMessage = function() {
       // Don't send an empty message
       if (!$scope.messageContent ||
            $scope.messageContent === '') {
            return;
        }
        Pubnub.publish({
            channel: $scope.channel,
            message: {
                content: $scope.messageContent,
                sender_uuid: $scope.uuid,
                date: new Date()
            },
            callback: function(m) {
                console.log(m);
            }
        });
        // Reset the messageContent input
        $scope.messageContent = '';

    }

    // Subscribe to messages channel
    Pubnub.subscribe({
        channel: $scope.channel,
        triggerEvents: ['callback']
    });

    // Make it possible to scrollDown to the bottom of the messages container
    $scope.scrollDown = function(time) {
        var $elem = $('.collection');
        $('#theChat').animate({
            scrollTop: $elem.height()
        }, time);
    };
$scope.scrollDown(400);
// Listenning to messages sent.
    $scope.$on(Pubnub.getMessageEventNameFor($scope.channel), function(ngEvent, m) {
        $scope.$apply(function() {
            $scope.messages.push(m)
        });
        $scope.scrollDown(400);
    });
}]);