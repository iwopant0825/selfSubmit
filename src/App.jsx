import styled from 'styled-components';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';


function App() {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [motivation, setMotivation] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      studentId,
      introduction,
      motivation,
      additionalComments
    });
  };

  const writeData = async () => {
    try {
      await addDoc(collection(db, "test"), { 
        name: name,
        studentId:studentId, 
        introduction:introduction,
        motivation:motivation,
        additionalComments:additionalComments,
      });
      console.log("데이터가 'test' 컬렉션에 성공적으로 작성되었습니다");
      
    } catch (error) {
      console.error("'test' 컬렉션에 데이터 작성 중 오류 발생: ", error);
    }
  };

  return (
    <Container>
      <Title>지원 폼</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>이름:</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>학번:</Label>
          <Input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>자기소개:</Label>
          <TextArea value={introduction} onChange={(e) => setIntroduction(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>지원동기:</Label>
          <TextArea value={motivation} onChange={(e) => setMotivation(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>하고 싶은 말:</Label>
          <TextArea value={additionalComments} onChange={(e) => setAdditionalComments(e.target.value)} />
        </FormGroup>
        <SubmitButton type="submit" onClick={writeData}>제출</SubmitButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default App;
