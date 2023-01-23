# MyControl 1.0

#

## Cadastro de usuario

### Requisitos funcionais

- Cadastrar novo usuario.

### Regra de negocio

- Não pode ter mais de um usuario com o mesmo Email ou CPF.

- A senha do usuario deve ter mais de 8 caracteres.

- O usuario deve informar Nome, email, CPF, senha, e data de nascimento.

## Login de usuario

### Requisitos funcionais

- Um usuario deve realizar login.

### Regra de negocio

- O usuario so deve poder realizar login por um dispositivo por vez

- Um usuario deve realizar login com email e senha.

- um usuario deve conseguir fazer login com outras plataformas (github,facebook,google)

## Cadastro de Transação

### Requisitos funcionais

- Deve ser possivel cadastar uma nova transação.

### Regra de negocio

- O usuario deve informar Valor, Data e tipo da transação.

- A transação pode ser do tipo debito ou deposito.

- A transação deve ser associado a um usuario.

- A transação pode ser associado a uma categoria

- Caso não seja passada uma data para a transação, a data atual deve ser adotada.

## Cadastro de categoria

### Requisitos funcionais

- Deve ser possivel cadastar uma nova categoria.

### Regra de negocio

- O usuario deve informar nome e usuario ID deve ser associoado pelo usuario logado.

- Não deve ser possivel cadastrar duas categorias com o mesmo nome para o mesmo usuario.

- Ao deletar uma categoria as transações associadas devem ser deletadas.

## Listagem de Balanço

### Requisitos funcionais

- Deve retornar o balanço dos gastos do usuario.

### Requisitos não funcionais

- O cauculo de balanço é feito subtraindo os debitos dos depositos
