(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.createRoom = function(addName) {
            Room.createRoom(addName);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
