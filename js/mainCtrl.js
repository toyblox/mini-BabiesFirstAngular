var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

$scope.friends = ['jesse', 'andrew', 'jen', 'miah'];

$scope.addFriend = function() {
	$scope.friends.push($scope.newFriend);
	$scope.newFriend = '';
};


});