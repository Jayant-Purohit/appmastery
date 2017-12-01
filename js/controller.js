(function() {

    function controller(view, model) {
        var _t = this;
        this.view = view;
        this.model = model;
        // variables for calculation
        this.count = 0;
        // event binding
        this.view.bind('left', function(ev) {
            _t.calllefthandller(ev);
        });
        this.view.bind('right', function(ev) {
            _t.callrightHandller(ev);
        });

        this.view.drawCarousel(this.model.GetData());
        this.sliderwidth = this.view.getsliderwidth(this.model.GetData());

    }
    // add handlers to events
    controller.prototype.calllefthandller = function(ev) {
        var _t = this;
        _t.leftscroll(ev);
    };

    controller.prototype.callrightHandller = function(ev) {
        var _t = this;
        _t.rightscroll();
    };

    controller.prototype.leftscroll = function(ev) {
        var _t = this;
        _t.count += 1000;
        if (_t.count >= 0) {
            _t.count = 0;
            _t.view.UpdateLeft(_t.count);
            return
        }
        _t.view.UpdateLeft(_t.count);
    };

    controller.prototype.rightscroll = function(ev) {
        var _t = this;
        _t.count += -1000;
        /// check if silder is on end 
        if (_t.count <= -(_t.sliderwidth)) {
            _t.count = 0; // 
            _t.view.UpdateLeft(_t.count);
            return
        }
        _t.view.UpdateLeft(_t.count);
    };



    window.controller = controller;

})();