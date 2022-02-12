let displayOutput = document.getElementById('display-output');

        function display(num){
            displayOutput.value += num;
        }

        function equal(){
            try{
                displayOutput.value = eval(displayOutput.value);
            }
            catch{
                alert('enter right value');
            }
        }

        function clr(){
            displayOutput.value = '';
        }

        function del(){
            displayOutput.value = displayOutput.value.slice(0,-1);

        }