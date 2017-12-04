(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/new-user-modal.html',
                controller: 'CookiesCtrl as cookies',
                windowClass: 'modal-window',
                backdrop: 'static'

            });
        }
    }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
