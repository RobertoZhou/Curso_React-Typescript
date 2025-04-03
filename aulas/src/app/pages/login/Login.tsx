import { Console } from "console";
import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = () => {
        console.log(email)
        console.log(senha);
    }

    return (
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </label>

                <label>
                    <span>Senha</span>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="password" />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}