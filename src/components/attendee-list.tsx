import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

import { IconButton } from './icon-button'
export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl bold ">Participantes</h1>
        <div
          className="px-3 w-72 py-1.5 border 
        border-white/10
          rounded-lg  
          flex items-center gap-3"
        >
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-none p-0 text-sm"
            placeholder="Buscar participante"
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                  name=""
                  id=""
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participantes
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
              <th />
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <tr
                  key={index}
                  className="
            border-b 
            border-white/10
            hover:bg-white/5"
                >
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10"
                      name=""
                      id=""
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">232323</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Don Diego de la Vaga
                      </span>
                      <span>donDiegoVega@gmail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    8 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    5 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <IconButton transparent>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 120 itens
              </td>
              <td
                className="py-3 px-4 text-sm text-zinc-300 text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span> Página 1 de 22</span>
                  <div className="flex gap-1">
                    <IconButton>
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}