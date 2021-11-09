  
        body = document.querySelector('#all')
        body.style.display = 'none'
        powe = document.querySelector('.power')
        powea = document.querySelector('.powera')
        bod = document.querySelector('body')
        allContainer = document.getElementsByClassName


        
        function bodyn() {
            body.style.display = 'none'
            setTimeout(() => {
                body.style.display = 'block'

            }, 100);
        }
        refresh = document.querySelector('#context')
        if (document.addEventListener) {
          document.addEventListener('contextmenu', function(e) {
           if( refresh.style.display == 'none'){
            refresh.style.display = 'block'
           }

           else{
            refresh.style.display = 'none'
           }
            e.preventDefault();

          }, false);
        } else {
          document.attachEvent('oncontextmenu', function() {
            if( refresh.style.display == 'none'){
            refresh.style.display = 'block'
           }

           else{
            refresh.style.display = 'none'
           }
            window.event.returnValue = false;

          });}
        function power() {
            if (body.style.display == 'none') {
                body.style.display = 'block'

                powe.style.display = 'none'
                alert('Press F11 for best experience')
                document.querySelector('video').innerHTML = '<source src="video.webm" type="video/webm">'
                document.querySelector('h1').style.display = 'none'
            }

            else {
                body.style.display = 'none'
                powe.style.display = 'block'
                location.reload()

            }
        }
        setTimeout(() => {
            document.getElementById('start').style.display = 'none'
        }, 4000);
        setInterval(() => {
            document.getElementById("time").innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            document.getElementById("day").innerHTML = new Date().toLocaleDateString([], { month: '2-digit', day: '2-digit', year: "numeric" })



        }, 100);
        Cross = document.querySelectorAll('.Cross')
        Maximize = document.querySelectorAll('.Maximize')
        Maximize.style.display = 'none'
        Minimize = document.querySelectorAll('.Minimize')
        //  = document.getElementById('')
        // container = document.getElementById('container')
        // iframe = document.getElementById('iframe')

        function chang() {
           
            bod.style.background ="black"
            document.querySelector('video').style.display = 'none'
            
            an = 1
           
            newImage = "https://picsum.photos/1200/1300?random=1" + new Date().getSeconds;                
            bod.style.background =`url("none")  no-repeat center center / cover`
            setInterval(() => {
                an = an + 10
                bod.style.background =`url("${newImage}")  no-repeat center center / cover`
                // bod.style.background =`url('https://picsum.photos/200/300?random=${an}')`
                // document.getElementById("theText").src = newImage.src;
            

            }, 100);
                
           
        }

        function cross(container, iframe) {

            // container.location.reload()
            iframe.style.width = "0"
            iframe.style.height = "0"
            container.style.height = "0"
            container.style.width = "0"

            setTimeout(() => {
                container.style.display = "none"
            }, 1500);
        }
        function maxi(container, iframe) {
            console.log('hi')
            container.style.width = "fit-content"
            container.style.height = "90vh"
            iframe.style.width = "95vw"
            iframe.style.height = "90vh"
            Minimize.style.display = 'inline'
            Maximize.style.display = 'none'

        }
        function mini(container, iframe) {
            container.style.width = "50vw"
            container.style.height = "70vh"
            iframe.style.width = "50vw"
            iframe.style.height = "70vh"
            Minimize.style.display = 'none'
            Maximize.style.display = 'inline'
        }

        function hi(container, iframe) {
            refresh.style.display = 'none'
            if (container.style.display == 'block') {
                container.style.display = 'none'
            }

            else {

                
                container.style.display = 'block'
                container.style.width = "50vw"
                container.style.height = "70vh"
                iframe.style.width = "50vw"
                iframe.style.height = "70vh"
              
            }


        }





        
