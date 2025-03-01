import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from 'react-awesome-reveal';

const EmailForm = () => {
    const [formData, setFormData] = useState<{ nome: string; email: string; assunto: string; mensagem: string }>({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [isSent, setIsSent] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    const [isError, setIsError] = useState<boolean>(false);
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
    
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const errorVideoRef = useRef<HTMLVideoElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            'service_x4ku9gh',  // service ID
            'template_anjjjpq',  // template ID
            formData,
            'knyaUvJ_eCpgcJXpX'   // public key
        )
            .then(() => {
                setIsLoading(false);
                setIsSent(true);
                setTimeout(() => {
                    setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
                }, 3000);
            })
            .catch((error: any) => {
                setIsLoading(false);
                setIsError(true)
                console.error('Erro:', error);
            });
    };

    useEffect(() => {
        if (isSent && videoRef.current) {
            videoRef.current.onended = () => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                    setIsSent(false)        
                }, 4000);
            };
        }

        if (isError && errorVideoRef.current) {
            errorVideoRef.current.onended = () => {
                setShowErrorMessage(true);
                setTimeout(() => {
                    setShowErrorMessage(false);
                    setIsError(false)        
                }, 5000);
            };
        }
    }, [isSent, isError]);

    return (
        <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-4 text-xl font-[nunito]'>Entre em contato</h4>
        {isSent ? (
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center p-8 border border-white rounded-3xl'>
                    <video ref={videoRef} autoPlay className='w-32 h-32'>
                        <source src='/done-animation.webm' type='video/webm' />
                        Seu navegador não suporta vídeos no formato WebM.
                    </video>
                    {showSuccessMessage && <Fade duration={1000}><p className='mt-4 text-lg font-medium font-[nunito] transition duration-500 text-white'>E-mail enviado com sucesso!</p></Fade>}
                </div>
            </div>
        ) : isError ? (
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center p-8 border border-white rounded-3xl'>
                    <video ref={errorVideoRef} autoPlay className='w-32 h-32'>
                        <source src='/error-animation.webm' type='video/webm' />
                        Seu navegador não suporta vídeos no formato WebM.
                    </video>
                    {showErrorMessage && <Fade duration={1000}><p className='mt-4 text-center text-lg font-medium font-[nunito] transition duration-500 text-white'>Oops! Algo deu errado.</p></Fade>}
                    {/* The error message will appear after the animation ends */}
                </div>
            </div>
        ) : (
            <Fade duration={1000}>
            <form 
                className='font-[comfortaa] font-light text-white items-center justify-center p-8 border border-white rounded-3xl gap-8 flex flex-col'
                onSubmit={sendEmail}
            >
                <label htmlFor='Name'>
                    <input 
                        className='w-64 pb-2 border-b border-white md:w-72 indent-1 outline-0' 
                        type='text' 
                        name='nome' 
                        placeholder='Nome' 
                        value={formData.nome} 
                        onChange={handleChange} 
                        required
                    />
                </label>
                <label htmlFor='Email'>
                    <input 
                        className='w-64 pb-2 border-b border-white md:w-72 indent-1 outline-0' 
                        type='email' 
                        name='email' 
                        placeholder='E-mail' 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                </label>
                <label htmlFor='Subject'>
                    <input 
                        className='w-64 pb-2 border-b border-white md:w-72 indent-1 outline-0' 
                        type='text' 
                        name='assunto' 
                        placeholder='Assunto' 
                        value={formData.assunto} 
                        onChange={handleChange} 
                        required
                    />
                </label>
                <label htmlFor='Message'>
                    <input 
                        className='w-64 pb-2 border-b border-white md:w-72 indent-1 outline-0' 
                        type='text' 
                        name='mensagem' 
                        placeholder='Mensagem' 
                        value={formData.mensagem} 
                        onChange={handleChange} 
                        required
                    />
                </label>
                <button 
                    type='submit' 
                    className='px-10 py-3 transition duration-500 border border-white rounded-2xl hover:bg-white hover:text-black' 
                    disabled={isLoading}
                >
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
            </Fade>
        )}
    </div>
    );
};

export default EmailForm;
