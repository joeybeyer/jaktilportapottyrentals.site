import { PRICING } from '@/lib/constants'

interface PricingTableProps {
  showAll?: boolean
}

export default function PricingTable({ showAll = true }: PricingTableProps) {
  const rows = [
    { name: 'Standard Porta Potty', ...PRICING.standard },
    { name: 'Deluxe w/ Hand Wash', ...PRICING.deluxe },
    { name: 'ADA Accessible', ...PRICING.ada },
    { name: 'Luxury Restroom Trailer', ...PRICING.luxury },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Unit Type</th>
            <th>Daily</th>
            <th>Weekly</th>
            {showAll && <th>Monthly</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="font-medium">{row.name}</td>
              <td>{row.daily}</td>
              <td>{row.weekly}</td>
              {showAll && <td>{row.monthly}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
