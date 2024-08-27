
        let textInput = document.getElementById('input-text');
        let textOutput = document.getElementById('output-text');
        let message = document.getElementById("message");

        let btnCodificar = document.getElementById('codificar');
        btnCodificar.addEventListener('click', codificar); 

        let btnDecodificar = document.getElementById('decodificar');
        btnDecodificar.addEventListener('click', decodificar);

        textarea.focus();

        function showMessage(msg) {
            document.getElementById('none').innerHTML = `<h1>${msg}</h1>`;
            document.getElementById('none').classList.remove('hidden');
        }

        function clearMessage() {
            document.getElementById('none').innerHTML = '';
            document.getElementById('none').classList.add('hidden');
        }


        function checkText() {
            const regex = /[A-ZÀ-ÿ]/;
          const check = regex.test(textInput.value);
            
            if (check) {
                showMessage("Apenas letras minúsculas e sem acento!");
                return false;
            } 
            clearMessage();
            return true; 


            clearMessage();
            let text = textInput.value;
            let txt = text
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');

            textOutput.value = txt;
            document.getElementById('btn-copy').innerHTML = '<button class="btn-copy" onclick="copy()">Copiar</button>';
        }

        function codificar() {
            if (textInput.value.length === 0) {
                showMessage("Nenhuma mensagem encontrada");
                textarea.focus();
                return;
            
            }

            if (!checkText()) {
                textarea.focus();
                return
            }
            

            clearMessage();
            let text = textInput.value;
            let txt = text
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');

            textOutput.value = txt;
            document.getElementById('btn-copy').innerHTML = '<button class="btn-copy" onclick="copy()">Copiar</button>';
        }

        function copy() {
            textOutput.select();
            document.execCommand('copy');
            message.innerHTML = 'Copiado para a área de transferência';
            setTimeout(() => { message.innerHTML = ''; }, 2000); // Mensagem desaparece após 2 segundos
            textInput.value = "";
        }








