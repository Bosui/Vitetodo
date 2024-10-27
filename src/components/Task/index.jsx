import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { TbTrash } from 'react-icons/tb';
import styles from './task.module.css';

export function Task({ task, onComplete, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setEditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editedTitle.trim()) {
            onEdit(task.id, editedTitle);
            setIsEditing(false);
        }
    };

    return (
        <div className={styles.task}>
            <button
                className={styles.checkContainer}
                onClick={() => onComplete(task.id)}
                aria-label="Toggle task completion"
            >
                {task.isCompleted ? (
                    <BsFillCheckCircleFill className={styles.checkIcon} />
                ) : (
                    <div className={styles.checkIconPlaceholder} />
                )}
            </button>

            {isEditing ? (
                <form onSubmit={handleSubmit} className={styles.editForm}>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={handleChange}
                        onBlur={() => setIsEditing(false)}
                        autoFocus
                        className={styles.editInput} 
                    />
                    <button type="submit" className={styles.saveButton}>Užsaugoti</button>
                </form>
            ) : (
                <>
                    <p
                        className={task.isCompleted ? styles.textCompleted : ""}
                        onDoubleClick={handleDoubleClick}
                    >
                        {task.title}
                    </p>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.editButton} onClick={handleDoubleClick}>
                            <MdModeEdit className={styles.icon} />
                        </button>
                        <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                            <TbTrash size={20} className={styles.icon} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
