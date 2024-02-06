import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NewDeveloperModal } from './components/NewDeveloperModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewModalDeveloperOpen, setIsNewModalDeveloperOpen] = useState(false);

  function handleOpenNewDeveloperModal() {
    setIsNewModalDeveloperOpen(true);
  }

  function handleCloseNewDeveloperModal() {
    setIsNewModalDeveloperOpen(false);
  }

  return (
    <>
      <Header onOpenNewDeveloperModal={handleOpenNewDeveloperModal} />

      <Home />

      <NewDeveloperModal
        isOpen={isNewModalDeveloperOpen}
        onRequestClose={handleCloseNewDeveloperModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
