angular.module('app')
.run(['Pubnub', 'currentUser', function(Pubnub, currentUser) {
  Pubnub.init({
    // Please signup to PubNub to use your own keys: https://admin.pubnub.com/
    publish_key: 'pub-c-9c137f5b-1757-47fc-9dc7-33fd883615af',
    subscribe_key: 'sub-c-a6a3c768-640c-11e6-962a-02ee2ddab7fe',
    ssl: true,
    uuid: currentUser

  });
}]);