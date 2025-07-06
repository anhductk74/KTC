import { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    country: '',
    hobbies: [] as string[],
    profilePicture: null as File | null,
    bio: '',
  });
  const [errors, setErrors] = useState({} as { [key: string]: string });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Full Name
    if (formData.fullName.length < 3) newErrors.fullName = 'Full Name must be at least 3 characters.';

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address.';

    // Password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) newErrors.password = 'Password must be at least 8 characters with letters and numbers.';

    // Confirm Password
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    // Phone Number
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number must be at least 10 digits.';

    // Gender
    if (!formData.gender) newErrors.gender = 'Please select a gender.';

    // Date of Birth
    if (formData.dateOfBirth) {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 18) newErrors.dateOfBirth = 'You must be at least 18 years old.';
    }

    // Country
    if (!formData.country || formData.country === 'Select Country') newErrors.country = 'Please select a country.';

    // Hobbies
    if (formData.hobbies.length === 0) newErrors.hobbies = 'Select at least one hobby.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hobby = e.target.value;
    const newHobbies = formData.hobbies.includes(hobby)
      ? formData.hobbies.filter(h => h !== hobby)
      : [...formData.hobbies, hobby];
    setFormData({ ...formData, hobbies: newHobbies });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration successful!');
      // Thêm logic gửi form ở đây
    }
  };

  return (
    <div className={styles.container}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Gender</label>
          <div className={styles.radioGroup}>
            <label><input type="radio" name="gender" value="Male" onChange={handleGenderChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleGenderChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleGenderChange} /> Other</label>
          </div>
          {errors.gender && <span className={styles.error}>{errors.gender}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="Select Country">Select Country</option>
            <option value="USA">USA</option>
            <option value="Vietnam">Vietnam</option>
          </select>
          {errors.country && <span className={styles.error}>{errors.country}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Hobbies</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" value="Reading" onChange={handleHobbyChange} /> Reading</label>
            <label><input type="checkbox" value="Traveling" onChange={handleHobbyChange} /> Traveling</label>
            <label><input type="checkbox" value="Gaming" onChange={handleHobbyChange} /> Gaming</label>
          </div>
          {errors.hobbies && <span className={styles.error}>{errors.hobbies}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Profile Picture</label>
          <input type="file" onChange={handleFileChange} />
          {formData.profilePicture ? <span>{formData.profilePicture.name}</span> : <span>No file chosen</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Bio</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className={styles.registerButton}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;