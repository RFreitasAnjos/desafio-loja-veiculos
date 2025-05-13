export default function Button({ nome, idade, onClick }) {
    const handleSendData = async () => {
        const data = {
            nome: nome,
            idade: idade,
        };

        try {
            const response = await fetch('http://localhost:3000/api/saudacao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return (
      <div>
        <h1>Olá, {nome}!</h1>
      </div>
    );
  }