import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/statistics" component={Statistics} />
                    <Route path="/resources" component={Resources} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
```

Implement the donation form component (`src/components/Donate.js`):

```jsx
import React, { useState } from 'react';
import axios from 'axios';

function Donate() {
    const [formData, setFormData] = useState({
        amount: '',
        type: '',
        location: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/donations', formData);
            alert('Donation submitted successfully!');
            setFormData({
                amount: '',
                type: '',
                location: ''
            });
        } catch (error) {
            alert('Error submitting donation. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Amount:</label>
                <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    required
                />
            </div>

            <div className="form-group">
                <label>Type:</label>
                <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    required
                >
                    <option value="">Select type</option>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="monetary">Monetary</option>
                </select>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Donation'}
            </button>
        </form>
    );
}

export default Donate;
