import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="m-4">
      <div className="text-3xl font-bold mb-7">회원가입</div>
      <div>
        <TextField label="이름" placeholder="이름을 입력해주세요." />
        <TextField label="생년월일" placeholder="생년월일을 입력해주세요." />
        <TextField label="휴대폰 번호" placeholder="번호를 입력해주세요." />
        <TextField label="국적" placeholder="국적을 입력해주세요." />
      </div>
      <div className="text-center py-3 text-gray-800 border border-gray-800 mt-2">
        회원가입
      </div>
    </div>
  );
};
