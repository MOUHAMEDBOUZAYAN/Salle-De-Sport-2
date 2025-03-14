// Signup.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import toast, { Toaster } from "react-hot-toast"; // Importer toast et Toaster

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        if (errors[input.name]) {
            setErrors({ ...errors, [input.name]: null });
        }
    };

    const validateFields = () => {
        const newErrors = {};
        if (!data.firstName.trim()) newErrors.firstName = "First name is required";
        if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!data.email.trim()) newErrors.email = "Email is required";
        if (!data.password.trim()) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        try {
            const { data: res } = await axios.post("http://localhost:8999/api/users", data);
            toast.success("Compte créé avec succès ! Redirection en cours..."); // Message de succès
            setTimeout(() => navigate("/login"), 2000); // Rediriger après 2 secondes
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                toast.error(error.response.data.message); // Message d'erreur
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className="bg-cyan-900 text-white m-2 px-14 py-2 rounded-2xl">
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>

                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            className={`${styles.input} ${errors.firstName ? styles.input_error : ""}`}
                        />
                        {errors.firstName && <p className={styles.error_msg}>{errors.firstName}</p>}

                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            className={`${styles.input} ${errors.lastName ? styles.input_error : ""}`}
                        />
                        {errors.lastName && <p className={styles.error_msg}>{errors.lastName}</p>}

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            className={`${styles.input} ${errors.email ? styles.input_error : ""}`}
                        />
                        {errors.email && <p className={styles.error_msg}>{errors.email}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            className={`${styles.input} ${errors.password ? styles.input_error : ""}`}
                        />
                        {errors.password && <p className={styles.error_msg}>{errors.password}</p>}

                        <button type="submit" className="bg-cyan-900 text-white m-2 px-14 py-2 rounded-2xl">
                            Sign Up
                        </button>
                    </form>

                    <div className={styles.social_icons}>
                        <a href="#" className={styles.icon_link}>
                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                        </a>
                        <a href="#" className={styles.icon_link}>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" className={styles.icon_link}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <Toaster /> {/* Ajouter le Toaster ici pour afficher les notifications */}
        </div>
    );
};

export default Signup;