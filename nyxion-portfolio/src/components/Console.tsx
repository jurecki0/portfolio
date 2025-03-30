'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

const Console = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const consoleRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleCommand = () => {
        if (input.trim()) {
            const commandOutput = executeCommand(input);

            // Only add to history if the command is not 'clear'
            if (input.toLowerCase() === 'clear') {
                setHistory([]); // Clear history without output
            } else {
                setHistory((prevHistory) => [...prevHistory, `$ ${input}`, commandOutput]);
            }

            setInput(''); // Clear the input field
        }
    };

    const executeCommand = (command: string) => {
        switch (command.toLowerCase()) {
            case 'help':
                return 'Available commands: help, clear, run, man, home, list';
            case 'clear':
                return ''; // No output for `clear`
            case 'home':
                router.push('/');
                return '';
            case 'list projects':
                return 'Project 1 \n Project 2 \n Project 3';
            case 'run':
                return 'You forgot to add a project name!';
            case 'run project1':
                router.push('/projects/project1');
                return '';
            case 'ls':
                return 'Desktop  Documents  Downloads  Pictures';
            case 'man run':
                return 'Use "run" with a project name to run it.';
            default:
                return `bash: ${command}: command not found`;
        }
    };

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className="fixed top-26 left-0 right-0 bg-black text-green-500 p-4 font-mono shadow-lg rounded-lg max-w-full mx-auto w-[90%] h-[60vh]">
          {/* Console Output */}
          <div className="flex flex-col space-y-2 overflow-y-auto max-h-[80vh]" ref={consoleRef}>
            {history.map((line, idx) => (
              <div key={idx} className="text-sm">{line}</div>
            ))}
          </div>
    
          {/* Command Input */}
          <div className="flex items-center mt-4">
            <span className="text-green-500">user@linux:~$</span>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
              className="bg-transparent border-none focus:outline-none ml-2 text-green-500 w-full"
              placeholder="Type a command..."
            />
          </div>
        </div>
      );
    };
    
    export default Console;