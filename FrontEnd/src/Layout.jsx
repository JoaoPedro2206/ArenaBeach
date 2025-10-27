import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import BottomTabBar from './components/BottomTabBar';
import BookingModal from './components/BookingModal';
import CheckoutModal from './components/CheckoutModal';

export default function Layout() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  
  // ATUALIZAÇÃO 1: Adicione 'court' ao estado
  const [selectedBooking, setSelectedBooking] = useState({ 
    time: '', 
    price: '', 
    court: '' // <-- Novo campo
  });

  // ATUALIZAÇÃO 2: A função agora recebe 'court'
  const handleBookSlot = (time, price, court) => {
    setSelectedBooking({ time, price, court }); // <-- Salva a quadra
    setBookingModalOpen(true);
  };

  const handleConfirmBooking = () => {
    setBookingModalOpen(false);
    setCheckoutModalOpen(true);
  };

  return (
    <div className="layout-container">
      <Header />
      
      <main className="main-content">
        <Outlet context={{ handleBookSlot }} />
      </main>

      <BottomTabBar />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedTime={selectedBooking.time}
        selectedPrice={selectedBooking.price}
        selectedCourt={selectedBooking.court} // <-- ATUALIZAÇÃO 3: Passa a quadra para o modal
        onConfirm={handleConfirmBooking}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />
    </div>
  );
}