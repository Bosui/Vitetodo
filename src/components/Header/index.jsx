import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import todologo from '../../assets/todologo.png';
import styles from './header.module.css';

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (title.trim()) {
            onAddTask(title);
            setTitle('');
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todologo} alt="Logo" />
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input
                    placeholder='Įveskite naują užduotį'
                    type="text"
                    value={title}
                    onChange={onChangeTitle}
                />
                <button type="submit">
                    Sukurti
                    <CgAdd />
                </button>
            </form>
        </header>
    );
}
