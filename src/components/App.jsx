import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import GlobalTitle from './Layout/Title';
import FormList from './FormList/FormList';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchAll } from '../redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalTitle title="Phonebook" />
      <FormList />
      <GlobalTitle title="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Layout>
  );
}

export default App;
