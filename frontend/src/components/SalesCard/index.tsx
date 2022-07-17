import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

  const max = new Date();
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const [minDate, setMinDate] = useState(new Date(min));
  const [maxDate, setMaxDate] = useState(new Date(max));
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const dataMin = minDate.toISOString().slice(0, 10);
    const dataMax = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${dataMin}&maxDate${dataMax}`).then(response => {
      setSales(response.data.content);
    })
  }, [minDate, maxDate])

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker selected={minDate} onChange={(date: Date) => setMinDate(date)} className="dsmeta-form-control" dateFormat="dd/MM/yyyy" />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker selected={maxDate} onChange={(date: Date) => setMaxDate(date)} className="dsmeta-form-control" dateFormat="dd/MM/yyyy" />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="tc992">ID</th>
              <th className="tc576">Data</th>
              <th>Vendedor</th>
              <th className="tc992">Visitas</th>
              <th className="tc992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {
              sales.map(sale => {
                return (
                  <tr key={sale.id}>
                    <td className="tc992">{sale.id}</td>
                    <td className="tc576">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="tc992">{sale.visited}</td>
                    <td className="tc992">{sale.deals}</td>
                    <td>{sale.amount.toFixed()}</td>
                    <td>
                      <div className="dsmeta-btn-container">
                        <NotificationButton saleId={sale.id}/>
                      </div>
                    </td>
                  </tr>)
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard