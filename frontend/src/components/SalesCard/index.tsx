import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

  const max = new Date();
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const [minDate, setMinDate] = useState(new Date(max));
  const [maxDate, setMaxDate] = useState(new Date(min));



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
            <tr>
              <td className="tc992">#341</td>
              <td className="tc576">28/06/2022</td>
              <td>Anakin</td>
              <td className="tc992">15</td>
              <td className="tc992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="tc992">#341</td>
              <td className="tc576">28/06/2022</td>
              <td>Anakin</td>
              <td className="tc992">15</td>
              <td className="tc992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard