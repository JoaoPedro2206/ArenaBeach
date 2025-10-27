import { useState } from 'react';

const CheckoutModal = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    saveCard: false
  });
  
  const handleInput = (e) => {
    setCardData({...cardData, [e.target.name]: e.target.value});
  }

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content slide-up">
        <div className="modal-header">
          <h3 className="modal-title">Pagamento</h3>
          <button onClick={onClose} className="modal-close-btn">
            <span>×</span>
          </button>
        </div>

        {/* Tabs de Pagamento */}
        <div className="payment-tabs">
          <button
            className={`payment-tab-btn ${paymentMethod === 'pix' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('pix')}
          >
            PIX
          </button>
          <button
            className={`payment-tab-btn ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            Cartão
          </button>
        </div>

        {/* PIX Tab */}
        {paymentMethod === 'pix' && (
          <div className="pix-container">
            <div className="pix-qr-code">
              <span>QR</span>
            </div>
            <p className="pix-text">Escaneie o código QR ou use o Pix Copia e Cola</p>
            <button className="button-secondary">
              Copiar Código PIX
            </button>
          </div>
        )}

        {/* Cartão Tab */}
        {paymentMethod === 'card' && (
          <form className="form-group" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group col-span-2">
              <label className="form-label">Número do Cartão</label>
              <input
                type="text"
                name="number"
                placeholder="0000 0000 0000 0000"
                value={cardData.number}
                onChange={handleInput}
                className="form-input"
              />
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Validade</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/AA"
                  value={cardData.expiry}
                  onChange={handleInput}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="000"
                  value={cardData.cvv}
                  onChange={handleInput}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group col-span-2">
              <label className="form-label">Nome no Cartão</label>
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={cardData.name}
                onChange={handleInput}
                className="form-input"
              />
            </div>
            <label className="form-checkbox-label">
              <input
                type="checkbox"
                checked={cardData.saveCard}
                onChange={(e) => setCardData({ ...cardData, saveCard: e.target.checked })}
                className="form-checkbox"
              />
              <span className="form-checkbox-text">Salvar cartão para próximas compras</span>
            </label>
          </form>
        )}

        {/* Resumo do Pedido */}
        <div className="order-summary-box">
          <h4 className="order-summary-title">Resumo do Pedido</h4>
          <div className="order-summary-content">
            <div className="order-summary-row">
              <span className="order-summary-row-label">Quadra - 1 hora</span>
              <span>R$ 80,00</span>
            </div>
            <div className="order-summary-row">
              <span className="order-summary-row-label">Gravação</span>
              <span>R$ 25,00</span>
            </div>
            <div className="order-summary-row order-summary-total-row">
              <span>Total</span>
              <span className="order-summary-total-price">R$ 105,00</span>
            </div>
          </div>
        </div>

        <button className="button-primary">
          Finalizar Pagamento
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;