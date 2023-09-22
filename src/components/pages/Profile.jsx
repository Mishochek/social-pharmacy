import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Импорт axios для отправки данных на сервер

export default function Profile({ user }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newName, setNewName] = useState(user.login);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const toggleEditName = () => {
    setIsEditingName(!isEditingName);
    setIsSubmitEnabled(true); // При изменении имени сбрасываем активность кнопки Submit
  };

  const toggleEditEmail = () => {
    setIsEditingEmail(!isEditingEmail);
    setIsSubmitEnabled(true); // При изменении почты сбрасываем активность кнопки Submit
  };

  const toggleEditPassword = () => {
    setIsEditingPassword(!isEditingPassword);
    setIsSubmitEnabled(true); // При изменении пароля сбрасываем активность кнопки Submit
  };

  const handleSaveChanges = async () => {
    // Отправить измененные данные на сервер
    const formData = new FormData();
    formData.append('login', newName);
    formData.append('email', newEmail);
    formData.append('hashpass', newPassword);

    try {
      const response = await axios.patch('/api/edit', formData);
      // Обработка успешного запроса, например, обновление состояния на основе ответа от сервера
      console.log('Данные успешно отправлены на сервер:', response.data);
      setIsSubmitEnabled(false); // Сбрасываем активность кнопки Submit после успешной отправки
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
        { isEditingName ?
      <ListGroup variant="flush">
        <ListGroup.Item>
            <input
              name="login"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              name="email"
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <input
              name="hashpass"
              type="password"
              value={user.hashpass}
              onChange={(e) => setNewPassword(e.target.value)}
            />
        </ListGroup.Item>
      </ListGroup> : 
      <>
      <p>{user.login}</p>
                  <p>{user.email}</p>
      <p>{user.hashpass}</p>
      </>
}
      <Button variant="info" onClick={toggleEditName}>
        Изменить данные
      </Button>
      {isSubmitEnabled ? (
        <Button
          variant="primary"
          onClick={() => {
            handleSaveChanges();
            setIsSubmitEnabled(true);
          }}
        >
          Submit
        </Button>
      ) : null}
    </Card>
  );
}
