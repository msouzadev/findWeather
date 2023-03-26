# useFetch

useFetch é um hook criado para lidar com os fetchs da aplicação e handle de errors. Ele por padrão ja lida com erro chamando a função handleApiError 

## utilização básica

```ts
const { data: expenses, doFetch: getExpenses, isFetching: loading } = useFetch<Pagination<Expensive>>('bill');
```

## parametros do hook

O unico parametro obrigatorio do hook é o path

### path
Função que retorna o fetch desejado. Exemplo: 
```ts
   useFetch<Pagination<Expensive>>('bill')
```

### method
metodo que vai ser utilizado ele aceita 'get', 'post', 'put', 'delete'. O padrão é 'get'
### config 
Objeto com as seguintes propriedades:
- defaultValue (opcional) - valor padrão do retorno do fetch
- onSuccess (opcional) - função de callback que vai rodar quando o fetch for feito com sucesso. Pode ser usado caso vc precise fazer alguma transformação no objeto da api. Ela retorna o response da api
- onError (opcional) - função de callback que vai rodar quando houver algum erro no fetch.

## retorno do hook

Esse hook retorna um objeto com as seguintes propriedades

### data
data é o retorno do fetch sendo um estado interno do hook pode ser usado na aplicação sem a necessidade de criar um estado no componente.

exemplo: 

```ts
//com useFetch
const { data: expenses, doFetch: getExpenses } = useFetch<Pagination<Expensive>>('bill');

// sem useFetch 
const [expenses, setExpenses] = useState<Expensive[]>();
const getExpenses = async () => {
    const [error, response] = await to(api().get('bill'));

    if (!response) {
      return handleApiError(error);
    }

    setExpenses(response.data.items);
};

```
### isfetching
isfetching é um estado que é setado enquanto a função esta sendo executada. Fazendo com que seja desnecessário criar um estado de loading no componente

exemplo: 
```ts
//com useFetch
const { data: expenses, doFetch: getExpenses, isFetching: loading } = useFetch<Pagination<Expensive>>('bill');

// sem useFetch 
const [expenses, setExpenses] = useState<Expensive[]>();
const [loading, setLoading] = useState(false);
const getExpenses = async () => {
    setLoading(true);
    const [error, response] = await to(api().get('bill'));
    setLoading(false);

    if (!response) {
      return handleApiError(error);
    }

    setExpenses(response.data.items);
};
```

### doFetch
função que vai fazer o fetch. Ela recebe o parêmetro da chamada

exemplo: 
```ts
//com useFetch
const { doFetch: getExpenses } = useFetch<Pagination<Expensive>>('bill');

getExpenses({ params: { page: 1, limit: 4, debitCredit: AmountSignal.NEGATIVE,  } });

// sem useFetch 
const getExpenses = async () => {
    const [error, response] = await to(api().get('bill', { params: { page: 1, limit: 4, debitCredit: AmountSignal.NEGATIVE } }));

    if (!response) {
      return handleApiError(error);
    }
};

getExpenses();
```

## Exemplo mais complexo

```ts
const [expenses, setExpenses] = useState<Expensive>();
const [page, setPage] = useState(1);

const { doFetch: getExpenses } = useFetch<Pagination<Expensive>>(() =>
    api().get('bill', { params: { page: 1, limit: 4, debitCredit: AmountSignal.NEGATIVE,  } }),
    {
        onSuccess: (newExpenses) => {
            setExpenses(oldValues=> [...oldValues, ...newExpenses]);
        },
        onError: () => {
            setExpenses([]);
            setPage(1);
        }
    }
);

useEffec(()=>{
    getExpenses({ params: { page: 1, limit: 4, debitCredit: AmountSignal.NEGATIVE,  } })
},[])

const nextpage = (newPage: number) =>{
    getExpenses({ params: { page: newPage, limit: 4, debitCredit: AmountSignal.NEGATIVE } })
}

```


## Fazendo post/put mesmo path
```ts

const { doFetch: createUser } = useFetch('user', 'post', {
    onSuccess: ()=>{
        console.log("usuário cadastrado com sucesso");
    }
});


const submit = ()=>{
    const user = {
        name: "Gustavo",
        lastName: "Bhan"
    }

    createUser(user);
}
```


## Fazendo post/put path diferente
```ts

const { doFetch: updateUser } = useFetch('user', 'put', {
    onSuccess: ()=>{
        console.log("usuário atualizado com sucesso");
    }
});


const submit = ()=>{
    const user = {
        id: "12132",
        name: "Gustavo",
        lastName: "Bhan"
    }

    updateUser(user, `user/${user.id}`);
}
```