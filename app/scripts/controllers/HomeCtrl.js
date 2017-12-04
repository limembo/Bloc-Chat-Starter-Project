(function() {
    function HomeCtrl($scope, $uibModal, Room, Message) {

        this.rooms = Room.all;

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
        }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();
