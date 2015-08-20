var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        angular.module("tlAutoselect", []).directive("tlAutoselect", function () {
            return {
                restrict: "A",
                link: function (scope, element) {
                    var focusedElement;
                    var elements = element.find("input").addBack("input");
                    elements.on("click", function () {
                        if (focusedElement !== element) {
                            element.select();
                            focusedElement = element;
                        }
                    });
                    elements.on("blur", function () {
                        focusedElement = null;
                    });
                }
            };
        });
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

