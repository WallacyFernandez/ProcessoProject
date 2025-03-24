# Adicionar Funcionalidade: Include [TIPO_CARACTERE]

## Descrição
Implementar a opção para incluir [TIPO_CARACTERE] no gerador de senhas. Esta funcionalidade permitirá que os usuários possam escolher incluir [TIPO_CARACTERE] em suas senhas geradas, aumentando a segurança e a diversidade das senhas.

## Escopo
- Adicionar uma checkbox na interface para ativar/desativar a inclusão de [TIPO_CARACTERE]
- Implementar a lógica para incluir [TIPO_CARACTERE] no processo de geração de senha
- Garantir que a opção seja funcional e persistente durante a sessão do usuário

## Requisitos Técnicos
- Modificar o componente `PasswordGenerator.jsx` para incluir a opção de [TIPO_CARACTERE]
- Adicionar uma constante com os caracteres de [TIPO_CARACTERE] disponíveis
- Atualizar a função `generatePassword()` para incorporar [TIPO_CARACTERE] quando selecionado
- Seguir o padrão de estilo existente para a nova checkbox

## Detalhes de Implementação

### 1. Adicionar constante no início do arquivo:
```javascript
const [CONSTANTE_NOME] = '[CARACTERES]';
```

### 2. Adicionar estado para controlar a checkbox:
```javascript
const [include[TIPO], setInclude[TIPO]] = useState(false);
```

### 3. Modificar a função generatePassword para incluir os novos caracteres:
```javascript
// Adicionar lógica para incluir [TIPO_CARACTERE] na lista de caracteres
if (include[TIPO]) {
    characterList += [CONSTANTE_NOME];
}
```

### 4. Adicionar a checkbox na interface:
```jsx
<div className="checkbox-field">
    <input 
        type="checkbox" 
        name="[tipo]" 
        id="[tipo]" 
        checked={include[TIPO]} 
        onChange={(e) => setInclude[TIPO](e.target.checked)} 
    />
    <label htmlFor="[tipo]">Include [TIPO_CARACTERE]</label>
</div>
```

## Critérios de Aceitação
- [ ] A checkbox de [TIPO_CARACTERE] deve ser exibida corretamente na interface
- [ ] Ao marcar a checkbox, senhas geradas devem conter [TIPO_CARACTERE]
- [ ] Ao desmarcar a checkbox, senhas geradas não devem conter [TIPO_CARACTERE]
- [ ] O código deve seguir o padrão de estilo e formatação do projeto
- [ ] A funcionalidade deve funcionar em conjunto com as outras opções de geração

## Possíveis Problemas
- Garantir que pelo menos um tipo de caractere esteja selecionado
- Possível impacto na distribuição aleatória dos caracteres
- Compatibilidade com as outras opções de geração

## Referências
- Componente atual: `src/Components/PasswordGenerator.jsx`
- Estilo CSS: `src/Components/PasswordGenerator.css` 