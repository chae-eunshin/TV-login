import React, { useState,useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
`;

const FieldSet = styled.fieldset`
  border: 2px solid #002545;
`;

const Container = styled.div`
  margin: 40px;
`;

const Input = styled.input`
  border: 3px solid grey;
  border-radius: 20px;
  padding: 10px;
  height: 60px;
  width: 100%;
  box-sizing: border-box;

  &:focus{
    border-color:brown;
  }
`;

const ErrorMessage = styled.p`
  color: red; /* 오류 메시지의 색상 */
`;

const Button = styled.button`
  background-color: #E0E7E9;
  border-radius:20px;
  height: 60px;
  width: 100%;
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [pw, setPw] = useState('');
  const [isValidpw, setIsValidpw] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    // 이메일 유효성 검사
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValidEmail(emailRegex.test(emailValue)); //test 메서드는 JS의 정규 표현식을 사용하여 특정 문자열이 정규 표현식의 패턴에 맞는지 확인하는 데 사용. 이 메서드는 주어진 문자열이 패턴과 일치하면 true를 반환하고, 일치하지 않으면 false를 반환
  };

  const handlePwChange = (event) => {
    const pwValue = event.target.value;
    setPw(pwValue);

    const pwRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$");
    setIsValidpw(pwRegex.test(pwValue));
    
  };

  useEffect(() => {
    // 이메일과 비밀번호가 모두 유효한 경우에만 isFormValid를 true로 설정
    setIsFormValid(isValidEmail && isValidpw);
  }, [isValidEmail, isValidpw]); // 의존성 배열에 isValidEmail과 isValidpw를 넣어서 이 값들이 변경될 때마다 실행


  return (
    <Form>
      <FieldSet>
        <h1>이메일과 비밀번호를 입력해주세요</h1>
        <Container>
          <p><b>이메일 주소</b></p>
          <Input id="email" type="email" placeholder="이메일 주소를 입력해주세요" value={email} onChange={handleEmailChange} />
          {!isValidEmail && <ErrorMessage>올바른 이메일 주소를 입력해주세요.</ErrorMessage>}
        </Container>
        <Container>
          <p><b>비밀번호</b></p>
          <Input id="password" type="password" placeholder="영문,숫자,특수문자 포함 8자 이상" value = {pw} onChange={handlePwChange}/>
          {!isValidpw && <ErrorMessage>올바른 비밀번호 형식으로 입력해주세요.</ErrorMessage>}
        </Container>
        <Container>
          <Button disabled={!isFormValid}>로그인</Button>
        </Container>
      </FieldSet>
    </Form>
  );
}
