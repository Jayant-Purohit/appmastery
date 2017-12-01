(function() {

    function view(id) {
        var _t = this;
        this.cnt_id = id;
        this.cnt = document.getElementById(id);
        this.elements = {
            BTNLEFT: _t.cnt.querySelector(".c-left"),
            BTNRIGHT: _t.cnt.querySelector(".c-right"),
            SLIDER: _t.cnt.querySelector(".slider")
        };
    }
    view.prototype.bind = function(event, callback) {
        var _t = this;
        switch (event) {
            case "left":
                this.elements.BTNLEFT.addEventListener('click', function(event) {
                    _t = this;
                    callback(event);
                });
                break;
            case "right":
                this.elements.BTNRIGHT.addEventListener('click', function(event) {
                    _t = this;
                    callback(event);
                });
                break;
        }
    };

    view.prototype.UpdateLeft = function(count) {
        var _t = this;
        console.log(count);
        _t.elements.SLIDER.style.left = count + "px";
    }
    view.prototype.getId = function() {
        var _t = this;
        return _t.cnt_id;
    }
    view.prototype.drawCarousel = function(ar) {
        var _t = this;
        var htmlstr = "";
        console.log(ar);
        var sliderwidth = _t.getsliderwidth(ar);
        _t.elements.SLIDER.style.width = sliderwidth + "px";
        // draw li for images
        ar.forEach(function(element) {
            htmlstr += "<li><img src=" + element + "></li>";
        });

        _t.elements.SLIDER.innerHTML = htmlstr;


    }


    view.prototype.getsliderwidth = function(ar) {
        var imglength = ar.length * 200
        var len = ((imglength) + (1000 - (imglength % 1000)));
        return len;

    }

    window.view = view;

})();