import React from 'react'
import { Button } from '../../ComponentsStyles/Components'
import './newsletter.css'
export const Newsletter = () => {
    return (

        <div className='container--newsletter'>
            <h3>Receba Nossa Newsletter</h3>
            <div className='box--newsletter'>
                <input type="text" placeholder='Digite seu  e-mail' />
                <Button tamanho={'-131px'} width={'131px'} borda={'4px'} fontSize={'16px'}>Enviar</Button>
            </div>
        </div>

    )
}
