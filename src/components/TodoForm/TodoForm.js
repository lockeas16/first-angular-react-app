import React from "react";

const TodoForm = ({ value, priority, error, handleChange, handleSubmit }) => (
  <div>
    <h3>Agrega un ToDo</h3>
    <form className="uk-text-left" onSubmit={handleSubmit}>
      <fieldset className="uk-fieldset">
        <div className="uk-margin">
          <label>Tarea</label>
          <input
            className={`uk-input ${error ? "uk-form-danger" : ""}`}
            type="text"
            placeholder="todo"
            name="value"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="uk-margin">
          <label>Prioridad</label>
          <select
            className="uk-select"
            value={priority}
            name="priority"
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecciona la prioridad
            </option>
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
        </div>
      </fieldset>
      <button className="uk-button uk-button-primary">Agregar</button>
    </form>
    {/* error es el que hara que se retorno o no el div con el error*/}
    {error && (
      <div className="uk-alert-danger" uk-alert="true">
        <p>{error}</p>
      </div>
    )}
  </div>
);

export default TodoForm;
