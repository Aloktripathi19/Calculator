function playSound() {
            let snd = document.getElementById('clickSound');
            snd.volume = 0.2;
            snd.currentTime = 0;
            snd.play();
        }
        function playSound1() {
            let snd = document.getElementById('clickSound1');
            snd.volume = 0.1;
            snd.currentTime = 0;
            snd.play();
        }

        let r = document.getElementById("inp")
        let s = ""
        function fun(ch) {
            if (ch == "ac") {
                s = ""
                r.value = ""
            }
            else if (ch == "c") {
                s = s.slice(0, -1)
                r.value = s
            }
            else if (ch == "=") {
                r.value = eval(s)
                s = ""
            }
            else {
                s = s + ch
                r.value = s
            }

        }
