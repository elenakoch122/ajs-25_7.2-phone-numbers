export default function uniformPhoneNumberFormat(phoneNumber) {
  let correctPhone = phoneNumber;
  // убираем лишние символы, оставляем только цифры
  if (/\D/.test(correctPhone)) {
    correctPhone = correctPhone.replace(/\D/g, '');
  }

  // для российских номеров
  if (/^(8|7)\d{10}$/.test(correctPhone)) {
    correctPhone = correctPhone.replace(/^(8|7)/, '+7');
  }

  // для не российских номеров
  if (/^\d+$/.test(correctPhone)) {
    correctPhone = `+${correctPhone}`;
  }

  return correctPhone;
}
