import React, { useState } from 'react';
import './Orders.css'; // Importa el archivo CSS

// Datos simulados de órdenes
const simulatedOrders = [
  { 
    id: 1, 
    orderDate: '2023-10-01', 
    orderItems: [{ product: 'Membresía Mensual', quantity: 1 }, { product: 'Clases de Yoga', quantity: 2 }]
  },
  { 
    id: 2, 
    orderDate: '2023-10-02', 
    orderItems: [{ product: 'Entrenamiento Personal', quantity: 1 }] 
  },
  { 
    id: 3, 
    orderDate: '2023-10-03', 
    orderItems: [{ product: 'Suplementos de Proteína', quantity: 3 }] 
  },
];

const Orders = () => {
  // Estado para las órdenes
  const [orders, setOrders] = useState(simulatedOrders);
  
  // Estado para el formulario
  const [formData, setFormData] = useState({
    orderDate: '',
    orderItems: [{ product: '', quantity: 1 }],
  });

  // Estado para mostrar/ocultar el modal
  const [showModal, setShowModal] = useState(false);

  // Simulamos un estado de carga
  const loading = false;
  const error = false;

  // Si hay un error, mostramos un mensaje
  if (error) return <p>Error: {error.message}</p>;

  // Manejar cambios en el formulario
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith('item')) {
      const items = [...formData.orderItems];
      items[index] = { ...items[index], [name]: value };
      setFormData({ ...formData, orderItems: items });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: orders.length + 1,
      orderDate: formData.orderDate,
      orderItems: formData.orderItems,
    };
    setOrders([...orders, newOrder]); // Añadir la nueva orden a la lista
    setFormData({ orderDate: '', orderItems: [{ product: '', quantity: 1 }] }); // Limpiar el formulario
    setShowModal(false); // Ocultar el modal después de registrar una nueva orden
  };

  // Método para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">Órdenes</h2>
      <button className="btn-register" onClick={() => setShowModal(true)}>Registrar nueva orden</button>
      {loading ? (
        <p>Cargando órdenes...</p>
      ) : (
        <ul className="orders-list">
          {orders.map(order => (
            <li key={order.id} className="order-item">
              ID de Orden: <strong>{order.id}</strong>, Fecha: {order.orderDate}, Artículos: 
              <ul>
                {order.orderItems.map((item, index) => (
                  <li key={index}>{item.product} (Cantidad: {item.quantity})</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2 className="form-title">Registrar nueva orden</h2>
            <form className="order-form" onSubmit={handleSubmit}>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                required
                className="form-input"
              />
              {formData.orderItems.map((item, index) => (
                <div key={index} className="order-item-form">
                  <input
                                        type="text"
                                        name={`itemProduct${index}`}
                                        placeholder="Producto"
                                        value={item.product}
                                        onChange={(e) => handleChange(e, index)}
                                        required
                                        className="form-input"
                                      />
                                      <input
                                        type="number"
                                        name={`itemQuantity${index}`}
                                        placeholder="Cantidad"
                                        value={item.quantity}
                                        onChange={(e) => handleChange(e, index)}
                                        required
                                        className="form-input"
                                        min="1"
                                      />
                                    </div>
                                  ))}
                                  <button type="button" onClick={() => setFormData({
                                    ...formData,
                                    orderItems: [...formData.orderItems, { product: '', quantity: 1 }]
                                  })} className="btn-add-item">Agregar Artículo</button>
                                  <button type="submit" className="form-button">Registrar</button>
                                </form>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    };
                    
                    export default Orders;