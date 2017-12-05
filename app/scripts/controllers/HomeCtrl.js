(function() {
    function HomeCtrl($scope, $uibModal, Room, Message, $cookies) {

        this.rooms = Room.all;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.currentRoom = null;


        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/room-modal.html',
                controller: 'ModalCtrl as modal',
                windowClass: 'modal-window'
            });

            modalInstance.result.then(function(name) {
				Room.add(name);
			});
        };

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
            };


        this.sendMessage = function () {
           this.newMessage.roomId = this.currentRoom.$id;
           this.newMessage.username = this.currentUser;
           Message.send(this.newMessage);
       }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();
