import React from 'react';
import '../styles/pages/_login.scss'
import {useNavigate} from "react-router-dom";


const Login = () => {

    const [email,setEmail] = React.useState('')
    const [password, setPassword] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm({ email, password });
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsLoading(false);
            navigate('/home');
        }
    };

    const validateForm = ({ email, password }) => {
        const errors = {};

        if (!validateEmail(email)) {
            errors.email = '*Некорректный email адрес';
        }

        if (!validatePassword(password)) {
            errors.password = '*Пароль должен содержать минимум 8 символов, одну заглавную букву и не должен содержать пробелов';
        }

        return errors;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
        return re.test(password.trim());
    };
    return (
        <form className='wrapper' onSubmit={handleSubmit}>
            <div className='login-block'>
                <p className='flex justify-center font-bold mb-20 text-3xl opacity-40'>Авторизация</p>
                <div className='ml-24'>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className='flex  justify-center'>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='123dfsu@gmail.com'
                        onChange={handleEmailChange}
                        className='outline-none w-3/4 p-2 rounded-3xl pl-6'
                    />
                </div>
                <div className='flex w-3/4 ml-24 mt-8'>
                    {errors.password && <p className="error">{errors.password}</p>}

                </div>
                <div className='flex justify-center mb-12'>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Пароль'
                        onChange={handlePasswordChange}
                        className='outline-none w-3/4 p-2 rounded-3xl pl-6'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button type="submit" disabled={isLoading} className='bg-amber-50 font-bold rounded-3xl p-4'>
                        {isLoading ? 'Идет загрузка...' : 'Войти'}
                    </button>
                </div>

            </div>
        </form>
    );
};

export default Login;