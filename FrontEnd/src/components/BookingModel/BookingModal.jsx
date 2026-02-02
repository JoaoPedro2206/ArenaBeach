import { useState } from 'react';
import './BookingModal.css';

// Função para formatar a data
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString + 'T12:00:00');
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formatted = date.toLocaleDateString('pt-BR', options);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

/* MUDANÇA: Atualiza as props recebidas */
const BookingModal = ({ isOpen, onClose, slot, selectedDate, onConfirm }) => {
  
  const calculateTotal = () => {
    /* MUDANÇA: Usa slot?.price */
    const basePrice = parseFloat(slot?.price?.replace('R$', '').replace(',', '.') || '0');
    return basePrice.toFixed(2).replace('.', ',');
  };

  if (!isOpen || !slot) return null; /* Adiciona verificação para !slot */

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Resumo da Reserva</h3>
          <button onClick={onClose} className="modal-close-btn">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="booking-details">
            <div className="detail-item">
              <span className="detail-label">Quadra</span>
              {/* MUDANÇA: Usa slot.court */}
              <span className="detail-value">{slot.court}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Data</span>
              <span className="detail-value">{formatDate(selectedDate)}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Horário</span>
              {/* MUDANÇA: Usa slot.time */}
              <span className="detail-value">{slot.time}</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-summary">
            <span className="total-summary-label">Total</span>
            <span className="total-summary-price">R$ {calculateTotal()}</span>
          </div>

          <button
            onClick={onConfirm}
            className="confirm-button"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;