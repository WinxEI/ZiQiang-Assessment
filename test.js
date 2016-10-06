var fair_json;
        var act_json;
        var index = [1, 1, 1];

        function loadXMLDoc() {
            var xmlhttp = new Array();
            var json_address = ["products.json", "activities.json", "activities.json"];
            var json_name = ["fair_json", "act_json", "act_json"];
            var i = 0;
            //for (var i = 0; i < 3; i++) {
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp[i] = new XMLHttpRequest();
            } else { // code for IE6, IE5
                xmlhttp[i] = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp[i].onreadystatechange = function() {
                if (xmlhttp[i].readyState == 4 && xmlhttp[i].status == 200) {
                    var info = xmlhttp[i].responseText;
                    eval(json_name + "=" + info);
                }
            };
            xmlhttp[i].open("GET", json_address[i], true);
            xmlhttp[i].send();
            //}
        }


        function bkgimPos(var1) {
            switch (var1) {

                case "茶杯":
                    return "53px 128px";
                    
                case "花瓶":
                    return "-25px 1px";
                    
                case "上海":
                    return "52px 128px";
                default:
                    break
            }
        }

        function ViewFunc1() {
            var fair_img = [document.getElementById("fair_img1"), document.getElementById("fair_img2"), document.getElementById("fair_img3")];
            var data = fair_json.data;
            var img_div;
            if (index[0] <= fair_json.data.length) {
                for (var i = 0; i < 3; i++) {
                    img_div = fair_img[i].getElementsByTagName("div");
                    if (data[index[0]].is_hot) {
                        img_div[0].style.visibility = "visible";
                        img_div[0].innerHTML = "HOT";
                    } else if (data[index[0]].is_new) {
                        img_div[0].style.visibility = "visible";
                        img_div[0].innerHTML = "NEW";
                    } else {
                        img_div[0].style.visibility = "hidden";
                    }
                    img_div[1].innerHTML = "<span>￥</span>" + parseInt(data[index[0]].price);
                    fair_img[i].style.background = "url(" + "http://121.42.39.103:8080" + data[index[0]].picture + ") no-repeat #fafafa " + bkgimPos(data[index[0]++].name);
                }
            } else {
                document.getElementsByClassName("viewmore")[0].style.visibility = "hidden";
            }
        }
        /*function ViewFunc2() {
            if (index[1] <= act.data.length) {
                document.getElementById("act_box1").getElementsByTagName("img")[0].src = "http://121.42.39.103:8080" + act_json.data[index[1]].picture;
                document.getElementById("act_box1").getElementsByTagName("p")[0].innerHTML = act_json.data[index[1]].name;
                document.getElementById("act_box1").getElementsByTagName("p")[1].innerHTML = act_json.data[index[1]].start_time + "-" + act_json.data[index[1]].end_time;
                document.getElementById("act_box1").getElementsByTagName("p")[2].innerHTML = act_json.data[index[1]].location;
                document.getElementById("act_box1").getElementsByTagName("p")[3].innerHTML = "<span>" + act_json.data[index[1]].participants + "</span>" + " 人参加";
            }
        }*/