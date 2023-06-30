import './TodoFooter.css'
import { useState } from 'react';

const TodoFooter = props => {
    const { uncompletedCount, completedCount, showAll, showCompleted, showUncompleted } = props;
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div id="todo-footer">
            <span>{uncompletedCount} items left</span>
            <div className="todo-filter-container">
                <div className={`todo-filter-select ${selectedFilter === 'all' ? 'selected' : ''}`}
                onClick={() => {
                    handleFilterClick('all');
                    showAll();
                }}>All</div>
                <div
                className={`todo-filter-select ${selectedFilter === 'active' ? 'selected' : ''}`}
                onClick={() => {
                    handleFilterClick('active');
                    showUncompleted();
                }}>Active</div>
                <div
                className={`todo-filter-select ${selectedFilter === 'completed' ? 'selected' : ''}`}
                onClick={() => {
                    handleFilterClick('completed');
                    showCompleted();
                }}
                >Completed</div>
            </div>
            {completedCount > 0 ? (
                <div id="delete-all-todo" onClick={props.deleteCompletedItems}>Clear completed</div>
            ) : (
                <div id="delete-all-todo" className="is-invisible" onClick={props.deleteCompletedItems}>Clear completed</div>
            )}
        </div>
      );
}

export default TodoFooter;