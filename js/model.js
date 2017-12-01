(function() {
    function model() {
        this.data = [];
        var xhr = new XMLHttpRequest();
        xhr.open("get", "https://api.zype.com/playlists/58e9ae876689bc59e1013c78/videos?app_key=UIGFTQqMrQKdJCPBUoYOodjq76vQqXiYiApM36emwO5TRyNvLROXDZX009ntr9qv&per_page=100", false);
        xhr.send(null);
        xhr.onreadyStatechange = function() {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    console.log(xhr.responceText);
                } else {
                    console.log("request unsucessful : " + xhr.status);
                }
            }
        };


        this.data = JSON.parse(xhr.response);

    }
    model.prototype.GetData = function() {
        var _t = this;
        var ar = [];
        _t.data.response.forEach(function(ele) {
            ele.thumbnails.forEach(function(e) {
                if (e.height == 480) {
                    ar.push(e.url);
                }
            });

        });

        uniqueArray = ar.filter(function(item, pos) {
            return ar.indexOf(item) == pos;
        });


        return uniqueArray;

    }




    window.model = model;
})();