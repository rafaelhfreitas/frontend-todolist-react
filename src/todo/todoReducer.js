const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
            _id: 1,
            description: 'Pagar fatura do cartão ',
            done: true
        },
        {
            _id: 2,
            description: 'Reunião com a equipe',
            done: false
        },{
            _id: 3,
            description: 'Consulta médica na quarta',
            done: false
        }]
}        


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGE' : 
            return {...state, description: action_payload }
        default: 
            return state
    }
}
