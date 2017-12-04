(function() {
    function HomeCtrl($scope, $uibModal, Room) {
        this.rooms = Room.all;

        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/room-modal.html',
                controller: 'ModalCtrl as modal',
                size: 'lg',
                windowClass: 'modal-window'
            });

            modalInstance.result.then(function(name) {
				        Room.add(name);
			      });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
})();
