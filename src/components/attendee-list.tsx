import { Search } from 'lucide-react'
export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl bold ">Participantes</h1>
        <div
          className="px-3 w-72 py-1.5 border 
        border-white/10
          rounded-lg text-sm 
          flex items-center gap-3"
        >
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none"
            placeholder="Buscar participante"
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Código</th>
            <th>Participantes</th>
            <th>Data de inscrição</th>
            <th>Data do check-in</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td>232323</td>
            <td>
              <div>
                <span>Don Diego de la Vaga</span>
                <span>donDiegoVega@gmail.com</span>
              </div>
            </td>
            <td>8 dias atrás</td>
            <td>5 dias atrás</td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Mostrando 10 de 120 itens</td>
            <td colSpan={3}> Página de 23</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
