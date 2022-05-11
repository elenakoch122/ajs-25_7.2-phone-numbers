import uniformPhoneNumberFormat from '../app';

test('if the phone number contains more than just numbers', () => {
  expect(uniformPhoneNumberFormat('8 (927) 000-22-11')).toBe('+79270002211');
});

test('for russian phone number', () => {
  expect(uniformPhoneNumberFormat('89270002211')).toBe('+79270002211');
});

test('for not russian phone number', () => {
  expect(uniformPhoneNumberFormat('86 (927) 000-22-11')).toBe('+869270002211');
});

test('uniformPhoneNumberFormat function return value', () => {
  expect(uniformPhoneNumberFormat('+79270002211')).toBe('+79270002211');
});
