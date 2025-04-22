async function Login()
{
    let Email = "carlosr.m.fernandes@gmail.com"
    let senha = "123456789"
    let url = "https://go-wash-api.onrender.com/api/login";

    let info = 
    {
        "email": Email,
        "user_type_id": 1,
        "password": senha,
    }

    if(!Email || !senha)
    {
        alert ("Todos os campos devem ser preenchidos")
        return
    }

    let api = await fetch(url ,
    {
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



}