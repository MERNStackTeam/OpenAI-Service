// Reference Link : https://dzone.com/articles/building-your-own-ai-chatbot-with-react-and-chatgp
import axios, { AxiosResponse } from 'axios';

// Define the message type
type Message = {
    role: 'user' | 'bot';
    text: string;
};

// Assuming messages and setMessages are defined elsewhere
let messages: Message[] = [];
const setMessages = (newMessages: Message[]) => {
    messages = newMessages;
};

let input = ''; // Assuming input is declared and set elsewhere
const setInput = (newInput: string) => {
    input = newInput;
};

const handleSendMessage = async (): Promise<void> => {
    if (input.trim() === '') return;

    // Add the user message to the messages array
    setMessages([...messages, { role: 'user', text: input }]);

    try {
        // Send the user message to the ChatGPT API
        const response: AxiosResponse = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: `User: ${input}\nChatGPT:`,
                max_tokens: 150,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer YOUR_API_KEY',
                },
            }
        );

        // Extract the bot response from the API response
        const botResponse: string = response.data.choices[0].text;

        // Add the bot response to the messages array
        setMessages([...messages, { role: 'bot', text: botResponse }]);

        // Clear the input field
        setInput('');
    } catch (error: any) {
        console.error('Error sending message:', error);
    }
};
