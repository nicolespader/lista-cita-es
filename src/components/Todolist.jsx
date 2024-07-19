import React, { useState } from 'react';
import '../style.css';

function Todolist() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Quem tem luz própria jamais ficará na escuridão.' },
        { id: 2, text: 'A inspiração jamais chega primeiro que o esforço.' },
        { id: 3, text: 'Acredite que você pode, e você já está no meio do caminho.' },
        { id: 4, text: 'Seja a mudança que você deseja ver no mundo.' },
        { id: 5, text: 'Acredite em milagres, mas não dependa deles.' },
        { id: 6, text: 'Você é mais forte do que imagina.' },
        { id: 7, text: 'Sonhe grande e atreva-se a falhar.' },
        { id: 8, text: 'A persistência é o caminho do êxito.' },
        { id: 9, text: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.' },
    ]);

    const [novaCitacao, setNovaCitacao] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const handleAddCitacao = () => {
        const newTask = { id: tasks.length + 1, text: novaCitacao };
        setTasks([...tasks, newTask]);
        setNovaCitacao('');
    };

    const handleRemoveCitacao = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleEditCitacao = (task) => {
        setIsEditing(true);
        setCurrentTask({ ...task });
    };

    const handleUpdateCitacao = () => {
        const updatedTasks = tasks.map(task =>
            task.id === currentTask.id ? currentTask : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTask(null);
    };

    return (
        <section>
            <h1>Citações Inspiradoras</h1>

            <div className='subtitulo'>
                <h2>Citações inspiradoras têm um poder único de tocar nossas emoções, motivar ações e mudar perspectivas. Elas encapsulam sabedoria, experiência e insights profundos em poucas palavras, tornando-se uma fonte de reflexão e inspiração contínua. Vou compartilhar algumas dessas citações com vocês, na esperança de que possam trazer clareza, encorajamento e uma nova visão para nossas jornadas individuais.</h2>
            </div>
            <table>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>
                                {isEditing && currentTask.id === task.id ? (
                                    <input
                                        type="text"
                                        value={currentTask.text}
                                        onChange={(e) => setCurrentTask({ ...currentTask, text: e.target.value })}
                                    />
                                ) : (
                                    task.text
                                )}
                            </td>
                            <td>
                                {isEditing && currentTask.id === task.id ? (
                                    <button onClick={handleUpdateCitacao}>Salvar</button>
                                ) : (
                                    <button onClick={() => handleEditCitacao(task)}>Editar</button>
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleRemoveCitacao(task.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <input 
                type="text" 
                id="novaCitacao" 
                placeholder="Nova citação..." 
                value={novaCitacao} 
                onChange={(e) => setNovaCitacao(e.target.value)} 
            />
            <button onClick={handleAddCitacao}>Adicionar Citação</button>
        </section>
    );
}

export default Todolist;
