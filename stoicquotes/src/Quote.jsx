import React, { useState } from 'react';

function Quote() {
    const [quote, setQuote] = useState('');

    const fetchQuote = async () => {
        const response = await fetch('https://api.themotivate365.com/stoic-quote');
        const data = await response.json();
        setQuote(data);
    }
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <header className="py-8">
                <h1 className="text-4xl font-bold text-center">Stoic Quotes</h1>
            </header>
            <main className="max-w-4xl mx-auto px-4">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <p className="text-2xl font-bold text-center">{quote.quote}</p>
                    <p className="text-xl text-center">{"~ "+ quote.author}</p>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full" onClick={fetchQuote}>Get Quote</button>
                </div>
            </main>
            <footer className="text-center text-gray-400 py-4">
                <p>Created by <a href="https://github.com/AkshatT5" className="underline">AkshatT5</a></p>
            </footer>
        </div>
    );
}
export default Quote;
