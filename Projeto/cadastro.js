async function cadastro()
{

   let nome = document.getElementById("nome").value;
   let DataNascimento = document.getElementById("data_nascimento").value;
   let CPF_CNPJ = document.getElementById("CPF_CNPJ").value;
   let Email = document.getElementById("email").value;
   let senha = document.getElementById("senha").value;
   let Celular = document.getElementById("Celular").value;
   let termos = document.getElementById("termos").value;

   let url = "https://go-wash-api.onrender.com/api/user";

    let parametros =
    {
        "name": nome,
        "email": Email,
        "user_type_id": 1,
        "password": senha,
        "cpf_cnpj": CPF_CNPJ,
        "terms": termos,
        "birthday": DataNascimento,
        "Celular" : Celular,
    }

    if(!nome || !DataNascimento || !CPF_CNPJ || !Email || !senha || !Celular)
    {
        alert ("Todos os campos devem ser preenchidos")
        return
    }
    if(senha.length < 6)
    {
        alert ("Senha necessita ter minimo de 6  digitos")
        return
    }

    if(termos == 0)
    {
        alert("teste")
    }
   let api = await fetch(url,
    {
        method:"POST",
        body:JSON.stringify(parametros),
        headers:
        {
            "Content-Type": "application/json"
        }
   })

   if(api.ok)
    {
        let response = await api.json()
        console.log(response);
            alert ("Cadastro efetuado com sucesso.Enviamos um link de ativacao para o email")
   }
}