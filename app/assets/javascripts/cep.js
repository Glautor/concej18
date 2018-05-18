 $(document).ready(function() {

     function limpa_formulário_cep() {
         // Limpa valores do formulário de cep.
         // $("#rua").val("");
         $("#street").val("");
         $("#city").val("");
         $("#state").val("");
     }

     //Quando o campo cep perde o foco.
     $("#postal_code").blur(function() {

         //Nova variável "cep" somente com dígitos.
         var cep = $(this).val().replace(/\D/g, '');

         //Verifica se campo cep possui valor informado.
         if (cep != "") {

             //Expressão regular para validar o CEP.
             var validacep = /^[0-9]{8}$/;

             //Valida o formato do CEP.
             if (validacep.test(cep)) {


                 //Consulta o webservice viacep.com.br/
                 $.getJSON("//viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {

                     if (!("erro" in dados)) {
                         //Atualiza os campos com os valores da consulta.
                         // $("#rua").val(dados.logradouro);
                         $("#street").val(dados.logradouro + ", " + dados.bairro + ", ");
                         $("#street").focus();
                         $("#city").val(dados.localidade);
                         $("#state").val(dados.uf);
                     } //end if.
                     else {
                         //CEP pesquisado não foi encontrado.
                         limpa_formulário_cep();
                         toastr.error("<span>CEP não encontrado.</span>", "OPSS!");
                     }
                 });
             } //end if.
             else {
                 //cep é inválido.
                 limpa_formulário_cep();
                 toastr.error("<span>Formato de CEP inválido.</span>", "OPSS!");
             }
         } //end if.
         else {
             //cep sem valor, limpa formulário.
             limpa_formulário_cep();
         }
     });
 });