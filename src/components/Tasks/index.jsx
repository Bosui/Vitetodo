import { Task } from "../Task";
import styles from './tasks.module.css';

export function Tasks({ tasks, onComplete, onDelete, onEdit }) {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Sukurtos Užduotys</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p>
                        <span className={styles.textPurple}>Atliktos užduotys</span> 
                    </p>
                    <span>{completedTasks} iš {taskQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.length === 0 ? (
                    <p className={styles.noTasks}>Nėra užduočių</p>
                ) : (
                    tasks.map((task) => (
                        <Task 
                            key={task.id} 
                            task={task} 
                            onDelete={onDelete} 
                            onComplete={onComplete} 
                            onEdit={onEdit} 
                        />
                    ))
                )}
            </div>
        </section>
    );
}
