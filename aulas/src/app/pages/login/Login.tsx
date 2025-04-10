import { Console } from "console";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    //  const inputSenhaRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // useEffect(() => {
    //     if(window.confirm('Você é homem?')) {
    //         console.log("homem");
    //     } else {
    //         console.log("Mulher");
    //     } 
    // }, []);

    // useEffect(() => {
    //     console.log(email);
    // }, [email]);

    // useEffect(() => {
    //     console.log(senha);
    // }, [senha]);

    const emailLength = useMemo(() => {
        return (
            email.length * 10000
        )
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(senha);
    }, [email, senha]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputSenhaRef.current?.focus()} />

                <InputLogin
                type="password"
                    label="Senha"
                    value={senha}
                    onChange={newValue => setSenha(newValue)} />

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}