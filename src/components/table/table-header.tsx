import type { ComponentProps } from 'react'

interface TableHeadProps extends ComponentProps<'th'> {}

export function TableHeader(props: TableHeadProps) {
  return (
    <th {...props} className="py-3 px-4 text-sm font-semibold text-left"></th>
  )
}
