import { useState } from 'react';

// ATUALIZAÇÃO 1: Adicione 'selectedCourt' às props
const BookingModal = ({ isOpen, onClose, selectedTime, selectedPrice, selectedCourt, onConfirm }) => {
  const [duration, setDuration] = useState('1 hora');
  const [includeRecording, setIncludeRecording] = useState(false);

  const calculateTotal = () => {
    const basePrice = parseFloat(selectedPrice?.replace('R$ ', '').replace(',', '.') || '0');
    const recordingPrice = includeRecording ? 25 : 0;
    return (basePrice + recordingPrice).toFixed(2).replace('.', ',');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content slide-up">
        <div className="modal-header">
          <h3 className="modal-title">Confirmar Reserva</h3>
          <button onClick={onClose} className="modal-close-btn">
            <span>×</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="booking-summary-box">
            
            {/* ATUALIZAÇÃO 2: Adicione a linha da Quadra */}
            <div className="booking-summary-row">
              <span className="booking-summary-label">Quadra</span>
              <span className="booking-summary-value">{selectedCourt}</span>
            </div>
            
            <div className="booking-summary-row">
              <span className="booking-summary-label">Data</span>
              <span className="booking-summary-value">Segunda, 27 de Outubro</span>
            </div>
            <div className="booking-summary-row">
              <span className="booking-summary-label">Horário</span>
              <span className="booking-summary-value">{selectedTime}</span>
            </div>
          </div>

          <div className="form-group">
            {/* ... (o resto do formulário não muda) ... */}
            <label className="form-label">Duração</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-select"
            >
              <option value="1 hora">1 hora</option>
              <option value="1 hora e 30 minutos">1 hora e 30 minutos</option>
              <option value="2 horas">2 horas</option>
            </select>
          </div>

          <div className="recording-box">
            {/* ... (o checkbox não muda) ... */}
            <label className="recording-label">
              <input
                type="checkbox"
                checked={includeRecording}
                onChange={(e) => setIncludeRecording(e.target.checked)}
                className="form-checkbox"
              />
              <div>
                <span className="recording-text-label">Adicionar gravação do jogo</span>
                <p className="recording-text-price">+ R$ 25,00</p>
              </div>
            </label>
          </div>
        </div>

        <div className="modal-footer">
          {/* ... (o total e o botão não mudam) ... */}
          <div className="total-summary">
            <span className="total-summary-label">Total</span>
            <span className="total-summary-price">R$ {calculateTotal()}</span>
          </div>

          <button
            onClick={onConfirm}
            className="button-primary"
          >
            Confirmar e Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;