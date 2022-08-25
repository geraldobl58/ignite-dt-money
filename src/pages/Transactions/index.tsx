import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento</td>
              <td>
                <PriceHighlight variant="income">R$12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>25/08/2022</td>
            </tr>
            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant="outcome">- R$98,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>25/08/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
