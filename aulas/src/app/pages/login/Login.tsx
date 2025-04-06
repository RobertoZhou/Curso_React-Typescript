import { Console } from "console";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export const Login = () => {
    const inputSenhaRef = useRef<HTMLInputElement>(null);

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

                <label>
                    <span>Email</span>
                    <input onKeyDown={e => e.key === 'Enter' ? inputSenhaRef.current?.focus() : undefined} value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </label>

                <label>
                    <span>Senha</span>
                    <input ref={inputSenhaRef}  value={senha} onChange={e => setSenha(e.target.value)} type="password" />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}