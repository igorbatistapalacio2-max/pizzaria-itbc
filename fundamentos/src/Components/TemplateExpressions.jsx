const TemplateExpressions = () => {    
    const name = "Igor"

    const data = {
        age: 42,
        Job: "programmer"
    }
    /* 
    {  } -> template expression: para incorporar e renderizar expressões, variáveis ou funções dinamicas
            JavaScript
       
    vamos utiliza-lo "dentro" do nosso codigo html, veja:
    */


return (

    <div>
        <h3>Olá {name}, tudo bem?</h3>
        <p>Você atua como {data.job}</p>
        <p>Sua idade é {data.age}</p>
        <p>{5 + 5}</p>
        <p>{console.log("JSX React")}</p>

    </div>
)
  
}

export default TemplateExpressions