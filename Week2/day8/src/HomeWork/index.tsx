import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import styles from './RegistrationForm.module.css'

const schema = yup.object({
  fullName: yup.string().min(3, 'Full Name must be at least 3 characters').required(),
  email: yup.string().email('Invalid email address').required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters with letters and numbers')
    .matches(/[A-Za-z]/, 'Password must contain letters')
    .matches(/[0-9]/, 'Password must contain numbers')
    .matches(/^[\x00-\x7F]*$/, 'Password must not contain Vietnamese characters')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required(),
  phoneNumber: yup
    .string()
    .matches(/^\d{10,}$/, 'Phone number must be at least 10 digits')
    .required(),
  gender: yup.string().required('Please select a gender'),
  dateOfBirth: yup
    .string()
    .test('age', 'You must be at least 18 years old', value => {
      if (!value) return false
      const today = new Date()
      const dob = new Date(value)
      let age = today.getFullYear() - dob.getFullYear()
      const m = today.getMonth() - dob.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--
      return age >= 18
    })
    .required(),
  country: yup.string().notOneOf(['Select Country'], 'Please select a country').required(),
  hobbies: yup.array().of(yup.string()).min(1, 'Select at least one hobby'),
  bio: yup.string().optional(),
}).required()

const RegistrationForm = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      gender: '',
      dateOfBirth: '',
      country: 'Select Country',
      hobbies: [],
      bio: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log('Form data:', data)
    console.log('Profile picture:', profilePicture)
    alert('Registration successful!')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePicture(e.target.files[0])
    }
  }

  return (
    <div className={styles.container}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type="text" {...register('fullName')} />
          {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" {...register('email')} />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className={styles.formGroup}>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>

        {/* Confirm Password */}
        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
        </div>

        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" {...register('phoneNumber')} />
          {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber.message}</span>}
        </div>

        {/* Gender */}
        <div className={styles.formGroup}>
          <label>Gender</label>
          <div className={styles.radioGroup}>
            <label><input type="radio" value="Male" {...register('gender')} /> Male</label>
            <label><input type="radio" value="Female" {...register('gender')} /> Female</label>
            <label><input type="radio" value="Other" {...register('gender')} /> Other</label>
          </div>
          {errors.gender && <span className={styles.error}>{errors.gender.message}</span>}
        </div>

        {/* Date of Birth */}
        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <input type="date" {...register('dateOfBirth')} />
          {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth.message}</span>}
        </div>

        {/* Country */}
        <div className={styles.formGroup}>
          <label>Country</label>
          <select {...register('country')}>
            <option value="Select Country">Select Country</option>
            <option value="USA">USA</option>
            <option value="Vietnam">Vietnam</option>
          </select>
          {errors.country && <span className={styles.error}>{errors.country.message}</span>}
        </div>

        {/* Hobbies */}
        <div className={styles.formGroup}>
          <label>Hobbies</label>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" value="Reading" {...register('hobbies')} /> Reading</label>
            <label><input type="checkbox" value="Traveling" {...register('hobbies')} /> Traveling</label>
            <label><input type="checkbox" value="Gaming" {...register('hobbies')} /> Gaming</label>
          </div>
          {errors.hobbies && <span className={styles.error}>{errors.hobbies.message as string}</span>}
        </div>

        {/* Profile Picture */}
        <div className={styles.formGroup}>
          <label>Profile Picture</label>
          <input type="file" onChange={handleFileChange} />
          {profilePicture ? <span>{profilePicture.name}</span> : <span>No file chosen</span>}
        </div>

        {/* Bio */}
        <div className={styles.formGroup}>
          <label>Bio</label>
          <textarea {...register('bio')}></textarea>
        </div>

        <button type="submit" className={styles.registerButton}>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
