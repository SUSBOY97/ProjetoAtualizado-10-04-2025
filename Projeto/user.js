async function save()
{
   let name = "";
   let email = "";
   let userType = 1;
   let password = "";
   let termos = "";
   let birthday = "";
   let cpf_cnpj= "";
   let Celular = "";

   info = 
   {
    "name": name,
    "email": email,
    "user_type_id": userType,
    "password": password,
    "cpf_cnpj": cpf_cnpj,
    "termos": termos,
    "birthday": birthday,
    "Celular" : Celular,
   }

   let api = await fetch("https://go-wash-api.onrender.com/api/user" ,{
    method:"POST",
    body: JSON.stringify(info),
    headers:
    {
        'Content-Type':'application/json'
    }
    });

    if(api.ok)
    {
        let response = await api.json()
        console.log(response);
        return
    }
    let responseErro = await api.json()
    console.log(responseErro);
}