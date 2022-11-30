import { DataProps } from "../App";

export const UserForm = ({ data, updateFielHandler }: DataProps) => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFielHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFielHandler("email", e.target.value)}
        />
      </div>
    </form>
  );
};
