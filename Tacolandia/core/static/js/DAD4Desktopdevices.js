//Drag and Drop
function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("key", ev.target.id);//seteamos el id de la imagen

}

function drop(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("key");//recibimos el id de la imagen ejemplo drag2
    console.log(data);
    console.log("droop event");
    console.log(ev.target.id);
    
    switch (ev.target.id) { //para saber en que div estamos soltando la imagen

        case "cuadrosCeros1":
                console.log("joto");

                var cuadrosCeros1 = document.getElementById('cuadrosCeros1');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "1";
                        break;
                    case "drag2":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "2";
                        break;
                    case "drag3":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "3";
                        break;
                    case "drag4":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "4";
                        break;
                    case "drag5":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "5";
                        break;
                    case "drag6":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "6";
                        break;
                    case "drag7":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "7";
                        break;
                    case "drag8":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "8";
                        break;
                    case "drag9":

                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        console.log("entro point")
                        cuadrosCeros1.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cuadrosCeros1Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;



            case "cuadrosCeros2":
                var cuadrosCeros2 = document.getElementById('cuadrosCeros2');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "1";
                        break;
                    case "drag2":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "2";
                        break;
                    case "drag3":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "3";
                        break;
                    case "drag4":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "4";
                        break;
                    case "drag5":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "5";
                        break;
                    case "drag6":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "6";
                        break;
                    case "drag7":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "7";
                        break;
                    case "drag8":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "8";
                        break;
                    case "drag9":

                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        console.log("entro point")
                        cuadrosCeros2.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cuadrosCeros2Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            
            case "cuadrosCeros3":
                var cuadrosCeros3 = document.getElementById('cuadrosCeros3');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "1";
                        break;
                    case "drag2":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "2";
                        break;
                    case "drag3":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "3";
                        break;
                    case "drag4":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "4";
                        break;
                    case "drag5":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "5";
                        break;
                    case "drag6":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "6";
                        break;
                    case "drag7":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "7";
                        break;
                    case "drag8":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "8";
                        break;
                    case "drag9":

                    cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cuadrosCeros3Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        console.log("entro point")
                        cuadrosCeros3.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cuarosCeros3Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;





        case "div1":

            var div1 = document.getElementById('div1');
            switch (data) { //este switch nos dice que imagen estamos soltando
                case "drag0":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div1Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div1Respuesta').value = "1";
                    break;
                case "drag2":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div1Respuesta').value = "2";
                    break;
                case "drag3":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div1Respuesta').value = "3";
                    break;
                case "drag4":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div1Respuesta').value = "4";
                    break;
                case "drag5":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div1Respuesta').value = "5";
                    break;
                case "drag6":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div1Respuesta').value = "6";
                    break;
                case "drag7":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div1Respuesta').value = "7";
                    break;
                case "drag8":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div1Respuesta').value = "8";
                    break;
                case "drag9":

                    div1.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div1Respuesta').value = "9";
                    break;
                case "dragPoint":
                    
                    div1.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('div1Respuesta').value = ".";
                    break;


            }
            //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
        case "div2":

            var div2 = document.getElementById('div2');
            switch (data) { //este switch nos dice que imagen estamos soltando
                case "drag0":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div2Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div2Respuesta').value = "1";
                    break;
                case "drag2":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div2Respuesta').value = "2";
                    break;
                case "drag3":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div2Respuesta').value = "3";
                    break;
                case "drag4":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div2Respuesta').value = "4";
                    break;
                case "drag5":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div2Respuesta').value = "5";
                    break;
                case "drag6":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div2Respuesta').value = "6";
                    break;
                case "drag7":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div2Respuesta').value = "7";
                    break;
                case "drag8":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div2Respuesta').value = "8";
                    break;
                case "drag9":

                    div2.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div2Respuesta').value = "9";
                    break;
                case "dragPoint":
                
                div2.style.backgroundImage = 'url("../static/imgs/point.png")';
                document.getElementById('div2Respuesta').value = ".";
                break;

            }
            //Todo esto de arriba es para verificar que numero se "dropea" en div2
            break;
        case "div3":

            var div3 = document.getElementById('div3');
            switch (data) { //este switch nos dice que imagen estamos soltando
                case "drag0":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div3Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div3Respuesta').value = "1";
                    break;
                case "drag2":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div3Respuesta').value = "2";
                    break;
                case "drag3":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div3Respuesta').value = "3";
                    break;
                case "drag4":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div3Respuesta').value = "4";
                    break;
                case "drag5":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div3Respuesta').value = "5";
                    break;
                case "drag6":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div3Respuesta').value = "6";
                    break;
                case "drag7":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div3Respuesta').value = "7";
                    break;
                case "drag8":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div3Respuesta').value = "8";
                    break;
                case "drag9":

                    div3.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div3Respuesta').value = "9";
                    break;
                case "dragPoint":
                
                div3.style.backgroundImage = 'url("../static/imgs/point.png")';
                document.getElementById('div3Respuesta').value = ".";
                break;
            }
            //Todo esto de arriba es para verificar que numero se "dropea" en div3
            break;
        case "div4":

            var div4 = document.getElementById('div4');
            switch (data) { //este switch nos dice que imagen estamos soltando
                case "drag0":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div4Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div4Respuesta').value = "1";
                    break;
                case "drag2":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div4Respuesta').value = "2";
                    break;
                case "drag3":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div4Respuesta').value = "3";
                    break;
                case "drag4":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div4Respuesta').value = "4";
                    break;
                case "drag5":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div4Respuesta').value = "5";
                    break;
                case "drag6":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div4Respuesta').value = "6";
                    break;
                case "drag7":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div4Respuesta').value = "7";
                    break;
                case "drag8":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div4Respuesta').value = "8";
                    break;
                case "drag9":

                    div4.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div4Respuesta').value = "9";
                    break;
                case "dragPoint":
                div4.style.backgroundImage = 'url("../static/imgs/point.png")';
                document.getElementById('div4Respuesta').value = ".";
                break;

            }
            break;
        case "div5":
            var div5 = document.getElementById('div5');
            switch (data) {
                case "drag0":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div5Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div5Respuesta').value = "1";
                    break;
                case "drag2":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div5Respuesta').value = "2";
                    break;
                case "drag3":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div5Respuesta').value = "3";
                    break;
                case "drag4":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div5Respuesta').value = "4";
                    break;
                case "drag5":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div5Respuesta').value = "5";
                    break;
                case "drag6":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div5Respuesta').value = "6";
                    break;
                case "drag7":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div5Respuesta').value = "7";
                    break;
                case "drag8":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div5Respuesta').value = "8";
                    break;
                case "drag9":

                    div5.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div5Respuesta').value = "9";
                    break;
                case "dragPoint":
                    div5.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('div5Respuesta').value = ".";
                    break;


            }
            break;
        case "div6":
            var div6 = document.getElementById('div6');
            switch (data) {
                case "drag0":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div6Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div6Respuesta').value = "1";
                    break;
                case "drag2":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div6Respuesta').value = "2";
                    break;
                case "drag3":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div6Respuesta').value = "3";
                    break;
                case "drag4":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div6Respuesta').value = "4";
                    break;
                case "drag5":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div6Respuesta').value = "5";
                    break;
                case "drag6":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div6Respuesta').value = "6";
                    break;
                case "drag7":

                    div6.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div6Respuesta').value = "7";
                    break;
                case "drag8":
                    div6.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div6Respuesta').value = "8";
                    break;
                case "drag9":
                    div6.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div6Respuesta').value = "9";
                    break;
                case "dragPoint":
                    div6.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('div6Respuesta').value = ".";
                    break;


            }
            break;
        case "div7":
            var div7 = document.getElementById('div7');
            switch (data) {
                case "drag0":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                    document.getElementById('div7Respuesta').value = "0";
                    //div1.value = "0";
                    break;
                case "drag1":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                    document.getElementById('div7Respuesta').value = "1";
                    break;
                case "drag2":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                    document.getElementById('div7Respuesta').value = "2";
                    break;
                case "drag3":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                    document.getElementById('div7Respuesta').value = "3";
                    break;
                case "drag4":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                    document.getElementById('div7Respuesta').value = "4";
                    break;
                case "drag5":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                    document.getElementById('div7Respuesta').value = "5";
                    break;
                case "drag6":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                    document.getElementById('div7Respuesta').value = "6";
                    break;
                case "drag7":

                    div7.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                    document.getElementById('div7Respuesta').value = "7";
                    break;
                case "drag8":
                    div7.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                    document.getElementById('div7Respuesta').value = "8";
                    break;
                case "drag9":
                    div7.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                    document.getElementById('div7Respuesta').value = "9";
                    break;
                case "dragPoint":
                    div7.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('div7Respuesta').value = ".";
                    break;


                
            }

        break;


            








            //a partir de aqui va a ser de la division
            

            case "cociente1":
                console.log("joto");

                var cociente1 = document.getElementById('cociente1');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente1Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente1Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente1Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente1Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente1Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente1Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente1Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente1Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente1Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente1.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente1Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente1.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente1Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "cociente2":
                console.log("joto");

                var cociente2 = document.getElementById('cociente2');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente2Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente2Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente2Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente2Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente2Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente2Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente2Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente2Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente2Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente2.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente2Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente2.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente2Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "cociente3":
                console.log("joto");

                var cociente3 = document.getElementById('cociente3');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente3Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente3Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente3Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente3Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente3Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente3Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente3Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente3Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente3Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente3.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente3Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente3.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente3Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "cociente4":
                console.log("joto");

                var cociente2 = document.getElementById('cociente4');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente4Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente4Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente4Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente4Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente4Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente4Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente4Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente4Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente4Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente4.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente4Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente4.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente4Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;




            case "cociente5":
                console.log("joto");

                var cociente5 = document.getElementById('cociente5');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente5Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente5Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente5Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente5Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente5Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente5Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente5Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente5Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente5Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente5.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente5Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente5.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente5Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;



            case "cociente6":
                console.log("joto");

                var cociente6 = document.getElementById('cociente6');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente2Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente6Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente6Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente6Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente6Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente6Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente6Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente6Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente6Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente6.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente6Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente6.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente6Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            


            case "cociente7":
                console.log("joto");

                var cociente7 = document.getElementById('cociente7');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente7Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente7Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente7Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente7Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente7Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente7Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente7Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente7Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente7Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente7.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente7Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente7.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente7Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;



            case "cociente8":
                console.log("joto");

                var cociente8 = document.getElementById('cociente8');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente8Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente8Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente8Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente8Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente8Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente8Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente8Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente8Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente8Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente8.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente8Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente8.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente8Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;





            case "cociente9":


                var cociente9 = document.getElementById('cociente9');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('cociente9Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('cociente9Respuesta').value = "1";
                        break;
                    case "drag2":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('cociente9Respuesta').value = "2";
                        break;
                    case "drag3":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('cociente9Respuesta').value = "3";
                        break;
                    case "drag4":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('cociente9Respuesta').value = "4";
                        break;
                    case "drag5":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('cociente9Respuesta').value = "5";
                        break;
                    case "drag6":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('cociente9Respuesta').value = "6";
                        break;
                    case "drag7":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('cociente9Respuesta').value = "7";
                        break;
                    case "drag8":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('cociente9Respuesta').value = "8";
                        break;
                    case "drag9":

                        cociente9.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('cociente9Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        cociente9.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('cociente9Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;


                // residuo

            case "residuo1":
                console.log("joto");

                var residuo1 = document.getElementById('residuo1');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo1.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo1Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo1Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo1Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo1Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo1Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo1Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo1Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo1Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo1Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo1.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo1Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo1.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo1Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "residuo2":
                console.log("joto");

                var residuo2 = document.getElementById('residuo2');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo2.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo2Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo2Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo2Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo2Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo2Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo2Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo2Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo2Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo2Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo2.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo2Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo2.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo2Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;


            case "residuo3":
                console.log("joto");

                var residuo3 = document.getElementById('residuo3');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo3Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo3Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo3Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo3Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo3Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo3Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo3Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo3Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo3Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo3.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo3Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo3.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo3Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;



            case "residuo4":
                console.log("joto");

                var residuo4 = document.getElementById('residuo4');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo4.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo4Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo4Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo4Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo4Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo4Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo4Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo4Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo4Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo4Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo4.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo4Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo4.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo4Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;


            case "residuo21":
                console.log("joto");

                var residuo21 = document.getElementById('residuo21');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo21.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo21Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo21Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo21Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo21Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo21Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo21Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo21Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo21Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo21Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo21.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo21Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo21.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo21Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;




            case "residuo22":
                console.log("joto");

                var residuo22 = document.getElementById('residuo22');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo22.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo22Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo22Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo22Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo22Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo22Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo22Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo22Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo22Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo22Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo22.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo22Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo22.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo22Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;



            case "residuo23":
                var residuo23 = document.getElementById('residuo23');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo23.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo23Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo23Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo23Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo23Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo23Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo23Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo23Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo23Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo23Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo23.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo23Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo23.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo23Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            
            case "residuo24":
                var residuo24 = document.getElementById('residuo24');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo24.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo24Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo24Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo24Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo24Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo24Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo24Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo24Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo24Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo24Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo24.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo24Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo24.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo24Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "residuo31":
                var residuo31 = document.getElementById('residuo31');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo31.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo31Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo31Respuesta').value = "1";
                        break;
                    case "drag2":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo31Respuesta').value = "2";
                        break;
                    case "drag3":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo31Respuesta').value = "3";
                        break;
                    case "drag4":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo31Respuesta').value = "4";
                        break;
                    case "drag5":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo31Respuesta').value = "5";
                        break;
                    case "drag6":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo31Respuesta').value = "6";
                        break;
                    case "drag7":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo31Respuesta').value = "7";
                        break;
                    case "drag8":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo31Respuesta').value = "8";
                        break;
                    case "drag9":

                        residuo31.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo31Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo31.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo31Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            

            case "residuo32":
                var residuo32 = document.getElementById('residuo32');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo32Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo32Respuesta').value = "1";
                        break;
                    case "drag2":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo32Respuesta').value = "2";
                        break;
                    case "drag3":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo32Respuesta').value = "3";
                        break;
                    case "drag4":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo32Respuesta').value = "4";
                        break;
                    case "drag5":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo32Respuesta').value = "5";
                        break;
                    case "drag6":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo32Respuesta').value = "6";
                        break;
                    case "drag7":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo32Respuesta').value = "7";
                        break;
                    case "drag8":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo32Respuesta').value = "8";
                        break;
                    case "drag9":

                    residuo32.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo32Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        residuo32.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('residuo32Respuesta').value = ".";
                        break;
            }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            
            case "residuo33":
                var residuo33 = document.getElementById('residuo33');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo33Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo33Respuesta').value = "1";
                        break;
                    case "drag2":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo33Respuesta').value = "2";
                        break;
                    case "drag3":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo33Respuesta').value = "3";
                        break;
                    case "drag4":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo33Respuesta').value = "4";
                        break;
                    case "drag5":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo33Respuesta').value = "5";
                        break;
                    case "drag6":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo33Respuesta').value = "6";
                        break;
                    case "drag7":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo33Respuesta').value = "7";
                        break;
                    case "drag8":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo33Respuesta').value = "8";
                        break;
                    case "drag9":

                    residuo33.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo33Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    residuo33.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('residuo33Respuesta').value = ".";
                    break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "residuo34":
                var residuo34 = document.getElementById('residuo34');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('residuo34Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('residuo34Respuesta').value = "1";
                        break;
                    case "drag2":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('residuo34Respuesta').value = "2";
                        break;
                    case "drag3":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('residuo34Respuesta').value = "3";
                        break;
                    case "drag4":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('residuo34Respuesta').value = "4";
                        break;
                    case "drag5":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('residuo34Respuesta').value = "5";
                        break;
                    case "drag6":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('residuo34Respuesta').value = "6";
                        break;
                    case "drag7":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('residuo34Respuesta').value = "7";
                        break;
                    case "drag8":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('residuo34Respuesta').value = "8";
                        break;
                    case "drag9":

                    residuo34.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('residuo34Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    residuo34.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('residuo34Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            

            




            
            

            case "digitosArriba31":
                var digitosArriba31 = document.getElementById('digitosArriba31');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba31Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba31Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            

            case "digitosArriba32":
                var digitosArriba32 = document.getElementById('digitosArriba32');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba32.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba32Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba32Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            
            case "digitosArriba33":
                var digitosArriba33 = document.getElementById('digitosArriba33');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba33.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba33Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba33Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            case "digitosArriba21":
                var digitosArriba21 = document.getElementById('digitosArriba21');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "7";
                        break;
                    case "drag8":
                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba21.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba21Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba21Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            

            case "digitosArriba22":
                var digitosArriba22 = document.getElementById('digitosArriba22');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba22.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba22Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba31.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba22Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            
            case "digitosArriba23":
                var digitosArriba23 = document.getElementById('digitosArriba23');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba23Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba23.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba23Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;


            case "digitosArriba11":
                var digitosArriba11 = document.getElementById('digitosArriba11');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "7";
                        break;
                    case "drag8":
                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba11Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba11.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba11Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;

            

            case "digitosArriba12":
                var digitosArriba12 = document.getElementById('digitosArriba12');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba12Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba12.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba12Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            
            case "digitosArriba13":
                var digitosArriba13 = document.getElementById('digitosArriba13');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosArriba13Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosArriba13.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosArriba13Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;




            case "digitosAbajo11":
                var digitosAbajo11 = document.getElementById('digitosAbajo11');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo11.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo11.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo11Respuesta').value = ".";
                            break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            case "digitosAbajo12":
                var digitosAbajo12 = document.getElementById('digitosAbajo12');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo12.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo12.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo12Respuesta').value = ".";
                            break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            case "digitosAbajo13":
                var digitosAbajo13 = document.getElementById('digitosAbajo13');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo13Respuesta').value = "9";
                        break;
                    case "dragPoint":
                    digitosAbajo13.style.backgroundImage = 'url("../static/imgs/point.png")';
                    document.getElementById('digitosAbajo13Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;


            case "digitosAbajo21":
                var digitosAbajo21 = document.getElementById('digitosAbajo21');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo21.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo21.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo21Respuesta').value = ".";
                            break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            case "digitosAbajo22":
                var digitosAbajo22 = document.getElementById('digitosAbajo22');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo22.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo22.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo22Respuesta').value = ".";
                            break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            case "digitosAbajo23":
                var digitosAbajo23 = document.getElementById('digitosAbajo23');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo23.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo23.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo23Respuesta').value = ".";
                            break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;





            case "digitosAbajo31":
                var digitosAbajo31 = document.getElementById('digitosAbajo31');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo31.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo31.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo31Respuesta').value = ".";
                            break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            case "digitosAbajo32":
                var digitosAbajo32 = document.getElementById('digitosAbajo32');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo32.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo32.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo32Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;
            case "digitosAbajo33":
                var digitosAbajo33 = document.getElementById('digitosAbajo33');
                switch (data) { //este switch nos dice que imagen estamos soltando
                    case "drag0":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_zero.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "0";
                        //div1.value = "0";
                        break;
                    case "drag1":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_one.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "1";
                        break;
                    case "drag2":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_two.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "2";
                        break;
                    case "drag3":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_3.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "3";
                        break;
                    case "drag4":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_4.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "4";
                        break;
                    case "drag5":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_5.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "5";
                        break;
                    case "drag6":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_6.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "6";
                        break;
                    case "drag7":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_7.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "7";
                        break;
                    case "drag8":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_8.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "8";
                        break;
                    case "drag9":

                    digitosAbajo33.style.backgroundImage = 'url("../static/imgs/nmb_9.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = "9";
                        break;
                    case "dragPoint":
                        digitosAbajo33.style.backgroundImage = 'url("../static/imgs/point.png")';
                        document.getElementById('digitosAbajo33Respuesta').value = ".";
                        break;
                }
                //Todo esto de arriba es para verificar que numero se "dropea" en div1
            break;






            
            


    }

    //ev.target.appendChild(document.getElementById(data)); esta linea de codigo agrega la imagen como tal al div
    //ReloadImagesPad(data); 

}

function limpiar() {
    //document.getElementById('div4').style.backgroundImage = "none";
    //document.getElementById('div3').style.backgroundImage = "none";
    //document.getElementById('div2').style.backgroundImage = "none";
    //document.getElementById('div1').style.backgroundImage = "none";
    document.getElementById("div1Respuesta").value = "";
    document.getElementById("div2Respuesta").value = "";
    document.getElementById("div3Respuesta").value = "";
    document.getElementById("div4Respuesta").value = "";
    document.getElementById("div5Respuesta").value = "";
    document.getElementById("div6Respuesta").value = "";
    document.getElementById("div7Respuesta").value = "";
    document.getElementById("div8Respuesta").value = "";
}


