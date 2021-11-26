export async function SendData(data = {"func": "disp", "x": 7, "y": "a"}) {
    fetch(`http://${process.env.WS_IP}:${process.env.WS_PORT}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) 
    }).then(data => { return data.json() })
};