var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        angular.module("tlAutoselect", []).directive("tlAutoselect", function () {
            return {
                restrict: "A",
                link: function (scope, element) {
                    var focusedElement;
                    element.on("click", function () {
                        if (focusedElement !== element) {
                            element.select();
                            focusedElement = element;
                        }
                    });
                    element.on("blur", function () {
                        focusedElement = null;
                    });
                }
            };
        });
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

