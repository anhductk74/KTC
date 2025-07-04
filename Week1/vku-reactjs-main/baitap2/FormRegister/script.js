document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const errors = [];

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const phone = document.getElementById('phone');
  const gender = document.querySelectorAll('input[name="gender"]');
  const dob = document.getElementById('dob');
  const country = document.getElementById('country');
  const hobbies = document.querySelectorAll('input[name="hobby"]');

  // Reset lỗi
  document.querySelectorAll('.form-control, .form-select').forEach(el => el.classList.remove('is-invalid'));
  document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

  // Họ tên
  if (fullName.value.trim().length < 3) {
    setError(fullName, 'Họ tên phải từ 3 ký tự');
    errors.push('fullName');
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    setError(email, 'Email không hợp lệ');
    errors.push('email');
  }

  // Mật khẩu
  if (password.value.length < 8 || !/\d/.test(password.value)) {
    setError(password, 'Mật khẩu ≥ 8 ký tự, có số');
    errors.push('password');
  }

  // Xác nhận mật khẩu
  if (password.value !== confirmPassword.value) {
    setError(confirmPassword, 'Mật khẩu không khớp');
    errors.push('confirmPassword');
  }

  // Số điện thoại
  if (!/^\d{10,}$/.test(phone.value)) {
    setError(phone, 'Số điện thoại không hợp lệ');
    errors.push('phone');
  }

  // Giới tính
  if (![...gender].some(g => g.checked)) {
    setError(gender[0].closest('.mb-3'), 'Chọn giới tính');
    errors.push('gender');
  }

  // Ngày sinh
  const birth = new Date(dob.value);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  if (!dob.value || age < 18) {
    setError(dob, 'Bạn phải trên 18 tuổi');
    errors.push('dob');
  }

  // Quốc gia
  if (!country.value) {
    setError(country, 'Vui lòng chọn quốc gia');
    errors.push('country');
  }

  // Sở thích
  if (![...hobbies].some(h => h.checked)) {
    setError(hobbies[0].closest('.mb-3'), 'Chọn ít nhất một sở thích');
    errors.push('hobby');
  }

  if (errors.length === 0) {
    alert("Đăng ký thành công!");
    this.reset();
  }
});

function setError(element, message) {
  const input = element.querySelector('input, select, textarea') || element;
  input.classList.add('is-invalid');
  const msg = element.querySelector('.error-message') || input.parentElement.querySelector('.error-message');
  if (msg) msg.textContent = message;
}
